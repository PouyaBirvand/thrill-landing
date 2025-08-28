"use client"

import { Plus, X } from "lucide-react"
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
  isExpanded?: boolean
  onClose?: () => void
  onExpand?: () => void
  isModal?: boolean
}

export default function FeatureCard({ 
  title, 
  description, 
  image, 
  stats, 
  more_detail, 
  isExpanded: forcedExpanded, 
  onClose, 
  onExpand,
  isModal = false
}: FeatureCardProps) {
  const [localExpanded, setLocalExpanded] = useState(false)
  const isExpanded = forcedExpanded !== undefined ? forcedExpanded : localExpanded
  
  const toggleExpanded = () => {
    if (onExpand) {
      onExpand()
    } else {
      setLocalExpanded(!localExpanded)
    }
  }
  
  return (
    <div className={`relative w-full max-w-[490px] transition-all duration-500 ease-out ${
      isExpanded 
        ? "h-auto scale-100 md:scale-[0.85] xl:scale-[0.9] !overflow-y-hidden"
        : ""
    }`}>
      {/* SVG Border */}
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
          rx="24"
          ry="24"
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
          rx="24"
          ry="24"
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
          rx="24"
          ry="24"
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
          rx="24"
          ry="24"
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
      <div className={`relative w-full h-full rounded-[20px] ${isExpanded && 'rounded-[34px]'} bg-[#F8F8F805] flex flex-col overflow-hidden`}>
        
        {/* Image Section */}
        <div className="flex-shrink-0 mt-2">
          <div className={`w-full mx-auto rounded-xl relative overflow-hidden ${
            isModal 
              ? "h-[260px] sm:h-[260px] md:h-[260px] lg:h-[260px] xl:h-[260px]" 
              : "h-[220px] sm:h-[210px] md:h-[220px] lg:h-[230px] xl:h-[356px]"
          }`}>
            <Image 
              alt="feat" 
              src={image || "/placeholder.svg"} 
              fill 
              className="object-contain rounded-xl" 
            />
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col px-4 xs:px-5 sm:px-6 pb-6 xs:pb-4 sm:pb-7 sm:pt-0 pt-3">
          
          {/* Header Section - Title + Button */}
          <div className="flex items-center justify-between flex-shrink-0 pt-5">
            <h2 className={`text-neutral-white text-nowrap font-semibold uppercase leading-[1.15] flex-1 pr-3 xs:pr-4 ${
              isModal 
                ? "text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl" 
                : "text-lg sm:text-lg md:text-xl lg:text-2xl xl:text-[32px]"
            }`}>
              {title}
            </h2>
            {onClose ? (
              <button
                onClick={onClose}
                className="flex-shrink-0 relative bg-white/10 hover:bg-[#FF838320] hover:border-[#FF838340] p-1.5 xs:p-2 sm:p-2 rounded-full border border-white/5 transition-all duration-200 hover:scale-105"
                aria-label={`Close ${title} details`}
              >
                <X
                  size={14}
                  className="xs:w-4 xs:h-4 sm:w-4 sm:h-4 transition-colors duration-200"
                  color="#FF8383"
                />
              </button>
            ) : (
              <button
                onClick={toggleExpanded}
                className={`flex-shrink-0 relative bg-white/10 hover:bg-[#83FFDA20] hover:border-[#83FFDA40] p-1.5 xs:p-2 sm:p-2 rounded-full border border-white/5 transition-all duration-200 hover:scale-105 ${isExpanded ? "rotate-45" : "rotate-0"}`}
                aria-label={`Toggle ${title} details`}
              >
                <Plus
                  size={14}
                  className="xs:w-4 xs:h-4 sm:w-4 sm:h-4 transition-colors duration-200"
                  color={isExpanded ? "#83FFDA" : "#858FA660"}
                />
              </button>
            )}
          </div>

          {/* Expandable Content Area */}
          <div className={`flex-1 overflow-hidden transition-all duration-500 ease-out ${
            isExpanded 
              ? "opacity-100 mt-2 xs:mt-3 sm:mt-4 md:mt-3 mb-6" 
              : "opacity-0 max-h-0"
          }`}>
            <div className={`h-full flex flex-col justify-between ${
              isModal 
                ? "min-h-[220px] xs:min-h-[240px] sm:min-h-[280px] md:min-h-[320px]" 
                : "min-h-[280px] xs:min-h-[300px] sm:min-h-[340px] md:min-h-[380px]"
            }`}>
              
              {/* Description */}
              <div className="flex-1 mb-3 xs:mb-4 sm:mb-5 md:mb-6">
                <p className={`text-neutral-lightGray leading-relaxed ${
                  isModal 
                    ? "text-[10px] xs:text-xs sm:text-sm md:text-base" 
                    : "text-xs xs:text-sm sm:text-base md:text-lg"
                }`}>
                  {description}
                </p>
                <p className={`text-neutral-lightGray mt-2 ${
                  isModal 
                    ? "text-[10px] xs:text-xs sm:text-sm md:text-base" 
                    : "text-xs xs:text-sm sm:text-base md:text-lg"
                }`}>
                  {more_detail}
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-2 xs:gap-3 sm:gap-4 md:gap-5 flex-shrink-0">
                <div className="flex flex-col space-y-0.5 xs:space-y-1 sm:space-y-1.5">
                  <span className={`text-white/70 font-bold leading-tight ${
                    isModal 
                      ? "text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[32px]" 
                      : "text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[36px]"
                  }`}>
                    {stats.primary.value}
                  </span>
                  <span className={`text-neutral-lightGray leading-relaxed ${
                    isModal 
                      ? "text-[9px] xs:text-[10px] sm:text-xs md:text-sm" 
                      : "text-[10px] xs:text-xs sm:text-sm md:text-base"
                  }`}>
                    {stats.primary.label}
                  </span>
                </div>
                <div className="flex flex-col space-y-0.5 xs:space-y-1 sm:space-y-1.5">
                  <span className={`text-white/70 font-bold leading-tight ${
                    isModal 
                      ? "text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[32px]" 
                      : "text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[36px]"
                  }`}>
                    {stats.secondary.value}
                  </span>
                  <span className={`text-neutral-lightGray leading-relaxed ${
                    isModal 
                      ? "text-[9px] xs:text-[10px] sm:text-xs md:text-sm" 
                      : "text-[10px] xs:text-xs sm:text-sm md:text-base"
                  }`}>
                    {stats.secondary.label}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Glow Effect */}
        <div
          className="absolute -bottom-[8rem] left-1/2 transform -translate-x-1/2 w-[600px] h-[350px] transition-opacity duration-500 pointer-events-none"
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