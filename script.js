/**
 * FrostHoot Studio — Portfolio Core Script
 * Fully Vanilla JS, Zero Dependencies, Ultra-Fast Execution
 */

// ==========================================================================
// 1. CONFIGURATION (Edit your profile & social links here anytime!)
// ==========================================================================
const STUDIO_CONFIG = {
  name: "Babah",
  brand: "FrostHoot Studio",
  email: "frosthoot.studio@gmail.com",
  links: {
    github: "https://github.com/frosthootstudio",
    prayerAppGithub: "https://github.com/frosthootstudio/prayer_app",
    playStore: "https://github.com/frosthootstudio/prayer_app", // Ganti dengan URL Google Play Console jika sudah ada
    linkedin: "https://linkedin.com/in/", // Paste profile LinkedIn di sini
    instagram: "https://instagram.com/",
    tiktok: "https://tiktok.com/@"
  }
};

// ==========================================================================
// 2. CASE STUDY DATA (Deep-Dive Modal Details)
// ==========================================================================
const CASE_STUDIES = {
  prayer_app: {
    badge: "Consumer Utility • Live di Google Play",
    badgeClass: "badge-pulse",
    title: "Waktu Shalat — 100% Offline-First & Bebas Iklan",
    subtitle: "Aplikasi Ibadah Muslim Harian Tanpa Distraksi & Tanpa Ketergantungan Internet",
    problem: "Sebagian besar aplikasi jadwal shalat di pasaran dipenuhi iklan banner/interstitial yang mengganggu kekhusyukan dan menuntut sambungan GPS online terus menerus yang boros baterai dan sering lambat dibuka.",
    solution: "Merancang arsitektur murni Offline-First menggunakan library pure-Dart `adhan` dengan pangkalan data koordinat seluruh kota di Indonesia tanpa butuh GPS. Seluruh dependensi iklan dihapus total (100% gratis & bersih selamanya).",
    highlights: [
      "Kalkulasi shalat presisi & arah kiblat offline (Adhan + Flutter Compass).",
      "Al-Qur'an 30 Juz & Tafsir Ringkas Kemenag RI dengan sistem cache Hive lokal (365 hari TTL).",
      "Murottal Audio Cache: Pengunduhan surah per qari ke memori lokal untuk pemutaran tanpa kuota.",
      "Backup & Restore Mandiri: Ekspor dan impor data checklist ibadah, bookmark ayat, dan streak ke format JSON.",
      "Tasbih digital terintegrasi haptic feedback halus dan pengingat puasa sunnah dinamis."
    ],
    techStack: ["Flutter", "Dart", "Hive NoSQL", "adhan", "just_audio", "Android Native"],
    actionUrl: STUDIO_CONFIG.links.prayerAppGithub,
    actionLabel: "Buka GitHub Repository"
  },
  sijaga: {
    badge: "Enterprise Internal • Plant Maintenance",
    badgeClass: "badge-purple",
    title: "SiJaga (i_fix) — Plant Maintenance & Ticketing System",
    subtitle: "Sistem Pelaporan & Penugasan Perbaikan Unit Kritis Industri Pabrik",
    problem: "Di area fasilitas pabrik kimia/industri (seperti area H2 Plant, GPU, Fraksinasi, Reaktor), sinyal seluler sering kali hilang (blank spot). Pelaporan kerusakan mekanik/instrumen yang masih manual via kertas atau chat sering hilang jejak dan lambat ditindaklanjuti.",
    solution: "Membangun sistem pelaporan terstruktur dengan arsitektur Offline-First SQLite di mobile. Laporan kerusakan tetap dapat dibuat dan difoto di lapangan tanpa sinyal; aplikasi otomatis mengantre dan menyinkronkan data ke Supabase Realtime begitu perangkat kembali terhubung ke WiFi atau jaringan pabrik.",
    highlights: [
      "Role-Based Access Control (RBAC) ketat: Operator (lapor), Pengawas (verifikasi), Mekanik (eksekusi pengerjaan), Supervisor (evaluasi).",
      "Antrean SQLite Lokal + Auto-Sync: Menjamin 0% kehilangan data kerusakan saat di lokasi minim sinyal.",
      "Engine Ekspor Dokumen Resmi: Generate rekapitulasi laporan ke format formal PDF dan lembar kerja Excel langsung dari perangkat.",
      "Kompresi Citra Teknis Otomatis: Memangkas ukuran foto bukti kerusakan secara cerdas sebelum upload ke storage cloud.",
      "Arsitektur Aman Multiplatform: Conditional imports yang dapat dijalankan di Mobile Android dan Web Dashboard operasional."
    ],
    techStack: ["Flutter", "Supabase PostgreSQL", "SQLite Local Queue", "Realtime Auth", "Excel & PDF Engine"],
    actionUrl: "#",
    actionLabel: "Studi Kasus Internal Perusahaan"
  },
  shift_calendar: {
    badge: "Workplace Utility • Internal Production v1.1.9",
    badgeClass: "badge-blue",
    title: "Shift Calendar — Kalender Rotasi 4 Tim 12-Hari",
    subtitle: "Sistem Penjadwalan & Pengingat Rotasi Kerja Operasional Pabrik",
    problem: "Pekerja industri dengan sistem kerja rotasi 4 regu (Alpha, Bravo, Charlie, Delta) siklus 12 hari sering kesulitan mencocokkan jadwal shift kerja dengan agenda keluarga atau hari libur nasional. Selain itu, sistem operasi Android agresif (seperti MIUI/HyperOS) sering mematikan notifikasi alarm shift di background.",
    solution: "Merancang aplikasi kalender khusus rotasi shift dengan algoritma kalkulasi siklus otomatis lintas tahun, integrasi Google Calendar API untuk hari libur nasional, dan Native Android Homescreen Widget.",
    highlights: [
      "Algoritma Siklus Otomatis via ShiftScheduleService: Menghitung posisi shift setiap tim secara instan hingga bertahun-tahun ke depan.",
      "Native Android Homescreen Widget: Pekerja dapat langsung melihat jadwal shift hari ini dan besok langsung dari beranda HP tanpa membuka aplikasi.",
      "OEM Battery Keepalive Foreground Service: Notifikasi pengingat shift dan catatan harian tetap berbunyi tepat waktu meski pada ROM agresif pembersih RAM.",
      "Sinkronisasi Hari Libur Nasional secara real-time via integrasi Google Cloud Calendar API."
    ],
    techStack: ["Flutter", "Dart", "Android AppWidgetProvider", "Google Calendar API", "Awesome Notifications"],
    actionUrl: "#",
    actionLabel: "Alat Operasional Internal"
  },
  sebarbahagia: {
    badge: "Web Application • Modern Next.js",
    badgeClass: "badge-cyan",
    title: "FrostHoot Invite — Dynamic Wedding Invitation Platform",
    subtitle: "Web Aplikasi Undangan Pernikahan Digital Berbasis Next.js & Supabase",
    problem: "Kebutuhan platform undangan pernikahan digital yang cepat dimuat, hemat kuota tamu, mudah disesuaikan per klien, dan memiliki sistem RSVP serta amplop digital yang andal.",
    solution: "Platform single-configuration di mana data klien cukup diset melalui satu file config, didukung backend Supabase untuk pencatatan tamu dan ucapan secara realtime.",
    highlights: [
      "Personalisasi Nama Tamu Dinamis via parameter URL otomatis.",
      "Hitung mundur interaktif, galeri foto teroptimasi, dan pemutar musik latar responsif.",
      "Penyimpanan RSVP dan ucapan doa permanen terhubung ke database Supabase.",
      "Desain adaptif mobile-first dengan animasi scroll reveal halus."
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Vercel"],
    actionUrl: "#",
    actionLabel: "Web Platform Showcase"
  }
};

// ==========================================================================
// 3. TYPING EFFECT IN HERO SECTION
// ==========================================================================
function initTypingAnimation() {
  const targetElement = document.getElementById("typingTagline");
  if (!targetElement) return;

  const phrases = [
    "Operator by Day ⚙️ · Indie App Builder by Night 🌙",
    "AI-Assisted Mobile Developer 🤖",
    "Offline-First Architect & Flutter Engineer ⚡",
    "Turning Real-World Operational Problems into Apps 🚀"
  ];

  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 80;

  function typeStep() {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
      targetElement.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 40;
    } else {
      targetElement.textContent = currentPhrase.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 80;
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
      typingSpeed = 2200; // Jeda saat selesai mengetik
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      typingSpeed = 400; // Jeda sebelum mulai frasa baru
    }

    setTimeout(typeStep, typingSpeed);
  }

  typeStep();
}

