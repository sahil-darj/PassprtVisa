import React from "react";
import { motion } from "framer-motion";
import { Globe } from "lucide-react";
import airCopy from "./air_copy.png";
import logo from "./logo.png";

export const Preloader = () => {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-slate-50 dark:bg-[#0a0e27] overflow-hidden"
        >
            <div className="relative">
                {/* Simplified Earth/Globe Representation */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative z-10"
                >
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-2xl shadow-indigo-500/30">
                        <Globe className="w-12 h-12 text-white" />
                    </div>
                </motion.div>

                {/* Orbiting Plane */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 w-32 h-32 -m-4 rounded-full border border-dashed border-indigo-300 dark:border-indigo-700/50"
                >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-4">
                        <img
                            src={airCopy}
                            alt="Airplane"
                            className="w-8 h-8 object-contain rotate-90 drop-shadow-lg"
                        />
                    </div>
                </motion.div>

                {/* Pulse Effect */}
                <motion.div
                    animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                    className="absolute inset-0 rounded-full bg-indigo-500/20 z-0"
                />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-12 text-center"
            >
                <img src={logo} alt="Felix Logo" className="h-12 w-auto object-contain mb-4 mx-auto" />
                <div className="flex items-center justify-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400 animate-bounce [animation-delay:-0.3s]"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400 animate-bounce [animation-delay:-0.15s]"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400 animate-bounce"></span>
                </div>
            </motion.div>
        </motion.div>
    );
};
