"use client"
import { motion, useInView } from "framer-motion"
import { useState, useRef } from "react"
import { ChevronRight, Eye, EyeOff, Plus } from "lucide-react"
import AccurateToggleSwitch from "@/components/ui/ToggleSwitch"
import { FigmaInput } from "@/components/form/Input"
import { Button } from "@/components/ui/Button"

interface FormData {
    email: string
    password: string
    passwordConfirmation: string
    authCode: string
    companyName: string
    nickname: string
    fullName: string
    address: string
    phoneNumber: string
    receiveNewsletters: boolean
    acceptTerms: boolean
}

const AffiliateSignupForm = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.3 })
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [showAuthCode, setShowAuthCode] = useState(false)
    const [activeTab, setActiveTab] = useState("signup")

    const [formData, setFormData] = useState<FormData>({
        email: "",
        password: "",
        passwordConfirmation: "",
        authCode: "",
        companyName: "",
        nickname: "",
        fullName: "",
        address: "",
        phoneNumber: "",
        receiveNewsletters: false,
        acceptTerms: false,
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }))
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log("Form submitted:", formData)
    }

    const handleToggleChange = (isOn: boolean) => {
        setActiveTab(isOn ? "login" : "signup")
    }

    const formVariants = {
        initial: { opacity: 0, scale: 0.95 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.95 },
    }

    return (
        <section
            id="signin"
            className="min-h-[600px] relative pt-48 sm:min-h-[700px] lg:min-h-screen flex items-center justify-center py-8 sm:py-12 lg:pt-[8rem] lg:pb-12"
            ref={ref}
        >
            <motion.div
                className="h-[20rem] w-[20rem] sm:h-[25rem] sm:w-[25rem] lg:h-[30rem] lg:w-[30rem] left-[-8%] sm:left-[-12%] lg:left-[-2%] top-[25%] sm:top-[30%] lg:top-[35%] rounded-full bg-[#363a4e] blur-2xl z-[0] bg-opacity-90 absolute"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
            />

            <motion.div
                className="h-[20rem] w-[20rem] sm:h-[25rem] sm:w-[25rem] lg:h-[30rem] lg:w-[30rem] right-[-8%] sm:right-[-12%] lg:right-[-2%] top-[25%] sm:top-[30%] lg:top-[35%] rounded-full bg-[#363a4e] blur-2xl z-[0] bg-opacity-90 absolute"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
            />
            {/* Single animation block for entire registration section */}
            <motion.div
                className="w-full max-w-[1440px] mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div className="relative w-full h-full">
                    {/* Subtle background glow with delay */}
                    <motion.div
                        className="absolute inset-0 bg-gradient-radial from-accent-green_light/5 via-transparent to-transparent opacity-0 rounded-3xl"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                    />
                    
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
                    <div className="relative w-full h-full rounded-xl sm:rounded-2xl lg:rounded-3xl bg-[linear-gradient(36.25deg,#1B2D33_13.55%,#181A26_84.75%)] overflow-hidden">
                        <div className="grid lg:grid-cols-2 items-stretch min-h-[600px] sm:min-h-[700px] lg:min-h-[886px]">
                            {/* Left side - Text content without individual animations */}
                            <div
                                className="text-white space-y-6 items-center relative bg-cover bg-center bg-no-repeat h-full min-h-[300px] sm:min-h-[430px] lg:min-h-[886px] flex flex-col justify-center px-4 sm:px-6 lg:px-8 xl:px-12"
                                style={{ backgroundImage: "url(/formbg.png)" }}
                            >
                                <div className="absolute inset-0 bg-black/10"></div>
                                <div className="relative z-10 space-y-4 sm:space-y-6 text-center lg:text-left max-w-2xl mx-auto">
                                    <p className="text-accent-green_light font-medium tracking-wide uppercase text-xs sm:text-sm lg:text-base px-4 sm:px-6">
                                        YOUR AUDIENCE. YOUR PROFIT.
                                    </p>
                                    <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold leading-tight px-4 sm:px-6">
                                        DARE TO EARN.
                                        <br />
                                        GET AFFILIATE ACCESS.
                                    </h1>
                                    <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-300 leading-relaxed max-w-lg sm:max-w-xl mx-auto lg:mx-0 px-4 sm:px-6">
                                        It's time to make your streams Thrilling - join the best casino affiliate program built around creators.
                                    </p>
                                </div>
                            </div>
                            
                            {/* Right side - Form content */}
                            <div className="flex items-center justify-center h-full px-4 sm:px-6 lg:px-8">
                                <div className="w-full max-w-md sm:max-w-lg px-4 py-6 sm:py-8 lg:py-12">
                                    <div className="flex flex-col h-auto lg:h-[880px] justify-between">
                                        {/* Toggle section */}
                                        <div className="flex items-center justify-between text-white/50 sticky top-0 z-10 pb-8 sm:pb-10 lg:pb-14 pt-2">
                                            <Plus color="rgba(255, 255, 255, 0.15)" size="16" className="hidden xl:block" />
                                            <div className="flex items-center justify-center sm:mx-auto gap-2 sm:gap-3">
                                                <p className="text-sm lg:text-base">Sign Up</p>
                                                <AccurateToggleSwitch onToggle={handleToggleChange} />
                                                <p className="text-sm lg:text-base">Log In</p>
                                            </div>
                                            <Plus color="rgba(255, 255, 255, 0.15)" size="16" className="hidden xl:block" />
                                        </div>
                                        
                                        {/* Form section */}
                                        <div className="flex-1 flex items-start lg:items-center justify-center overflow-hidden">
                                            <motion.div
                                                className="w-full h-auto lg:h-full flex items-start lg:items-center"
                                                key={activeTab}
                                                variants={formVariants}
                                                initial="initial"
                                                animate="animate"
                                                exit="exit"
                                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                            >
                                                {activeTab === "signup" ? (
                                                    <div className="space-y-2 sm:space-y-3 w-full flex flex-col justify-center h-auto lg:h-full">
                                                        <div>
                                                            <FigmaInput
                                                                type="email"
                                                                name="email"
                                                                placeholder="Email"
                                                                value={formData.email}
                                                                onChange={handleInputChange}
                                                                required
                                                            />
                                                        </div>
                                                        <div>
                                                            <FigmaInput
                                                                type={showPassword ? "text" : "password"}
                                                                name="password"
                                                                placeholder="Password"
                                                                value={formData.password}
                                                                onChange={handleInputChange}
                                                                rightIcon={
                                                                    <button
                                                                        type="button"
                                                                        onClick={() => setShowPassword(!showPassword)}
                                                                        className="text-gray-400 mt-1 sm:mt-2 hover:text-teal-400 transition-colors duration-200"
                                                                    >
                                                                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                                                    </button>
                                                                }
                                                                required
                                                            />
                                                        </div>
                                                        <div>
                                                            <FigmaInput
                                                                type={showConfirmPassword ? "text" : "password"}
                                                                name="passwordConfirmation"
                                                                placeholder="Password confirmation"
                                                                value={formData.passwordConfirmation}
                                                                onChange={handleInputChange}
                                                                rightIcon={
                                                                    <button
                                                                        type="button"
                                                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                                                        className="text-gray-400 mt-1 sm:mt-2 hover:text-teal-400 transition-colors duration-200"
                                                                    >
                                                                        {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                                                    </button>
                                                                }
                                                                required
                                                            />
                                                        </div>
                                                        <div>
                                                            <FigmaInput
                                                                type="text"
                                                                name="companyName"
                                                                placeholder="Company name"
                                                                value={formData.companyName}
                                                                onChange={handleInputChange}
                                                            />
                                                        </div>
                                                        <div>
                                                            <FigmaInput
                                                                type="text"
                                                                name="nickname"
                                                                placeholder="Nickname"
                                                                value={formData.nickname}
                                                                onChange={handleInputChange}
                                                            />
                                                        </div>
                                                        <div>
                                                            <FigmaInput
                                                                type="text"
                                                                name="fullName"
                                                                placeholder="Full name"
                                                                value={formData.fullName}
                                                                onChange={handleInputChange}
                                                            />
                                                        </div>
                                                        <div>
                                                            <FigmaInput
                                                                type="text"
                                                                name="address"
                                                                placeholder="Address"
                                                                value={formData.address}
                                                                onChange={handleInputChange}
                                                            />
                                                        </div>
                                                        <div>
                                                            <FigmaInput
                                                                type="tel"
                                                                name="phoneNumber"
                                                                placeholder="Phone number"
                                                                value={formData.phoneNumber}
                                                                onChange={handleInputChange}
                                                            />
                                                        </div>
                                                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 pt-4 sm:pt-5 ml-2 sm:ml-4">
                                                            <label className="flex items-center space-x-2 sm:space-x-3 cursor-pointer">
                                                                <div className="relative">
                                                                    <input
                                                                        type="checkbox"
                                                                        name="receiveNewsletters"
                                                                        checked={formData.receiveNewsletters}
                                                                        onChange={handleInputChange}
                                                                        className="sr-only"
                                                                    />
                                                                    <div
                                                                        className={`w-3 h-3 rounded-full border-2 transition-all duration-200 ${formData.receiveNewsletters
                                                                            ? "border-[#5CFFC1] bg-transparent"
                                                                            : "border-white/50 bg-transparent"
                                                                            }`}
                                                                    >
                                                                        {formData.receiveNewsletters && (
                                                                            <div className="w-1 h-1 bg-[#5CFFC1] rounded-full m-auto mt-0.5"></div>
                                                                        )}
                                                                    </div>
                                                                </div>
                                                                <span className="text-sm text-white/50">Receive newsletters</span>
                                                            </label>
                                                            <label className="flex items-center space-x-2 sm:space-x-3 cursor-pointer">
                                                                <div className="relative">
                                                                    <input
                                                                        type="checkbox"
                                                                        name="acceptTerms"
                                                                        checked={formData.acceptTerms}
                                                                        onChange={handleInputChange}
                                                                        className="sr-only"
                                                                        required
                                                                    />
                                                                    <div
                                                                        className={`w-3 h-3 rounded-full border-2 transition-all duration-200 ${formData.acceptTerms
                                                                            ? "border-[#5CFFC1] bg-transparent"
                                                                            : "border-white/50 bg-transparent"
                                                                            }`}
                                                                    >
                                                                        {formData.acceptTerms && (
                                                                            <div className="w-1 h-1 bg-[#5CFFC1] rounded-full m-auto mt-0.5"></div>
                                                                        )}
                                                                    </div>
                                                                </div>
                                                                <span className="text-sm text-white/50">I accept the Terms and Conditions</span>
                                                            </label>
                                                        </div>
                                                        <div className="py-6 sm:py-8 flex items-center justify-center group">
                                                            <Button
                                                                variant="ghost"
                                                                type="submit"
                                                                className="text-accent-green_light text-lg font-extrabold group-hover:text-accent-green_light/60 px-4 py-2 min-w-[180px] sm:min-w-[200px] text-center whitespace-nowrap"
                                                                rightIcon={
                                                                    <ChevronRight
                                                                        className="text-accent-green_light group-hover:text-accent-green_light/60 duration-500"
                                                                        strokeWidth="2.5"
                                                                        size={20}
                                                                    />
                                                                }
                                                            >
                                                                Sign Up
                                                            </Button>
                                                        </div>
                                                        </div>
                                                ) : (
                                                    <div className="space-y-2 sm:space-y-3 w-full flex flex-col justify-center h-auto lg:h-full">
                                                        <div>
                                                            <FigmaInput
                                                                type="email"
                                                                name="email"
                                                                placeholder="Email"
                                                                value={formData.email}
                                                                onChange={handleInputChange}
                                                                required
                                                            />
                                                        </div>
                                                        <div>
                                                            <FigmaInput
                                                                type={showPassword ? "text" : "password"}
                                                                name="password"
                                                                placeholder="Password"
                                                                value={formData.password}
                                                                onChange={handleInputChange}
                                                                rightIcon={
                                                                    <button
                                                                        type="button"
                                                                        onClick={() => setShowPassword(!showPassword)}
                                                                        className="text-gray-400 mt-1 sm:mt-2 ml-2 hover:text-teal-400 transition-colors duration-200"
                                                                    >
                                                                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                                                    </button>
                                                                }
                                                                required
                                                            />
                                                        </div>
                                                        <div>
                                                            <FigmaInput
                                                                type={showAuthCode ? "text" : "password"}
                                                                inputMode="numeric"
                                                                name="authCode"
                                                                placeholder="Two-factor authentication code"
                                                                value={formData.authCode}
                                                                onChange={handleInputChange}
                                                                rightIcon={
                                                                    <button
                                                                        type="button"
                                                                        onClick={() => setShowAuthCode(!showAuthCode)}
                                                                        className="text-gray-400 mt-1 sm:mt-2 hover:text-teal-400 transition-colors duration-200"
                                                                    >
                                                                        {showAuthCode ? <EyeOff size={18} /> : <Eye size={18} />}
                                                                    </button>
                                                                }
                                                                required
                                                            />
                                                        </div>
                                                        <div className="pt-6 sm:pt-8 flex items-center justify-center group">
                                                            <Button
                                                                variant="ghost"
                                                                type="submit"
                                                                className="text-accent-green_light text-base sm:text-lg font-extrabold group-hover:text-accent-green_light/60 px-4 py-2 min-w-[200px] sm:min-w-[240px] text-center whitespace-nowrap"
                                                                rightIcon={
                                                                    <ChevronRight
                                                                        className="text-accent-green_light group-hover:text-accent-green_light/60 duration-500"
                                                                        strokeWidth="2.5"
                                                                        size={20}
                                                                    />
                                                                }
                                                            >
                                                                Log in as affiliate
                                                            </Button>
                                                        </div>
                                                        </div>
                                                )}
                                            </motion.div>
                                        </div>
                                        
                                        {/* Footer section */}
                                        <div className="text-center pt-4 sm:pt-6">
                                            <div className="justify-center flex items-center">
                                                <Plus color="rgba(255, 255, 255, 0.15)" size="16" className="hidden xl:block" />
                                                <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-3 w-full">
                                                    {activeTab === "signup" ? (
                                                        <>
                                                            <span className="text-gray-400 text-sm">
                                                                Already have an account?
                                                            </span>
                                                            <span
                                                                onClick={() => setActiveTab("login")}
                                                                className="text-white cursor-pointer hover:text-teal-300 font-medium transition-colors text-nowrap duration-200 text-sm"
                                                            >
                                                                Log in
                                                            </span>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <span className="text-gray-400 text-xs sm:text-sm">
                                                                Reset your password or
                                                            </span>
                                                            <span
                                                                onClick={() => setActiveTab("signup")}
                                                                className="text-white cursor-pointer hover:text-teal-300 font-medium transition-colors text-nowrap duration-200 text-sm"
                                                            >
                                                                Sign up
                                                            </span>
                                                        </>
                                                    )}
                                                </div>
                                                <Plus color="rgba(255, 255, 255, 0.15)" size="16" className="hidden xl:block" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

export default AffiliateSignupForm