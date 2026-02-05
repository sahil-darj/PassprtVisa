import React from "react";
import { Hero } from "../components/Hero";
import { PassportSection } from "../components/PassportSection";
import { VisaSection } from "../components/VisaSection";
import { CountryGuide } from "../components/CountryGuide";
import { ProcessTimeline } from "../components/ProcessTimeline";
import { CreativeStats } from "../components/CreativeStats";
import { CompactNewsletter } from "../components/CompactNewsletter";

export const Home = () => {
    return (
        <div className="flex flex-col gap-0">
            <Hero />

            <CreativeStats />

            <div className="relative">
                {/* Creative separator */}
                <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-slate-50 dark:to-[#0a0e27]/80 pointer-events-none" />
                <PassportSection />
            </div>

            <VisaSection />

            <div className="bg-gradient-to-b from-white to-slate-50 dark:from-[#131829] dark:to-[#0a0e27]">
                <CountryGuide />
            </div>

            <ProcessTimeline />
            <CompactNewsletter />
        </div>
    );
};
export default Home;
