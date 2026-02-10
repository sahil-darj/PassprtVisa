import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, FileText, Calendar, Shield, Send } from 'lucide-react';

interface Step {
    title: string;
    description: string;
    icon: any;
    color: string;
}

interface ProcessStepsProps {
    title: string;
    subtitle: string;
    steps: Step[];
}

export const ProcessSteps = ({ title, subtitle, steps }: ProcessStepsProps) => {
    return (
        <section className="py-24 relative overflow-hidden bg-slate-50 dark:bg-[#0a0e27]/80 transition-colors duration-500">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 -left-20 w-96 h-96 bg-indigo-500/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/5 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl lg:text-5xl font-heading font-black text-slate-900 dark:text-white mb-6">
                            {title}
                        </h2>
                        <p className="text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed">
                            {subtitle}
                        </p>
                    </motion.div>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-[60px] left-0 w-full h-1 bg-gradient-to-r from-transparent via-slate-200 dark:via-indigo-500/20 to-transparent" />

                    <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative group text-center"
                            >
                                {/* Step Number Badge */}
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-slate-900 dark:bg-indigo-600 text-white text-[10px] font-black px-3 py-1 rounded-full z-20 shadow-lg border border-white/20">
                                    STEP 0{index + 1}
                                </div>

                                {/* Icon Circle */}
                                <div className={`w-28 h-28 mx-auto bg-white dark:bg-[#131829] rounded-[2rem] border-2 border-slate-100 dark:border-indigo-500/10 flex items-center justify-center mb-8 relative z-10 group-hover:scale-105 transition-transform duration-300 shadow-xl shadow-slate-200/50 dark:shadow-none`}>
                                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} opacity-10 absolute inset-0 m-auto group-hover:opacity-20 transition-opacity`} />
                                    <step.icon className={`w-10 h-10 text-slate-700 dark:text-white`} />
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-heading font-black text-slate-900 dark:text-white mb-3">
                                    {step.title}
                                </h3>
                                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed px-2">
                                    {step.description}
                                </p>

                                {/* Arrow (Mobile/Tablet only) */}
                                {index < steps.length - 1 && (
                                    <div className="lg:hidden mt-6 flex justify-center text-slate-300 dark:text-slate-700">
                                        <ArrowRight className="w-6 h-6 rotate-90 md:rotate-0" />
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
