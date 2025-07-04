"use client"

import { ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const services = [
  {
    title: "BPO & Operational Support",
    description:
      "Comprehensive business process outsourcing with 24/7 customer support, lead generation, and back-office management.",
    category: "BPO Services",
    highlights: ["Inbound & Outbound Calls", "Chat & Mail Support", "CRM Support", "KYC Verification"],
  },
  {
    title: "Software Development",
    description:
      "Custom software solutions including ERP systems, CRM platforms, and e-commerce websites with modern technology stack.",
    category: "Development",
    highlights: ["ERP & CRM Systems", "GST Billing Software", "E-Commerce Platforms", "Admin Dashboards"],
  },
  {
    title: "Cloud & Infrastructure",
    description:
      "Enterprise-grade cloud hosting, cybersecurity, and IT infrastructure solutions with end-to-end data security.",
    category: "Infrastructure",
    highlights: ["Cloud Hosting", "Cybersecurity", "Network Monitoring", "Data Security"],
  },
  {
    title: "Digital Solutions",
    description:
      "Modern web applications with Angular/React, API integrations, and payment gateway solutions for digital transformation.",
    category: "Digital",
    highlights: ["UI/UX Development", "API Integration", "Payment Gateways", "IoT Solutions"],
  },
  {
    title: "Enterprise Platforms",
    description:
      "Ready-to-deploy platforms including CRM, billing systems, MLM software, and vendor management solutions.",
    category: "Platforms",
    highlights: ["Stelleronix CRM", "MLM Software", "College ERP", "Vendor Management"],
  },
  {
    title: "Consulting & Support",
    description:
      "Strategic technology consulting with dedicated support teams, proven delivery methods, and customer-first approach.",
    category: "Consulting",
    highlights: ["Strategic Consulting", "24/7 Support", "Project Management", "Training & Support"],
  },
]

export default function ServicesOverview() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-light text-[#333333] mb-4 lg:mb-6 tracking-tight">What We Do</h2>
          <p className="text-lg lg:text-xl text-[#666666] max-w-4xl mx-auto leading-relaxed font-light">
            Stelleronix is a full-service software & BPO development company delivering high-impact solutions across
            industries. We combine intelligent automation, agile software, and 24/7 customer operations to unlock
            business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-sm overflow-hidden bg-white"
            >
              <div className="aspect-video bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center relative overflow-hidden">
                <div className="text-4xl lg:text-5xl font-light text-[#0066cc] group-hover:scale-110 transition-transform duration-300">
                  {service.title.charAt(0)}
                </div>
                <div className="absolute top-4 right-4 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                  {service.category}
                </div>
              </div>
              <CardContent className="p-6 lg:p-8">
                <h3 className="text-xl lg:text-2xl font-semibold text-[#333333] mb-3 lg:mb-4">{service.title}</h3>
                <p className="text-[#666666] leading-relaxed mb-4 lg:mb-6 text-sm lg:text-base">
                  {service.description}
                </p>

                {/* Service Highlights */}
                <div className="mb-4 lg:mb-6">
                  <ul className="space-y-2">
                    {service.highlights.slice(0, 3).map((highlight, idx) => (
                      <li key={idx} className="text-sm text-[#666666] flex items-center">
                        <div className="w-2 h-2 bg-[#0066cc] rounded-full mr-3 flex-shrink-0"></div>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  variant="ghost"
                  className="text-[#0066cc] hover:text-[#0052a3] p-0 h-auto font-medium group-hover:translate-x-1 transition-transform duration-200 text-sm lg:text-base"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 lg:mt-16">
          <Button
            variant="outline"
            size="lg"
            className="bg-transparent border-2 border-[#0066cc] text-[#0066cc] hover:bg-[#0066cc] hover:text-white px-6 lg:px-8 py-3 lg:py-4"
          >
            View All Services
            <ArrowRight className="ml-2 h-4 lg:h-5 w-4 lg:w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
