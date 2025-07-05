"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutHero() {
  return (
    <section className="relative min-h-[600px] bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 overflow-hidden px-6 sm:px-12 lg:px-24 py-32 flex flex-col justify-center">
      {/* Abstract Blurred Circles */}
      <div className="absolute -top-28 -left-28 w-56 h-56 rounded-full bg-blue-600/20 filter blur-3xl" />
      <div className="absolute bottom-20 right-12 w-40 h-40 rounded-full bg-purple-600/15 filter blur-2xl" />

      {/* Abstract SVG Background */}
      <svg
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 max-w-full max-h-full w-[600px] h-[600px] z-0"
        viewBox="0 0 600 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="grad1" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#9333ea" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="grad2" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#f97316" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
          </radialGradient>
        </defs>

        <circle cx="200" cy="300" r="180" fill="url(#grad1)" />
        <circle cx="420" cy="320" r="150" fill="url(#grad2)" />
      </svg>

      {/* Content */}
      <div className="max-w-4xl mx-auto text-center lg:text-left space-y-8 relative z-10">
        <span className="text-blue-400 uppercase tracking-widest font-semibold">
          Who We Are
        </span>
        <h1 className="text-white text-5xl sm:text-6xl font-extrabold leading-tight max-w-3xl mx-auto lg:mx-0">
          Powering Business{" "}
          <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Growth
          </span>{" "}
          with Tech
        </h1>
        <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
          Stelleronix delivers customized BPO, software, and IoT solutions that
          redefine operational excellence. With innovation and agility, we help
          businesses scale efficiently and effectively.
        </p>

        <div className="flex justify-center lg:justify-start gap-6 flex-wrap">
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 shadow-lg "
          >
            <Link href={"/services"}>Our Services</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-white bg-transparent border-white hover:bg-white hover:text-gray-900"
          >
            <Link href={"/contact"}> Contact Us</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
