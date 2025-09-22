# FLOW WEB APP LIFTING WEIGHT #

Web App Lifiting memiliki 2 flow secara garis besar yaitu user flow dan admin flow.


## ======== USER FLOW ========= ##
### Auth ###
Dimulai dengan auth terlebih dahulu



#### 🔐 General Security and Strategy  ####
**CSRF Protection with token** </br>


**Refresh Token Rotation** </br>
Ini adalah skenario *refresh token rotation*. Semua rute dengan *METHOD* yang 
perlu autentikasi akan menggunakan *rotation* dengan Axios Interceptor. 
Di dalam skenario ini setiap kali Access Token kadaluarsa maka Refresh Token akan 
meminta token baru kepada server, server akan memperbarui Refresh Token yang tersimpan 
di database (rotation) dan maximum 10 concurent per-user, membuat Access Token 
dan Refresh Token dan menyimpan sebagai cookie(s) baru untuk dikirim ke user;
  *** Kemungkinan Skenario ***
  - Jika Refresh Token kadaluarsa maka otomatis logout akun user;
  - Jika *payload* Refresh Token yang dikirim tidak cocok dengan yang 
    di database maka server akan tolak permintaan dan pengguna diminta
    masuk ulang;
    *** Skenario Abusive - maks 20 x 1 min ***
    Jika user melakukan request ke rute Refresh Token Rotation maka tandai IP Address
    sebagai spammer pada rute terkait.

**Concurrent Access Limit and Renew QR code** </br>
Jika suatu waktu kode QR unik user dicuri maka perlu *concurrent access limit* yaitu kode 
hanya bisa di scan setiap 5x setiap 1 menit. User juga dapat melakukan renew QR code yang
akan mengubah *field* createdAt (saja) dan field lain tetap sama dan setiap scan kode QR 
akan dicatat ke log;


#### 👮‍♂️ User Auth ####
**Register with Credentials** </br>
1. User isi form registrasi berisi name, email, password, *confirm* password, tanggal lahir.
    - Zod akan memvalidasi semua input;
        * jika input form tidak sesuai maka zod akan menolak;
        * jika input form sesuai maka lanjut ke langkah berikutnya;
    - Server akan check apakah email sudah ada;
        * jika email sudah ada maka tolak pendaftaran;
        * jika email belum ada maka lanjut ke langkah berikutnya;
    - Server akan membuat hal-hal dibawah:
        * akun user
        * verifikasi email dengan kode OTP 
        * cookie verifikasi email untuk *trigger* tombol kirim email baru;
        * lanjut ke langkah berikutnya;
    - App akan mengalihkan user ke halaman verifikasi akun;
    *** Skenario Abusive - maks 5 x 1 min ***
    Jika user melakukan spam *submit* form registrasi maka tandai IP Address
    sebagai spammer pada rute terkait.

2. User menerima email berisi kode OTP yang dapat digunakan untuk mengisi kolom kode OTP;

3. User mengisi kolom kode OTP dengan kode yang diberikan di email;
    - User diminta menyelesaikan *challenge* reCaptcha v2 saat klik tombol *submit*;
        * jika *challenge* gagal maka akan otomatis ke-*reset*;
        * jika berhasil maka lanjut ke langkah berikutnya;
    - Jika kode OTP salah atau kadaluarsa maka;
        * user klik tombol kirim email baru
            - server akan buat kode OTP baru;
            - server mengirim kode baru ke email user;
        * lanjut ke langkah berikutnya atau ulang skenario ini;
    - Kode OTP yang dimasukan benar dan status akun user terverifikasi;

4. App mengalihkan user ke halaman login, lanjut ke langkah ***Login***
    *** Skenario Abusive - maks 5 x 1 min ***
    Jika user melakukan spam *submit* form OTP maka tandai IP Address
    sebagai spammer pada rute terkait.

**Login with Credentials** </br>
1. User isi form masuk berisi email dan password;
    - Zod akan memvalidasi semua input;
        * jika format email salah maka beri pesan error;
        * jika format password salah maka beri pesar error;
        * jika format email dan password benar maka lanjut ke langkah berikutnya;
    - Server akan memverifikasi data dari input yang diterima;
        * jika email tidak sesuai maka beri respon email salah;
        * jika email tidak terdaftar beri respon email tidak ditemukan;
        * jika password salah maka beri respon password salah;
        * jika data yang dimasukan benar maka lanjut ke langkah berikutnya 
          atau jika data yang dimasukan salah maka user harus mengisi ulang form masuk;
    - Server akan memberikan:
        * Access Token 30m (accessToken) dalam bentuk cookie HTTP only - secure - strict;
        * Refresh Token 7d (refreshToken) dalam bentuk cookie HTTP only - secure - strict;
        * CSRF token (csrfToken) dalam bentuk cookie standar;
        * Data umum berisi nama, email, id;
    - App akan mengalihkan user ke halaman Dashboard;
    *** Skenario Abusive - maks 10 x 1 min ***
    Jika user melakukan spam *submit* form masuk maka tandai IP Address
    sebagai spammer pada rute terkait.

