import { Link } from 'react-router-dom';

export function Terms() {
    return (
        <div className="flex-1 flex justify-center py-12 px-6 lg:px-40 bg-background-light">
            <div className="flex flex-col max-w-[800px] flex-1">
                {/* Page Heading */}
                <div className="mb-12">
                    <h1 className="text-[#0d141b] text-4xl font-bold leading-tight tracking-[-0.033em] mb-4">Terms of Service</h1>
                    <p className="text-[#4c739a] text-base">Last updated: January 2024</p>
                </div>

                {/* Content */}
                <div className="prose prose-slate max-w-none space-y-8">
                    <section>
                        <h2 className="text-xl font-bold text-[#0d141b] mb-4">1. Agreement to Terms</h2>
                        <p className="text-[#4c739a] leading-relaxed">
                            By accessing or using Wildflower's website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-[#0d141b] mb-4">2. Our Products</h2>
                        <p className="text-[#4c739a] leading-relaxed">
                            Wildflower offers high-quality, home-made baked goods in right-sized portions. All products are made fresh and intended for personal consumption. Product availability and pricing may vary.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-[#0d141b] mb-4">3. Ordering & Delivery</h2>
                        <p className="text-[#4c739a] leading-relaxed">
                            Orders are subject to availability. We strive to deliver fresh products within the specified timeframe. Delivery times may vary based on location and order volume.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-[#0d141b] mb-4">4. Privacy</h2>
                        <p className="text-[#4c739a] leading-relaxed">
                            Your privacy is important to us. We collect only essential information needed to process orders and improve our services. We never sell your personal data to third parties.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-[#0d141b] mb-4">5. Contact</h2>
                        <p className="text-[#4c739a] leading-relaxed">
                            If you have questions about these terms, please <Link to="/contact" className="text-primary hover:underline">contact us</Link>. We're happy to help.
                        </p>
                    </section>
                </div>

                {/* Back Link */}
                <div className="mt-12 pt-8 border-t border-slate-200">
                    <Link to="/" className="text-primary font-medium hover:underline">← Back to Home</Link>
                </div>
            </div>
        </div>
    );
}
