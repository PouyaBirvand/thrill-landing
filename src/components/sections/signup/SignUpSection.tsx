"use client"
import { motion, useInView } from "framer-motion"
import { useState, useRef, useCallback } from "react"
import { ChevronRight, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/Button"

const AffiliateSignupSection = () => {
    const ref = useRef(null)
    const videoRef = useRef<HTMLVideoElement>(null)
    const isInView = useInView(ref, { once: true, amount: 0.3 })
    const [videoLoaded, setVideoLoaded] = useState(false)
    const [videoError, setVideoError] = useState(false)

    const handleVideoLoad = useCallback(() => {
        setVideoLoaded(true)
    }, [])

    const handleVideoError = useCallback(() => {
        setVideoError(true)
        setVideoLoaded(false)
    }, [])

    const handleAffiliateClick = () => {
        // Replace this URL with your actual external affiliate signup site
        window.open('https://thrill.com', '_blank', 'noopener,noreferrer')
    }

    const navigationLinks = [
        { name: 'Casino', url: 'https://thrill.com/en/casino' },
        { name: 'Sports', url: 'https://thrill.com/en/sports' },
        { name: 'Brand Assets', url: 'https://thrill.framer.website/' },
        { name: 'Sign In', url: 'https://signin-site.com' }
    ]

    const footerLinks = [
        { name: 'Terms', url: 'https://dashboard.thrillaffiliates.com/partner/terms_and_conditions' },
        { name: 'Privacy', url: 'https://thrill.com/en/policies/privacy-policy' }
    ]

    return (
        <section
            id="signin"
            className="min-h-[500px] sm:min-h-[600px] lg:min-h-screen relative pt-[8rem] md:pt-0 flex items-center justify-center"
            ref={ref}
        >
            {/* Background blur effects */}
            <motion.div
                className="h-[15rem] w-[15rem] sm:h-[20rem] sm:w-[20rem] lg:h-[25rem] lg:w-[25rem] xl:h-[30rem] xl:w-[30rem] left-[-10%] sm:left-[-8%] lg:left-[-2%] top-[20%] sm:top-[25%] lg:top-[25%] rounded-full bg-[#363a4e] blur-2xl z-[0] bg-opacity-90 absolute"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
            />
            <motion.div
                className="h-[15rem] w-[15rem] sm:h-[20rem] sm:w-[20rem] lg:h-[25rem] lg:w-[25rem] xl:h-[30rem] xl:w-[30rem] right-[-10%] sm:right-[-8%] lg:right-[-2%] top-[20%] sm:top-[25%] lg:top-[25%] rounded-full bg-[#363a4e] blur-2xl z-[0] bg-opacity-90 absolute"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
            />

            <motion.div
                className="w-full max-w-[1440px] mx-auto px-2 sm:px-4"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div className="relative w-full h-full">
                    {/* Gradient background */}
                    <motion.div
                        className="absolute inset-0 bg-gradient-radial from-accent-green_light/5 via-transparent to-transparent opacity-0 rounded-2xl sm:rounded-3xl"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                    />

                    {/* Border SVG */}
                    <svg
                        className="absolute inset-0 w-full h-full pointer-events-none z-[1]"
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
                        </defs>
                        <rect
                            x="0.75"
                            y="0.75"
                            width="488.5"
                            height="488.5"
                            rx="12"
                            ry="12"
                            fill="none"
                            stroke="url(#borderGradient)"
                            strokeWidth="2"
                            vectorEffect="non-scaling-stroke"
                            shapeRendering="geometricPrecision"
                        />
                    </svg>

                    {/* Main content container */}
                    <div className="relative w-full h-full rounded-xl sm:rounded-2xl lg:rounded-3xl bg-[linear-gradient(36.25deg,#1B2D33_13.55%,#181A26_84.75%)] overflow-hidden">
                        <div className="grid lg:grid-cols-2 items-stretch min-h-[500px] sm:min-h-[600px] lg:min-h-[700px]">
                            
                            {/* Left side - Hero content with video background */}
                            <div className="text-white relative h-full min-h-[200px] sm:min-h-[300px] lg:min-h-[700px] flex flex-col justify-center px-3 sm:px-6 lg:px-8 xl:px-12 overflow-hidden">
                                
                                {/* Background media */}
                                <div
                                    className={`absolute inset-0 w-full h-full object-cover bg-center bg-cover z-0 transition-opacity duration-500 ${videoLoaded && !videoError ? 'opacity-0' : 'opacity-100'}`}
                                    style={{ backgroundImage: "url('/formbg.png')" }}
                                />

                                {isInView && (
                                    <video
                                        ref={videoRef}
                                        className={`absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-500 ${videoLoaded && !videoError ? 'opacity-100' : 'opacity-0'}`}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        preload="metadata"
                                        onLoadedData={handleVideoLoad}
                                        onError={handleVideoError}
                                        poster="/formbg.png"
                                    >
                                        <source src="/loginshape.webm" type="video/webm" />
                                    </video>
                                )}

                                <div
                                    className="absolute inset-0 z-1"
                                    style={{
                                        background: "linear-gradient(182.46deg, rgba(27, 29, 41, 0) -6.86%, #1B1D29 50.13%, rgba(27, 29, 41, 0.0531915) 78.05%)",
                                    }}
                                />
                                
                                {/* Hero text */}
                                <div className="relative z-10 space-y-3 sm:space-y-4 lg:space-y-6 text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
                                    <motion.p 
                                        className="text-[#5CFFC1] font-medium tracking-wide uppercase text-xs sm:text-sm lg:text-base px-2 sm:px-4 lg:px-6"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                                    >
                                        YOUR AUDIENCE. YOUR PROFIT.
                                    </motion.p>
                                    <motion.h1 
                                        className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-semibold leading-tight px-2 sm:px-4 lg:px-6"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                                    >
                                        DARE TO EARN.
                                        <br />
                                        GET AFFILIATE ACCESS.
                                    </motion.h1>
                                    <motion.p 
                                        className="text-xs sm:text-sm lg:text-base xl:text-lg 2xl:text-xl text-gray-300 leading-relaxed max-w-sm sm:max-w-lg xl:max-w-xl mx-auto lg:mx-0 px-2 sm:px-4 lg:px-6"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                                    >
                                        It's time to make your streams Thrilling - join the best casino affiliate program built around creators.
                                    </motion.p>
                                </div>
                            </div>

                            {/* Right side - CTA and navigation */}
                            <div className="flex flex-col justify-center items-center h-full px-3 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 xl:py-12">
                                <div className="w-full max-w-md sm:max-w-lg space-y-4 sm:space-y-6 lg:space-y-8 xl:space-y-12">
                                    
                                    {/* Main CTA Button */}
                                    <motion.div
                                        className="text-center"
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                                        transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                                    >
                                        <Button
                                            variant="ghost"
                                            onClick={handleAffiliateClick}
                                            className="w-full text-[#5CFFC1] text-base sm:text-lg lg:text-xl font-extrabold hover:text-[#5CFFC1]/70 px-4 sm:px-6 lg:px-8 py-3 sm:py-4 min-h-[50px] sm:min-h-[60px] group transition-all duration-300 hover:scale-[1.02] border border-[#5CFFC1]/20 hover:border-[#5CFFC1]/40 rounded-lg sm:rounded-xl"
                                            rightIcon={
                                                <ChevronRight
                                                    className="text-[#5CFFC1] group-hover:text-[#5CFFC1]/70 group-hover:translate-x-1 transition-all duration-300"
                                                    strokeWidth="2.5"
                                                    size={18}
                                                />
                                            }
                                        >
                                            Become an Affiliate
                                        </Button>
                                    </motion.div>

                                    {/* Navigation Links */}
                                    <motion.div
                                        className="space-y-4 sm:space-y-6"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                        transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
                                    >
                                        <div className="text-center">
                                            <h3 className="text-white/70 text-xs sm:text-sm font-medium mb-3 sm:mb-4">Quick Access</h3>
                                            <div className="grid grid-cols-2 gap-2 sm:gap-3">
                                                {navigationLinks.map((link, index) => (
                                                    <motion.a
                                                        key={link.name}
                                                        href={link.url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center justify-center gap-1 sm:gap-2 text-white/80 hover:text-[#5CFFC1] transition-all duration-200 text-xs sm:text-sm font-medium py-2 sm:py-3 px-3 sm:px-4 rounded-md sm:rounded-lg hover:bg-white/5 group"
                                                        initial={{ opacity: 0, y: 10 }}
                                                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                                                        transition={{ duration: 0.4, delay: 0.8 + (index * 0.1), ease: "easeOut" }}
                                                    >
                                                        {link.name}
                                                        <ExternalLink size={12} className="group-hover:scale-110 transition-transform duration-200" />
                                                    </motion.a>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>

                                    {/* Footer section */}
                                    <motion.div
                                        className="text-center space-y-2 sm:space-y-3 pt-3 sm:pt-4 border-t border-white/10"
                                        initial={{ opacity: 0 }}
                                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                                        transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
                                    >
                                        <div className="flex justify-center gap-4 sm:gap-6 text-xs sm:text-sm">
                                            {footerLinks.map((link) => (
                                                <a
                                                    key={link.name}
                                                    href={link.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-white/50 hover:text-white/80 transition-colors duration-200"
                                                >
                                                    {link.name}
                                                </a>
                                            ))}
                                        </div>
                                        <a
                                            href="mailto:team@thrillaffiliates.com"
                                            className="text-white/50 hover:text-[#5CFFC1] transition-colors duration-200 text-xs sm:text-sm font-medium inline-block"
                                        >
                                            team@thrillaffiliates.com
                                        </a>
                                    </motion.div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

export default AffiliateSignupSection