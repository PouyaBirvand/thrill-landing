"use client"
import { Button } from "@/components/ui/Button"
import { motion } from "framer-motion"

export default function HeroCTAButton() {
    return (
        <motion.div 
            className="mt-14 relative"
            whileHover="hover"
            initial="initial"
            animate="animate"
        >
            {/* Glowing Ring Effect */}
            {/* <motion.div
                className="absolute inset-0 rounded-2xl"
                style={{
                    background: "linear-gradient(45deg, #83FFDA, transparent, #83FFDA)",
                    padding: "2px"
                }}
                variants={{
                    initial: { opacity: 0, scale: 0.95, rotate: 0 },
                    animate: { 
                        opacity: 0.4, 
                        scale: 1, 
                        rotate: 360,
                        transition: {
                            rotate: { duration: 12, repeat: Infinity, ease: "linear" },
                            opacity: { duration: 1.5, ease: "easeOut" },
                            scale: { duration: 1, ease: [0.16, 1, 0.3, 1] }
                        }
                    },
                    hover: { 
                        opacity: 0.8, 
                        scale: 1.05,
                        transition: { duration: 0.3, ease: "easeOut" }
                    }
                }}
            /> */}

            {/* Pulsing Background */}
            <motion.div
                className="absolute -inset-2 bg-[#83FFDA] rounded-2xl blur-xl opacity-10"
                variants={{
                    initial: { scale: 0.8, opacity: 0 },
                    animate: { 
                        scale: [0.9, 1.1, 0.9], 
                        opacity: [0.05, 0.15, 0.05],
                        transition: {
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }
                    },
                    hover: { 
                        scale: 1.3, 
                        opacity: 0.25,
                        transition: { duration: 0.4 }
                    }
                }}
            />

            {/* Sparkle Effects around button */}
            {/* {[...Array(8)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-[#83FFDA] rounded-full"
                    style={{
                        left: `${50 + Math.cos((i * 45) * Math.PI / 180) * 80}px`,
                        top: `${50 + Math.sin((i * 45) * Math.PI / 180) * 40}px`
                    }}
                    variants={{
                        initial: { scale: 0, opacity: 0 },
                        animate: { 
                            scale: [0, 1, 0], 
                            opacity: [0, 0.8, 0],
                            transition: {
                                duration: 2.5,
                                repeat: Infinity,
                                delay: i * 0.15,
                                ease: "easeInOut"
                            }
                        },
                        hover: { 
                            scale: [0, 1.5, 0], 
                            opacity: [0, 1, 0],
                            transition: {
                                duration: 1.2,
                                repeat: Infinity,
                                delay: i * 0.08
                            }
                        }
                    }}
                />
            ))} */}

            {/* Main Button with subtle 3D effect */}
            <motion.div
                variants={{
                    initial: { y: 0, rotateX: 0, rotateY: 0 },
                    hover: { 
                        y: -4,
                        rotateX: -5,
                        rotateY: 2,
                        transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] }
                    }
                }}
                whileTap={{ 
                    scale: 0.96,
                    y: 0,
                    rotateX: 2,
                    transition: { duration: 0.1 }
                }}
            >
                <Button 
                    size="lg"
                    className="relative overflow-hidden transform-gpu"
                >
                    become an affiliate

                    {/* Sliding Highlight Effect on hover */}
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 rounded-2xl"
                        variants={{
                            initial: { x: "-100%", opacity: 0 },
                            hover: { 
                                x: "100%", 
                                opacity: [0, 0.2, 0],
                                transition: { 
                                    duration: 1.8, 
                                    ease: "easeInOut",
                                    repeat: Infinity,
                                    repeatDelay: 3
                                }
                            }
                        }}
                    />
                </Button>
            </motion.div>

            {/* Energy Waves on hover */}
            {/* {[...Array(3)].map((_, i) => (
                <motion.div
                    key={`wave-${i}`}
                    className="absolute inset-0 border border-[#83FFDA] rounded-2xl opacity-0"
                    variants={{
                        initial: { scale: 1, opacity: 0 },
                        hover: {
                            scale: [1, 1.3, 1.6],
                            opacity: [0.6, 0.3, 0],
                            transition: {
                                duration: 1.8,
                                delay: i * 0.4,
                                repeat: Infinity,
                                ease: "easeOut"
                            }
                        }
                    }}
                />
            ))} */}
        </motion.div>
    )
}