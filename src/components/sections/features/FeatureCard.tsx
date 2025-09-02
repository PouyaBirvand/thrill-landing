import { Plus, X } from "lucide-react"
import Image from "next/image"
import { useState } from "react";
import { motion } from "framer-motion"

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
  const [isHovered, setIsHovered] = useState(false)
  const isExpanded = forcedExpanded !== undefined ? forcedExpanded : localExpanded;
  const [isPrevHovered, setIsPrevHovered] = useState(false);
  const [isNextHovered, setIsNextHovered] = useState(false);

  const toggleExpanded = () => {
    if (onExpand) {
      onExpand()
    } else {
      setLocalExpanded(!localExpanded)
    }
  }

  return (
    <div
      className={`relative w-full max-w-[490px] transition-all duration-700 ease-out cursor-pointer ${isExpanded
        ? "h-auto scale-100 md:scale-[0.75] xl:scale-[0.9] !overflow-y-hidden"
        : ""
        } ${isHovered ? "transform scale-[1.02] translate-y-[-4px]" : ""
        }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        filter: isHovered ? "brightness(1.1)" : "brightness(1)",
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
      }}
    >
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

      {/* Hover Glow Background */}
      <div
        className={`absolute inset-0 rounded-[20px] transition-all duration-500 ease-out ${isExpanded && 'rounded-[34px]'
          }`}
        style={{
          background: isHovered
            ? `
              radial-gradient(circle at 50% 50%, rgba(131, 255, 218, 0.08) 0%, transparent 70%),
              radial-gradient(ellipse at 30% 80%, rgba(255, 131, 131, 0.06) 0%, transparent 60%),
              radial-gradient(ellipse at 70% 20%, rgba(131, 194, 255, 0.05) 0%, transparent 50%)
            `
            : 'transparent',
          opacity: isHovered ? 1 : 0,
        }}
      />

      {/* Content Container */}
      <div className={`relative w-full h-full rounded-[20px] ${isExpanded && 'rounded-[34px]'} bg-[#F8F8F805] flex flex-col overflow-hidden`}>

        {/* Image Section */}
        <div className="flex-shrink-0 mt-2 relative">
          <div
            className={`w-full mx-auto rounded-xl relative overflow-hidden transition-all duration-500 ease-out ${isModal
              ? "h-[260px] sm:h-[260px] md:h-[260px] lg:h-[260px] xl:h-[260px] mt-8"
              : "h-[220px] sm:h-[210px] md:h-[220px] lg:h-[230px] xl:h-[356px]"
              }`}
            style={{
              transform: isHovered ? "scale(1.05)" : "scale(1)",
              filter: isHovered ? "brightness(1.1) saturate(1.1)" : "brightness(1) saturate(1)"
            }}
          >
            <Image
              fill
              alt="feat"
              src={image || "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=400&fit=crop"}
              className="w-full h-full object-contain rounded-xl transition-all duration-500 ease-out"
              style={{
                transform: isHovered ? "scale(1.08) rotate(0.5deg)" : "scale(1) rotate(0deg)",
              }}
            />

            {/* Image Overlay Effect */}
            <div
              className={`absolute inset-0 rounded-xl transition-all duration-500 ease-out ${isHovered ? "opacity-20" : "opacity-0"
                }`}
              style={{
                background: `
                  radial-gradient(circle at 60% 40%, rgba(131, 255, 218, 0.15) 0%, transparent 50%),
                  radial-gradient(circle at 40% 60%, rgba(255, 131, 131, 0.1) 0%, transparent 40%)
                `
              }}
            />
          </div>

          {/* Button in Modal Mode */}
          {isModal && onClose && (
            <motion.button
              onClick={onClose}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="absolute top-3 right-5 flex-shrink-0 bg-white/10 hover:bg-[#83FFDA20] hover:border-[#83FFDA40] p-1.5 xs:p-2 sm:p-2 rounded-full border border-white/5 transition-all duration-300 hover:scale-110 hover:rotate-90"
              initial="rest"
              whileHover="hover"
              aria-label={`Close ${title} details`}
            >
              <X
                size={14}
                className="xs:w-4 xs:h-4 sm:w-4 sm:h-4 transition-all duration-300"
                color={isHovered ? "#83FFDA" : "#A0A9B0"}
                style={{
                  filter: isHovered
                    ? "drop-shadow(0 0 8px rgba(131, 255, 218, 0.6))"
                    : "none"
                }}
              />
            </motion.button>

          )}
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col px-4 xs:px-5 sm:px-6 pb-6 xs:pb-4 sm:pb-7 sm:pt-0 pt-3">

          {/* Header Section - Title + Button (Non-Modal) */}
          {!isModal && (
            <div
              className="flex items-center justify-between flex-shrink-0 pt-5"
              style={{
                transform: isHovered ? "translateY(-2px)" : "translateY(0)",
                transition: "transform 0.3s ease-out"
              }}
            >
              <h2 className={`text-neutral-white text-nowrap font-semibold uppercase leading-[1.15] flex-1 pr-3 xs:pr-4 transition-all duration-300 ${isModal
                ? "text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl"
                : "text-lg sm:text-lg md:text-xl lg:text-2xl xl:text-[32px]"
                } ${isHovered ? "text-shadow-glow" : ""
                }`}
                style={{
                  color: isHovered ? "#83FFDA" : "#ffffff",
                  textShadow: isHovered ? "0 0 20px rgba(131, 255, 218, 0.4)" : "none"
                }}>
                {title}
              </h2>
              {onClose ? (
                <motion.button
                  onClick={onClose}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  className="flex-shrink-0 relative bg-white/10 hover:bg-[#83FFDA20] hover:border-[#83FFDA40] p-1.5 xs:p-2 sm:p-2 rounded-full border border-white/5 transition-all duration-300 hover:scale-110 hover:rotate-90"
                  initial="rest"
                  whileHover="hover"
                  aria-label={`Close ${title} details`}
                >
                  <X
                    size={14}
                    className="xs:w-4 xs:h-4 sm:w-4 sm:h-4 transition-all duration-300"
                    color={isHovered ? "#83FFDA" : "#A0A9B0"}
                    style={{
                      filter: isHovered
                        ? "drop-shadow(0 0 8px rgba(131, 255, 218, 0.6))"
                        : "none"
                    }}
                  />
                </motion.button>
              ) : (
                <motion.button
                  onClick={toggleExpanded}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  className="flex-shrink-0 relative bg-white/10 hover:bg-[#83FFDA20] hover:border-[#83FFDA40] p-1.5 xs:p-2 sm:p-2 rounded-full border border-white/5 transition-all duration-300 hover:scale-110"
                  initial="rest"
                  whileHover="hover"
                  aria-label={`Toggle ${title} details`}
                >
                  <Plus
                    size={14}
                    className="xs:w-4 xs:h-4 sm:w-4 sm:h-4 transition-all duration-300"
                    color={isExpanded ? "#83FFDA" : "#A0A9B0"}
                    style={{
                      filter: isHovered
                        ? "drop-shadow(0 0 8px rgba(131, 255, 218, 0.6))"
                        : "none",
                      transform: isExpanded ? "rotate(45deg)" : "rotate(0deg)"
                    }}
                  />
                </motion.button>
              )}
            </div>
          )}

          {/* Expandable Content Area */}
          <div className={`flex-1 overflow-hidden transition-all duration-700 ease-out ${isExpanded
            ? "opacity-100 mt-2 xs:mt-3 sm:mt-4 md:mt-3 mb-6 transform translate-y-0"
            : "opacity-0 max-h-0 transform translate-y-[-20px]"
            }`}>
            <div className={`h-full flex flex-col justify-between ${isModal
              ? "min-h-[220px] xs:min-h-[240px] sm:min-h-[280px] md:min-h-[320px]"
              : "min-h-[280px] xs:min-h-[300px] sm:min-h-[340px] md:min-h-[380px]"
              }`}>

              {/* Description */}
              <div
                className="flex-1 mb-3 xs:mb-4 sm:mb-5 md:mb-6"
                style={{
                  transform: isHovered ? "translateX(4px)" : "translateX(0)",
                  transition: "transform 0.4s ease-out"
                }}
              >
                <p className={`text-neutral-lightGray leading-relaxed transition-colors duration-300 ${isModal
                  ? "text-[10px] xs:text-xs sm:text-sm md:text-base"
                  : "text-xs xs:text-sm sm:text-base md:text-lg"
                  }`}
                  style={{
                    color: isHovered ? "#B8C5D1" : "#9CA3AF"
                  }}>
                  {description}
                </p>
                <p className={`text-neutral-lightGray mt-2 transition-colors duration-300 ${isModal
                  ? "text-[10px] xs:text-xs sm:text-sm md:text-base"
                  : "text-xs xs:text-sm sm:text-base md:text-lg"
                  }`}
                  style={{
                    color: isHovered ? "#B8C5D1" : "#9CA3AF"
                  }}>
                  {more_detail}
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-2 xs:gap-3 sm:gap-4 md:gap-5 flex-shrink-0">
                <div
                  className="flex flex-col space-y-0.5 xs:space-y-1 sm:space-y-1.5"
                  style={{
                    transform: isHovered ? "translateY(-4px) scale(1.02)" : "translateY(0) scale(1)",
                    transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
                  }}
                >
                  <span className={`text-white/70 font-bold leading-tight transition-all duration-300 ${isModal
                    ? "text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[32px]"
                    : "text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[36px]"
                    }`}
                    style={{
                      color: isHovered ? "#83FFDA" : "rgba(255, 255, 255, 0.7)",
                      textShadow: isHovered ? "0 0 15px rgba(131, 255, 218, 0.4)" : "none"
                    }}>
                    {stats.primary.value}
                  </span>
                  <span className={`text-neutral-lightGray leading-relaxed transition-colors duration-300 ${isModal
                    ? "text-[9px] xs:text-[10px] sm:text-xs md:text-sm"
                    : "text-[10px] xs:text-xs sm:text-sm md:text-base"
                    }`}
                    style={{
                      color: isHovered ? "#B8C5D1" : "#9CA3AF"
                    }}>
                    {stats.primary.label}
                  </span>
                </div>
                <div
                  className="flex flex-col space-y-0.5 xs:space-y-1 sm:space-y-1.5"
                  style={{
                    transform: isHovered ? "translateY(-4px) scale(1.02)" : "translateY(0) scale(1)",
                    transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1) 0.1s"
                  }}
                >
                  <span className={`text-white/70 font-bold leading-tight transition-all duration-300 ${isModal
                    ? "text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[32px]"
                    : "text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[36px]"
                    }`}
                    style={{
                      color: isHovered ? "#83FFDA" : "rgba(255, 255, 255, 0.7)",
                      textShadow: isHovered ? "0 0 15px rgba(131, 255, 218, 0.4)" : "none"
                    }}>
                    {stats.secondary.value}
                  </span>
                  <span className={`text-neutral-lightGray leading-relaxed transition-colors duration-300 ${isModal
                    ? "text-[9px] xs:text-[10px] sm:text-xs md:text-sm"
                    : "text-[10px] xs:text-xs sm:text-sm md:text-base"
                    }`}
                    style={{
                      color: isHovered ? "#B8C5D1" : "#9CA3AF"
                    }}>
                    {stats.secondary.label}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Glow Effect */}
        <div
          className="absolute -bottom-[8rem] left-1/2 transform -translate-x-1/2 w-[600px] h-[350px] transition-all duration-700 pointer-events-none"
          style={{
            background: `
              linear-gradient(0deg, rgba(248,248,248,0.02), rgba(248,248,248,0.02)),
              radial-gradient(160% 80% at 75% 130%, rgba(93,255,194,${isHovered ? '0.28' : '0.18'}) 0%, rgba(27,29,41,0) 100%),
              radial-gradient(220% 120% at 30% 120%, rgba(93,255,194,${isHovered ? '0.35' : '0.25'}) 0%, rgba(27,29,41,0) 100%),
              radial-gradient(200% 90% at 50% 110%, rgba(93,255,194,${isHovered ? '0.30' : '0.20'}) 0%, rgba(27,29,41,0) 100%),
              radial-gradient(150% 70% at 60% 140%, rgba(93,255,194,${isHovered ? '0.22' : '0.12'}) 0%, rgba(27,29,41,0) 100%)
            `,
            filter: isHovered ? "blur(15px)" : "blur(20px)",
            opacity: isExpanded ? (isHovered ? 1.3 : 1) : 0,
            transform: `translateX(-50%) scale(${isHovered ? 1.1 : 1})`,
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

        {/* Floating Particles Effect */}
        {isHovered && (
          <>
            <div
              className="absolute top-1/4 left-1/4 w-1 h-1 bg-[#83FFDA] rounded-full opacity-60 animate-pulse"
              style={{
                animation: "float 3s ease-in-out infinite, pulse 2s ease-in-out infinite"
              }}
            />
            <div
              className="absolute top-1/3 right-1/3 w-0.5 h-0.5 bg-[#FF8383] rounded-full opacity-40"
              style={{
                animation: "float 4s ease-in-out infinite 0.5s, pulse 3s ease-in-out infinite 1s"
              }}
            />
            <div
              className="absolute bottom-1/3 left-1/3 w-0.5 h-0.5 bg-[#83C2FF] rounded-full opacity-50"
              style={{
                animation: "float 3.5s ease-in-out infinite 1s, pulse 2.5s ease-in-out infinite 0.5s"
              }}
            />
          </>
        )}
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) translateX(0px); 
          }
          25% { 
            transform: translateY(-8px) translateX(4px); 
          }
          50% { 
            transform: translateY(-4px) translateX(-2px); 
          }
          75% { 
            transform: translateY(-12px) translateX(2px); 
          }
        }
        
        @keyframes pulse {
          0%, 100% { 
            opacity: 0.3; 
            transform: scale(1); 
          }
          50% { 
            opacity: 0.8; 
            transform: scale(1.2); 
          }
        }
      `}</style>
    </div>
  )
}
