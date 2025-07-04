"use client"

import { Target, Eye, Heart } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const missionData = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To empower businesses with intelligent technology solutions that drive growth, efficiency, and customer satisfaction through innovative software development and operational excellence.",
    color: "text-blue-400",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To be India's leading technology partner, recognized for delivering transformative digital solutions that help businesses thrive in the digital age.",
    color: "text-purple-400",
  },
  {
    icon: Heart,
    title: "Our Values",
    description:
      "Customer-first approach, innovation, integrity, excellence, and collaborative teamwork form the foundation of everything we do at Stelleronix.",
    color: "text-green-400",
  },
]

export default function AboutMission() {
  return (
    <section className="py-24 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light text-white mb-6 tracking-tight">Mission, Vision & Values</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
            Our core principles guide us in delivering exceptional technology solutions and building lasting
            partnerships with our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {missionData.map((item, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gray-900/50 border-gray-700/50 backdrop-blur-sm"
            >
              <CardContent className="p-8 text-center">
                <div
                  className={`${item.color} mb-6 group-hover:scale-110 transition-transform duration-300 flex justify-center`}
                >
                  <item.icon className="h-16 w-16" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
