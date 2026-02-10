import React from "react";
import { useSEO } from "../hooks/useSEO";
import { Hero } from "../components/Hero";
import { PassportSection } from "../components/PassportSection";
import { VisaSection } from "../components/VisaSection";
import { CountryGuide } from "../components/CountryGuide";
import { ProcessTimeline } from "../components/ProcessTimeline";
import { CreativeStats } from "../components/CreativeStats";
import { CompactNewsletter } from "../components/CompactNewsletter";

export const Home = () => {
    useSEO("Home", "Global Journey - Your trusted partner for passport and visa services worldwide.");
    return (
        <div className="flex flex-col gap-0">
            <Hero />
            <CreativeStats />
            <PassportSection />
            <VisaSection />
            <CountryGuide />
            <ProcessTimeline />
            <CompactNewsletter />
        </div>
    );
};
export default Home;
