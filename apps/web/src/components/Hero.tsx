import { Link } from 'react-router-dom';

export function Hero() {
    return (
        <section className="relative px-4 sm:px-8 lg:px-24 pt-8 sm:pt-16 pb-16 sm:pb-32 flex justify-center overflow-hidden">
            <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-20 items-center">
                <div className="flex flex-col gap-6 sm:gap-10 max-w-xl order-2 lg:order-1">
                    <div className="flex flex-col gap-4 sm:gap-6 text-center lg:text-left">
                        <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-primary font-semibold">Artisan Baking for One</span>
                        <h1 className="text-3xl sm:text-5xl lg:text-7xl leading-[1.1] text-slate-900">
                            Freshly Baked. <br />
                            <span className="italic">Just for You.</span>
                        </h1>
                        <p className="text-base sm:text-lg text-slate-500 leading-relaxed font-light">
                            Quality over quantity. We specialize in right-sized, small-batch baked goods designed for individuals who appreciate the finer details of slow living.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                        <Link to="/catalogue" className="w-full sm:w-auto">
                            <button className="w-full sm:w-auto bg-primary text-white text-xs sm:text-sm uppercase tracking-widest font-bold py-4 sm:py-5 px-8 sm:px-10 hover:bg-brand-blue transition-all">
                                View Catalogue
                            </button>
                        </Link>
                        <Link to="/contact" className="w-full sm:w-auto">
                            <button className="w-full sm:w-auto border border-slate-200 text-slate-800 text-xs sm:text-sm uppercase tracking-widest font-bold py-4 sm:py-5 px-8 sm:px-10 hover:bg-slate-50 transition-all">
                                Contact Us
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="relative group order-1 lg:order-2">
                    <div className="absolute -inset-4 bg-accent-blue/50 rounded-full blur-3xl -z-10 opacity-60"></div>
                    <div className="aspect-[4/5] sm:aspect-[4/5] overflow-hidden bg-neutral-100 rounded-lg sm:rounded-none">
                        <img
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKC7zKYiLRsHWuKuAR3OcEV4DpenhEgkjkIzWAlnajeFLYDDfvnil51NWAlpwCrlD5TOikQ0-Hyhj6S3njBQ-wfZALKwo_1yqgrfINtzgI6yVive7RAgW9SkRTXp4cegl0oOQ6y8zDM-tpXP2ja8kwfCdoxSvqlG-GFSFYI2M2XGivKFJfrxyktKyvV1f8e3NkBR9TKzmzbs1vS44ecN5P2LIEKm_o5QvK_q_oSp4O4GUCBKkuJx8lB9bsZUMJC2EXspsToHJf0u4"
                            alt="Artisan Croissant"
                            className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                        />
                    </div>
                    <div className="absolute bottom-4 sm:bottom-8 left-4 sm:-left-8 bg-white p-4 sm:p-6 shadow-xl max-w-[200px] sm:max-w-[240px] hidden sm:block border-l-4 border-primary">
                        <p className="text-xs sm:text-sm italic font-serif text-slate-600">"The perfect size for my quiet Sunday mornings."</p>
                        <p className="mt-3 sm:mt-4 text-[9px] sm:text-[10px] uppercase tracking-widest font-bold text-primary">— Sarah, Soho</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
