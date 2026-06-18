/**
 * Dwiliandi Omega Sekeon - Portfolio Application Script
 * Features: Light/Dark Mode, Multi-language (EN/ID), Dynamic Project Rendering, Detailed Modals, Scroll Animations.
 */

// ==========================================================================
// 1. Projects Data Definition (Localized Content)
// ==========================================================================
const projectsData = [
    {
        id: "partyvate",
        title: "Partyvate.id",
        category: {
            en: "Digital Invitation Platform",
            id: "Platform Undangan Digital"
        },
        role: {
            en: "Founder & Full Stack Developer",
            id: "Founder & Full Stack Developer"
        },
        tech: ["Laravel", "MySQL", "JavaScript", "CSS", "Ajax", "Bootstrap"],
        status: "SaaS Product",
        description: {
            en: "Partyvate is a digital invitation platform designed to help users create, manage, and share invitations through unique themes and an easy-to-use event management experience.",
            id: "Partyvate adalah platform undangan digital yang dirancang untuk membantu pengguna membuat, mengelola, dan membagikan undangan melalui berbagai tema unik dengan pengalaman pengelolaan acara yang sederhana dan mudah digunakan."
        },
        highlights: {
            en: [
                "Flexible theme system",
                "Guest and RSVP management",
                "Gallery management",
                "Digital gift feature",
                "Event analytics",
            ],
            id: [
                "Sistem tema yang fleksibel",
                "Manajemen tamu dan RSVP",
                "Manajemen galeri foto/video",
                "Fitur kado digital",
                "Analitik acara",
            ]
        }
    },
    {
        id: "gphelper",
        title: "GrandPirates Helper / GPHelper",
        category: {
            en: "Game Automation & Telegram Integration",
            id: "Automasi Game & Integrasi Telegram"
        },
        role: {
            en: "Developer",
            id: "Developer"
        },
        tech: ["Python", "Telethon", "Telegram API", "Linux VPS"],
        status: "Commercial Product",
        description: {
            en: "GPHelper is a Telegram-based automation service designed to help GrandPirates players automate repetitive in-game activities through configurable workflows, scheduling, and session management.",
            id: "GPHelper adalah layanan automasi berbasis Telegram yang dirancang untuk membantu pemain GrandPirates menjalankan aktivitas game yang berulang melalui workflow yang dapat dikonfigurasi, penjadwalan, dan manajemen sesi pengguna."
        },
        highlights: {
            en: [
                "Telegram automation",
                "Multi-session architecture",
                "VPS deployment",
                "Text parsing",
                "Timeout and idle handling"
            ],
            id: [
                "Automasi Telegram",
                "Arsitektur multi-session",
                "Penerapan (deployment) pada VPS",
                "Penguraian teks (text parsing)",
                "Penanganan timeout dan waktu idle"
            ]
        }
    },
    {
        id: "gpwiki",
        title: "GPWiki Database",
        category: {
            en: "GrandPirates Knowledge Base & Data Platform",
            id: "Platform Database & Basis Pengetahuan GrandPirates"
        },
        role: {
            en: "Founder & Developer",
            id: "Founder & Developer"
        },
        tech: ["Laravel", "MySQL", "Python", "Telegram API", "JavaScript", "Bootstrap", "DataTables", "Linux VPS"],
        status: "Production",
        description: {
            en: "GPWiki is a community knowledge base and database platform for GrandPirates players, built to organize game information such as characters, items, skills, and related data into a structured and searchable format.",
            id: "GPWiki adalah basis pengetahuan komunitas dan platform database untuk pemain GrandPirates yang dibuat untuk menyusun informasi game seperti karakter, item, skill, dan data terkait lainnya ke dalam format yang terstruktur dan mudah dicari."
        },
        highlights: {
            en: [
                "Telegram bot data parsing",
                "API integration",
                "Searchable database",
                "Haki calculation logic",
                "Relational data mapping"
            ],
            id: [
                "Penguraian data bot Telegram",
                "Integrasi API",
                "Database yang dapat dicari",
                "Logika perhitungan Haki",
                "Pemetaan data relasional"
            ]
        }
    },
    {
        id: "ess",
        title: "Employee Self Service / ESS",
        category: {
            en: "HR Management & Approval System",
            id: "Sistem HR Management & Approval"
        },
        role: {
            en: "Backend Developer",
            id: "Backend Developer"
        },
        tech: ["Laravel", "MySQL", "JavaScript", "Ajax", "Bootstrap", "CSS", "DataTables"],
        status: "Enterprise Deployment",
        description: {
            en: "An Employee Self Service application developed to manage attendance, leave requests, claim submissions, overtime requests, and approval workflows within an organization.",
            id: "Aplikasi Employee Self Service yang dikembangkan untuk mengelola absensi, pengajuan cuti, klaim, lembur, serta alur persetujuan di dalam perusahaan."
        },
        highlights: {
            en: [
                "Attendance management",
                "Leave management logic",
                "Multi-level approval workflow",
                "Query optimization",
                "Service and repository architecture"
            ],
            id: [
                "Manajemen absensi karyawan",
                "Logika pengajuan cuti",
                "Alur persetujuan (approval) bertingkat",
                "Optimasi kueri database",
                "Arsitektur service dan repository"
            ]
        }
    },
    {
        id: "church",
        title: "Church Management System",
        category: {
            en: "Enterprise Web Application",
            id: "Aplikasi Web Enterprise"
        },
        role: {
            en: "Backend Lead Developer",
            id: "Backend Lead Developer"
        },
        tech: ["Laravel", "MySQL", "JavaScript", "Access Control RBAC"],
        status: "Archived",
        description: {
            en: "A tailored administration portal designed to streamline operational workflows for church congregations, featuring secure membership directories, multi-service volunteer scheduling, and targeted announcement routing.",
            id: "Portal administrasi kustom yang dirancang untuk merampingkan alur kerja operasional jemaat gereja, menampilkan direktori keanggotaan yang aman, penjadwalan sukarelawan multi-ibadah, dan pengiriman pengumuman terarah."
        },
        highlights: {
            en: [
                "Volunteer roster automation",
                "Role based access control (RBAC)",
                "Scheduling system",
                "Ministry access control",
                "Scheduled dispatch"
            ],
            id: [
                "Automasi jadwal sukarelawan",
                "Kontrol akses berbasis peran (RBAC)",
                "Sistem penjadwalan terpadu",
                "Manajemen akses divisi pelayanan",
                "Pengiriman terjadwal"
            ]
        }
    }
];

