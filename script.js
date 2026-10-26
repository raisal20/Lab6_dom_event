// ==========================================
// LATIHAN 1 & 2: Mengubah Teks & Event Click
// ==========================================
const judul = document.getElementById("judul");
const pesan = document.getElementById("pesan");
const tombolAksi = document.getElementById("tombolAksi");

judul.textContent = "Belajar JavaScript DOM";
pesan.textContent = "Konten berhasil diubah oleh JavaScript.";

tombolAksi.addEventListener("click", function () {
  pesan.textContent = "Tombol diklik pada " + new Date().toLocaleTimeString();
});

// ==========================================
// LATIHAN 3: Mengubah Kelas dan Gaya CSS
// ==========================================
const tombolGaya = document.getElementById("tombolGaya");
const teksGaya = document.getElementById("teksGaya");

tombolGaya.addEventListener("click", function () {
  teksGaya.classList.toggle("highlight");
  teksGaya.classList.toggle("teks-besar");
});

// ==========================================
// LATIHAN 4: Event Input & Penghitung Karakter
// ==========================================
const namaInput = document.getElementById("namaInput");
const jumlahKarakter = document.getElementById("jumlahKarakter");

namaInput.addEventListener("input", function () {
  jumlahKarakter.textContent = namaInput.value.length;
});

// ==========================================
// LATIHAN 5 & EKSPERIMEN MANDIRI 2: Validasi Form
// ==========================================
const form = document.getElementById("formPendaftaran");
const pesanForm = document.getElementById("pesanForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const nama = document.getElementById("nama").value.trim();
  const email = document.getElementById("email").value.trim();
  const usiaInput = document.getElementById("usia").value;
  const usia = Number(usiaInput);
  const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Eksperimen Mandiri 2: Validasi nama minimal 3 karakter
  if (nama.length < 3) {
    pesanForm.textContent = "Nama minimal harus terdiri dari 3 karakter.";
    pesanForm.style.color = "red";
  } else if (!polaEmail.test(email)) {
    pesanForm.textContent = "Masukkan email yang valid.";
    pesanForm.style.color = "red";
  } else if (
    usiaInput === "" ||
    !Number.isInteger(usia) ||
    usia < 17 ||
    usia > 100
  ) {
    pesanForm.textContent = "Usia harus berupa bilangan bulat 17–100.";
    pesanForm.style.color = "red";
  } else {
    pesanForm.textContent = "Validasi berhasil. Form siap diproses.";
    pesanForm.style.color = "green";
    form.reset();
  }
});

// ==========================================
// LATIHAN 6 & EKSPERIMEN MANDIRI 1: To-do List + Tombol Hapus
// ==========================================
const inputTugas = document.getElementById("inputTugas");
const tambahTugas = document.getElementById("tambahTugas");
const daftarTugas = document.getElementById("daftarTugas");
const pesanTugas = document.getElementById("pesanTugas");

tambahTugas.addEventListener("click", function () {
  const teks = inputTugas.value.trim();

  if (teks === "") {
    pesanTugas.textContent = "Tulis tugas terlebih dahulu.";
    return;
  }

  const item = document.createElement("li");
  const label = document.createElement("span");
  const selesai = document.createElement("button");
  const tombolHapus = document.createElement("button"); // Eksperimen Mandiri 1

  label.textContent = teks + " ";
  selesai.type = "button";
  selesai.textContent = "Tandai selesai";

  // Setup Tombol Hapus (Eksperimen Mandiri 1)
  tombolHapus.type = "button";
  tombolHapus.textContent = "Hapus";
  tombolHapus.style.marginLeft = "8px";

  selesai.addEventListener("click", function () {
    item.classList.toggle("selesai");
    selesai.textContent = item.classList.contains("selesai")
      ? "Batalkan selesai"
      : "Tandai selesai";
  });

  // Aksi klik tombol hapus
  tombolHapus.addEventListener("click", function () {
    item.remove();
    pesanTugas.textContent = "Tugas dihapus.";
  });

  item.append(label, selesai, tombolHapus);
  daftarTugas.appendChild(item);

  inputTugas.value = "";
  pesanTugas.textContent = "Tugas ditambahkan.";
  inputTugas.focus();
});

// ==========================================
// EKSPERIMEN MANDIRI 3: Event Change pada Dropdown Sesi
// ==========================================
const pilihanSesi = document.getElementById("pilihanSesi");
const infoSesi = document.getElementById("infoSesi");

pilihanSesi.addEventListener("change", function () {
  const sesiDipilih = pilihanSesi.value;
  if (sesiDipilih === "") {
    infoSesi.textContent = "-";
  } else {
    infoSesi.textContent = sesiDipilih;
  }
});

// ==========================================
// EKSPERIMEN MANDIRI 4: Toggle Sembunyikan/Tampilkan Paragraf
// ==========================================
const tombolToggleParagraf = document.getElementById("tombolToggleParagraf");
const paragrafTarget = document.getElementById("paragrafTarget");

tombolToggleParagraf.addEventListener("click", function () {
  paragrafTarget.classList.toggle("sembunyi");

  if (paragrafTarget.classList.contains("sembunyi")) {
    tombolToggleParagraf.textContent = "Tampilkan Paragraf";
  } else {
    tombolToggleParagraf.textContent = "Sembunyikan Paragraf";
  }
});
