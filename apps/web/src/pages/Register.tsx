import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export function Register() {
    const navigate = useNavigate();
    const { register } = useAuth();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [acceptTerms, setAcceptTerms] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!acceptTerms) {
            setError('Please accept the Terms of Service and Privacy Policy');
            return;
        }

        setLoading(true);
        setError(null);

        try {
            await register(email, password, name);
            navigate('/');
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to create account');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex flex-col font-sans bg-background-light text-slate-900 antialiased">
            {/* Minimal Header */}
            <header className="w-full px-6 py-6 md:px-12 flex justify-between items-center">
                <Link to="/" className="flex items-center gap-2">
                    <div className="size-6 text-primary flex items-center justify-center">
                        <span className="material-symbols-outlined text-2xl">local_florist</span>
                    </div>
                    <span className="text-xl font-serif font-bold tracking-tight text-primary">Wildflower</span>
                </Link>
                <div>
                    <Link className="text-sm font-medium text-[#4c739a] hover:text-primary transition-colors" to="/login">Log in</Link>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-1 flex items-center justify-center px-6 py-12 md:py-24">
                <div className="w-full max-w-[440px] bg-white rounded-xl border border-slate-100 p-8 md:p-12 shadow-sm">
                    <div className="mb-10 text-center">
                        <h1 className="text-2xl font-serif font-bold tracking-tight mb-3">Create your account</h1>
                        <p className="text-[#4c739a] text-sm leading-relaxed">Join a community built on trust and simplicity.</p>
                    </div>

                    <form className="space-y-6" onSubmit={handleSubmit}>
                        {error && (
                            <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
                                {error}
                            </div>
                        )}

                        {/* Full Name Field */}
                        <div className="space-y-1.5">
                            <label className="text-[13px] font-medium text-slate-700 ml-0.5" htmlFor="name">Full Name</label>
                            <input
                                className="w-full h-11 px-4 rounded-lg border border-slate-200 bg-white text-sm placeholder:text-slate-400 transition-all focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/20"
                                id="name"
                                placeholder="Jane Doe"
                                required
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>

                        {/* Email Field */}
                        <div className="space-y-1.5">
                            <label className="text-[13px] font-medium text-slate-700 ml-0.5" htmlFor="email">Email address</label>
                            <input
                                className="w-full h-11 px-4 rounded-lg border border-slate-200 bg-white text-sm placeholder:text-slate-400 transition-all focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/20"
                                id="email"
                                placeholder="jane@example.com"
                                required
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        {/* Password Field */}
                        <div className="space-y-1.5">
                            <label className="text-[13px] font-medium text-slate-700 ml-0.5" htmlFor="password">Password</label>
                            <div className="relative">
                                <input
                                    className="w-full h-11 px-4 pr-10 rounded-lg border border-slate-200 bg-white text-sm placeholder:text-slate-400 transition-all focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/20"
                                    id="password"
                                    placeholder="Create a password"
                                    required
                                    type={showPassword ? 'text' : 'password'}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    minLength={8}
                                />
                                <button
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#4c739a] hover:text-primary transition-colors"
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    <span className="material-symbols-outlined text-lg">
                                        {showPassword ? 'visibility_off' : 'visibility'}
                                    </span>
                                </button>
                            </div>
                            <p className="text-[11px] text-[#4c739a] mt-1 ml-0.5 italic">At least 8 characters</p>
                        </div>

                        {/* Terms Checkbox */}
                        <div className="flex items-start gap-3 pt-2">
                            <div className="flex h-5 items-center">
                                <input
                                    className="h-4 w-4 rounded border-slate-200 text-primary focus:ring-0 focus:ring-offset-0 transition-all"
                                    id="terms"
                                    type="checkbox"
                                    checked={acceptTerms}
                                    onChange={(e) => setAcceptTerms(e.target.checked)}
                                />
                            </div>
                            <label className="text-xs text-[#4c739a] leading-snug" htmlFor="terms">
                                I agree to the <Link className="text-primary hover:underline underline-offset-2" to="/terms">Terms of Service</Link> and <Link className="text-primary hover:underline underline-offset-2" to="/terms">Privacy Policy</Link>.
                            </label>
                        </div>

                        {/* Submit Button */}
                        <div className="pt-4">
                            <button
                                className="w-full h-11 bg-primary text-white text-sm font-bold rounded-lg hover:bg-brand-blue transition-all shadow-sm active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed"
                                type="submit"
                                disabled={loading}
                            >
                                {loading ? 'Creating Account...' : 'Create Account'}
                            </button>
                        </div>
                    </form>

                    <div className="mt-8 pt-8 border-t border-slate-100 text-center">
                        <p className="text-sm text-[#4c739a]">
                            Already have an account?
                            <Link className="text-primary font-semibold hover:underline underline-offset-4 ml-1" to="/login">Log in</Link>
                        </p>
                    </div>
                </div>
            </main>

            {/* Minimal Footer */}
            <footer className="py-8 text-center">
                <p className="text-[11px] tracking-widest uppercase text-[#4c739a] opacity-60">
                    © 2024 Wildflower Bakery — Baking for the solo kitchen
                </p>
            </footer>
        </div>
    );
}
