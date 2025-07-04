"use client"

import { Calendar, ArrowRight, FileText, Video, Users, Award } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const insights = [
  {
    title: "Digital Transformation Success: E-Commerce Platform Case Study",
    excerpt:
      "How we helped a retail client achieve 300% growth in online sales through our comprehensive e-commerce platform and digital marketing integration.",
    category: "Case Study",
    type: "Success Story",
    date: "January 15, 2025",
    readTime: "8 min read",
    icon: Award,
  },
  {
    title: "The Future of BPO: AI-Powered Customer Support Solutions",
    excerpt:
      "Exploring how artificial intelligence and automation are revolutionizing customer support operations and improving service quality.",
    category: "Technology",
    type: "Blog Article",
    date: "January 12, 2025",
    readTime: "6 min read",
    icon: FileText,
  },
  {
    title: "MLM Software Demo: 4-Level Hierarchy Management",
    excerpt:
      "Join our product demonstration showcasing the advanced features of our network marketing software with comprehensive hierarchy management.",
    category: "Product",
    type: "Webinar",
    date: "January 20, 2025",
    readTime: "45 min",
    icon: Video,
  },
  {
    title: "Client Testimonial: College ERP Implementation Success",
    excerpt:
      "Hear from our education sector client about their digital transformation journey and 50% improvement in administrative efficiency.",
    category: "Education",
    type: "Testimonial",
    date: "January 10, 2025",
    readTime: "5 min read",
    icon: Users,
  },
]

export default function InsightsSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 lg:mb-16">
          <div className="mb-8 lg:mb-0">
            <h2 className="text-3xl lg:text-4xl font-light text-[#333333] mb-4 lg:mb-6 tracking-tight">Insights</h2>
            <p className="text-lg lg:text-xl text-[#666666] max-w-2xl leading-relaxed font-light">
              Stay updated with our latest client success stories, product launches, industry insights, and thought
              leadership content.
            </p>
          </div>
          <Button
            variant="outline"
            className="hidden lg:flex items-center bg-transparent border-[#0066cc] text-[#0066cc] hover:bg-[#0066cc] hover:text-white px-6 py-3"
          >
            View All Insights
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {insights.map((insight, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border-0 shadow-sm bg-white"
            >
              <div className="aspect-video bg-gradient-to-br from-blue-50 to-purple-50 overflow-hidden flex items-center justify-center relative">
                <insight.icon className="h-12 lg:h-16 w-12 lg:w-16 text-[#0066cc] group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute top-4 right-4 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                  {insight.category}
                </div>
              </div>
              <CardContent className="p-6 lg:p-8">
                <div className="flex items-center text-sm text-gray-500 mb-3 lg:mb-4">
                  <Calendar className="h-4 w-4 mr-2" />
                  {insight.date}
                  <span className="mx-2">•</span>
                  {insight.readTime}
                </div>
                <div className="text-xs font-semibold text-[#0066cc] uppercase tracking-wide mb-2 lg:mb-3">
                  {insight.type}
                </div>
                <h3 className="text-lg lg:text-xl font-semibold text-[#333333] mb-3 lg:mb-4 group-hover:text-[#0066cc] transition-colors duration-200 leading-tight">
                  {insight.title}
                </h3>
                <p className="text-[#666666] text-sm lg:text-base leading-relaxed mb-4 lg:mb-6">{insight.excerpt}</p>
                <Link
                  href="#"
                  className="inline-flex items-center text-[#0066cc] hover:text-[#0052a3] text-sm lg:text-base font-medium group-hover:translate-x-1 transition-transform duration-200"
                >
                  Read More
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 lg:mt-16 lg:hidden">
          <Button
            variant="outline"
            className="flex items-center mx-auto bg-transparent border-[#0066cc] text-[#0066cc] hover:bg-[#0066cc] hover:text-white px-6 py-3"
          >
            View All Insights
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
