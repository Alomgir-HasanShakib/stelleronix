"use client"

import {
  Building2,
  Car,
  Heart,
  Banknote,
  ShoppingCart,
  Factory,
  GraduationCap,
  Zap,
  Home,
  Truck,
  Radio,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const industries = [
  {
    icon: Banknote,
    title: "Banking & Financial Services",
    description: "Digital banking solutions, fintech innovations, and regulatory compliance systems.",
  },
  {
    icon: Heart,
    title: "Healthcare & Life Sciences",
    description: "Digital health platforms, clinical research solutions, and patient care management.",
  },
  {
    icon: ShoppingCart,
    title: "Retail & E-commerce",
    description: "Omnichannel retail experiences, inventory management, and customer analytics.",
  },
  {
    icon: Factory,
    title: "Manufacturing",
    description: "Smart manufacturing, IoT integration, and supply chain optimization solutions.",
  },
  {
    icon: Car,
    title: "Automotive",
    description: "Connected vehicle technologies, autonomous systems, and digital manufacturing.",
  },
  {
    icon: Zap,
    title: "Energy & Utilities",
    description: "Smart grid solutions, renewable energy management, and utility optimization.",
  },
  {
    icon: Building2,
    title: "Government & Public Sector",
    description: "Digital governance, citizen services, and public sector modernization.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description: "E-learning platforms, campus management, and educational technology solutions.",
  },
  {
    icon: Home,
    title: "Real Estate",
    description: "Property management systems, smart building solutions, and real estate analytics.",
  },
  {
    icon: Radio,
    title: "Media & Entertainment",
    description: "Content management, streaming platforms, and digital media distribution.",
  },
  {
    icon: Radio,
    title: "Telecommunications",
    description: "Network optimization, 5G solutions, and telecom infrastructure management.",
  },
  {
    icon: Truck,
    title: "Transportation & Logistics",
    description: "Fleet management, route optimization, and supply chain visibility solutions.",
  },
]

export default function Industries() {
  return (
    <section className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-white mb-6">Industries We Serve</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Deep industry expertise combined with innovative technology solutions to address complex challenges across
            diverse sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gray-700 border-gray-600 hover:border-gray-500"
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <industry.icon className="h-8 w-8 text-blue-400 group-hover:scale-110 transition-transform duration-300 mr-3" />
                  <h3 className="text-lg font-semibold text-white">{industry.title}</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{industry.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
