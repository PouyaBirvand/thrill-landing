"use client";
import { Plus, X } from "lucide-react";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import VectoreLine from "@/../public/feature/Feature4SvgComponent";

interface FeatureCardProps {
  index: number;
  title: string;
  description: string;
  svgComponent?: React.FC;
  imagePath: string;
  more_detail?: string;
  toleft?: boolean;
  size?: boolean;
  maxstack?: boolean;
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
  index,
  title,
  description,
  svgComponent: SvgComponent,
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
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const isExpanded = forcedExpanded !== undefined ? forcedExpanded : localExpanded;

  // تشخیص موبایل - فقط یک بار
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
    };

    checkMobile();

    // فقط اگه resize شد چک کن - نه مدام
    let timeoutId: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(checkMobile, 150);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timeoutId);
    };
  }, []);

  // انیمیشن های ساده‌تر
  const containerVariants: Variants = {
    hidden: {
      opacity: 0,
      y: isMobile ? 20 : 30, // کمتر حرکت روی موبایل
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: isMobile ? 0.4 : 0.6, // سریع‌تر روی موبایل
        ease: "easeOut",
        staggerChildren: isMobile ? 0.05 : 0.1, // کمتر stagger
      },
    },
  };

  // SVG انیمیشن ساده‌تر
  const svgVariants: Variants = {
    hidden: {
      opacity: 0,
      scale: 0.95, // کمتر scale تغییر
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: isMobile ? 0.3 : 0.5, // خیلی سریع‌تر روی موبایل
        ease: "easeOut", // ease ساده‌تر
      },
    },
  };

  const imageVariants: Variants = {
    hidden: {
      opacity: 0.5,
      scale: 0.98,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
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

  // ساده‌تر شده - بدون محاسبات پیچیده
  const getFixedHeight = () => {
    if (isModal) {
      return isExpanded
        ? "h-[700px] sm:h-[720px] md:h-[750px] lg:h-[780px] xl:h-[800px]"
        : "h-[310px] sm:h-[300px] md:h-[310px] lg:h-[325px] xl:h-[380px]";
    } else {
      return isExpanded
         ? "h-[680px] min-[385px]:h-[650px] min-[445px]:h-[620px] sm:h-[740px] md:h-[850px] lg:h-[860px] xl:h-[880px]"
        : "h-[310px] sm:h-[300px] md:h-[340px] lg:h-[325px] xl:h-[370px]";
    }
  };

  // ساده‌تر شده - dimensions ثابت
  const baseDimensions = {
    width: isExpanded ? 600 : 490,
    height: isModal ? (isExpanded ? 800 : 490) : (isExpanded ? 850 : 490)
  };

  return (
    <div
      ref={containerRef}
      className={`relative w-full transition-all duration-700 ease-out cursor-pointer mx-auto ${isExpanded ? "max-w-[490px] " : "max-w-[490px]"
        } ${getFixedHeight()}`}
    >
      {/* SVG Border - ساده‌تر شده */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox={`0 0 ${baseDimensions.width} ${baseDimensions.height}`}
        preserveAspectRatio="none"
        aria-hidden="true"
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <defs>
          <linearGradient
            id={`borderGradient-${index}`} // ساده‌تر شده
            gradientUnits="userSpaceOnUse"
            x1="0"
            y1="0"
            x2={baseDimensions.width}
            y2="0"
          >
            <stop offset="14.19%" stopColor="#ffffff" stopOpacity="0.06" />
            <stop offset="50.59%" stopColor="#ffffff" stopOpacity="0.000015" />
            <stop offset="68.79%" stopColor="#ffffff" stopOpacity="0.000015" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.015" />
          </linearGradient>
        </defs>

        {/* فقط یک border - نه ۳ تا */}
        <rect
          x="0.75"
          y="0.75"
          width={baseDimensions.width - 1.5}
          height={baseDimensions.height - 1.5}
          rx="24"
          ry="24"
          fill="none"
          stroke={`url(#borderGradient-${index})`}
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      {/* Content Container */}
      <div className="relative w-full h-full rounded-[24px] bg-[#F8F8F805] flex flex-col overflow-hidden">
        {index === 2 && (
          <div className="vectore-line w-[50px] h-[50px] absolute 2xl:top-[170px] xl:top-[170px] lg:top-[135px] 2xl:left-[110px] xl:left-[100px] lg:left-[100px] md:top-[130px] md:left-[110px] sm:top-[125px] sm:left-[100px] top-[130px] [@media(max-width:640px)]:left-[23vw]">
            <VectoreLine
              className="middle-vectore-line md:w-[20px] md:h-[50px] sm:w-[1rem] sm:h-[3rem] w-[1.8rem] sm:scale-120 scale-[2.1] h-[2rem] relative sm:bottom-3 md:top-3 md:left-9 lg:left-4 lg:-top-2 xl:left-7"
            />
          </div>
        )}

        {/* Image Section */}
        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div
            className={`w-full mx-auto rounded-xl relative overflow-hidden transition-all duration-500 ease-out ${isModal
                ? "h-[260px]"
                : "h-[220px] sm:h-[210px] md:h-[260px] lg:h-[250px] xl:h-[280px]"
              }`}
          >
            {/* SVG Background - فقط اگه موبایل نباشه یا expanded باشه */}
            {SvgComponent && (
              <motion.div
                className={`relative ${maxstack && "z-[9]"} z-[99999]`}
                variants={svgVariants}
              >
                <SvgComponent />
              </motion.div>
            )}

            {/* Center PNG Image */}
            <motion.div variants={imageVariants} className="absolute inset-0">
              <Image
                fill
                src={imagePath}
                alt={title}
                sizes="(max-width: 768px) 100vw, 50vw" // اضافه شده برای performance
                className={`object-contain scale-75 m-auto rounded-xl ${size && "scale-[1.0001] mt-2"} ${toleft && "2xl:ml-1 xl:ml-1.5 lg:ml-1 md:ml-1 sm:ml-1 ml-1 sm:scale-75 scale-[0.65]"}`}
                style={{ zIndex: 1000 }}
                loading="lazy" // lazy loading اضافه شده
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col px-4 xs:px-5 sm:px-6 sm:pt-0 pt-3 min-h-0">
          {/* Header Section */}
          {!isModal && (
            <div className="flex items-center justify-between flex-shrink-0 pt-3 h-[50px] sm:h-[55px] md:h-[60px] lg:h-[65px] xl:h-[70px]">
              <h2
                className={`text-neutral-white text-nowrap font-semibold uppercase leading-[1.15] flex-1 pr-3 xs:pr-4 transition-all duration-300 ${isModal
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
                  whileTap={{ scale: 0.95 }} // ساده‌تر شده
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
                  whileTap={{ scale: 0.95 }} // ساده‌تر شده
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

          {/* Expandable Content Area */}
          <motion.div
            initial={false}
            animate={{
              opacity: isExpanded ? 1 : 0,
              height: isExpanded ? "auto" : 0,
              marginTop: isExpanded ? "0.75rem" : 0,
              marginBottom: isExpanded ? "1.5rem" : 0,
            }}
            transition={{
              duration: isMobile ? 0.4 : 0.6, // سریع‌تر روی موبایل
              ease: "easeOut", // ساده‌تر
            }}
            className="overflow-hidden flex-1 min-h-0"
          >
            <div className="h-full flex flex-col justify-between min-h-0">
              {/* Description */}
              <div className="flex-1 mb-3 xs:mb-4 sm:mb-5 md:mb-6  min-h-0 overflow-hidden">
                <div className="h-full pr-1">
                  <p
                    className={`text-neutral-lightGray leading-6 mb-2 ${isModal
                        ? "text-[11px] xs:text-xs sm:text-sm md:text-base"
                        : "text-xs xs:text-sm sm:text-base md:text-lg"
                      }`}
                  >
                    {description}
                  </p>
                  {more_detail && (
                    <p
                      className={`text-neutral-lightGray leading-6 ${isModal
                          ? "text-[11px] xs:text-xs sm:text-sm md:text-base"
                          : "text-xs xs:text-sm sm:text-base md:text-lg"
                        }`}
                    >
                      {more_detail}
                    </p>
                  )}
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-2 xs:gap-3 sm:gap-4 md:gap-5 flex-shrink-0 sm:h-[155px] pt-2 h-auto w-full">
                <div className="flex flex-col items-start h-full min-w-[100px]">
                  <span
                    className={`text-white font-semibold leading-tight uppercase ${isModal
                        ? "text-[11px] xs:text-[13px] sm:text-sm md:text-base lg:text-base xl:text-[22px]"
                        : "text-base md:text-lg lg:text-xl xl:text-[24px]"
                      }`}
                  >
                    {stats.primary.value}
                  </span>
                  <span
                    className={`text-neutral-lightGray leading-tight mt-1 ${isModal
                        ? "text-xs xs:text-sm sm:text-base md:text-lg"
                        : "text-sm md:text-[18px]"
                      }`}
                  >
                    {stats.primary.label}
                  </span>
                </div>
                <div className="flex flex-col items-start h-full min-w-[100px]">
                  <span
                    className={`text-white font-semibold leading-tight uppercase ${isModal
                        ? "text-[11px] xs:text-[13px] sm:text-sm md:text-base lg:text-base xl:text-[22px]"
                        : "text-base md:text-lg lg:text-xl xl:text-[24px]"
                      }`}
                  >
                    {stats.secondary.value}
                  </span>
                  <span
                    className={`text-neutral-lightGray leading-tight mt-1 ${isModal
                        ? "text-xs xs:text-sm sm:text-base md:text-lg"
                        : "text-sm md:text-[18px]"
                      }`}
                  >
                    {stats.secondary.label}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Background glow - ساده‌تر شده */}
        {!isMobile && (
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
        )}
      </div>
    </div>
  );
}