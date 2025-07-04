"use client";

import { ArrowRight, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function ServicesCTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="bg-gray-800/50 border-gray-700/50 backdrop-blur-sm overflow-hidden">
          <CardContent className="p-12 text-center">
            <h2 className="text-4xl lg:text-5xl font-light text-white mb-6 tracking-tight">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
              Let&apos;s discuss your requirements and explore how our
              comprehensive technology solutions can drive your business growth
              and operational excellence.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white hover:text-gray-900 bg-transparent px-8 py-4"
              >
                Schedule Consultation
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              <div className="flex items-center justify-center space-x-3">
                <Phone className="h-6 w-6 text-blue-400" />
                <div>
                  <div className="text-white font-medium">Call Us</div>
                  <div className="text-gray-400">+91 7003484263</div>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Mail className="h-6 w-6 text-blue-400" />
                <div>
                  <div className="text-white font-medium">Email Us</div>
                  <div className="text-gray-400">support@stelleronix.com</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
