import { Link } from 'react-router-dom';

export function Footer() {
    return (
        <footer className="bg-white py-12 sm:py-20 px-4 sm:px-8 lg:px-24 border-t border-slate-100">
            <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 md:gap-8">
                <div className="col-span-2 sm:col-span-2 md:col-span-1 flex flex-col gap-4 sm:gap-6">
                    <Link to="/" className="flex items-center gap-2 text-primary">
                        <span className="material-symbols-outlined">local_florist</span>
                        <span className="text-lg font-serif font-bold">Wildflower</span>
                    </Link>
                    <p className="text-xs text-slate-400 leading-relaxed uppercase tracking-widest">
                        Right-sized artisan baking for the modern individual.
                    </p>
                </div>
                <div>
                    <h5 className="text-[11px] uppercase tracking-[0.3em] font-bold text-slate-900 mb-4 sm:mb-8">Shop</h5>
                    <ul className="flex flex-col gap-3 sm:gap-4 text-xs font-medium text-slate-500 uppercase tracking-widest">
                        <li><Link to="/catalogue" className="hover:text-primary transition-colors">Catalogue</Link></li>
                    </ul>
                </div>
                <div>
                    <h5 className="text-[11px] uppercase tracking-[0.3em] font-bold text-slate-900 mb-4 sm:mb-8">About</h5>
                    <ul className="flex flex-col gap-3 sm:gap-4 text-xs font-medium text-slate-500 uppercase tracking-widest">
                        <li><Link to="/philosophy" className="hover:text-primary transition-colors">Our Story</Link></li>
                        <li><Link to="/philosophy" className="hover:text-primary transition-colors">Philosophy</Link></li>
                    </ul>
                </div>
                <div>
                    <h5 className="text-[11px] uppercase tracking-[0.3em] font-bold text-slate-900 mb-4 sm:mb-8">Contact</h5>
                    <ul className="flex flex-col gap-3 sm:gap-4 text-xs font-medium text-slate-500 uppercase tracking-widest">
                        <li><Link to="/contact" className="hover:text-primary transition-colors">Get in Touch</Link></li>
                    </ul>
                </div>
            </div>
            <div className="max-w-7xl mx-auto mt-12 sm:mt-20 pt-6 sm:pt-8 border-t border-slate-50 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-center sm:text-left">
                <p className="text-[10px] uppercase tracking-widest text-slate-400">© 2024 Wildflower Bakery. All rights reserved.</p>
                <Link to="/terms" className="text-[10px] uppercase tracking-widest text-slate-400 hover:text-primary transition-colors">Privacy & Terms</Link>
            </div>
        </footer>
    );
}
