# Agustinus Henan React-B Mini Project
# SetupKu

## About Project
SetupKu adalah aplikasi yang membantu pengguna membangun setup laptop/PC mereka dengan menyediakan berbagai macam perlengkapan setup mulai dari mouse, keyboard, headset, monitor, hingga kursi gaming. Pengguna dapat dengan mudah mencari dan membeli produk yang mereka inginkan dengan harga yang kompetitif.

## Features (MVP)
- landing page dinamis (GET) akan ada card/list produk 
- Login dinamis untuk (user), untuk admin sudah di set default
- detail barang dan keranjang
- pembayaran lewat admin WA 
- tambahkan barang untuk admin (CRUD) 
- lihat list barang
- CS terkait pembelian (ai untuk chat balas otomatis)

(opsional)
- profile
- Register

### User
- landing page dinamis (GET) akan ada card/list produk 
- Login dinamis (user)
- Register
- detail product 
- keranjang
- checkout

### Admin
- Create new product (admin)
- View product, edit product, and delete product (admin)

## Tech Stacks
daftar tools dan framework:
- Node
- Vs code
- Git bash
- Github
- Postman
- Cursor
- React
- Tailwind

## Live App Demo
[Link demo app](https://agustinus-henan-react-b-mini-project.vercel.app/)

## Setup 
Pada homepage user akan melihat product yang ada di website ini dan user wajib login apabila ingin melihat detail product. Dan apabila belum ada akun
maka user bisa daftarkan akun baru. dan setelah login user klik product card di homepage maka akan diarahkan ke halaman product detail di pada halaman ini user dapat melihat detail 
product dan dapat ditambahkan ke keranjang. Setelah itu pada cartpage user dapat melakukan chechout dari product yang ditambahkan. Dan dihalaman checkout itu user bisa pilih delivery method dan klik beli maka semua pesanan itu akan masuk ke telegram bot.