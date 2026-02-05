import React from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

export const CompactNewsletter = () => {
    return (
        <section className="py-16 bg-slate-50 dark:bg-slate-900/50">
            <div className="max-w-4xl mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-white dark:bg-[#131829] p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-slate-200 dark:border-indigo-500/10">
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl font-heading font-bold text-slate-900 dark:text-white mb-2">
                            Stay Updated
                        </h3>
                        <p className="text-slate-500 dark:text-slate-400">
                            Get real-time border updates in your inbox.
                        </p>
                    </div>

                    <div className="w-full md:w-auto">
                        <div className="relative flex items-center bg-slate-100 dark:bg-[#0a0e27] p-1.5 rounded-2xl w-full md:w-96 ring-1 ring-slate-200 dark:ring-white/5">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 bg-transparent px-4 py-2 text-sm text-slate-900 dark:text-white outline-none placeholder-slate-500"
                            />
                            <button className="bg-indigo-600 hover:bg-indigo-500 text-white p-2.5 rounded-xl transition-all active:scale-95 shadow-lg shadow-indigo-500/20">
                                <Send className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
