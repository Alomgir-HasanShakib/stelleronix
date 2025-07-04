"use client";
import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MegaMenuSection {
  title: string;
  content: string;
}

interface MegaMenuContent {
  sections: MegaMenuSection[];
}

interface MegaMenuProps {
  content?: MegaMenuContent;
}

export default function MegaMenu({ content }: MegaMenuProps) {
  const [activeSection, setActiveSection] = useState("Overview");

  if (!content) return null;

  const activeContent = content.sections.find(
    (section) => section.title === activeSection
  );

  return (
    <div className="bg-gray-900 shadow-2xl border-t border-gray-700 animate-in slide-in-from-top-2 duration-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-12 min-h-[400px]">
          {/* Left Sidebar Navigation */}
          <div className="col-span-3 bg-gray-800 border-r border-gray-700">
            <div className="p-6">
              <nav className="space-y-1">
                {content?.sections.map((section, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveSection(section.title)}
                    className={`w-full flex items-center justify-between px-4 py-3 text-left rounded-sm transition-all duration-200 group ${
                      activeSection === section.title
                        ? "bg-gray-700 text-white border-l-4 border-blue-400"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white"
                    }`}
                  >
                    <span className="font-medium">{section.title}</span>
                    <ChevronRight
                      className={`h-4 w-4 transition-transform duration-200 ${
                        activeSection === section.title
                          ? "text-blue-400"
                          : "text-gray-500 group-hover:text-gray-300"
                      }`}
                    />
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Right Content Area */}
          <div className="col-span-9 bg-gray-900">
            <div className="p-8 h-full flex flex-col justify-center">
              <div className="max-w-2xl">
                <h2 className="text-3xl font-light text-white mb-6 leading-tight">
                  Stelleronix is here to make a difference through technology.
                </h2>
                <p className="text-lg text-gray-400 leading-relaxed mb-8">
                  {activeContent?.content ||
                    ` Leading the way in innovation, we build greater futures for
                  businesses across multiple industries with cutting-edge
                  technology solutions.`}
                </p>
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-transparent border-2 border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-gray-500 px-8 py-3 rounded-full"
                >
                  Discover all solutions
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