// ==========================================================================
// 2. Language Translation Maps (EN / ID)
// ==========================================================================
const translations = {
    en: {
      "nav.home": "Home",
      "nav.about": "About",
      "nav.skills": "Skills",
      "nav.projects": "Projects",
      "nav.experience": "Experience",
      "nav.contact": "Contact",
      "hero.badge": "Backend Developer • ERP Implementation • Product Builder",
      "hero.name": "Dwiliandi Omega Sekeon",
      "hero.title": "Backend Developer | ERP Implementation | Product Builder",
      "hero.description": "Building business systems, workflow automation, ERP solutions, and production applications used by real users.",
      "hero.btn.cv": "Download CV",
      "hero.btn.projects": "View Projects",
      "hero.btn.contact": "Contact Me",

      "about.title": "About Me",
      "about.subtitle": "Professional Background & Focus",
      "about.headline": "Building Business Systems Through Reliable Backend Engineering",

      "about.desc.p1": "I am a Backend Developer specializing in business applications, ERP implementation, workflow automation, and production system development. My focus is on designing reliable backend solutions that help organizations streamline operations and improve efficiency.",

      "about.desc.p2": "With more than four years of experience, I have developed and maintained enterprise applications, employee management systems, automation services, and digital products used by real users. My expertise includes Laravel development, database design, REST API integration, and business process analysis.",

      "about.desc.p3": "Beyond traditional web development, I have experience implementing ERP solutions, designing approval workflows, automating repetitive processes with Python, managing Linux VPS deployments, and building products such as Partyvate, GPHelper, and GPWiki.",

      "about.feat1.title": "Backend Development",
      "about.feat1.desc": "Developing business applications, APIs, and database-driven systems using Laravel and MySQL.",

      "about.feat2.title": "ERP Implementation",
      "about.feat2.desc": "Supporting ERP implementation, workflow analysis, access management, and business process optimization.",

      "about.feat3.title": "Automation Engineering",
      "about.feat3.desc": "Building automation workflows, Telegram integrations, data parsers, and Python-based tools.",

      "skills.title": "Skills & Expertise",
      "skills.subtitle": "Technologies and business domains I work with",

      "skills.cat.backend": "Backend Development",
      "skills.cat.erp": "ERP & Business Process",
      "skills.cat.automation": "Automation",
      "skills.cat.infra": "Infrastructure",

      "projects.title": "Featured Projects",
      "projects.subtitle": "Business applications, automation services, and production systems",

      "projects.card.role": "Role",
      "projects.card.more": "View Details",

      "modal.meta.role": "My Role",
      "modal.meta.tech": "Technology",
      "modal.meta.status": "Status",
      "modal.meta.focus": "Focus Area",

      "modal.section.desc": "Project Overview",
      "modal.section.highlights": "Technical Challenges & Solutions",

      "experience.title": "Professional Experience",
      "experience.subtitle": "Areas of expertise developed throughout my career",

      "experience.backend.date": "2020 - Present",
      "experience.backend.role": "Backend Developer",
      "experience.backend.desc": "Developing backend systems, APIs, business applications, database structures, and system integrations using Laravel, MySQL, and related technologies.",

      "experience.erp.date": "2026 - Present",
      "experience.erp.role": "ERP Implementation",
      "experience.erp.desc": "Supporting ERP implementation projects including Accurate Online and Odoo, focusing on business processes, workflows, master data, and user access management.",

      "experience.automation.date": "2025 - Present",
      "experience.automation.role": "Automation Developer",
      "experience.automation.desc": "Building automation workflows, Telegram integrations, parsers, schedulers, and background processes using Python and related tools.",

      "experience.product.date": "2026 - Present",
      "experience.product.role": "Product Builder",
      "experience.product.desc": "Designing, developing, deploying, and maintaining digital products used by real users, including event platforms, automation services, and community applications.",

      "contact.title": "Get In Touch",
      "contact.subtitle": "Let's discuss business systems, ERP solutions, integrations, or automation projects.",
      "contact.headline": "Let's build something useful together",

      "contact.desc": "Whether you need backend development, ERP implementation support, system integration, or workflow automation, feel free to reach out.",

      "contact.email": "Email",
      "contact.whatsapp": "WhatsApp",

      "contact.social.title": "Other Profiles",
      "contact.social.desc": "You can also find my projects and professional profiles through the links below."
    },

    id: {
    "nav.home": "Beranda",
    "nav.about": "Tentang",
    "nav.skills": "Keahlian",
    "nav.projects": "Proyek",
    "nav.experience": "Pengalaman",
    "nav.contact": "Kontak",
    "hero.badge": "Backend Developer • ERP Implementation • Product Builder",
    "hero.name": "Dwiliandi Omega Sekeon",
    "hero.title": "Backend Developer | ERP Implementation | Product Builder",
    "hero.description": "Membangun sistem bisnis, automasi workflow, solusi ERP, dan aplikasi produksi yang digunakan oleh pengguna nyata.",
    "hero.btn.cv": "Unduh CV",
    "hero.btn.projects": "Lihat Proyek",
    "hero.btn.contact": "Hubungi Saya",

    "about.title": "Tentang Saya",
    "about.subtitle": "Latar Belakang Profesional & Fokus",
    "about.headline": "Membangun Sistem Bisnis Melalui Backend Engineering yang Andal",

    "about.desc.p1": "Saya adalah Backend Developer yang berfokus pada pengembangan aplikasi bisnis, implementasi ERP, automasi workflow, dan pengembangan sistem produksi. Fokus utama saya adalah merancang solusi backend yang andal untuk membantu organisasi meningkatkan efisiensi dan menyederhanakan proses operasional.",

    "about.desc.p2": "Dengan pengalaman lebih dari empat tahun, saya telah mengembangkan dan memelihara aplikasi enterprise, sistem manajemen karyawan, layanan automasi, serta produk digital yang digunakan oleh pengguna nyata. Keahlian saya mencakup pengembangan Laravel, desain database, integrasi REST API, dan analisis proses bisnis.",

    "about.desc.p3": "Selain pengembangan aplikasi web, saya juga memiliki pengalaman dalam implementasi ERP, perancangan workflow persetujuan, automasi proses berulang menggunakan Python, pengelolaan deployment pada Linux VPS, serta pengembangan produk seperti Partyvate, GPHelper, dan GPWiki.",

    "about.feat1.title": "Backend Development",
    "about.feat1.desc": "Mengembangkan aplikasi bisnis, API, dan sistem berbasis database menggunakan Laravel dan MySQL.",

    "about.feat2.title": "Implementasi ERP",
    "about.feat2.desc": "Mendukung implementasi ERP, analisis workflow, pengelolaan hak akses, dan optimasi proses bisnis.",

    "about.feat3.title": "Automation Engineering",
    "about.feat3.desc": "Membangun workflow automasi, integrasi Telegram, parser data, dan tools berbasis Python.",

    "skills.title": "Keahlian & Spesialisasi",
    "skills.subtitle": "Teknologi dan domain bisnis yang saya kerjakan",

    "skills.cat.backend": "Backend Development",
    "skills.cat.erp": "ERP & Proses Bisnis",
    "skills.cat.automation": "Automasi",
    "skills.cat.infra": "Infrastruktur",

    "projects.title": "Proyek Pilihan",
    "projects.subtitle": "Aplikasi bisnis, layanan automasi, dan sistem produksi",

    "projects.card.role": "Peran",
    "projects.card.more": "Lihat Detail",

    "modal.meta.role": "Peran Saya",
    "modal.meta.tech": "Teknologi",
    "modal.meta.status": "Status",
    "modal.meta.focus": "Area Fokus",

    "modal.section.desc": "Gambaran Proyek",
    "modal.section.highlights": "Tantangan Teknis & Solusi",

    "experience.title": "Pengalaman Profesional",
    "experience.subtitle": "Bidang keahlian yang saya kembangkan selama berkarier",

    "experience.backend.date": "2020 - Sekarang",
    "experience.backend.role": "Backend Developer",
    "experience.backend.desc": "Mengembangkan sistem backend, API, aplikasi bisnis, struktur database, dan integrasi sistem menggunakan Laravel, MySQL, dan teknologi terkait.",

    "experience.erp.date": "2026 - Sekarang",
    "experience.erp.role": "Implementasi ERP",
    "experience.erp.desc": "Mendukung proyek implementasi ERP seperti Accurate Online dan Odoo dengan fokus pada proses bisnis, workflow, master data, dan manajemen hak akses.",

    "experience.automation.date": "2025 - Sekarang",
    "experience.automation.role": "Automation Developer",
    "experience.automation.desc": "Membangun workflow automasi, integrasi Telegram, parser data, scheduler, dan proses background menggunakan Python dan teknologi terkait.",

    "experience.product.date": "2026 - Sekarang",
    "experience.product.role": "Product Builder", 
    "experience.product.desc": "Merancang, mengembangkan, melakukan deployment, dan memelihara produk digital yang digunakan pengguna nyata, termasuk platform acara, layanan automasi, dan aplikasi komunitas.",

    "contact.title": "Hubungi Saya",
    "contact.subtitle": "Mari berdiskusi mengenai sistem bisnis, solusi ERP, integrasi sistem, atau proyek automasi.",
    "contact.headline": "Mari membangun sesuatu yang bermanfaat bersama",

    "contact.desc": "Jika Anda membutuhkan pengembangan backend, dukungan implementasi ERP, integrasi sistem, atau automasi workflow, jangan ragu untuk menghubungi saya.",

    "contact.email": "Email",
    "contact.whatsapp": "WhatsApp",

    "contact.social.title": "Profil Lainnya",
    "contact.social.desc": "Anda juga dapat menemukan proyek dan profil profesional saya melalui tautan berikut."
  }
};

