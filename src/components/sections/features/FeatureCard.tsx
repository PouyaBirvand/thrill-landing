"use client"

import { Plus } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

interface FeatureCardProps {
  title: string
  description: string
  image: string
  more_detail?: string
  stats: {
    primary: {
      value: string
      label: string
    }
    secondary: {
      value: string
      label: string
    }
  }
}

export default function FeatureCard({ title, description, image, stats , more_detail }: FeatureCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded)
  }
  
  return (
    <div className={`relative w-full max-w-[490px] transition-all duration-500 ease-out ${
      isExpanded 
        ? "h-[570px] sm:h-[660px] md:h-[720px] lg:h-[780px] xl:h-[800px]" 
        : ""
    }`}>
      {/* Border SVG - Preserved exactly as original */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 490 490"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient
            id="borderGradient"
            gradientUnits="userSpaceOnUse"
            x1="0"
            y1="0"
            x2="490"
            y2="0"
            gradientTransform="rotate(158.39 245 245)"
          >
            <stop offset="14.19%" stopColor="#ffffff" stopOpacity="0.06" />
            <stop offset="50.59%" stopColor="#ffffff" stopOpacity="0.000015" />
            <stop offset="68.79%" stopColor="#ffffff" stopOpacity="0.000015" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.015" />
          </linearGradient>

          <radialGradient id="glowGradient" cx="50%" cy="100%" r="60%" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.08" />
            <stop offset="30%" stopColor="#ffffff" stopOpacity="0.04" />
            <stop offset="60%" stopColor="#ffffff" stopOpacity="0.01" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>
        </defs>

        <rect
          x="0.75"
          y="0.75"
          width="488.5"
          height="488.5"
          rx="29"
          ry="29"
          fill="none"
          stroke="url(#borderGradient)"
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
          shapeRendering="geometricPrecision"
        />

        <rect
          x="0.75"
          y="0.75"
          width="488.5"
          height="488.5"
          rx="29"
          ry="29"
          fill="none"
          stroke="url(#borderGradient)"
          strokeWidth="3.2"
          strokeLinecap="round"
          pathLength="100"
          strokeDasharray="10 90"
          strokeDashoffset="6"
          vectorEffect="non-scaling-stroke"
        />

        <rect
          x="0.75"
          y="0.75"
          width="488.5"
          height="488.5"
          rx="29"
          ry="29"
          fill="none"
          stroke="url(#borderGradient)"
          strokeWidth="0.2"
          strokeLinecap="round"
          pathLength="100"
          strokeDasharray="10 90"
          strokeDashoffset="56"
          vectorEffect="non-scaling-stroke"
        />

        <rect
          x="0.75"
          y="0.75"
          width="488.5"
          height="488.5"
          rx="29"
          ry="29"
          fill="none"
          stroke="url(#borderGradient)"
          strokeWidth=".3"
          strokeLinecap="round"
          pathLength="100"
          strokeDasharray="9 91"
          strokeDashoffset="81"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      {/* Content Container */}
      <div className="relative w-full h-full rounded-3xl bg-[#F8F8F805] flex flex-col overflow-hidden ">
        
        {/* Image Section - Responsive heights with proper aspect ratio */}
        <div className="flex-shrink-0 pt-0 sm:pt-4">
          <div className="w-full mx-auto h-[220px] sm:h-[210px] md:h-[220px] lg:h-[230px] xl:h-[260px] rounded-xl relative overflow-hidden">
            <Image 
              alt="feat" 
              src={image || "/placeholder.svg"} 
              fill 
              className="object-cover rounded-xl" 
            />
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col px-4 xs:px-5 sm:px-6 pb-4 xs:pb-5 sm:pb-6">
          
          {/* Header Section - Title + Button */}
          <div className="flex items-center justify-between mt-3 xs:mt-4 sm:mt-5 md:mt-6 flex-shrink-0">
            <h2 className="text-neutral-white text-nowrap font-semibold uppercase leading-[1.15] flex-1 pr-3 xs:pr-4 text-lg  sm:text-lg md:text-xl lg:text-2xl xl:text-[28px]">
              {title}
            </h2>
            <button
              onClick={toggleExpanded}
              className={`flex-shrink-0 relative bg-[#858FA640] hover:bg-[#83FFDA20] hover:border-[#83FFDA40] p-1.5 xs:p-2 sm:p-2 rounded-full border border-[#858FA640] transition-all duration-200 hover:scale-105 ${isExpanded ? "rotate-45" : "rotate-0"}`}
              aria-label={`Toggle ${title} details`}
            >
              <Plus
                size={14}
                className="xs:w-4 xs:h-4 sm:w-5 sm:h-5 transition-colors duration-200"
                color={isExpanded ? "#83FFDA" : "#858FA660"}
              />
            </button>
          </div>

          {/* Expandable Content Area */}
          <div className={`flex-1 overflow-hidden transition-all duration-500 ease-out ${
            isExpanded 
              ? "opacity-100 mt-3 xs:mt-4 sm:mt-5 md:mt-4 mb-8" 
              : "opacity-0 max-h-0"
          }`}>
            <div className="h-full flex flex-col justify-between min-h-[280px] xs:min-h-[300px] sm:min-h-[340px] md:min-h-[380px]">
              
              {/* Description */}
              <div className="flex-1 mb-4 xs:mb-5 sm:mb-6 md:mb-8">
                <p className="text-neutral-lightGray text-xs xs:text-sm sm:text-base md:text-lg leading-relaxed">
                  {description}
                </p>
                <p className="text-neutral-lightGray text-xs xs:text-sm sm:text-base md:text-lg mt-3">
                  {more_detail}
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-3 xs:gap-4 sm:gap-5 md:gap-6 flex-shrink-0">
                <div className="flex flex-col space-y-1 xs:space-y-1.5 sm:space-y-2">
                  <span className="text-white/70 font-bold text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[36px] leading-tight">
                    {stats.primary.value}
                  </span>
                  <span className="text-neutral-lightGray text-[10px] xs:text-xs sm:text-sm md:text-base leading-relaxed">
                    {stats.primary.label}
                  </span>
                </div>
                <div className="flex flex-col space-y-1 xs:space-y-1.5 sm:space-y-2">
                  <span className="text-white/70 font-bold text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[36px] leading-tight">
                    {stats.secondary.value}
                  </span>
                  <span className="text-neutral-lightGray text-[10px] xs:text-xs sm:text-sm md:text-base leading-relaxed">
                    {stats.secondary.label}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Glow Effect - Preserved exactly as original */}
        <div
          className="absolute -bottom-[10rem] left-1/2 transform -translate-x-1/2 w-[700px] h-[400px] transition-opacity duration-500 pointer-events-none"
          style={{
            background: `
              linear-gradient(0deg, rgba(248,248,248,0.02), rgba(248,248,248,0.02)),
              radial-gradient(160% 80% at 75% 130%, rgba(93,255,194,0.18) 0%, rgba(27,29,41,0) 100%),
              radial-gradient(220% 120% at 30% 120%, rgba(93,255,194,0.25) 0%, rgba(27,29,41,0) 100%),
              radial-gradient(200% 90% at 50% 110%, rgba(93,255,194,0.20) 0%, rgba(27,29,41,0) 100%),
              radial-gradient(150% 70% at 60% 140%, rgba(93,255,194,0.12) 0%, rgba(27,29,41,0) 100%)
            `,
            filter: "blur(20px)",
            opacity: isExpanded ? 1 : 0,
            WebkitMaskImage: `
              linear-gradient(to right, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.3) 30%, rgba(0,0,0,1) 60%),
              linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 30%, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)
            `,
            WebkitMaskComposite: "multiply",
            maskComposite: "intersect",
            WebkitMaskRepeat: "no-repeat",
            WebkitMaskSize: "100% 100%",
          }}
        />
      </div>
    </div>
  )
}