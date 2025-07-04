"use client";

import {
  ArrowRight,
  Stethoscope,
  ShoppingCart,
  Factory,
  GraduationCap,
  Wallet,
  Users,
  Building2,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const industries = [
  {
    title: "Healthcare",
    description:
      "Digital health records, telemedicine, and patient engagement systems.",
    icon: Stethoscope,
    id: "healthcare",
  },
  {
    title: "E-commerce",
    description:
      "Omnichannel commerce, inventory, logistics & customer experience platforms.",
    icon: ShoppingCart,
    id: "ecommerce",
  },
  {
    title: "Manufacturing",
    description:
      "Smart factory automation, resource planning, and supply chain tech.",
    icon: Factory,
    id: "manufacturing",
  },
  {
    title: "Education",
    description:
      "EdTech platforms, school/college ERP, and virtual learning systems.",
    icon: GraduationCap,
    id: "education",
  },
  {
    title: "Finance",
    description:
      "Banking apps, digital wallets, and financial risk management platforms.",
    icon: Wallet,
    id: "finance",
  },
  {
    title: "HR & Payroll",
    description:
      "Employee management, payroll automation, and compliance systems.",
    icon: Users,
    id: "hr-payroll",
  },
  {
    title: "Real Estate",
    description:
      "Property listing, CRM, virtual tours, and transaction management tools.",
    icon: Building2,
    id: "real-estate",
  },
];

export default function IndustriesSection() {
  return (
    <section
      id="industries"
      className="relative py-24 bg-gradient-to-b from-gray-900 to-gray-950 overflow-hidden"
    >
      {/* Decorative gradient glow */}
      <div className="absolute -top-24 left-0 w-full h-96 bg-gradient-to-tr from-blue-500/20 via-purple-500/10 to-transparent blur-3xl opacity-40 pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-sm font-semibold uppercase tracking-widest text-blue-400">
            Industries
          </span>
          <h2 className="text-5xl lg:text-6xl font-light text-white mb-6 tracking-tight">
            We Serve
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
            Our digital solutions are trusted by industry leaders across diverse
            sectors.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {industries.map((industry, index) => (
            <div
              key={index}
              id={industry.id}
              className="group relative p-8 border border-gray-700 rounded-xl bg-gray-900/50 hover:bg-gray-900/70 backdrop-blur-md transition-all duration-300"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center mb-4">
                  <industry.icon className="text-blue-400 h-6 w-6 mr-3" />
                  <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                    {industry.title}
                  </h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed flex-1">
                  {industry.description}
                </p>
                <div className="mt-6 flex items-center text-blue-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span>Learn more</span>
                  <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <Button
            variant="outline"
            size="lg"
            className="border-blue-600 bg-transparent hover:bg-blue-400 hover:border-blue-500 px-8 py-4 text-white font-medium rounded-full transition-all duration-300"
          >
            View All Industries
            <ArrowRight className="ml-3 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