// ==========================================================================
// 3. Application State Settings & LocalStorage Integration
// ==========================================================================
let currentLang = localStorage.getItem("preferred-lang") || getBrowserLanguage();
let currentTheme = localStorage.getItem("preferred-theme") || "dark";

// Auto-detect browser locale as Indonesian, fallback to English
function getBrowserLanguage() {
    const locale = navigator.language || navigator.userLanguage;
    return locale.startsWith("id") ? "id" : "en";
}

// Helper to get SVG logo/icon for each technology
function getTechIcon(techName) {
    const tech = techName.toLowerCase().trim();
    
    // Shared SVG configuration for consistent design (14px x 14px size, flex alignment)
    const svgAttr = 'width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tech-icon-svg"';
    
    switch(tech) {
        case 'laravel':
            // Modern 3D Layered Box/Framework icon
            return `<svg ${svgAttr}><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>`;
        case 'php':
            // Structured application symbol
            return `<svg ${svgAttr}><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path><path d="M8 12h8m-8-3h5a1.5 1.5 0 0 1 0 3H8v4m8-7h2a1.5 1.5 0 0 1 0 3h-2v4"></path></svg>`;
        case 'mysql':
        case 'datatables':
            // Database Cylinder
            return `<svg ${svgAttr}><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path><path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"></path></svg>`;
        case 'javascript':
        case 'ajax':
            // Code brackets layout
            return `<svg ${svgAttr}><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><path d="M9 15c0-1.5 1-2.5 2.5-2.5s2.5 1 2.5 2.5v1.5a1.5 1.5 0 0 1-3 0"></path><path d="M14 9h2v8h-2"></path></svg>`;
        case 'python':
            // Python interlinked loops
            return `<svg ${svgAttr}><path d="M12 2c-.28 0-.55.03-.81.09c-.66.15-1.19.66-1.19 1.34V7H12v1H8.5c-.68 0-1.25.56-1.41 1.22c-.15.66-.09 1.31-.09 1.78v1.5c0 .68.56 1.25 1.22 1.41c.66.15 1.31.09 1.78.09H12v-1.5c0-.68-.56-1.25-1.22-1.41a1.27 1.27 0 0 1-.78-.78V9.5c0-.28.22-.5.5-.5h3.5v-1c0-.68-.56-1.25-1.22-1.41c-.66-.15-1.31-.09-1.78-.09zM12 22c.28 0 .55-.03.81-.09c.66-.15 1.19-.66 1.19-1.34V17H12v-1h3.5c.68 0 1.25-.56 1.41-1.22c.15-.66.09-1.31.09-1.78v-1.5c0-.68-.56-1.25-1.22-1.41c-.66-.15-1.31-.09-1.78-.09H12v1.5c0 .68.56 1.25 1.22 1.41c.28.06.5.28.56.56v1.44c0 .28-.22.5-.5.5h-3.5v1c0 .68.56 1.25 1.22 1.41c.66.15 1.31.09 1.78.09z"></path></svg>`;
        case 'bootstrap':
            // Framework letter logo representation
            return `<svg ${svgAttr}><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><path d="M9 16V8h3a2.5 2.5 0 0 1 0 5h-3m0 0h3a2.5 2.5 0 0 1 0 5H9"></path></svg>`;
        case 'telegram api':
        case 'telethon':
            // Paper plane
            return `<svg ${svgAttr}><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>`;
        case 'linux vps':
            // Server rack layout
            return `<svg ${svgAttr}><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line><line x1="20" y1="6" x2="20.01" y2="6"></line><line x1="20" y1="18" x2="20.01" y2="18"></line></svg>`;
        case 'git':
            // Branch nodes
            return `<svg ${svgAttr}><circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 15V9a4 4 0 0 0-4-4H9"></path><line x1="6" y1="9" x2="6" y2="15"></line></svg>`;
        case 'odoo':
        case 'accurate online':
        case 'business process analysis':
            // Briefcase/System integration
            return `<svg ${svgAttr}><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>`;
        case 'access control':
        case 'access control rbac':
            // Security Key
            return `<svg ${svgAttr}><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path></svg>`;
        case 'workflow approval':
        case 'process automation':
            // Automation Gears
            return `<svg ${svgAttr}><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>`;
        case 'text parsing':
            // File code reader
            return `<svg ${svgAttr}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>`;
        case 'rest api':
        case 'api integration':
            // Connectivity Link
            return `<svg ${svgAttr}><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>`;
        case 'deployment':
            // Rocket Launch
            return `<svg ${svgAttr}><path d="M4.5 16.5c-1.5 1.25-2.5 3.5-2.5 3.5s2.25-1 3.5-2.5M15 3h6v6m-9 9 7-7M9 15l-3 3v3h3l3-3z"></path></svg>`;
        case 'css':
            // Vector layout diamond/grid
            return `<svg ${svgAttr}><polygon points="12 2 2 12 12 22 22 12 12 22"></polygon><path d="M12 2v20M2 12h20"></path></svg>`;
        default:
            // Generic Code tag brackets
            return `<svg ${svgAttr}><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`;
    }
}

