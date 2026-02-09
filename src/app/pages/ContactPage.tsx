import React from "react";
import { ContactForm } from "../components/ContactFooter";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Globe, Sparkles, Send } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export const ContactPage = () => {
    const contactInfo = [
        {
            icon: MapPin,
            title: "Global Headquarters",
            details: ["123 Innovation Drive", "Nikol, Ahmedabad, India"],
            color: "from-blue-600 to-cyan-600"
        },
        {
            icon: Phone,
            title: "Direct Pipeline",
            details: ["+91 12345 67890"],
            color: "from-indigo-600 to-purple-600"
        },
        {
            icon: Mail,
            title: "Secure Channel",
            details: ["intel@globaljourney.com", "ops@globaljourney.com"],
            color: "from-purple-600 to-pink-600"
        },
        {
            icon: Clock,
            title: "Operational Hours",
            details: ["24/7 Global Support", "UTC-8 Protocol"],
            color: "from-emerald-600 to-teal-600"
        }
    ];

    return (
        <div className="min-h-screen pt-24 pb-16 bg-white dark:bg-[#0a0e27] transition-colors duration-500">
            {/* Background Decorations */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-500/5 dark:bg-blue-500/10 blur-[140px] rounded-full" />
                <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-500/5 dark:bg-purple-500/10 blur-[140px] rounded-full" />
            </div>

            {/* Hero Section */}
            <section className="relative py-24 lg:py-32 overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <ImageWithFallback
                        src="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&q=80&w=1920"
                        alt="Global Connection Center"
                        className="w-full h-full object-cover opacity-[0.3] dark:opacity-[0.35]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white dark:via-[#0a0e27]/80 dark:to-[#0a0e27]" />
                </div>
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-500 dark:text-slate-400 text-[10px] font-black uppercase tracking-widest mb-8 backdrop-blur-md"
                        >
                            <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
                            <span>Contact Synchronization</span>
                        </motion.div>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-black mb-8 text-slate-900 dark:text-white leading-tight">
                            Start Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400">Sync</span>
                        </h1>
                        <p className="text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed">
                            Initialize a secure connection with our global transition experts. Your journey parameters start here.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Form Section (Full Landscape) */}
            <section className="max-w-7xl mx-auto px-6 py-12 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <div className="relative p-1 rounded-[2.5rem] md:rounded-[4rem] bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20 shadow-2xl">
                        <div className="bg-white dark:bg-[#0a0e27] rounded-[2.25rem] md:rounded-[3.75rem] p-2 overflow-hidden">
                            <ContactForm />
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Contact Info Cards (Below Form) */}
            <section className="max-w-7xl mx-auto px-6 py-16 relative z-10">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
                    {contactInfo.map((info, index) => (
                        <motion.div
                            key={info.title}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3 + index * 0.1 }}
                            className="group bg-white dark:bg-[#131829] rounded-[2rem] md:rounded-[3.5rem] p-8 md:p-10 border border-slate-200 dark:border-indigo-500/10 hover:border-indigo-500/40 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-indigo-500/10"
                        >
                            <div className={`w-14 h-14 bg-gradient-to-br ${info.color} rounded-2xl flex items-center justify-center mb-8 shadow-xl group-hover:scale-110 transition-transform`}>
                                <info.icon className="w-7 h-7 text-white" />
                            </div>
                            <h3 className="text-2xl font-heading font-black mb-4 text-slate-900 dark:text-white tracking-tight">
                                {info.title}
                            </h3>
                            <div className="space-y-1">
                                {info.details.map((detail, idx) => (
                                    <p key={idx} className="text-slate-500 dark:text-slate-400 text-base font-bold">
                                        {detail}
                                    </p>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Tactical Map / Secondary CTA below cards */}
                <div className="mt-20 grid lg:grid-cols-2 gap-10">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-slate-900 rounded-[2.5rem] md:rounded-[3.5rem] p-8 md:p-12 text-white relative overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative z-10 flex flex-col md:flex-row gap-8 md:gap-10 items-center">
                            <div className="w-20 h-20 bg-white/10 rounded-3xl flex items-center justify-center backdrop-blur-xl shrink-0">
                                <Globe className="w-10 h-10 text-indigo-400" />
                            </div>
                            <div>
                                <h3 className="text-2xl md:text-3xl font-heading font-black mb-4 tracking-tight">Global Network</h3>
                                <p className="text-white/70 font-bold mb-6">Our strategic intelligence nodes span 195+ countries, providing 24/7 protocol verification.</p>
                                <button className="bg-indigo-600 px-8 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-indigo-500 transition-colors shadow-xl shadow-indigo-500/20">
                                    Explore Map
                                </button>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-indigo-600 rounded-[2.5rem] md:rounded-[3.5rem] p-8 md:p-12 text-white relative overflow-hidden group shadow-2xl shadow-indigo-500/30"
                    >
                        <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-white/10 rounded-full blur-[80px]" />
                        <div className="relative z-10 flex flex-col md:flex-row gap-10 items-center">
                            <div className="w-20 h-20 bg-white/20 rounded-3xl flex items-center justify-center backdrop-blur-xl shadow-2xl">
                                <MapPin className="w-10 h-10 text-white" />
                            </div>
                            <div>
                                <h3 className="text-3xl font-heading font-black mb-4 tracking-tight">Headquarters</h3>
                                <p className="text-white/80 font-bold mb-6">Experience our physical intelligence deck in Ahmedabad for complex dossiers.</p>
                                <button className="bg-white text-indigo-600 px-8 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl">
                                    Get Directions
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};
