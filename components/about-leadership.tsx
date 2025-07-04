"use client"

import { Mail, Linkedin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const leaders = [
  {
    name: "Sourav Maji",
    position: "Founder & CEO",
    description:
      "Visionary leader with 5+ years of experience in software development and business operations. Drives strategic growth and innovation at Stelleronix.",
    email: "sourav.maji@stelleronix.com",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Technical Team Lead",
    position: "Chief Technology Officer",
    description:
      "Expert in software architecture and development, leading our technical teams to deliver cutting-edge solutions across all platforms.",
    email: "tech@stelleronix.com",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Operations Manager",
    position: "Head of Operations",
    description:
      "Ensures seamless delivery of BPO services and operational excellence across all client engagements and support functions.",
    email: "operations@stelleronix.com",
    image: "/placeholder.svg?height=300&width=300",
  },
]

export default function AboutLeadership() {
  return (
    <section className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light text-white mb-6 tracking-tight">Leadership Team</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
            Meet the experienced professionals who lead Stelleronix with vision, expertise, and commitment to
            excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {leaders.map((leader, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gray-800/50 border-gray-700/50 backdrop-blur-sm overflow-hidden"
            >
              <div className="aspect-square bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                <div className="text-6xl font-light text-blue-400/50">{leader.name.charAt(0)}</div>
              </div>
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-white mb-2">{leader.name}</h3>
                <p className="text-blue-400 font-medium mb-4">{leader.position}</p>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">{leader.description}</p>
                <div className="flex space-x-4">
                  <a
                    href={`mailto:${leader.email}`}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
