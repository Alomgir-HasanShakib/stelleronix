"use client"

import { Target, Eye } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutMissionVision() {
  return (
    <section className="relative py-24 bg-gray-800 overflow-hidden">
      {/* Decorative SVG */}
      <svg
        className="absolute top-0 left-0 w-full h-40 text-blue-900 opacity-10"
        fill="currentColor"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="currentColor"
          d="M0,192L48,202.7C96,213,192,235,288,224C384,213,480,171,576,149.3C672,128,768,128,864,133.3C960,139,1056,149,1152,160C1248,171,1344,181,1392,186.7L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Left: Mission */}
        <Card className="bg-gray-900/40 border border-gray-700/40 backdrop-blur-md">
          <CardContent className="p-10 space-y-4">
            <Target className="h-12 w-12 text-blue-400" />
            <h3 className="text-2xl font-semibold text-white">Our Mission</h3>
            <p className="text-gray-400 text-base leading-relaxed">
              To empower businesses through innovative technology and intelligent process solutions. We deliver
              exceptional value through high-performance BPO services, customized software, and IoT-driven growth.
            </p>
          </CardContent>
        </Card>

        {/* Right: Vision */}
        <Card className="bg-gray-900/40 border border-gray-700/40 backdrop-blur-md">
          <CardContent className="p-10 space-y-4">
            <Eye className="h-12 w-12 text-purple-400" />
            <h3 className="text-2xl font-semibold text-white">Our Vision</h3>
            <p className="text-gray-400 text-base leading-relaxed">
              To be a global leader in digital transformation, known for reliability, innovation, and integrity. We help
              businesses of all sizes scale with sustainable, tech-driven solutions.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
