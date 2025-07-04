"use client"

import { Calendar, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const newsItems = [
  {
    title: "Stelleronix Launches Advanced MLM Software with 4-Level Hierarchy",
    excerpt:
      "New network marketing platform offers comprehensive hierarchy management, commission tracking, and automated payout systems for growing MLM businesses.",
    date: "January 18, 2025",
    category: "Product Launch",
  },
  {
    title: "Partnership Announcement: Cloud Infrastructure Expansion",
    excerpt:
      "Strategic alliance with leading cloud providers to enhance our hosting services and provide enterprise-grade infrastructure solutions across India.",
    date: "January 15, 2025",
    category: "Partnership",
  },
  {
    title: "Stelleronix Wins 'Best BPO Service Provider' Award 2024",
    excerpt:
      "Recognition for excellence in customer support services, achieving 98% client satisfaction rate and 24/7 operational excellence.",
    date: "January 12, 2025",
    category: "Awards",
  },
  {
    title: "New Development Center Opens in West Bengal",
    excerpt:
      "Expansion of our development capabilities with state-of-the-art facility focusing on software development, UI/UX design, and customer support operations.",
    date: "January 10, 2025",
    category: "Expansion",
  },
]

export default function NewsroomSection() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 lg:mb-16">
          <div className="mb-8 lg:mb-0">
            <h2 className="text-3xl lg:text-4xl font-light text-[#333333] mb-4 lg:mb-6 tracking-tight">Newsroom</h2>
            <p className="text-lg lg:text-xl text-[#666666] max-w-2xl leading-relaxed font-light">
              Stay updated with the latest news, product launches, partnerships, and company developments from
              Stelleronix.
            </p>
          </div>
          <Button
            variant="outline"
            className="hidden lg:flex items-center bg-transparent border-[#0066cc] text-[#0066cc] hover:bg-[#0066cc] hover:text-white px-6 py-3"
          >
            View All News
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {newsItems.map((news, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-sm bg-white overflow-hidden"
            >
              <CardContent className="p-6 lg:p-8">
                <div className="flex items-center justify-between mb-4 lg:mb-6">
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="h-4 w-4 mr-2" />
                    {news.date}
                  </div>
                  <div className="text-xs font-semibold text-[#0066cc] uppercase tracking-wide bg-blue-50 px-3 py-1 rounded-full">
                    {news.category}
                  </div>
                </div>
                <h3 className="text-xl lg:text-2xl font-semibold text-[#333333] mb-3 lg:mb-4 group-hover:text-[#0066cc] transition-colors duration-200 leading-tight">
                  {news.title}
                </h3>
                <p className="text-[#666666] leading-relaxed mb-4 lg:mb-6 text-sm lg:text-base">{news.excerpt}</p>
                <Link
                  href="#"
                  className="inline-flex items-center text-[#0066cc] hover:text-[#0052a3] font-medium group-hover:translate-x-1 transition-transform duration-200 text-sm lg:text-base"
                >
                  Read Full Story
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
            View All News
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
