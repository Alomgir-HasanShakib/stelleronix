import Header from "@/components/header"
import ProductsHero from "@/components/products-hero"
import ProductsShowcase from "@/components/products-showcase"
import ProductsFeatures from "@/components/products-features"
import ProductsCTA from "@/components/products-cta"
import Footer from "@/components/footer"

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <div className="pt-16">
        <ProductsHero />
        <ProductsShowcase />
        <ProductsFeatures />
        <ProductsCTA />
      </div>
      <Footer />
    </div>
  )
}
