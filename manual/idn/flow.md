# FLOW WEB APP LIFTING WEIGHT #

Web App Lifiting memiliki 2 flow secara garis besar yaitu user flow dan admin flow.


## ======== USER FLOW ========= ##
### Auth ###
Dimulai dengan auth terlebih dahulu

#### General Security and Strategy ####
**CSRF Protection with token**


**Refresh Token Rotation**
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



#### New User Auth ####
**Register with Credentials**
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
    - User diminta menyelesaikan *challenge* reCaptcha v2;
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

**Login with Credentials**
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

**Register and Login with Google OAuth**
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



### Business Logic ###
#### New User ####
1. User yang telah registrasi dan login dapat memilih plan membership:
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
        [`isSubscribed: true, plan: 'weekly', isDuration: 'XXXsec' tier: 'casual', isVerified: true, userId: 'cuuid', signature: "encrypted_hash, startDate: 'some-date', endDate: 'some-date`]; yang dapat di simpan ke local phone;
        * Stripe akan membuatkan invoice yang akan tersimpan ke history user dan admin;
    *** Kemungkinan skenario ***
    - Jika user membeli lebih dari 1 plan di dalam satu akun maka akan ada dua plan yang terdaftar
    atau lebih - maksimal 5 plans;
        * jika user sudah mencapai limit plan maka semua tombol subscribe akan *disabled*
    - Jika plan sudah expired maka akan lanjut ke langkah ***renew plan***;
    *** Skenario Abusive - maks 3 x 1 min ***
    Jika user melakukan spam untuk pembelian maka tandai IP Address
    sebagai spammer pada rute terkait.



    - User memilih addon - ditambahkan ke keranjang(optional)
        * Whey protein
        *             

#### Existing User ####