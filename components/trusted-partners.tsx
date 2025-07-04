"use client";

import { useEffect, useState } from "react";

const trustedCompanies = [
  "Microsoft",
  "Amazon Web Services",
  "Google Cloud",
  "IBM",
  "Oracle",
  "SAP",
  "Salesforce",
  "Adobe",
  "Cisco",
  "VMware",
  "Dell Technologies",
  "HPE",
  "Intel",
  "NVIDIA",
  "Red Hat",
  "ServiceNow",
];

export default function TrustedPartners() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % (trustedCompanies.length - 4));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-light text-white mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            We partner with Fortune 500 companies and emerging businesses to
            deliver transformative solutions
          </p>
        </div>

        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / 5)}%)` }}
          >
            {trustedCompanies.map((company, index) => (
              <div key={index} className="flex-shrink-0 w-1/5 px-4">
                <div className="bg-gray-700 rounded-lg shadow-sm p-8 h-24 flex items-center justify-center hover:bg-gray-600 transition-colors duration-300">
                  <div className="text-xl font-semibold text-gray-300">
                    {company}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
