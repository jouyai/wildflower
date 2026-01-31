import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export function Header() {
    const { user, logout } = useAuth();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md">
            <div className="flex items-center justify-between px-4 sm:px-8 lg:px-24 py-4 sm:py-6">
                <Link to="/" className="flex items-center gap-2">
                    <div className="size-6 text-primary flex items-center justify-center">
                        <span className="material-symbols-outlined text-2xl">local_florist</span>
                    </div>
                    <span className="text-lg sm:text-xl font-serif font-bold tracking-tight text-primary">Wildflower</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8 lg:gap-12">
                    <Link to="/catalogue" className="text-[13px] uppercase tracking-widest font-medium hover:text-primary transition-colors">Catalogue</Link>
                    <Link to="/philosophy" className="text-[13px] uppercase tracking-widest font-medium hover:text-primary transition-colors">Our Philosophy</Link>
                    <Link to="/contact" className="text-[13px] uppercase tracking-widest font-medium hover:text-primary transition-colors">Contact</Link>
                </nav>

                {/* Desktop Auth/Shop */}
                <div className="hidden sm:flex items-center gap-4 lg:gap-6">
                    {user ? (
                        <>
                            <span className="text-[13px] font-medium text-slate-600 hidden lg:inline">Hi, {user.name.split(' ')[0]}</span>
                            <button
                                onClick={logout}
                                className="text-[13px] uppercase tracking-widest font-semibold text-primary hover:text-red-500 transition-colors"
                            >
                                Log Out
                            </button>
                        </>
                    ) : (
                        <Link to="/login" className="text-[13px] uppercase tracking-widest font-semibold text-primary">Log In</Link>
                    )}
                    <Link to="/catalogue">
                        <button className="bg-primary text-white text-[11px] sm:text-[12px] uppercase tracking-widest font-bold py-2.5 sm:py-3 px-5 sm:px-8 hover:bg-brand-blue transition-all">
                            Shop
                        </button>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="md:hidden flex items-center justify-center p-2 text-slate-700 hover:text-primary transition-colors"
                >
                    <span className="material-symbols-outlined text-2xl">
                        {mobileMenuOpen ? 'close' : 'menu'}
                    </span>
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden border-t border-slate-100 bg-white">
                    <nav className="flex flex-col px-4 py-4">
                        <Link
                            to="/catalogue"
                            onClick={() => setMobileMenuOpen(false)}
                            className="py-3 text-sm uppercase tracking-widest font-medium hover:text-primary transition-colors border-b border-slate-50"
                        >
                            Catalogue
                        </Link>
                        <Link
                            to="/philosophy"
                            onClick={() => setMobileMenuOpen(false)}
                            className="py-3 text-sm uppercase tracking-widest font-medium hover:text-primary transition-colors border-b border-slate-50"
                        >
                            Our Philosophy
                        </Link>
                        <Link
                            to="/contact"
                            onClick={() => setMobileMenuOpen(false)}
                            className="py-3 text-sm uppercase tracking-widest font-medium hover:text-primary transition-colors border-b border-slate-50"
                        >
                            Contact
                        </Link>

                        <div className="flex items-center justify-between pt-4 mt-2">
                            {user ? (
                                <button
                                    onClick={() => { logout(); setMobileMenuOpen(false); }}
                                    className="text-sm uppercase tracking-widest font-semibold text-red-500"
                                >
                                    Log Out
                                </button>
                            ) : (
                                <Link
                                    to="/login"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="text-sm uppercase tracking-widest font-semibold text-primary"
                                >
                                    Log In
                                </Link>
                            )}
                            <Link to="/catalogue" onClick={() => setMobileMenuOpen(false)}>
                                <button className="bg-primary text-white text-[11px] uppercase tracking-widest font-bold py-2.5 px-6 hover:bg-brand-blue transition-all">
                                    Shop
                                </button>
                            </Link>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
}
