import { Link } from 'react-router-dom';

export function Philosophy() {
    return (
        <div className="flex flex-col w-full font-sans bg-background-light">
            {/* Hero Section */}
            <div className="px-4 md:px-20 lg:px-40 flex justify-center py-10">
                <div className="flex flex-col max-w-[960px] flex-1">
                    <div className="p-4">
                        <div
                            className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl items-center justify-center p-8 text-center"
                            style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCCeLPnqn7Sz2r2XOL9Qdimw1ML6enGzTiLqWnjwzULKpengU0YtwJ35TaLuAfwh5aXPKkeEguu4NoKalr9OIKbvf31KxGZx1uB_4837IvqwPg8LabDTVBlrvw5EsCxrR1cbVIj2TSplKHzPflC3mLDUu4WdDwLb4a24qQD4O4iy-kBEu9hgw5oVSTkQqvxJdDtDoIwkrj6IMXb0aXriRuKJ4ogd3xSuuMCdn0FtA_MluwAj5Or0tBSp3ef7bgFCpgYDGwCxoRgfO0")' }}
                        >
                            <div className="flex flex-col gap-4 max-w-[700px]">
                                <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] md:text-5xl">
                                    Redefining the art of baking for the solo kitchen.
                                </h1>
                                <p className="text-white/90 text-base font-normal leading-relaxed md:text-lg">
                                    Our mission is to bring high-quality, artisanal baking to every home, regardless of size.
                                </p>
                            </div>
                            <button className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-primary text-white text-base font-bold leading-normal hover:bg-brand-blue transition-colors">
                                <span className="truncate">Our Story</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* The Story Section */}
            <div className="px-4 md:px-20 lg:px-40 flex justify-center py-12">
                <div className="flex flex-col max-w-[960px] flex-1">
                    <div className="flex flex-col items-center">
                        <span className="text-primary font-bold tracking-widest text-xs uppercase mb-4">The Wildflower Story</span>
                        <h2 className="text-[#0d141b] text-3xl font-bold leading-tight tracking-[-0.015em] px-4 pb-6 text-center">Baking for One</h2>
                        <div className="max-w-[720px]">
                            <p className="text-[#0d141b] text-lg font-normal leading-relaxed pb-3 pt-1 px-4 text-center">
                                High-quality, artisanal baking often overlooks individuals living alone. Wildflower was born from a commitment to making premium treats accessible in smaller, meaningful portions, without sacrificing the soul of the craft.
                            </p>
                            <p className="text-[#4c739a] text-base font-normal leading-relaxed pb-3 pt-1 px-4 text-center">
                                We believe that everyone deserves the luxury of a freshly baked sourdough loaf or a perfectly laminated pastry, even if they aren't feeding a crowd. Our recipes are meticulously scaled for solo enjoyment and minimal waste.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Home-made Quality Section */}
            <div className="px-4 md:px-20 lg:px-40 flex justify-center py-10">
                <div className="flex flex-col max-w-[960px] flex-1">
                    <div className="flex flex-col gap-12 px-4 py-10 bg-white rounded-xl shadow-sm border border-slate-100">
                        <div className="flex flex-col lg:flex-row gap-10 items-center">
                            <div className="flex flex-col gap-4 flex-1">
                                <h2 className="text-[#0d141b] tracking-tight text-3xl font-bold leading-tight md:text-4xl">
                                    Home-made Quality
                                </h2>
                                <div className="w-12 h-1 bg-primary rounded-full"></div>
                                <p className="text-[#4c739a] text-base leading-relaxed mt-2">
                                    No preservatives, just sourced ingredients and the warmth of a kitchen-to-table philosophy. Every batch is crafted with the same care as if it were for our own family. We source our flour from local mills and use seasonal fruits for our fillings.
                                </p>
                                <div className="mt-4 flex items-center gap-2 text-primary">
                                    <span className="material-symbols-outlined">verified</span>
                                    <span className="font-semibold text-sm uppercase tracking-wider">Small Batch Certified</span>
                                </div>
                            </div>
                            <div className="flex-1 w-full">
                                <div
                                    className="w-full bg-center bg-no-repeat aspect-[4/3] bg-cover rounded-lg shadow-lg"
                                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDtajw7n19lfCEs9vK-U8pWA8z12aa6yCTuwCqBO3_NoUCPqczIj_IkhbrFC6Hcizt1Q57Cr3wZoWvWGClCG7PNjPHdsxkRm9Qa5vRQqSMCuiHdBDeNkO4bkEY8cGj9bYYSfSuVTY26DCZqPPOJaLodh-wu0MtWdXYPNBQ7M4wVqSFC31kyLl4HUAbP-mgt9BwC-cg3DaMW_vE9arQsyOUZdUk2DQ2rFFUwmEiWUgVLuJoFQvN0FA4W2zvHQGAX2GoTsJHJITvy5yU")' }}
                                ></div>
                            </div>
                        </div>

                        {/* Grid Features */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-slate-100">
                            <div className="flex flex-col gap-3">
                                <div className="size-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                                    <span className="material-symbols-outlined">person</span>
                                </div>
                                <div>
                                    <p className="text-[#0d141b] text-base font-bold leading-normal">Accessibility</p>
                                    <p className="text-[#4c739a] text-sm font-normal leading-normal mt-1">Thoughtfully designed for solo living and smaller households.</p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-3">
                                <div className="size-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                                    <span className="material-symbols-outlined">star</span>
                                </div>
                                <div>
                                    <p className="text-[#0d141b] text-base font-bold leading-normal">Quality</p>
                                    <p className="text-[#4c739a] text-sm font-normal leading-normal mt-1">Premium, organic ingredients with zero artificial additives.</p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-3">
                                <div className="size-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                                    <span className="material-symbols-outlined">local_fire_department</span>
                                </div>
                                <div>
                                    <p className="text-[#0d141b] text-base font-bold leading-normal">Small-batch</p>
                                    <p className="text-[#4c739a] text-sm font-normal leading-normal mt-1">Freshness guaranteed in every single bite we prepare.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <div className="px-4 md:px-20 lg:px-40 flex justify-center py-20">
                <div className="flex flex-col max-w-[960px] flex-1 text-center bg-primary/5 rounded-2xl p-12">
                    <h3 className="text-[#0d141b] text-2xl font-bold mb-4">Experience the Wildflower Difference</h3>
                    <p className="text-[#4c739a] mb-8 max-w-[500px] mx-auto">
                        Ready to treat yourself? Browse our seasonal selection of small-batch baked goods delivered to your door.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Link to="/catalogue">
                            <button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-bold transition-all">
                                Shop Now
                            </button>
                        </Link>
                        <Link to="/contact">
                            <button className="border border-primary text-primary hover:bg-primary/5 px-8 py-3 rounded-lg font-bold transition-all">
                                Contact Us
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
