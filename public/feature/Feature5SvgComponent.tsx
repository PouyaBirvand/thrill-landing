"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const Feature5SvgComponent = () => {
  const ref = useRef<SVGSVGElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  // Container variants for fade-in
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.15,
      },
    },
  };

  // Child variants for bounce effect
  const childVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: [1, 1.02, 1], // Bounce effect
      y: 5,
      x:-2,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        scale: {
          duration: 1.2,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        },
      },
    },
  };

  // Circle-specific pulsing animation
  const circlePulseVariants = {
    hidden: { scale: 1 },
    visible: {
      scale: [1, 1.08, 1],
      transition: {
        duration: 1.8,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  };

  // Dashed line chain-like animation
  const dashedLineVariants = {
    hidden: { strokeDashoffset: 12.76, opacity: 0 },
    visible: {
      strokeDashoffset: 0,
      opacity: 1,
      transition: {
        strokeDashoffset: {
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        },
        opacity: {
          duration: 0.6,
        },
      },
    },
  };

  // Corner shapes animation (appear from corners)
  const cornerShapeVariants = {
    hidden: { opacity: 0, x: -50, y: -50 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.svg
      ref={ref}
      width="490"
      height="329"
      viewBox="0 0 490 329"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      initial="hidden"
      animate={controls}
      // @ts-ignore
      variants={containerVariants}
      style={{ width: "100%", height: "auto" }}
    >
      <g clipPath="url(#clip0_490_713)">
        <motion.path 
        // @ts-ignore
          variants={cornerShapeVariants}
          d="M-121.061 83.7485V199.266C-121.061 208.435 -121.061 213.02 -119.491 216.877C-118.105 220.281 -115.861 223.269 -112.977 225.548C-109.71 228.13 -105.307 229.407 -96.5008 231.962L-96.5006 231.962L67.4454 279.515C74.1401 281.457 77.4875 282.428 80.7771 282.347C83.6883 282.276 86.5539 281.607 89.1964 280.383C92.1822 279 94.7545 276.649 99.8992 271.946L99.8994 271.945L140.567 234.767C144.645 231.038 146.685 229.174 148.147 226.948C149.443 224.975 150.401 222.8 150.983 220.512C151.64 217.931 151.64 215.168 151.64 209.641V108.481C151.64 102.958 151.64 100.197 150.984 97.6172C150.403 95.3307 149.446 93.1568 148.151 91.1845C146.691 88.9592 144.654 87.095 140.58 83.3667L140.58 83.3665L113.554 58.6341C109.946 55.3329 108.143 53.6822 106.08 52.5046C104.251 51.4602 102.277 50.6932 100.222 50.2287C97.9055 49.705 95.4606 49.705 90.5706 49.705H-87.017C-98.9334 49.705 -104.892 49.705 -109.443 52.0241C-113.447 54.064 -116.702 57.319 -118.741 61.3225C-121.061 65.874 -121.061 71.8322 -121.061 83.7485Z"
          fill="url(#paint0_linear_490_713)"
          fillOpacity="0.05"
          style={{ mixBlendMode: "luminosity" }}
        />
        <motion.path 
        // @ts-ignore
          variants={cornerShapeVariants}
          d="M-121.061 83.7485V199.266C-121.061 208.435 -121.061 213.02 -119.491 216.877C-118.105 220.281 -115.861 223.269 -112.977 225.548C-109.71 228.13 -105.307 229.407 -96.5008 231.962L-96.5006 231.962L67.4454 279.515C74.1401 281.457 77.4875 282.428 80.7771 282.347C83.6883 282.276 86.5539 281.607 89.1964 280.383C92.1822 279 94.7545 276.649 99.8992 271.946L99.8994 271.945L140.567 234.767C144.645 231.038 146.685 229.174 148.147 226.948C149.443 224.975 150.401 222.8 150.983 220.512C151.64 217.931 151.64 215.168 151.64 209.641V108.481C151.64 102.958 151.64 100.197 150.984 97.6172C150.403 95.3307 149.446 93.1568 148.151 91.1845C146.691 88.9592 144.654 87.095 140.58 83.3667L140.58 83.3665L113.554 58.6341C109.946 55.3329 108.143 53.6822 106.08 52.5046C104.251 51.4602 102.277 50.6932 100.222 50.2287C97.9055 49.705 95.4606 49.705 90.5706 49.705H-87.017C-98.9334 49.705 -104.892 49.705 -109.443 52.0241C-113.447 54.064 -116.702 57.319 -118.741 61.3225C-121.061 65.874 -121.061 71.8322 -121.061 83.7485Z"
          stroke="url(#paint1_linear_490_713)"
          strokeOpacity="0.25"
          strokeWidth="1.99474"
        />
        <motion.path 
        // @ts-ignore
          variants={cornerShapeVariants}
          d="M609.08 83.7485V199.266C609.08 208.435 609.08 213.02 607.51 216.877C606.124 220.281 603.88 223.269 600.997 225.548C597.73 228.13 593.326 229.407 584.52 231.962L584.52 231.962L420.574 279.515C413.879 281.457 410.532 282.428 407.242 282.347C404.331 282.276 401.466 281.607 398.823 280.383C395.837 279 393.265 276.649 388.12 271.946L388.12 271.945L347.453 234.767C343.374 231.038 341.335 229.174 339.873 226.948C338.577 224.975 337.618 222.8 337.036 220.512C336.38 217.931 336.38 215.168 336.38 209.641V108.481C336.38 102.958 336.38 100.197 337.035 97.6172C337.617 95.3307 338.574 93.1568 339.868 91.1845C341.329 88.9592 343.366 87.095 347.44 83.3667L347.44 83.3665L374.466 58.6341C378.073 55.3329 379.877 53.6822 381.939 52.5046C383.769 51.4602 385.743 50.6932 387.797 50.2287C390.114 49.705 392.559 49.705 397.449 49.705H575.037C586.953 49.705 592.911 49.705 597.463 52.0241C601.466 54.064 604.721 57.319 606.761 61.3225C609.08 65.874 609.08 71.8322 609.08 83.7485Z"
          fill="url(#paint2_linear_490_713)"
          fillOpacity="0.05"
          style={{ mixBlendMode: "luminosity" }}
        />
        <motion.path 
        // @ts-ignore
          variants={cornerShapeVariants}
          d="M609.08 83.7485V199.266C609.08 208.435 609.08 213.02 607.51 216.877C606.124 220.281 603.88 223.269 600.997 225.548C597.73 228.13 593.326 229.407 584.52 231.962L584.52 231.962L420.574 279.515C413.879 281.457 410.532 282.428 407.242 282.347C404.331 282.276 401.466 281.607 398.823 280.383C395.837 279 393.265 276.649 388.12 271.946L388.12 271.945L347.453 234.767C343.374 231.038 341.335 229.174 339.873 226.948C338.577 224.975 337.618 222.8 337.036 220.512C336.38 217.931 336.38 215.168 336.38 209.641V108.481C336.38 102.958 336.38 100.197 337.035 97.6172C337.617 95.3307 338.574 93.1568 339.868 91.1845C341.329 88.9592 343.366 87.095 347.44 83.3667L347.44 83.3665L374.466 58.6341C378.073 55.3329 379.877 53.6822 381.939 52.5046C383.769 51.4602 385.743 50.6932 387.797 50.2287C390.114 49.705 392.559 49.705 397.449 49.705H575.037C586.953 49.705 592.911 49.705 597.463 52.0241C601.466 54.064 604.721 57.319 606.761 61.3225C609.08 65.874 609.08 71.8322 609.08 83.7485Z"
          stroke="url(#paint3_linear_490_713)"
          strokeOpacity="0.25"
          strokeWidth="1.99474"
        />
        <mask
          id="mask0_490_713"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="14"
          y="19"
          width="462"
          height="265"
        >
          <ellipse
            cx="244.999"
            cy="151.303"
            rx="230.304"
            ry="132.297"
            fill="url(#paint4_radial_490_713)"
          />
        </mask>
        <motion.g
        // @ts-ignore
          variants={childVariants} mask="url(#mask0_490_713)">
          <motion.path 
          // @ts-ignore
            variants={dashedLineVariants}
            d="M80.8428 -7.82356L151.613 63.1045L182.742 95.5302"
            stroke="white"
            strokeOpacity="0.3"
            strokeWidth="1.29703"
            strokeDasharray="6.38 6.38"
          />
          <motion.path 
          // @ts-ignore
            variants={dashedLineVariants}
            d="M421.982 -28.0332L337.987 63.1045L306.858 95.5302"
            stroke="white"
            strokeOpacity="0.3"
            strokeWidth="1.29703"
            strokeDasharray="6.38 6.38"
          />
          <motion.path 
          // @ts-ignore
            variants={dashedLineVariants}
            d="M60.6326 337.357L149.018 248.58L180.147 216.154"
            stroke="white"
            strokeOpacity="0.3"
            strokeWidth="1.29703"
            strokeDasharray="6.38 6.38"
          />
          <motion.path 
          // @ts-ignore
            variants={dashedLineVariants}
            d="M432.491 339.783L343.175 251.174L312.047 218.748"
            stroke="white"
            strokeOpacity="0.3"
            strokeWidth="1.29703"
            strokeDasharray="6.38 6.38"
          />
          <motion.path
          // @ts-ignore
            opacity="0.5"
            d="M192.366 235.532C193.083 234.993 193.442 234.724 193.812 234.471C194.14 234.246 194.475 234.031 194.816 233.825C195.2 233.594 195.593 233.379 196.381 232.949L207.835 226.697C210.606 225.185 211.991 224.429 213.455 223.895C214.755 223.421 216.099 223.078 217.467 222.871C219.008 222.639 220.586 222.639 223.743 222.639H270.036C273.213 222.639 274.802 222.639 276.352 222.874C277.729 223.084 279.081 223.431 280.388 223.911C281.86 224.452 283.252 225.217 286.036 226.748L300.533 234.721L314.794 244.195C316.287 245.187 317.034 245.683 317.732 246.239C318.352 246.733 318.944 247.263 319.504 247.825C320.134 248.457 320.71 249.144 321.862 250.517L341.49 273.926C354.911 289.931 361.621 297.934 361.904 305.012C362.15 311.173 359.643 317.125 355.063 321.254C349.802 325.997 339.388 326.788 318.561 328.369L172.624 339.449C148.151 341.307 135.915 342.236 129.764 337.797C124.424 333.944 121.23 327.786 121.156 321.202C121.071 313.617 128.879 304.149 144.494 285.214L171.757 252.155C172.702 251.01 173.174 250.437 173.685 249.901C174.138 249.425 174.614 248.97 175.111 248.539C175.67 248.054 176.264 247.608 177.451 246.717L192.366 235.532Z"
            fill="#E1E0E0"
            fillOpacity="0.1"
            stroke="#F8F8F8"
            strokeWidth="1.94554"
          />
          <foreignObject
            x="144.279"
            y="185.084"
            width="202.738"
            height="198.644"
          >
            <div
              style={{
                backdropFilter: "blur(21.28px)",
                clipPath: "url(#bgblur_1_490_713_clip_path)",
                height: "100%",
                width: "100%",
              }}
            ></div>
          </foreignObject>
          <g filter="url(#filter0_d_490_713)" data-figma-bg-blur-radius="42.5544">
            <motion.path 
            // @ts-ignore
              variants={childVariants}
              d="M202.201 243.029L213.438 233.305C215.435 231.577 216.433 230.713 217.562 230.098C218.563 229.552 219.637 229.151 220.751 228.909C222.007 228.636 223.328 228.636 225.969 228.636H266.816C269.727 228.636 271.182 228.636 272.553 228.964C273.768 229.254 274.931 229.732 275.998 230.382C277.201 231.115 278.235 232.14 280.301 234.19L287.923 241.75L297.313 250.428C299.58 252.523 300.713 253.57 301.525 254.817C302.245 255.923 302.778 257.139 303.101 258.418C303.465 259.861 303.465 261.405 303.465 264.491V299.75C303.465 306.453 303.465 309.804 302.161 312.365C301.013 314.617 299.182 316.448 296.93 317.595C294.37 318.9 291.019 318.9 284.316 318.9H206.98C200.277 318.9 196.926 318.9 194.365 317.595C192.113 316.448 190.282 314.617 189.135 312.365C187.831 309.804 187.831 306.453 187.831 299.75V264.576C187.831 261.459 187.831 259.901 188.202 258.446C188.531 257.156 189.072 255.93 189.805 254.818C190.631 253.564 191.783 252.515 194.088 250.417L202.201 243.029Z"
              fill="#F8F8F8"
              fillOpacity="0.05"
              style={{ mixBlendMode: "luminosity" }}
              shapeRendering="crispEdges"
            />
            <motion.path 
            // @ts-ignore
              variants={childVariants}
              d="M202.201 243.029L213.438 233.305C215.435 231.577 216.433 230.713 217.562 230.098C218.563 229.552 219.637 229.151 220.751 228.909C222.007 228.636 223.328 228.636 225.969 228.636H266.816C269.727 228.636 271.182 228.636 272.553 228.964C273.768 229.254 274.931 229.732 275.998 230.382C277.201 231.115 278.235 232.14 280.301 234.19L287.923 241.75L297.313 250.428C299.58 252.523 300.713 253.57 301.525 254.817C302.245 255.923 302.778 257.139 303.101 258.418C303.465 259.861 303.465 261.405 303.465 264.491V299.75C303.465 306.453 303.465 309.804 302.161 312.365C301.013 314.617 299.182 316.448 296.93 317.595C294.37 318.9 291.019 318.9 284.316 318.9H206.98C200.277 318.9 196.926 318.9 194.365 317.595C192.113 316.448 190.282 314.617 189.135 312.365C187.831 309.804 187.831 306.453 187.831 299.75V264.576C187.831 261.459 187.831 259.901 188.202 258.446C188.531 257.156 189.072 255.93 189.805 254.818C190.631 253.564 191.783 252.515 194.088 250.417L202.201 243.029Z"
              stroke="url(#paint5_linear_490_713)"
              strokeOpacity="0.25"
              strokeWidth="1.99474"
              shapeRendering="crispEdges"
            />
          </g>
          <motion.circle 
          // @ts-ignore
            variants={{ ...childVariants, ...circlePulseVariants }}
            opacity="0.15"
            cx="245"
            cy="164.303"
            r="135.633"
            stroke="white"
            strokeOpacity="0.35"
            strokeWidth="2"
          />
          <motion.circle
          // @ts-ignore 
            variants={{ ...childVariants, ...circlePulseVariants }}
            opacity="0.15"
            cx="245"
            cy="164.303"
            r="116.555"
            stroke="white"
            strokeOpacity="0.4"
            strokeWidth="2"
          />
          {/* <motion.rect
            variants={childVariants}
            x="180.148"
            y="87.748"
            width="129.703"
            height="129.703"
            rx="20.7525"
            stroke="white"
            strokeOpacity="0.3"
            strokeWidth="1.29703"
            strokeDasharray="6.38 6.38"
          /> */}
        </motion.g>
        <rect
          x="102.114"
          y="23.534"
          width="295.772"
          height="295.772"
          fill="url(#pattern0_490_713)"
        />
        <foreignObject x="226.747" y="65.6989" width="36.3169" height="60.5281">
          <div
            style={{
              backdropFilter: "blur(5.19px)",
              clipPath: "url(#bgblur_2_490_713_clip_path)",
              height: "100%",
              width: "100%",
            }}
          ></div>
        </foreignObject>
        <g filter="url(#filter1_di_490_713)" data-figma-bg-blur-radius="10.3762">
          <motion.circle 
          // @ts-ignore
            variants={childVariants}
            cx="241.905"
            cy="64.8573"
            r="7.78218"
            fill="#F8F8F8"
            fillOpacity="0.01"
            shapeRendering="crispEdges"
          />
          <motion.circle 
          // @ts-ignore
            variants={childVariants}
            cx="241.905"
            cy="64.8573"
            r="7.78218"
            fill="#121212"
            fillOpacity="0.3"
            shapeRendering="crispEdges"
          />
          <motion.circle
          // @ts-ignore 
            variants={childVariants}
            cx="241.905"
            cy="64.8573"
            r="6.80941"
            stroke="url(#paint6_linear_490_713)"
            strokeOpacity="0.25"
            strokeWidth="1.94554"
            shapeRendering="crispEdges"
          />
        </g>
        <motion.circle 
        // @ts-ignore
          variants={childVariants}
          cx="241.907"
          cy="64.8568"
          r="3.89109"
          fill="#F8F8F8"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_490_713"
          x="144.279"
          y="185.084"
          width="202.738"
          height="198.644"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="31.9158" />
          <feGaussianBlur stdDeviation="15.9579" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
          />
          <feBlend
            mode="multiply"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_490_713"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_490_713"
            result="shape"
          />
        </filter>
        <clipPath id="bgblur_1_490_713_clip_path" transform="translate(-144.279 -185.084)">
          <path
            d="M202.201 243.029L213.438 233.305C215.435 231.577 216.433 230.713 217.562 230.098C218.563 229.552 219.637 229.151 220.751 228.909C222.007 228.636 223.328 228.636 225.969 228.636H266.816C269.727 228.636 271.182 228.636 272.553 228.964C273.768 229.254 274.931 229.732 275.998 230.382C277.201 231.115 278.235 232.14 280.301 234.19L287.923 241.75L297.313 250.428C299.58 252.523 300.713 253.57 301.525 254.817C302.245 255.923 302.778 257.139 303.101 258.418C303.465 259.861 303.465 261.405 303.465 264.491V299.75C303.465 306.453 303.465 309.804 302.161 312.365C301.013 314.617 299.182 316.448 296.93 317.595C294.37 318.9 291.019 318.9 284.316 318.9H206.98C200.277 318.9 196.926 318.9 194.365 317.595C192.113 316.448 190.282 314.617 189.135 312.365C187.831 309.804 187.831 306.453 187.831 299.75V264.576C187.831 261.459 187.831 259.901 188.202 258.446C188.531 257.156 189.072 255.93 189.805 254.818C190.631 253.564 191.783 252.515 194.088 250.417L202.201 243.029Z"
          />
        </clipPath>
        <pattern
          id="pattern0_490_713"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_490_713" transform="scale(0.000976562)" />
        </pattern>
        <filter
          id="filter1_di_490_713"
          x="226.747"
          y="65.6989"
          width="36.3169"
          height="60.5281"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="13.835"
            operator="erode"
            in="SourceAlpha"
            result="effect1_dropShadow_490_713"
          />
          <feOffset dy="27.67" />
          <feGaussianBlur stdDeviation="10.3762" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"
          />
          <feBlend
            mode="multiply"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_490_713"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_490_713"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="3.45875" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.972549 0 0 0 0 0.972549 0 0 0 0 0.972549 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect2_innerShadow_490_713"
          />
        </filter>
        <clipPath id="bgblur_2_490_713_clip_path" transform="translate(-226.747 -65.6989)">
          <circle cx="244.905" cy="83.8573" r="7.78218" />
        </clipPath>
        <linearGradient
          id="paint0_linear_490_713"
          x1="167.622"
          y1="112.277"
          x2="36.9688"
          y2="166.854"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F8F8F8" />
          <stop offset="1" stopColor="#929292" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_490_713"
          x1="142.72"
          y1="160.954"
          x2="16.5525"
          y2="197.216"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.4" />
          <stop offset="0.4" stopColor="white" stopOpacity="0.01" />
          <stop offset="0.6" stopColor="white" stopOpacity="0.01" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_490_713"
          x1="320.397"
          y1="112.277"
          x2="451.051"
          y2="166.854"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F8F8F8" />
          <stop offset="1" stopColor="#929292" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_490_713"
          x1="345.3"
          y1="160.954"
          x2="471.467"
          y2="197.216"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.4" />
          <stop offset="0.4" stopColor="white" stopOpacity="0.01" />
          <stop offset="0.6" stopColor="white" stopOpacity="0.01" />
        </linearGradient>
        <radialGradient
          id="paint4_radial_490_713"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(244.999 151.303) rotate(90) scale(132.297 230.304)"
        >
          <stop stopColor="#D9D9D9" />
          <stop offset="1" stopColor="#737373" stopOpacity="0" />
        </radialGradient>
        <linearGradient
          id="paint5_linear_490_713"
          x1="245.648"
          y1="228.636"
          x2="278.014"
          y2="333.303"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.4" />
          <stop offset="0.4" stopColor="white" stopOpacity="0.01" />
          <stop offset="0.6" stopColor="white" stopOpacity="0.01" />
          <stop offset="1" stopColor="white" stopOpacity="0.1" />
        </linearGradient>
        <linearGradient
          id="paint6_linear_490_713"
          x1="244.905"
          y1="76.0751"
          x2="251.676"
          y2="93.1667"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.4" />
          <stop offset="0.4" stopColor="white" stopOpacity="0.01" />
          <stop offset="0.6" stopColor="white" stopOpacity="0.01" />
          <stop offset="1" stopColor="white" stopOpacity="0.1" />
        </linearGradient>
        <clipPath id="clip0_490_713">
          <rect
            width="528"
            height="328"
            fill="white"
            transform="translate(-19 0.599518)"
          />
        </clipPath>
      </defs>
    </motion.svg>
  );
};

export default Feature5SvgComponent;