// ==========================================================================
// 4. Translation & UI Rendering Engines
// ==========================================================================

// Translate all elements on the page marked with data-i18n
function translatePage() {
    document.querySelectorAll("[data-i18n]").forEach(element => {
        const key = element.getAttribute("data-i18n");
        if (translations[currentLang] && translations[currentLang][key]) {
            // Check if element has a data-i18n-attr (e.g. placeholder, download title)
            const attr = element.getAttribute("data-i18n-attr");
            if (attr) {
                element.setAttribute(attr, translations[currentLang][key]);
            } else {
                element.textContent = translations[currentLang][key];
            }
        }
    });

    // Update active state in Lang Switcher DOM
    document.querySelectorAll(".lang-btn").forEach(btn => {
        if (btn.getAttribute("data-lang") === currentLang) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });

    // Render projects list again to update project texts (category, title, descriptions)
    renderProjects();
}

// Dynamically generate the project list HTML
function renderProjects() {
    const grid = document.getElementById("projects-grid");
    if (!grid) return;
    
    grid.innerHTML = "";
    
    projectsData.forEach((project, idx) => {
        const card = document.createElement("article");
        card.className = "project-card reveal";
        card.setAttribute("data-index", idx);
        
        // Localized fields
        const category = project.category[currentLang] || project.category["en"];
        const role = project.role[currentLang] || project.role["en"];
        const description = project.description[currentLang] || project.description["en"];
        
        // Join tech badges
        const techBadges = project.tech.map(t => `<span class="tech-tag">${getTechIcon(t)}${t}</span>`).join("");
        
        // Build card skeleton
        card.innerHTML = `
            <div class="project-card-header">
                <div class="project-meta">
                    <span class="project-category">${category}</span>
                    <span class="project-status">${project.status}</span>
                </div>
                <h3 class="project-card-title">${project.title}</h3>
            </div>
            <div class="project-card-body">
                <p class="project-card-desc">${description}</p>
            </div>
            <div class="project-card-footer">
                <div class="tech-tags">${techBadges}</div>
                <span class="project-more-btn">
                    ${translations[currentLang]["projects.card.more"]}
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" x2="19" y1="12" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </span>
            </div>
        `;
        
        // Add card trigger
        card.addEventListener("click", () => openProjectModal(idx));
        
        grid.appendChild(card);
    });

    // Re-initialize intersection observers for the newly rendered project cards
    initializeScrollObserver();
}

