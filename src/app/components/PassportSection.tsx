import React from "react";
import { motion } from "framer-motion";
import { BookOpen, FileCheck, CreditCard, HelpCircle, ArrowRight, Shield, Star } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const infoCards = [
  {
    icon: <BookOpen className="w-8 h-8" />,
    title: "Passport Types",
    description: "Standard, Official, Diplomatic, and Emergency passports. Know which one you need.",
    color: "from-blue-500 to-indigo-600 shadow-blue-500/20",
  },
  {
    icon: <FileCheck className="w-8 h-8" />,
    title: "Eligibility",
    description: "Age requirements, citizenship status, and background check details for applicants.",
    color: "from-emerald-500 to-teal-600 shadow-emerald-500/20",
  },
  {
    icon: <CreditCard className="w-8 h-8" />,
    title: "Application Fees",
    description: "Current pricing for new applications, renewals, and expedited processing services.",
    color: "from-amber-400 to-orange-600 shadow-amber-400/20",
  },
  {
    icon: <HelpCircle className="w-8 h-8" />,
    title: "FAQs",
    description: "Answers to common questions about lost passports, name changes, and renewals.",
    color: "from-purple-500 to-pink-600 shadow-purple-500/20",
  }
];

export const PassportSection = () => {
  return (
    <section id="passport" className="py-24 relative overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1590633742610-6188e7b93f77?auto=format&fit=crop&q=80&w=1920"
          alt="Passport Stamps Background"
          className="w-full h-full object-cover opacity-[0.05] dark:opacity-[0.1]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-transparent to-slate-50 dark:from-slate-950 dark:via-transparent dark:to-slate-950" />
      </div>
      {/* Creative Background Orbs */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-indigo-500/5 blur-[120px] rounded-full -translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/20 text-indigo-600 dark:text-indigo-400 font-bold tracking-widest uppercase text-xs mb-6"
          >
            <Shield className="w-3 h-3" />
            <span>Documentation Hub</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-black mt-4 text-slate-900 dark:text-white leading-tight"
          >
            Universal <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">Passport Guide</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 dark:text-slate-400 mt-8 max-w-2xl mx-auto text-lg leading-relaxed"
          >
            A passport is more than a travel document; it's your key to global mobility. We simplify the complexities of application and renewal.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {infoCards.map((card, index) => (
            <div key={index} className="perspective-1000 h-[450px] group">
              <motion.div
                initial={false}
                transition={{ duration: 0.8, type: "spring", stiffness: 100, damping: 20 }}
                whileHover={{ rotateY: 180 }}
                style={{ transformStyle: "preserve-3d" }}
                className="relative w-full h-full cursor-pointer"
              >
                {/* Front Side */}
                <div
                  className="absolute inset-0 w-full h-full backface-hidden rounded-[3.5rem] bg-white dark:bg-slate-900/40 backdrop-blur-xl p-10 border border-slate-100 dark:border-indigo-500/10 shadow-xl overflow-hidden"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <div className="relative z-10 flex flex-col h-full">
                    <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${card.color} flex items-center justify-center text-white mb-10 shadow-2xl`}>
                      {React.cloneElement(card.icon as React.ReactElement<{ className?: string }>, { className: "w-9 h-9" })}
                    </div>
                    <h3 className="text-3xl font-heading font-black mb-6 text-slate-900 dark:text-white leading-tight">
                      {card.title}
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed font-bold opacity-80">
                      {card.description}
                    </p>
                  </div>
                  {/* Background Number */}
                  <span className="absolute top-0 right-4 text-8xl font-black text-slate-900/[0.03] dark:text-white/[0.03] select-none pointer-events-none">
                    0{index + 1}
                  </span>
                </div>

                {/* Back Side */}
                <div
                  className="absolute inset-0 w-full h-full backface-hidden rounded-[3.5rem] bg-slate-900 dark:bg-indigo-950 p-10 border border-white/10 shadow-2xl overflow-hidden flex flex-col justify-center text-center"
                  style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                >
                  <div className="relative z-10">
                    <h3 className="text-2xl font-heading font-black mb-6 text-white uppercase tracking-widest">
                      {card.title} <br /> <span className="text-indigo-400">Intelligence</span>
                    </h3>
                    <div className="space-y-4 mb-10 text-white/70 text-sm font-bold">
                      <p>• Advanced Protocol Analysis</p>
                      <p>• Digital Dossier Sync</p>
                      <p>• Priority Path Validation</p>
                    </div>
                    <button className="w-full bg-indigo-600 hover:bg-indigo-500 text-white py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all shadow-xl shadow-indigo-500/40 active:scale-95">
                      VIEW FULL DETAILS
                    </button>
                  </div>
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,currentColor_1px,transparent_1px)] bg-[size:20px_20px] text-white" />
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Dynamic Requirements Section */}
        <div className="mt-32 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/30 to-purple-600/30 rounded-[4rem] blur-3xl opacity-20 pointer-events-none" />
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-950 dark:bg-slate-900/40 backdrop-blur-3xl rounded-[4rem] p-12 lg:p-24 border border-white/10 relative overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]"
          >
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-500/10 blur-[150px] rounded-full -mr-1/2 -mt-1/2" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="inline-flex items-center gap-3 mb-8 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-indigo-400 font-black uppercase text-[10px] tracking-[0.3em]"
                >
                  <Star className="w-4 h-4 fill-indigo-400" />
                  <span>Verified Dossier</span>
                </motion.div>

                <h3 className="text-4xl lg:text-5xl font-heading font-black text-white mb-10 leading-tight">Essential Documents <br /><span className="text-indigo-500">Inventory</span></h3>

                <div className="space-y-6">
                  {[
                    "Original Proof of Citizenship",
                    "Valid Government-issued Photo Identity",
                    "Certified Passport Photographs (x2)",
                    "Unified Application Form",
                    "Secure Handling & Processing Fees"
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-6 group cursor-default"
                    >
                      <div className="w-10 h-10 rounded-2xl bg-indigo-500/10 border border-indigo-400/20 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all shadow-lg group-hover:shadow-indigo-500/50">
                        <FileCheck className="w-5 h-5" />
                      </div>
                      <span className="text-xl text-white/70 font-bold group-hover:text-white transition-colors">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border border-white/20 p-12 rounded-[3rem] relative overflow-hidden shadow-2xl">
                  <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-indigo-500/30 blur-[80px] rounded-full" />

                  <div className="relative z-10">
                    <h4 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
                      <Shield className="w-8 h-8 text-indigo-400" />
                      Priority Channel
                    </h4>
                    <p className="text-white/60 leading-relaxed mb-10 text-xl font-medium italic">
                      "Expedite your global key. Our priority handling reduces traditional latency by up to 75%."
                    </p>
                    <button className="w-full py-6 bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl font-black text-sm tracking-[0.3em] transition-all shadow-[0_20px_40px_-10px_rgba(79,70,229,0.5)] hover:shadow-[0_25px_50px_-10px_rgba(79,70,229,0.7)] hover:-translate-y-1 uppercase active:scale-95">
                      Analyze Eligibility
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
