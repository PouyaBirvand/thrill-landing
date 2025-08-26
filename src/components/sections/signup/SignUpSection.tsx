"use client"
import { useState } from "react"
import { ChevronRight, Eye, EyeOff, Plus } from "lucide-react"
import AccurateToggleSwitch from "@/components/ui/ToggleSwitch"
import { FigmaInput } from "@/components/form/Input"
import { Button } from "@/components/ui/Button"

interface FormData {
    email: string
    password: string
    passwordConfirmation: string
    companyName: string
    nickname: string
    fullName: string
    address: string
    phoneNumber: string
    receiveNewsletters: boolean
    acceptTerms: boolean
}

const AffiliateSignupForm = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [activeTab, setActiveTab] = useState("signup")
    const [formData, setFormData] = useState<FormData>({
        email: "",
        password: "",
        passwordConfirmation: "",
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

    return (
        <section id="signin" className="min-h-screen flex items-center justify-center pt-48">
            <div className="w-full mx-auto">
                {/* Feature Card Style Border - Now wrapping entire section */}
                <div className="relative w-full h-full">
                    <svg
                        className="absolute inset-0 w-full h-full pointer-events-none"
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

                            <radialGradient id="glowGradient" cx="50%" cy="100%" r="60%" gradientUnits="userSpaceOnUse">
                                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.08" />
                                <stop offset="30%" stopColor="#ffffff" stopOpacity="0.04" />
                                <stop offset="60%" stopColor="#ffffff" stopOpacity="0.01" />
                                <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                            </radialGradient>
                        </defs>

                        <rect
                            x="0.75"
                            y="0.75"
                            width="488.5"
                            height="488.5"
                            rx="29"
                            ry="29"
                            fill="none"
                            stroke="url(#borderGradient)"
                            strokeWidth="2"
                            vectorEffect="non-scaling-stroke"
                            shapeRendering="geometricPrecision"
                        />

                        <rect
                            x="0.75"
                            y="0.75"
                            width="488.5"
                            height="488.5"
                            rx="29"
                            ry="29"
                            fill="none"
                            stroke="url(#borderGradient)"
                            strokeWidth="1"
                            strokeLinecap="round"
                            pathLength="100"
                            strokeDasharray="10 90"
                            strokeDashoffset="6"
                            vectorEffect="non-scaling-stroke"
                        />

                        <rect
                            x="0.75"
                            y="0.75"
                            width="488.5"
                            height="488.5"
                            rx="29"
                            ry="29"
                            fill="none"
                            stroke="url(#borderGradient)"
                            strokeWidth="0.2"
                            strokeLinecap="round"
                            pathLength="100"
                            strokeDasharray="10 90"
                            strokeDashoffset="56"
                            vectorEffect="non-scaling-stroke"
                        />

                        <rect
                            x="0.75"
                            y="0.75"
                            width="488.5"
                            height="488.5"
                            rx="29"
                            ry="29"
                            fill="none"
                            stroke="url(#borderGradient)"
                            strokeWidth="0.2"
                            strokeLinecap="round"
                            pathLength="100"
                            strokeDasharray="9 91"
                            strokeDashoffset="81"
                            vectorEffect="non-scaling-stroke"
                        />
                    </svg>

                    <div className="relative w-full h-full rounded-xl sm:rounded-2xl lg:rounded-3xl bg-[linear-gradient(36.25deg,#1B2D33_13.55%,#181A26_84.75%)] overflow-hidden">
                        <div className="grid lg:grid-cols-2 gap-0 lg:gap-8 items-center min-h-[600px]">
                            {/* Left Section */}
                            <div
                                className="text-white space-y-4 sm:space-y-6 items-center relative bg-cover bg-center bg-no-repeat h-full min-h-[300px] sm:min-h-[400px] lg:min-h-[600px] flex flex-col justify-center px-6 sm:px-8 lg:px-0 py-8 sm:py-12 lg:py-0"
                                style={{ backgroundImage: "url(/right.png)" }}
                            >
                                <div className="absolute inset-0 bg-black/20"></div>

                                <div className="relative z-10 space-y-4 sm:space-y-6 text-center lg:text-left">
                                    <p className="text-accent-green_light font-medium tracking-wide uppercase text-sm sm:text-base lg:text-sm xl:text-base px-8">
                                        YOUR AUDIENCE. YOUR PROFIT.
                                    </p>
                                    <h1 className="text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-semibold leading-tight px-8">
                                        DARE TO EARN.
                                        <br />
                                        GET AFFILIATE ACCESS.
                                    </h1>
                                </div>
                                <p className="relative z-10 text-lg sm:text-xl lg:text-lg xl:text-xl  text-gray-300 leading-relaxed max-w-xl text-center lg:text-left px-4 sm:px-8">
                                    It's time to make your streams Thrilling - join the best casino affiliate program built around
                                    creators.
                                </p>
                            </div>


                            {/* Right Section - Form */}
                            <div className="flex items-center justify-center h-full px-4 sm:px-6 lg:px-0">
                                <div className="w-full max-w-lg px-4 py-8 sm:py-12 lg:py-24">
                                    {/* Tab Toggle */}
                                    <div className="flex mb-12 sm:mb-16 lg:mb-18 items-center justify-between text-white/50">
                                        <Plus color="rgba(255, 255, 255, 0.15)" size="18" className="relative right-4 sm:right-6 hidden xl:block" />
                                        <div className="flex items-center justify-center gap-3 sm:gap-4">
                                            <p className="text-sm sm:text-base">Sign Up</p>
                                            <AccurateToggleSwitch />
                                            <p className="text-sm sm:text-base">Log In</p>
                                        </div>
                                        <Plus color="rgba(255, 255, 255, 0.15)" size="18" className="relative left-4 sm:left-6 hidden xl:block" />
                                    </div>

                                    {/* Form */}
                                    <form onSubmit={handleSubmit} className="space-y-2">
                                        {/* Email */}
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

                                        {/* Password */}
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
                                                        className="text-gray-400 mt-2 hover:text-teal-400 transition-colors duration-200"
                                                    >
                                                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                                    </button>
                                                }
                                                required
                                            />
                                        </div>

                                        {/* Password Confirmation */}
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
                                                        className="text-gray-400 hover:text-teal-400 mt-2 transition-colors duration-200"
                                                    >
                                                        {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                                    </button>
                                                }
                                                required
                                            />
                                        </div>

                                        {/* Company Name */}
                                        <div>
                                            <FigmaInput
                                                type="text"
                                                name="companyName"
                                                placeholder="Company name"
                                                value={formData.companyName}
                                                onChange={handleInputChange}
                                            />
                                        </div>

                                        {/* Nickname */}
                                        <div>
                                            <FigmaInput
                                                type="text"
                                                name="nickname"
                                                placeholder="Nickname"
                                                value={formData.nickname}
                                                onChange={handleInputChange}
                                            />
                                        </div>

                                        {/* Full Name */}
                                        <div>
                                            <FigmaInput
                                                type="text"
                                                name="fullName"
                                                placeholder="Full name"
                                                value={formData.fullName}
                                                onChange={handleInputChange}
                                            />
                                        </div>

                                        {/* Address */}
                                        <div>
                                            <FigmaInput
                                                type="text"
                                                name="address"
                                                placeholder="Address"
                                                value={formData.address}
                                                onChange={handleInputChange}
                                            />
                                        </div>

                                        {/* Phone Number */}
                                        <div>
                                            <FigmaInput
                                                type="tel"
                                                name="phoneNumber"
                                                placeholder="Phone number"
                                                value={formData.phoneNumber}
                                                onChange={handleInputChange}
                                            />
                                        </div>

                                        {/* Checkboxes */}
                                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-5 ml-2 sm:ml-6">
                                            <label className="flex items-center space-x-3 cursor-pointer">
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
                                                <span className="text-xs text-white/50">Receive newsletters</span>
                                            </label>

                                            <label className="flex items-center space-x-3 cursor-pointer">
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
                                                <span className="text-xs text-white/50">
                                                    I accept the Terms and Conditions
                                                </span>
                                            </label>
                                        </div>

                                        {/* Submit Button */}
                                        <div className="pt-6 flex items-center justify-center group">
                                            <Button
                                                variant="ghost"
                                                type="submit"
                                                className="text-accent-green_light text-lg font-extrabold group-hover:text-accent-green_light/60"
                                                rightIcon={
                                                    <ChevronRight
                                                        className="text-accent-green_light group-hover:text-accent-green_light/60 duration-500"
                                                        strokeWidth="2.5"
                                                    />
                                                }
                                            >
                                                Sign Up
                                            </Button>
                                        </div>

                                        {/* Login Link */}
                                        <div className="text-center pt-4">
                                            <div className="justify-center flex items-center">
                                                <Plus color="rgba(255, 255, 255, 0.15)" size="18" className="relative right-4 sm:right-6 hidden xl:block" />
                                                <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-4 w-full">
                                                    <span className="text-gray-400 text-sm sm:text-base">Already have an account? </span>
                                                    <span
                                                        onClick={() => setActiveTab("login")}
                                                        className="text-white cursor-pointer hover:text-teal-300 font-medium transition-colors text-nowrap duration-200 text-sm sm:text-base"
                                                    >
                                                        Log in
                                                    </span>
                                                </div>
                                                <Plus color="rgba(255, 255, 255, 0.15)" size="18" className="relative left-4 sm:left-6 hidden xl:block" />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AffiliateSignupForm