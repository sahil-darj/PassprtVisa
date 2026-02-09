import React, { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { Award, Users, Globe, TrendingUp, Shield, Clock, Heart, Sparkles, Binary } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const Counter = ({ value }: { value: string }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { stiffness: 45, damping: 25 }); // Smoother, slower spring
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    useEffect(() => {
        if (isInView) {
            const numericPart = parseFloat(value.replace(/,/g, "").replace(/[^0-9.]/g, ""));
            if (!isNaN(numericPart)) {
                motionValue.set(numericPart);
            }
        }
    }, [isInView, value, motionValue]);

    useEffect(() => {
        return springValue.on("change", (latest) => {
            if (ref.current) {
                const hasDecimal = value.includes(".");
                const hasComma = value.includes(",");

                let formatted = hasDecimal ? latest.toFixed(1) : Math.round(latest).toString();

                if (hasComma) {
                    // Check if it's a number before toLocaleString, though string is usually fine if parsed
                    const num = parseFloat(formatted);
                    if (!isNaN(num)) formatted = num.toLocaleString();
                }

                const suffix = value.replace(/[0-9.,]/g, "");
                ref.current.textContent = formatted + suffix;
            }
        });
    }, [springValue, value]);

    return <span ref={ref} className="tabular-nums">0</span>;
};

