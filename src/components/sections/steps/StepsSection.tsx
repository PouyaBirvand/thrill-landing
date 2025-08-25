'use client'
import React from 'react';
import { motion } from 'framer-motion';

const StepsSection = () => {
    const steps = [
        { number: "01", title: "SIGN UP INSTANTLY", description: "Register in seconds with our lightning-fast onboarding process." },
        { number: "02", title: "MEET YOUR MANAGER", description: "Get direct access to your manager right away, no waiting around." },
        { number: "03", title: "SET DEAL & ASSETS", description: "We customize your deal fast and give you everything you need to launch." },
        { number: "04", title: "START SENDING TRAFFIC", description: "Begin promoting immediately with high-converting links and creatives." },
        { number: "05", title: "GET PAID - FAST!", description: "Enjoy rapid payouts with no delays, weekly and monthly options available." }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 }
        }
    };

    const stepVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <section className="py-20 relative">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
            >
                {/* Header */}
                <div className="text-center mb-20">
                    <motion.p className="text-[#00ff7f] text-xs font-semibold tracking-[0.3em] uppercase mb-4" variants={stepVariants}>
                        JOIN, PROMOTE AND EARN
                    </motion.p>
                    <motion.h2 className="text-white text-4xl md:text-5xl font-bold leading-tight mb-6" variants={stepVariants}>
                        5 FAST STEPS TO<br />BECOME AN AFFILIATE
                    </motion.h2>
                    <motion.p className="text-[#a1a5b0] text-lg max-w-3xl mx-auto leading-relaxed" variants={stepVariants}>
                        Getting started is fast and frictionless. Sign up, connect with your
                        manager, grab your assets, and start earning with real-time tracking
                        and fast payouts.
                    </motion.p>
                </div>

                {/* Steps Timeline */}
                <div className="relative">

                    {/* خط تایم‌لاین بالا */}
                    <div className="hidden md:block absolute top-[5.9rem] left-1/2 right-1/2 w-[calc(100%-8rem)] mx-auto h-[0.1rem] bg-neutral-lightGray/30 z-0" />

                    {/* Steps بالا */}
 {/* Steps بالا */}
<div className="grid md:grid-cols-3 gap-12 mb-32 relative">
    {/* خط تایم‌لاین */}
    <div className="hidden md:block absolute top-[5.9rem] left-[10%] right-[10%] h-[0.1rem] bg-neutral-lightGray/30 z-0" />

    {steps.slice(0, 3).map((step) => (
        <motion.div key={step.number} className="text-center relative z-10" variants={stepVariants}>
            <div className="relative mb-8">
                <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto bg-black relative z-10">
                    <span className="text-white text-6xl font-bold">{step.number}</span>
                </div>
                <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#00ff7f] rounded-full z-20" />
            </div>
            <h3 className="text-white text-base font-bold mb-4 tracking-wide">{step.title}</h3>
            <p className="text-[#a1a5b0] text-sm leading-relaxed max-w-xs mx-auto">{step.description}</p>
        </motion.div>
    ))}
</div>


                    {/* خط تایم‌لاین پایین */}
                    <div className="hidden md:block absolute top-[calc(50%+140px)] left-1/4 w-1/2 h-[0.1rem] bg-neutral-lightGray/30 z-0" />

                    {/* Steps پایین */}
                    <div className="grid md:grid-cols-2 gap-32 relative z-10 justify-center w-3/4 mx-auto">
                        {steps.slice(3, 5).map((step) => (
                            <motion.div key={step.number} className="text-center relative" variants={stepVariants}>
                                <div className="relative mb-8">
                                    <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto relative z-10 bg-black">
                                        <span className="text-white text-6xl font-bold">{step.number}</span>
                                    </div>
                                    <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#00ff7f] rounded-full z-20" />
                                </div>
                                <h3 className="text-white text-base font-bold mb-4 tracking-wide">{step.title}</h3>
                                <p className="text-[#a1a5b0] text-sm leading-relaxed max-w-xs mx-auto">{step.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default StepsSection;