**Register and Login with Google OAuth** </br>
Ini adalah metode masuk *passwordless* dimana user tidak perlu memasukan form registrasi
atau login, cukup klik tombol Login with Google;
1. User klik tombol Login with Google dan ikuti alur;
    - Jika Login gagal maka ulangi kembali;
    - Jika Login pertama berhasil maka buat akun user dengan status terverifikasi;
    - Jika Login selanjutnya maka user akan mendapatkan token(s) seperti login biasa;
2. App mengalihkan user ke halaman Dashboard;
    *** Kemungkinan skenario ***
    - Jika user sudah registrasi dengan credentials dan masuk(pertama atau seterusnya) 
    dengan Google dan email yang sama maka akun credentials akan otomatis terhubung ke Google;
    - Jika user masuk (pertama dan seterusnya) dengan Google maka ia tidak bisa registrasi credentials
    dengan akun email yang sama karena email sudah ada;
    *** Skenario Abusive - maks 10 x 1 min ***
    Jika user melakukan spam *submit* form masuk maka tandai IP Address
    sebagai spammer pada rute terkait.

**Forgot Password - Credentials Login only** </br>
Saat user ingin mengubah password, user dapat klik tombol Forgot Password di Halaman masuk 
atau di halaman Setting;
1. User diminta memasukkan email ke kolom email
    - Zod akan memvalidasi format email;
        * jika format salah maka beri respon error;
        * jika format benar maka lanjutkan ke langkah berikutnya;
2. User klik tombol *sumbit* dan *challenge* reCaptcha muncul;
    - User diminta menyelesaikan *challenge* reCaptcha v2;
        * jika *challenge* gagal maka akan otomatis ke-*reset*;
        * jika berhasil maka lanjut ke langkah berikutnya;
    - Server menerima email dan mencocokan dengan email user;
        * jika email tidak cocok maka beri respon email salah;
        * jika email cocok maka server buat email berisi link
        reset password dengan user Id sebagai identifier atau ulangi skenario ini;
        * lanjut ke langkah berikutnya;
    - Server mengirim email berisi link reset password ke user yang valid selama 20m;
3. User klik link dan app mengalihkan user ke halaman khusus reset password dengan identifier;
    *** Skenario Abusive - maks 3 x 60 min ***
    Jika user melakukan spam *submit* form masuk maka tandai IP Address
    sebagai spammer pada rute terkait.


**Reset Password** </br>
Setelah user klik link Reset Password maka user harus mengisi password baru dan konfirmasi 
dalam 20 menit;
1. User mengisi kolom password dan Zod akan memvalidasi;
    - Jika format password salah maka beri respon error;
    - Jika format password benar maka lanjut ke langkah berikutnya;
2. User mengisi kolom konfirmasi password dan zod akan memvalidasi;
    - Jika password tidak sesuai maka aksi tidak dapat dilanjutkan sampai password cocok;
    - Jika password cocok maka server menerima password dan memproses;
    - Semua active session akan otomatis logout;
    - Lanjut ke langkah berikutnya;
3. App akan mengalihkan user kembali ke halaman login;
    *** Skenario Abusive - maks 3 x 60 min ***
    Jika user melakukan spam *submit* form masuk maka tandai IP Address
    sebagai spammer pada rute terkait.


**Account Deactivation** </br>
Saat user memutuskan untuk menonaktifkan akun dia dapat melakukan langkah berikut:
1. User klik diactivate account;
2. Server akan validasi auth token(s) dan *subscriptions*;
    - Jika user masih punya *subcription(s) active maka tolak permintaan dan minta user *cancel subscriptions*;
    - Jika user tidak punya *subcriptions* maka popup konfirmasi hapus akun muncul;
    - User mengisi kolom konfirmasi bertulis "Delete my Account" yang divalidasi oleh zod;
        * Jika user tidak mengisi kolom sesuai dengan tulisan di atas maka aksi tidak bisa dilanjutkan;
        * Jika user mengisi kolom sesuai dengan tulisan di atas maka *payload* akan dikirim ke server;
        * Server mengkonfirmasi *Account Deactivation*;
3. Akun user di nonaktifkan dan app mengalihkan user ke halaman registrasi;


