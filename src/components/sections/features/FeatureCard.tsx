"use client"

import { Plus } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

interface FeatureCardProps {
  title: string
  description: string
  image: string
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

export default function FeatureCard({ title, description, image, stats }: FeatureCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded)
  }
  
  return (
    <div className={`relative w-full h-full max-w-[490px] transition-all duration-500 ease-out`}>
      {/* Simple Border */}
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

      {/* Content */}
      <div className="relative w-full h-full rounded-3xl bg-[#F8F8F805] p-4 sm:p-6 md:py-xl flex pb-6 flex-col justify-between overflow-hidden min-h-[0px] sm:min-h-[400px]">
        {/* Image */}
        <div className="flex-1 flex mt-4 justify-center">
          <div className="w-full max-w-[369px] h-[200px] sm:h-[263px] rounded-xl flex items-center justify-center relative overflow-hidden">
            <div className="w-full h-full rounded-xl flex items-center justify-center relative">
              <Image alt="feat" src={image || "/placeholder.svg"} fill className="object-cover rounded-xl" />
            </div>
          </div>
        </div>

        {/* Header with Button */}
        <div className="flex items-center justify-between mt-4 sm:mt-6">
          <h2 className="text-neutral-white text-lg text-nowrap sm:text-xl lg:text-2xl xl:text-[28px] font-semibold uppercase leading-tight flex-1 pr-4">
            {title}
          </h2>
          <button
            onClick={toggleExpanded}
            className={`flex-shrink-0 relative bg-[#858FA640] hover:bg-[#83FFDA20] hover:border-[#83FFDA40] p-1 rounded-full border border-[#858FA640] transition-all duration-200 hover:scale-105 ${isExpanded ? "rotate-45" : "rotate-0"}`}
            aria-label={`Toggle ${title} details`}
          >
            <Plus
              size={16}
              className="sm:w-5 sm:h-5 transition-colors duration-200"
              color={isExpanded ? "#83FFDA" : "#858FA660"}
            />
          </button>
        </div>

        {/* Expandable Content */}
        <div
          className={`overflow-hidden transition-all duration-500 ease-out ${
            isExpanded ? "max-h-96 opacity-100 mt-4 sm:mt-6" : "max-h-0 opacity-0 mt-0"
          }`}
        >
          <div className="space-y-4 sm:space-y-6">
            <p className="text-neutral-lightGray text-sm sm:text-base lg:text-lg text-left leading-relaxed">
              {description}
            </p>

            <div className="grid grid-cols-2 gap-4 sm:gap-6 relative pt-8 sm:pt-16">
              <div className="flex flex-col items-start">
                <span className="text-white/70 text-xl sm:text-2xl lg:text-3xl xl:text-[36px] font-bold">
                  {stats.primary.value}
                </span>
                <span className="text-neutral-lightGray text-xs sm:text-sm lg:text-base leading-relaxed">
                  {stats.primary.label}
                </span>
              </div>
              <div className="flex flex-col items-start">
                <span className="text-white/70 text-xl sm:text-2xl lg:text-3xl xl:text-[36px] font-bold">
                  {stats.secondary.value}
                </span>
                <span className="text-neutral-lightGray text-xs sm:text-sm lg:text-base leading-relaxed">
                  {stats.secondary.label}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Glow Effect when expanded */}
        <div
          className="absolute -bottom-[10rem] left-1/2 transform -translate-x-1/2 
                     w-[700px] h-[400px] transition-opacity duration-500 pointer-events-none"
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
