"use client"

import { Heart, TrendingUp, Users, Award, Clock, Shield } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const benefits = [
  {
    icon: Heart,
    title: "Work-Life Balance",
    description:
      "Flexible working hours, remote work options, and a supportive environment that values your personal time.",
  },
  {
    icon: TrendingUp,
    title: "Career Growth",
    description:
      "Clear career progression paths, skill development programs, and opportunities to take on leadership roles.",
  },
  {
    icon: Users,
    title: "Collaborative Culture",
    description: "Work with diverse, talented teams on cutting-edge projects that make a real impact in the industry.",
  },
  {
    icon: Award,
    title: "Recognition & Rewards",
    description: "Performance-based incentives, employee recognition programs, and competitive compensation packages.",
  },
  {
    icon: Clock,
    title: "Flexible Schedule",
    description:
      "Flexible working hours that accommodate your lifestyle while maintaining productivity and team collaboration.",
  },
  {
    icon: Shield,
    title: "Comprehensive Benefits",
    description:
      "Health insurance, professional development budget, and other benefits to support your well-being and growth.",
  },
]

export default function CareersBenefits() {
  return (
    <section className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light text-white mb-6 tracking-tight">Why Work With Us</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
            We believe in creating an environment where our team members can thrive, grow, and make meaningful
            contributions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gray-800/50 border-gray-700/50 backdrop-blur-sm"
            >
              <CardContent className="p-8 text-center">
                <div className="text-green-400 mb-6 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                  <benefit.icon className="h-12 w-12" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
