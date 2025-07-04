"use client";

import { ArrowRight, Users, Award, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const careerHighlights = [
  {
    icon: Users,
    title: "Collaborative Culture",
    description:
      "Work with diverse, talented teams on cutting-edge projects that make a real impact.",
  },
  {
    icon: Award,
    title: "Professional Growth",
    description:
      "Continuous learning opportunities, certifications, and career advancement programs.",
  },
  {
    icon: Globe,
    title: "Innovation Focus",
    description:
      "Work with latest technologies and contribute to innovative solutions across industries.",
  },
];

const openRoles = [
  "Software Developers (Web, Angular)",
  "UI/UX Designers",
  "Customer Support (Voice, Non-Voice)",
  "Sales & Marketing",
  "Project Management",
  "Internship Program",
];

export default function CareersSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-white mb-6">Join Our Team</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            We are building the future with talented professionals passionate
            about technology and service. Join Stelleronix and grow your career
            with us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              <Link href={"/careers"}> View Open Positions</Link>
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-gray-900 bg-transparent"
            >
              <Link href={"/careers"}> Life at Stelleronix</Link>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {careerHighlights.map((highlight, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gray-700/50 border-gray-600 backdrop-blur-sm"
            >
              <CardContent className="p-8 text-center">
                <div className="text-blue-400 mb-6 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                  <highlight.icon className="h-12 w-12" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {highlight.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {highlight.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Open Positions */}
        <div className="bg-gray-700/30 rounded-2xl p-8 backdrop-blur-sm">
          <h3 className="text-2xl font-light text-white mb-6 text-center">
            Open Positions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {openRoles.map((role, index) => (
              <div
                key={index}
                className="bg-gray-600/50 rounded-lg p-4 text-center hover:bg-gray-600/70 transition-colors duration-300"
              >
                <div className="text-white font-medium">{role}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-gray-400 mb-4">
              Apply at: sourav.maji@stelleronix.com
            </p>
            <Button
              variant="outline"
              className="bg-transparent border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-gray-900"
            >
              Apply Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
