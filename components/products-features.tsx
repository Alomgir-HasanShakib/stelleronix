"use client"

import { Cloud, Shield, Smartphone, Zap, Users, BarChart3 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    icon: Cloud,
    title: "Cloud-Native Architecture",
    description: "Built for the cloud with scalability, reliability, and performance at the core.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade security with encryption, access controls, and compliance standards.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description: "Responsive interfaces that work seamlessly across all devices and platforms.",
  },
  {
    icon: Zap,
    title: "High Performance",
    description: "Optimized for speed and efficiency with advanced caching and optimization.",
  },
  {
    icon: Users,
    title: "Multi-User Support",
    description: "Role-based access control with unlimited users and customizable permissions.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Comprehensive reporting and analytics with real-time dashboards and insights.",
  },
]

export default function ProductsFeatures() {
  return (
    <section className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light text-white mb-6 tracking-tight">Why Choose Our Products</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
            Built with modern technology stack and best practices to ensure reliability, scalability, and user
            satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gray-800/50 border-gray-700/50 backdrop-blur-sm"
            >
              <CardContent className="p-8 text-center">
                <div className="text-purple-400 mb-6 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                  <feature.icon className="h-12 w-12" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
