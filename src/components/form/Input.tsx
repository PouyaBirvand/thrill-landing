"use client"

import type React from "react"
import { useState, forwardRef } from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const inputVariants = cva("w-full bg-transparent outline-none border-none text-base font-400", {
  variants: {
    variant: {
      default: "text-white placeholder-white/50 focus:placeholder-white ",
      light: "text-gray-900 placeholder-white/50",
    },
    size: {
      default: "text-base font-400",
      sm: "text-sm",
      lg: "text-lg",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
})

interface FigmaInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputVariants> {
  rightIcon?: React.ReactNode
}

const FigmaInput = forwardRef<HTMLInputElement, FigmaInputProps>(
  ({ className, variant, size, rightIcon, ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false)

    return (
      <div className="relative w-full h-14">
        {/* Main gradient border */}
        <div
          className={`absolute inset-0 rounded-full transition-opacity duration-500 ease-in-out  ${
            isFocused ? "opacity-100 " : "opacity-0"
          }`}
          style={{
            background: "linear-gradient(277.31deg, rgba(50, 50, 122, 0.21) 10.26%, #6ef0de 43.19%)",
            padding: "3px",
            borderRadius: "9999px",
          }}
        >
          <div className="w-full h-full bg-[#1c202b] rounded-full" />
        </div>

        <div
          className={`absolute inset-0 rounded-full transition-opacity duration-500 ease-in-out ${
            isFocused ? "opacity-100" : "opacity-0"
          }`}
          style={{
            background: "linear-gradient(277.31deg, rgba(50, 50, 122, 0.21) 10.26%, #6ef0de 43.19%)",
            padding: "3px",
            borderRadius: "9999px",
            zIndex: 5,
            maskImage: "linear-gradient(270deg, white 0%, white 30%, transparent 70%)",
            WebkitMaskImage: "linear-gradient(270deg, white 0%, white 30%, transparent 70%)",
            filter: "blur(3px)",
          }}
        >
          <div className="w-full h-full bg-gray-900 rounded-full" />
        </div>

        <div
          className={`absolute inset-0 rounded-full border transition-opacity duration-500 ease-in-out ${isFocused ? "opacity-0" : "opacity-100"}`}
          style={{
            borderColor: "rgba(159, 171, 199, 0.5)",
          }}
        />

        {/* Input Container */}
        <div className="relative flex items-center h-full px-6 rounded-full z-20 bg-[#F8F8F805]">
          <div
            className={`absolute w-full right-0 bg-transparent h-10 top-0 -translate-y-1/2 backdrop-blur-sm transition-opacity duration-500 ease-in-out ${
              isFocused ? "opacity-100" : "opacity-0"
            }`}
            style={{
              mask: "linear-gradient(to left, green 65%, transparent)",
            }}
          />
          <input
            ref={ref}
            className={cn(inputVariants({ variant, size, className }))}
            style={{
              fontFamily: "inherit",
            }}
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck="false"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            {...props}
          />
          {rightIcon && <div className="absolute right-4 top-1/2 transform -translate-y-1/2">{rightIcon}</div>}
        </div>
      </div>
    )
  },
)

FigmaInput.displayName = "FigmaInput"

export { FigmaInput, inputVariants }
export type { FigmaInputProps }
