import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, GraduationCap, Heart, Palmtree, CheckCircle, Clock, DollarSign, FileText, X, ArrowRight, Globe, Shield } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { AppointmentModal } from "../components/AppointmentModal";

interface VisaType {
    icon: any;
    title: string;
    description: string;
    countries: string[];
    processingTime: string;
    validity: string;
    color: string;
    imageUrl: string;
    details: {
        fullDescription: string;
        requirements: string[];
        benefits: string[];
        fees: string;
    };
}

export const VisaPage = () => {
    const [selectedVisa, setSelectedVisa] = useState<VisaType | null>(null);
    const [showAppointment, setShowAppointment] = useState(false);

    const visaTypes: VisaType[] = [
        {
            icon: Briefcase,
            title: "Work Visa",
            description: "Employment-based visas for professionals and skilled workers",
            countries: ["USA", "Canada", "UK", "Australia", "Germany", "Singapore"],
            processingTime: "2-8 weeks",
            validity: "1-3 years",
            color: "from-blue-600 to-cyan-600",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBVjdnLe44AfHbHMlZ80xS8sKyhTROsQ7abA&s",
            details: {
                fullDescription: "Work visas allow foreign nationals to work legally in another country. These visas are typically sponsored by employers and require proof of specialized skills or qualifications.",
                requirements: [
                    "Valid job offer from approved employer",
                    "Proof of qualifications and work experience",
                    "Educational credentials evaluation",
                    "Medical examination certificate",
                    "Police certificate",
                    "Passport valid for at least 6 months"
                ],
                benefits: [
                    "Legal authorization to work",
                    "Path to permanent residency",
                    "Ability to bring dependents",
                    "Access to social benefits",
                    "Professional development",
                    "Global career exposure"
                ],
                fees: "₹15,770 - ₹38,180 (varies)"
            }
        },
        {
            icon: GraduationCap,
            title: "Student Visa",
            description: "Study abroad visas for international students",
            countries: ["USA", "UK", "Canada", "Australia", "Germany", "France"],
            processingTime: "1-4 weeks",
            validity: "Duration of study",
            color: "from-purple-600 to-pink-600",
            imageUrl: "https://www.raoconsultants.com/wp-content/uploads/2024/01/Student-VISA-inn.jpg",
            details: {
                fullDescription: "Student visas enable international students to pursue education in foreign countries. These visas typically allow part-time work and may lead to post-graduation work permits.",
                requirements: [
                    "Letter of acceptance (CoA/i-20)",
                    "Proof of financial support",
                    "Academic transcripts",
                    "Language proficiency (TOEFL/IELTS)",
                    "Statement of purpose",
                    "Valid Passport"
                ],
                benefits: [
                    "Access to world-class education",
                    "Part-time work authorization",
                    "Post-graduation work permits",
                    "Cultural exchange experience",
                    "Pathway to residency",
                    "Global alumni network"
                ],
                fees: "₹13,280 - ₹44,405 (varies)"
            }
        },
        {
            icon: Palmtree,
            title: "Tourist Visa",
            description: "Short-term visas for tourism and leisure travel",
            countries: ["Schengen", "USA", "UK", "Japan", "China", "UAE"],
            processingTime: "3-15 days",
            validity: "6 months - 10 years",
            color: "from-green-600 to-emerald-600",
            imageUrl: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=800",
            details: {
                fullDescription: "Tourist visas allow short-term visits for tourism, visiting friends/family, or medical treatment. These visas do not permit work or long-term stays.",
                requirements: [
                    "Valid passport (6 months+)",
                    "Completed application form",
                    "Travel itinerary",
                    "Proof of financial means",
                    "Return flight tickets",
                    "Travel insurance"
                ],
                benefits: [
                    "Explore new destinations",
                    "Visit friends and family",
                    "Cultural experiences",
                    "Medical tourism options",
                    "Non-work business meetings",
                    "Multiple entry options"
                ],
                fees: "₹13,280 (varies)"
            }
        },
        {
            icon: DollarSign,
            title: "Business Visa",
            description: "Visas for business meetings, conferences, and corporate negotiations",
            countries: ["USA", "Germany", "China", "Japan", "Singapore", "UAE"],
            processingTime: "5-10 days",
            validity: "30-90 days",
            color: "from-amber-600 to-yellow-600",
            imageUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800",
            details: {
                fullDescription: "Business visas are designed for individuals traveling for short-term commercial activities. This include attending meetings, signing contracts, or exploring investment opportunities.",
                requirements: [
                    "Valid passport (6 months+)",
                    "Invitation letter from host company",
                    "Business cover letter",
                    "Proof of funds",
                    "Travel insurance",
                    "Conference registration (if applicable)"
                ],
                benefits: [
                    "Engage in commercial activities",
                    "Expand professional network",
                    "Attend global trade shows",
                    "Fast-track processing",
                    "Multiple entry options",
                    "No employment proof required"
                ],
                fees: "₹18,260 (varies)"
            }
        },
        {
            icon: Heart,
            title: "Medical Visa",
            description: "Visas for specialized medical treatment and healthcare services abroad",
            countries: ["USA", "India", "Germany", "UK", "Thailand", "Israel"],
            processingTime: "1-7 days",
            validity: "Up to 6 months",
            color: "from-rose-500 to-red-600",
            imageUrl: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800",
            details: {
                fullDescription: "Medical visas are granted to patients seeking specific medical treatment or surgeries in specialized healthcare facilities overseas.",
                requirements: [
                    "Medical report from home country",
                    "Letter from treating hospital abroad",
                    "Proof of financial capacity for treatment",
                    "Medical insurance covering treatment",
                    "Passport for patient and companion",
                    "No-objection certificate"
                ],
                benefits: [
                    "Access to elite medical specialists",
                    "Priority visa clearance",
                    "Accompaniment for caregivers",
                    "Option to extend stay for recovery",
                    "Comprehensive health coverage",
                    "24/7 medical support terminal"
                ],
                fees: "₹8,300 (varies)"
            }
        },
        {
            icon: Globe,
            title: "Transit Visa",
            description: "Short-stay visas for passengers passing through a country's territory",
            countries: ["Schengen", "UK", "UAE", "Singapore", "Canada"],
            processingTime: "24-72 hours",
            validity: "24-96 hours",
            color: "from-slate-600 to-slate-800",
            imageUrl: "https://travelobiz.com/wp-content/uploads/2023/11/top-view-tickets-little-plane.jpg",
            details: {
                fullDescription: "A transit visa allows travelers to pass through a country's airport or territory while traveling to a third destination.",
                requirements: [
                    "Valid visa for destination country",
                    "Confirmed flight tickets for onward journey",
                    "Valid passport",
                    "Sufficient funds for stay",
                    "Airport transit documents"
                ],
                benefits: [
                    "Explore city during layovers",
                    "Short rest between long flights",
                    "Simple application process",
                    "Extremely fast processing",
                    "Low transaction fees"
                ],
                fees: "₹2,490 - ₹6,640 (varies)"
            }
        }
    ];

    const requirements = [
        { title: "Passport Protocol", desc: "Minimum 180 days validity remaining", icon: FileText },
        { title: "Financial Validation", desc: "Proof of sufficient liquidity", icon: DollarSign },
        { title: "Strategic Intent", desc: "Verified travel purpose & itinerary", icon: Shield },
        { title: "Clean Record", desc: "Background security clearance", icon: Globe }
    ];

    return (
        <div className="min-h-screen pt-24 pb-16 bg-white dark:bg-[#0a0e27] transition-colors duration-500">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-slate-50 dark:bg-[#0a0e27] py-24 lg:py-32">
                <div className="absolute inset-0 pointer-events-none">
                    <ImageWithFallback
                        src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=1920"
                        alt="Global Travel Background"
                        className="w-full h-full object-cover opacity-[0.35] dark:opacity-[0.4]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white dark:via-[#0a0e27]/80 dark:to-[#0a0e27]" />
                    <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-[140px] animate-pulse" />
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-left"
                        >
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/30 px-5 py-2 rounded-full text-blue-600 dark:text-blue-300 text-[10px] font-black uppercase tracking-widest mb-8 backdrop-blur-sm"
                            >
                                <Globe className="w-3.5 h-3.5" />
                                <span>Global Access Intelligence</span>
                            </motion.div>
                            <h1 className="text-5xl md:text-6xl font-heading font-black mb-6 text-slate-900 dark:text-white leading-tight">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400">Passport & Visa</span> Logistics
                            </h1>
                            <p className="text-xl text-slate-500 dark:text-slate-400 mb-10 leading-relaxed font-medium">
                                Architecting your global mobility with precision-engineered visa services for the modern nomad and professional.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <button className="px-8 py-4 bg-slate-900 dark:bg-blue-600 text-white rounded-2xl font-black text-xs tracking-widest uppercase shadow-2xl shadow-blue-500/20 hover:scale-105 active:scale-95 transition-all">
                                    START APPLICATION
                                </button>
                                <button className="px-8 py-4 bg-white dark:bg-white/5 text-slate-900 dark:text-white border border-slate-200 dark:border-white/10 rounded-2xl font-black text-xs tracking-widest uppercase hover:bg-slate-50 transition-all">
                                    VIEW PRICING
                                </button>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, x: 30 }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="relative hidden lg:block"
                        >
                            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border border-white/20 dark:border-indigo-500/10">
                                <ImageWithFallback
                                    src="https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&q=80&w=1200"
                                    alt="Visa Stamp Featured Image"
                                    className="w-full h-full object-cover aspect-[4/3] hover:scale-105 transition-transform duration-1000"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                            </div>
                            {/* Floating Stats */}
                            <motion.div
                                animate={{ y: [0, -15, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -bottom-6 -left-6 bg-white dark:bg-[#131829] p-6 rounded-2xl shadow-2xl border border-slate-200 dark:border-indigo-500/20 z-20"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center text-green-500">
                                        <CheckCircle className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <div className="text-2xl font-black text-slate-900 dark:text-white">99.2%</div>
                                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Approval Rate</div>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Visa Types Grid */}
            <section className="max-w-7xl mx-auto px-6 py-24">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {visaTypes.map((visa, index) => (
                        <motion.div
                            key={visa.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative rounded-[3rem] p-1 overflow-hidden"
                        >
                            {/* Gradient Border */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${visa.color} opacity-20 group-hover:opacity-100 transition-opacity duration-500`} />

                            <div className="relative h-full bg-white dark:bg-[#131829] rounded-[2.9rem] p-10 overflow-hidden flex flex-col">
                                {/* Abstract Background Shapes */}
                                <div className={`absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br ${visa.color} opacity-5 blur-[80px] group-hover:opacity-10 transition-opacity duration-700`} />
                                <div className={`absolute -bottom-20 -left-20 w-64 h-64 bg-gradient-to-tr ${visa.color} opacity-5 blur-[80px] group-hover:opacity-10 transition-opacity duration-700`} />

                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="flex items-start justify-between mb-10">
                                        <div className={`w-20 h-20 bg-gradient-to-br ${visa.color} rounded-[2rem] flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                                            <visa.icon className="w-10 h-10 text-white" />
                                        </div>
                                        <span className="px-4 py-2 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 text-[10px] font-black uppercase tracking-widest text-slate-400">
                                            {visa.processingTime}
                                        </span>
                                    </div>

                                    <h3 className="text-3xl font-heading font-black mb-4 text-slate-900 dark:text-white leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-purple-600 transition-all duration-300">
                                        {visa.title}
                                    </h3>

                                    <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed mb-8">
                                        {visa.description}
                                    </p>

                                    {/* Features / Benefits Preview */}
                                    <div className="space-y-3 mb-10">
                                        {visa.details.benefits.slice(0, 3).map((benefit) => (
                                            <div key={benefit} className="flex items-center gap-3">
                                                <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${visa.color}`} />
                                                <span className="text-sm font-bold text-slate-600 dark:text-slate-300">{benefit}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-auto pt-8 border-t border-slate-100 dark:border-white/5">
                                        <div className="flex items-end justify-between mb-6">
                                            <div className="flex flex-col">
                                                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Fee Structure</span>
                                                <span className="text-xl font-black text-slate-900 dark:text-white">{visa.details.fees}</span>
                                            </div>
                                        </div>

                                        <button
                                            onClick={() => setSelectedVisa(visa)}
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

            {/* Requirements Section with Image */}
            <section className="py-24 bg-slate-900 dark:bg-[#131829] relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-bold tracking-widest uppercase text-xs mb-6">
                                <Shield className="w-3 h-3" />
                                <span>Security Protocol</span>
                            </div>
                            <h2 className="text-4xl lg:text-5xl font-heading font-black text-white mb-8 leading-tight">
                                Essential <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Documentation</span> Workflow
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                {requirements.map((req, i) => (
                                    <div key={i} className="group p-6 rounded-[2rem] bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all">
                                        <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
                                            <req.icon className="w-6 h-6" />
                                        </div>
                                        <h4 className="text-lg font-black text-white mb-2">{req.title}</h4>
                                        <p className="text-white/60 text-sm font-medium">{req.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="relative rounded-[4rem] overflow-hidden aspect-[4/5] shadow-2xl">
                                <ImageWithFallback
                                    src="https://images.unsplash.com/photo-1554224155-1696413565d3?auto=format&fit=crop&q=80&w=1200"
                                    alt="Documentation Process"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-blue-600/10 mix-blend-overlay" />
                            </div>
                            {/* Decorative elements */}
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
                            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
                        </motion.div>
                    </div>
                </div>
            </section>

            <AnimatePresence>
                {selectedVisa && (
                    <motion.div
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-0 z-[200] bg-white dark:bg-[#0a0e27] overflow-y-auto scrollbar-hide"
                    >
                        {/* Close Button Fixed Top Right */}
                        <button
                            onClick={() => setSelectedVisa(null)}
                            className="fixed top-6 right-6 z-50 w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-all shadow-2xl hover:rotate-90 group"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        {/* Hero Section of Modal */}
                        <div className="relative h-[50vh] min-h-[500px]">
                            <ImageWithFallback
                                src={selectedVisa.imageUrl}
                                alt={selectedVisa.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e27] via-[#0a0e27]/60 to-transparent" />

                            <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-20">
                                <div className="max-w-7xl mx-auto">
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 }}
                                        className="flex flex-col md:flex-row gap-8 items-end"
                                    >
                                        <div className={`w-32 h-32 rounded-[2.5rem] bg-gradient-to-br ${selectedVisa.color} flex items-center justify-center shadow-2xl ring-4 ring-white/10`}>
                                            <selectedVisa.icon className="w-14 h-14 text-white" />
                                        </div>
                                        <div className="flex-1 space-y-4">
                                            <h2 className="text-6xl lg:text-8xl font-heading font-black text-white leading-tight filter drop-shadow-lg">{selectedVisa.title}</h2>
                                            <div className="flex flex-wrap gap-4">
                                                <span className="px-6 py-2.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold tracking-widest text-xs uppercase flex items-center gap-2">
                                                    <Clock className="w-4 h-4" />
                                                    {selectedVisa.processingTime} Cycle
                                                </span>
                                                <span className="px-6 py-2.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold tracking-widest text-xs uppercase flex items-center gap-2">
                                                    <CheckCircle className="w-4 h-4" />
                                                    {selectedVisa.validity} Validity
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
                                            Strategic Overview
                                        </h3>
                                        <p className="text-2xl lg:text-3xl text-slate-700 dark:text-slate-200 font-medium leading-relaxed">
                                            {selectedVisa.details.fullDescription}
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
                                            Protocol Requirements
                                        </h3>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            {selectedVisa.details.requirements.map((req, idx) => (
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
                                            Global Privileges
                                        </h3>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            {selectedVisa.details.benefits.map((benefit, idx) => (
                                                <div key={idx} className="flex items-start gap-4 p-6 rounded-[2rem] bg-indigo-50 dark:bg-indigo-500/5 border border-indigo-100 dark:border-indigo-500/10 hover:border-indigo-500/30 transition-colors group">
                                                    <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-500/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform">
                                                        <div className={`w-3 h-3 rounded-full bg-current`} />
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

                                            <h3 className="text-xs font-black text-white/60 uppercase tracking-widest mb-4 relative z-10">Total Investment</h3>
                                            <div className="text-4xl font-heading font-black mb-10 relative z-10">{selectedVisa.details.fees}</div>

                                            <div className="space-y-4 relative z-10">
                                                <button
                                                    onClick={() => setShowAppointment(true)}
                                                    className="w-full py-5 bg-white text-slate-900 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-blue-50 active:scale-95 transition-all flex items-center justify-center gap-3 shadow-lg"
                                                >
                                                    <FileText className="w-5 h-5" /> Start Application
                                                </button>
                                                <button
                                                    onClick={() => setShowAppointment(true)}
                                                    className="w-full py-5 bg-transparent border-2 border-white/20 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-white/10 active:scale-95 transition-all flex items-center justify-center gap-3"
                                                >
                                                    <Shield className="w-5 h-5" /> Eligibility Check
                                                </button>
                                            </div>
                                        </motion.div>

                                        {/* Countries */}
                                        <motion.div
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.7 }}
                                            className="p-10 rounded-[2.5rem] bg-slate-50 dark:bg-[#131829] border border-slate-200 dark:border-indigo-500/20"
                                        >
                                            <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6">Authorized Zones</h3>
                                            <div className="flex flex-wrap gap-2">
                                                {selectedVisa.countries.map((country, idx) => (
                                                    <span key={idx} className="px-4 py-2 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-black uppercase tracking-widest text-slate-600 dark:text-slate-300">
                                                        {country}
                                                    </span>
                                                ))}
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
                serviceName={selectedVisa?.title}
            />
        </div>
    );
};
