# npm command lists

- git init
- git add .
- git commit -m "Initial commit: Playwright project setup"
- git remote add origin
  https://github.com/muhammadfaisalamin/3valentinos-magic-beans.git
- git branch -M main
- git push -u origin main
- git switch -c develop
  - buat branch develop
  - langsung pindah ke sana
- git push -u origin develop
  - Supaya branch ini ada di github juga
- git switch -c test/playwright-init
  - Pastikan kamu dari develop (ini penting 🔥)
- git push -u origin test/playwright-init
- git branch

# Perintah untuk Push ke GitHub

✅ 1. Pastikan kamu di branch yang benar

(should be: test/playwright-init)

git branch

Kalau belum:

git switch test/playwright-init

✅ 2. Tambahkan file ke staging git add .

👉 atau kalau mau spesifik:

git add pages/Cart.ts

✅ 3. Commit perubahan

Gunakan message yang proper (biar kelihatan profesional 🔥)

git commit -m "feat: add Cart page for playwright testing"

✅ 4. Push ke GitHub git push

👉 Karena sebelumnya sudah pakai -u origin, cukup git push saja

Kalau belum pernah push:

git push -u origin test/playwright-init

🎯 Alur Singkat git add . git commit -m "feat: add Cart page for playwright
testing" git push 🔍 Setelah Push

👉 Buka GitHub repo kamu 👉 Kamu akan lihat:

file pages/Cart.ts sudah muncul ada tombol Compare & pull request
