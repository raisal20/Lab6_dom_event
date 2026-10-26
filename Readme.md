## PERTANYAAN EVALUASI

1. Apa yang dimaksud dengan DOM dan apa manfaatnya?
   DOM (Document Object Model) adalah representasi struktur dokumen HTML dalam bentuk objek yang dapat diakses JavaScript. Manfaatnya adalah memilih elemen, mengubah teks, mengatur tampilan, dan merespons tindakan pengguna.
2. Apa perbedaan getElementById(), querySelector(), dan querySelectorAll()?

- getElementById() memilih elemen berdasarkan ID.
- querySelector() memilih elemen pertama yang cocok dengan selector CSS.
- querySelectorAll() memilih semua elemen yang cocok dengan selector CSS.

3. Apa fungsi addEventListener() dan sebutkan tiga contoh event?
   addEventListener() digunakan untuk menghubungkan suatu event dengan fungsi yang dijalankan ketika event terjadi.

Tiga contohnya adalah click (klik), input (perubahan input), dan submit (pengiriman form). 4. Mengapa event.preventDefault() digunakan pada event submit form?
Untuk mencegah tindakan bawaan browser, seperti pengiriman form yang menyebabkan halaman dimuat ulang, sehingga data dapat diperiksa terlebih dahulu menggunakan JavaScript. 5. Apa perbedaan textContent dan innerHTML dari sisi penggunaan dan keamanan?

- textContent digunakan untuk membaca atau mengubah teks biasa tanpa memprosesnya sebagai HTML.
- innerHTML digunakan untuk membaca atau mengubah isi HTML, termasuk markup.
  textContent lebih aman untuk menampilkan input pengguna karena teks tidak diproses sebagai markup HTML.

6. Bagaimana classList.toggle() membantu mengubah tampilan elemen?
   classList.toggle() menambahkan class jika belum ada dan menghapusnya jika sudah ada. Dengan demikian, tampilan elemen dapat diubah secara bergantian menggunakan aturan CSS.
7. Sebutkan minimal tiga skenario pengujian validasi form.
8. Semua kolom dikosongkan — form harus ditolak.
9. Format email tidak valid — pesan kesalahan ditampilkan.
10. Usia di bawah 17 tahun — form harus ditolak.
11. Nama kurang dari tiga karakter — form harus ditolak.
12. Semua data valid — pesan keberhasilan ditampilkan.
