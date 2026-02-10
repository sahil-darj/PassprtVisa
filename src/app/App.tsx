import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { Navbar } from "@/app/components/Navbar";
import { TopBanner } from "@/app/components/TopBanner";
import { ContactFooter } from "@/app/components/ContactFooter";
import { ThemeProvider } from "@/app/context/ThemeContext";
import Home from "@/app/pages/Home";
import { PassportPage } from "@/app/pages/PassportPage";
import { VisaPage } from "@/app/pages/VisaPage";
import { CountriesPage } from "@/app/pages/CountriesPage";
import { AboutPage } from "@/app/pages/AboutPage";
import { ContactPage } from "@/app/pages/ContactPage";
import ScrollToTop from "./components/ScrollToTop";
import { BackToTop } from "./components/BackToTop";
import { Preloader } from "@/app/components/Preloader";

function AppContent() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <ScrollToTop />
      <BackToTop />
      <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-indigo-500/30 selection:text-indigo-900 dark:selection:text-indigo-100 font-sans transition-colors duration-500">
        {/* Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 z-[80] origin-left"
          style={{ scaleX }}
        />

        <div className="flex flex-col">
          <TopBanner />
          <Navbar />
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/passport" element={<PassportPage />} />
          <Route path="/visa" element={<VisaPage />} />
          <Route path="/countries" element={<CountriesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>

        <ContactFooter />
      </div>
    </Router>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
