"use client"

import { ArrowRight, MapPin, Clock, Users, Code, Palette, Headphones, TrendingUp, Settings } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const jobOpenings = [
  {
    icon: Code,
    title: "Software Developer (Web)",
    department: "Development",
    location: "West Bengal, India",
    type: "Full-time",
    experience: "2-5 years",
    description:
      "Join our development team to build cutting-edge web applications using modern technologies like Angular, React, and Node.js.",
    requirements: [
      "Strong experience in JavaScript, HTML, CSS",
      "Experience with Angular or React",
      "Knowledge of Node.js and databases",
      "Understanding of REST APIs",
    ],
    color: "text-blue-400",
  },
  {
    icon: Palette,
    title: "UI/UX Designer",
    department: "Design",
    location: "West Bengal, India",
    type: "Full-time",
    experience: "1-3 years",
    description: "Create beautiful and intuitive user interfaces for our software products and client projects.",
    requirements: [
      "Proficiency in Figma, Adobe Creative Suite",
      "Strong portfolio of web and mobile designs",
      "Understanding of user-centered design",
      "Knowledge of HTML/CSS is a plus",
    ],
    color: "text-purple-400",
  },
  {
    icon: Headphones,
    title: "Customer Support Executive",
    department: "Support",
    location: "West Bengal, India",
    type: "Full-time",
    experience: "0-2 years",
    description: "Provide exceptional customer support through voice and non-voice channels for our BPO operations.",
    requirements: [
      "Excellent communication skills",
      "Customer service orientation",
      "Basic computer knowledge",
      "Willingness to work in shifts",
    ],
    color: "text-green-400",
  },
  {
    icon: TrendingUp,
    title: "Sales & Marketing Executive",
    department: "Sales",
    location: "West Bengal, India",
    type: "Full-time",
    experience: "1-4 years",
    description: "Drive business growth through lead generation, client acquisition, and marketing initiatives.",
    requirements: [
      "Experience in B2B sales",
      "Strong communication and presentation skills",
      "Knowledge of digital marketing",
      "Target-oriented mindset",
    ],
    color: "text-orange-400",
  },
  {
    icon: Settings,
    title: "Project Manager",
    department: "Management",
    location: "West Bengal, India",
    type: "Full-time",
    experience: "3-6 years",
    description: "Lead project teams and ensure successful delivery of software development and BPO projects.",
    requirements: [
      "PMP or similar certification preferred",
      "Experience in software project management",
      "Strong leadership and communication skills",
      "Knowledge of Agile methodologies",
    ],
    color: "text-red-400",
  },
  {
    icon: Users,
    title: "Internship Program",
    department: "All Departments",
    location: "West Bengal, India",
    type: "Internship",
    experience: "0-1 years",
    description:
      "Join our comprehensive internship program and gain hands-on experience in technology and business operations.",
    requirements: [
      "Currently pursuing or recently completed degree",
      "Passion for technology and learning",
      "Good communication skills",
      "Willingness to learn and grow",
    ],
    color: "text-cyan-400",
  },
]

export default function CareersOpenings() {
  return (
    <section className="py-24 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light text-white mb-6 tracking-tight">Open Positions</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
            Explore exciting career opportunities and join our growing team of technology professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {jobOpenings.map((job, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gray-900/50 border-gray-700/50 backdrop-blur-sm"
            >
              <CardContent className="p-8">
                <div className="flex items-start mb-6">
                  <div className={`${job.color} mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    <job.icon className="h-10 w-10" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        {job.department}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {job.location}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {job.type}
                      </div>
                    </div>
                    <p className="text-gray-300 mb-4">{job.description}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-white font-medium mb-3">Requirements:</h4>
                  <ul className="space-y-2">
                    {job.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-400">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-400">
                    Experience: <span className="text-gray-300">{job.experience}</span>
                  </div>
                  <Button
                    variant="ghost"
                    className="text-green-400 hover:text-green-300 p-0 h-auto font-medium group-hover:translate-x-1 transition-transform duration-200"
                  >
                    Apply Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
