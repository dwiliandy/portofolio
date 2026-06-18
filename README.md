# Dwiliandi Omega Sekeon - Personal Portfolio Website

A premium, modern, and high-performance personal portfolio website built using standard HTML5, CSS3, and modern ES6 JavaScript.

Designed with a clean, professional, and elegant aesthetic inspired by **Linear, Vercel, and Stripe**, utilizing ample white space, rounded cards, micro-interactions, soft shadows, and clean typography.

---

## 🚀 Key Features

- **No Frameworks or Bundlers**: Built entirely on core vanilla web standards for speed, simple deployment, and SEO compliance.
- **Multilingual Support (EN / ID)**: Native translations using custom `data-i18n` bindings and a robust client-side translation engine.
- **Dynamic Dark/Light Mode Theme Switcher**: Styled with CSS variable tokens, including a head-injection theme resolver to prevent light flashes (FOUC) on slow connections.
- **Dynamic Project Rendering**: Project details are stored as a clean JavaScript object configuration, rendering cards and fully interactive details modals dynamically.
- **Smooth Scroll & Viewport Animations**: Implemented using the high-performance `IntersectionObserver` API rather than heavy scroll listener libraries.
- **Mobile-First Layout**: Completely responsive across mobile, tablet, and widescreen layouts.
- **SEO & Open Graph Optimizations**: Rich meta configurations and preview bindings for search engine indexers and social sharing platforms.

---

## 📂 Folder Structure

```text
portfolio/
├── index.html
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── app.js
│   ├── img/
│   │   └── og-preview.png (placeholder representation)
│   └── cv/
│       └── Dwiliandi-CV.pdf (placeholder created)
└── README.md
```

---

## 🛠️ Setup & Local Development

Because the site uses standard, self-contained HTML/CSS/JS, no build process is required!

### Method 1: Local Server (Recommended)
Running through an HTTP server ensures that relative paths, document localization, and all console configurations are correctly validated:
1. Using **VS Code Live Server** extension (click "Go Live" at the bottom right).
2. Using **Python**:
   ```bash
   python -m http.server 8000
   ```
   Open `http://localhost:8000` in your browser.
3. Using **Node.js** (`serve` or `http-server`):
   ```bash
   npx serve .
   ```

### Method 2: Double-Click File
You can also open the `index.html` file directly in your browser. However, browser security restrictions may occasionally affect certain relative operations depending on local sandboxing rules.

---

## 📝 Customization Guide

### 1. Modifying Translation Content
All texts are managed under the `translations` object inside [app.js](file:///c:/Users/Ega/Desktop/Portofolio/assets/js/app.js).
To change headers, sub-text, or bios, locate the key under the `en` (English) or `id` (Indonesian) block and update the string value.

### 2. Adding or Editing Projects
Projects are configured in the `projectsData` array in [app.js](file:///c:/Users/Ega/Desktop/Portofolio/assets/js/app.js). To modify:
- Open the file and locate the array.
- Duplicate or update a project block structure:
```javascript
{
    id: "project-unique-id",
    title: "Project Title",
    category: { en: "Category EN", id: "Kategori ID" },
    role: { en: "Role EN", id: "Peran ID" },
    tech: ["Tech 1", "Tech 2"],
    status: "Project Status",
    description: { en: "Description text...", id: "Deskripsi teks..." },
    highlights: {
        en: ["Deliverable 1", "Deliverable 2"],
        id: ["Pencapaian 1", "Pencapaian 2"]
    }
}
```

### 3. Replacing the CV
To customize the resume download feature, replace the placeholder PDF file located at `assets/cv/Dwiliandi-CV.pdf` with your actual CV PDF. Ensure the file name matches exactly.
