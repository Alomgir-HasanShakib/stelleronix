"use client"

import { Calendar, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const insights = [
  {
    title: "The Future of AI in Enterprise",
    excerpt:
      "Exploring how artificial intelligence is reshaping business operations and creating new opportunities for growth.",
    category: "Technology",
    date: "December 15, 2024",
    readTime: "5 min read",
    image: "/placeholder.svg?height=200&width=350",
  },
  {
    title: "Cloud-First Strategy for Digital Transformation",
    excerpt:
      "A comprehensive guide to implementing cloud-first approaches that accelerate digital transformation initiatives.",
    category: "Cloud",
    date: "December 12, 2024",
    readTime: "7 min read",
    image: "/placeholder.svg?height=200&width=350",
  },
  {
    title: "Cybersecurity in the Age of Remote Work",
    excerpt: "Best practices and strategies for maintaining robust cybersecurity in distributed work environments.",
    category: "Security",
    date: "December 10, 2024",
    readTime: "6 min read",
    image: "/placeholder.svg?height=200&width=350",
  },
  {
    title: "Sustainable Technology Solutions",
    excerpt:
      "How organizations can leverage technology to achieve sustainability goals and reduce environmental impact.",
    category: "Sustainability",
    date: "December 8, 2024",
    readTime: "4 min read",
    image: "/placeholder.svg?height=200&width=350",
  },
]

export default function Insights() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl font-light text-gray-900 mb-6">Latest Insights</h2>
            <p className="text-xl text-gray-600 max-w-2xl">
              Stay ahead with our thought leadership, research, and expert perspectives on emerging technologies and
              industry trends.
            </p>
          </div>
          <Button variant="outline" className="hidden lg:flex items-center bg-transparent">
            View All Insights
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {insights.map((insight, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden border-0 shadow-sm"
            >
              <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                  <div className="text-4xl font-light text-gray-600">{insight.category.charAt(0)}</div>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar className="h-4 w-4 mr-2" />
                  {insight.date}
                  <span className="mx-2">•</span>
                  {insight.readTime}
                </div>
                <div className="text-xs font-semibold text-blue-600 uppercase tracking-wide mb-2">
                  {insight.category}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                  {insight.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{insight.excerpt}</p>
                <Link
                  href="#"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium"
                >
                  Read More
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 lg:hidden">
          <Button variant="outline" className="flex items-center mx-auto bg-transparent">
            View All Insights
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
