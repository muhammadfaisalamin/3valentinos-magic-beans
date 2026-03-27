import { test, expect } from '@playwright/test';

import * as products from './pages/Products';
import * as cart from './pages/Cart';
import * as checkout from './pages/Checkout';
import * as contact from './pages/Contact';

test('should complete product flow from selection to checkout', async ({
	page,
}) => {
	await page.goto('/products');
	let addedProduct: Awaited<ReturnType<typeof products.addProductToCart>> =
		{} as any;

	// test.step 1 'add product to cart'
	await test.step('add product to cart', async () => {
		addedProduct = await products.addProductToCart(page, 1);
	});

	// test.step 2 'goto checkout page'
	await test.step('goto checkout page', async () => {
		await page
			.locator('[data-test-id="header-cart-button"]')
			.getByRole('button')
			.click();

		await cart.assertProduct(page, addedProduct.name!);
		const subtotal = await cart.getSubtotal(page);
		expect(subtotal).toBe(addedProduct.price);
		await page.getByRole('button', { name: 'Proceed to Checkout' }).click();
	});

	// test.step 3 'complete checkout information'
	await test.step('complete checkout information', async () => {
		await checkout.addContactInfo(page);
		await checkout.addShippingAddress(page);
		await checkout.addPaymentInfo(page);
		await checkout.placeOrder(page);
	});

	let orderId: string | null;

	// test.step 4 'get the orderId'
	await test.step('get the orderId', async () => {
		const orderWrapper = page.getByText('Your Order ID is:').locator('..');
		orderId = await orderWrapper.getByRole('paragraph').nth(1).textContent();
	});

	// test.step 5 'open the contact page'
	await test.step('open the contact page', async () => {
		await page.getByRole('button', { name: 'Track Your Order' }).click();
		await contact.fillOrderIdAndEmail(
			page,
			orderId!,
			checkout.testValues.email,
		);
		await contact.clickTrackOrder(page);
	});

	// test.step 6 'check if ordered item is returned'
	await test.step('check if ordered item is returned', async () => {
		const firstOrder = page.getByText(addedProduct.name!);
		await expect(firstOrder).toBeVisible();
	});
});
