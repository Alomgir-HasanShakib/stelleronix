"use client"

import { Users, Lightbulb, Shield, Award, Heart, Zap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const values = [
  {
    icon: Users,
    title: "Customer First",
    description:
      "Every decision we make centers around delivering exceptional value and service to our clients.",
    color: "text-blue-400",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We embrace creative thinking and new technology to solve complex challenges with ease.",
    color: "text-yellow-400",
  },
  {
    icon: Shield,
    title: "Integrity",
    description:
      "Transparency, ethics, and honesty guide all our business relationships and decisions.",
    color: "text-green-400",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "We strive for quality that exceeds expectations in every project we deliver.",
    color: "text-purple-400",
  },
  {
    icon: Heart,
    title: "Collaboration",
    description:
      "Success comes from synergy — we work closely with clients and teams for mutual growth.",
    color: "text-pink-400",
  },
  {
    icon: Zap,
    title: "Agility",
    description:
      "Rapid adaptation to change is key to our problem-solving and delivery approach.",
    color: "text-orange-400",
  },
]

export default function AboutValues() {
  return (
    <section className="relative py-24 bg-gray-900 overflow-hidden">
      <div className="absolute left-0 top-0 w-72 h-72 bg-purple-500/10 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light text-white mb-4">Our Core Values</h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            What drives us forward — the values that shape our culture, decisions, and every client interaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {values.map((value, index) => (
            <Card
              key={index}
              className="group bg-gray-800/40 border border-gray-700/40 backdrop-blur-sm p-6 hover:-translate-y-1.5 hover:shadow-lg transition duration-300"
            >
              <CardContent className="space-y-4">
                <div className={`flex items-center justify-center ${value.color}`}>
                  <value.icon className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-semibold text-white">{value.title}</h3>
                <p className="text-gray-400 text-base leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
