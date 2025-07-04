"use client"

import { ArrowRight, Database, Users, GraduationCap, ShoppingCart, FileText, Network } from "lucide-react"
import { Button } from "@/components/ui/button"

const productIcons = [Database, Users, GraduationCap, ShoppingCart, FileText, Network]

export default function ProductsHero() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-10">
        {productIcons.map((Icon, index) => (
          <div
            key={index}
            className="absolute animate-pulse"
            style={{
              left: `${15 + index * 12}%`,
              top: `${15 + index * 8}%`,
              animationDelay: `${index * 0.7}s`,
            }}
          >
            <Icon className="h-20 w-20 text-purple-500" />
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <span className="text-purple-400 text-sm font-semibold uppercase tracking-wider mb-4 block">
            Our Products
          </span>
          <h1 className="text-5xl lg:text-7xl font-light text-white mb-6 tracking-tight leading-tight">
            Enterprise-Ready Platforms
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed mb-12 max-w-4xl mx-auto">
            Ready-to-deploy software platforms designed for modern businesses. From CRM systems to educational
            management, our products deliver immediate value and long-term scalability.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3">
              Explore Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-gray-900 bg-transparent px-8 py-3"
            >
              Request Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
