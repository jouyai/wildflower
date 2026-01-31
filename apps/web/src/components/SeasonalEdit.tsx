export function SeasonalEdit() {
    return (
        <section className="py-32 px-8 lg:px-24">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-baseline gap-4 mb-16 border-b border-slate-100 pb-8">
                    <div>
                        <span className="text-[10px] uppercase tracking-[0.3em] text-primary font-bold">Curated Selection</span>
                        <h2 className="text-3xl text-slate-900 mt-2">The Seasonal Edit</h2>
                    </div>
                    <a href="#" className="text-xs uppercase tracking-widest font-bold text-slate-400 hover:text-primary transition-colors">Browse Entire Collection →</a>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
                    <div className="group">
                        <div className="aspect-square bg-neutral-100 overflow-hidden mb-6">
                            <img
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0cyWU2IIUfFhxKt0A92h2rlr_Gk_9j_pr9RWywYmvaP5yFmD5cX7FVEwcb2G8tXNShi0JeaY-cF59l8WiUGHxD4YjtAt5-ry_X56w-0NxkHEvdEPTfxmJwLVwj71dhFKwx14MZiLybyLReFGqTn5TB607I6aY2-VCpjU33RruO4ykuyCcURqn7IYxWNyYC6CiKFlO_VgrV8l6N2rmEg4WuWdyQHi2V0oOYz3I0nbTW0kY4fy9ieFVVibIxnHI4q7gCBF5XT2hHzc"
                                alt="Golden Croissant"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                        <div className="flex justify-between items-center mb-1">
                            <h4 className="font-serif text-lg text-slate-800">Petite Croissant</h4>
                            <span className="text-sm font-medium text-slate-400">$4.50</span>
                        </div>
                        <p className="text-xs text-slate-500 uppercase tracking-wider">Traditional Butter</p>
                    </div>
                    <div className="group">
                        <div className="aspect-square bg-neutral-100 overflow-hidden mb-6">
                            <img
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmIp1DsKfbLpahjM5hsF7XGbBG7uK4WXzjMIdTFCX5hDe0FxcNumSoI1wgHvhXIpkmkeAIexCc3CVqjTm6V35vD_kGbkgeFjXQnfmUPXitmyjAo-AZeLUBq7fxS2nwqKEp_3U2YJN_SFKcVrpOa3-yusee2eecRLpAcjN5PjzXxoCfIAvMCuFvYGDzoWheEfBWZfUiZ39ON4RX1eHG5-YTFSCpYvJRL438HmVswTcwRKwkxSb_BI8gB-nSM26MabISWQq52XegED4"
                                alt="Sourdough"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                        <div className="flex justify-between items-center mb-1">
                            <h4 className="font-serif text-lg text-slate-800">Single Sourdough</h4>
                            <span className="text-sm font-medium text-slate-400">$6.00</span>
                        </div>
                        <p className="text-xs text-slate-500 uppercase tracking-wider">Heritage Grain</p>
                    </div>
                    <div className="group">
                        <div className="aspect-square bg-neutral-100 overflow-hidden mb-6">
                            <img
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCiSs2I9BqjO29czpoJK3xdzhd1uy8d3AvCH-eJB6ei6qwMCLQHc7MNyKAzWoosiLB8arG6DKmCwG0YImA6zvtQsgffv8eTrtK8Tx7oKdX6onnEExpdg3djK-cIRSqSSdOs5RD5Fs0OCVsYtkoP4Rtir8KEHEiSGXvYZ7qH0IW8NJWHbXQr3dQhfv3MHsNRJsGWNDopEJTDcZmxD70QiT00cTd6F1VAZvMt0_vXqqdBz9A1FsLN61eQ7G_IS1IJHP_nKs5dTFWVQXo"
                                alt="Blueberry Muffin"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                        <div className="flex justify-between items-center mb-1">
                            <h4 className="font-serif text-lg text-slate-800">Morning Muffin</h4>
                            <span className="text-sm font-medium text-slate-400">$5.00</span>
                        </div>
                        <p className="text-xs text-slate-500 uppercase tracking-wider">Wild Berry</p>
                    </div>
                    <div className="group">
                        <div className="aspect-square bg-neutral-100 overflow-hidden mb-6">
                            <img
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0sJkyJxiYDrIvHwhwdmVq1AcFUUWTGYXXDwpsFGDB3F9CRvWpjH9kilzUz9EhmYu-k6n8oxtkcFZNgcf2erh_E5opjX1wsIppsYFXXFg3XQoIkYY5h40iOkyBNfOC9F4NGZxW-M5iLJXYMQtHgrusF4F0ZK1y034PyrFoyHHFIjQVjdFbnp6wmW_zbS2VetPFIUUqKklLoPtdYnA7fqqjG14OroL_BRupIcMo1xve9XYX3pRxqHcbLY5Ve9f-gVwSaD6TaxXUgr8"
                                alt="Baguette"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                        <div className="flex justify-between items-center mb-1">
                            <h4 className="font-serif text-lg text-slate-800">Half Baguette</h4>
                            <span className="text-sm font-medium text-slate-400">$3.50</span>
                        </div>
                        <p className="text-xs text-slate-500 uppercase tracking-wider">Artisan Wheat</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
