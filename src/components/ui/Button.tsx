"use client"
import React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../lib/utils"
import { Loader2 } from "lucide-react"
import { motion, type HTMLMotionProps } from "framer-motion"

// CVA Button Variants
const buttonVariants = cva(
  // Base styles - fixed text alignment and spacing issues
  "inline-flex items-center justify-center uppercase font-600 whitespace-nowrap transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden",
  {
    variants: {
      variant: {
        primary: "bg-accent-green_light text-primary-50 shadow-primary-glow rounded-2xl",
        secondary: "bg-accent-social text-neutral-white font-semibold rounded-2xl",
        select: "bg-accent-green/10 text-accent-green_light font-740 rounded-2xl leading-tight",
        ghost: "bg-transparent text-neutral-white font-medium rounded-2xl",
        link: "text-neutral-lightGray underline underline-offset-3 p-0 h-auto font-normal normal-case tracking-normal",
      },
      size: {
        sm: "text-md px-3 py-1 min-h-[34px]", // Fixed height and better vertical alignment
        default: "text-md px-5 py-2.5 font-bold min-h-[45px] font-740",
        lg: "text-lg px-6 py-3 min-h-[52px] font-extrabold",
        xl: "text-lg px-8 py-4 min-h-[60px]",
        icon: "p-2 h-10 w-10",
        "icon-sm": "p-1.5 h-8 w-8",
        "icon-lg": "p-3 h-12 w-12",
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
}

// Advanced button animations
const buttonAnimations = {
  primary: {
    whileHover: {
      scale: 1.05,
      boxShadow: "0 0 25px rgba(34, 197, 94, 0.4)",
      transition: { duration: 0.2 },
    },
    whileTap: {
      scale: 0.98,
      transition: { duration: 0.1 },
    },
  },
  secondary: {
    whileHover: {
      scale: 1.05,
      y: -2,
      transition: { duration: 0.2 },
    },
    whileTap: {
      scale: 0.98,
      y: 0,
      transition: { duration: 0.1 },
    },
  },
  select: {
    whileHover: {
      scale: 1.03,
      backgroundColor: "rgba(34, 197, 94, 0.15)",
      transition: { duration: 0.2 },
    },
    whileTap: {
      scale: 0.97,
      transition: { duration: 0.1 },
    },
  },
  ghost: {
    whileHover: {
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      scale: 1.02,
      transition: { duration: 0.2 },
    },
    whileTap: {
      scale: 0.98,
      transition: { duration: 0.1 },
    },
  },
  link: {
    whileHover: {
      x: 5,
      transition: { duration: 0.2 },
    },
    whileTap: {
      x: 0,
      transition: { duration: 0.1 },
    },
  },
}

// Shimmer effect component
const ShimmerEffect = () => (
  <motion.div
    className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent"
    initial={{ x: "-100%" }}
    animate={{ x: "200%" }}
    transition={{
      duration: 1.5,
      repeat: Number.POSITIVE_INFINITY,
      repeatDelay: 2,
      ease: "linear",
    }}
  />
)

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
    const animations = variant ? buttonAnimations[variant] : buttonAnimations.primary

    return (
      <motion.button
        className={cn(
          buttonVariants({ variant, size, fullWidth, rounded }),
          "flex items-center justify-center", // Ensure perfect centering
          variant === "ghost" && "bg-transparent hover:bg-transparent",
          variant === "select" && "bg-transparent hover:bg-transparent",
          className,
        )}
        ref={ref}
        disabled={isDisabled}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        {...animations}
        {...props}
      >
        {/* Shimmer effect for primary buttons */}
        {variant === "primary" && !loading && <ShimmerEffect />}

        {/* Loading state */}
        {loading && (
          <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} className="mr-2 flex">
            <Loader2 className="h-4 w-4 animate-spin" />
          </motion.div>
        )}

        {/* Left icon */}
        {!loading && leftIcon && (
          <motion.span
            className="mr-2 flex items-center"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            {leftIcon}
          </motion.span>
        )}

        {/* Button content */}
        <motion.span
          className="flex items-center justify-center relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {children}
        </motion.span>

        {/* Right icon */}
        {!loading && rightIcon && (
          <motion.span
            className="ml-2 flex items-center"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            {rightIcon}
          </motion.span>
        )}
      </motion.button>
    )
  },
)

Button.displayName = "Button"

export { Button, buttonVariants }
