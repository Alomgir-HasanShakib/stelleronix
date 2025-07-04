"use client";

import { ArrowRight, Users, Award, Globe, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CareersHero() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-green-500/20 to-blue-500/20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <span className="text-green-400 text-sm font-semibold uppercase tracking-wider mb-4 block">
                Join Our Team
              </span>
              <h1 className="text-5xl lg:text-7xl font-light text-white mb-6 tracking-tight leading-tight">
                Build Your Career with Us
              </h1>
              <p className="text-xl text-gray-400 leading-relaxed mb-8">
                Join a dynamic team of innovators, problem-solvers, and
                change-makers. Build your career while building the future of
                technology with cutting-edge projects and growth opportunities.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3"
              >
                <Link href={"/careers"}> View Open Positions</Link>
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white hover:text-gray-900 bg-transparent px-8 py-3"
              >
                <Link href={"/careers"}> Life at Stelleronix</Link>
              </Button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-8">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6 text-center">
              <Users className="h-12 w-12 text-green-400 mx-auto mb-4" />
              <div className="text-3xl font-light text-white mb-2">50+</div>
              <div className="text-gray-400 text-sm">Team Members</div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6 text-center">
              <Award className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <div className="text-3xl font-light text-white mb-2">95%</div>
              <div className="text-gray-400 text-sm">Employee Satisfaction</div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6 text-center">
              <Globe className="h-12 w-12 text-purple-400 mx-auto mb-4" />
              <div className="text-3xl font-light text-white mb-2">12+</div>
              <div className="text-gray-400 text-sm">Industries Served</div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6 text-center">
              <TrendingUp className="h-12 w-12 text-orange-400 mx-auto mb-4" />
              <div className="text-3xl font-light text-white mb-2">100%</div>
              <div className="text-gray-400 text-sm">Growth Opportunities</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
