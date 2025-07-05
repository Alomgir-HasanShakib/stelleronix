"use client";

import {
  ArrowRight,
  Phone,
  Code,
  Cloud,
  Headphones,
  Database,
  Users,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Phone,
    title: "BPO & Operational Support",
    description:
      "Complete business process outsourcing with 24/7 customer support, lead generation, and back-office management.",
    features: [
      "Inbound & Outbound Call Centers",
      "Chat & Email Support",
      "Lead Generation & CRM Management",
      "KYC Verification Services",
      "Technical Support",
      "Document Processing",
      "Recovery & Collection Calls",
      "Back-Office Operations",
    ],
    color: "text-blue-400",
  },
  {
    icon: Code,
    title: "Software Development",
    description:
      "Custom software solutions including ERP systems, CRM platforms, and e-commerce websites with modern technology stack.",
    features: [
      "Custom ERP & CRM Systems",
      "GST Billing Software",
      "College Management Systems",
      "Network Marketing Software",
      "E-Commerce Websites",
      "Admin Dashboards",
      "Mobile Applications",
      "API Development",
    ],
    color: "text-green-400",
  },
  {
    icon: Cloud,
    title: "Cloud & Infrastructure",
    description:
      "Enterprise-grade cloud hosting, cybersecurity, and IT infrastructure solutions with end-to-end data security.",
    features: [
      "Cloud Hosting Services",
      "Cybersecurity Solutions",
      "Network Monitoring",
      "Data Backup & Recovery",
      "Server Management",
      "Domain & SSL Setup",
      "Performance Optimization",
      "24/7 Infrastructure Support",
    ],
    color: "text-purple-400",
  },
  {
    icon: Headphones,
    title: "Customer Support Services",
    description:
      "Dedicated customer support teams providing multi-channel assistance with industry expertise.",
    features: [
      "24/7 Customer Service",
      "Multi-language Support",
      "Ticket Management",
      "Live Chat Support",
      "Social Media Management",
      "Customer Onboarding",
      "Complaint Resolution",
      "Quality Assurance",
    ],
    color: "text-orange-400",
  },
  {
    icon: Database,
    title: "Data Management",
    description:
      "Comprehensive data processing, analytics, and management services for informed business decisions.",
    features: [
      "Data Entry & Processing",
      "Database Management",
      "Data Analytics",
      "Report Generation",
      "Data Migration",
      "Data Cleansing",
      "Business Intelligence",
      "Performance Dashboards",
    ],
    color: "text-red-400",
  },
  {
    icon: Users,
    title: "Consulting & Training",
    description:
      "Strategic technology consulting and training services to maximize your technology investments.",
    features: [
      "Technology Consulting",
      "Digital Transformation",
      "Process Optimization",
      "Staff Training Programs",
      "System Implementation",
      "Change Management",
      "Best Practices",
      "Ongoing Support",
    ],
    color: "text-cyan-400",
  },
];

export default function ServicesOverviewDetailed() {
  return (
    <section className="py-24 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light text-white mb-6 tracking-tight">
            Our Service
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
            Comprehensive technology solutions designed to meet your business
            needs and drive sustainable growth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gray-900/50 border-gray-700/50 backdrop-blur-sm"
            >
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div
                    className={`${service.color} mr-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon className="h-12 w-12" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-400">{service.description}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-white font-medium mb-4">Key Features:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {service.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center text-sm text-gray-400"
                      >
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                <Button
                  variant="ghost"
                  className="text-blue-400 hover:text-blue-300 p-0 h-auto font-medium group-hover:translate-x-1 transition-transform duration-200"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