// ==========================================================================
// 4. PORTFOLIO CATEGORY FILTERING
// ==========================================================================
function initProjectFilters() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filterValue = btn.getAttribute("data-filter");

      projectCards.forEach(card => {
        const category = card.getAttribute("data-category");
        if (filterValue === "all" || category === filterValue) {
          card.style.display = "flex";
          setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
          }, 10);
        } else {
          card.style.opacity = "0";
          card.style.transform = "translateY(15px)";
          setTimeout(() => {
            card.style.display = "none";
          }, 200);
        }
      });
    });
  });
}

// ==========================================================================
// 5. INTERACTIVE CASE STUDY MODAL
// ==========================================================================
function initModalHandlers() {
  const modalOverlay = document.getElementById("caseStudyModal");
  const closeBtn = document.getElementById("modalCloseBtn");
  const modalBadge = document.getElementById("modalBadge");
  const modalTitle = document.getElementById("modalTitle");
  const modalSubtitle = document.getElementById("modalSubtitle");
  const modalProblem = document.getElementById("modalProblem");
  const modalSolution = document.getElementById("modalSolution");
  const modalHighlights = document.getElementById("modalHighlights");
  const modalTechStack = document.getElementById("modalTechStack");
  const modalActionBtn = document.getElementById("modalActionBtn");

  if (!modalOverlay) return;

  // Open Modal trigger
  document.querySelectorAll("[data-open-case-study]").forEach(trigger => {
    trigger.addEventListener("click", (e) => {
      e.preventDefault();
      const studyKey = trigger.getAttribute("data-open-case-study");
      const data = CASE_STUDIES[studyKey];

      if (!data) return;

      modalBadge.textContent = data.badge;
      modalBadge.className = `badge ${data.badgeClass || 'badge-cyan'}`;
      modalTitle.textContent = data.title;
      modalSubtitle.textContent = data.subtitle;
      modalProblem.textContent = data.problem;
      modalSolution.textContent = data.solution;

      // Populate highlights
      modalHighlights.innerHTML = "";
      data.highlights.forEach(h => {
        const li = document.createElement("li");
        li.textContent = h;
        modalHighlights.appendChild(li);
      });

      // Populate tech stack
      modalTechStack.innerHTML = "";
      data.techStack.forEach(t => {
        const span = document.createElement("span");
        span.className = "tech-chip";
        span.textContent = t;
        modalTechStack.appendChild(span);
      });

      // Modal action button
      if (data.actionUrl && data.actionUrl !== "#") {
        modalActionBtn.href = data.actionUrl;
        modalActionBtn.textContent = data.actionLabel;
        modalActionBtn.style.display = "inline-flex";
        modalActionBtn.target = "_blank";
      } else {
        modalActionBtn.style.display = "none";
      }

      modalOverlay.classList.add("active");
      document.body.style.overflow = "hidden";
    });
  });

  function closeModal() {
    modalOverlay.classList.remove("active");
    document.body.style.overflow = "";
  }

  closeBtn.addEventListener("click", closeModal);

  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalOverlay.classList.contains("active")) {
      closeModal();
    }
  });
}