// Set application theme class on HTML element
function applyTheme() {
    const html = document.documentElement;
    if (currentTheme === "light") {
        html.classList.remove("dark");
        html.classList.add("light");
    } else {
        html.classList.remove("light");
        html.classList.add("dark");
    }
}

// ==========================================================================
// 5. Modal Handling Logic
// ==========================================================================
const modal = document.getElementById("project-modal");
const modalBody = modal ? modal.querySelector(".modal-body") : null;
const modalCloseBtn = modal ? modal.querySelector(".modal-close") : null;
const modalBackdrop = modal ? modal.querySelector(".modal-backdrop") : null;

function openProjectModal(idx) {
    if (!modal || !modalBody) return;
    
    const project = projectsData[idx];
    if (!project) return;
    
    // Set active values based on current language
    const category = project.category[currentLang] || project.category["en"];
    const role = project.role[currentLang] || project.role["en"];
    const description = project.description[currentLang] || project.description["en"];
    const highlights = project.highlights[currentLang] || project.highlights["en"];
    
    const techBadges = project.tech.map(t => `<span class="tech-tag">${getTechIcon(t)}${t}</span>`).join("");
    const highlightsList = highlights.map(h => `<li class="modal-highlight-item">${h}</li>`).join("");
    
    // Inject structures inside modal body
    modalBody.innerHTML = `
        <span class="modal-category">${category}</span>
        <h3 class="modal-title">${project.title}</h3>
        
        <div class="modal-meta-grid">
            <div class="modal-meta-item">
                <span class="modal-meta-label">${translations[currentLang]["modal.meta.role"]}</span>
                <span class="modal-meta-val">${role}</span>
            </div>
            <div class="modal-meta-item">
                <span class="modal-meta-label">${translations[currentLang]["modal.meta.status"]}</span>
                <span class="modal-meta-val">${project.status}</span>
            </div>
            <div class="modal-meta-item">
                <span class="modal-meta-label">${translations[currentLang]["modal.meta.tech"]}</span>
                <span class="modal-meta-val">${project.tech.join(", ")}</span>
            </div>
        </div>
        
        <h4 class="modal-section-title">${translations[currentLang]["modal.section.desc"]}</h4>
        <p class="modal-desc">${description}</p>
        
        <h4 class="modal-section-title">${translations[currentLang]["modal.section.highlights"]}</h4>
        <ul class="modal-highlights">
            ${highlightsList}
        </ul>
        
        <h4 class="modal-section-title">${translations[currentLang]["modal.meta.tech"]}</h4>
        <div class="tech-tags" style="margin-top: 10px;">
            ${techBadges}
        </div>
    `;
    
    // Open modal
    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
    
    // Focus close button for accessibility
    if (modalCloseBtn) modalCloseBtn.focus();
}

