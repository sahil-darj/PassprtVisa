import React from "react";
import { motion } from "framer-motion";
import { Calendar, User, ArrowUpRight, Sparkles, Clock } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

const blogs = [
  {
    title: "10 Essential Tips for First-Time Solo Travelers",
    excerpt: "Solo travel is one of the most rewarding experiences you can have. Here's how to stay safe and enjoy every moment.",
    image: "https://images.unsplash.com/photo-1614088459293-5669fadc3448?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBkZXN0aW5hdGlvbnxlbnwxfHx8fDE3NzAwMjE3MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    date: "Feb 01, 2026",
    author: "Elena Rossi",
    category: "Guides",
    readTime: "5 min"
  },
  {
    title: "Understanding the Digital Nomad Visa in 2026",
    excerpt: "More countries are offering visas for remote workers. We break down the best options for your next workplace.",
    image: "https://images.unsplash.com/photo-1665832103026-462c445cad5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRyYXZlbGVyfGVufDF8fHx8MTc3MDEyMTM2M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    date: "Jan 28, 2026",
    author: "Marcus Chen",
    category: "Visas",
    readTime: "8 min"
  },
  {
    title: "Top 5 Destinations with the Fastest Visa Processing",
    excerpt: "Need a last-minute getaway? These countries offer the quickest e-visa turnaround times in the world.",
    image: "https://images.unsplash.com/photo-1527007622069-3a0241e1cd8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaXJwb3J0JTIwdGVybWluYWx8ZW58MXx8fHwxNzcwMTIxMzYzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    date: "Jan 24, 2026",
    author: "Sarah Jenkins",
    category: "Travel Hacks",
    readTime: "4 min"
  }
];

export const BlogGrid = () => {
  return (
    <section id="blog" className="py-24 bg-slate-50 dark:bg-[#0a0e27] transition-colors duration-500 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#6366f1_1px,transparent_1px)] bg-[length:60px_60px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-20">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-black uppercase text-[10px] tracking-widest mb-4"
            >
              <Sparkles className="w-3 h-3" />
              <span>Intelligence Center</span>
            </motion.div>
            <h2 className="text-4xl lg:text-5xl font-heading font-black text-slate-900 dark:text-white leading-tight">
              Travel Smarter with <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">Our Insights</span>
            </h2>
            <p className="text-slate-500 dark:text-slate-400 mt-6 text-lg leading-relaxed">
              Curated intelligence from global travel experts to keep you ahead of the digital nomad frontier.
            </p>
          </div>
          <button className="group relative px-6 py-3 bg-white dark:bg-[#131829] border border-slate-200 dark:border-indigo-500/10 rounded-2xl font-black text-xs uppercase tracking-widest text-slate-900 dark:text-white hover:bg-slate-900 hover:text-white dark:hover:bg-indigo-600 transition-all flex items-center gap-3">
            View All Intelligence <ArrowUpRight className="w-4 h-4 transition-transform group-hover:scale-125" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-8">
          {blogs.map((blog, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group flex flex-col bg-white dark:bg-[#131829] rounded-[3rem] overflow-hidden border border-slate-200 dark:border-indigo-500/10 shadow-xl shadow-slate-200/50 dark:shadow-none transition-all hover:shadow-2xl hover:shadow-indigo-500/10"
            >
              <div className="h-72 overflow-hidden relative">
                <ImageWithFallback
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                <div className="absolute top-6 left-6">
                  <span className="bg-white/90 dark:bg-indigo-600/90 backdrop-blur-md text-slate-900 dark:text-white px-5 py-2 rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-xl">
                    {blog.category}
                  </span>
                </div>

                <div className="absolute bottom-6 left-6 flex items-center gap-4 text-white/90 font-black text-[10px] tracking-widest uppercase">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    {blog.readTime}
                  </div>
                </div>
              </div>

              <div className="p-10 flex flex-col flex-1">
                <div className="flex items-center gap-4 text-xs font-black text-indigo-500 dark:text-indigo-400 mb-6 uppercase tracking-wider">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {blog.date}
                  </div>
                  <div className="w-1 h-1 rounded-full bg-slate-300" />
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    {blog.author}
                  </div>
                </div>

                <h3 className="text-2xl font-heading font-black mb-4 text-slate-900 dark:text-white leading-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {blog.title}
                </h3>

                <p className="text-slate-500 dark:text-slate-400 mb-8 line-clamp-3 leading-relaxed font-medium">
                  {blog.excerpt}
                </p>

                <div className="mt-auto">
                  <button className="relative inline-flex items-center gap-3 font-black text-xs uppercase tracking-widest text-slate-900 dark:text-white group/btn">
                    Read Intelligence
                    <div className="w-10 h-10 rounded-full border border-slate-200 dark:border-indigo-500/20 flex items-center justify-center group-hover/btn:bg-slate-900 dark:group-hover/btn:bg-indigo-600 group-hover/btn:text-white transition-all">
                      <ArrowUpRight className="w-5 h-5 transition-transform group-hover/btn:scale-110" />
                    </div>
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
