import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Globe, X, Search, Filter, Clock, CheckCircle, Shield, Plane, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useSEO } from "../hooks/useSEO";

interface Country {
    name: string;
    region: string;
    image: string;
    flag: string;
    population: string;
    currency: string;
    visaTypes: string[];
    processingTime: string;
    description: string;
    color: string;
    requirements: string[];
    documents: string[];
}

export const CountriesPage = () => {
    useSEO("Destinations Guide", "Comprehensive visa requirements and travel information for countries worldwide.");
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedVisaFilter, setSelectedVisaFilter] = useState("All");
    const [selectedRegion, setSelectedRegion] = useState("All");
    const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);

    const countries: Country[] = [
        {
            name: "United States",
            region: "North America",
            flag: "🇺🇸",
            image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&q=80&w=800",
            population: "331M",
            currency: "USD",
            visaTypes: ["Tourist", "Work", "Student", "Business"],
            processingTime: "15-30 Days",
            description: "A global hub for innovation, education, and diverse cultural experiences.",
            color: "from-blue-600 to-indigo-600",
            requirements: ["Interview required", "Financial proof", "Intention to return"],
            documents: ["Passport", "I-20 (Students)", "DS-160 Form", "Appointment Letter"]
        },
        {
            name: "United Kingdom",
            region: "Europe",
            flag: "🇬🇧",
            image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=800",
            population: "67M",
            currency: "GBP",
            visaTypes: ["Tourist", "Work", "Student", "Business"],
            processingTime: "10-20 Days",
            description: "Home to world-leading universities and a rich historical heritage.",
            color: "from-red-600 to-blue-600",
            requirements: ["Tuberculosis test", "English proficiency", "Financial stability"],
            documents: ["Passport", "Bank Statements", "CAS (Students)", "Sponsorship (Workers)"]
        },
        {
            name: "Canada",
            region: "North America",
            flag: "🇨🇦",
            image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&q=80&w=800",
            population: "38M",
            currency: "CAD",
            visaTypes: ["Tourist", "Work", "Student", "Business"],
            processingTime: "20-45 Days",
            description: "Known for its welcoming culture and high quality of life.",
            color: "from-red-500 to-rose-600",
            requirements: ["Biometrics", "Police clearance", "Medical exam"],
            documents: ["Passport", "Proof of Funds", "Letter of Acceptance", "Digital Photos"]
        },
        {
            name: "Australia",
            region: "Oceania",
            flag: "🇦🇺",
            image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&q=80&w=800",
            population: "26M",
            currency: "AUD",
            visaTypes: ["Tourist", "Work", "Student"],
            processingTime: "15-35 Days",
            description: "Vibrant cities and unique natural wonders with great career paths.",
            color: "from-blue-700 to-indigo-700",
            requirements: ["Health insurance", "Skill assessment", "Financial capacity"],
            documents: ["Passport", "GTE Statement", "Qualification proof", "Health Cover"]
        },
        {
            name: "Germany",
            region: "Europe",
            flag: "🇩🇪",
            image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&q=80&w=800",
            population: "83M",
            currency: "EUR",
            visaTypes: ["Work", "Student", "Business"],
            processingTime: "30-60 Days",
            description: "Europe's economic powerhouse with world-class engineering.",
            color: "from-yellow-600 to-slate-900",
            requirements: ["Blocked account", "Language level B1/B2", "Health insurance"],
            documents: ["Passport", "Admission Letter", "Degree Certificates", "Financial Guarantee"]
        },
        {
            name: "Dubai (UAE)",
            region: "Asia",
            flag: "🇦🇪",
            image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=800",
            population: "9.9M",
            currency: "AED",
            visaTypes: ["Tourist", "Work", "Business"],
            processingTime: "2-5 Days",
            description: "A global terminal for luxury, business, and futuristic living.",
            color: "from-amber-500 to-orange-600",
            requirements: ["Confirmed return ticket", "Hotel booking", "Sponsorship"],
            documents: ["Passport Copy", "Photo (White BG)", "Insurance", "Bank Statement"]
        },
        {
            name: "Schengen (Europe)",
            region: "Europe",
            flag: "🇪🇺",
            image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&q=80&w=800",
            population: "450M",
            currency: "EUR",
            visaTypes: ["Tourist", "Business"],
            processingTime: "15-20 Days",
            description: "Access 27 European countries with a single unified visa protocol.",
            color: "from-blue-800 to-blue-600",
            requirements: ["Travel insurance", "Inter-state itinerary", "Accommodation proof"],
            documents: ["Passport", "Cover Letter", "Flight Bookings", "Income Proof"]
        }
    ];

    const regions = ["All", "North America", "Europe", "Asia", "Oceania"];
    const visaFilterTypes = ["All", "Tourist", "Work", "Student", "Business"];

    const filteredCountries = useMemo(() => {
        return countries.filter(c => {
            const matchesSearch = c.name.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesRegion = selectedRegion === "All" || c.region === selectedRegion;
            const matchesVisa = selectedVisaFilter === "All" || c.visaTypes.includes(selectedVisaFilter);
            return matchesSearch && matchesRegion && matchesVisa;
        });
    }, [searchQuery, selectedRegion, selectedVisaFilter]);

    return (
        <div className="min-h-screen pt-24 pb-16 bg-white dark:bg-slate-950 transition-colors duration-500">
            {/* Hero Section */}
            <section className="relative py-24 overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-500/10 blur-[120px] rounded-full animate-pulse" />
                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/10 blur-[120px] rounded-full animate-pulse" />
                </div>
                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-12"
                    >
                        <h1 className="text-6xl md:text-8xl font-heading font-black mb-6 text-slate-900 dark:text-white">
                            Global <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">Dossier</span>
                        </h1>
                        <p className="text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-medium">
                            The ultimate destination intelligence database. Explore requirements, protocols, and migration pathways across the globe.
                        </p>
                    </motion.div>

                    {/* Search & Filters */}
                    <div className="max-w-4xl mx-auto space-y-6">
                        <div className="relative group">
                            <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
                            <input
                                type="text"
                                placeholder="Search destinations (e.g. USA, Canada...)"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-16 pr-6 py-6 rounded-3xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-indigo-500/20 focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all dark:text-white text-lg font-medium shadow-xl"
                            />
                        </div>

                        <div className="flex flex-wrap justify-center gap-3">
                            <div className="flex gap-2 p-1.5 bg-slate-100 dark:bg-white/5 rounded-2xl overflow-x-auto scrollbar-hide">
                                {visaFilterTypes.map(type => (
                                    <button
                                        key={type}
                                        onClick={() => setSelectedVisaFilter(type)}
                                        className={`px-6 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${selectedVisaFilter === type
                                            ? "bg-white dark:bg-indigo-600 text-slate-900 dark:text-white shadow-lg"
                                            : "text-slate-500 hover:text-slate-900 dark:hover:text-white"}`}
                                    >
                                        {type}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Grid */}
            <section className="max-w-7xl mx-auto px-6 py-12">
                <AnimatePresence mode="popLayout">
                    <motion.div
                        layout
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {filteredCountries.map((country, idx) => (
                            <CountryCard
                                key={country.name}
                                country={country}
                                index={idx}
                                onClick={() => setSelectedCountry(country)}
                            />
                        ))}
                    </motion.div>
                </AnimatePresence>

                {filteredCountries.length === 0 && (
                    <div className="text-center py-20">
                        <Globe className="w-20 h-20 text-slate-200 dark:text-slate-800 mx-auto mb-6" />
                        <h3 className="text-2xl font-black text-slate-400">No destinations match your criteria.</h3>
                    </div>
                )}
            </section>

            {/* Modal */}
            <AnimatePresence>
                {selectedCountry && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8"
                    >
                        {/* Backdrop */}
                        <div
                            className="absolute inset-0 bg-slate-950/80 backdrop-blur-xl"
                            onClick={() => setSelectedCountry(null)}
                        />

                        <motion.div
                            initial={{ scale: 0.9, y: 50, opacity: 0 }}
                            animate={{ scale: 1, y: 0, opacity: 1 }}
                            exit={{ scale: 0.9, y: 50, opacity: 0 }}
                            className="bg-white dark:bg-[#0a0e27] w-full max-w-6xl max-h-[90vh] rounded-[3rem] overflow-hidden shadow-2xl relative z-10 border border-white/10 flex flex-col lg:flex-row"
                        >
                            {/* Left: Image & Hero */}
                            <div className="lg:w-1/2 relative min-h-[300px] lg:min-h-full">
                                <ImageWithFallback
                                    src={selectedCountry.image}
                                    alt={selectedCountry.name}
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                                <div className="absolute inset-0 p-12 flex flex-col justify-end">
                                    <div className="flex items-center gap-4 mb-6">
                                        <span className="text-6xl">{selectedCountry.flag}</span>
                                        <div className={`px-4 py-1.5 rounded-xl bg-gradient-to-r ${selectedCountry.color} text-[10px] font-black uppercase tracking-widest text-white`}>
                                            {selectedCountry.region}
                                        </div>
                                    </div>
                                    <h2 className="text-6xl md:text-7xl font-heading font-black text-white mb-4 leading-none">{selectedCountry.name}</h2>
                                    <p className="text-white/80 text-lg font-medium max-w-md">{selectedCountry.description}</p>
                                </div>

                                <button
                                    onClick={() => setSelectedCountry(null)}
                                    className="absolute top-8 left-8 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20 hover:scale-110 transition-transform"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            {/* Right: Info */}
                            <div className="lg:w-1/2 p-8 md:p-12 overflow-y-auto scrollbar-hide bg-slate-50 dark:bg-[#0a0e27]">
                                <div className="space-y-12">
                                    {/* Quick Stats */}
                                    <div className="grid grid-cols-2 gap-6">
                                        <div className="p-6 rounded-[2rem] bg-white dark:bg-white/5 border border-slate-200 dark:border-white/5">
                                            <Clock className="w-6 h-6 text-indigo-500 mb-4" />
                                            <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Processing</div>
                                            <div className="text-xl font-bold dark:text-white">{selectedCountry.processingTime}</div>
                                        </div>
                                        <div className="p-6 rounded-[2rem] bg-white dark:bg-white/5 border border-slate-200 dark:border-white/5">
                                            <Shield className="w-6 h-6 text-emerald-500 mb-4" />
                                            <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Visa Multiplicity</div>
                                            <div className="text-xl font-bold dark:text-white">{selectedCountry.visaTypes.length} Active Types</div>
                                        </div>
                                    </div>

                                    {/* Requirements */}
                                    <div>
                                        <h3 className="text-sm font-black text-indigo-500 uppercase tracking-widest mb-6 flex items-center gap-3">
                                            <div className="w-6 h-[2px] bg-indigo-500" />
                                            Active Protocols
                                        </h3>
                                        <div className="grid gap-3">
                                            {selectedCountry.requirements.map(req => (
                                                <div key={req} className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-white/5 border border-slate-100 dark:border-white/5">
                                                    <div className="w-2 h-2 rounded-full bg-indigo-500" />
                                                    <span className="text-sm font-bold text-slate-700 dark:text-slate-300">{req}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Documents */}
                                    <div>
                                        <h3 className="text-sm font-black text-purple-500 uppercase tracking-widest mb-6 flex items-center gap-3">
                                            <div className="w-6 h-[2px] bg-purple-500" />
                                            Required Dossier
                                        </h3>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedCountry.documents.map(doc => (
                                                <span key={doc} className="px-4 py-2 rounded-xl bg-purple-50 dark:bg-purple-500/10 border border-purple-100 dark:border-purple-500/20 text-xs font-bold text-purple-600 dark:text-purple-400">
                                                    {doc}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="pt-8 pt-8 border-t border-slate-200 dark:border-white/10">
                                        <a
                                            href="/contact#contact-form"
                                            className="w-full py-6 bg-slate-900 dark:bg-indigo-600 text-white rounded-[2rem] font-black text-lg uppercase tracking-[0.2em] shadow-2xl shadow-indigo-500/30 flex items-center justify-center gap-4 hover:scale-[1.02] active:scale-95 transition-all"
                                        >
                                            INITIATE APPLICATION <ArrowRight className="w-6 h-6" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const CountryCard = ({ country, index, onClick }: { country: Country, index: number, onClick: () => void }) => {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            whileHover={{ y: -10 }}
            className="group relative h-[450px] rounded-[3rem] overflow-hidden border border-slate-200 dark:border-white/10 shadow-2xl cursor-pointer"
            onClick={onClick}
        >
            <ImageWithFallback
                src={country.image}
                alt={country.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-90 transition-opacity group-hover:opacity-100" />

            <div className="absolute inset-0 p-10 flex flex-col justify-end">
                <div className="relative z-10 transition-transform duration-300 group-hover:-translate-y-2">
                    <div className="flex items-center justify-between mb-4">
                        <span className="text-4xl">{country.flag}</span>
                        <div className="px-3 py-1 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-[8px] font-black uppercase tracking-widest text-white">
                            {country.processingTime}
                        </div>
                    </div>
                    <h3 className="text-4xl font-heading font-black text-white mb-4 leading-tight group-hover:text-indigo-400 transition-colors">
                        {country.name}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {country.visaTypes.slice(0, 3).map(type => (
                            <span key={type} className="text-[8px] font-black uppercase tracking-widest text-white/60">
                                {type} •
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            <div className="absolute top-8 right-8 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/20 opacity-0 transform translate-x-10 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                <ArrowRight className="w-6 h-6" />
            </div>
        </motion.div>
    );
};
