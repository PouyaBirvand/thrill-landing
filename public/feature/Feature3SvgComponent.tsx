"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const Feature3SvgComponent = () => {
  const ref = useRef<SVGSVGElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 }); // Trigger when 30% in view, not once to allow re-trigger if scrolled away and back

  // Variants for fade-in animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2, // Stagger child elements
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
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
      opacity: 0.3,
      transition: {
        duration: 1.2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.svg
      ref={ref}
      width="490"
      height="357"
      viewBox="0 0 490 357"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      // @ts-ignore
      variants={containerVariants}
      preserveAspectRatio="xMidYMid meet" // Ensures responsiveness without distortion
      className="w-full h-auto" // Makes SVG responsive to parent container
    >
      <g clipPath="url(#clip0_490_1077)">
        <mask
          id="mask0_490_1077"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="-106"
          y="-19"
          width="702"
          height="394"
        >
          <ellipse
            cx="245"
            cy="178.04"
            rx="350.092"
            ry="196.5"
            fill="url(#paint0_radial_490_1077)"
          />
        </mask>
        <g mask="url(#mask0_490_1077)">
          <motion.path
          // @ts-ignore
            variants={childVariants}
            d="M-96.5527 86.9863V215.246C-96.5527 229.524 -96.5527 236.662 -93.7741 242.116C-91.3299 246.913 -87.4299 250.813 -82.6329 253.257C-77.1795 256.036 -70.0406 256.036 -55.7628 256.036H151.298L189.519 255.923C203.759 255.881 210.879 255.86 216.316 253.076C221.099 250.626 224.985 246.728 227.42 241.939C230.189 236.493 230.189 229.373 230.189 215.133V120.517C230.189 112.525 230.189 108.529 229.086 104.903C228.11 101.692 226.51 98.7062 224.377 96.1157C221.968 93.1894 218.64 90.9767 211.985 86.5513L161.56 53.0204C157.745 50.4838 155.838 49.2156 153.775 48.3172C151.944 47.5197 150.026 46.9402 148.06 46.5904C145.845 46.1964 143.555 46.1964 138.974 46.1964H-55.7628C-70.0406 46.1964 -77.1795 46.1964 -82.6329 48.975C-87.4299 51.4192 -91.3299 55.3192 -93.7741 60.1162C-96.5527 65.5696 -96.5527 72.7085 -96.5527 86.9863Z"
            fill="url(#paint1_linear_490_1077)"
            fillOpacity="0.05"
            style={{ mixBlendMode: "luminosity" }}
          />
          <motion.path
          // @ts-ignore
            variants={childVariants}
            d="M-96.5527 86.9863V215.246C-96.5527 229.524 -96.5527 236.662 -93.7741 242.116C-91.3299 246.913 -87.4299 250.813 -82.6329 253.257C-77.1795 256.036 -70.0406 256.036 -55.7628 256.036H151.298L189.519 255.923C203.759 255.881 210.879 255.86 216.316 253.076C221.099 250.626 224.985 246.728 227.42 241.939C230.189 236.493 230.189 229.373 230.189 215.133V120.517C230.189 112.525 230.189 108.529 229.086 104.903C228.11 101.692 226.51 98.7062 224.377 96.1157C221.968 93.1894 218.64 90.9767 211.985 86.5513L161.56 53.0204C157.745 50.4838 155.838 49.2156 153.775 48.3172C151.944 47.5197 150.026 46.9402 148.06 46.5904C145.845 46.1964 143.555 46.1964 138.974 46.1964H-55.7628C-70.0406 46.1964 -77.1795 46.1964 -82.6329 48.975C-87.4299 51.4192 -91.3299 55.3192 -93.7741 60.1162C-96.5527 65.5696 -96.5527 72.7085 -96.5527 86.9863Z"
            stroke="url(#paint2_linear_490_1077)"
            strokeOpacity="0.25"
            strokeWidth="2.39004"
          />
          <motion.path
          // @ts-ignore
            variants={childVariants}
            d="M146.192 -117.16L155.611 15.1144C156.12 22.269 156.375 25.8464 157.517 29.0865C158.529 31.957 160.047 34.623 161.999 36.9584C164.203 39.5945 167.149 41.6392 173.042 45.7285L173.042 45.7286L223.502 80.7457C229.302 84.771 232.203 86.7837 235.392 87.9211C238.218 88.9289 241.2 89.4299 244.2 89.4012C247.586 89.3687 250.984 88.4146 257.782 86.5063L298.293 75.1337C300.323 74.5637 301.338 74.2787 302.37 74.0789C303.286 73.9014 304.211 73.7744 305.142 73.6984C306.189 73.6129 307.243 73.6138 309.352 73.6156L427.857 73.7164C442.026 73.7285 449.11 73.7345 454.542 70.99C459.321 68.5756 463.218 64.718 465.681 59.9642C468.481 54.5605 468.547 47.4766 468.68 33.309L469.152 -17.0067C469.242 -26.6129 469.287 -31.416 467.815 -35.6223C466.513 -39.3403 464.368 -42.7061 461.547 -45.4556C458.355 -48.5661 453.982 -50.5529 445.236 -54.5264L219.247 -157.194C216.245 -158.557 214.745 -159.239 213.184 -159.719C211.798 -160.146 210.378 -160.453 208.939 -160.638C207.32 -160.847 205.671 -160.847 202.375 -160.847H186.879C171.657 -160.847 164.046 -160.847 158.399 -157.816C153.437 -155.153 149.496 -150.922 147.192 -145.783C144.571 -139.935 145.111 -132.343 146.192 -117.16Z"
            fill="url(#paint3_linear_490_1077)"
            fillOpacity="0.05"
            style={{ mixBlendMode: "luminosity" }}
          />
          <motion.path
          // @ts-ignore
            variants={childVariants}
            d="M146.192 -117.16L155.611 15.1144C156.12 22.269 156.375 25.8464 157.517 29.0865C158.529 31.957 160.047 34.623 161.999 36.9584C164.203 39.5945 167.149 41.6392 173.042 45.7285L173.042 45.7286L223.502 80.7457C229.302 84.771 232.203 86.7837 235.392 87.9211C238.218 88.9289 241.2 89.4299 244.2 89.4012C247.586 89.3687 250.984 88.4146 257.782 86.5063L298.293 75.1337C300.323 74.5637 301.338 74.2787 302.37 74.0789C303.286 73.9014 304.211 73.7744 305.142 73.6984C306.189 73.6129 307.243 73.6138 309.352 73.6156L427.857 73.7164C442.026 73.7285 449.11 73.7345 454.542 70.99C459.321 68.5756 463.218 64.718 465.681 59.9642C468.481 54.5605 468.547 47.4766 468.68 33.309L469.152 -17.0067C469.242 -26.6129 469.287 -31.416 467.815 -35.6223C466.513 -39.3403 464.368 -42.7061 461.547 -45.4556C458.355 -48.5661 453.982 -50.5529 445.236 -54.5264L219.247 -157.194C216.245 -158.557 214.745 -159.239 213.184 -159.719C211.798 -160.146 210.378 -160.453 208.939 -160.638C207.32 -160.847 205.671 -160.847 202.375 -160.847H186.879C171.657 -160.847 164.046 -160.847 158.399 -157.816C153.437 -155.153 149.496 -150.922 147.192 -145.783C144.571 -139.935 145.111 -132.343 146.192 -117.16Z"
            stroke="url(#paint4_linear_490_1077)"
            strokeOpacity="0.25"
            strokeWidth="2.39004"
          />
          <motion.path
          // @ts-ignore
            variants={childVariants}
            d="M36.5691 421.681L255.249 421.681C268.244 421.681 274.741 421.681 279.901 419.251C284.445 417.111 288.256 413.675 290.855 409.376C293.806 404.495 294.477 398.033 295.82 385.107L301.358 331.82C302.317 322.593 302.796 317.98 301.8 313.772C300.919 310.051 299.212 306.576 296.807 303.605C294.086 300.244 290.142 297.803 282.254 292.92L245.778 270.344L245.778 270.344C242.108 268.072 240.273 266.936 238.306 266.133C236.561 265.419 234.741 264.902 232.881 264.59C230.786 264.238 228.628 264.238 224.311 264.238L188.995 264.238L88.3263 264.238C81.523 264.238 78.1213 264.238 74.9551 265.065C72.1492 265.797 69.4888 267.003 67.0884 268.63C64.3798 270.466 62.1376 273.024 57.653 278.14L57.6529 278.14L5.89563 337.184C2.15225 341.454 0.280569 343.59 -1.05333 346.009C-2.23645 348.156 -3.10393 350.461 -3.62898 352.855C-4.22095 355.554 -4.22095 358.393 -4.22095 364.072L-4.22095 380.891C-4.22095 395.169 -4.22095 402.308 -1.4423 407.762C1.00187 412.558 4.90191 416.459 9.69886 418.903C15.1523 421.681 22.2912 421.681 36.5691 421.681Z"
            fill="url(#paint5_linear_490_1077)"
            fillOpacity="0.05"
            style={{ mixBlendMode: "luminosity" }}
          />
          <motion.path
          // @ts-ignore
            variants={childVariants}
            d="M36.5691 421.681L255.249 421.681C268.244 421.681 274.741 421.681 279.901 419.251C284.445 417.111 288.256 413.675 290.855 409.376C293.806 404.495 294.477 398.033 295.82 385.107L301.358 331.82C302.317 322.593 302.796 317.98 301.8 313.772C300.919 310.051 299.212 306.576 296.807 303.605C294.086 300.244 290.142 297.803 282.254 292.92L245.778 270.344L245.778 270.344C242.108 268.072 240.273 266.936 238.306 266.133C236.561 265.419 234.741 264.902 232.881 264.59C230.786 264.238 228.628 264.238 224.311 264.238L188.995 264.238L88.3263 264.238C81.523 264.238 78.1213 264.238 74.9551 265.065C72.1492 265.797 69.4888 267.003 67.0884 268.63C64.3798 270.466 62.1376 273.024 57.653 278.14L57.6529 278.14L5.89563 337.184C2.15225 341.454 0.280569 343.59 -1.05333 346.009C-2.23645 348.156 -3.10393 350.461 -3.62898 352.855C-4.22095 355.554 -4.22095 358.393 -4.22095 364.072L-4.22095 380.891C-4.22095 395.169 -4.22095 402.308 -1.4423 407.762C1.00187 412.558 4.90191 416.459 9.69886 418.903C15.1523 421.681 22.2912 421.681 36.5691 421.681Z"
            stroke="url(#paint6_linear_490_1077)"
            strokeOpacity="0.25"
            strokeWidth="2.39004"
          />
          <motion.path
          // @ts-ignore
            variants={childVariants}
            d="M360.075 421.681L580.526 421.681C592.888 421.681 599.069 421.681 604.063 419.432C608.544 417.413 612.347 414.141 615.012 410.011C617.982 405.409 618.905 399.298 620.751 387.074C623.079 371.65 624.244 363.938 622.016 357.828C620.022 352.362 616.22 347.743 611.239 344.736C605.671 341.375 597.879 341.036 582.295 340.358L497.967 336.687C493.2 336.48 490.816 336.376 488.536 335.85C486.512 335.384 484.553 334.672 482.702 333.73C480.616 332.669 478.722 331.218 474.934 328.316L474.934 328.315L449.192 308.594C445.12 305.474 443.084 303.915 440.834 302.806C438.838 301.823 436.721 301.106 434.539 300.672C432.079 300.183 429.514 300.183 424.385 300.183L360.039 300.183C345.701 300.183 338.532 300.183 333.065 302.978C328.257 305.437 324.354 309.358 321.918 314.177C319.149 319.657 319.182 326.826 319.249 341.164L319.285 348.725L319.285 380.891C319.285 395.169 319.285 402.308 322.063 407.762C324.507 412.558 328.407 416.459 333.204 418.903C338.658 421.681 345.797 421.681 360.075 421.681Z"
            fill="url(#paint7_linear_490_1077)"
            fillOpacity="0.05"
            style={{ mixBlendMode: "luminosity" }}
          />
          <motion.path
          // @ts-ignore
            variants={childVariants}
            d="M360.075 421.681L580.526 421.681C592.888 421.681 599.069 421.681 604.063 419.432C608.544 417.413 612.347 414.141 615.012 410.011C617.982 405.409 618.905 399.298 620.751 387.074C623.079 371.65 624.244 363.938 622.016 357.828C620.022 352.362 616.22 347.743 611.239 344.736C605.671 341.375 597.879 341.036 582.295 340.358L497.967 336.687C493.2 336.48 490.816 336.376 488.536 335.85C486.512 335.384 484.553 334.672 482.702 333.73C480.616 332.669 478.722 331.218 474.934 328.316L474.934 328.315L449.192 308.594C445.12 305.474 443.084 303.915 440.834 302.806C438.838 301.823 436.721 301.106 434.539 300.672C432.079 300.183 429.514 300.183 424.385 300.183L360.039 300.183C345.701 300.183 338.532 300.183 333.065 302.978C328.257 305.437 324.354 309.358 321.918 314.177C319.149 319.657 319.182 326.826 319.249 341.164L319.285 348.725L319.285 380.891C319.285 395.169 319.285 402.308 322.063 407.762C324.507 412.558 328.407 416.459 333.204 418.903C338.658 421.681 345.797 421.681 360.075 421.681Z"
            stroke="url(#paint8_linear_490_1077)"
            strokeOpacity="0.25"
            strokeWidth="2.39004"
          />
          <motion.path
          // @ts-ignore
            variants={childVariants}
            d="M427.214 126.489V248.465C427.214 262.507 427.214 269.528 424.499 274.93C422.111 279.683 418.295 283.57 413.587 286.046C408.235 288.86 401.216 288.99 387.176 289.248L319.584 290.494H319.584C315.687 290.566 313.738 290.602 311.831 290.348C310.137 290.123 308.471 289.728 306.856 289.17C305.038 288.541 303.313 287.634 299.862 285.821L260.088 264.925C252.158 260.759 248.193 258.676 245.301 255.639C242.743 252.952 240.802 249.74 239.613 246.225C238.269 242.252 238.269 237.773 238.269 228.815V136.075C238.269 124.892 238.269 119.3 240.204 114.622C241.911 110.493 244.673 106.885 248.214 104.16C252.226 101.072 257.624 99.6137 268.42 96.6967L303.898 87.1111C305.854 86.5826 306.832 86.3183 307.825 86.1329C308.707 85.9681 309.597 85.85 310.491 85.779C311.497 85.6992 312.511 85.6992 314.537 85.6992H386.424C400.702 85.6992 407.841 85.6992 413.295 88.4778C418.091 90.922 421.992 94.822 424.436 99.619C427.214 105.072 427.214 112.211 427.214 126.489Z"
            fill="url(#paint9_linear_490_1077)"
            fillOpacity="0.05"
            style={{ mixBlendMode: "luminosity" }}
          />
          <motion.path
          // @ts-ignore
            variants={childVariants}
            d="M427.214 126.489V248.465C427.214 262.507 427.214 269.528 424.499 274.93C422.111 279.683 418.295 283.57 413.587 286.046C408.235 288.86 401.216 288.99 387.176 289.248L319.584 290.494H319.584C315.687 290.566 313.738 290.602 311.831 290.348C310.137 290.123 308.471 289.728 306.856 289.17C305.038 288.541 303.313 287.634 299.862 285.821L260.088 264.925C252.158 260.759 248.193 258.676 245.301 255.639C242.743 252.952 240.802 249.74 239.613 246.225C238.269 242.252 238.269 237.773 238.269 228.815V136.075C238.269 124.892 238.269 119.3 240.204 114.622C241.911 110.493 244.673 106.885 248.214 104.16C252.226 101.072 257.624 99.6137 268.42 96.6967L303.898 87.1111C305.854 86.5826 306.832 86.3183 307.825 86.1329C308.707 85.9681 309.597 85.85 310.491 85.779C311.497 85.6992 312.511 85.6992 314.537 85.6992H386.424C400.702 85.6992 407.841 85.6992 413.295 88.4778C418.091 90.922 421.992 94.822 424.436 99.619C427.214 105.072 427.214 112.211 427.214 126.489Z"
            stroke="url(#paint10_linear_490_1077)"
            strokeOpacity="0.25"
            strokeWidth="2.39004"
          />
          {/* Animated connecting line with chain-like moving dash effect */}
          {/* <motion.path
            d="M315.393 190.213H255.335L199.17 152.059H115.893"
            stroke="white"
            strokeOpacity="0.3"
            strokeWidth="1.59336"
            strokeDasharray="7.83 7.83"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={lineVariants}
            transition={{
              duration: 2,
              ease: "linear",
              repeat: Infinity, // Infinite loop for continuous movement
              repeatType: "loop",
            }}
          /> */}
          <foreignObject
            x="59.3033"
            y="70.9988"
            width="134.565"
            height="134.565"
          >
            <div
            // @ts-ignore
              xmlns="http://www.w3.org/1999/xhtml"
              style={{
                backdropFilter: "blur(3.63px)",
                clipPath: "url(#bgblur_1_490_1077_clip_path)",
                height: "100%",
                width: "100%",
              }}
            ></div>
          </foreignObject>
          <motion.g
          // @ts-ignore
            variants={childVariants}
            filter="url(#filter0_i_490_1077)"
            data-figma-bg-blur-radius="7.25672"
          >
            {/* <circle
              cx="60.0258"
              cy="60.0258"
              r="60.0258"
              transform="matrix(1 0 0 -1 66.5601 198.307)"
              fill="url(#paint11_linear_490_1077)"
              fillOpacity="0.06"
            />
            <circle
              cx="60.0258"
              cy="60.0258"
              r="59.1188"
              transform="matrix(1 0 0 -1 66.5601 198.307)"
              stroke="#DBFFF4"
              strokeOpacity="0.2"
              strokeWidth="1.81418"
              style={{ mixBlendMode: "lighten" }}
            /> */}
          </motion.g>
          <g
            clipPath="url(#paint12_angular_490_1077_clip_path)"
            data-figma-skip-parse="true"
          >
            {/* <g transform="matrix(-0.0856285 -0.0104872 -0.0104872 0.0856285 122.586 138.211)">
              <foreignObject x="-1137.36" y="-1137.36" width="2274.72" height="2274.72">
                <div
                  xmlns="http://www.w3.org/1999/xhtml"
                  style={{
                    background:
                      "conic-gradient(from 90deg,rgba(255, 255, 255, 0) 0deg,rgba(255, 255, 255, 0) 111.81deg,rgba(255, 255, 255, 0.15) 181.452deg,rgba(255, 255, 255, 0) 246.773deg,rgba(255, 255, 255, 0) 360deg)",
                    height: "100%",
                    width: "100%",
                    opacity: 1,
                  }}
                ></div>
              </foreignObject>
            </g> */}
          </g>
          {/* <path
            opacity="0.5"
            d="M208.855 138.211H207.956C207.956 91.063 169.735 52.8416 122.586 52.8416V51.943V51.0444C170.727 51.0444 209.753 90.0704 209.753 138.211H208.855ZM122.586 51.943V52.8416C75.438 52.8416 37.2167 91.063 37.2167 138.211H36.3181H35.4195C35.4195 90.0704 74.4454 51.0444 122.586 51.0444V51.943ZM36.3181 138.211H37.2167C37.2167 185.36 75.438 223.581 122.586 223.581V224.48V225.378C74.4454 225.378 35.4195 186.352 35.4195 138.211H36.3181ZM122.586 224.48V223.581C169.735 223.581 207.956 185.36 207.956 138.211H208.855H209.753C209.753 186.352 170.727 225.378 122.586 225.378V224.48Z"
            data-figma-gradient-fill='{"type":"GRADIENT_ANGULAR","stops":[{"color":{"r":1.0,"g":1.0,"b":1.0,"a":0.0},"position":0.31058219075202942},{"color":{"r":1.0,"g":1.0,"b":1.0,"a":0.15000000596046448},"position":0.50403332710266113},{"color":{"r":1.0,"g":1.0,"b":1.0,"a":0.0},"position":0.68547940254211426}],"stopsVar":[{"color":{"r":1.0,"g":1.0,"b":1.0,"a":0.0},"position":0.31058219075202942},{"color":{"r":1.0,"g":1.0,"b":1.0,"a":0.15000000596046448},"position":0.50403332710266113},{"color":{"r":1.0,"g":1.0,"b":1.0,"a":0.0},"position":0.68547940254211426}],"transform":{"m00":-171.25697326660156,"m01":-20.974416732788086,"m02":218.70210266113281,"m10":-20.974416732788086,"m11":171.25697326660156,"m12":63.070030212402344},"opacity":1.0,"blendMode":"NORMAL","visible":true}'
          /> */}
          {/* <foreignObject
            x="287.707"
            y="100.999"
            width="134.565"
            height="134.565"
          >
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              style={{
                backdropFilter: "blur(3.63px)",
                clipPath: "url(#bgblur_2_490_1077_clip_path)",
                height: "100%",
                width: "100%",
              }}
            ></div>
          </foreignObject> */}
          <motion.g
          // @ts-ignore
            variants={childVariants}
            filter="url(#filter1_i_490_1077)"
            data-figma-bg-blur-radius="7.25672"
          >
            {/* <circle
              cx="60.0258"
              cy="60.0258"
              r="60.0258"
              transform="matrix(1 0 0 -1 294.964 228.307)"
              fill="url(#paint13_linear_490_1077)"
              fillOpacity="0.06"
            />
            <circle
              cx="60.0258"
              cy="60.0258"
              r="59.1188"
              transform="matrix(1 0 0 -1 294.964 228.307)"
              stroke="#DBFFF4"
              strokeOpacity="0.2"
              strokeWidth="1.81418"
              style={{ mixBlendMode: "lighten" }}
            /> */}
          </motion.g>
          <g
            clipPath="url(#paint14_angular_490_1077_clip_path)"
            data-figma-skip-parse="true"
          >
            {/* <g transform="matrix(0.0815719 0.00358854 0.00358854 -0.0815719 350.99 168.211)">
              <foreignObject x="-1124.92" y="-1124.92" width="2249.85" height="2249.85">
                <div
                  xmlns="http://www.w3.org/1999/xhtml"
                  style={{
                    background:
                      "conic-gradient(from 90deg,rgba(255, 255, 255, 0) 0deg,rgba(255, 255, 255, 0) 111.81deg,rgba(255, 255, 255, 0.15) 181.452deg,rgba(255, 255, 255, 0) 246.773deg,rgba(255, 255, 255, 0) 360deg)",
                    height: "100%",
                    width: "100%",
                    opacity: 1,
                  }}
                ></div>
              </foreignObject>
            </g> */}
          </g>
          {/* <path
            opacity="0.5"
            d="M437.259 168.211H436.36C436.36 121.063 398.139 82.8416 350.99 82.8416V81.943V81.0443C399.131 81.0443 438.157 120.07 438.157 168.211H437.259ZM350.99 81.943V82.8416C303.842 82.8416 265.621 121.063 265.621 168.211H264.722H263.823C263.823 120.07 302.849 81.0443 350.99 81.0443V81.943ZM264.722 168.211H265.621C265.621 215.36 303.842 253.581 350.99 253.581V254.48V255.378C302.849 255.378 263.823 216.352 263.823 168.211H264.722ZM350.99 254.48V253.581C398.139 253.581 436.36 215.36 436.36 168.211H437.259H438.157C438.157 216.352 399.131 255.378 350.99 255.378V254.48Z"
            data-figma-gradient-fill='{"type":"GRADIENT_ANGULAR","stops":[{"color":{"r":1.0,"g":1.0,"b":1.0,"a":0.0},"position":0.31058219075202942},{"color":{"r":1.0,"g":1.0,"b":1.0,"a":0.15000000596046448},"position":0.50403332710266113},{"color":{"r":1.0,"g":1.0,"b":1.0,"a":0.0},"position":0.68547940254211426}],"stopsVar":[{"color":{"r":1.0,"g":1.0,"b":1.0,"a":0.0},"position":0.31058219075202942},{"color":{"r":1.0,"g":1.0,"b":1.0,"a":0.15000000596046448},"position":0.50403332710266113},{"color":{"r":1.0,"g":1.0,"b":1.0,"a":0.0},"position":0.68547940254211426}],"transform":{"m00":163.14387512207031,"m01":7.1770896911621094,"m02":265.82974243164062,"m10":7.1770896911621094,"m11":-163.14387512207031,"m12":246.19462585449219},"opacity":1.0,"blendMode":"NORMAL","visible":true}'
          /> */}
          {/* <rect
            x="72.075"
            y="80.3893"
            width="109.088"
            height="118.064"
            fill="url(#pattern0_490_1077)"
          />
          <rect
            x="300.479"
            y="110.389"
            width="109.088"
            height="118.064"
            fill="url(#pattern1_490_1077)"
          /> */}
        </g>
      </g>
      <defs>
        <filter
          id="filter0_i_490_1077"
          x="59.3033"
          y="70.9988"
          width="134.565"
          height="134.565"
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
          <feOffset />
          <feGaussianBlur stdDeviation="5.44254" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.513726 0 0 0 0 1 0 0 0 0 0.854902 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_490_1077"
          />
        </filter>
        <clipPath id="bgblur_1_490_1077_clip_path" transform="translate(-59.3033 -70.9988)">
          <circle
            cx="60.0258"
            cy="60.0258"
            r="60.0258"
            transform="matrix(1 0 0 -1 66.5601 198.307)"
          />
        </clipPath>
        <clipPath id="paint12_angular_490_1077_clip_path">
          <path
            opacity="0.5"
            d="M208.855 138.211H207.956C207.956 91.063 169.735 52.8416 122.586 52.8416V51.943V51.0444C170.727 51.0444 209.753 90.0704 209.753 138.211H208.855ZM122.586 51.943V52.8416C75.438 52.8416 37.2167 91.063 37.2167 138.211H36.3181H35.4195C35.4195 90.0704 74.4454 51.0444 122.586 51.0444V51.943ZM36.3181 138.211H37.2167C37.2167 185.36 75.438 223.581 122.586 223.581V224.48V225.378C74.4454 225.378 35.4195 186.352 35.4195 138.211H36.3181ZM122.586 224.48V223.581C169.735 223.581 207.956 185.36 207.956 138.211H208.855H209.753C209.753 186.352 170.727 225.378 122.586 225.378V224.48Z"
          />
        </clipPath>
        <filter
          id="filter1_i_490_1077"
          x="287.707"
          y="100.999"
          width="134.565"
          height="134.565"
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
          <feOffset />
          <feGaussianBlur stdDeviation="5.44254" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.513726 0 0 0 0 1 0 0 0 0 0.854902 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_490_1077"
          />
        </filter>
        <clipPath id="bgblur_2_490_1077_clip_path" transform="translate(-287.707 -100.999)">
          <circle
            cx="60.0258"
            cy="60.0258"
            r="60.0258"
            transform="matrix(1 0 0 -1 294.964 228.307)"
          />
        </clipPath>
        <clipPath id="paint14_angular_490_1077_clip_path">
          <path
            opacity="0.5"
            d="M437.259 168.211H436.36C436.36 121.063 398.139 82.8416 350.99 82.8416V81.943V81.0443C399.131 81.0443 438.157 120.07 438.157 168.211H437.259ZM350.99 81.943V82.8416C303.842 82.8416 265.621 121.063 265.621 168.211H264.722H263.823C263.823 120.07 302.849 81.0443 350.99 81.0443V81.943ZM264.722 168.211H265.621C265.621 215.36 303.842 253.581 350.99 253.581V254.48V255.378C302.849 255.378 263.823 216.352 263.823 168.211H264.722ZM350.99 254.48V253.581C398.139 253.581 436.36 215.36 436.36 168.211H437.259H438.157C438.157 216.352 399.131 255.378 350.99 255.378V254.48Z"
          />
        </clipPath>
        <pattern
          id="pattern0_490_1077"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0_490_1077"
            transform="matrix(0.00546726 0 0 0.00505161 -0.165016 -2.82552)"
          />
        </pattern>
        <pattern
          id="pattern1_490_1077"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image1_490_1077"
            transform="matrix(0.00546726 0 0 0.00505161 -0.165016 -2.82552)"
          />
        </pattern>
        <radialGradient
          id="paint0_radial_490_1077"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(245 138.556) rotate(90) scale(217.006 645.406)"
        >
          <stop stopColor="#D9D9D9" />
          <stop offset="1" stopColor="#737373" stopOpacity="0" />
        </radialGradient>
        <linearGradient
          id="paint1_linear_490_1077"
          x1="192.172"
          y1="151.116"
          x2="15.394"
          y2="130.856"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F8F8F8" />
          <stop offset="1" stopColor="#929292" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_490_1077"
          x1="219.501"
          y1="179.492"
          x2="68.3312"
          y2="222.939"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.4" />
          <stop offset="0.4" stopColor="white" stopOpacity="0.01" />
          <stop offset="0.6" stopColor="white" stopOpacity="0.01" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_490_1077"
          x1="173.128"
          y1="109.134"
          x2="268.363"
          y2="20.8428"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F8F8F8" />
          <stop offset="1" stopColor="#929292" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint4_linear_490_1077"
          x1="298.947"
          y1="91.6989"
          x2="333.47"
          y2="18.943"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.4" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint5_linear_490_1077"
          x1="143.899"
          y1="304.951"
          x2="143.899"
          y2="421.681"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F8F8F8" />
          <stop offset="1" stopColor="#929292" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint6_linear_490_1077"
          x1="183.959"
          y1="275.684"
          x2="167.751"
          y2="377.873"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.4" />
          <stop offset="0.4" stopColor="white" stopOpacity="0.01" />
          <stop offset="0.6" stopColor="white" stopOpacity="0.01" />
        </linearGradient>
        <linearGradient
          id="paint7_linear_490_1077"
          x1="291.79"
          y1="261.978"
          x2="467.404"
          y2="421.681"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F8F8F8" />
          <stop offset="1" stopColor="#929292" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint8_linear_490_1077"
          x1="358.237"
          y1="292.646"
          x2="533.64"
          y2="412.707"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.4" />
          <stop offset="0.765934" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint9_linear_490_1077"
          x1="238.269"
          y1="187.105"
          x2="427.214"
          y2="187.105"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F8F8F8" />
          <stop offset="1" stopColor="#929292" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint10_linear_490_1077"
          x1="190.897"
          y1="214.53"
          x2="415.032"
          y2="330.066"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.4" />
          <stop offset="0.4" stopColor="white" stopOpacity="0.01" />
          <stop offset="0.6" stopColor="white" stopOpacity="0.01" />
        </linearGradient>
        <linearGradient
          id="paint11_linear_490_1077"
          x1="46.1291"
          y1="18.1751"
          x2="17.6114"
          y2="25.4183"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#83FFDA" />
          <stop offset="1" stopColor="#1B1D29" />
        </linearGradient>
        <linearGradient
          id="paint13_linear_490_1077"
          x1="46.1291"
          y1="18.1751"
          x2="17.6114"
          y2="25.4183"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#83FFDA" />
          <stop offset="1" stopColor="#1B1D29" />
        </linearGradient>
        <clipPath id="clip0_490_1077">
          <rect
            width="700.183"
            height="356.06"
            fill="white"
            transform="translate(-105.092 0.53952)"
          />
        </clipPath>
      </defs>
    </motion.svg>
  );
};

export default Feature3SvgComponent;