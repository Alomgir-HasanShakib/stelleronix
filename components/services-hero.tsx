"use client"

import { ArrowRight, Phone, Code, Cloud, Headphones, Database, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"

const serviceIcons = [Phone, Code, Cloud, Headphones, Database, Settings]

export default function ServicesHero() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-10">
        {serviceIcons.map((Icon, index) => (
          <div
            key={index}
            className="absolute animate-pulse"
            style={{
              left: `${20 + index * 15}%`,
              top: `${10 + index * 10}%`,
              animationDelay: `${index * 0.5}s`,
            }}
          >
            <Icon className="h-16 w-16 text-blue-500" />
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider mb-4 block">Our Services</span>
          <h1 className="text-5xl lg:text-7xl font-light text-white mb-6 tracking-tight leading-tight">
            Comprehensive Technology Solutions
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed mb-12 max-w-4xl mx-auto">
            From BPO operations to custom software development, cloud infrastructure to digital transformation - we
            deliver end-to-end technology solutions that drive business growth and operational excellence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
              Explore Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-gray-900 bg-transparent px-8 py-3"
            >
              Get Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
