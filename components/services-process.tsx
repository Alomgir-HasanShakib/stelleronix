"use client"

import { MessageSquare, FileText, Code, TestTube, Rocket, Headphones } from "lucide-react"

const processSteps = [
  {
    icon: MessageSquare,
    title: "Consultation",
    description: "We understand your requirements, challenges, and business objectives through detailed discussions.",
    number: "01",
  },
  {
    icon: FileText,
    title: "Planning",
    description: "Develop comprehensive project plans, timelines, and resource allocation for optimal delivery.",
    number: "02",
  },
  {
    icon: Code,
    title: "Development",
    description: "Our expert teams build your solutions using best practices and cutting-edge technologies.",
    number: "03",
  },
  {
    icon: TestTube,
    title: "Testing",
    description: "Rigorous quality assurance and testing to ensure flawless performance and reliability.",
    number: "04",
  },
  {
    icon: Rocket,
    title: "Deployment",
    description: "Seamless implementation and go-live support to ensure smooth transition and adoption.",
    number: "05",
  },
  {
    icon: Headphones,
    title: "Support",
    description: "Ongoing maintenance, support, and optimization to ensure continued success and growth.",
    number: "06",
  },
]

export default function ServicesProcess() {
  return (
    <section className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light text-white mb-6 tracking-tight">Our Process</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
            A proven methodology that ensures successful project delivery and exceptional results every time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className="group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-lg p-8 hover:bg-gray-800/80 hover:border-gray-600/50 transition-all duration-300 hover:-translate-y-2"
            >
              {/* Number */}
              <div className="absolute top-6 right-6 text-4xl font-light text-gray-700 group-hover:text-gray-600 transition-colors duration-300">
                {step.number}
              </div>

              {/* Content */}
              <div className="relative z-10">
                <div className="text-blue-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="h-12 w-12" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed">{step.description}</p>
              </div>

              {/* Hover Effect Line */}
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
