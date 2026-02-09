import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Clock, CheckCircle, Shield, Users, Award, ArrowRight, Download, Phone, X, Calendar, DollarSign, MapPin } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { AppointmentModal } from "../components/AppointmentModal";

interface Service {
    icon: any;
    title: string;
    description: string;
    features: string[];
    price: string;
    processingTime: string;
    color: string;
    details: {
        fullDescription: string;
        requirements: string[];
        benefits: string[];
    };
}

export const PassportPage = () => {
    const [selectedService, setSelectedService] = useState<Service | null>(null);
    const [showAppointment, setShowAppointment] = useState(false);

    const services: Service[] = [
        {
            icon: FileText,
            title: "New Passport",
            description: "Apply for your first passport with our streamlined process",
            features: ["Document verification", "Photo assistance", "Form filling support", "Priority processing"],
            price: "Starting at ₹12,450",
            processingTime: "4-6 weeks",
            color: "from-indigo-600 to-purple-600",
            details: {
                fullDescription: "Our new passport service provides comprehensive assistance for first-time applicants. We guide you through every step of the process, from gathering required documents to submitting your application.",
                requirements: [
                    "Proof of citizenship (birth certificate or naturalization)",
                    "Valid government-issued photo ID",
                    "One passport photo (2x2 inches)",
                    "Completed application form (DS-11)",
                    "Application fee payment"
                ],
                benefits: [
                    "Expert guidance throughout the process",
                    "Document verification to avoid rejections",
                    "Professional photo services available",
                    "Fast-track processing options",
                    "24/7 customer support"
                ]
            }
        },
        {
            icon: Clock,
            title: "Passport Renewal",
            description: "Renew your existing passport quickly and efficiently",
            features: ["Fast-track processing", "Online submission", "Status tracking", "Express delivery"],
            price: "Starting at ₹9,960",
            processingTime: "2-4 weeks",
            color: "from-purple-600 to-pink-600",
            details: {
                fullDescription: "Renewing your passport has never been easier. Our streamlined renewal service handles everything from form completion to expedited processing, ensuring you get your new passport quickly.",
                requirements: [
                    "Current passport (undamaged)",
                    "Passport issued within last 15 years",
                    "You were 16 or older when issued",
                    "One recent passport photo",
                    "Completed renewal form"
                ],
                benefits: [
                    "Eligible for mail-in renewal",
                    "Faster processing times",
                    "Keep your current passport during processing",
                    "Online status tracking",
                    "Expedited shipping available"
                ]
            }
        },
        {
            icon: Shield,
            title: "Passport for Minors",
            description: "Special assistance for children's passport applications",
            features: ["Parental guidance", "Document checklist", "Priority processing", "Family packages"],
            price: "Starting at ₹10,790",
            processingTime: "3-5 weeks",
            color: "from-pink-600 to-rose-600",
            details: {
                fullDescription: "Applying for a child's passport requires special documentation and both parents' consent. Our service simplifies this process with dedicated support for families.",
                requirements: [
                    "Child's proof of citizenship",
                    "Parental relationship evidence",
                    "Both parents' IDs",
                    "Parental consent details",
                    "Child's passport photo"
                ],
                benefits: [
                    "Family application assistance",
                    "Parental consent guidance",
                    "Child-friendly photo services",
                    "Validity period: 5 years for minors",
                    "Family discount packages available"
                ]
            }
        }
    ];

    const documents = [
        { title: "Proof of Citizenship", desc: "Birth certificate or naturalization certificate", icon: FileText },
        { title: "Photo ID", desc: "Government-issued driver's license or state ID", icon: Shield },
        { title: "Passport Photo", desc: "2x2 inches, recent, color photograph", icon: Users },
        { title: "Application Form", desc: "Completed DS-11 or DS-82 form", icon: FileText },
        { title: "Payment", desc: "Application fee via check or money order", icon: DollarSign },
        { title: "Parental Consent", desc: "For minors under 16 years old", icon: Users }
    ];

    const faqs = [
        {
            question: "How long does it take to get a passport?",
            answer: "Standard processing takes 4-6 weeks. Expedited service is available for an additional fee and takes 2-3 weeks."
        },
        {
            question: "Can I renew my passport by mail?",
            answer: "Yes, if your current passport is undamaged, was issued within the last 15 years, and you were over 16 when it was issued."
        },
        {
            question: "What if I need my passport urgently?",
            answer: "We offer expedited services that reduce processing time to 2-3 weeks. For urgent cases, we can help schedule embassy appointments."
        }
    ];

    return (
        <div className="min-h-screen pt-24 pb-16 bg-white dark:bg-slate-950 transition-colors duration-500">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-slate-50 dark:bg-[#0a0e27] py-24 lg:py-32">
                <div className="absolute inset-0 pointer-events-none">
                    <ImageWithFallback
                        src="https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=1920"
                        alt="Passport & Travel Document Background"
                        className="w-full h-full object-cover opacity-[0.3] dark:opacity-[0.35]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white dark:via-slate-950/80 dark:to-slate-950" />
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 dark:bg-indigo-500/20 rounded-full blur-[120px] animate-pulse" />
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="inline-flex items-center gap-2 bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/30 px-5 py-2 rounded-full text-indigo-600 dark:text-indigo-300 text-xs font-black uppercase tracking-widest mb-8 backdrop-blur-sm"
                        >
                            <Shield className="w-4 h-4" />
                            <span>Trusted Multi-Nation Services</span>
                        </motion.div>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-black mb-6 text-slate-900 dark:text-white leading-tight">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400">Felix</span> Intelligence
                        </h1>
                        <p className="text-xl text-slate-500 dark:text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed font-medium">
                            The ultimate hub for global citizens. We simplify international documentation into a seamless, high-velocity experience.
                        </p>
                        <div className="flex flex-wrap gap-6 justify-center">
                            <button className="group relative bg-slate-900 dark:bg-indigo-600 text-white px-10 py-5 rounded-[2rem] font-black text-sm tracking-widest uppercase transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-indigo-500/20 overflow-hidden">
                                <span className="relative z-10 flex items-center gap-3">
                                    <Calendar className="w-5 h-5" /> Schedule Consultation
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </button>
                            <button className="bg-white dark:bg-[#131829] text-slate-900 dark:text-white border border-slate-200 dark:border-indigo-500/20 px-10 py-5 rounded-[2rem] font-black text-sm tracking-widest uppercase transition-all hover:bg-slate-50 dark:hover:bg-indigo-500/10 flex items-center gap-3">
                                <Phone className="w-5 h-5 text-indigo-500" />
                                Support Terminal
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="max-w-7xl mx-auto px-6 py-24">
                <div className="text-center mb-20">
                    <h2 className="text-4xl lg:text-5xl font-heading font-black text-slate-900 dark:text-white mb-6">Execution Pathways</h2>
                    <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto font-medium">Select the specialized protocol that governs your travel requirements.</p>
                </div>
                <div className="flex flex-wrap justify-center gap-8 md:gap-10">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="group relative rounded-[3rem] p-1 overflow-hidden w-full md:w-[calc(50%-1.25rem)] lg:w-[30%]"
                        >
                            {/* Gradient Border */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-20 group-hover:opacity-100 transition-opacity duration-500`} />

                            <div className="relative h-full bg-white dark:bg-slate-900/40 backdrop-blur-xl rounded-[2.9rem] p-6 md:p-10 overflow-hidden">
                                {/* Abstract Background Shapes */}
                                <div className={`absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br ${service.color} opacity-5 blur-[80px] group-hover:opacity-10 transition-opacity duration-700`} />
                                <div className={`absolute -bottom-20 -left-20 w-64 h-64 bg-gradient-to-tr ${service.color} opacity-5 blur-[80px] group-hover:opacity-10 transition-opacity duration-700`} />

                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="flex items-start justify-between mb-10">
                                        <div className={`w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br ${service.color} rounded-[2rem] flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                                            <service.icon className="w-10 h-10 text-white" />
                                        </div>
                                        <span className="px-4 py-2 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 text-[10px] font-black uppercase tracking-widest text-slate-400">
                                            {service.processingTime}
                                        </span>
                                    </div>

                                    <h3 className="text-2xl md:text-3xl font-heading font-black mb-4 text-slate-900 dark:text-white leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-purple-600 transition-all duration-300">
                                        {service.title}
                                    </h3>

                                    <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed mb-8">
                                        {service.description}
                                    </p>

                                    <div className="space-y-3 mb-10">
                                        {service.features.slice(0, 3).map((feature) => (
                                            <div key={feature} className="flex items-center gap-3">
                                                <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color}`} />
                                                <span className="text-sm font-bold text-slate-600 dark:text-slate-300">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-auto pt-8 border-t border-slate-100 dark:border-white/5">
                                        <div className="flex items-end justify-between mb-6">
                                            <div className="flex flex-col">
                                                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Starting From</span>
                                                <span className="text-2xl font-black text-slate-900 dark:text-white">{service.price}</span>
                                            </div>
                                        </div>

                                        <button
                                            onClick={() => setSelectedService(service)}
                                            className="w-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 py-4 rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                                        >
                                            View Details
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Required Documents Section */}
            <section className="bg-slate-50 dark:bg-slate-900/20 py-24 relative overflow-hidden transition-colors duration-500">
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl lg:text-5xl font-heading font-black text-slate-900 dark:text-white mb-6">Documentation Protocol</h2>
                        <p className="text-slate-500 dark:text-slate-400 text-lg font-medium">Mandatory artifacts required for institutional validation.</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {documents.map((doc, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="bg-white dark:bg-slate-900/40 backdrop-blur-xl p-8 rounded-[2.5rem] border border-slate-200 dark:border-indigo-500/10 shadow-xl shadow-slate-200/30 dark:shadow-none group"
                            >
                                <div className="w-14 h-14 bg-indigo-50 dark:bg-indigo-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <doc.icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                                </div>
                                <h3 className="text-xl font-black text-slate-900 dark:text-white mb-3 tracking-tight">{doc.title}</h3>
                                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium leading-relaxed">{doc.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <AnimatePresence>
                {selectedService && (
                    <motion.div
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-0 z-[200] bg-white dark:bg-[#0a0e27] overflow-y-auto scrollbar-hide"
                    >
                        {/* Close Button Fixed Top Right */}
                        <button
                            onClick={() => setSelectedService(null)}
                            className="fixed top-6 right-6 z-50 w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-all shadow-2xl hover:rotate-90 group"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        {/* Hero Section of Modal */}
                        <div className="relative h-[50vh] min-h-[500px]">
                            <ImageWithFallback
                                src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=1920"
                                alt="Passport Services Global"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e27] via-[#0a0e27]/60 to-transparent" />

                            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 lg:p-20">
                                <div className="max-w-7xl mx-auto">
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 }}
                                        className="flex flex-col md:flex-row gap-8 items-end"
                                    >
                                        <div className={`w-20 h-20 md:w-32 md:h-32 rounded-[2.5rem] bg-gradient-to-br ${selectedService.color} flex items-center justify-center shadow-2xl ring-4 ring-white/10`}>
                                            <selectedService.icon className="w-14 h-14 text-white" />
                                        </div>
                                        <div className="flex-1 space-y-4">
                                            <h2 className="text-3xl md:text-6xl lg:text-8xl font-heading font-black text-white leading-tight filter drop-shadow-lg">{selectedService.title}</h2>
                                            <div className="flex flex-wrap gap-4">
                                                <span className="px-6 py-2.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold tracking-widest text-xs uppercase flex items-center gap-2">
                                                    <Clock className="w-4 h-4" />
                                                    {selectedService.processingTime} Processing
                                                </span>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </div>

                        {/* Content Container */}
                        <div className="max-w-7xl mx-auto px-6 py-12 lg:px-12 lg:py-20">
                            <div className="grid lg:grid-cols-12 gap-16">
                                {/* Left Column: Main Info (8 cols) */}
                                <div className="lg:col-span-8 space-y-20">
                                    {/* Description */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 }}
                                    >
                                        <h3 className="text-sm font-black text-blue-500 uppercase tracking-widest mb-8 flex items-center gap-3">
                                            <div className="w-8 h-[2px] bg-blue-500" />
                                            Mission Profile
                                        </h3>
                                        <p className="text-2xl lg:text-3xl text-slate-700 dark:text-slate-200 font-medium leading-relaxed">
                                            {selectedService.details.fullDescription}
                                        </p>
                                    </motion.div>

                                    {/* Requirements */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.4 }}
                                    >
                                        <h3 className="text-sm font-black text-purple-500 uppercase tracking-widest mb-8 flex items-center gap-3">
                                            <div className="w-8 h-[2px] bg-purple-500" />
                                            Core Requirements
                                        </h3>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            {selectedService.details.requirements.map((req, idx) => (
                                                <div key={idx} className="flex items-start gap-4 p-6 rounded-[2rem] bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 hover:border-purple-500/30 transition-colors group">
                                                    <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-500/20 flex items-center justify-center text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform">
                                                        <CheckCircle className="w-5 h-5" />
                                                    </div>
                                                    <span className="text-base font-bold text-slate-700 dark:text-slate-300 mt-2">{req}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>

                                    {/* Benefits */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.5 }}
                                    >
                                        <h3 className="text-sm font-black text-indigo-500 uppercase tracking-widest mb-8 flex items-center gap-3">
                                            <div className="w-8 h-[2px] bg-indigo-500" />
                                            Strategic Benefits
                                        </h3>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            {selectedService.details.benefits.map((benefit, idx) => (
                                                <div key={idx} className="flex items-start gap-4 p-6 rounded-[2rem] bg-indigo-50 dark:bg-indigo-500/5 border border-indigo-100 dark:border-indigo-500/10 hover:border-indigo-500/30 transition-colors group">
                                                    <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-500/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform">
                                                        <Award className="w-5 h-5" />
                                                    </div>
                                                    <span className="text-base font-bold text-slate-700 dark:text-slate-300 mt-2">{benefit}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Right Column: Sidebar Actions (4 cols) */}
                                <div className="lg:col-span-4 space-y-8">
                                    <div className="sticky top-8">
                                        {/* Fee Card */}
                                        <motion.div
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.6 }}
                                            className="p-10 rounded-[2.5rem] bg-slate-900 dark:bg-indigo-600 text-white shadow-2xl shadow-indigo-500/30 mb-8 relative overflow-hidden"
                                        >
                                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                                            <h3 className="text-xs font-black text-white/60 uppercase tracking-widest mb-4 relative z-10">Service Cost</h3>
                                            <div className="text-4xl font-heading font-black mb-10 relative z-10">{selectedService.price}</div>

                                            <div className="space-y-4 relative z-10">
                                                <button
                                                    onClick={() => setShowAppointment(true)}
                                                    className="w-full py-5 bg-white text-slate-900 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-blue-50 active:scale-95 transition-all flex items-center justify-center gap-3 shadow-lg"
                                                >
                                                    <Calendar className="w-5 h-5" /> Book Appointment
                                                </button>
                                                <button
                                                    className="w-full py-5 bg-transparent border-2 border-white/20 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-white/10 active:scale-95 transition-all flex items-center justify-center gap-3"
                                                >
                                                    <Download className="w-5 h-5" /> Download Forms
                                                </button>
                                            </div>
                                        </motion.div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <AppointmentModal
                isOpen={showAppointment}
                onClose={() => setShowAppointment(false)}
                serviceName={selectedService?.title}
            />
        </div>
    );
};
