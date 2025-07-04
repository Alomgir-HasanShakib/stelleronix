import Header from "@/components/header"
import AboutHero from "@/components/about-hero"
import AboutMission from "@/components/about-mission"
import AboutLeadership from "@/components/about-leadership"
import AboutValues from "@/components/about-values"
import AboutStats from "@/components/about-stats"
import Footer from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <div className="pt-16">
        <AboutHero />
        <AboutMission />
        <AboutStats />
        <AboutValues />
        <AboutLeadership />
      </div>
      <Footer />
    </div>
  )
}
