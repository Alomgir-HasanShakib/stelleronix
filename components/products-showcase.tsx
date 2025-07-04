"use client"

import { ArrowRight, Database, Users, GraduationCap, ShoppingCart, FileText, Network } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const products = [
  {
    icon: Database,
    title: "Stelleronix CRM",
    subtitle: "Cloud-Based Customer Relationship Management",
    description:
      "Comprehensive CRM solution with lead management, sales tracking, customer support, and analytics dashboard.",
    features: [
      "Lead Management & Tracking",
      "Sales Pipeline Management",
      "Customer Support Integration",
      "Analytics & Reporting",
      "Mobile App Access",
      "Third-party Integrations",
    ],
    color: "text-blue-400",
    price: "Starting at ₹5,000/month",
  },
  {
    icon: Network,
    title: "MLM Software",
    subtitle: "4-Level Hierarchy Network Marketing Platform",
    description:
      "Complete network marketing solution with multi-level commission tracking, genealogy management, and payout systems.",
    features: [
      "4-Level Commission Structure",
      "Genealogy Tree Management",
      "Automated Payout System",
      "Member Dashboard",
      "E-wallet Integration",
      "Rank & Achievement System",
    ],
    color: "text-green-400",
    price: "Starting at ₹15,000/month",
  },
  {
    icon: GraduationCap,
    title: "College ERP",
    subtitle: "Complete Educational Management System",
    description:
      "Integrated platform for student management, academic tracking, fee collection, and administrative operations.",
    features: [
      "Student Information System",
      "Academic Management",
      "Fee Collection & Accounting",
      "Library Management",
      "Examination System",
      "Parent-Student Portal",
    ],
    color: "text-purple-400",
    price: "Starting at ₹10,000/month",
  },
  {
    icon: FileText,
    title: "GST Billing System",
    subtitle: "Comprehensive Billing & Accounting Solution",
    description: "GST-compliant billing software with inventory management, PDF generation, and financial reporting.",
    features: [
      "GST-Compliant Invoicing",
      "Inventory Management",
      "PDF Invoice Generation",
      "Financial Reporting",
      "Multi-company Support",
      "Tax Calculation Engine",
    ],
    color: "text-orange-400",
    price: "Starting at ₹3,000/month",
  },
  {
    icon: Users,
    title: "Vendor Management System",
    subtitle: "Complete Supplier & Vendor Platform",
    description:
      "Streamline vendor relationships with procurement management, performance tracking, and payment processing.",
    features: [
      "Vendor Registration & Onboarding",
      "Purchase Order Management",
      "Performance Tracking",
      "Payment Processing",
      "Contract Management",
      "Compliance Monitoring",
    ],
    color: "text-red-400",
    price: "Starting at ₹8,000/month",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Platform",
    subtitle: "Complete Online Store Solution",
    description:
      "Full-featured e-commerce platform with product management, payment integration, and order processing.",
    features: [
      "Product Catalog Management",
      "Shopping Cart & Checkout",
      "Payment Gateway Integration",
      "Order Management",
      "Inventory Tracking",
      "Customer Management",
    ],
    color: "text-cyan-400",
    price: "Starting at ₹12,000/month",
  },
]

export default function ProductsShowcase() {
  return (
    <section className="py-24 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light text-white mb-6 tracking-tight">Our Product Suite</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
            Enterprise-grade software platforms built for scalability, performance, and ease of use.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gray-900/50 border-gray-700/50 backdrop-blur-sm"
            >
              <CardContent className="p-8">
                <div className="flex items-start mb-6">
                  <div className={`${product.color} mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    <product.icon className="h-12 w-12" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-white mb-1">{product.title}</h3>
                    <p className="text-gray-400 text-sm mb-3">{product.subtitle}</p>
                    <p className="text-gray-300">{product.description}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-white font-medium mb-4">Key Features:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-400">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-purple-400 font-semibold">{product.price}</div>
                    <div className="text-gray-500 text-xs">Custom pricing available</div>
                  </div>
                  <Button
                    variant="ghost"
                    className="text-purple-400 hover:text-purple-300 p-0 h-auto font-medium group-hover:translate-x-1 transition-transform duration-200"
                  >
                    Learn More
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
