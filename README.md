# 🌸 Wildflower

A modern e-commerce web application for artisan bakery products, built with React and Express.js.

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=flat&logo=express)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)

## ✨ Features

- **Product Catalogue** - Browse artisan baked goods with category filtering
- **User Authentication** - Register, login, and session management with JWT
- **Contact Form** - Get in touch with form validation
- **Responsive Design** - Mobile-first design with hamburger menu
- **Modern UI** - Clean, premium aesthetic with smooth animations

## 🛠️ Tech Stack

### Frontend (`apps/web`)
- React 18 + TypeScript
- Vite (build tool)
- TailwindCSS (styling)
- React Router DOM (routing)

### Backend (`apps/api`)
- Express.js + TypeScript
- Drizzle ORM
- LibSQL/SQLite (database)
- JWT Authentication
- Zod (validation)

## 📁 Project Structure

```
wildflower/
├── apps/
│   ├── web/                 # React frontend
│   │   ├── src/
│   │   │   ├── components/  # Reusable UI components
│   │   │   ├── pages/       # Page components
│   │   │   ├── context/     # React context (Auth)
│   │   │   └── services/    # API service layer
│   │   └── ...
│   └── api/                 # Express backend
│       ├── src/
│       │   ├── db/          # Database schema & connection
│       │   ├── routes/      # API routes
│       │   └── middleware/  # Auth middleware
│       └── ...
└── package.json             # Monorepo root
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/jouyai/wildflower.git
cd wildflower
```

2. Install dependencies
```bash
# Install root dependencies
npm install

# Install frontend dependencies
cd apps/web && npm install

# Install backend dependencies
cd ../api && npm install
```

3. Start development servers

**Terminal 1 - Frontend:**
```bash
cd apps/web
npm run dev
# → http://localhost:5173
```

**Terminal 2 - Backend:**
```bash
cd apps/api
npm run dev
# → http://localhost:3001
```

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/auth/register` | Register new user |
| `POST` | `/api/auth/login` | User login (returns JWT) |
| `GET` | `/api/auth/me` | Get current user (protected) |
| `GET` | `/api/products` | List all products |
| `GET` | `/api/products?category=Bread` | Filter by category |
| `GET` | `/api/products/:id` | Get single product |
| `POST` | `/api/contact` | Submit contact form |

## 🎨 Pages

- `/` - Home (landing page)
- `/catalogue` - Product catalogue with filters
- `/philosophy` - About & brand story
- `/contact` - Contact form
- `/login` - User login
- `/register` - User registration
- `/terms` - Terms of Service

## 📝 Environment Variables

Create `.env` files for production:

**Backend (`apps/api/.env`):**
```env
JWT_SECRET=your-secret-key
DATABASE_URL=file:./data/wildflower.db
PORT=3001
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

---

Made with ❤️ for artisan baking enthusiasts
