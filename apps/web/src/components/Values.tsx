export function Values() {
    return (
        <section className="py-32 px-8 lg:px-24 bg-neutral-soft">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-24 flex flex-col items-center">
                    <span className="text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-4">Our Core Values</span>
                    <h2 className="text-4xl text-slate-900 max-w-xl">Mindfully crafted with respect for ingredients and scale.</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24">
                    <div className="flex flex-col items-start gap-6">
                        <div className="w-12 h-12 flex items-center justify-center text-primary bg-white shadow-sm border border-slate-100">
                            <span className="material-symbols-outlined text-3xl">eco</span>
                        </div>
                        <h3 className="text-2xl text-slate-900">Zero Waste</h3>
                        <p className="text-slate-500 font-light leading-relaxed">By sizing our bakes for individuals, we eliminate the unnecessary waste common in traditional family-sized bakeries.</p>
                    </div>
                    <div className="flex flex-col items-start gap-6">
                        <div className="w-12 h-12 flex items-center justify-center text-primary bg-white shadow-sm border border-slate-100">
                            <span className="material-symbols-outlined text-3xl">auto_awesome</span>
                        </div>
                        <h3 className="text-2xl text-slate-900">Purity</h3>
                        <p className="text-slate-500 font-light leading-relaxed">Simple, organic ingredients sourced from local mills. No preservatives, just slow-fermented goodness.</p>
                    </div>
                    <div className="flex flex-col items-start gap-6">
                        <div className="w-12 h-12 flex items-center justify-center text-primary bg-white shadow-sm border border-slate-100">
                            <span className="material-symbols-outlined text-3xl">balance</span>
                        </div>
                        <h3 className="text-2xl text-slate-900">Right Proportion</h3>
                        <p className="text-slate-500 font-light leading-relaxed">We believe in eating well, not eating more. Our portions are designed for a single, satisfying meal.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
