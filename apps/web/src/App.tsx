import type { ReactNode } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Catalogue } from './pages/Catalogue';
import { Philosophy } from './pages/Philosophy';
import { Contact } from './pages/Contact';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Terms } from './pages/Terms';
import { AuthProvider } from './context/AuthContext';

// Layout wrapper for pages with main Header/Footer
function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex flex-col min-h-screen overflow-x-hidden font-sans">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          {/* Auth pages (standalone layout) */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Main app pages */}
          <Route path="/" element={<MainLayout><Home /></MainLayout>} />
          <Route path="/catalogue" element={<MainLayout><Catalogue /></MainLayout>} />
          <Route path="/philosophy" element={<MainLayout><Philosophy /></MainLayout>} />
          <Route path="/contact" element={<MainLayout><Contact /></MainLayout>} />
          <Route path="/terms" element={<MainLayout><Terms /></MainLayout>} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
