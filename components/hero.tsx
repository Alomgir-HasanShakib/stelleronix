// "use client"

// import { useState, useEffect } from "react"
// import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react"
// import { Button } from "@/components/ui/button"

// const heroSlides = [
//   {
//     title: "Perpetually Adaptive Enterprise",
//     subtitle:
//       "Stelleronix delivers high-impact BPO and software solutions that combine intelligent automation, agile development, and 24/7 customer operations to unlock business growth.",
//   },
//   {
//     title: "Best IT Infrastructure",
//     subtitle:
//       "Experience enterprise-grade IT infrastructure with end-to-end data security, cloud-powered platforms, and proven delivery excellence across India.",
//   },
//   {
//     title: "Building on Belief",
//     subtitle:
//       "Trusted by clients across India for scalable digital solutions, consistent support, and innovative technology platforms that drive sustainable growth.",
//   },
// ]

// export default function Hero() {
//   const [currentSlide, setCurrentSlide] = useState(0)
//   const [isPlaying, setIsPlaying] = useState(true)

//   useEffect(() => {
//     if (!isPlaying) return

//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
//     }, 6000)

//     return () => clearInterval(interval)
//   }, [isPlaying])

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
//   }

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
//   }

//   return (
//     <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
//       {/* Animated wave graphics - Exact TCS style */}
//       <div className="absolute inset-0 opacity-80">
//         <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3/5 h-full">
//           <svg viewBox="0 0 1000 800" className="w-full h-full">
//             <defs>
//               <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
//                 <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8" />
//                 <stop offset="30%" stopColor="#8B5CF6" stopOpacity="0.7" />
//                 <stop offset="60%" stopColor="#F59E0B" stopOpacity="0.6" />
//                 <stop offset="100%" stopColor="#10B981" stopOpacity="0.5" />
//               </linearGradient>
//               <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
//                 <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.6" />
//                 <stop offset="50%" stopColor="#F59E0B" stopOpacity="0.7" />
//                 <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.5" />
//               </linearGradient>
//             </defs>

//             {/* Main flowing wave */}
//             <path
//               d="M200,400 Q300,200 500,350 Q700,500 900,300 Q1100,100 1300,400"
//               stroke="url(#waveGradient1)"
//               strokeWidth="4"
//               fill="none"
//               className="animate-pulse"
//               style={{ animationDuration: "4s" }}
//             />

//             {/* Secondary wave */}
//             <path
//               d="M150,450 Q350,250 550,400 Q750,550 950,350 Q1150,150 1350,450"
//               stroke="url(#waveGradient2)"
//               strokeWidth="3"
//               fill="none"
//               className="animate-pulse"
//               style={{ animationDuration: "5s", animationDelay: "1s" }}
//             />

//             {/* Tertiary wave */}
//             <path
//               d="M100,350 Q250,150 450,300 Q650,450 850,250 Q1050,50 1250,350"
//               stroke="url(#waveGradient1)"
//               strokeWidth="2"
//               fill="none"
//               className="animate-pulse"
//               style={{ animationDuration: "6s", animationDelay: "2s" }}
//             />

//             {/* Additional flowing elements */}
//             <circle cx="300" cy="300" r="3" fill="#3B82F6" opacity="0.6" className="animate-pulse" />
//             <circle
//               cx="500"
//               cy="400"
//               r="2"
//               fill="#8B5CF6"
//               opacity="0.7"
//               className="animate-pulse"
//               style={{ animationDelay: "1s" }}
//             />
//             <circle
//               cx="700"
//               cy="250"
//               r="4"
//               fill="#F59E0B"
//               opacity="0.5"
//               className="animate-pulse"
//               style={{ animationDelay: "2s" }}
//             />
//           </svg>
//         </div>
//       </div>

//       {/* Content */}
//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           <div className="text-white space-y-8">
//             <h1 className="text-6xl lg:text-8xl font-light leading-tight animate-in slide-in-from-left-8 duration-1000">
//               {heroSlides[currentSlide].title}
//             </h1>
//             <p className="text-xl lg:text-2xl text-gray-300 max-w-2xl animate-in slide-in-from-left-8 duration-1000 delay-300">
//               {heroSlides[currentSlide].subtitle}
//             </p>
//             <div className="flex space-x-4 animate-in slide-in-from-left-8 duration-1000 delay-500">
//               <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 py-3 text-lg">
//                 Explore Solutions
//               </Button>
//               <Button
//                 size="lg"
//                 variant="outline"
//                 className="text-white border-white hover:bg-white hover:text-black bg-transparent px-8 py-3 text-lg"
//               >
//                 Contact Us
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Controls - exact TCS style */}
//       <div className="absolute right-8 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4 z-20">
//         <Button
//           variant="ghost"
//           size="icon"
//           onClick={() => setIsPlaying(!isPlaying)}
//           className="text-white hover:bg-white/20 w-12 h-12"
//         >
//           {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
//         </Button>
//         <Button variant="ghost" size="icon" onClick={nextSlide} className="text-white hover:bg-white/20 w-12 h-12">
//           <ChevronRight className="h-6 w-6" />
//         </Button>
//         <Button variant="ghost" size="icon" onClick={prevSlide} className="text-white hover:bg-white/20 w-12 h-12">
//           <ChevronLeft className="h-6 w-6" />
//         </Button>
//       </div>

//       {/* Slide indicators */}
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
//         {heroSlides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentSlide(index)}
//             className={`w-3 h-3 rounded-full transition-all duration-300 ${
//               index === currentSlide ? "bg-white" : "bg-white/50"
//             }`}
//           />
//         ))}
//       </div>
//     </section>
//   )
// }

"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white py-32">
      {/* Background Orbs */}
      <div className="absolute inset-0 z-0">
        <div className="w-[1200px] h-[1200px] bg-blue-500/10 rounded-full absolute -top-1/2 left-1/2 transform -translate-x-1/2 blur-3xl" />
        <div className="w-[800px] h-[800px] bg-purple-500/10 rounded-full absolute top-0 right-0 transform translate-x-1/3 -translate-y-1/2 blur-2xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight tracking-tight mb-6"
        >
          Empowering Digital Growth
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10"
        >
          Stelleronix is a full-service software & BPO development company
          delivering intelligent automation, secure IT infrastructure, and 24/7
          operational excellence.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="flex justify-center space-x-6"
        >
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4 rounded-full"
          >
            <Link href={"/services"}>Explore Services</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white bg-transparent text-white hover:bg-white hover:text-black text-lg px-8 py-4 rounded-full"
          >
            <Link href={"/contact"}>Contact Us</Link>
          </Button>
        </motion.div>

        {/* Key Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="mt-16 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 text-left max-w-4xl mx-auto"
        >
          {[
            {
              title: "Best IT Infrastructure",
              desc: "Enterprise-grade cloud and data security",
            },
            {
              title: "Custom ERP & CRM",
              desc: "Built to scale your operations",
            },
            {
              title: "24/7 Customer Operations",
              desc: "Round-the-clock process support",
            },
            {
              title: "Trusted Across India",
              desc: "Serving clients nationwide",
            },
          ].map((item, idx) => (
            <div key={idx}>
              <h4 className="text-lg font-semibold text-white">{item.title}</h4>
              <p className="text-sm text-gray-400 mt-1">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