function closeProjectModal() {
    if (!modal) return;
    
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
}

// Bind modal closing events
if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeProjectModal);
if (modalBackdrop) modalBackdrop.addEventListener("click", closeProjectModal);
window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal && modal.classList.contains("active")) {
        closeProjectModal();
    }
});

// ==========================================================================
// 6. Navigation, Layout & Scroll Event Listeners
// ==========================================================================

// Handle Language switching toggles
document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
        const lang = e.currentTarget.getAttribute("data-lang");
        if (lang !== currentLang) {
            currentLang = lang;
            localStorage.setItem("preferred-lang", currentLang);
            translatePage();
        }
    });
});

// Handle Dark/Light mode switcher toggle
const themeToggleBtn = document.getElementById("theme-toggle");
if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
        currentTheme = currentTheme === "dark" ? "light" : "dark";
        localStorage.setItem("preferred-theme", currentTheme);
        applyTheme();
    });
}

// Mobile Hamburger Menu Trigger
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener("click", () => {
        const isOpen = mobileMenu.classList.contains("open");
        if (isOpen) {
            mobileMenu.classList.remove("open");
            mobileMenuBtn.querySelector(".menu-open-icon").classList.remove("hidden");
            mobileMenuBtn.querySelector(".menu-close-icon").classList.add("hidden");
        } else {
            mobileMenu.classList.add("open");
            mobileMenuBtn.querySelector(".menu-open-icon").classList.add("hidden");
            mobileMenuBtn.querySelector(".menu-close-icon").classList.remove("hidden");
        }
    });
}

