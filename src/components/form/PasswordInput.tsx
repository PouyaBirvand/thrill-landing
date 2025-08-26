"use client"

import type React from "react"
import { useState, forwardRef } from "react"
import { Eye, EyeOff } from "lucide-react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const passwordInputVariants = cva("w-full bg-transparent outline-none border-none text-base pr-12", {
  variants: {
    variant: {
      default: "text-white placeholder-gray-400",
      light: "text-gray-900 placeholder-gray-500",
    },
    size: {
      default: "h-14 px-6 text-base",
      sm: "h-12 px-4 text-sm",
      lg: "h-16 px-8 text-lg",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
})

interface FigmaPasswordInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "type">,
    VariantProps<typeof passwordInputVariants> {
  label?: string
  error?: string
}

const FigmaPasswordInput = forwardRef<HTMLInputElement, FigmaPasswordInputProps>(
  ({ className, variant, size, label, error, ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false)
    const [showPassword, setShowPassword] = useState(false)

    return (
      <div className="relative w-full">
        <div className={cn("relative", size === "sm" ? "h-12" : size === "lg" ? "h-16" : "h-14")}>
          {/* Animated gradient border */}
          <div
            className={`absolute inset-0 rounded-full transition-all duration-300 ease-in-out ${
              isFocused ? "opacity-100" : "opacity-0"
            }`}
            style={{
              background: "linear-gradient(277.31deg, rgba(50, 50, 122, 0.21) 10.26%, #5CFFC1 43.19%)",
              padding: "3px",
              borderRadius: "9999px",
            }}
          >
            <div className="w-full h-full bg-gray-900 rounded-full" />
          </div>

          {/* Blurred gradient overlay */}
          <div
            className={`absolute inset-0 rounded-full transition-all duration-300 ease-in-out ${
              isFocused ? "opacity-100" : "opacity-0"
            }`}
            style={{
              background: "linear-gradient(277.31deg, rgba(50, 50, 122, 0.21) 10.26%, #5CFFC1 43.19%)",
              padding: "3px",
              borderRadius: "9999px",
              zIndex: 5,
              maskImage: "linear-gradient(270deg, white 0%, white 30%, transparent 70%)",
              WebkitMaskImage: "linear-gradient(270deg, white 0%, white 30%, transparent 50%)",
              filter: "blur(3px)",
            }}
          >
            <div className="w-full h-full bg-gray-900 rounded-full" />
          </div>

          {/* Static border */}
          <div
            className={`absolute inset-0 rounded-full border-3 transition-all duration-300 ease-in-out ${
              isFocused ? "opacity-0" : "opacity-100"
            } ${error ? "border-red-500/50" : ""}`}
            style={{
              borderColor: error ? "rgba(239, 68, 68, 0.5)" : "rgba(159, 171, 199, 0.5)",
            }}
          />

          {/* Input container */}
          <div className="relative flex items-center h-full rounded-full z-20">
            <input
              type={showPassword ? "text" : "password"}
              ref={ref}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              className={cn(passwordInputVariants({ variant, size, className }))}
              style={{ fontFamily: "inherit" }}
              {...props}
            />

            {/* Toggle password visibility button */}
            <div className="absolute right-0 top-0 h-full flex items-center justify-center w-12 z-30">
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-gray-400 hover:text-teal-400 transition-colors duration-200 p-1"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>
        </div>

        {error && <p className="mt-2 text-sm text-red-400 px-6">{error}</p>}
      </div>
    )
  },
)

FigmaPasswordInput.displayName = "FigmaPasswordInput"

export { FigmaPasswordInput, passwordInputVariants }
