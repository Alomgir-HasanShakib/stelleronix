"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ChevronDown, Search, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import MegaMenu from "./mega-menu";
import Image from "next/image";

const navItems = [
  {
    label: "What we do",
    href: "/services",
    hasDropdown: true,
    megaMenuContent: {
      sections: [
        {
          title: "Services",
          content:
            "Stelleronix delivers comprehensive BPO services, custom software development, and cloud infrastructure solutions. We combine 24/7 operational support with cutting-edge technology to drive business growth.",
        },
        {
          title: "BPO Services",
          content:
            "Complete business process outsourcing including inbound/outbound calls, chat support, lead generation, KYC verification, technical support, and back-office management with 24/7 operations.",
          links: [
            {
              label: "Inbound & Outbound Calls",
              href: "#bpo-inbound-outbound",
            },
            { label: "Chat & Mail Support", href: "#bpo-chat-mail" },
            { label: "Lead Generation", href: "#bpo-leads" },
          ],
        },
        {
          title: "Software Development",
          content:
            "Custom ERP systems, CRM platforms, GST billing software, college management systems, network marketing software, e-commerce websites, and admin dashboards built with modern technology.",
        },
        {
          title: "Cloud & Infrastructure",
          content:
            "Enterprise-grade cloud hosting, cybersecurity solutions, network monitoring, API integrations, payment gateway setup, and comprehensive IT infrastructure management.",
        },
      ],
    },
  },
  {
    label: "Who we are",
    href: "/about",
    hasDropdown: true,
    megaMenuContent: {
      sections: [
        {
          title: "Overview",
          content:
            "A full-service software & BPO company with best-in-class IT infrastructure. We deliver scalable digital solutions across India with proven expertise in automation and customer operations.",
        },
        {
          title: "Our Mission",
          content:
            "To empower businesses with intelligent technology solutions that drive growth, efficiency, and customer satisfaction through innovative software development and operational excellence.",
        },
        {
          title: "Why Choose Us",
          content:
            "Customer-first approach, 24/7 support model, agile development methodology, end-to-end data security, and proven track record of delivering high-impact solutions across industries.",
        },
        {
          title: "Leadership & Team",
          content:
            "Experienced leadership team with deep industry expertise, skilled developers, dedicated support staff, and a collaborative culture focused on innovation and excellence.",
        },
      ],
    },
  },
  // {
  //   label: "Industries",
  //   href: "/industries",
  //   hasDropdown: true,
  //   megaMenuContent: {
  //     sections: [
  //       {
  //         title: "Overview",
  //         content:
  //           "We serve 12+ industries across India with specialized solutions tailored to unique sector challenges, regulatory requirements, and growth opportunities.",
  //       },
  //       {
  //         title: "Financial Services",
  //         content:
  //           "Banking & capital markets, insurance, and fintech solutions with secure platforms, regulatory compliance, and digital transformation capabilities.",
  //       },
  //       {
  //         title: "Technology & Education",
  //         content:
  //           "EdTech platforms, college management systems, high-tech startups, and communications solutions with modern technology stack and scalable architecture.",
  //       },
  //       {
  //         title: "Commerce & Manufacturing",
  //         content:
  //           "E-commerce platforms, retail solutions, manufacturing automation, healthcare systems, and supply chain optimization with integrated business processes.",
  //       },
  //     ],
  //   },
  // },
  {
    label: "Careers",
    href: "/careers",
    hasDropdown: true,
    megaMenuContent: {
      sections: [
        {
          title: "Overview",
          content:
            "Join our growing team of innovators, developers, and customer service professionals. Build your career while contributing to cutting-edge technology solutions.",
        },
        {
          title: "Open Positions",
          content:
            "We're hiring Software Developers (Web, Angular), UI/UX Designers, Customer Support (Voice/Non-Voice), Sales & Marketing professionals, and Project Managers. Internship programs available.",
        },
        {
          title: "Growth & Benefits",
          content:
            "Professional development opportunities, skill enhancement programs, competitive compensation, work-life balance, collaborative culture, and recognition for outstanding performance.",
        },
        {
          title: "Apply Now",
          content:
            "Send your resume to sourav.maji@stelleronix.com or contact us at +91 7003484263. We welcome talented individuals passionate about technology and customer service.",
        },
      ],
    },
  },
  {
    label: "Contact",
    href: "/contact",
    hasDropdown: true,
    megaMenuContent: {
      sections: [
        {
          title: "Overview",
          content:
            "Get in touch for business inquiries, technical support, partnership opportunities, or to schedule a consultation. We're here to help you achieve your technology goals.",
        },
        {
          title: "Business Inquiries",
          content:
            "For sales inquiries, project discussions, custom software development, BPO services, or partnership opportunities, contact our business development team.",
        },
        {
          title: "Technical Support",
          content:
            "24/7 technical support for existing clients, documentation access, training resources, and comprehensive customer service for all our solutions and platforms.",
        },
        {
          title: "Office & Contact",
          content:
            "Head Office: 87Q3+CPR, Sadatpur P, West Bengal 721301. Email: support@stelleronix.com. Phone: +91 7003484263. Business hours: 24/7 support available.",
        },
      ],
    },
  },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveMegaMenu(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMegaMenu(null);
    }, 100);
  };

  const handleMegaMenuEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const handleMegaMenuLeave = () => {
    setActiveMegaMenu(null);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-gray-900 border-b border-gray-800 ${
          isScrolled ? "shadow-lg" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo - Exact TCS style */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <div className="flex items-center space-x-2">
                  <Image
                    src="/logo.jpeg"
                    alt="Stelleronix Logo"
                    width={150}
                    height={40}
                    priority
                  />
                </div>
              </Link>
            </div>

            {/* Desktop Navigation - Exact TCS style */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() =>
                    item.hasDropdown && handleMouseEnter(item.label)
                  }
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    href={item.href}
                    className="flex items-center text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm font-medium py-2"
                  >
                    {item.label}
                    {item.hasDropdown && (
                      <ChevronDown className="ml-1 h-4 w-4" />
                    )}
                  </Link>
                </div>
              ))}
            </nav>

            {/* Right side actions - Exact TCS style */}
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                className="hidden lg:inline-flex text-sm bg-transparent border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-gray-900"
              >
                <Link href={"/contact"}>CONTACT US</Link>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-300 hover:text-blue-400"
              >
                <Search className="h-5 w-5" />
              </Button>

              {/* Mobile menu button */}
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden text-gray-300 hover:text-blue-400"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mega Menu */}
        {activeMegaMenu && (
          <div
            className="absolute top-full left-0 w-full"
            onMouseEnter={handleMegaMenuEnter}
            onMouseLeave={handleMegaMenuLeave}
          >
            <MegaMenu
              content={
                navItems.find((item) => item.label === activeMegaMenu)
                  ?.megaMenuContent
              }
            />
          </div>
        )}

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-gray-800 border-t border-gray-700">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700">
                CONTACT US
              </Button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