export const AboutPage = () => {
    const stats = [
        { icon: Users, value: "50,000+", label: "Validated Citizens", color: "from-blue-600 to-indigo-600" },
        { icon: Globe, value: "195+", label: "Geographic Nodes", color: "from-indigo-600 to-purple-600" },
        { icon: Award, value: "15+", label: "Operational Years", color: "from-purple-600 to-pink-600" },
        { icon: TrendingUp, value: "98.4%", label: "Protocol Success", color: "from-emerald-600 to-teal-600" }
    ];

    const values = [
        {
            icon: Shield,
            title: "Data Sovereignty",
            description: "Advanced encryption protocols ensuring absolute document integrity and private data security.",
            color: "from-blue-500 to-indigo-500"
        },
        {
            icon: Clock,
            title: "Rapid Execution",
            description: "Proprietary processing frameworks that bypass traditional bureaucratic bottlenecks with surgical precision.",
            color: "from-indigo-500 to-purple-500"
        },
        {
            icon: Heart,
            title: "Citizen-Centric",
            description: "Every protocol is optimized for the human experience, prioritizing your global mobility above all.",
            color: "from-purple-500 to-pink-500"
        },
        {
            icon: Binary,
            title: "Logic Driven",
            description: "Decision-making based on real-time global intelligence and verified migration data streams.",
            color: "from-emerald-500 to-teal-500"
        }
    ];

    return (
        <div className="min-h-screen pt-24 pb-16 bg-white dark:bg-[#0a0e27] transition-colors duration-500">
            {/* Background Decorations */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500/5 dark:bg-blue-500/10 blur-[160px] rounded-full" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/5 dark:bg-purple-500/10 blur-[140px] rounded-full" />
            </div>

            {/* Hero Section */}
            <section className="relative py-24 lg:py-32 overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <ImageWithFallback
                        src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1920"
                        alt="Corporate Global Network"
                        className="w-full h-full object-cover opacity-[0.3] dark:opacity-[0.35]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white dark:via-[#0a0e27]/80 dark:to-[#0a0e27]" />
                </div>
                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-500 dark:text-slate-400 text-[10px] font-black uppercase tracking-widest mb-10 backdrop-blur-md"
                        >
                            <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
                            <span>Organizational Dossier</span>
                        </motion.div>
                        <h1 className="text-6xl md:text-7xl lg:text-9xl font-heading font-black mb-10 text-slate-900 dark:text-white leading-[0.9] tracking-tighter">
                            Passport & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400">Visa</span>
                        </h1>
                        <p className="text-2xl text-slate-500 dark:text-slate-400 max-w-3xl mx-auto font-medium leading-relaxed italic">
                            "Architecting the infrastructure of global citizenship since 2009."
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="max-w-7xl mx-auto px-6 py-24 relative z-10">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white dark:bg-[#131829] rounded-[3rem] p-10 border border-slate-200 dark:border-indigo-500/10 shadow-2xl shadow-indigo-500/5 group hover:-translate-y-3 transition-all duration-500"
                        >
                            <div className={`w-14 h-14 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mb-8 shadow-xl group-hover:scale-110 transition-transform`}>
                                <stat.icon className="w-7 h-7 text-white" />
                            </div>
                            <div className="text-5xl font-heading font-black text-slate-900 dark:text-white mb-3">
                                <Counter value={stat.value} />
                            </div>
                            <div className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Story Section */}
            <section className="max-w-7xl mx-auto px-6 py-32 relative z-10">
                <div className="grid lg:grid-cols-2 gap-24 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl lg:text-5xl font-heading font-black mb-10 text-slate-900 dark:text-white leading-tight">
                            The Evolution of <br />
                            <span className="text-indigo-600 dark:text-indigo-400">Border Logistics</span>
                        </h2>
                        <div className="space-y-8 text-lg font-bold text-slate-500 dark:text-slate-400 leading-relaxed">
                            <p>
                                Founded in 2009, Passport & Visa emerged as a response to the increasing complexity of international migration. We realized that borders weren't just physical boundaries, but information barriers.
                            </p>
                            <p>
                                Our mission was to build a bridge of intelligence. What began as a specialized consultancy has evolved into a global logistics powerhouse, integrating advanced technology with human expertise.
                            </p>
                            <p className="p-8 rounded-[2rem] bg-slate-50 dark:bg-indigo-500/5 border border-slate-200 dark:border-indigo-500/10 italic">
                                "We don't just process documents; we authorize futures. Every passport stamped is a life expanded."
                            </p>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="relative"
                    >
                        <div className="aspect-square rounded-[4rem] bg-gradient-to-br from-indigo-600/20 via-purple-600/20 to-pink-600/20 dark:from-indigo-500/10 dark:to-purple-500/10 flex items-center justify-center border border-slate-200 dark:border-indigo-500/20 group overflow-hidden">
                            <Globe className="w-64 h-64 text-indigo-500 opacity-20 group-hover:opacity-40 transition-all duration-1000 group-hover:scale-110 group-hover:rotate-12" />
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.4)_100%)] hidden dark:block" />
                        </div>
                        {/* Decorative orbs */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-500/20 blur-3xl rounded-full" />
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500/20 blur-3xl rounded-full" />
                    </motion.div>
                </div>
            </section>

            {/* Values Section */}
            <section className="max-w-7xl mx-auto px-6 py-24 relative z-10">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl lg:text-5xl font-heading font-black mb-6 text-slate-900 dark:text-white">
                        The Core Matrix
                    </h2>
                    <p className="text-xl text-slate-500 dark:text-slate-400 font-bold max-w-2xl mx-auto">
                        Functional principles that drive our global operational success.
                    </p>
                </motion.div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {values.map((value, index) => (
                        <motion.div
                            key={value.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white dark:bg-[#131829] rounded-[3rem] p-10 border border-slate-200 dark:border-indigo-500/10 hover:border-indigo-500/40 transition-all group hover:-translate-y-3"
                        >
                            <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mb-8 shadow-xl group-hover:scale-110 transition-transform`}>
                                <value.icon className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-heading font-black mb-4 text-slate-900 dark:text-white tracking-tight">
                                {value.title}
                            </h3>
                            <p className="text-slate-500 dark:text-slate-400 font-bold text-sm leading-relaxed">
                                {value.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Leadership Section */}
            <section className="max-w-7xl mx-auto px-6 py-24 mb-24 relative z-10">
                <div className="bg-slate-900 dark:bg-indigo-950/40 rounded-[4rem] p-12 lg:p-24 overflow-hidden relative">
                    {/* Abstract background */}
                    <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
                        <Globe className="w-full h-full scale-150 text-white" />
                    </div>

                    <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 border border-white/10 text-white/70 text-[10px] font-black uppercase tracking-widest mb-8">
                                <Users className="w-3 h-3" />
                                <span>Founding Protocol</span>
                            </div>
                            <h2 className="text-5xl lg:text-6xl font-heading font-black text-white mb-8 leading-tight">
                                Meet Our <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Chief Architect</span>
                            </h2>
                            <p className="text-xl text-white/70 font-medium mb-10 leading-relaxed italic">
                                "Our mission is simple: to dissolve the technological and bureaucratic barriers that prevent people from exploring our world. We build the bridges that global citizens walk across."
                            </p>
                            <div className="flex flex-col gap-2">
                                <span className="text-2xl font-black text-white">Passport Visa</span>
                                <span className="text-sm font-black uppercase tracking-widest text-indigo-400">Founder & CEO</span>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/10 shadow-3xl">
                                <ImageWithFallback
                                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1080"
                                    alt="Founder Portrait"
                                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                                />
                            </div>
                            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-indigo-600 rounded-[2rem] flex items-center justify-center shadow-2xl rotate-6">
                                <Sparkles className="w-16 h-16 text-white" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};
