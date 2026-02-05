import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, User, Mail, Phone, FileText, CheckCircle } from "lucide-react";

interface AppointmentModalProps {
    isOpen: boolean;
    onClose: () => void;
    serviceName?: string;
}

export const AppointmentModal = ({ isOpen, onClose, serviceName }: AppointmentModalProps) => {
    const [isSubmitted, setIsSubmitted] = React.useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate API call
        setTimeout(() => {
            setIsSubmitted(true);
        }, 1000);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-slate-900/60 backdrop-blur-md z-[300] flex items-center justify-center p-4 md:p-6"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.95, opacity: 0, y: 20 }}
                        onClick={(e) => e.stopPropagation()}
                        className="bg-white dark:bg-[#131829] w-full max-w-lg rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-200 dark:border-indigo-500/20 relative"
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-500 dark:text-slate-400 transition-colors z-10"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <div className="p-8 md:p-10">
                            {!isSubmitted ? (
                                <>
                                    <div className="text-center mb-10">
                                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 mb-6 shadow-sm">
                                            <Calendar className="w-8 h-8" />
                                        </div>
                                        <h2 className="text-3xl font-heading font-black text-slate-900 dark:text-white mb-3">
                                            Secure Appointment
                                        </h2>
                                        <p className="text-slate-500 dark:text-slate-400 font-medium">
                                            {serviceName ? `Initiating protocol for ${serviceName}` : "Schedule your strategic consultation."}
                                        </p>
                                    </div>

                                    <form onSubmit={handleSubmit} className="space-y-5">
                                        <div className="space-y-4">
                                            <div className="relative group">
                                                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
                                                <input
                                                    type="text"
                                                    placeholder="Full Identity"
                                                    required
                                                    className="w-full bg-slate-50 dark:bg-[#0a0e27] border border-slate-200 dark:border-indigo-500/20 rounded-xl py-4 pl-12 pr-4 outline-none focus:border-indigo-500 dark:focus:border-indigo-500 transition-all font-bold text-slate-900 dark:text-white placeholder:text-slate-400"
                                                />
                                            </div>
                                            <div className="relative group">
                                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
                                                <input
                                                    type="email"
                                                    placeholder="Secure Comms Channel (Email)"
                                                    required
                                                    className="w-full bg-slate-50 dark:bg-[#0a0e27] border border-slate-200 dark:border-indigo-500/20 rounded-xl py-4 pl-12 pr-4 outline-none focus:border-indigo-500 dark:focus:border-indigo-500 transition-all font-bold text-slate-900 dark:text-white placeholder:text-slate-400"
                                                />
                                            </div>
                                            <div className="relative group">
                                                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
                                                <input
                                                    type="tel"
                                                    placeholder="Contact Vector (Phone)"
                                                    required
                                                    className="w-full bg-slate-50 dark:bg-[#0a0e27] border border-slate-200 dark:border-indigo-500/20 rounded-xl py-4 pl-12 pr-4 outline-none focus:border-indigo-500 dark:focus:border-indigo-500 transition-all font-bold text-slate-900 dark:text-white placeholder:text-slate-400"
                                                />
                                            </div>
                                            <div className="relative group">
                                                <input
                                                    type="date"
                                                    required
                                                    className="w-full bg-slate-50 dark:bg-[#0a0e27] border border-slate-200 dark:border-indigo-500/20 rounded-xl py-4 px-4 outline-none focus:border-indigo-500 dark:focus:border-indigo-500 transition-all font-bold text-slate-900 dark:text-white"
                                                />
                                            </div>
                                        </div>

                                        <button
                                            type="submit"
                                            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-5 rounded-xl font-black uppercase tracking-widest shadow-xl shadow-indigo-500/20 hover:shadow-indigo-500/40 hover:scale-[1.02] active:scale-95 transition-all"
                                        >
                                            Confirm Appointment
                                        </button>
                                    </form>
                                </>
                            ) : (
                                <div className="text-center py-10">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center text-white mx-auto mb-6 shadow-2xl shadow-green-500/30"
                                    >
                                        <CheckCircle className="w-10 h-10" />
                                    </motion.div>
                                    <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-3">Protocol Initiated</h3>
                                    <p className="text-slate-500 dark:text-slate-400 font-medium mb-8">
                                        Your appointment request has been encrypted and transmitted. Our agents will establish contact shortly.
                                    </p>
                                    <button
                                        onClick={onClose}
                                        className="bg-slate-100 dark:bg-white/5 text-slate-900 dark:text-white px-8 py-3 rounded-xl font-bold uppercase tracking-widest hover:bg-slate-200 dark:hover:bg-white/10 transition-colors"
                                    >
                                        Close Terminal
                                    </button>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
