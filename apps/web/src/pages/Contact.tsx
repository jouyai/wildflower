import { useState } from 'react';
import { contactAPI } from '../services/api';

export function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            await contactAPI.submit(formData);
            setSuccess(true);
            setFormData({ name: '', email: '', message: '' });
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to send message');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex-1 flex justify-center py-8 sm:py-12 px-4 sm:px-6 lg:px-40 bg-background-light">
            <div className="flex flex-col max-w-[1000px] flex-1">
                {/* Page Heading */}
                <div className="flex flex-wrap justify-between gap-3 px-0 sm:p-4 mb-6 sm:mb-8">
                    <div className="flex min-w-0 sm:min-w-72 flex-col gap-2 sm:gap-3">
                        <h1 className="text-[#0d141b] text-2xl sm:text-4xl font-black leading-tight tracking-[-0.033em]">Get in Touch</h1>
                        <p className="text-[#4c739a] text-sm sm:text-lg font-normal leading-normal">We'd love to hear from you. Our team usually replies within 24 hours.</p>
                    </div>
                </div>

                {/* Split Layout: Form and Sidebar */}
                <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 px-0 sm:px-4">
                    {/* Contact Form Section (60%) */}
                    <div className="flex-[1.5] flex flex-col gap-6">
                        <div className="bg-white p-4 sm:p-8 rounded-xl border border-[#e7edf3] shadow-sm">
                            {success ? (
                                <div className="text-center py-8">
                                    <span className="material-symbols-outlined text-5xl text-green-500 mb-4">check_circle</span>
                                    <h3 className="text-xl font-bold text-[#0d141b] mb-2">Message Sent!</h3>
                                    <p className="text-[#4c739a]">Thank you for reaching out. We'll respond within 24 hours.</p>
                                    <button
                                        onClick={() => setSuccess(false)}
                                        className="mt-6 text-primary font-semibold hover:underline"
                                    >
                                        Send another message
                                    </button>
                                </div>
                            ) : (
                                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                                    {error && (
                                        <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
                                            {error}
                                        </div>
                                    )}

                                    {/* Name Field */}
                                    <div className="flex flex-col w-full">
                                        <label className="flex flex-col min-w-40 flex-1">
                                            <p className="text-[#0d141b] text-base font-medium leading-normal pb-2">Name</p>
                                            <input
                                                className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0d141b] focus:outline-0 focus:ring-2 focus:ring-primary/20 border border-[#cfdbe7] bg-white focus:border-primary h-14 placeholder:text-[#4c739a] p-[15px] text-base font-normal leading-normal"
                                                placeholder="Your full name"
                                                type="text"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                required
                                            />
                                        </label>
                                    </div>

                                    {/* Email Field */}
                                    <div className="flex flex-col w-full">
                                        <label className="flex flex-col min-w-40 flex-1">
                                            <p className="text-[#0d141b] text-base font-medium leading-normal pb-2">Email</p>
                                            <input
                                                className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0d141b] focus:outline-0 focus:ring-2 focus:ring-primary/20 border border-[#cfdbe7] bg-white focus:border-primary h-14 placeholder:text-[#4c739a] p-[15px] text-base font-normal leading-normal"
                                                placeholder="hello@example.com"
                                                type="email"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                required
                                            />
                                        </label>
                                    </div>

                                    {/* Message Field */}
                                    <div className="flex flex-col w-full">
                                        <label className="flex flex-col min-w-40 flex-1">
                                            <p className="text-[#0d141b] text-base font-medium leading-normal pb-2">Message</p>
                                            <textarea
                                                className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0d141b] focus:outline-0 focus:ring-2 focus:ring-primary/20 border border-[#cfdbe7] bg-white focus:border-primary min-h-48 placeholder:text-[#4c739a] p-[15px] text-base font-normal leading-normal"
                                                placeholder="How can we help?"
                                                value={formData.message}
                                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                                required
                                            ></textarea>
                                        </label>
                                    </div>

                                    <div className="pt-4">
                                        <button
                                            className="flex min-w-[160px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-14 px-6 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 disabled:opacity-50 disabled:cursor-not-allowed"
                                            type="submit"
                                            disabled={loading}
                                        >
                                            <span className="truncate">{loading ? 'Sending...' : 'Send Message'}</span>
                                        </button>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>

                    {/* Sidebar Info (40%) */}
                    <div className="flex-1 flex flex-col gap-8">
                        {/* Direct Contact */}
                        <div className="flex flex-col gap-4">
                            <h3 className="text-xl font-bold text-[#0d141b]">Contact Information</h3>
                            <div className="flex flex-col gap-6">
                                <div className="flex items-center gap-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                        <span className="material-symbols-outlined">mail</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-sm font-medium text-[#4c739a]">Email us at</p>
                                        <a className="text-lg font-semibold text-[#0d141b] hover:text-primary transition-colors" href="mailto:hello@wildflower.com">hello@wildflower.com</a>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                        <span className="material-symbols-outlined">schedule</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-sm font-medium text-[#4c739a]">Response time</p>
                                        <p className="text-lg font-semibold text-[#0d141b]">Within 24 hours</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Social Handles */}
                        <div className="flex flex-col gap-4">
                            <h3 className="text-xl font-bold text-[#0d141b]">Follow Us</h3>
                            <div className="flex flex-col gap-3">
                                <p className="text-[#4c739a] text-sm">Stay connected and see our latest updates on social media.</p>
                                <div className="flex gap-4">
                                    <a className="flex h-10 w-10 items-center justify-center rounded-full bg-white border border-[#cfdbe7] text-[#0d141b] hover:bg-primary hover:text-white hover:border-primary transition-all" href="#">
                                        <span className="material-symbols-outlined text-[20px]">public</span>
                                    </a>
                                    <a className="flex h-10 w-10 items-center justify-center rounded-full bg-white border border-[#cfdbe7] text-[#0d141b] hover:bg-primary hover:text-white hover:border-primary transition-all" href="#">
                                        <span className="material-symbols-outlined text-[20px]">chat_bubble</span>
                                    </a>
                                    <a className="flex h-10 w-10 items-center justify-center rounded-full bg-white border border-[#cfdbe7] text-[#0d141b] hover:bg-primary hover:text-white hover:border-primary transition-all" href="#">
                                        <span className="material-symbols-outlined text-[20px]">alternate_email</span>
                                    </a>
                                </div>
                                <p className="mt-2 text-sm font-medium text-primary">@wildflower_brand</p>
                            </div>
                        </div>

                        {/* Office Location */}
                        <div className="mt-4 rounded-xl overflow-hidden h-40 w-full relative group">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-primary/80 mix-blend-multiply z-10"></div>
                            <img
                                className="w-full h-full object-cover"
                                alt="Abstract blue geometric pattern background"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbe7Kb343vqfGoJf4WvuzPVl-XUuh3nbeQmFaq7-XQT09KOul2aK7c052aFsNEkAa-7j5Bcj9zLEmynOxo6KdkXO45FNR2LMDKFuDyqOWd5xNieo59Qo5NfiUBkM2C3rqBedEVPuQkNqw2C31NxgqBGLsEJdVwTXpoqG6EGSfWIaKa_tqVQJkgDU_TuRcZWjHNH1LUT1moPgc5PcmEa2cH1k9Azsu_Y5S7uLdbhCbtE7VaMe40nZg7_r4AVil9fnwyhbJuz_DbmtM"
                            />
                            <div className="absolute inset-0 flex flex-col justify-end p-4 z-20">
                                <p className="text-white font-bold text-sm">Wildflower HQ</p>
                                <p className="text-white/80 text-xs">San Francisco, CA</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