// ==========================================================================
// 6. COPY EMAIL & TOAST NOTIFICATION
// ==========================================================================
function initCopyEmail() {
  const copyBtn = document.getElementById("copyEmailBtn");
  const emailTextElem = document.getElementById("emailAddressText");
  const toast = document.getElementById("toastMsg");

  if (!copyBtn) return;

  copyBtn.addEventListener("click", () => {
    const emailToCopy = emailTextElem ? emailTextElem.textContent.trim() : STUDIO_CONFIG.email;

    navigator.clipboard.writeText(emailToCopy).then(() => {
      showToast("Email berhasil disalin ke clipboard!");
    }).catch(() => {
      showToast("Email: " + emailToCopy);
    });
  });

  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("show");
    setTimeout(() => {
      toast.classList.remove("show");
    }, 3200);
  }
}

// ==========================================================================
// 7. MOBILE NAVIGATION & ACTIVE LINK SPY
// ==========================================================================
function initNavigation() {
  const toggleBtn = document.getElementById("mobileToggle");
  const navMenu = document.getElementById("navMenu");
  const navLinks = document.querySelectorAll(".nav-link");

  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener("click", () => {
      navMenu.classList.toggle("mobile-open");
    });

    // Close when clicking nav items
    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("mobile-open");
      });
    });
  }

  // ScrollSpy for Active Nav Link
  window.addEventListener("scroll", () => {
    const scrollPos = window.scrollY + 120;
    const sections = document.querySelectorAll("section[id]");

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute("id");

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          }
        });
      }
    });
  });
}

// ==========================================================================
// DOM READY INITIALIZER
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  initTypingAnimation();
  initProjectFilters();
  initModalHandlers();
  initCopyEmail();
  initNavigation();
});
