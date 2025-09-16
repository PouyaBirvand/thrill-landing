/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: ["bg-gray-400"],
  theme: {
    extend: {
      // Design System Fonts
      // fontFamily: {
      //   inter: ["var(--font-inter)", "system-ui", "sans-serif"],
      //   playfair: ["var(--font-playfair)", "Georgia", "serif"],
      //   montserrat: ["var(--font-montserrat)", "system-ui", "sans-serif"],
      // },

      // Brand Color System
      colors: {
        primary: {
          50: "#1B1D29", 
          100: "#141923", 
          200: "#1B2230", 
          300: "#232B3C", 
          400: "#2A3349", 
          500: "#314054",
          600: "#3B4A61",
          700: "#46546E", 
          800: "#55607F", 
          900: "#6A728F",
        },

        button: {
          sm: "0.375rem 0.75rem",  // px-3 py-1.5
          md: "0.625rem 1.25rem", // px-5 py-2.5
          lg: "0.75rem 1.5rem",   // px-6 py-3
          xl: "1rem 2rem",        // px-8 py-4
        },

        // Accent / Highlights
        accent: {
          green: "#5CFFC11A",
          green_light: "#5CFFC1",
          teal: "#223438",
          social: "#292e3a",
        },

        // Semantic Colors
        success: {
          50: "#E0FFF7",
          500: "#00FFA3",
          600: "#00CC85",
        },
        warning: {
          50: "#FFF8E0",
          500: "#FFD700",
          600: "#CCAC00",
        },
        error: {
          50: "#FFE0E0",
          500: "#FF4D4D",
          600: "#CC3A3A",
        },
        info: {
          50: "#E0F0FF",
          500: "#3B82F6",
          600: "#2563EB",
        },

        // Neutral / Misc
        neutral: {
          white: "#FFFFFF",
          black: "#000000",
          lightGray: "#babec1", 
        },
      },

      backgroundColor: {
        body: "#1b1d29",
      },

      // Responsive Spacing System
      spacing: {
        xs: "0.25rem", // 4px
        sm: "0.5rem", // 8px
        md: "1rem", // 16px
        lg: "1.5rem", // 24px
        xl: "2rem", // 32px
        "2xl": "3rem", // 48px
        "3xl": "4rem", // 64px
        "4xl": "6rem", // 96px
        "5xl": "8rem", // 128px
        // Custom spacing
        18: "4.5rem",
        88: "22rem",
        128: "32rem",
        144: "36rem",
      },

      // Container Configuration
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "1.5rem",
          md: "2rem",
          lg: "2.5rem",
          xl: "3rem",
        },
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1600px",
        },
      },

      // Typography Scale


      // Animation System
      animation: {
        // Entrance animations
        "fade-in": "fadeIn 0.3s ease-out",
        "fade-in-up": "fadeInUp 0.4s ease-out",
        "fade-in-down": "fadeInDown 0.4s ease-out",
        "slide-in-right": "slideInRight 0.4s ease-out",
        "slide-in-left": "slideInLeft 0.4s ease-out",
        "scale-in": "scaleIn 0.2s ease-out",
        "zoom-in": "zoomIn 0.3s ease-out",

        // Continuous animations
        "bounce-gentle": "bounceGentle 2s ease-in-out infinite",
        "pulse-slow": "pulse 3s ease-in-out infinite",
        float: "float 4s ease-in-out infinite",
        marquee: "marquee 30s linear infinite",

        // Interactive animations
        shake: "shake 0.5s ease-in-out",
        wiggle: "wiggle 0.5s ease-in-out",
      },

      // Keyframe Definitions
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInDown: {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        zoomIn: {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        bounceGentle: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        shake: {
          "0%, 100%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(-5px)" },
          "75%": { transform: "translateX(5px)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(-3deg)" },
          "75%": { transform: "rotate(3deg)" },
        },
      },

      // Shadow System
      boxShadow: {
        xs: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        sm: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
        DEFAULT:
          "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
        md: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
        lg: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
        xl: "0 25px 50px -12px rgb(0 0 0 / 0.25)",
        // Custom shadows
        'primary-glow': '0px 0px 27.6px 0px rgba(92, 255, 193, 0.42)',
        'signin-glow': '0px 0px 20px 0px rgba(92, 255, 193, 0.2)',
        'step-glow': '0px 0px 12.3px 2px #5CFFC166'
      },

      // Border Radius System
      borderRadius: {
        xs: "0.125rem",
        sm: "0.25rem",
        DEFAULT: "0.375rem",
        md: "0.5rem",
        lg: "0.75rem",
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
        // Custom radii
        luxury: "0.5rem",
      },

      // Backdrop Effects
      backdropBlur: {
        xs: "2px",
        sm: "4px",
        DEFAULT: "8px",
        md: "12px",
        lg: "16px",
        xl: "24px",
        luxury: "12px",
      },

      // Grid Systems
      gridTemplateColumns: {
        "auto-fit-xs": "repeat(auto-fit, minmax(200px, 1fr))",
        "auto-fit-sm": "repeat(auto-fit, minmax(250px, 1fr))",
        "auto-fit-md": "repeat(auto-fit, minmax(300px, 1fr))",
        "auto-fit-lg": "repeat(auto-fit, minmax(350px, 1fr))",
        "product-grid": "repeat(auto-fit, minmax(280px, 1fr))",
      },

      // Aspect Ratios
      aspectRatio: {
        product: "3/4",
        hero: "16/9",
        video: "16/9",
        square: "1/1",
        portrait: "3/4",
        landscape: "4/3",
      },

      // Z-Index Scale
      zIndex: {
        hide: "-1",
        base: "0",
        docked: "10",
        dropdown: "1000",
        sticky: "1100",
        banner: "1200",
        overlay: "1300",
        modal: "1400",
        popover: "1500",
        skipLink: "1600",
        toast: "1700",
        tooltip: "1800",
      },

      // Transitions
      transitionTimingFunction: {
        "bounce-in": "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
        "ease-in-out-back": "cubic-bezier(0.68, -0.6, 0.32, 1.6)",
      },

      // Max Width Scale
      maxWidth: {
        xs: "20rem",
        sm: "24rem",
        md: "28rem",
        lg: "32rem",
        xl: "36rem",
        "2xl": "42rem",
        "3xl": "48rem",
        "4xl": "56rem",
        "5xl": "64rem",
        "6xl": "72rem",
        "7xl": "80rem",
        "8xl": "88rem",
        "9xl": "96rem",
        "screen-sm": "640px",
        "screen-md": "768px",
        "screen-lg": "1024px",
        "screen-xl": "1280px",
        "screen-2xl": "1440px",
      },

      fontWeight: {
        740: "740",
        700: "700",
        600: "600",
        400: "400",
      },
    },
  },
  plugins: [
    // Custom Utilities Plugin
    function ({ addUtilities, addComponents, theme }) {
      // Text Utilities
      const textUtilities = {
        ".text-shadow-sm": {
          textShadow: "1px 1px 2px rgba(0, 0, 0, 0.1)",
        },
        ".text-shadow": {
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)",
        },
        ".text-shadow-lg": {
          textShadow: "4px 4px 8px rgba(0, 0, 0, 0.2)",
        },
      };

      // Glass Morphism Utilities
      const glassUtilities = {
        ".glass-light": {
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
        },
        ".glass-dark": {
          backgroundColor: "rgba(0, 0, 0, 0.3)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
        },
      };

      // Scrollbar Utilities
      const scrollbarUtilities = {
        ".scrollbar-hide": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
        ".scrollbar-thin": {
          "scrollbar-width": "thin",
          "&::-webkit-scrollbar": {
            width: "6px",
            height: "6px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: theme("colors.gray.400"),
            borderRadius: theme("borderRadius.full"),
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: theme("colors.gray.100"),
          },
        },
      };

      // Gradient Utilities
      const gradientUtilities = {
        ".gradient-gold": {
          background: "linear-gradient(135deg, #D4AF37 0%, #FFD700 100%)",
        },
        ".gradient-luxury": {
          background: "linear-gradient(135deg, #000000 0%, #434343 100%)",
        },
        ".gradient-fade": {
          background:
            "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%)",
        },
      };

      // Safe Area Utilities (for mobile)
      const safeAreaUtilities = {
        ".pb-safe": {
          paddingBottom: "env(safe-area-inset-bottom)",
        },
        ".pt-safe": {
          paddingTop: "env(safe-area-inset-top)",
        },
        ".pl-safe": {
          paddingLeft: "env(safe-area-inset-left)",
        },
        ".pr-safe": {
          paddingRight: "env(safe-area-inset-right)",
        },
      };

      // Component Classes
      const components = {
        ".btn-primary": {
          backgroundColor: theme("colors.vessel.black"),
          color: theme("colors.vessel.white"),
          padding: `${theme("spacing.3")} ${theme("spacing.6")}`,
          borderRadius: theme("borderRadius.lg"),
          fontWeight: theme("fontWeight.semibold"),
          transition: "all 0.2s ease-in-out",
          "&:hover": {
            backgroundColor: theme("colors.gray.800"),
            transform: "translateY(-1px)",
            boxShadow: theme("boxShadow.lg"),
          },
        },
        ".btn-secondary": {
          backgroundColor: "transparent",
          color: theme("colors.gray.900"),
          padding: `${theme("spacing.3")} ${theme("spacing.6")}`,
          border: `2px solid ${theme("colors.gray.300")}`,
          borderRadius: theme("borderRadius.lg"),
          fontWeight: theme("fontWeight.semibold"),
          transition: "all 0.2s ease-in-out",
          "&:hover": {
            borderColor: theme("colors.gray.900"),
            transform: "translateY(-1px)",
          },
        },
      };

      addUtilities(textUtilities);
      addUtilities(glassUtilities);
      addUtilities(scrollbarUtilities);
      addUtilities(gradientUtilities);
      addUtilities(safeAreaUtilities);
      addComponents(components);
    },
  ],
};












