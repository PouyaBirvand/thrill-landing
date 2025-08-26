'use client'
import { motion } from "framer-motion"
export default function Stepper() {
    return (
        <div className="relative">
            {/* Steps بالا */}
            <div className="flex items-center justify-center gap-32 mb-32 relative">
                {/* خط تایم‌لاین */}
                <div className="hidden md:block absolute top-[5.9rem] left-[20%] right-[20%] h-[0.06rem] bg-[#9FABC780] z-0" />

                {steps.slice(0, 3).map((step, index) => (
                    <motion.div
                        key={step.number}
                        className="text-center relative z-10"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 0.8 + index * 0.2, ease: "easeOut" }}
                    >
                        <div className="relative mb-8">
                            <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto  relative z-10">
                                <span className="text-white text-[64px] font-medium">{step.number}</span>
                            </div>
                            <div className="absolute -bottom-[19px] left-1/2 -translate-x-1/2 w-2 h-2 bg-accent-green_light shadow-step-glow rounded-full z-20" />
                        </div>
                        <h3 className="text-white font-740 mb-2 tracking-wide uppercase">{step.title}</h3>
                        <p className="text-[#FFFFFF80] font-400 leading-5 max-w-xs mx-auto">{step.description}</p>
                    </motion.div>
                ))}
            </div>

            {/* خط تایم‌لاین پایین */}

            {/* Steps پایین */}
            <div className="flex items-center justify-center gap-32 mb-32 relative">
                <div className="hidden md:block absolute top-[5.9rem] right-[33rem] w-[28rem] h-[0.1rem] bg-neutral-lightGray/30 z-0" />
                {steps.slice(3, 5).map((step, index) => (
                    <motion.div
                        key={step.number}
                        className="text-center relative z-10"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 1.4 + index * 0.2, ease: "easeOut" }}
                    >
                        <div className="relative mb-8">
                            <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto  relative z-10">
                                <span className="text-white text-[64px] font-medium">{step.number}</span>
                            </div>
                            <div className="absolute -bottom-[19px] left-1/2 -translate-x-1/2 w-2 h-2 bg-accent-green_light shadow-step-glow rounded-full z-20" />
                        </div>
                        <h3 className="text-white font-740 mb-2 tracking-wide uppercase">{step.title}</h3>
                        <p className="text-[#FFFFFF80] font-400 leading-5 max-w-xs mx-auto">{step.description}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}