import Header from "@/components/header";
import AboutHero from "@/components/about-hero";

import AboutStats from "@/components/about-stats";
import AboutValues from "@/components/about-values";
import AboutLeadership from "@/components/about-leadership";
import Footer from "@/components/footer";
import AboutOverview from "@/components/about-overview";
import AboutMissionVision from "@/components/about-mission-vision";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Header />
      <div className="pt-16">
        <AboutHero />
        <AboutOverview />
        <AboutMissionVision />
        <AboutStats />
        <AboutValues />
        <AboutLeadership />
      </div>
      <Footer />
    </div>
  );
}
