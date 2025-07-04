import Header from "@/components/header"
import Hero from "@/components/hero"
import TrustedPartners from "@/components/trusted-partners"
import ServicesSection from "@/components/services-section"
import IndustriesSection from "@/components/industries-section"
import CareersSection from "@/components/careers-section"
import Footer from "@/components/footer"
import AnimatedSection from "@/components/animated-section"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
       <Header />
      <Hero />
      <AnimatedSection><TrustedPartners /></AnimatedSection>
      <AnimatedSection delay={0.1}><ServicesSection /></AnimatedSection>
      <AnimatedSection delay={0.2}><IndustriesSection /></AnimatedSection>
      <AnimatedSection delay={0.3}><CareersSection /></AnimatedSection>
      <Footer />
    </div>
  )
}
