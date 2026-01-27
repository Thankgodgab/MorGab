# 🚀 MorGab - Modern Agency Web Application

MorGab is a premium, high-performance web application designed for modern digital agencies. Built with **React 19**, **Vite**, and **Tailwind CSS 4**, it features a sophisticated design system, fluid animations, and a highly maintainable atomic structure.

---

## ✨ Key Features

- **💎 Premium Design**: Sleek, modern aesthetics with custom typography (Outfit & Inter) and curated color palettes.
- **⚡ High Performance**: Fast loading times and 60fps animations powered by **Framer Motion**.
- **🏗️ Atomic Design Architecture**: Organised into Atoms, Molecules, Organisms, and Layouts for maximum reusability.
- **📦 Centralized Content Store**: Manage all site content, navigation, and SEO metadata from a single `content.js` file.
- **📱 Fully Responsive**: Seamless experience across mobile, tablet, and desktop devices.
- **🔄 Modern Routing**: Client-side routing with React Router 7 and Vercel-ready configuration.
- **🎨 Tailwind 4 Support**: Leverages the latest CSS-first features of Tailwind CSS 4.

---

## 🛠️ Technology Stack

| Layer          | Technology                   |
| :------------- | :--------------------------- |
| **Frontend**   | React 19 (Hooks, Context)    |
| **Build Tool** | Vite 7                       |
| **Styling**    | Tailwind CSS 4, PostCSS      |
| **Animations** | Framer Motion (motion/react) |
| **Icons**      | React Icons (Fa, Hi, Rx)     |
| **Routing**    | React Router 7               |

---

## 📂 Project Structure (Atomic Design)

```text
src/
├── Components/
│   ├── atoms/     # Basic building blocks (Buttons, Headers)
│   ├── molecules/ # Simple groups of atoms (Cards, Forms)
│   ├── organisms/ # Complex sections (Hero, About, Team)
│   └── layout/    # Shell components (Header, Footer, Preloader)
├── data/
│   └── content.js # Single source of truth for text & metadata
├── Pages/         # Page-level components
├── assets/        # Optimization-ready images and icons
└── main.jsx       # Entry point
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Thankgodgab/MorGab.git
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

---

## 📦 Deployment

### Vercel

This project is pre-configured for **Vercel**. Simply connect your GitHub repository to Vercel, and it will automatically build and deploy.

The `vercel.json` file handles SPA routing redirects:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

---

## 📄 License

Released under the [MIT License](LICENSE).

---

Developed with ❤️ by [Thankgodgab](https://github.com/Thankgodgab)
