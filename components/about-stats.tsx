"use client"

import { Users, Award, Globe, TrendingUp, Clock, Shield } from "lucide-react"

const stats = [
  {
    icon: Users,
    number: "500+",
    label: "Happy Clients",
    description: "Businesses trust us",
    color: "text-blue-400",
  },
  {
    icon: Award,
    number: "1000+",
    label: "Projects Completed",
    description: "Successful deliveries",
    color: "text-green-400",
  },
  {
    icon: Globe,
    number: "12+",
    label: "Industries",
    description: "Sectors we serve",
    color: "text-purple-400",
  },
  {
    icon: TrendingUp,
    number: "98%",
    label: "Client Satisfaction",
    description: "Quality assurance",
    color: "text-orange-400",
  },
  {
    icon: Clock,
    number: "24/7",
    label: "Support Available",
    description: "Always here for you",
    color: "text-red-400",
  },
  {
    icon: Shield,
    number: "100%",
    label: "Data Security",
    description: "Enterprise-grade protection",
    color: "text-cyan-400",
  },
]

export default function AboutStats() {
  return (
    <section className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light text-white mb-6 tracking-tight">Our Impact</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
            Numbers that reflect our commitment to excellence and the trust our clients place in us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-lg p-8 text-center hover:bg-gray-800/80 hover:border-gray-600/50 transition-all duration-300 hover:-translate-y-2"
            >
              <div
                className={`${stat.color} mb-6 group-hover:scale-110 transition-transform duration-300 flex justify-center`}
              >
                <stat.icon className="h-12 w-12" />
              </div>
              <div className="text-4xl font-light text-white mb-2">{stat.number}</div>
              <div className="text-lg font-semibold text-gray-300 mb-2">{stat.label}</div>
              <div className="text-sm text-gray-400">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
