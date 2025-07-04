"use client"

import { Calendar, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const newsItems = [
  {
    title: "Stelleronix Announces Strategic Partnership with Leading Cloud Provider",
    excerpt:
      "New alliance will accelerate digital transformation initiatives for enterprise clients across multiple industries.",
    date: "January 18, 2025",
    category: "Partnership",
  },
  {
    title: "Q3 2024 Results: Record Revenue Growth and Expansion",
    excerpt: "Company reports 15% year-over-year growth driven by strong demand for AI and cloud services.",
    date: "January 15, 2025",
    category: "Financial",
  },
  {
    title: "Stelleronix Wins Industry Award for Innovation in Healthcare Technology",
    excerpt: "Recognition for groundbreaking patient care management platform that improved outcomes by 40%.",
    date: "January 12, 2025",
    category: "Awards",
  },
  {
    title: "New Innovation Lab Opens in Singapore",
    excerpt: "State-of-the-art facility will focus on emerging technologies including AI, IoT, and quantum computing.",
    date: "January 10, 2025",
    category: "Expansion",
  },
]

export default function NewsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl font-light text-gray-900 mb-6">Newsroom</h2>
            <p className="text-xl text-gray-600 max-w-2xl">
              Stay updated with the latest news, announcements, and developments from Stelleronix.
            </p>
          </div>
          <Button
            variant="outline"
            className="hidden lg:flex items-center bg-transparent border-gray-300 text-gray-700 hover:bg-gray-50"
          >
            View All News
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {newsItems.map((news, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 shadow-sm bg-white"
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="h-4 w-4 mr-2" />
                    {news.date}
                  </div>
                  <div className="text-xs font-semibold text-blue-600 uppercase tracking-wide">{news.category}</div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                  {news.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">{news.excerpt}</p>
                <Link
                  href="#"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium group-hover:translate-x-1 transition-transform duration-200"
                >
                  Read Full Story
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 lg:hidden">
          <Button
            variant="outline"
            className="flex items-center mx-auto bg-transparent border-gray-300 text-gray-700 hover:bg-gray-50"
          >
            View All News
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
