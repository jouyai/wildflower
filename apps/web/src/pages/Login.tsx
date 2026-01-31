import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export function Login() {
    const navigate = useNavigate();
    const { login } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            await login(email, password);
            navigate('/');
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to login');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex flex-col bg-background-light font-sans antialiased text-slate-900">
            {/* Minimal Header */}
            <header className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto w-full">
                <Link to="/" className="flex items-center gap-2">
                    <div className="size-6 text-primary flex items-center justify-center">
                        <span className="material-symbols-outlined text-2xl">local_florist</span>
                    </div>
                    <span className="text-xl font-serif font-bold tracking-tight text-primary">Wildflower</span>
                </Link>
                <div>
                    <Link to="/contact" className="text-sm font-medium text-slate-500 hover:text-primary transition-colors">Help</Link>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-1 flex flex-col items-center justify-center px-6 pb-20">
                <div className="w-full max-w-[400px]">
                    <div className="text-center mb-10">
                        <h1 className="text-3xl font-serif font-bold text-slate-900 tracking-tight mb-3">Welcome back</h1>
                        <p className="text-[#4c739a] text-sm">Please enter your details to sign in.</p>
                    </div>

                    <form className="space-y-6" onSubmit={handleSubmit}>
                        {error && (
                            <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
                                {error}
                            </div>
                        )}

                        {/* Email Field */}
                        <div className="space-y-1.5">
                            <label className="text-[13px] font-semibold text-slate-700 ml-1" htmlFor="email">Email address</label>
                            <input
                                autoComplete="email"
                                className="flex w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm transition-all focus:border-primary focus:ring-1 focus:ring-primary/20 focus:outline-none placeholder:text-slate-400"
                                id="email"
                                placeholder="name@example.com"
                                required
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        {/* Password Field */}
                        <div className="space-y-1.5">
                            <div className="flex justify-between items-center px-1">
                                <label className="text-[13px] font-semibold text-slate-700" htmlFor="password">Password</label>
                                <Link className="text-[12px] font-medium text-primary hover:text-blue-700" to="/contact">Forgot password?</Link>
                            </div>
                            <input
                                autoComplete="current-password"
                                className="flex w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm transition-all focus:border-primary focus:ring-1 focus:ring-primary/20 focus:outline-none placeholder:text-slate-400"
                                id="password"
                                placeholder="••••••••"
                                required
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="pt-2">
                            <button
                                className="w-full bg-primary text-white py-3.5 rounded-lg font-bold text-sm hover:bg-brand-blue transition-colors shadow-sm active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed"
                                type="submit"
                                disabled={loading}
                            >
                                {loading ? 'Signing In...' : 'Sign In'}
                            </button>
                        </div>
                    </form>

                    <div className="mt-10 text-center">
                        <p className="text-sm text-[#4c739a]">
                            New to Wildflower?
                            <Link className="text-primary font-semibold hover:underline decoration-2 underline-offset-4 ml-1" to="/register">Create an account</Link>
                        </p>
                    </div>
                </div>
            </main>

            {/* Minimal Footer */}
            <footer className="w-full py-8 border-t border-slate-200/60">
                <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-[12px] text-[#4c739a]">© 2024 Wildflower Bakery. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link className="text-[12px] text-[#4c739a] hover:text-primary transition-colors" to="/terms">Privacy</Link>
                        <Link className="text-[12px] text-[#4c739a] hover:text-primary transition-colors" to="/terms">Terms</Link>
                        <Link className="text-[12px] text-[#4c739a] hover:text-primary transition-colors" to="/contact">Contact</Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}
