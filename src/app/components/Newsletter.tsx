import React from "react";
import { motion } from "framer-motion";
import { Send, Bell } from "lucide-react";

export const Newsletter = () => {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="relative bg-slate-900 dark:bg-indigo-950/40 rounded-[3rem] p-12 md:p-20 overflow-hidden border border-white/10">
                    {/* Background effects */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/20 blur-[100px] rounded-full -mr-48 -mt-48" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/20 blur-[100px] rounded-full -ml-48 -mb-48" />

                    <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-widest mb-6"
                            >
                                <Bell className="w-4 h-4" />
                                <span>Stay Informed</span>
                            </motion.div>
                            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 leading-tight">
                                Join <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">50k+ travelers</span> getting real-time border updates.
                            </h2>
                            <p className="text-slate-400 text-lg font-medium max-w-lg">
                                Get the latest visa policy changes, border openings, and travel intelligence delivered straight to your inbox.
                            </p>
                        </div>

                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                            <div className="relative flex flex-col sm:flex-row gap-3 bg-slate-800/50 backdrop-blur-xl p-3 rounded-2xl border border-white/10">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-1 bg-transparent px-6 py-4 text-white placeholder-slate-500 outline-none font-medium"
                                />
                                <button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white px-8 py-4 rounded-xl font-bold transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 shadow-xl shadow-indigo-500/20 whitespace-nowrap">
                                    <span>Get Updates</span>
                                    <Send className="w-4 h-4" />
                                </button>
                            </div>
                            <p className="mt-4 text-slate-500 text-xs text-center sm:text-left ml-4">
                                We respect your privacy. Unsubscribe at any time.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
