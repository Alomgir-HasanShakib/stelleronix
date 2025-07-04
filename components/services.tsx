"use client"

import { Cloud, Shield, BarChart3, Cpu, Globe, Smartphone, Database, Zap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    icon: Cloud,
    title: "Cloud Services",
    description: "Accelerate your cloud journey with our comprehensive cloud transformation services and solutions.",
    color: "text-blue-600",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Protect your digital assets with our advanced cybersecurity solutions and threat intelligence.",
    color: "text-red-600",
  },
  {
    icon: BarChart3,
    title: "Data & Analytics",
    description: "Unlock the power of your data with AI-driven analytics and business intelligence solutions.",
    color: "text-green-600",
  },
  {
    icon: Cpu,
    title: "AI & Automation",
    description: "Transform your operations with intelligent automation and artificial intelligence capabilities.",
    color: "text-purple-600",
  },
  {
    icon: Globe,
    title: "Digital Transformation",
    description: "Reimagine your business processes with our comprehensive digital transformation services.",
    color: "text-indigo-600",
  },
  {
    icon: Smartphone,
    title: "Application Development",
    description: "Build modern, scalable applications that drive business growth and customer engagement.",
    color: "text-orange-600",
  },
  {
    icon: Database,
    title: "Enterprise Solutions",
    description: "Optimize your enterprise operations with our integrated business solutions and platforms.",
    color: "text-teal-600",
  },
  {
    icon: Zap,
    title: "Innovation Labs",
    description: "Explore emerging technologies and co-create innovative solutions for tomorrow's challenges.",
    color: "text-yellow-600",
  },
]

export default function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-gray-900 mb-6">What We Do</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We help organizations navigate their digital transformation journey with innovative technology solutions and
            strategic consulting services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 shadow-sm"
            >
              <CardContent className="p-8">
                <div className={`${service.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-12 w-12" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
