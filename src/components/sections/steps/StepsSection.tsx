"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { steps } from "@/constants/data/steps";

const StepsSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.3 });

    return (
        <section id="guide" className="overflow-hidden pt-32 relative" ref={ref}>
            <div className="flex flex-col items-center justify-center gap-2 relative">
                {/* Block 1: Subtitle */}
                <motion.h3
                    className="uppercase text-accent-green_light font-semibold text-sm sm:text-base mb-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                >
                    JOIN, PROMOTE AND EARN
                </motion.h3>

                {/* Block 2: Main Title */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                >
                    <h1 className="text-neutral-white text-3xl sm:text-4xl lg:text-5xl max-w-5xl font-semibold text-center uppercase">
                        5 fast steps to
                    </h1>
                    <h1 className="text-neutral-white text-3xl sm:text-4xl lg:text-5xl max-w-5xl font-semibold text-center uppercase">
                        become an affiliate
                    </h1>
                </motion.div>

                {/* Block 3: Description */}
                <motion.div
                    className="text-center space-y-1 mt-2 px-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                >
                    <p className="text-neutral-lightGray max-w-[50rem] text-sm sm:text-base">
                        Getting started is fast and frictionless. Sign up, connect with your
                        manager, grab your assets, and start earning with real-time tracking
                        and fast payouts.
                    </p>
                </motion.div>
            </div>

            {/* Desktop Version - Unchanged */}
            <div className="hidden md:block min-[467px]:mt-24 flex items-center justify-center w-full transition-all duration-100">
                <div className="relative flex-col items-end justify-end w-full max-[467px]:scale-[0.8] transition-all duration-100">
                    {/* Top Stepper */}
                    <div className="transition-all duration-100 md:flex max-md:left-[-200px] flex md:flex-row flex-col items-center justify-center gap-32 relative">
                        {/* Top Line - appears with delay */}
                        <motion.div
                            className="block absolute top-[7.6rem] md:top-[5.9rem] 
                                      w-[0.06rem] h-[620px] 
                                      md:w-[554px] md:h-[0.06rem] 
                                      lg:w-[720px]
                                      2xl:w-[890px]
                                      xl:w-[870px] 
                                      bg-[#9FABC780] z-0 ml-2 lg:ml-0"
                            initial={{ opacity: 0, scaleX: 0 }}
                            animate={isInView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
                            transition={{ duration: 0.8, delay: 1.4, ease: "easeOut" }}
                        />

                        {steps.slice(0, 3).map((step, index) => (
                            <div key={step.number} className="text-center relative z-10 max-md:left-[200px] transition-all duration-100">
                                {/* Numbers */}
                                <motion.div
                                    className="relative mb-8"
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                    transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
                                >
                                    <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto realtive z-10">
                                        <span className="text-white text-[64px] font-medium">{step.number}</span>
                                    </div>
                                </motion.div>

                                {/* Descriptions */}
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                    transition={{ duration: 0.5, delay: 0.9, ease: "easeOut" }}
                                >
                                    <h3 className="text-white font-740 mb-2 tracking-wide uppercase">{step.title}</h3>
                                    <p className="text-[#FFFFFF80] font-400 leading-5 max-w-xs mx-auto">{step.description}</p>
                                </motion.div>

                                {/* Colored Circle */}
                                <motion.div
                                    className="absolute transition-all duration-100 bottom-[58px] md:bottom-[148px] lg:bottom-[105px] xl:bottom-[85px] 
                                              left-[-39.5px] md:left-1/2 md:-translate-x-1/2 
                                              w-2 h-2 bg-accent-green_light shadow-step-glow rounded-full z-20"
                                    initial={{ opacity: 0 }}
                                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                                    transition={{ duration: 0.6, delay: 2.0, ease: "easeOut" }}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Under Stepper */}
                    <div className="mt-32 md:flex-row flex flex-col md:flex items-center justify-center gap-32 mb-32 relative">
                        <div className="transition-all duration-100 md:flex max-md:left-[-200px] flex md:flex-row flex-col items-center justify-center gap-32 gap-y-32 relative">
                            {/* Bottom Line - appears with delay */}
                            <motion.div
                                className="absolute top-[7.6rem] md:top-[5.9rem]
                                          w-[0.06rem] h-[310px]
                                          sm:w-[0.06rem] sm:h-[310px]
                                          md:w-[415px] md:h-[0.06rem] 
                                          lg:w-[450px]
                                          xl:w-[450px]
                                          2xl:w-[450px]
                                          bg-[#9FABC780] z-0 ml-2 lg:ml-0"
                                initial={{ opacity: 0, scaleX: 0 }}
                                animate={isInView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
                                transition={{ duration: 0.8, delay: 1.8, ease: "easeOut" }}
                            />

                            {steps.slice(3, 5).map((step, index) => (
                                <div key={step.number} className="text-center relative z-10 max-md:left-[200px] transition-all duration-100">
                                    {/* Numbers */}
                                    <motion.div
                                        className="relative mb-8"
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                        transition={{ duration: 0.5, delay: 1.1, ease: "easeOut" }}
                                    >
                                        <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto relative z-10">
                                            <span className="text-white text-[64px] font-medium">{step.number}</span>
                                        </div>
                                    </motion.div>

                                    {/* Descriptions */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                        transition={{ duration: 0.5, delay: 1.2, ease: "easeOut" }}
                                    >
                                        <h3 className="text-white font-740 mb-2 tracking-wide uppercase">{step.title}</h3>
                                        <p className="text-[#FFFFFF80] font-400 leading-5 max-w-xs mx-auto">{step.description}</p>
                                    </motion.div>

                                    {/* Colored Circle */}
                                    <motion.div
                                        className="absolute transition-all duration-100 bottom-[58px] md:bottom-[85px] lg:bottom-[86px] xl:bottom-[85px] 
                                                  left-[-39.5px] md:left-1/2 md:-translate-x-1/2 
                                                  w-2 h-2 bg-accent-green_light shadow-step-glow rounded-full z-20"
                                        initial={{ opacity: 0 }}
                                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                                        transition={{ duration: 0.6, delay: 2.0, ease: "easeOut" }}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Version - Clean Minimal Timeline */}
            <div className="md:hidden pt-12 md:pt-24 px-5">
                <div className="relative max-w-xs mx-auto">
                    {steps.map((step, index) => {
                        const isLast = index === steps.length - 1;
                        return (
                            <div key={step.number} className="relative pb-16 last:pb-0">
                                {/* Connecting Line */}
                                {!isLast && (
                                    <motion.div
                                        className="absolute left-8 top-16 w-[2px] h-full bg-gradient-to-b from-accent-green_light/60 to-accent-green_light/20"
                                        initial={{ opacity: 0, scaleY: 0 }}
                                        animate={isInView ? { opacity: 1, scaleY: 1 } : { opacity: 0, scaleY: 0 }}
                                        transition={{ duration: 0.6, delay: 1.0 + index * 0.2, ease: "easeOut" }}
                                    />
                                )}

                                <div className="flex items-start gap-6">
                                    {/* Step Number */}
                                    <motion.div
                                        className="flex-shrink-0 w-16 h-16 bg-body border-2 border-accent-green_light/50 rounded-full flex items-center justify-center relative"
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                                        transition={{ duration: 0.5, delay: 0.8 + index * 0.15, ease: "easeOut" }}
                                    >
                                        <span className="text-accent-green_light text-xl font-semibold">{step.number}</span>

                                        {/* Small dot indicator */}

                                    </motion.div>

                                    {/* Content */}
                                    <motion.div
                                        className="flex-1 pt-2"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                                        transition={{ duration: 0.5, delay: 1.0 + index * 0.15, ease: "easeOut" }}
                                    >
                                        <h3 className="text-white font-semibold mb-2 uppercase tracking-wide text-sm">
                                            {step.title}
                                        </h3>
                                        <p className="text-neutral-lightGray text-sm leading-relaxed">
                                            {step.description}
                                        </p>
                                    </motion.div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default StepsSection;