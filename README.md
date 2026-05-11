# Bruniverse 🐾

Welcome to **Bruniverse**, a premium Neobrutalist pet parent platform. This website features a high-energy "Awwwards-winning" design with bold colors, thick borders, and bouncy animations.

## ✨ Features
- **Neobrutalist Design**: Custom "torn paper" dividers, hard shadows, and vibrant pastel palettes.
- **Interactive UI**: Powered by `framer-motion` for smooth, springy transitions and magnetic interactions.
- **Multi-page Architecture**:
  - **Landing Page**: Engaging Hero, Categories, and Pricing sections.
  - **Registration (`/register`)**: Early access form for pet parents.
  - **Survey (`/survey`)**: Deep insights into pet habits and needs.
  - **User Profiles (`/profile`)**: Dashboard for users to view their pet's data.
  - **Admin Dashboard (`/admin`)**: Secure view for the owner to see all collected data.
- **Supabase Integration**: Real-time database and authentication.

## 🚀 Quick Start

1. **Clone and Install**
   ```bash
   npm install
   ```

2. **Set Up Supabase**
   - Follow the [Supabase Setup Guide](./SUPABASE_SETUP.md) to create your database tables and get your API keys.

3. **Configure Environment**
   - Create a `.env` file in the root folder:
   ```env
   VITE_SUPABASE_URL=your_url
   VITE_SUPABASE_ANON_KEY=your_key
   ```

4. **Run Development Server**
   ```bash
   npm run dev
   ```

## 🛠 Tech Stack
- **React + Vite**
- **Tailwind CSS** (v4.0)
- **Framer Motion** (Animations)
- **Supabase** (Backend & Auth)
- **React Icons**

---
Build with 💗 for pet parents.
