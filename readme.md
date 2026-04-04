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

# Merge branch test/playwright-init dengan develop

- Pindah ke branch develop
  - git checkout develop
- Ambil update terbaru (optional tapi recomended)
  - git pull origin develop
- Merge branch
  - git merge test/playwright-init
    - menggabungkan semua commit dari branch test ke develop
    - history tetap aman (tidak overwrite)
- Push ke github
  - git push origin develop

# Step Ringkas

- git checkout develop
- git pull origin develop
- git merge test/playwright-init
- git push origin develop

# 🔥 Alternatif (Cara Lebih “Professional Team”)

Biasanya di perusahaan:

👉 TIDAK langsung merge manual 👉 Tapi pakai Pull Request (PR)

Flow-nya:

- Push branch kamu (sudah ✔️)
- Buka GitHub
- Klik: 👉 Compare & Pull Request
- Base: develop
- Compare: test/playwright-init
- Klik: 👉 Create Pull Request
- Merge

```txt
# Kapan HARUS pull / merge lagi?

Ini penting banget 👇

🟡 Kasus 1: Kamu kerja sendirian (seperti sekarang)

👉 Tidak perlu apa-apa
👉 Fokus coding saja 🚀

🔴 Kasus 2: Ada update di develop (tim lain push)

Misalnya:

temanmu push fitur baru
ada perubahan config
ada fix CI/CD

👉 Maka kamu perlu update branch kamu:

git checkout test/e2e-auth-flow
git pull origin develop

👉 Ini akan:

mengambil perubahan dari develop
merge ke branch kamu
🔥 Alternatif yang Lebih “Clean” (Advanced)

Kalau mau lebih rapi:

git fetch origin
git rebase origin/develop

👉 Ini bikin history lebih clean (dipakai di tim senior)

🎯 Rule Sederhana (Pegangan Kamu)

👉 Setelah buat branch:

LANGSUNG CODING ✅

👉 Kalau develop berubah:

SYNC DULU 🔁
🚀 Workflow Ideal Kamu Sekarang
1. checkout develop
2. pull latest
3. create branch baru
4. coding 🔥
5. commit
6. push
7. pull request → develop
💡 Insight Penting (Level SDET / Remote)

Kesalahan umum:
❌ terlalu sering merge tanpa perlu
❌ takut coding karena belum “sync”

👉 Padahal:

branch itu snapshot dari waktu tertentu
kamu aman selama tidak konflik
```

- npm i --save mailslurp-client
- create a .env file
-
