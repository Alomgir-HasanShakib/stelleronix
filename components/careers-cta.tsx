"use client"

import { ArrowRight, Users, Award, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const careerHighlights = [
  {
    icon: Users,
    title: "Collaborative Culture",
    description: "Work with diverse, talented teams on cutting-edge projects that make a real impact.",
  },
  {
    icon: Award,
    title: "Professional Growth",
    description: "Continuous learning opportunities, certifications, and career advancement programs.",
  },
  {
    icon: Globe,
    title: "Global Opportunities",
    description: "Work with international clients and teams across our global network of offices.",
  },
]

export default function CareersCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-white mb-6">Join Our Team</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Be part of a dynamic team that&apos;s shaping the future of technology. Discover exciting career opportunities
            and grow with us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              View Open Positions
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-gray-900 bg-transparent"
            >
              Learn About Our Culture
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {careerHighlights.map((highlight, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gray-700/50 border-gray-600 backdrop-blur-sm"
            >
              <CardContent className="p-8 text-center">
                <div className="text-blue-400 mb-6 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                  <highlight.icon className="h-12 w-12" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{highlight.title}</h3>
                <p className="text-gray-400 leading-relaxed">{highlight.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
