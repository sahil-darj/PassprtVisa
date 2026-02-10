import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.5, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.5, y: 20 }}
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 z-[100] w-14 h-14 bg-indigo-600 text-white rounded-full shadow-2xl flex items-center justify-center border border-white/20 hover:bg-indigo-700 active:scale-90 transition-all group"
                >
                    <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
                    <div className="absolute inset-0 rounded-full bg-indigo-400 animate-ping opacity-20 pointer-events-none" />
                </motion.button>
            )}
        </AnimatePresence>
    );
};
