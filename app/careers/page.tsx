import Header from "@/components/header"
import CareersHero from "@/components/careers-hero"
import CareersOpenings from "@/components/careers-openings"
import CareersBenefits from "@/components/careers-benefits"
import CareersApplication from "@/components/careers-application"
import Footer from "@/components/footer"

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <div className="pt-16">
        <CareersHero />
        <CareersOpenings />
        <CareersBenefits />
        <CareersApplication />
      </div>
      <Footer />
    </div>
  )
}
