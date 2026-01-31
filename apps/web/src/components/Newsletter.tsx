export function Newsletter() {
    return (
        <section className="py-32 px-8 lg:px-24 bg-primary text-white text-center">
            <div className="max-w-2xl mx-auto flex flex-col items-center gap-8">
                <span className="text-[10px] uppercase tracking-[0.4em] font-bold opacity-80">Join the Collective</span>
                <h2 className="text-4xl md:text-5xl font-serif">Slow mornings start here.</h2>
                <p className="text-lg opacity-80 font-light leading-relaxed">
                    Become part of a community that values craft over convenience. Receive weekly deliveries of freshly baked artisan goods.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 w-full justify-center mt-4">
                    <input
                        type="email"
                        placeholder="Email address"
                        className="bg-transparent border-b border-white/30 text-white placeholder:text-white/40 py-4 px-2 w-full sm:max-w-xs focus:ring-0 focus:border-white transition-all outline-none"
                    />
                    <button className="bg-white text-primary text-[11px] uppercase tracking-widest font-bold py-4 px-10 hover:bg-slate-100 transition-all">
                        Subscribe
                    </button>
                </div>
            </div>
        </section>
    );
}
