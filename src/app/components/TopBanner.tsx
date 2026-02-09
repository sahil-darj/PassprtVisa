import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Phone, Mail, MapPin } from "lucide-react";

export const TopBanner = () => {
    const [isScrolled, setIsScrolled] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.div
            initial={{ y: -100 }}
            animate={{ y: isScrolled ? -100 : 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed top-0 left-0 right-0 w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-900 dark:via-purple-900 dark:to-pink-900 py-2.5 z-[70] overflow-hidden"
        >
            {/* Animated background shine */}
            <motion.div
                animate={{
                    x: ["-100%", "100%"]
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none"
            />

            <div className="max-w-7xl mx-auto px-6 flex items-center justify-center text-white relative z-10">
                <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-[10px] sm:text-xs font-black uppercase tracking-widest text-center">
                    <a href="tel:+911234567890" className="flex items-center gap-2 hover:text-indigo-200 transition-colors">
                        <Phone className="w-3.5 h-3.5" />
                        <span>+91 12345 67890</span>
                    </a>
                    <div className="hidden sm:block w-1 h-1 rounded-full bg-white/30" />
                    <a href="mailto:hello@passportandvisa.com" className="hidden sm:flex items-center gap-2 hover:text-indigo-200 transition-colors">
                        <Mail className="w-3.5 h-3.5" />
                        <span>hello@passportandvisa.com</span>
                    </a>
                    <div className="hidden sm:block w-1 h-1 rounded-full bg-white/30" />
                    <div className="hidden md:flex items-center gap-2 opacity-90">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>Nikol, Ahmedabad, India</span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};
