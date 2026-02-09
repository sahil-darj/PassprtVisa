import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Send, Globe } from "lucide-react";
import { motion } from "framer-motion";

export const ContactForm = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    toast.success("Message sent successfully! We'll get back to you soon.");
    reset();
  };

  return (
    <div className="relative z-10">
      <div className="bg-white dark:bg-[#131829] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border border-slate-200 dark:border-indigo-500/10 transition-colors duration-500">
        <div className="flex flex-col lg:flex-row">
          {/* Contact Info */}
          <div className="lg:w-2/5 bg-slate-900 dark:bg-indigo-900/40 p-8 md:p-12 lg:p-16 text-white relative overflow-hidden">
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-indigo-500/20 blur-[100px] rounded-full" />
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-500/20 blur-[80px] rounded-full" />

            <div className="relative z-10">
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-4xl lg:text-5xl font-heading font-bold mb-8"
              >
                Get in <span className="text-indigo-400">Touch</span>
              </motion.h2>
              <p className="text-white/70 mb-12 text-lg leading-relaxed">
                Have questions about your visa application or passport renewal? Our travel experts are available 24/7 to assist you.
              </p>

              <div className="space-y-10">
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 dark:bg-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-white/50 uppercase tracking-wider font-bold">Email Support</p>
                    <p className="text-xl font-bold">hello@felix.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 dark:bg-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-white/50 uppercase tracking-wider font-bold">Call Us</p>
                    <p className="text-xl font-bold">+91 12345 67890</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 dark:bg-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-white/50 uppercase tracking-wider font-bold">Our Office</p>
                    <p className="text-xl font-bold">Nikol, Ahmedabad, India</p>
                  </div>
                </div>
              </div>

              <div className="mt-20 pt-12 border-t border-white/10">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-indigo-500 rounded-lg flex items-center justify-center shadow-lg shadow-indigo-500/40">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <span className="font-heading font-black text-2xl tracking-tighter">Felix</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:w-3/5 p-6 md:p-12 lg:p-16 bg-white dark:bg-[#131829] transition-colors duration-500">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">Full Name</label>
                  <input
                    {...register("name", { required: "Name is required" })}
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-[#0a0e27] border border-slate-200 dark:border-indigo-500/20 focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all dark:text-white placeholder-slate-400"
                    placeholder="Deepak Singh"
                  />
                  {errors.name && <p className="text-red-500 text-xs font-bold">{errors.name.message as string}</p>}
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">Email Address</label>
                  <input
                    {...register("email", {
                      required: "Email is required",
                      pattern: { value: /^\S+@\S+$/i, message: "Invalid email" }
                    })}
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-[#0a0e27] border border-slate-200 dark:border-indigo-500/20 focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all dark:text-white placeholder-slate-400"
                    placeholder="deepak@example.com"
                  />
                  {errors.email && <p className="text-red-500 text-xs font-bold">{errors.email.message as string}</p>}
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">I am interested in</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {["Passport", "Visa", "Guide", "Other"].map((item) => (
                    <div key={item} className="relative">
                      <input
                        type="radio"
                        id={item}
                        value={item}
                        {...register("subject")}
                        className="peer sr-only"
                        defaultChecked={item === "Visa"}
                      />
                      <label
                        htmlFor={item}
                        className="flex items-center justify-center p-3 rounded-xl border border-slate-200 dark:border-indigo-500/20 peer-checked:bg-indigo-500 peer-checked:text-white peer-checked:border-indigo-500 cursor-pointer transition-all hover:bg-slate-100 dark:hover:bg-indigo-500/10 text-slate-600 dark:text-slate-400 font-bold text-sm"
                      >
                        {item}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">Message</label>
                <textarea
                  {...register("message", { required: "Message is required" })}
                  rows={4}
                  className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-[#0a0e27] border border-slate-200 dark:border-indigo-500/20 focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all dark:text-white placeholder-slate-400"
                  placeholder="Tell us about your travel plans..."
                />
                {errors.message && <p className="text-red-500 text-xs font-bold">{errors.message.message as string}</p>}
              </div>

              <button
                type="submit"
                className="group relative w-full bg-slate-900 dark:bg-indigo-600 text-white font-black text-xl py-6 rounded-2xl shadow-2xl shadow-indigo-500/20 hover:shadow-indigo-500/40 transition-all overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-4">
                  SEND MESSAGE <Send className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>

              <p className="text-center text-xs text-slate-400 font-medium">
                By clicking send, you agree to our Terms of Service & Privacy Policy. Data is encrypted for your security.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-white dark:bg-[#0a0e27] transition-colors duration-500 pt-32 pb-16 border-t border-slate-100 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-24 mb-24">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-14 h-14 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center text-white shadow-2xl shadow-indigo-500/20 transform -rotate-6">
                <Globe className="w-8 h-8" />
              </div>
              <span className="text-3xl font-heading font-black text-slate-900 dark:text-white tracking-tighter">
                Felix
              </span>
            </div>
            <p className="text-slate-500 dark:text-slate-400 mb-10 leading-relaxed text-lg font-medium">
              Empowering global citizens with verified intelligence to navigate international borders with absolute confidence.
            </p>
            <div className="flex gap-4">
              {['Tw', 'Li', 'In', 'Fb'].map(social => (
                <div key={social} className="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center cursor-pointer hover:bg-slate-900 dark:hover:bg-indigo-600 hover:text-white transition-all font-black text-xs text-slate-600 dark:text-slate-400 hover:-translate-y-1">
                  {social}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-black text-sm mb-10 text-slate-900 dark:text-white uppercase tracking-[0.3em]">Platform</h4>
            <ul className="space-y-5">
              {['Destinations', 'Passport Services', 'Visa Center', 'Travel Guides', 'Success Stories'].map(item => (
                <li key={item}>
                  <a href="#" className="text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 font-bold transition-colors text-base">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-black text-sm mb-10 text-slate-900 dark:text-white uppercase tracking-[0.3em]">Company</h4>
            <ul className="space-y-5">
              {['About Journey', 'Security Standards', 'Privacy Portal', 'Compliance', 'Contact Desk'].map(item => (
                <li key={item}>
                  <a href="#" className="text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 font-bold transition-colors text-base">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-100 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex flex-col gap-3 text-center md:text-left">
            <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em]">
              © 2026 FELIX INTELLIGENCE. ALL RIGHTS RESERVED.
            </p>
            <p className="text-[10px] text-slate-400 dark:text-slate-500 uppercase tracking-widest leading-relaxed max-w-xl">
              Information provided is for educational purposes. We are not a government entity.
            </p>
          </div>
          <div className="flex items-center gap-10">
            <span className="flex items-center gap-4 text-[10px] text-slate-400 font-black uppercase tracking-[0.2em]">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.6)] animate-pulse" />
              STATUS: OPTIMAL
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export const ContactFooter = () => {
  return (
    <div className="bg-white dark:bg-[#0a0e27] transition-colors duration-500">
      <Footer />
    </div>
  );
};
