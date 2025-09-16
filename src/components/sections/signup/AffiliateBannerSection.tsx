'use client'

import { Button } from "@/components/ui/Button";
import { Plus } from "lucide-react";
import { motion, useInView, easeOut } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";

export default function AffiliateBannerSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.25 });

    // State for screen size detection
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 768); // 768px is md breakpoint
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);

        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    // Animation variants for the main container
    const containerVariants = {
        hidden: { opacity: 0, y: 30 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: easeOut,
                delay: 0.2
            }
        }
    };

    // Animation variants for corner plus icons
    const plusIconVariants = {
        hidden: { opacity: 0, scale: 0, rotate: -180 },
        show: {
            opacity: 1,
            scale: 1,
            rotate: 0,
            transition: {
                duration: 0.6,
                ease: easeOut
            }
        }
    };

    // Animation variants for content blocks
    const getContentVariants = (delay = 0) => ({
        hidden: { opacity: 0, y: 20 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: easeOut,
                delay: 0.8 + delay
            }
        }
    });

    // Background glow animation
    const glowVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        show: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 1.2,
                ease: easeOut,
                delay: 1.0
            }
        }
    };

    return (
        <section id="signin" className="w-full mt-[8rem] md:mt-[6rem] lg:px-0 px-5" ref={ref}>
            <motion.div
                className="relative rounded-[32px] overflow-hidden border-[#FFFFFF1F] border"
                initial="hidden"
                animate={isInView ? 'show' : 'hidden'}
                variants={containerVariants}
            >
                {/* Corner Plus Icons */}
                <motion.div
                    className="absolute top-6 left-6 z-[2]"
                    variants={plusIconVariants}
                    custom={0}
                    initial="hidden"
                    animate={isInView ? 'show' : 'hidden'}
                    transition={{ delay: 1.2 }}
                >
                    <Plus className="w-4 h-4 text-[#FFFFFF1F]" />
                </motion.div>
                <motion.div
                    className="absolute top-6 right-6 z-[2]"
                    variants={plusIconVariants}
                    custom={1}
                    initial="hidden"
                    animate={isInView ? 'show' : 'hidden'}
                    transition={{ delay: 1.3 }}
                >
                    <Plus className="w-4 h-4 text-[#FFFFFF1F]" />
                </motion.div>
                <motion.div
                    className="absolute bottom-6 left-6 z-[2]"
                    variants={plusIconVariants}
                    custom={2}
                    initial="hidden"
                    animate={isInView ? 'show' : 'hidden'}
                    transition={{ delay: 1.4 }}
                >
                    <Plus className="w-4 h-4 text-[#FFFFFF1F]" />
                </motion.div>
                <motion.div
                    className="absolute bottom-6 right-6 z-[2]"
                    variants={plusIconVariants}
                    custom={3}
                    initial="hidden"
                    animate={isInView ? 'show' : 'hidden'}
                    transition={{ delay: 1.5 }}
                >
                    <Plus className="w-4 h-4 text-[#FFFFFF1F]" />
                </motion.div>

                {/* Content Container */}
                <div className="relative z-[3] flex flex-col lg:flex-row lg:items-start items-center justify-between p-12 lg:p-12 xl:p-16 gap-8 lg:gap-12 h-auto lg:h-[265px]">
                    {/* Left Content */}
                    <div className="flex-1 text-center lg:text-left space-y-6">
                        {/* Green Subtitle */}
                        <motion.div
                            className="text-[#5CFFC1] text-sm lg:text-lg font-medium tracking-wider uppercase"
                            initial="hidden"
                            animate={isInView ? 'show' : 'hidden'}
                            variants={getContentVariants(0.1)}
                        >
                            YOUR AUDIENCE. YOUR PROFIT.
                        </motion.div>

                        {/* Main Heading */}
                        <div className="space-y-2">
                            <motion.h1
                                className="text-white text-3xl lg:text-5xl xl:text-5xl font-semibold leading-tight"
                                initial="hidden"
                                animate={isInView ? 'show' : 'hidden'}
                                variants={getContentVariants(0.2)}
                            >
                                DARE TO EARN.
                            </motion.h1>
                            <motion.h1
                                className="text-white text-3xl lg:text-5xl xl:text-5xl font-semibold leading-tight"
                                initial="hidden"
                                animate={isInView ? 'show' : 'hidden'}
                                variants={getContentVariants(0.3)}
                            >
                                GET AFFILIATE ACCESS.
                            </motion.h1>
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="flex-shrink-0 text-center lg:text-right space-y-6 lg:space-y-12">
                        {/* Description */}
                        <motion.p
                            className="text-white/50 text-sm lg:text-base max-w-md lg:max-w-[435px] lg:text-left text-center leading-relaxed"
                            initial="hidden"
                            animate={isInView ? 'show' : 'hidden'}
                            variants={getContentVariants(0.4)}
                        >
                            Built for creators, communities, and anyone ready to turn traffic into profit.
                        </motion.p>

                        {/* CTA Button */}
                        <motion.div
                            initial="hidden"
                            animate={isInView ? 'show' : 'hidden'}
                            variants={getContentVariants(0.5)}
                        >
                            <Link
                                href="https://dashboard.thrillaffiliates.com/partner/register"
                                rel="noopener noreferrer"
                            >
                                <Button
                                    size={isMobile ? "sm" : "default"}
                                    className="!w-full !shadow-signin-glow !z-[9999]"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.98 }}
                                    transition={{ duration: 0.001, ease: 'easeOut' }}
                                >
                                    BECOME AN AFFILIATE
                                </Button>

                            </Link>
                        </motion.div>
                    </div>
                </div>

                {/* Background Glow */}
                <motion.div
                    className="absolute bottom-0 right-0 w-[1400px] h-[300px] pointer-events-none z-[1]"
                    style={{
                        background: `
              radial-gradient(ellipse at 100% 100%, rgba(92,255,193,0.22) 0%, rgba(92,255,193,0.08) 40%, transparent 45%)
            `,
                        filter: "blur(50px)",
                    }}
                    initial="hidden"
                    animate={isInView ? 'show' : 'hidden'}
                    variants={glowVariants}
                />
            </motion.div>
        </section>
    );
}