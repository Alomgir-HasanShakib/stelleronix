import Link from "next/link"
import { Facebook, Twitter, Linkedin, Youtube, Mail, Phone, MapPin, Globe } from "lucide-react"

const footerSections = [
  {
    title: "What we do",
    links: [
      "BPO & Operational Support",
      "Software Development",
      "Cloud & Infrastructure",
      "Digital Solutions",
      "Enterprise Platforms",
      "Consulting & Support",
    ],
  },
  {
    title: "Industries",
    links: [
      "Banking & Capital Markets",
      "Healthcare & Life Sciences",
      "Retail & E-Commerce",
      "Education & EdTech",
      "Manufacturing",
      "High-Tech & Startups",
    ],
  },
  {
    title: "Products",
    links: [
      "Stelleronix CRM",
      "MLM Software",
      "College ERP",
      "GST Billing System",
      "Vendor Management",
      "E-Commerce Platform",
    ],
  },
  {
    title: "Company",
    links: [
      "About Stelleronix",
      "Mission & Vision",
      "Leadership",
      "Careers",
      "Corporate Sustainability",
      "CSR Initiatives",
    ],
  },
  {
    title: "Support",
    links: [
      "Technical Support",
      "Customer Service",
      "Documentation",
      "Training Resources",
      "Service Portal",
      "Contact Us",
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="text-2xl font-bold text-white mb-6">STELLERONIX</div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              A full-service software & BPO development company delivering high-impact solutions across industries. We
              combine intelligent automation, agile software, and 24/7 customer operations to unlock business growth.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-gray-400 text-sm">
                <Mail className="h-4 w-4 mr-3" />
                support@stelleronix.com
              </div>
              <div className="flex items-center text-gray-400 text-sm">
                <Phone className="h-4 w-4 mr-3" />
                +91 7003484263
              </div>
              <div className="flex items-center text-gray-400 text-sm">
                <MapPin className="h-4 w-4 mr-3" />
                87Q3+CPR, Sadatpur P, West Bengal 721301
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index} className="lg:col-span-1">
              <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wide">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="flex flex-col lg:flex-row items-center space-y-2 lg:space-y-0 lg:space-x-6">
              <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Stelleronix. All rights reserved.</p>
              <div className="flex space-x-6">
                <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Privacy Statement
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Terms of Use
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Cookie Policy
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-gray-400">
              <Globe className="h-4 w-4" />
              <span className="text-sm">www.stelleronix.com</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
