"use client"
import React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../lib/utils"
import { Loader2 } from "lucide-react"
import { motion, type HTMLMotionProps } from "framer-motion"

// CVA Button Variants
const buttonVariants = cva(
  "inline-flex items-center justify-center uppercase font-600 whitespace-nowrap transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden rounded-full",
  {
    variants: {
      variant: {
        primary: "bg-accent-green_light text-primary-50 shadow-primary-glow rounded-2xl",
        secondary: "bg-accent-social text-neutral-white font-semibold rounded-2xl",
        select: "bg-accent-green/10 text-accent-green_light font-740 rounded-2xl leading-none",
        ghost:
          "bg-transparent text-neutral-white font-medium transition-colors duration-500",
        link: "text-neutral-lightGray underline underline-offset-3 p-0 h-auto font-normal normal-case tracking-normal",
      },
      size: {
        sm: "text-lg px-6 scale-100 py-3 sm:text-md sm:px-3 sm:py-1 sm:h-[34px] leading-none",
        default: "text-xl h-[40px] font-740 sm:text-md sm:h-[50px] w-[113px] leading-none",
        lg: "text-md px-4 py-2.5 h-[44px] sm:text-xl font-740 sm:px-6 sm:py-3 sm:h-[52px] leading-none",
        xl: "text-md px-5 py-3 h-[50px] sm:text-lg sm:px-8 sm:py-4 sm:h-[60px] leading-none",
        icon: "p-1.5 h-8 w-8 sm:p-2 sm:h-10 sm:w-10 leading-none",
        "icon-sm": "p-1 h-6 w-6 sm:p-1.5 sm:h-8 sm:w-8 leading-none",
        "icon-lg": "p-2 h-10 w-10 sm:p-3 sm:h-12 sm:w-12 leading-none",
      },
      fullWidth: {
        true: "w-full",
        false: "w-auto",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
)

// Button Props Interface
export interface ButtonProps extends Omit<HTMLMotionProps<"button">, "size">, VariantProps<typeof buttonVariants> {
  asChild?: boolean
  loading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  children: React.ReactNode
}

// Button Component
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size,
      fullWidth,
      loading = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      ...props
    },
    ref,
  ) => {
    const isDisabled = disabled || loading

    return (
      <motion.button
        className={cn(
          buttonVariants({ variant, size, fullWidth }),
          "flex items-center justify-center",
          className,
        )}
        ref={ref}
        disabled={isDisabled}
        {...props}
      >
        {/* Loading state */}
        {loading && (
          <div className="flex items-center justify-center">
            <Loader2 className="h-4 w-4 animate-spin mr-2" />
          </div>
        )}

        {/* Left icon */}
        {!loading && leftIcon && (
          <span className="flex items-center justify-center mr-2">{leftIcon}</span>
        )}

        {/* Button content - اصلی‌ترین بخش برای تراز کردن متن */}
        <span className="flex items-center justify-center leading-none relative z-10">
          {children}
        </span>

        {/* Right icon */}
        {!loading && rightIcon && (
          <span className="flex items-center justify-center ml-2">{rightIcon}</span>
        )}
      </motion.button>
    )
  },
)

Button.displayName = "Button"

export { Button, buttonVariants }