import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Globe, X } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { AppointmentModal } from "../components/AppointmentModal";

export const CountriesPage = () => {
    const [selectedRegion, setSelectedRegion] = useState("All");
    const [selectedCountry, setSelectedCountry] = useState<any>(null);
    const [showAppointment, setShowAppointment] = useState(false);

    const countries = [
        {
            name: "United States",
            region: "North America",
            image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&q=80&w=800",
            population: "331M",
            currency: "USD",
            visaTypes: ["Tourist", "Work", "Student"],
            description: "Land of opportunities with diverse landscapes and cultures",
            color: "from-blue-600 to-indigo-600"
        },
        {
            name: "United Kingdom",
            region: "Europe",
            image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=800",
            population: "67M",
            currency: "GBP",
            visaTypes: ["Tourist", "Work", "Student"],
            description: "Rich history, world-class education, and vibrant cities",
            color: "from-red-600 to-blue-600"
        },
        {
            name: "Canada",
            region: "North America",
            image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&q=80&w=800",
            population: "38M",
            currency: "CAD",
            visaTypes: ["Short-term", "Work", "Student", "PR"],
            description: "Beautiful nature, multicultural society, high quality of life",
            color: "from-red-500 to-rose-600"
        },
        {
            name: "Australia",
            region: "Oceania",
            image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&q=80&w=800",
            population: "26M",
            currency: "AUD",
            visaTypes: ["Tourist", "Work", "Student"],
            description: "Stunning beaches, unique wildlife, and modern cities",
            color: "from-blue-700 to-indigo-700"
        },
        {
            name: "Germany",
            region: "Europe",
            image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&q=80&w=800",
            population: "83M",
            currency: "EUR",
            visaTypes: ["Tourist", "Work", "Student"],
            description: "Engineering excellence, rich culture, and strong economy",
            color: "from-yellow-600 to-slate-900"
        },
        {
            name: "Japan",
            region: "Asia",
            image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=800",
            population: "125M",
            currency: "JPY",
            visaTypes: ["Tourist", "Work", "Student"],
            description: "Ancient traditions meet cutting-edge technology",
            color: "from-red-600 to-slate-100"
        },
        {
            name: "Singapore",
            region: "Asia",
            image: "https://img.freepik.com/free-photo/merlion-statue-cityscape-singapore_335224-666.jpg?semt=ais_hybrid&w=740&q=80",
            population: "5.7M",
            currency: "SGD",
            visaTypes: ["Tourist", "Work", "Student"],
            description: "Global financial hub with exceptional infrastructure",
            color: "from-red-600 to-rose-600"
        },
        {
            name: "New Zealand",
            region: "Oceania",
            image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=800",
            population: "5M",
            currency: "NZD",
            visaTypes: ["Tourist", "Work", "Student"],
            description: "Breathtaking landscapes and outdoor adventures",
            color: "from-blue-600 to-slate-900"
        },
        {
            name: "France",
            region: "Europe",
            image: "https://t4.ftcdn.net/jpg/02/14/74/11/360_F_214741146_jApjeGkU3GSPSpLhzyMsupP7frpAh1XH.jpg",
            population: "67M",
            currency: "EUR",
            visaTypes: ["Tourist", "Work", "Student"],
            description: "Center of art, gastronomy, and historic architecture",
            color: "from-blue-600 to-red-600"
        }
    ];

    const regions = ["All", "North America", "Europe", "Asia", "Oceania"];

    const filteredCountries = selectedRegion === "All"
        ? countries
        : countries.filter(c => c.region === selectedRegion);

    return (
        <div className="min-h-screen pt-24 pb-16 bg-white dark:bg-slate-950 transition-colors duration-500">
            {/* Background Decorations */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/5 dark:bg-indigo-500/10 blur-[120px] rounded-full" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 dark:bg-purple-500/10 blur-[120px] rounded-full" />
            </div>

            {/* Hero Section */}
            <section className="relative py-24 lg:py-32 overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <ImageWithFallback
                        src="https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&q=80&w=1920"
                        alt="Global Map Background"
                        className="w-full h-full object-cover opacity-[0.3] dark:opacity-[0.35]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white dark:via-slate-950/80 dark:to-slate-950" />
                </div>
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-[10px] font-black uppercase tracking-widest mb-8 border border-indigo-100 dark:border-indigo-500/20"
                        >
                            <Globe className="w-3.5 h-3.5" />
                            <span>Global Atlas Intelligence</span>
                        </motion.div>
                        <h1 className="text-6xl md:text-7xl lg:text-8xl font-heading font-black mb-8 text-slate-900 dark:text-white leading-[1.1]">
                            World <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400">Directory</span>
                        </h1>
                        <p className="text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed">
                            A comprehensive intelligence database of global destinations, requirements, and migration protocols.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Region Filter */}
            <section className="max-w-7xl mx-auto px-6 py-12 relative z-10">
                <div className="flex flex-wrap justify-center gap-4">
                    {regions.map((region) => (
                        <button
                            key={region}
                            onClick={() => setSelectedRegion(region)}
                            className={`px-8 py-3 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all duration-300 ${selectedRegion === region
                                ? "bg-indigo-600 text-white shadow-2xl shadow-indigo-500/30 -translate-y-1"
                                : "bg-white dark:bg-slate-900/40 backdrop-blur-xl text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-white/10 hover:border-indigo-500/30"
                                }`}
                        >
                            {region}
                        </button>
                    ))}
                </div>
            </section>

            {/* Countries Grid */}
            <section className="max-w-7xl mx-auto px-6 py-12 relative z-10">
                <div className="max-w-[1400px] mx-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={selectedRegion}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.05 }}
                            className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
                        >
                            {filteredCountries.map((country, index) => (
                                <CountryCard
                                    key={country.name}
                                    country={country}
                                    index={index}
                                    onClick={() => setSelectedCountry(country)}
                                />
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </section>

            {/* Dossier Modal */}
            <AnimatePresence>
                {selectedCountry && (
                    <motion.div
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-0 z-[200] bg-white dark:bg-slate-950 overflow-y-auto scrollbar-hide"
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setSelectedCountry(null)}
                            className="fixed top-6 right-6 z-50 w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-all shadow-2xl hover:rotate-90 group"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        {/* Hero Section */}
                        <div className="relative h-[50vh] min-h-[500px]">
                            <ImageWithFallback
                                src={selectedCountry.image}
                                alt={selectedCountry.name}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                            <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-20">
                                <div className="max-w-7xl mx-auto">
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 }}
                                    >
                                        <div className={`inline-block px-6 py-2 rounded-xl bg-gradient-to-r ${selectedCountry.color} text-white font-black tracking-widest text-xs uppercase mb-6 shadow-xl`}>
                                            {selectedCountry.region}
                                        </div>
                                        <h2 className="text-6xl lg:text-9xl font-heading font-black text-white leading-none mb-6">{selectedCountry.name}</h2>
                                    </motion.div>
                                </div>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="max-w-7xl mx-auto px-6 py-12 lg:px-12 lg:py-20">
                            <div className="grid lg:grid-cols-12 gap-16">
                                {/* Left Column (8 cols) */}
                                <div className="lg:col-span-8 space-y-20">
                                    {/* Description */}
                                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                                        <h3 className="text-sm font-black text-blue-500 uppercase tracking-widest mb-8 flex items-center gap-3">
                                            <div className="w-8 h-[2px] bg-blue-500" />
                                            Intelligence Brief
                                        </h3>
                                        <p className="text-2xl lg:text-3xl text-slate-700 dark:text-slate-200 font-medium leading-relaxed">
                                            {selectedCountry.description}
                                        </p>
                                    </motion.div>

                                    {/* Stats Grid */}
                                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="p-8 rounded-[2.5rem] bg-slate-50 dark:bg-slate-900/40 backdrop-blur-xl border border-slate-200 dark:border-white/5">
                                                <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Total Population</h3>
                                                <div className="text-5xl font-heading font-black text-slate-900 dark:text-white">{selectedCountry.population}</div>
                                            </div>
                                            <div className="p-8 rounded-[2.5rem] bg-slate-50 dark:bg-slate-900/40 backdrop-blur-xl border border-slate-200 dark:border-white/5">
                                                <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Local Currency</h3>
                                                <div className="text-5xl font-heading font-black text-slate-900 dark:text-white">{selectedCountry.currency}</div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Right Sidebar (4 cols) */}
                                <div className="lg:col-span-4 space-y-8">
                                    <div className="sticky top-8">
                                        <motion.div
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.5 }}
                                            className="p-10 rounded-[2.5rem] bg-slate-950 border border-white/10 relative overflow-hidden text-white"
                                        >
                                            <div className={`absolute inset-0 bg-gradient-to-br ${selectedCountry.color} opacity-20`} />
                                            <h3 className="text-xs font-black text-white/60 uppercase tracking-widest mb-8 relative z-10">Active Protocols</h3>

                                            <div className="flex flex-wrap gap-2 mb-10 relative z-10">
                                                {selectedCountry.visaTypes.map((type: string) => (
                                                    <span key={type} className="px-4 py-2 rounded-xl bg-white/10 border border-white/20 text-xs font-black uppercase tracking-widest text-white">
                                                        {type}
                                                    </span>
                                                ))}
                                            </div>

                                            <button
                                                onClick={() => setShowAppointment(true)}
                                                className="w-full py-5 bg-white text-slate-950 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-blue-50 active:scale-95 transition-all flex items-center justify-center gap-3 shadow-lg relative z-10"
                                            >
                                                Initiate Application
                                            </button>
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
                serviceName={selectedCountry?.name}
            />
        </div>
    );
};

const CountryCard = ({ country, index, onClick }: { country: any, index: number, onClick: () => void }) => {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="group relative h-[400px] rounded-[2.5rem] overflow-hidden border border-slate-200 dark:border-white/10 shadow-2xl cursor-pointer"
            onClick={onClick}
        >
            {/* Full-size background image */}
            <ImageWithFallback
                src={country.image}
                alt={country.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80" />

            <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="relative z-10 w-full transform transition-transform duration-300 group-hover:-translate-y-2">
                    <div className="flex items-center justify-between mb-4">
                        <div className={`px-4 py-1.5 rounded-xl bg-gradient-to-r ${country.color} text-[10px] font-black uppercase tracking-widest text-white shadow-xl`}>
                            {country.region}
                        </div>
                    </div>

                    <h3 className="text-4xl font-heading font-black text-white leading-none mb-2 group-hover:text-indigo-400 transition-colors">
                        {country.name}
                    </h3>

                    <div className="h-0 overflow-hidden group-hover:h-auto group-hover:mt-4 transition-all duration-300">
                        <span className="text-xs font-black text-white/70 uppercase tracking-widest flex items-center gap-2">
                            View Dossier <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                        </span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
