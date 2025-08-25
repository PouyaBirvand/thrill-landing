"use client"
import { motion } from "framer-motion"
import FeatureCard from "./FeatureCard"
export default function FeaturesSection() {
    return (
        <section className="pt-[20rem] gap-10">
            <div className="flex flex-col items-center justify-center gap-2">
                <motion.h3
                    className="uppercase text-[#83FFDA] font-semibold text-sm sm:text-base mb-2"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    whileHover={{
                        scale: 1.1,
                        textShadow: "0 0 20px rgba(131, 255, 218, 0.8)",
                        transition: { duration: 0.3 }
                    }}
                >
                    <motion.span
                        animate={{
                            textShadow: [
                                "0 0 5px rgba(131, 255, 218, 0.5)",
                                "0 0 15px rgba(131, 255, 218, 0.8)",
                                "0 0 5px rgba(131, 255, 218, 0.5)"
                            ]
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        your growth partner
                    </motion.span>
                </motion.h3>
                <h1 className="text-neutral-white text-5xl max-w-5xl font-bold text-center uppercase">built for performance.</h1>
                <h1 className="text-neutral-white text-5xl max-w-5xl font-bold text-center uppercase">backed by experince.</h1>
                <motion.div
                    className="text-center space-y-1 mt-2 px-4"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
                >
                    <motion.p
                        className="text-neutral-lightGray max-w-[50rem]"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 1.8, ease: [0.16, 1, 0.3, 1] }}
                        whileHover={{
                            scale: 1.02,
                            color: "#83FFDA",
                            transition: { duration: 0.3 }
                        }}
                    >
                        Work with a team that values speed, transparency, and real partnership. Whether you’re scaling fast or just starting out — we’ve got the tools, flexible deals, and dedicated support to help you grow. No fluff, just results backed by real data, weekly payouts, and a system built to keep your momentum going.
                    </motion.p>
                </motion.div>
            </div>
                <FeatureCard/>
        </section>
    )
}



