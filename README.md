<div align="center">

# 🦉 FrostHoot Studio — Official Website
### Official Portfolio, Landing Page & App Verification Hub

[![Status](https://img.shields.io/badge/Status-Live%20Online-success?style=flat-square&logo=githubpages&logoColor=white)](https://frosthootstudio.github.io/)
[![Deployment](https://img.shields.io/badge/Hosting-GitHub%20Pages-blue?style=flat-square&logo=github&logoColor=white)](https://frosthootstudio.github.io/)
[![Tech](https://img.shields.io/badge/Tech-HTML5%20%7C%20Vanilla%20CSS%20%7C%20JS-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](#)
[![Theme](https://img.shields.io/badge/Aesthetic-Cyber%20Dark%20%26%20Glassmorphism-9333EA?style=flat-square)](#)

<br/>

**Situs resmi dan etalase digital FrostHoot Studio oleh Babah. Memuat portofolio aplikasi, arsitektur rekayasa perangkat lunak, verifikasi resmi Google AdMob (`app-ads.txt`), dan kebijakan privasi aplikasi.**

[🌐 Kunjungi Website](https://frosthootstudio.github.io/) • [📱 Showcase Proyek](#-proyek-yang-ditampilkan) • [🛡️ AdMob app-ads.txt](#️-verifikasi-google-admob-app-adstxt) • [📂 Struktur Berkas](#-struktur-berkas)

<br/>

</div>

---

## 📌 Ringkasan

Repository ini mengelola **[frosthootstudio.github.io](https://frosthootstudio.github.io/)**, platform web statis berkecepatan tinggi yang di-host di GitHub Pages. Situs ini berfungsi sebagai representasi publik FrostHoot Studio, menyajikan portofolio aplikasi mobile bernilai tinggi, bukti keahlian rekayasa sistem *Offline-First*, serta memenuhi prasyarat kepatuhan Google Play Store (Kebijakan Privasi & validasi crawler AdMob).

---

## 🎨 Desain & Pengalaman Pengguna (UI/UX)

- **Cyber Dark & Ambient Glow:** Menggunakan palet gelap terkurasi (`#060911`) dengan efek ambient glowing orbs dinamis dan lapisan grid overlay modern.
- **Glassmorphism:** Komponen kartu semi-transparan dengan efek *backdrop-filter blur* halus.
- **Micro-Interactions & Responsiveness:** Transisi hover interaktif, tata letak adaptif penuh dari layar ponsel pintar hingga layar monitor desktop lebar.
- **Vanilla Performance:** Tanpa ketergantungan framework berat — dibangun murni dengan HTML5 semantik, Vanilla CSS, dan modern JavaScript untuk waktu muat halaman sub-detik.

---

## 📱 Proyek yang Ditampilkan

1. 🕌 **Waktu Shalat**  
   Aplikasi pendamping ibadah Muslim presisi tinggi dengan perhitungan astronomi offline tanpa beban GPS terus-menerus, kompas kiblat pure Dart, audio murottal latar belakang, dan tanpa iklan invasif. Terbit langsung di [Google Play Store](https://play.google.com/store/apps/details?id=studio.frosthoot.prayer_app).

2. 🗓️ **Shift Calendar**  
   Kalender kerja operasional rotasi 4 tim (Alpha, Bravo, Charlie, Delta) dengan siklus 12 hari, integrasi native Android homescreen widget, notifikasi alarm shift, dan sinkronisasi hari libur nasional via Google Calendar API.

3. 🛠️ **SiJaga (i_fix)**  
   Platform pelaporan kerusakan dan penugasan perbaikan peralatan pabrik industri berat (H2 Plant, GPU, Fraksinasi, Reaktor) dengan Role-Based Access Control (Operator, Mekanik, Pengawas, Supervisor), antrean offline SQLite, sinkronisasi otomatis Supabase, serta ekspor PDF/Excel.

4. 💌 **Sebar Bahagia (FrostHoot Invite)**  
   Platform undangan pernikahan digital berbasis Next.js 16, React 19, dan Tailwind CSS v4 dengan dukungan multi-klien via URL personal, RSVP interaktif tersinkron Supabase, dan desain elegan.

---

## 🛡️ Verifikasi Google AdMob (`app-ads.txt`)

Situs ini mempublikasikan file root `app-ads.txt` sesuai standar IAB Tech Lab untuk memastikan kepatuhan inventaris iklan Google AdMob pada aplikasi terbitan FrostHoot Studio:

```
google.com, pub-7080277873836881, DIRECT, f08c47fec0942fa0
```

> **Catatan Kepatuhan:**  
> File ini diverifikasi secara otomatis oleh crawler Google AdMob di URL `https://frosthootstudio.github.io/app-ads.txt`. Jangan mengubah format atau baris ID penerbit tanpa verifikasi konsol AdMob.

---

## 📂 Struktur Berkas

```
frosthootstudio.github.io/
├── assets/
│   ├── images/               # Logo SVG, icon, avatar, dan preview aplikasi
│   └── ...
├── app-ads.txt               # Validasi otorisasi penjual iklan AdMob IAB
├── index.html                # Beranda utama & portofolio showcase
├── privacy-policy.html       # Halaman Kebijakan Privasi resmi aplikasi Play Store
├── script.js                 # Logika interaksi, animasi scroll, & dynamic behavior
├── style.css                 # Master stylesheet, design system tokens, & media queries
└── README.md                 # Dokumentasi repository
```

---

## 🚀 Pengembangan Lokal

Tidak memerlukan build step khusus. Cukup gunakan HTTP server statis lokal sederhana:

```bash
# Menggunakan Python
python -m http.server 8000

# Atau menggunakan Node.js serve
npx serve .
```

Buka peramban di `http://localhost:8000` untuk melihat pratinjau.

---

## 👨‍💻 Creator & Maintainer

**FrostHoot Studio**  
*Lead Developer:* Babah  
*GitHub:* [@frosthootstudio](https://github.com/frosthootstudio)  
*Email:* `frosthoot.studio@gmail.com`
