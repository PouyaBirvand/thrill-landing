'use client'
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import CommissionCard from "./CommissionCard"

export default function CommissionPlanSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.3 })

    return (
        <section id="plan" ref={ref}>
            <div className="flex flex-col items-center justify-center gap-2 pt-48">
                {/* Block 1: Subtitle */}
                <motion.h3
                    className="uppercase text-[#83FFDA] font-semibold text-sm sm:text-base mb-2"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                >
                    Flexible Payout Options
                </motion.h3>

                {/* Block 2: Main Title */}
                <motion.h1
                    className="text-neutral-white text-3xl sm:text-4xl lg:text-5xl max-w-5xl font-bold text-center uppercase"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                >
                    Commission plan
                </motion.h1>

                {/* Block 3: Description */}
                <motion.p
                    className="text-neutral-lightGray max-w-[50rem] text-center text-sm sm:text-base mt-2 px-4"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                >
                    All commissions are tracked via SoftSwiss and paid during the first week of each month.
                    Custom deal structures are available directly through your account manager.
                </motion.p>
            </div>
            <CommissionCard/>
        </section>
    )
}
