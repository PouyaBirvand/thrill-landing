"use client";
import { Plus, X } from "lucide-react";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { easeOut, motion, Variants } from "framer-motion";


interface FeatureCardProps {
  title: string;
  description: string;
  svgComponent?: React.FC; // Changed from svgPath to svgComponent for reusability
  imagePath: string;
  more_detail?: string;
  toleft?: boolean;
  size?: boolean;
  maxstack?: boolean
  stats: {
    primary: { value: string; label: string };
    secondary: { value: string; label: string };
  };
  isExpanded?: boolean;
  onClose?: () => void;
  onExpand?: () => void;
  isModal?: boolean;
}

export default function FeatureCard({
  title,
  description,
  svgComponent: SvgComponent, // Now receiving the SVG component as prop
  imagePath,
  stats,
  toleft,
  more_detail,
  maxstack,
  size,
  isExpanded: forcedExpanded,
  onClose,
  onExpand,
  isModal = false,
}: FeatureCardProps) {
  const [localExpanded, setLocalExpanded] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 490, height: 490 });
  const containerRef = useRef<HTMLDivElement>(null);

  const isExpanded =
    forcedExpanded !== undefined ? forcedExpanded : localExpanded;
    const containerVariants: Variants = {
      hidden: {
        opacity: 0,
        y: 50,
        scale: 0.9,
      },
      visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          duration: 0.8,
          ease: [0.25, 0.46, 0.45, 0.94],
          staggerChildren: 0.2,
        },
      },
    };
  
    const svgVariants: Variants = {
      hidden: {
        opacity: 0,
        scale: 0.8,
        rotate: -10,
      },
      visible: {
        opacity: 1,
        scale: 1,
        rotate: 0,
        transition: {
          duration: 1,
          ease: easeOut,
        },
      },
    };
  
