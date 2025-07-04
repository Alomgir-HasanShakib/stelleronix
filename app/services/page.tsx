import Header from "@/components/header"
import ServicesHero from "@/components/services-hero"
import ServicesOverview from "@/components/services-overview-detailed"
import ServicesProcess from "@/components/services-process"
import ServicesCTA from "@/components/services-cta"
import Footer from "@/components/footer"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <div className="pt-16">
        <ServicesHero />
        <ServicesOverview />
        <ServicesProcess />
        <ServicesCTA />
      </div>
      <Footer />
    </div>
  )
}
