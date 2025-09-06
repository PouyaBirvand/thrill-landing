"use client"
import React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../lib/utils"
import { Loader2 } from "lucide-react"
import { motion, type HTMLMotionProps } from "framer-motion"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full uppercase font-600 whitespace-nowrap transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden",
  {
    variants: {
      variant: {
        primary: "bg-accent-green_light text-primary-50 shadow-primary-glow",
        secondary: "bg-accent-social text-neutral-white font-semibold",
        select: "bg-accent-green/10 text-accent-green_light font-740",
        ghost: "bg-transparent text-neutral-white font-medium transition-colors duration-500 hover:text-accent-green_light",
        link: "text-neutral-lightGray font-normal normal-case tracking-normal",
      },
      size: {
        sm: "text-lg px-6 py-3 leading-[1] sm:text-md sm:px-3 sm:py-1 sm:h-[34px]",
        default: "text-xl h-[40px] font-740 sm:text-md sm:h-[50px] w-[113px] leading-[1]",
        lg: "text-md px-4 py-2.5 h-[44px] sm:text-xl font-740 sm:px-6 sm:py-3 sm:h-[52px] leading-[1]",
        xl: "text-md px-5 py-3 h-[50px] sm:text-lg sm:px-8 sm:py-4 sm:h-[60px] leading-[1]",
        icon: "p-1.5 h-8 w-8 sm:p-2 sm:h-10 sm:w-10",
        "icon-sm": "p-1 h-6 w-6 sm:p-1.5 sm:h-8 sm:w-8",
        "icon-lg": "p-2 h-10 w-10 sm:p-3 sm:h-12 sm:w-12",
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

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size,
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
          buttonVariants({ variant, size }),
          "flex items-center justify-center text-center",
          "[&>*]:flex [&>*]:items-center [&>*]:justify-center",
          className,
        )}
        ref={ref}
        disabled={isDisabled}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
        }}
        {...props}
      >
        {/* Loading state */}
        {loading && (
          <Loader2 className="h-4 w-4 animate-spin mr-2 flex-shrink-0" />
        )}

        {/* Left icon */}
        {!loading && leftIcon && (
          <span className="flex items-center justify-center mr-2 flex-shrink-0">
            {leftIcon}
          </span>
        )}

        <span className="relative top-[0.08rem]">
        {children}
        </span>

        {/* Right icon */}
        {!loading && rightIcon && (
          <span className="flex items-center justify-center ml-2 flex-shrink-0">
            {rightIcon}
          </span>
        )}
      </motion.button>
    )
  },
)

Button.displayName = "Button"

export { Button, buttonVariants }