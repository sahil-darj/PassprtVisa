import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Shield, CheckCircle, Globe, Star, Phone, Mail, MapPin } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Counter } from "./Counter";

export const Hero = () => {
  const stats = [
    { value: 195, label: "Countries Covered", icon: Globe, suffix: "+" },
    { value: 50, label: "Visa Templates", icon: CheckCircle, suffix: "k+" },
    { value: 24, label: "Support Guide", icon: Shield, suffix: "/7" }
  ];

  const contactQuickInfo = [
    { icon: Phone, text: "+1 (555) VISA-PRO", href: "tel:+15558472776" },
    { icon: Mail, text: "hello@passportandvisa.com", href: "mailto:hello@passportandvisa.com" },
    { icon: MapPin, text: "Silicon Valley, CA, USA", href: "#" }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 lg:pt-32 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1920"
          alt="Mountain Global View"
          className="w-full h-full object-cover opacity-[0.15] dark:opacity-[0.25]"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-white/40 to-white/90 dark:from-[#0a0e27] dark:via-indigo-950/80 dark:to-purple-950/60" />

        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-indigo-400/30 to-purple-400/30 dark:from-indigo-500/20 dark:to-purple-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-pink-400/30 to-rose-400/30 dark:from-pink-500/20 dark:to-rose-500/20 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Quick Contact Bar */}
          <div className="flex flex-wrap gap-6 mb-8 items-center bg-white/40 dark:bg-white/5 backdrop-blur-sm px-6 py-3 rounded-2xl border border-white/20 w-fit">
            {contactQuickInfo.map((info, idx) => (
              <a
                key={idx}
                href={info.href}
                className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-600 dark:text-slate-400 hover:text-indigo-600 transition-colors"
              >
                <info.icon className="w-3.5 h-3.5" />
                <span>{info.text}</span>
              </a>
            ))}
          </div>

          {/* Main Heading */}
          <h1 className="text-6xl lg:text-8xl font-heading font-black text-slate-900 dark:text-white mb-8 leading-[1.1] tracking-tight">
            Navigate Your{" "}
            <div className="block mt-4 mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 italic py-4 pr-10 inline-block">
                Passport & Visa
              </span>
            </div>
            with Ease
          </h1>

          <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-xl leading-relaxed">
            Your comprehensive guide to passports, visas, and international travel requirements. Expert advice for every destination.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <Link
              to="/countries"
              className="group bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 transition-all hover:gap-4 shadow-xl shadow-indigo-500/30 hover:shadow-2xl hover:shadow-indigo-500/40 hover:scale-105 active:scale-95"
            >
              Check Visa Requirements
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/about"
              className="bg-white dark:bg-white/5 hover:bg-slate-50 dark:hover:bg-white/10 backdrop-blur-md text-slate-900 dark:text-white border-2 border-slate-300 dark:border-white/20 px-8 py-4 rounded-xl font-bold transition-all hover:scale-105 active:scale-95 shadow-lg"
            >
              Learn More About Us
            </Link>
          </div>

        </motion.div>

        {/* Right Side - Digital Earth Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative mt-24 mb-20 lg:my-0"
        >
          {/* Expert Verified Badge */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute -top-20 left-1/2 -translate-x-1/2 sm:left-auto sm:translate-x-0 sm:-top-10 sm:-left-10 bg-white dark:bg-white/10 backdrop-blur-xl border border-slate-200 dark:border-white/20 p-4 sm:p-6 rounded-2xl shadow-2xl z-20 w-max max-w-[90vw] sm:max-w-none"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-gradient-to-br from-amber-400 to-orange-500 dark:from-amber-500/20 dark:to-orange-500/20 p-2 rounded-lg">
                <CheckCircle className="w-6 h-6 text-white dark:text-amber-400" />
              </div>
              <span className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">Expert Verified</span>
            </div>
            <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm">Updated 1 hour ago for 2026 regulations</p>
          </motion.div>

          {/* Main Circle & Orbiting Airplane Group */}
          <motion.div
            animate={{
              y: [0, -15, 0],
              rotateZ: [0, 2, 0]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-[260px] h-[260px] sm:w-[400px] sm:h-[400px] mx-auto z-10 transition-transform duration-700 hover:scale-110"
          >
            {/* Orbiting Airplane (Synced with Earth's float) */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 left-1/2 
                               -translate-x-1/2 -translate-y-1/2 
                               w-[260px] h-[260px] sm:w-[400px] sm:h-[400px]
                               rounded-full border border-dashed 
                               border-indigo-400/20 dark:border-indigo-500/10 
                               z-20 pointer-events-none"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-6 sm:-mt-10">
                <img
                  src="./air.png"
                  alt="Airplane"
                  className="w-12 h-12 sm:w-24 sm:h-24 object-contain rotate-90 drop-shadow-2xl"
                />
              </div>
            </motion.div>

            {/* Earth Core */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border-4 border-white/20 dark:border-white/10 overflow-hidden bg-gradient-to-br from-indigo-500/20 to-purple-500/20 backdrop-blur-md shadow-[0_0_80px_rgba(79,70,229,0.4)] z-10"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?auto=format&fit=crop&q=80&w=1080"
                alt="3D Earth View"
                className="w-full h-full object-cover opacity-90 contrast-125 saturate-150 scale-125"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/30 via-transparent to-purple-600/30" />
            </motion.div>
          </motion.div>

          {/* Floating Rating Badge */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute -bottom-20 left-1/2 -translate-x-1/2 sm:left-auto sm:translate-x-0 sm:-bottom-10 sm:-right-10 bg-gradient-to-r from-indigo-600 to-purple-600 p-4 sm:p-6 rounded-2xl shadow-2xl w-max"
          >
            <div className="flex items-center gap-3">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <div>
                <div className="text-white font-bold text-lg sm:text-xl">4.9/5</div>
                <div className="text-white/80 text-xs text-nowrap">15k+ Reviews</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
