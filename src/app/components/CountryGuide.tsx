import React from "react";
import { motion } from "framer-motion";
import { ChevronRight, Globe, MapPin } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Link } from "react-router-dom";

const featuredDestinations = [
  {
    name: "Switzerland",
    code: "CH",
    region: "Europe",
    visa: "Schengen",
    image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&q=80&w=800",
    color: "from-blue-600 to-cyan-500"
  },
  {
    name: "Japan",
    code: "JP",
    region: "Asia",
    visa: "Visa Free",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=800",
    color: "from-red-500 to-rose-600"
  },
  {
    name: "United Arab Emirates",
    code: "AE",
    region: "Middle East",
    visa: "E-Visa",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=800",
    color: "from-amber-500 to-orange-600"
  },
  {
    name: "Singapore",
    code: "SG",
    region: "Asia",
    visa: "Visa Free",
    image: "https://img.freepik.com/free-photo/merlion-statue-cityscape-singapore_335224-666.jpg?semt=ais_hybrid&w=740&q=80",
    color: "from-red-600 to-rose-600"
  },
  {
    name: "France",
    code: "FR",
    region: "Europe",
    visa: "Schengen",
    image: "https://t4.ftcdn.net/jpg/02/14/74/11/360_F_214741146_jApjeGkU3GSPSpLhzyMsupP7frpAh1XH.jpg",
    color: "from-blue-500 to-red-500"
  },
  {
    name: "Canada",
    code: "CA",
    region: "North America",
    visa: "eTA",
    image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&q=80&w=800",
    color: "from-red-600 to-blue-700"
  }
];

export const CountryGuide = () => {
  return (
    <section id="countries" className="py-32 bg-slate-50 dark:bg-slate-950 transition-colors duration-500 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-black uppercase text-[10px] tracking-widest mb-6"
          >
            <Globe className="w-3.5 h-3.5" />
            <span>Global Destinations</span>
          </motion.div>
          <h2 className="text-5xl lg:text-7xl font-heading font-black text-slate-900 dark:text-white leading-tight">
            Explore <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">The World</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mt-6 text-xl max-w-2xl mx-auto font-medium">
            Discover your next journey with our specialized intelligence on global residency and transit protocols.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {featuredDestinations.map((country, index) => (
            <motion.div
              key={country.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative h-[380px] rounded-[3.5rem] overflow-hidden border border-slate-200 dark:border-white/10 shadow-2xl cursor-pointer"
            >
              {/* Full-size background image */}
              <ImageWithFallback
                src={country.image}
                alt={country.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/10 to-transparent opacity-80" />

              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`px-4 py-1.5 rounded-xl bg-gradient-to-r ${country.color} text-[10px] font-black uppercase tracking-widest text-white shadow-xl`}>
                      {country.code}
                    </div>
                  </div>

                  <h3 className="text-3xl font-heading font-black text-white mb-6 leading-tight group-hover:text-indigo-400 transition-colors">
                    {country.name}
                  </h3>

                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] px-6 py-3 rounded-2xl bg-white/95 text-slate-900 shadow-xl group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                      {country.visa}
                    </span>
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center">
          <Link
            to="/countries"
            className="group flex items-center gap-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-12 py-5 rounded-3xl font-black text-xs uppercase tracking-[0.3em] hover:scale-105 active:scale-95 transition-all shadow-2xl hover:shadow-indigo-500/20"
          >
            See More Destinations
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};