const imageVariants: Variants = {
  hidden: {
    opacity: 0.3,
    scale: 0.9, 
    y: 10, 
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.2, 
      ease: "easeInOut", 
    },
  },
};

  const toggleExpanded = () => {
    if (onExpand) {
      onExpand();
    } else {
      setLocalExpanded(!localExpanded);
    }
  };

  // Fixed heights for different states and screen sizes
  const getFixedHeight = () => {
    if (isModal) {
      return isExpanded
        ? "h-[700px] sm:h-[720px] md:h-[750px] lg:h-[780px] xl:h-[800px]"
        : "h-[310px] sm:h-[300px] md:h-[310px] lg:h-[325px] xl:h-[380px]";
    } else {
      return isExpanded
        ? "h-[740px] sm:h-[800px] md:h-[850px] lg:h-[860px] xl:h-[890px]"
        : "h-[310px] sm:h-[300px] md:h-[310px] lg:h-[325px] xl:h-[380px]";
    }
  };

  // Update SVG dimensions based on container size
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const baseWidth = isExpanded
          ? Math.max(rect.width, 300) || 600
          : Math.max(rect.width, 300) || 490;
        const baseHeight = isModal
          ? isExpanded
            ? 800
            : 490
          : isExpanded
            ? 850
            : 490;

        setDimensions({
          width: baseWidth,
          height: baseHeight,
        });
      }
    };

    // Update on mount and expansion change
    updateDimensions();

    // Use ResizeObserver for better performance
    const resizeObserver = new ResizeObserver(updateDimensions);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, [isExpanded, isModal]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full transition-all duration-700 ease-out cursor-pointer ${
        isExpanded ? "max-w-[600px]" : "max-w-[490px]"
      } ${getFixedHeight()}`}
    >
      {/* SVG Border - Now responsive */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
        preserveAspectRatio="none"
        aria-hidden="true"
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <defs>
          <linearGradient
            id={`borderGradient-${title.replace(/\s+/g, "-")}`}
            gradientUnits="userSpaceOnUse"
            x1="0"
            y1="0"
            x2={dimensions.width}
            y2="0"
            gradientTransform={`rotate(158.39 ${dimensions.width / 2} ${dimensions.height / 2})`}
          >
            <stop offset="14.19%" stopColor="#ffffff" stopOpacity="0.06" />
            <stop offset="50.59%" stopColor="#ffffff" stopOpacity="0.000015" />
            <stop offset="68.79%" stopColor="#ffffff" stopOpacity="0.000015" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.015" />
          </linearGradient>
        </defs>

        {/* Main border */}
        <rect
          x="0.75"
          y="0.75"
          width={dimensions.width - 1.5}
          height={dimensions.height - 1.5}
          rx="24"
          ry="24"
          fill="none"
          stroke={`url(#borderGradient-${title.replace(/\s+/g, "-")})`}
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
          shapeRendering="geometricPrecision"
        />

        <rect
          x="0.75"
          y="0.75"
          width={dimensions.width - 1.5}
          height={dimensions.height - 1.5}
          rx="24"
          ry="24"
          fill="none"
          stroke={`url(#borderGradient-${title.replace(/\s+/g, "-")})`}
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
          width={dimensions.width - 1.5}
          height={dimensions.height - 1.5}
          rx="24"
          ry="24"
          fill="none"
          stroke={`url(#borderGradient-${title.replace(/\s+/g, "-")})`}
          strokeWidth=".3"
          strokeLinecap="round"
          pathLength="100"
          strokeDasharray="9 91"
          strokeDashoffset="81"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      {/* Content Container - Fixed height */}
      <div className="relative w-full h-full rounded-[24px] bg-[#F8F8F805] flex flex-col overflow-hidden">
        {/* Image Section - Fixed height */}
        <motion.div 
      className="relative"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }} // Trigger when 30% is visible
    >
      <div
        className={`w-full mx-auto rounded-xl relative overflow-hidden transition-all duration-500 ease-out ${
          isModal
            ? "h-[260px] mt-8"
            : "h-[220px] sm:h-[210px] md:h-[220px] lg:h-[230px] xl:h-[280px]"
        }`}
      >
        {/* Animated SVG Background */}
        <motion.div 
          className={`relative ${maxstack && "z-[9]"} z-[99999]`}
          variants={svgVariants}
        >
          {SvgComponent && <SvgComponent />}
        </motion.div>

        {/* Animated Center PNG Image */}
        <motion.div
          variants={imageVariants}
          className="absolute inset-0"
        >
          <Image
            fill
            src={imagePath}
            alt={title}
            className={`object-contain scale-75 m-auto rounded-xl ${size && "scale-[1.0001] mt-2"} ${toleft && "2xl:ml-7 xl:ml-7 lg:ml-7 md:ml-7 sm:ml-6 ml-5 sm:scale-75 scale-[0.65]"}`}
            style={{ zIndex: 1000 }}
          />
        </motion.div>
      </div>
    </motion.div>

        {/* Main Content Area - Flex grow to fill remaining space */}
        <div className="flex-1 flex flex-col px-4 xs:px-5 sm:px-6 sm:pt-0 pt-3 min-h-0">
          {/* Header Section - Title + Button (Non-Modal) - Fixed height */}
          {!isModal && (
            <div className="flex items-center justify-between flex-shrink-0 pt-3 h-[50px] sm:h-[55px] md:h-[60px] lg:h-[65px] xl:h-[70px]">
              <h2
                className={`text-neutral-white text-nowrap font-semibold uppercase leading-[1.15] flex-1 pr-3 xs:pr-4 transition-all duration-300 ${
                  isModal
                    ? "text-base sm:text-lg md:text-xl lg:text-xl xl:text-[32px]"
                    : "text-lg sm:text-lg md:text-xl lg:text-2xl xl:text-[28px]"
                }`}
              >
                {title}
              </h2>
              {onClose ? (
                <motion.button
                  onClick={onClose}
                  className="flex-shrink-0 relative bg-white/10 hover:bg-[#83FFDA20] hover:border-[#83FFDA40] p-1.5 xs:p-2 sm:p-2 rounded-full border border-white/5 transition-all duration-300 hover:scale-110 hover:rotate-90"
                  aria-label={`Close ${title} details`}
                >
                  <X
                    size={14}
                    className="xs:w-4 xs:h-4 sm:w-4 sm:h-4 transition-all duration-300"
                    color="#A0A9B0"
                  />
                </motion.button>
              ) : (
                <motion.button
                  onClick={toggleExpanded}
                  className="flex-shrink-0 relative bg-white/10 hover:bg-[#83FFDA20] hover:border-[#83FFDA40] p-1.5 xs:p-2 sm:p-2 rounded-full border border-white/5 transition-all duration-300 hover:scale-110"
                  aria-label={`Toggle ${title} details`}
                >
                  <Plus
                    size={14}
                    className="xs:w-4 xs:h-4 sm:w-4 sm:h-4 transition-all duration-300"
                    color={isExpanded ? "#83FFDA" : "#A0A9B0"}
                    style={{
                      transform: isExpanded ? "rotate(45deg)" : "rotate(0deg)",
                    }}
                  />
                </motion.button>
              )}
            </div>
          )}

          {/* Expandable Content Area - Takes remaining space */}
          <motion.div
            initial={false}
            animate={{
              opacity: isExpanded ? 1 : 0,
              height: isExpanded ? "auto" : 0,
              marginTop: isExpanded ? "0.75rem" : 0,
              marginBottom: isExpanded ? "1.5rem" : 0,
            }}
            transition={{
              duration: 0.7,
              ease: [0.4, 0, 0.2, 1],
              opacity: { duration: 0.5 },
            }}
            className="overflow-hidden flex-1 min-h-0"
          >
            <div className="h-full flex flex-col justify-between min-h-0">
              {/* Description - Flexible height but contained */}
              <div className="flex-1 mb-3 xs:mb-4 sm:mb-5 md:mb-6 mt-3 min-h-0 overflow-hidden">
                <div className="h-full pr-1">
                  <p
                    className={`text-neutral-lightGray leading-6 mb-2 ${
                      isModal
                        ? "text-[11px] xs:text-xs sm:text-sm md:text-base"
                        : "text-xs xs:text-sm sm:text-base md:text-lg"
                    }`}
                  >
                    {description}
                  </p>
                  {more_detail && (
                    <p
                      className={`text-neutral-lightGray leading-6 ${
                        isModal
                          ? "text-[11px] xs:text-xs sm:text-sm md:text-base"
                          : "text-xs xs:text-sm sm:text-base md:text-lg"
                      }`}
                    >
                      {more_detail}
                    </p>
                  )}
                </div>
              </div>

              {/* Stats Grid - Fixed height */}
              <div className="grid grid-cols-2 gap-2 xs:gap-3 sm:gap-4 md:gap-5 flex-shrink-0 sm:h-[185px] pt-2 h-auto w-full">
                <div className="flex flex-col items-start h-full min-w-[100px]">
                  <span
                    className={`text-white font-semibold leading-tight ${
                      isModal
                        ? "text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[28px]"
                        : "text-lg xs:text-xl sm:text-2xl md:text-md lg:text-2xl uppercase"
                    }`}
                  >
                    {stats.primary.value}
                  </span>
                  <span
                    className={`text-neutral-lightGray leading-tight mt-1 ${
                      isModal
                        ? "text-xs xs:text-sm sm:text-base md:text-lg"
                        : "text-sm xs:text-base sm:text-lg md:text-[18px]"
                    }`}
                  >
                    {stats.primary.label}
                  </span>
                </div>
                <div className="flex flex-col items-start h-full min-w-[100px]">
                  <span
                    className={`text-white font-semibold leading-tight ${
                      isModal
                        ? "text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[28px]"
                        : "text-lg xs:text-xl sm:text-2xl md:text-md lg:text-2xl uppercase"
                    }`}
                  >
                    {stats.secondary.value}
                  </span>
                  <span
                    className={`text-neutral-lightGray leading-tight mt-1 ${
                      isModal
                        ? "text-xs xs:text-sm sm:text-base md:text-lg"
                        : "text-sm xs:text-base sm:text-lg md:text-[18px]"
                    }`}
                  >
                    {stats.secondary.label}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Background glow effect */}
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
  );
}
