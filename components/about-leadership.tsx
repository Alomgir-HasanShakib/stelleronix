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
  },
  {
    name: "Technical Team Lead",
    position: "Chief Technology Officer",
    description:
      "Expert in software architecture and development, leading our technical teams to deliver cutting-edge solutions across all platforms.",
    email: "tech@stelleronix.com",
  },
  {
    name: "Operations Manager",
    position: "Head of Operations",
    description:
      "Ensures seamless delivery of BPO services and operational excellence across all client engagements and support functions.",
    email: "operations@stelleronix.com",
  },
]

export default function AboutLeadership() {
  return (
    <section className="py-24 bg-gray-950 relative">
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light text-white mb-4">Leadership Team</h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            Meet the professionals guiding Stelleronix&apos;s mission — blending innovation, expertise, and strategy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {leaders.map((leader, i) => (
            <Card
              key={i}
              className="bg-gray-900/50 border border-gray-700/50 backdrop-blur-md overflow-hidden hover:-translate-y-1.5 transition duration-300"
            >
              <div className="flex items-center justify-center h-40 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-cyan-500/10">
                <div className="text-5xl font-bold text-blue-400/60">{leader.name.charAt(0)}</div>
              </div>
              <CardContent className="p-6 space-y-4">
                <div className="space-y-1">
                  <h3 className="text-xl font-semibold text-white">{leader.name}</h3>
                  <p className="text-blue-400 font-medium">{leader.position}</p>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{leader.description}</p>
                <div className="flex space-x-4 pt-2">
                  <a href={`mailto:${leader.email}`} className="text-gray-400 hover:text-blue-400">
                    <Mail className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-blue-400">
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
