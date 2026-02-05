import React from "react";
import { motion } from "framer-motion";
import { Globe, Users, Award, ShieldCheck } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Counter } from "./Counter";

const stats = [
    {
        icon: <Globe className="w-8 h-8" />,
        value: 195,
        suffix: "+",
        label: "Destinations",
        color: "from-blue-500 to-indigo-600 shadow-blue-500/20",
    },
    {
        icon: <Users className="w-8 h-8" />,
        value: 100,
        suffix: "M+",
        label: "Happy Travelers",
        color: "from-purple-500 to-pink-600 shadow-purple-500/20",
    },
    {
        icon: <Award className="w-8 h-8" />,
        value: 99,
        suffix: "%",
        label: "Visa Success",
        color: "from-amber-400 to-orange-600 shadow-amber-400/20",
    },
    {
        icon: <ShieldCheck className="w-8 h-8" />,
        value: 15,
        suffix: "+",
        label: "Years Experience",
        color: "from-emerald-400 to-teal-600 shadow-emerald-400/20",
    },
];

export const CreativeStats = () => {
    return (
        <section className="relative py-20 overflow-hidden bg-white dark:bg-[#0a0e27]">
            {/* Background Image */}
            <div className="absolute inset-0 pointer-events-none">
                <ImageWithFallback
                    src="https://images.unsplash.com/photo-1557683311-eac922347aa1?auto=format&fit=crop&q=80&w=1920"
                    alt="Abstract Background"
                    className="w-full h-full object-cover opacity-[0.03] dark:opacity-[0.05]"
                />
            </div>
            {/* Background patterns */}
            <div className="absolute inset-0 opacity-5 dark:opacity-10 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#6366f1_1px,transparent_1px)] bg-[length:40px_40px]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="bg-slate-50 dark:bg-[#131829] rounded-[4rem] p-12 lg:p-20 border border-slate-200 dark:border-indigo-500/10 shadow-2xl relative overflow-hidden">
                    {/* Decorative glow */}
                    <div className="absolute -top-20 -right-20 w-80 h-80 bg-indigo-500/10 dark:bg-indigo-500/20 blur-[100px] rounded-full" />
                    <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-purple-500/10 dark:bg-purple-500/20 blur-[100px] rounded-full" />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="flex flex-col items-center text-center space-y-4"
                            >
                                <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${stat.color} flex items-center justify-center text-white shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-300`}>
                                    {stat.icon}
                                </div>
                                <div className="space-y-1">
                                    <motion.h3
                                        className="text-4xl lg:text-5xl font-heading font-black text-slate-900 dark:text-white py-1"
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 + index * 0.1 }}
                                    >
                                        <Counter value={stat.value} suffix={stat.suffix} />
                                    </motion.h3>
                                    <p className="text-slate-500 dark:text-slate-400 font-medium tracking-wide uppercase text-sm">
                                        {stat.label}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                        className="mt-20 text-center"
                    >
                        <p className="text-slate-600 dark:text-slate-300 text-lg max-w-2xl mx-auto italic">
                            "Providing reliable travel intelligence for over a decade. Your global journey starts with trusted data."
                        </p>
                        <div className="mt-8 flex justify-center gap-2">
                            {[...Array(5)].map((_, i) => (
                                <div key={i} className="w-2 h-2 rounded-full bg-indigo-500/50" />
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
