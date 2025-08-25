"use client"
import React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../lib/utils"
import { Loader2 } from "lucide-react"
import { motion, type HTMLMotionProps } from "framer-motion"

// CVA Button Variants
const buttonVariants = cva(
  "inline-flex items-center justify-center uppercase font-600 whitespace-nowrap transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden",
  {
    variants: {
      variant: {
        primary: "bg-accent-green_light text-primary-50 shadow-primary-glow rounded-2xl",
        secondary: "bg-accent-social text-neutral-white font-semibold rounded-2xl",
        select: "bg-accent-green/10 text-accent-green_light font-740 rounded-2xl leading-tight",
        ghost:
          "bg-transparent text-neutral-white font-medium hover:bg-primary-300 rounded-2xl transition-colors duration-500",
        link: "text-neutral-lightGray underline underline-offset-3 p-0 h-auto font-normal normal-case tracking-normal",
      },
      size: {
        sm: "text-lg px-2 py-1 min-h-[30px] sm:text-md sm:px-3 sm:py-1 sm:min-h-[34px]",
        default: "text-xl min-h-[40px] font-740 sm:text-md sm:min-h-[50px] w-[113px]",
        lg: "text-md px-4 py-2.5 min-h-[44px] sm:text-xl font-740 sm:px-6 sm:py-3 sm:min-h-[52px]",
        xl: "text-md px-5 py-3 min-h-[50px] sm:text-lg sm:px-8 sm:py-4 sm:min-h-[60px]",
        icon: "p-1.5 h-8 w-8 sm:p-2 sm:h-10 sm:w-10",
        "icon-sm": "p-1 h-6 w-6 sm:p-1.5 sm:h-8 sm:w-8",
        "icon-lg": "p-2 h-10 w-10 sm:p-3 sm:h-12 sm:w-12",
      },
      fullWidth: {
        true: "w-full",
        false: "w-auto",
      },
      rounded: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full",
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

// Simple button animations - only hover and tap

// Button Component
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size,
      fullWidth,
      rounded,
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
          buttonVariants({ variant, size, fullWidth, rounded }),
          "flex items-center justify-center",
          className,
        )}
        ref={ref}
        disabled={isDisabled}
        {...props}
      >
        {/* Loading state */}
        {loading && (
          <div className="mr-2 flex">
            <Loader2 className="h-4 w-4 animate-spin" />
          </div>
        )}

        {/* Left icon */}
        {!loading && leftIcon && <span className="mr-2 flex items-center">{leftIcon}</span>}

        {/* Button content */}
        <span className="flex items-center justify-center relative z-10">{children}</span>

        {/* Right icon */}
        {!loading && rightIcon && <span className="ml-2 flex items-center">{rightIcon}</span>}
      </motion.button>
    )
  },
)

Button.displayName = "Button"

export { Button, buttonVariants }
