"use client"

export default function AboutOverview() {
  const paragraphs = [
    "Stelleronix LLP is a dynamic and forward-thinking company specializing in Business Process Outsourcing (BPO) and custom software solutions, with a strong presence in India and a growing footprint globally.",
    "Our high-quality, scalable, and secure solutions — from customer support and outbound sales to software development and IoT — are tailored to client needs. We deliver real-time, dependable results backed by modern infrastructure and deep industry insight.",
    "With expertise spanning e-commerce, healthcare, education, finance, and manufacturing, we are more than a service provider — we are your growth partner in the digital era.",
  ]

  return (
    <section className="relative bg-gray-900 py-24 overflow-hidden">
      {/* Background Blur Circles */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-blue-600/20 rounded-full filter blur-3xl mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-purple-600/20 rounded-full filter blur-2xl mix-blend-screen pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-20 items-center relative z-10">
        {/* Left Side: SVG Illustration */}
        <div className="relative flex justify-center md:justify-start">
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="w-64 h-64 md:w-72 md:h-72"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="gradBluePurple" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%" colorInterpolationFilters="sRGB">
                <feDropShadow dx="0" dy="0" stdDeviation="5" floodColor="#8b5cf6" floodOpacity="0.5" />
              </filter>
            </defs>

            {/* Stylized “S” Shape */}
            <path
              d="M60 40 C60 20, 140 20, 140 80 C140 120, 60 120, 60 160 C60 180, 140 180, 140 140"
              stroke="url(#gradBluePurple)"
              strokeWidth="8"
              fill="none"
              filter="url(#glow)"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="100" cy="100" r="30" fill="url(#gradBluePurple)" filter="url(#glow)" opacity="0.15" />
          </svg>
        </div>

        {/* Right Side: Text Content */}
        <div className="space-y-8">
          <h2 className="text-4xl font-light text-white leading-tight">
            About{" "}
            <span className="text-blue-500 font-semibold tracking-wide">
              Stelleronix
            </span>
          </h2>
          {paragraphs.map((p, i) => (
            <p key={i} className="text-gray-400 text-lg leading-relaxed">
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
