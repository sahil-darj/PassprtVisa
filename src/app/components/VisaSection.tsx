import React from "react";
import { motion } from "framer-motion";
import { Globe2, MapPin, Clock, ShieldCheck, Search, Sparkles } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

export const VisaSection = () => {
  const visaTypes = [
    { name: "Tourist Visa", info: "For sightseeing & leisure", icon: <MapPin className="w-6 h-6" /> },
    { name: "Business Visa", info: "For meetings & conferences", icon: <Globe2 className="w-6 h-6" /> },
    { name: "Student Visa", info: "For educational purposes", icon: <ShieldCheck className="w-6 h-6" /> },
    { name: "Work Visa", info: "For long-term employment", icon: <Clock className="w-6 h-6" /> },
  ];

  return (
    <section id="visa" className="py-24 relative overflow-hidden bg-white dark:bg-slate-900/40 transition-colors duration-500">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1436491865332-7a61a109c0f2?auto=format&fit=crop&q=80&w=1920"
          alt="Travel Horizon Background"
          className="w-full h-full object-cover opacity-[0.08] dark:opacity-[0.12]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white dark:from-slate-900/40 dark:via-transparent dark:to-slate-900/40" />
      </div>
      {/* Creative Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-indigo-500/5 skew-x-12 -mr-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/20 text-indigo-600 dark:text-indigo-400 font-bold tracking-widest uppercase text-xs mb-6"
            >
              <Sparkles className="w-3 h-3" />
              <span>Visa Intelligence</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mt-4 text-slate-900 dark:text-white leading-tight"
            >
              Unlocking Global Access with <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">Clear Requirements</span>
            </motion.h2>
            <p className="text-slate-600 dark:text-slate-400 mt-6 text-lg leading-relaxed max-w-xl">
              Navigating visa rules can be complex. We break down the requirements for every country so you can travel with confidence and speed.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12">
              {visaTypes.map((visa, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.02, backgroundColor: 'rgba(99, 102, 241, 0.05)' }}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/40 backdrop-blur-xl border border-slate-200 dark:border-indigo-500/20 shadow-sm transition-all"
                >
                  <div className="p-3 bg-indigo-100 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 rounded-xl">
                    {visa.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">{visa.name}</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{visa.info}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-12">
              <button className="group relative px-8 py-4 bg-slate-900 dark:bg-indigo-600 text-white rounded-xl font-bold overflow-hidden shadow-xl hover:shadow-indigo-500/30 transition-all">
                <span className="relative z-10 flex items-center gap-2">
                  View All Visa Types <Search className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            {/* Creative Card Grid */}
            <div className="grid grid-cols-2 gap-6 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <div className="group relative bg-white dark:bg-slate-900/40 backdrop-blur-xl p-8 rounded-[2rem] shadow-2xl border border-slate-100 dark:border-indigo-500/20 overflow-hidden">
                  <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <h5 className="text-5xl font-black text-indigo-600 dark:text-indigo-400 mb-2">90+</h5>
                  <p className="font-bold text-slate-900 dark:text-white text-lg">Visa-Free</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 italic">Destinations for standard travelers.</p>
                </div>

                <div className="group bg-white dark:bg-slate-900/40 backdrop-blur-xl p-8 rounded-[2rem] shadow-xl border border-slate-100 dark:border-indigo-500/20">
                  <div className="w-14 h-14 bg-amber-100 dark:bg-amber-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
                    <Clock className="w-8 h-8 text-amber-500" />
                  </div>
                  <h5 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">Quick Processing</h5>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Average e-visa processing time is 48-72 hours.</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-6 pt-12"
              >
                <div className="group bg-slate-900 dark:bg-indigo-600 p-8 rounded-[2rem] shadow-2xl text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-12 -mt-12" />
                  <Globe2 className="w-10 h-10 text-indigo-400 dark:text-indigo-200 mb-6 group-hover:scale-110 transition-transform" />
                  <h5 className="text-2xl font-bold mb-2">Global Network</h5>
                  <p className="text-sm text-white/80 leading-relaxed">Connections with embassies in over 150+ capitals worldwide.</p>
                </div>

                <div className="group bg-white dark:bg-slate-900/40 backdrop-blur-xl p-8 rounded-[2rem] shadow-xl border border-slate-100 dark:border-indigo-500/20">
                  <div className="w-14 h-14 bg-emerald-100 dark:bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <ShieldCheck className="w-8 h-8 text-emerald-500" />
                  </div>
                  <h5 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">100% Verified</h5>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Data sourced directly from official government portals.</p>
                </div>
              </motion.div>
            </div>

            {/* Decorative background shape */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[120%] bg-indigo-500/5 dark:bg-indigo-500/10 -rotate-6 rounded-[3rem] -z-10 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};
