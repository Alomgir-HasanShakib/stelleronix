"use client"

import { Calendar, ArrowRight, FileText, Video, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const insights = [
  {
    title: "The Future of Enterprise AI: Trends and Predictions for 2025",
    excerpt:
      "Explore the latest developments in artificial intelligence and how they're reshaping enterprise operations.",
    category: "Technology",
    type: "Blog",
    date: "January 15, 2025",
    readTime: "8 min read",
    icon: FileText,
  },
  {
    title: "Digital Transformation Success: A Manufacturing Case Study",
    excerpt: "How we helped a leading manufacturer reduce costs by 30% through comprehensive digital transformation.",
    category: "Case Study",
    type: "Case Study",
    date: "January 12, 2025",
    readTime: "12 min read",
    icon: FileText,
  },
  {
    title: "Cybersecurity in the Cloud Era",
    excerpt: "Join our experts as they discuss best practices for maintaining security in cloud-first environments.",
    category: "Security",
    type: "Webinar",
    date: "January 20, 2025",
    readTime: "45 min",
    icon: Video,
  },
  {
    title: "Client Testimonial: Transforming Healthcare Operations",
    excerpt:
      "Hear from our healthcare client about their journey to digital transformation and improved patient outcomes.",
    category: "Healthcare",
    type: "Testimonial",
    date: "January 10, 2025",
    readTime: "5 min read",
    icon: Users,
  },
]

export default function InsightsPreview() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl font-light text-white mb-6">Latest Insights</h2>
            <p className="text-xl text-gray-400 max-w-2xl">
              Stay informed with our latest thought leadership, case studies, and industry insights.
            </p>
          </div>
          <Button
            variant="outline"
            className="hidden lg:flex items-center bg-transparent border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"
          >
            View All Insights
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {insights.map((insight, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gray-800 border-gray-700 hover:border-gray-600"
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-sm text-gray-400">
                    <Calendar className="h-4 w-4 mr-2" />
                    {insight.date}
                  </div>
                  <insight.icon className="h-5 w-5 text-blue-400" />
                </div>
                <div className="text-xs font-semibold text-blue-400 uppercase tracking-wide mb-2">{insight.type}</div>
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors duration-200">
                  {insight.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{insight.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">{insight.readTime}</span>
                  <Link
                    href="#"
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 text-sm font-medium"
                  >
                    Read More
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 lg:hidden">
          <Button
            variant="outline"
            className="flex items-center mx-auto bg-transparent border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"
          >
            View All Insights
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
