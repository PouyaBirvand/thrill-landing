"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Feature2SvgComponent = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" }); // Trigger when mostly in view, once only

  // Variants for fade-in and subtle animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      y: -30,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.2, // Stagger child animations
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 60 }, // Subtle scale and translate for "pop" effect
    visible: {
      opacity: 1,
      scale: 0.96,
      y: 10,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const lineVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: "easeInOut",
      },
    },
  };

  const iconVariants = {
    hidden: { opacity: 0, rotate: -40, scale: 0.9 },
    visible: {
      opacity: 1,
      rotate: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.svg
      ref={ref}
      width="490"
      height="423"
      viewBox="0 0 490 423"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      // @ts-ignore
      variants={containerVariants}
      preserveAspectRatio="xMidYMid meet" // Ensures responsiveness without distortion
      className="w-full h-auto" // Makes it responsive to parent container
    >
      
      <motion.g id="Frame 2147223834" 
      // @ts-ignore
       variants={childVariants}>
        <mask
          id="mask0_490_995"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="-80"
          y="40"
          width="627"
          height="333"
        >
          <ellipse
            id="Ellipse 7445"
            cx="233.538"
            cy="206.142"
            rx="313.229"
            ry="165.917"
            fill="url(#paint0_radial_490_995)"
          />
        </mask>
        <g mask="url(#mask0_490_995)">
          <motion.path
            id="Vector_3655_modified"
            d="M548.256 210.086L-28.9688 210.086"
            stroke="url(#paint1_linear_490_995)"
            strokeOpacity="0.3"
            strokeWidth="1.85782"
            strokeDasharray="5.34 5.34"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 1.2, ease: "easeInOut" } }
            }}
            initial="hidden"
            animate="visible"
            whileInView={{ strokeDashoffset: [0, -10.68] }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
          <motion.g id="Group 2147223831"
            // @ts-ignore
            variants={childVariants}>
            <foreignObject
              x="151.077"
              y="-116.115"
              width="314.643"
              height="314.643"
            >
              <div
                // @ts-ignore
                xmlns="http://www.w3.org/1999/xhtml"
                style={{
                  backdropFilter: "blur(50.83px)",
                  clipPath: "url(#bgblur_0_490_995_clip_path)",
                  height: "100%",
                  width: "100%",
                }}
              ></div>
            </foreignObject>
            <g
              id="Categories Carousel Tab"
              filter="url(#filter0_i_490_995)"
              data-figma-bg-blur-radius="101.651"
            >
              <path
                d="M252.728 5.05314C252.728 -1.77849 252.728 -5.1943 254.058 -7.80364C255.227 -10.0989 257.093 -11.965 259.388 -13.1344C261.998 -14.464 265.413 -14.464 272.245 -14.464H344.551C351.382 -14.464 354.798 -14.464 357.407 -13.1344C359.703 -11.965 361.569 -10.0989 362.738 -7.80364C364.068 -5.1943 364.068 -1.77849 364.068 5.05313V77.3586C364.068 84.1902 364.068 87.6061 362.738 90.2154C361.569 92.5106 359.703 94.3767 357.407 95.5462C354.798 96.8757 351.382 96.8757 344.551 96.8757H272.245C265.413 96.8757 261.998 96.8757 259.388 95.5462C257.093 94.3767 255.227 92.5106 254.058 90.2154C252.728 87.6061 252.728 84.1903 252.728 77.3586V5.05314Z"
                fill="white"
                fillOpacity="0.01"
                style={{ mixBlendMode: "luminosity" }}
              />
              <path
                d="M272.245 -13.7013H344.55C347.979 -13.7013 350.505 -13.7012 352.5 -13.5382C354.487 -13.3758 355.882 -13.056 357.061 -12.4552C359.213 -11.3588 360.963 -9.6089 362.059 -7.45712C362.66 -6.27793 362.98 -4.88327 363.142 -2.89658C363.305 -0.900844 363.305 1.6245 363.305 5.05264V77.3583C363.305 80.7867 363.305 83.3127 363.142 85.3085C362.98 87.2952 362.66 88.6899 362.059 89.869C360.963 92.0208 359.213 93.7707 357.061 94.8671C355.882 95.4679 354.487 95.7878 352.5 95.9501C350.505 96.1132 347.979 96.1132 344.55 96.1132H272.246C268.817 96.1132 266.291 96.1132 264.295 95.9501C262.309 95.7878 260.914 95.4678 259.735 94.8671C257.583 93.7707 255.833 92.0208 254.737 89.869C254.136 88.6899 253.816 87.2952 253.654 85.3085C253.491 83.3127 253.491 80.7867 253.491 77.3583V5.05362C253.491 1.62523 253.491 -0.900749 253.654 -2.89658C253.816 -4.88331 254.136 -6.27792 254.737 -7.45712C255.833 -9.6089 257.583 -11.3588 259.735 -12.4552C260.914 -13.0559 262.309 -13.3759 264.295 -13.5382C266.291 -13.7012 268.816 -13.7013 272.245 -13.7013Z"
                stroke="url(#paint2_linear_490_995)"
                strokeOpacity="0.25"
                strokeWidth="1.52477"
              />
              <motion.g
                id="Bitcoin"
                clipPath="url(#clip1_490_995)"
                // @ts-ignore
                variants={iconVariants} // Subtle rotate and scale for icon animation
                whileInView={{ y: [0, -6, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <path
                  id="icon"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M304.65 27.6554C304.295 27.6554 303.99 27.6816 303.736 27.7191C303.015 27.8257 302.631 28.4773 302.631 29.1231V31.1046C302.118 31.1843 301.624 31.2867 301.173 31.419L301.17 31.4197C300.76 31.5436 300.418 31.7153 300.163 31.9465C299.874 32.209 299.748 32.5769 299.748 33.0021V48.3686C299.748 48.8492 299.898 49.2705 300.206 49.6135C300.509 49.9508 300.947 50.193 301.491 50.3573L301.495 50.3586C301.851 50.4606 302.234 50.5475 302.631 50.6213V53.2886C302.631 53.9345 303.015 54.5861 303.736 54.6926C303.99 54.7301 304.295 54.7564 304.65 54.7564C305.005 54.7564 305.309 54.7301 305.563 54.6926C306.284 54.5861 306.667 53.9346 306.667 53.2888V50.9972C306.979 51.0049 307.279 51.0084 307.564 51.0084C307.649 51.0084 307.734 51.0076 307.821 51.0061V53.2886C307.821 53.9345 308.205 54.5861 308.926 54.6926C309.179 54.7301 309.484 54.7564 309.839 54.7564C310.194 54.7564 310.499 54.7301 310.753 54.6926C311.473 54.5861 311.857 53.9346 311.857 53.2888V50.3959C314.527 49.6005 317.047 47.8988 317.047 44.7215C317.047 42.5492 315.579 41.1216 313.805 40.4006C314.369 40.0865 314.833 39.6779 315.179 39.1725C315.652 38.4819 315.893 37.6305 315.893 36.6356C315.893 33.9564 314.01 32.4074 311.857 31.6015V29.1229C311.857 28.4772 311.473 27.8257 310.753 27.7191C310.499 27.6816 310.194 27.6554 309.839 27.6554C309.484 27.6554 309.18 27.6816 308.926 27.7191C308.205 27.8257 307.821 28.4773 307.821 29.1231V30.8346C307.668 30.8293 307.519 30.8268 307.372 30.8268C307.147 30.8268 306.911 30.8277 306.667 30.8303V29.1229C306.667 28.4772 306.284 27.8257 305.563 27.7191C305.309 27.6816 305.005 27.6554 304.65 27.6554ZM304.361 38.0645V35.1263C305.232 35.026 306.405 35.0072 307.244 35.0072C308.528 35.0072 309.406 35.1935 309.954 35.5012C310.479 35.7963 310.704 36.2025 310.704 36.7178C310.704 37.0326 310.615 37.2639 310.471 37.4424C310.323 37.6254 310.101 37.7723 309.807 37.8855C309.212 38.1148 308.394 38.1786 307.532 38.1786C306.674 38.1786 305.815 38.1454 305.169 38.1121C304.846 38.0954 304.577 38.0788 304.389 38.0663L304.361 38.0645ZM304.361 46.1771V42.763L304.393 42.7608C304.586 42.7483 304.863 42.7314 305.204 42.7146C305.886 42.681 306.818 42.6474 307.821 42.6474C308.815 42.6474 309.777 42.7689 310.48 43.0768C310.829 43.2296 311.1 43.4223 311.283 43.6556C311.463 43.8845 311.569 44.1658 311.569 44.5214C311.569 44.9322 311.433 45.2387 311.212 45.4784C310.984 45.7246 310.653 45.9137 310.246 46.0543C309.429 46.3367 308.389 46.3954 307.532 46.3954C306.684 46.3954 305.829 46.3327 305.185 46.2696C304.863 46.2381 304.595 46.2066 304.407 46.183L304.361 46.1771Z"
                  fill="white"
                />
              </motion.g>
            </g>
            <foreignObject
              x="-177.164"
              y="132.654"
              width="314.333"
              height="314.334"
            >
              <div
              // @ts-ignore
                xmlns="http://www.w3.org/1999/xhtml"
                style={{
                  backdropFilter: "blur(50.83px)",
                  clipPath: "url(#bgblur_2_490_995_clip_path)",
                  height: "100%",
                  width: "100%",
                }}
              ></div>
            </foreignObject>
            <g
              id="status-icon-container-right"
              filter="url(#filter1_i_490_995)"
              data-figma-bg-blur-radius="101.651"
            >
              <rect
                x="-75.5122"
                y="234.305"
                width="111.031"
                height="111.031"
                rx="12.1982"
                fill="white"
                fillOpacity="0.01"
                style={{ mixBlendMode: "luminosity" }}
              />
              <rect
                x="-74.7498"
                y="235.068"
                width="109.506"
                height="109.506"
                rx="11.4358"
                stroke="url(#paint3_linear_490_995)"
                strokeOpacity="0.25"
                strokeWidth="1.52477"
              />
            </g>
            <foreignObject
              x="335.056"
              y="162.955"
              width="276.161"
              height="276.161"
            >
              <div
              // @ts-ignore
                xmlns="http://www.w3.org/1999/xhtml"
                style={{
                  backdropFilter: "blur(48.57px)",
                  clipPath: "url(#bgblur_3_490_995_clip_path)",
                  height: "100%",
                  width: "100%",
                }}
              ></div>
            </foreignObject>
            <g
              id="status-icon-container-left-secondary"
              filter="url(#filter2_i_490_995)"
              data-figma-bg-blur-radius="97.1483"
            >
              <rect
                x="432.204"
                y="260.104"
                width="81.8646"
                height="81.8646"
                rx="11.6578"
                fill="white"
                fillOpacity="0.01"
                style={{ mixBlendMode: "luminosity" }}
              />
              <rect
                x="432.933"
                y="260.832"
                width="80.4074"
                height="80.4074"
                rx="10.9292"
                stroke="url(#paint4_linear_490_995)"
                strokeOpacity="0.25"
                strokeWidth="1.45723"
              />
              <motion.g
                id="Yuan"
                clipPath="url(#clip4_490_995)"
                // @ts-ignore
                variants={iconVariants}
                whileInView={{ y: [0, -3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <path
                  id="icon_2"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M472.283 286.53C471.13 286.49 469.96 287.11 469.192 287.62C468.461 288.106 468.323 289.077 468.727 289.816L474.179 299.797C472.544 299.811 471.421 299.831 470.753 299.845C470.206 299.857 469.589 300.126 469.409 300.785C469.331 301.074 469.272 301.441 469.272 301.892C469.272 302.344 469.331 302.71 469.409 302.999C469.589 303.658 470.206 303.927 470.753 303.939C471.666 303.959 473.432 303.988 476.192 304.001L476.223 305.221C473.445 305.233 471.669 305.263 470.753 305.283C470.206 305.294 469.589 305.563 469.409 306.223C469.331 306.511 469.272 306.878 469.272 307.33C469.272 307.781 469.331 308.148 469.409 308.436C469.589 309.096 470.206 309.365 470.753 309.377C471.681 309.397 473.491 309.427 476.33 309.439L476.425 313.167C476.447 314.054 477.093 314.812 477.973 314.859C478.255 314.874 478.568 314.884 478.897 314.884C479.225 314.884 479.539 314.874 479.82 314.859C480.701 314.812 481.347 314.054 481.369 313.167L481.464 309.439C484.303 309.427 486.114 309.397 487.041 309.377C487.589 309.365 488.206 309.096 488.386 308.436C488.464 308.148 488.522 307.781 488.522 307.33C488.522 306.878 488.464 306.511 488.386 306.223C488.206 305.563 487.589 305.294 487.041 305.283C486.125 305.263 484.349 305.233 481.571 305.221L481.602 304.001C484.362 303.988 486.129 303.959 487.041 303.939C487.589 303.927 488.206 303.658 488.386 302.999C488.464 302.71 488.522 302.344 488.522 301.892C488.522 301.441 488.464 301.074 488.386 300.785C488.206 300.126 487.589 299.857 487.041 299.845C486.374 299.831 485.25 299.811 483.615 299.797L489.068 289.816C489.472 289.077 489.333 288.106 488.602 287.62C487.834 287.11 486.664 286.49 485.51 286.53C484.926 286.549 484.493 286.969 484.249 287.422C483.251 289.269 480.278 294.793 478.897 297.606C477.515 294.793 474.543 289.269 473.545 287.422C473.3 286.969 472.868 286.549 472.283 286.53Z"
                  fill="white"
                />
              </motion.g>
            </g>
            <foreignObject
              x="-125.829"
              y="-78.0351"
              width="358.777"
              height="358.777"
            >
              <div
              // @ts-ignore
                xmlns="http://www.w3.org/1999/xhtml"
                style={{
                  backdropFilter: "blur(50.83px)",
                  clipPath: "url(#bgblur_5_490_995_clip_path)",
                  height: "100%",
                  width: "100%",
                }}
              ></div>
            </foreignObject>
            <g
              id="Categories Carousel Tab_2"
              filter="url(#filter3_i_490_995)"
              data-figma-bg-blur-radius="101.651"
            >
              <path
                d="M-24.178 43.1335C-24.178 36.3019 -24.178 32.886 -22.8485 30.2767C-21.679 27.9815 -19.8129 26.1154 -17.5177 24.9459C-14.9083 23.6164 -11.4925 23.6164 -4.66089 23.6164H111.779C118.61 23.6164 122.026 23.6164 124.636 24.9459C126.931 26.1154 128.797 27.9815 129.966 30.2767C131.296 32.886 131.296 36.3019 131.296 43.1335V159.573C131.296 166.405 131.296 169.821 129.966 172.43C128.797 174.725 126.931 176.591 124.636 177.761C122.026 179.09 118.61 179.09 111.779 179.09H-4.66091C-11.4925 179.09 -14.9083 179.09 -17.5177 177.761C-19.8129 176.591 -21.679 174.725 -22.8485 172.43C-24.178 169.821 -24.178 166.405 -24.178 159.573V43.1335Z"
                fill="white"
                fillOpacity="0.01"
                style={{ mixBlendMode: "luminosity" }}
              />
              <path
                d="M-4.66138 24.3791H111.779C115.207 24.3791 117.733 24.3791 119.728 24.5422C121.715 24.7045 123.111 25.0243 124.29 25.6252C126.441 26.7216 128.191 28.4715 129.287 30.6232C129.888 31.8025 130.208 33.197 130.37 35.1838C130.533 37.1795 130.534 39.7049 130.534 43.133V159.573C130.534 163.002 130.533 165.527 130.37 167.523C130.208 169.51 129.888 170.905 129.287 172.084C128.191 174.236 126.441 175.985 124.29 177.081C123.111 177.682 121.715 178.002 119.728 178.164C117.733 178.327 115.207 178.328 111.779 178.328H-4.66138C-8.08953 178.328 -10.6149 178.327 -12.6106 178.164C-14.5974 178.002 -15.9919 177.682 -17.1711 177.081C-19.3228 175.985 -21.0728 174.236 -22.1692 172.084C-22.7701 170.905 -23.0899 169.51 -23.2522 167.523C-23.4152 165.527 -23.4153 163.002 -23.4153 159.573V43.133C-23.4153 39.7048 -23.4153 37.1795 -23.2522 35.1838C-23.0899 33.197 -22.77 31.8024 -22.1692 30.6232C-21.0728 28.4714 -19.3229 26.7216 -17.1711 25.6252C-15.9919 25.0244 -14.5973 24.7045 -12.6106 24.5422C-10.6149 24.3791 -8.08952 24.3791 -4.66138 24.3791Z"
                stroke="url(#paint5_linear_490_995)"
                strokeOpacity="0.25"
                strokeWidth="1.52477"
              />
              <motion.g
                id="Dollar"
                clipPath="url(#clip6_490_995)"
                // @ts-ignore
                variants={iconVariants}
                whileInView={{ y: [0, -3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <path
                  id="icon_3"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M59.6795 92.4346C58.5806 91.4996 57.0554 91.1599 55.5754 91.042V89.348C55.5754 88.6041 55.095 87.9406 54.3555 87.8589C54.1137 87.8321 53.8452 87.8144 53.5589 87.8144C53.2727 87.8144 53.0042 87.8321 52.7623 87.8589C52.0229 87.9406 51.5425 88.604 51.5425 89.348V91.1761C48.4427 91.7082 45.4932 93.4026 45.4932 97.0149C45.4932 100.899 49.0132 102.214 52.1001 103.237C52.2972 103.301 52.5456 103.364 52.8205 103.434C54.062 103.75 55.8404 104.203 55.8404 105.399C55.8404 106.858 53.7391 107.115 52.6947 107.115C51.2375 107.115 49.6538 106.754 48.3686 106.077C47.6774 105.712 46.8279 105.568 46.2819 106.13C45.8712 106.553 45.4932 107.171 45.4932 108.014C45.4932 108.81 45.8174 109.487 46.4657 110.046C47.8201 111.214 49.7433 111.591 51.5425 111.692V113.359C51.5425 114.103 52.0229 114.766 52.7623 114.848C53.0042 114.875 53.2727 114.892 53.5589 114.892C53.8452 114.892 54.1137 114.875 54.3555 114.848C55.095 114.766 55.5754 114.103 55.5754 113.359V111.462C58.6839 110.864 61.6247 109.159 61.6247 105.53C61.6247 101.708 58.2503 99.9576 55.0255 98.9781C54.8394 98.9207 54.5778 98.8617 54.2777 98.7941C53.0615 98.5199 51.2141 98.1034 51.2141 97.075C51.2141 95.7651 53.5444 95.5921 54.4231 95.5921C55.5189 95.5921 56.6836 95.9133 57.7514 96.3534C58.5721 96.6918 59.5683 96.6867 60.0325 95.9239C60.3462 95.4083 60.5515 94.8214 60.5515 94.2731C60.5515 93.5205 60.2608 92.9077 59.6795 92.4346Z"
                  fill="white"
                />
              </motion.g>
            </g>
          </motion.g>
          <motion.g id="Group 2147238289" 
          // @ts-ignore
          variants={childVariants} whileInView={{ y: [0, -3, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}>
            <rect
              id="image 6"
              x="99.6448"
              y="98.5528"
              width="290.711"
              height="232.832"
              fill="url(#pattern0_490_995)"
            />
            <rect
              id="image 75"
              x="322.756"
              y="117.325"
              width="30.5587"
              height="24.7594"
              rx="12.3797"
              transform="rotate(-5.58577 322.756 117.325)"
              fill="url(#pattern1_490_995)"
            />
          </motion.g>
        </g>
        <foreignObject x="368.471" y="186.42" width="43.4226" height="73.8177">
          <div
          // @ts-ignore
            xmlns="http://www.w3.org/1999/xhtml"
            style={{
              backdropFilter: "blur(6.51px)",
              clipPath: "url(#bgblur_7_490_995_clip_path)",
              height: "100%",
              width: "100%",
            }}
          ></div>
        </foreignObject>
        <g
          id="icon-button-wrapper"
          filter="url(#filter4_di_490_995)"
          data-figma-bg-blur-radius="13.0265"
        >
          <rect
            x="381.497"
            y="199.446"
            width="17.3697"
            height="17.3697"
            rx="8.68486"
            fill="#282828"
            fillOpacity="0.7"
            style={{ mixBlendMode: "luminosity" }}
            shapeRendering="crispEdges"
          />
          <rect
            x="382.311"
            y="200.26"
            width="15.7414"
            height="15.7414"
            rx="7.87071"
            stroke="url(#paint6_linear_490_995)"
            strokeOpacity="0.25"
            strokeWidth="1.62831"
            shapeRendering="crispEdges"
          />
          <circle
            id="datapoint-inner-ellipse"
            cx="390.178"
            cy="208.13"
            r="3.25682"
            transform="rotate(180 390.178 208.13)"
            fill="#F8F8F8"
          />
        </g>
        <foreignObject x="84.4706" y="186.42" width="43.4226" height="73.8177">
          <div
          // @ts-ignore
            xmlns="http://www.w3.org/1999/xhtml"
            style={{
              backdropFilter: "blur(6.51px)",
              clipPath: "url(#bgblur_8_490_995_clip_path)",
              height: "100%",
              width: "100%",
            }}
          ></div>
        </foreignObject>
        <g
          id="icon-button-wrapper_2"
          filter="url(#filter5_di_490_995)"
          data-figma-bg-blur-radius="13.0265"
        >
          <rect
            x="97.4971"
            y="199.446"
            width="17.3697"
            height="17.3697"
            rx="8.68486"
            fill="#282828"
            fillOpacity="0.7"
            style={{ mixBlendMode: "luminosity" }}
            shapeRendering="crispEdges"
          />
          <rect
            x="98.3112"
            y="200.26"
            width="15.7414"
            height="15.7414"
            rx="7.87071"
            stroke="url(#paint7_linear_490_995)"
            strokeOpacity="0.25"
            strokeWidth="1.62831"
            shapeRendering="crispEdges"
          />
          <circle
            id="datapoint-inner-ellipse_2"
            cx="106.178"
            cy="208.13"
            r="3.25682"
            transform="rotate(180 106.178 208.13)"
            fill="#F8F8F8"
          />
        </g>
      </motion.g>
      <defs>
        <filter
          id="filter0_i_490_995"
          x="151.077"
          y="-116.115"
          width="314.643"
          height="314.643"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="2.03303" dy="4.06606" />
          <feGaussianBlur stdDeviation="8.13212" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.972549 0 0 0 0 0.972549 0 0 0 0 0.972549 0 0 0 0.06 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_490_995"
          />
        </filter>
        <clipPath
          id="bgblur_0_490_995_clip_path"
          transform="translate(-151.077 116.115)"
        >
          <path d="M252.728 5.05314C252.728 -1.77849 252.728 -5.1943 254.058 -7.80364C255.227 -10.0989 257.093 -11.965 259.388 -13.1344C261.998 -14.464 265.413 -14.464 272.245 -14.464H344.551C351.382 -14.464 354.798 -14.464 357.407 -13.1344C359.703 -11.965 361.569 -10.0989 362.738 -7.80364C364.068 -5.1943 364.068 -1.77849 364.068 5.05313V77.3586C364.068 84.1902 364.068 87.6061 362.738 90.2154C361.569 92.5106 359.703 94.3767 357.407 95.5462C354.798 96.8757 351.382 96.8757 344.551 96.8757H272.245C265.413 96.8757 261.998 96.8757 259.388 95.5462C257.093 94.3767 255.227 92.5106 254.058 90.2154C252.728 87.6061 252.728 84.1903 252.728 77.3586V5.05314Z" />
        </clipPath>
        <filter
          id="filter1_i_490_995"
          x="-177.164"
          y="132.654"
          width="314.333"
          height="314.334"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="2.03303" dy="4.06606" />
          <feGaussianBlur stdDeviation="8.13212" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.972549 0 0 0 0 0.972549 0 0 0 0 0.972549 0 0 0 0.06 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_490_995"
          />
        </filter>
        <clipPath
          id="bgblur_2_490_995_clip_path"
          transform="translate(177.164 -132.654)"
        >
          <rect
            x="-75.5122"
            y="234.305"
            width="111.031"
            height="111.031"
            rx="12.1982"
          />
        </clipPath>
        <filter
          id="filter2_i_490_995"
          x="335.056"
          y="162.955"
          width="276.161"
          height="276.161"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="1.94297" dy="3.88593" />
          <feGaussianBlur stdDeviation="7.77187" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.972549 0 0 0 0 0.972549 0 0 0 0 0.972549 0 0 0 0.06 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_490_995"
          />
        </filter>
        <clipPath
          id="bgblur_3_490_995_clip_path"
          transform="translate(-335.056 -162.955)"
        >
          <rect
            x="432.204"
            y="260.104"
            width="81.8646"
            height="81.8646"
            rx="11.6578"
          />
        </clipPath>
        <filter
          id="filter3_i_490_995"
          x="-125.829"
          y="-78.0351"
          width="358.777"
          height="358.777"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="2.03303" dy="4.06606" />
          <feGaussianBlur stdDeviation="8.13212" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.972549 0 0 0 0 0.972549 0 0 0 0 0.972549 0 0 0 0.06 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_490_995"
          />
        </filter>
        <clipPath
          id="bgblur_5_490_995_clip_path"
          transform="translate(125.829 78.0351)"
        >
          <path d="M-24.178 43.1335C-24.178 36.3019 -24.178 32.886 -22.8485 30.2767C-21.679 27.9815 -19.8129 26.1154 -17.5177 24.9459C-14.9083 23.6164 -11.4925 23.6164 -4.66089 23.6164H111.779C118.61 23.6164 122.026 23.6164 124.636 24.9459C126.931 26.1154 128.797 27.9815 129.966 30.2767C131.296 32.886 131.296 36.3019 131.296 43.1335V159.573C131.296 166.405 131.296 169.821 129.966 172.43C128.797 174.725 126.931 176.591 124.636 177.761C122.026 179.09 118.61 179.09 111.779 179.09H-4.66091C-11.4925 179.09 -14.9083 179.09 -17.5177 177.761C-19.8129 176.591 -21.679 174.725 -22.8485 172.43C-24.178 169.821 -24.178 166.405 -24.178 159.573V43.1335Z" />
        </clipPath>
        <pattern
          id="pattern0_490_995"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0_490_995"
            transform="matrix(0.00114476 0 0 0.00142932 -0.101302 -0.166019)"
          />
        </pattern>
        <pattern
          id="pattern1_490_995"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image1_490_995"
            transform="matrix(0.00770797 0.000485312 -0.000393211 0.00951338 -0.233073 -0.243402)"
          />
        </pattern>
        <filter
          id="filter4_di_490_995"
          x="368.471"
          y="186.42"
          width="43.4226"
          height="73.8177"
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
            radius="17.3686"
            operator="erode"
            in="SourceAlpha"
            result="effect1_dropShadow_490_995"
          />
          <feOffset dy="34.7372" />
          <feGaussianBlur stdDeviation="13.0265" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"
          />
          <feBlend
            mode="multiply"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_490_995"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_490_995"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="4.34215" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.972549 0 0 0 0 0.972549 0 0 0 0 0.972549 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect2_innerShadow_490_995"
          />
        </filter>
        <clipPath
          id="bgblur_7_490_995_clip_path"
          transform="translate(-368.471 -186.42)"
        >
          <rect
            x="381.497"
            y="199.446"
            width="17.3697"
            height="17.3697"
            rx="8.68486"
          />
        </clipPath>
        <filter
          id="filter5_di_490_995"
          x="84.4706"
          y="186.42"
          width="43.4226"
          height="73.8177"
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
            radius="17.3686"
            operator="erode"
            in="SourceAlpha"
            result="effect1_dropShadow_490_995"
          />
          <feOffset dy="34.7372" />
          <feGaussianBlur stdDeviation="13.0265" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"
          />
          <feBlend
            mode="multiply"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_490_995"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_490_995"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="4.34215" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.972549 0 0 0 0 0.972549 0 0 0 0 0.972549 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect2_innerShadow_490_995"
          />
        </filter>
        <clipPath
          id="bgblur_8_490_995_clip_path"
          transform="translate(-84.4706 -186.42)"
        >
          <rect
            x="97.4971"
            y="199.446"
            width="17.3697"
            height="17.3697"
            rx="8.68486"
          />
        </clipPath>
        <radialGradient
          id="paint0_radial_490_995"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="matrix(39.0854 160.424 -303.329 19.0922 241.691 211.634)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D9D9D9" />
          <stop offset="0.615385" stopColor="#D8D8D8" stopOpacity="0.985577" />
          <stop offset="1" stopColor="#737373" stopOpacity="0" />
        </radialGradient>
        <linearGradient
          id="paint1_linear_490_995"
          x1="548.256"
          y1="210.586"
          x2="-28.9688"
          y2="210.586"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="0.770675" stopColor="white" stopOpacity="0.2" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_490_995"
          x1="284.331"
          y1="128.479"
          x2="412.909"
          y2="25.8735"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.4" />
          <stop offset="0.4" stopColor="white" stopOpacity="0.01" />
          <stop offset="0.6" stopColor="white" stopOpacity="0.01" />
          <stop offset="1" stopColor="white" stopOpacity="0.1" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_490_995"
          x1="-43.9969"
          y1="376.851"
          x2="84.2236"
          y2="274.531"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.4" />
          <stop offset="0.4" stopColor="white" stopOpacity="0.01" />
          <stop offset="0.6" stopColor="white" stopOpacity="0.01" />
          <stop offset="1" stopColor="white" stopOpacity="0.1" />
        </linearGradient>
        <linearGradient
          id="paint4_linear_490_995"
          x1="473.136"
          y1="260.104"
          x2="508.749"
          y2="350.001"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.4" />
          <stop offset="0.4" stopColor="white" stopOpacity="0.01" />
          <stop offset="0.6" stopColor="white" stopOpacity="0.01" />
          <stop offset="1" stopColor="white" stopOpacity="0.1" />
        </linearGradient>
        <linearGradient
          id="paint5_linear_490_995"
          x1="17.9474"
          y1="193.535"
          x2="205.806"
          y2="114.65"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.4" />
          <stop offset="0.4" stopColor="white" stopOpacity="0.01" />
          <stop offset="0.6" stopColor="white" stopOpacity="0.01" />
          <stop offset="1" stopColor="white" stopOpacity="0.1" />
        </linearGradient>
        <linearGradient
          id="paint6_linear_490_995"
          x1="390.182"
          y1="199.446"
          x2="397.738"
          y2="218.52"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.4" />
          <stop offset="0.4" stopColor="white" stopOpacity="0.01" />
          <stop offset="0.6" stopColor="white" stopOpacity="0.01" />
          <stop offset="1" stopColor="white" stopOpacity="0.1" />
        </linearGradient>
        <linearGradient
          id="paint7_linear_490_995"
          x1="106.182"
          y1="199.446"
          x2="113.738"
          y2="218.52"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.4" />
          <stop offset="0.4" stopColor="white" stopOpacity="0.01" />
          <stop offset="0.6" stopColor="white" stopOpacity="0.01" />
          <stop offset="1" stopColor="white" stopOpacity="0.1" />
        </linearGradient>
        <clipPath id="clip1_490_995">
          <rect
            width="27.6541"
            height="27.6541"
            fill="white"
            transform="translate(294.571 27.3788)"
          />
        </clipPath>
        <clipPath id="clip4_490_995">
          <rect
            width="28"
            height="29"
            fill="white"
            transform="translate(464.896 286.183)"
          />
        </clipPath>
        <clipPath id="clip6_490_995">
          <rect
            width="27.6541"
            height="27.6541"
            fill="white"
            transform="translate(39.7319 87.5263)"
          />
        </clipPath>
      </defs>
    </motion.svg>
  );
};

export default Feature2SvgComponent;