### 📋 Business Logic ###
#### 💲 Subscription plan ####
1. User yang telah registrasi dan login dapat memilih plan membership:
    - Jika belum melakukan registrasi atau login maka saat tombol *subscription* diklik
    app akan mengalihkan user ke halaman masuk;
    - User memilih 1 plan:
        * Daily;
        * Weekly;
            - plan Casual;
            - plan Enthusiast;
        * Monthly;
            - plan Casual;
            - plan Enthusiast;
        * Yearly;
            - plan Casual;
            - plan Enthusiast;
    - User dialihkan ke halaman Stripe untuk melakukan *subscription* dengan;
        * Stripe akan menerima status user dan jumlah *subscription* user;
            - jika user tidak terverifikasi maka tolak pembayaran;
            - jika user sudah mencapai limit *subscription* maka minta user hapus
            *subscription* sebelumnya terlebih dahulu;
        * Jika user membatalkan atau *subscription* gagal maka kembali ke 
        halaman plan membership;
        * Jika *subscription* berhasil maka user akan dialihkan ke halaman
        dashboard dan mendapatkan kode QR unik bernilai `hashedData` yang bernilai:
        [`isSubscribed: true, plan: 'weekly', expiresIn: 'XXXsec' tier: 'casual', isVerified: true, userId: 'cuuid', signature: "encrypted_hash, startDate: 'some-date', endDate: 'some-date, createdAt: 'date-now`]; yang dapat di simpan ke local phone;
        * Stripe akan membuatkan invoice yang akan tersimpan ke history user dan admin;
2. User sukses melakukan *subscription* dan tercatat ke dalam log transaksi;
    *** Kemungkinan skenario ***
    - Jika user membeli lebih dari 1 plan di dalam satu akun maka akan ada dua plan yang terdaftar
    atau lebih - maksimal 5 plans;
      * jika user sudah mencapai limit plan maka semua tombol subscribe akan *disabled*;
    - Jika plan sudah expired maka akan lanjut ke langkah ***renew plan***;
    *** Skenario Abusive - maks 3 x 1 min ***
    Jika user melakukan spam untuk pembelian maka tandai IP Address
    sebagai spammer pada rute terkait.



#### 🔄 Renew Subscription plan ####
Saat sebuah plan milik user sudah kadaluarsa maka kode QR unik tidak akan berlaku lagi maka
user harus *renew subscription* agar bisa mendapatkan kode QR unik baru yang valid;
1. User melakukan scan kode QR unik atau melihat langsung bahwa plan sudah tidak aktif;
    * Scan gagal karena kode sudah tidak valid;
    * Informasi plan menunjukan status tidak aktif;
    * Tombol *renew* muncul;
2. User melakukan *renew subscription*;
    - User dialihkan ke halaman Stripe untuk melakukan *renew subscription* dengan;
        * Stripe akan menerima status user dan jumlah *renew subscription* user;
            - jika user tidak terverifikasi maka tolak pembayaran;
            - jika user sudah mencapai limit *subscription* maka minta user hapus
            *subscription* sebelumnya terlebih dahulu;
        * Jika user membatalkan atau *renew subscription* gagal maka kembali ke 
        halaman plan membership;
        * Jika *renew subscription* berhasil maka user akan dialihkan ke halaman
        dashboard dan mendapatkan kode QR unik baru bernilai `hashedData` yang bernilai:
        [`isSubscribed: true, plan: 'weekly', expiresIn: 'XXXmin' tier: 'casual', isVerified: true, userId: 'cuuid', signature: "encrypted_hash, startDate: 'some-date', endDate: 'some-date', createdAt: 'date-now'`]; yang dapat di simpan ke local phone;
        * Stripe akan membuatkan invoice yang akan tersimpan ke history user dan admin;
    - App mengalihkan user ke halaman Dashboard;
3. *Renew subscription* berhasil dan user dapat mengakses benefit gym kembali;
    *** Skenario Abusive - maks 3 x 1 min ***
    Jika user melakukan spam untuk pembelian maka tandai IP Address
    sebagai spammer pada rute terkait.



#### ❌ Cancel Subscription ####
Saat user ingin membatalkan sebuah *subscription* user akan melakukan hal-hal berikut:
1. User klik *Cancel Subscription* pada sebuah *active plan*;
2. Popup konfirmasi pembatalan muncul;
    - User klik No maka *Cancel Subscription* dibatalakan;
    - User klik Yes, cancel maka *Cancel Subscription* berhasil;
        * server akan cek plan user dan menghapusnya dari database;
        * Kode QR unik jadi invalid;
    - Lanjut ke langkah selanjutnya;
3. Plan akan menghilang dari Dashboard - user berhasil *Cancel Subscription*;


