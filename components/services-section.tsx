"use client"

import { Cloud, Shield, BarChart3, Cpu, Globe, Smartphone } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    icon: Cloud,
    title: "BPO & Operational Support",
    description: "24/7 customer support, lead generation, CRM management, and comprehensive back-office operations.",
    color: "text-blue-400",
  },
  {
    icon: Shield,
    title: "Software Development",
    description: "Custom ERP systems, CRM platforms, e-commerce websites, and enterprise software solutions.",
    color: "text-red-400",
  },
  {
    icon: BarChart3,
    title: "Cloud & Infrastructure",
    description: "Enterprise-grade cloud hosting, cybersecurity, network monitoring, and data security solutions.",
    color: "text-green-400",
  },
  {
    icon: Cpu,
    title: "Digital Solutions",
    description: "Modern UI/UX development, API integrations, payment gateways, and IoT engineering solutions.",
    color: "text-purple-400",
  },
  {
    icon: Globe,
    title: "Enterprise Platforms",
    description: "Ready-to-deploy CRM, MLM software, college ERP, and vendor management system platforms.",
    color: "text-indigo-400",
  },
  {
    icon: Smartphone,
    title: "Consulting & Support",
    description: "Strategic technology consulting, project management, training, and dedicated customer support.",
    color: "text-orange-400",
  },
]

export default function ServicesSection() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-white mb-6">What We Do</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Stelleronix delivers high-impact BPO and software solutions that combine intelligent automation, agile
            development, and 24/7 customer operations to unlock business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gray-800 border-gray-700 hover:border-gray-600"
            >
              <CardContent className="p-8">
                <div className={`${service.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-12 w-12" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
