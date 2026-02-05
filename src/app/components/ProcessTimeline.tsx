import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ClipboardList, Send, CalendarCheck, ShieldAlert, Sparkles, Download, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

const steps = [
  {
    title: "Intelligence",
    desc: "Verify visa type, validity, and exact documents required for your precise destination.",
    icon: <ClipboardList className="w-8 h-8" />,
    color: "from-blue-600 to-indigo-600",
  },
  {
    title: "Preparation",
    desc: "Gathering your high-res photos, financial statements, and verified supporting letters.",
    icon: <CheckCircle2 className="w-8 h-8" />,
    color: "from-emerald-500 to-teal-600",
  },
  {
    title: "Submission",
    desc: "Apply via our unified portal or directed embassy conduits with absolute precision.",
    icon: <Send className="w-8 h-8" />,
    color: "from-indigo-500 to-purple-600",
  },
  {
    title: "Activation",
    desc: "Monitor your live application status and prepare for travel-ready status triggers.",
    icon: <CalendarCheck className="w-8 h-8" />,
    color: "from-purple-500 to-pink-600",
  }
];

export const ProcessTimeline = () => {
  return (
    <section id="process" className="py-24 relative overflow-hidden bg-white dark:bg-[#0a0e27] transition-colors duration-500">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1506784919140-58709ee37a59?auto=format&fit=crop&q=80&w=1920"
          alt="Planning Roadmap Background"
          className="w-full h-full object-cover opacity-[0.05] dark:opacity-[0.1]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white dark:from-[#0a0e27] dark:via-transparent dark:to-[#0a0e27]" />
      </div>
      {/* Background blobs */}

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/20 text-indigo-600 dark:text-indigo-400 font-bold tracking-widest uppercase text-xs mb-6"
          >
            <Sparkles className="w-3 h-3" />
            <span>Operational Roadmap</span>
          </motion.div>
          <h2 className="text-4xl lg:text-5xl font-heading font-black text-slate-900 dark:text-white leading-tight">
            Your Roadmap to <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">The Global Stage</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mt-6 max-w-2xl mx-auto text-lg leading-relaxed">
            We've engineered the complex international travel process into four precision-driven phases.
          </p>
        </div>

        <div className="relative">
          {/* Creative Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-24 left-[15%] right-[15%] h-1 bg-slate-100 dark:bg-indigo-500/10 overflow-hidden rounded-full">
            <motion.div
              initial={{ x: "-100%" }}
              whileInView={{ x: "0%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="w-full h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="relative mb-8">
                  <div className={`w-32 h-32 rounded-[2.5rem] bg-white dark:bg-[#131829] border border-slate-200 dark:border-indigo-500/10 flex items-center justify-center shadow-xl group-hover:shadow-indigo-500/20 group-hover:border-indigo-500/40 group-hover:-translate-y-2 transition-all duration-500`}>
                    <div className="text-indigo-600 dark:text-indigo-400 transform group-hover:scale-110 transition-transform">
                      {step.icon}
                    </div>
                  </div>
                  <div className={`absolute -top-3 -right-3 w-10 h-10 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center font-black text-white text-sm shadow-xl`}>
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-2xl font-black mb-4 text-slate-900 dark:text-white">{step.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-medium">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Intelligence Cards */}
        <div className="mt-32 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-[#131829] p-10 lg:p-12 rounded-[3.5rem] border border-slate-200 dark:border-indigo-500/10 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 blur-3xl rounded-full" />
            <div className="flex items-center gap-4 text-red-500 dark:text-red-400 mb-8">
              <ShieldAlert className="w-10 h-10" />
              <h3 className="text-3xl font-black tracking-tight">Systemic Risks</h3>
            </div>
            <ul className="space-y-5">
              {[
                "Non-congruent data across legacy docs",
                "Outdated biometric photographic capture",
                "Insufficient verified liquidity proof",
                "Fragmented international travel itinerary",
                "Missing multi-point authorized signatures"
              ].map((mistake, i) => (
                <motion.li
                  key={i}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-5 group"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                  <p className="text-slate-600 dark:text-slate-300 font-bold group-hover:text-red-500 transition-colors">{mistake}</p>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group relative bg-slate-900 p-10 lg:p-12 rounded-[3.5rem] overflow-hidden shadow-2xl transition-all hover:shadow-indigo-500/20"
          >
            {/* Animated background grid */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-600/20 to-transparent pointer-events-none" />

            <div className="relative z-10">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-white mb-8 group-hover:rotate-12 transition-transform">
                <Download className="w-8 h-8" />
              </div>
              <h4 className="text-3xl font-black text-white mb-4 tracking-tight">Strategic Toolkit</h4>
              <p className="text-white/70 mb-10 text-lg leading-relaxed">Download our zero-error operational checklist to ensure total readiness before your institutional rendezvous.</p>
              <button className="group relative w-full inline-flex items-center justify-center gap-3 px-8 py-5 bg-white text-slate-900 rounded-2xl font-black text-sm tracking-widest transition-all hover:bg-slate-100 hover:scale-[1.02] active:scale-[0.98]">
                GET STRATEGY PDF <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