// Mobile Navigation click closures
document.querySelectorAll(".mobile-nav-link").forEach(link => {
    link.addEventListener("click", () => {
        if (mobileMenu && mobileMenu.classList.contains("open")) {
            mobileMenu.classList.remove("open");
            if (mobileMenuBtn) {
                mobileMenuBtn.querySelector(".menu-open-icon").classList.remove("hidden");
                mobileMenuBtn.querySelector(".menu-close-icon").classList.add("hidden");
            }
        }
    });
});

// Active Navigation highlight based on scroll position
function handleScrollNavHighlight() {
    const sections = document.querySelectorAll("section[id]");
    const scrollPosition = window.scrollY + 120; // offset top boundary
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            // Set desktop active
            document.querySelectorAll(".nav-link").forEach(link => {
                if (link.getAttribute("href") === `#${sectionId}`) {
                    link.classList.add("active");
                } else {
                    link.classList.remove("active");
                }
            });
            // Set mobile active
            document.querySelectorAll(".mobile-nav-link").forEach(link => {
                if (link.getAttribute("href") === `#${sectionId}`) {
                    link.classList.add("active");
                } else {
                    link.classList.remove("active");
                }
            });
        }
    });
}
window.addEventListener("scroll", handleScrollNavHighlight);

// Scroll Reveal observer
let revealObserver;
function initializeScrollObserver() {
    const items = document.querySelectorAll(".reveal");
    
    // Disconnect existing observer if any to re-render cards correctly
    if (revealObserver) {
        revealObserver.disconnect();
    }
    
    revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("revealed");
                // Optional: stop observing once revealed for speed optimization
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.05,
        rootMargin: "0px 0px -40px 0px"
    });

    items.forEach(item => {
        revealObserver.observe(item);
    });
}

// ==========================================================================
// 7. Initial Setup Execution
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
    applyTheme();
    translatePage(); // Also handles first rendering of projects
    handleScrollNavHighlight();
});
