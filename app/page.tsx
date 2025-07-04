import Header from "@/components/header";
import Hero from "@/components/hero";
import TrustedPartners from "@/components/trusted-partners";
import ServicesSection from "@/components/services-section";
import IndustriesSection from "@/components/industries-section";
import CareersSection from "@/components/careers-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <Hero />
      <TrustedPartners />
      <ServicesSection />
      <IndustriesSection />
      <CareersSection />
      <Footer />
    </div>
  );
}
