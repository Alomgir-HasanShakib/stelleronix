"use client"

import { Users, Lightbulb, Shield, Award, Heart, Zap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const values = [
  {
    icon: Users,
    title: "Customer First",
    description: "Every decision we make is centered around delivering exceptional value and service to our clients.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We embrace cutting-edge technologies and creative solutions to solve complex business challenges.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "Transparency, honesty, and ethical practices form the foundation of all our business relationships.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for perfection in every project, delivering quality that exceeds expectations.",
  },
  {
    icon: Heart,
    title: "Collaboration",
    description: "Teamwork and partnership drive our success, both internally and with our valued clients.",
  },
  {
    icon: Zap,
    title: "Agility",
    description: "We adapt quickly to changing needs and market demands, ensuring rapid and effective solutions.",
  },
]

export default function AboutValues() {
  return (
    <section className="py-24 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light text-white mb-6 tracking-tight">Our Core Values</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
            The principles that guide our work, shape our culture, and define our commitment to excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gray-900/50 border-gray-700/50 backdrop-blur-sm"
            >
              <CardContent className="p-8">
                <div className="text-blue-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="h-12 w-12" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
