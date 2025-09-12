import * as React from "react";
import { motion } from "framer-motion";

const Feature2SvgComponent = () => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    width="629"
    height="453"
    fill="none"
    viewBox="30 55 809 539"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1, ease: "easeInOut" }}
  >
    <g clipPath="url(#clip0_2055_279)">
      <mask
        id="mask0_2055_279"
        width="755"
        height="391"
        x="-55"
        y="24"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
      >
        <path
          fill="url(#paint0_radial_2055_279)"
          d="M322.5 415C530.987 415 700 327.472 700 219.5S530.987 24 322.5 24-55 111.528-55 219.5 114.013 415 322.5 415"
        ></path>
      </mask>
      <g mask="url(#mask0_2055_279)">
        <motion.path
          stroke="url(#paint1_linear_2055_279)"
          strokeDasharray="6.73 6.73"
          strokeOpacity="0.3"
          strokeWidth="1.858"
          d="M43.021 24.565v469.988"
          initial={{ strokeDashoffset: 0 }}
          animate={{ strokeDashoffset: -13.46 }} // Doubled dasharray for smooth run toward center
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        ></motion.path>
        <motion.path
          className="responsive-path"
          stroke="url(#paint2_linear_2055_279)"
          strokeDasharray="6.73 6.73"
          strokeOpacity="0.3"
          strokeWidth="1.858"
          d="M628.256 220.54H51.031"
          initial={{ strokeDashoffset: 0 }}
          animate={{ strokeDashoffset: -13.46 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
        <motion.g
          filter="url(#filter0_i_2055_279)"
          initial={{ y: 50, x: -50, opacity: 0 }} // Start from bottom-left
          animate={{ y: -50, x: 50, opacity: 1 }} // Move to top-right with fade in
          transition={{ duration: 5, repeat: Infinity, repeatType: "loop", ease: "linear" }} // Infinite scroll-like motion
        >
          <path
            fill="#fff"
            fillOpacity="0.01"
            d="M332.728 15.507c0-6.832 0-10.248 1.33-12.857a12.2 12.2 0 0 1 5.33-5.33c2.61-1.33 6.025-1.33 12.857-1.33h72.306c6.831 0 10.247 0 12.856 1.33a12.2 12.2 0 0 1 5.331 5.33c1.33 2.61 1.33 6.025 1.33 12.857v72.305c0 6.832 0 10.248-1.33 12.857a12.2 12.2 0 0 1-5.331 5.331c-2.609 1.329-6.025 1.329-12.856 1.329h-72.306c-6.832 0-10.247 0-12.857-1.329a12.2 12.2 0 0 1-5.33-5.331c-1.33-2.61-1.33-6.025-1.33-12.857z"
            style={{ mixBlendMode: "luminosity" }}
          ></path>
          <path
            stroke="url(#paint3_linear_2055_279)"
            strokeOpacity="0.25"
            strokeWidth="1.525"
            d="M352.245-3.248h72.305c3.429 0 5.955 0 7.95.164 1.987.162 3.382.482 4.561 1.083a11.43 11.43 0 0 1 4.998 4.998c.601 1.179.921 2.573 1.083 4.56.163 1.996.163 4.521.163 7.95v72.305c0 3.428 0 5.954-.163 7.95-.162 1.987-.482 3.382-1.083 4.561a11.44 11.44 0 0 1-4.998 4.998c-1.179.601-2.574.921-4.561 1.083-1.995.163-4.521.163-7.95.163h-72.304c-3.429 0-5.955 0-7.951-.163-1.986-.162-3.381-.482-4.56-1.083a11.44 11.44 0 0 1-4.998-4.998c-.601-1.18-.921-2.574-1.083-4.56-.163-1.997-.163-4.523-.163-7.951V15.507c0-3.428 0-5.954.163-7.95.162-1.987.482-3.381 1.083-4.56a11.43 11.43 0 0 1 4.998-4.998c1.179-.601 2.574-.921 4.56-1.083 1.996-.164 4.521-.164 7.95-.164Z"
          ></path>
          <mask
            id="mask1_2055_279"
            width="29"
            height="29"
            x="374"
            y="37"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "luminance" }}
          >
            <path fill="#fff" d="M402.225 37.833h-27.654v27.654h27.654z"></path>
          </mask>
          <g mask="url(#mask1_2055_279)">
            <path
              fill="#fff"
              fillRule="evenodd"
              d="M384.65 38.11c-.355 0-.66.025-.914.063-.721.106-1.105.758-1.105 1.404v1.981c-.513.08-1.007.182-1.458.315h-.003c-.41.124-.752.296-1.007.527-.289.263-.415.63-.415 1.056v15.366c0 .48.15.902.458 1.245.303.338.741.58 1.285.744l.004.001c.356.102.739.19 1.136.263v2.667c0 .646.384 1.298 1.105 1.404.254.038.559.064.914.064s.659-.026.913-.064c.721-.106 1.104-.758 1.104-1.404v-2.291a36 36 0 0 0 1.154.009v2.282c0 .646.384 1.298 1.105 1.404.253.038.558.064.913.064s.66-.026.914-.064c.72-.106 1.104-.758 1.104-1.404V60.85c2.67-.796 5.19-2.497 5.19-5.675 0-2.172-1.468-3.6-3.242-4.32a4 4 0 0 0 1.374-1.229c.473-.69.714-1.542.714-2.537 0-2.679-1.883-4.228-4.036-5.034v-2.478c0-.646-.384-1.298-1.104-1.404a6 6 0 0 0-.914-.064 6 6 0 0 0-.913.064c-.721.106-1.105.758-1.105 1.404v1.711a13 13 0 0 0-.449-.007q-.338 0-.705.003v-1.707c0-.646-.383-1.298-1.104-1.404a6 6 0 0 0-.913-.064m-.289 10.408V45.58c.871-.1 2.044-.12 2.883-.12 1.284 0 2.162.187 2.71.495.525.295.75.701.75 1.217 0 .314-.089.546-.233.724q-.223.274-.664.443c-.595.23-1.413.293-2.275.293a47 47 0 0 1-3.143-.112zm0 8.113v-3.414l.032-.002a54.292 54.292 0 0 1 3.428-.113c.994 0 1.956.12 2.659.429.349.152.62.345.803.578.18.23.286.51.286.866 0 .41-.136.717-.357.957-.228.246-.559.435-.966.576-.817.282-1.857.341-2.714.341a25 25 0 0 1-2.347-.126c-.322-.031-.59-.063-.778-.086z"
              clipRule="evenodd"
            ></path>
          </g>
        </motion.g>
        <motion.g
          filter="url(#filter1_i_2055_279)"
          initial={{ y: 50, x: -50, opacity: 0 }} // Start from bottom-left
          animate={{ y: -50, x: 50, opacity: 1 }} // Move to top-right with fade in
          transition={{ duration: 5, repeat: Infinity, repeatType: "loop", ease: "linear", delay: 0.5 }} // Infinite scroll-like motion with delay for stagger
        >
          <path
            fill="#fff"
            fillOpacity="0.01"
            d="M103.321 244.759H16.686c-6.737 0-12.198 5.461-12.198 12.198v86.635c0 6.737 5.461 12.198 12.198 12.198h86.635c6.736 0 12.198-5.461 12.198-12.198v-86.635c0-6.737-5.462-12.198-12.198-12.198"
            style={{ mixBlendMode: "luminosity" }}
          ></path>
          <path
            stroke="url(#paint4_linear_2055_279)"
            strokeOpacity="0.25"
            strokeWidth="1.525"
            d="M103.32 245.522H16.686c-6.316 0-11.436 5.12-11.436 11.436v86.634c0 6.316 5.12 11.436 11.436 11.436h86.634c6.316 0 11.436-5.12 11.436-11.436v-86.634c0-6.316-5.12-11.436-11.436-11.436Z"
          ></path>
          <mask
            id="mask2_2055_279"
            width="28"
            height="29"
            x="46"
            y="286"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "luminance" }}
          >
            <path fill="#fff" d="M73.83 286.447H46.176v27.654H73.83z"></path>
          </mask>
          <g mask="url(#mask2_2055_279)">
            <path
              fill="#fff"
              fillRule="evenodd"
              d="M63.139 286.724c-5.298 0-9.87 3.752-11.591 8.966-.958.011-1.667.024-2.147.034-.563.013-1.188.291-1.352.946a4.2 4.2 0 0 0-.115 1.01c0 .408.048.742.115 1.01.164.654.79.933 1.353.945.35.008.823.017 1.427.025a15 15 0 0 0 0 1.229c-.604.008-1.077.017-1.428.025-.563.012-1.188.291-1.352.945a4.2 4.2 0 0 0-.115 1.01c0 .408.048.743.115 1.01.164.655.79.933 1.352.946.48.01 1.189.023 2.147.034 1.72 5.214 6.293 8.966 11.59 8.966 4.507 0 7.206-1.826 8.332-2.811.469-.409.727-1.044.543-1.682-.194-.672-.574-1.373-1.023-1.949-.647-.83-1.761-.715-2.534-.236-1.49.923-3.44 1.759-5.29 1.582-2.928-.282-4.695-1.828-5.659-3.842a346 346 0 0 0 6.834-.062c.563-.013 1.188-.291 1.352-.946.067-.267.116-.602.116-1.01s-.049-.742-.116-1.01c-.163-.654-.79-.933-1.352-.945-1.13-.024-3.533-.063-7.47-.063h-.303a13 13 0 0 1 0-1.153h.303c3.937 0 6.34-.039 7.47-.063.563-.012 1.188-.291 1.352-.945.067-.268.116-.602.116-1.01s-.049-.743-.116-1.01c-.164-.655-.79-.933-1.352-.946a346 346 0 0 0-6.834-.062c.964-2.014 2.731-3.56 5.66-3.842 1.85-.177 3.8.659 5.29 1.582.772.479 1.886.594 2.533-.236.449-.576.829-1.277 1.023-1.949.184-.638-.074-1.273-.543-1.682-1.126-.985-3.825-2.811-8.331-2.811"
              clipRule="evenodd"
            ></path>
          </g>
        </motion.g>
        <motion.g
          filter="url(#filter2_i_2055_279)"
          initial={{ y: 50, x: -50, opacity: 0 }} // Start from bottom-left
          animate={{ y: -50, x: 50, opacity: 1 }} // Move to top-right with fade in
          transition={{ duration: 5, repeat: Infinity, repeatType: "loop", ease: "linear", delay: 1 }} // Infinite scroll-like motion with delay for stagger
        >
          <path
            fill="#fff"
            fillOpacity="0.01"
            d="M582.411 270.557h-58.549c-6.438 0-11.658 5.219-11.658 11.658v58.549c0 6.438 5.22 11.657 11.658 11.657h58.549c6.438 0 11.658-5.219 11.658-11.657v-58.549c0-6.439-5.22-11.658-11.658-11.658"
            style={{ mixBlendMode: "luminosity" }}
          ></path>
          <path
            stroke="url(#paint5_linear_2055_279)"
            strokeOpacity="0.25"
            strokeWidth="1.457"
            d="M582.411 271.286h-58.549c-6.036 0-10.929 4.893-10.929 10.929v58.549c0 6.036 4.893 10.929 10.929 10.929h58.549c6.036 0 10.93-4.893 10.93-10.929v-58.549c0-6.036-4.894-10.929-10.93-10.929Z"
          ></path>
          <mask
            id="mask3_2055_279"
            width="29"
            height="30"
            x="544"
            y="296"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "luminance" }}
          >
            <path fill="#fff" d="M572.896 296.637h-28v29h28z"></path>
          </mask>
          <g mask="url(#mask3_2055_279)">
            <path
              fill="#fff"
              fillRule="evenodd"
              d="M552.283 296.983c-1.153-.039-2.323.581-3.091 1.091-.731.485-.869 1.457-.465 2.196l5.452 9.98a291 291 0 0 0-3.426.049c-.547.012-1.164.281-1.344.94a4.2 4.2 0 0 0-.137 1.107c0 .451.059.818.137 1.107.18.659.797.928 1.344.94.913.02 2.679.049 5.439.062l.031 1.22c-2.778.012-4.554.042-5.47.061-.547.012-1.164.281-1.344.941a4.2 4.2 0 0 0-.137 1.106c0 .452.059.819.137 1.107.18.66.797.929 1.344.94.928.02 2.738.051 5.577.063l.095 3.728c.022.887.668 1.644 1.548 1.692a18 18 0 0 0 1.847 0c.881-.048 1.527-.805 1.549-1.692l.095-3.728c2.839-.012 4.65-.043 5.577-.063.548-.011 1.165-.28 1.345-.94a4.2 4.2 0 0 0 .136-1.107c0-.451-.058-.818-.136-1.106-.18-.66-.797-.929-1.345-.941-.916-.019-2.692-.049-5.47-.061l.031-1.22c2.76-.013 4.527-.042 5.439-.062.548-.012 1.165-.281 1.345-.94.078-.289.136-.656.136-1.107 0-.452-.058-.818-.136-1.107-.18-.659-.797-.928-1.345-.94-.667-.014-1.791-.034-3.426-.049l5.453-9.98c.404-.739.265-1.711-.466-2.196-.768-.51-1.938-1.13-3.092-1.091-.584.02-1.017.44-1.261.893-.998 1.847-3.971 7.371-5.352 10.184-1.382-2.813-4.354-8.337-5.352-10.184-.245-.453-.677-.873-1.262-.893"
              clipRule="evenodd"
            ></path>
          </g>
        </motion.g>
        <motion.g
          filter="url(#filter3_i_2055_279)"
          initial={{ y: 50, x: -50, opacity: 0 }} // Start from bottom-left
          animate={{ y: -50, x: 50, opacity: 1 }} // Move to top-right with fade in
          transition={{ duration: 5, repeat: Infinity, repeatType: "loop", ease: "linear", delay: 1.5 }} // Infinite scroll-like motion with delay for stagger
        >
          <path
            fill="#fff"
            fillOpacity="0.01"
            d="M55.822 53.587c0-6.831 0-10.247 1.33-12.857a12.2 12.2 0 0 1 5.33-5.33c2.61-1.33 6.025-1.33 12.857-1.33h116.44c6.831 0 10.247 0 12.857 1.33a12.2 12.2 0 0 1 5.33 5.33c1.33 2.61 1.33 6.026 1.33 12.857v116.44c0 6.832 0 10.247-1.33 12.857a12.2 12.2 0 0 1-5.33 5.33c-2.61 1.33-6.026 1.33-12.857 1.33H75.339c-6.832 0-10.247 0-12.857-1.33a12.2 12.2 0 0 1-5.33-5.33c-1.33-2.61-1.33-6.025-1.33-12.857z"
            style={{ mixBlendMode: "luminosity" }}
          ></path>
          <path
            stroke="url(#paint6_linear_2055_279)"
            strokeOpacity="0.25"
            strokeWidth="1.525"
            d="M75.339 34.833h116.44c3.428 0 5.954 0 7.949.163 1.987.162 3.383.482 4.562 1.083a11.44 11.44 0 0 1 4.997 4.998c.601 1.18.921 2.574 1.083 4.56.163 1.996.164 4.522.164 7.95v116.44c0 3.428-.001 5.954-.164 7.949-.162 1.987-.482 3.383-1.083 4.562a11.44 11.44 0 0 1-4.997 4.997c-1.179.601-2.575.921-4.562 1.083-1.995.163-4.521.164-7.949.164H75.339c-3.428 0-5.954-.001-7.95-.164-1.986-.162-3.38-.482-4.56-1.083a11.43 11.43 0 0 1-4.998-4.997c-.601-1.179-.92-2.575-1.083-4.562-.163-1.995-.163-4.521-.163-7.949V53.587c0-3.428 0-5.954.163-7.95.162-1.986.482-3.38 1.083-4.56a11.44 11.44 0 0 1 4.998-4.998c1.18-.6 2.574-.92 4.56-1.083 1.996-.163 4.522-.163 7.95-.163Z"
          ></path>
          <mask
            id="mask4_2055_279"
            width="29"
            height="29"
            x="119"
            y="97"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "luminance" }}
          >
            <path fill="#fff" d="M147.386 97.98h-27.654v27.654h27.654z"></path>
          </mask>
          <g mask="url(#mask4_2055_279)">
            <path
              fill="#fff"
              fillRule="evenodd"
              d="M139.68 102.888c-1.099-.935-2.625-1.274-4.105-1.392v-1.694c0-.744-.48-1.408-1.219-1.49a7.3 7.3 0 0 0-1.594 0c-.739.082-1.22.746-1.22 1.49v1.828c-3.099.532-6.049 2.226-6.049 5.839 0 3.884 3.52 5.198 6.607 6.222.197.063.446.127.72.197 1.242.316 3.02.769 3.02 1.964 0 1.459-2.101 1.716-3.145 1.716-1.457 0-3.041-.36-4.326-1.038-.692-.364-1.541-.508-2.087.054-.411.422-.789 1.04-.789 1.884q0 1.194.973 2.032c1.354 1.168 3.277 1.545 5.076 1.645v1.667c0 .744.481 1.408 1.22 1.49.242.026.511.044.797.044s.555-.018.797-.044c.739-.082 1.219-.746 1.219-1.49v-1.896c3.109-.598 6.05-2.303 6.05-5.932 0-3.822-3.375-5.573-6.6-6.552a11 11 0 0 0-.747-.184c-1.217-.274-3.064-.691-3.064-1.719 0-1.31 2.33-1.483 3.209-1.483 1.096 0 2.261.321 3.328.761.821.339 1.817.333 2.282-.429.313-.516.518-1.103.518-1.651q0-1.13-.871-1.839"
              clipRule="evenodd"
            ></path>
          </g>
        </motion.g>
      </g>
    </g>
    <defs>
      <linearGradient
        id="paint1_linear_2055_279"
        x1="-nan"
        x2="-nan"
        y1="-nan"
        y2="-nan"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff"></stop>
        <stop offset="0.771" stopColor="#fff" stopOpacity="0.2"></stop>
      </linearGradient>
      <linearGradient
        id="paint2_linear_2055_279"
        x1="-nan"
        x2="-nan"
        y1="-nan"
        y2="-nan"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff"></stop>
        <stop offset="0.771" stopColor="#fff" stopOpacity="0.2"></stop>
      </linearGradient>
      <linearGradient
        id="paint3_linear_2055_279"
        x1="364.331"
        x2="492.909"
        y1="138.932"
        y2="36.327"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" stopOpacity="0.4"></stop>
        <stop offset="0.4" stopColor="#fff" stopOpacity="0.01"></stop>
        <stop offset="0.6" stopColor="#fff" stopOpacity="0.01"></stop>
        <stop offset="1" stopColor="#fff" stopOpacity="0.1"></stop>
      </linearGradient>
      <linearGradient
        id="paint4_linear_2055_279"
        x1="36.003"
        x2="164.224"
        y1="387.305"
        y2="284.985"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" stopOpacity="0.4"></stop>
        <stop offset="0.4" stopColor="#fff" stopOpacity="0.01"></stop>
        <stop offset="0.6" stopColor="#fff" stopOpacity="0.01"></stop>
        <stop offset="1" stopColor="#fff" stopOpacity="0.1"></stop>
      </linearGradient>
      <linearGradient
        id="paint5_linear_2055_279"
        x1="553.136"
        x2="588.749"
        y1="270.557"
        y2="360.455"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" stopOpacity="0.4"></stop>
        <stop offset="0.4" stopColor="#fff" stopOpacity="0.01"></stop>
        <stop offset="0.6" stopColor="#fff" stopOpacity="0.01"></stop>
        <stop offset="1" stopColor="#fff" stopOpacity="0.1"></stop>
      </linearGradient>
      <linearGradient
        id="paint6_linear_2055_279"
        x1="97.947"
        x2="285.806"
        y1="203.989"
        y2="125.104"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" stopOpacity="0.4"></stop>
        <stop offset="0.4" stopColor="#fff" stopOpacity="0.01"></stop>
        <stop offset="0.6" stopColor="#fff" stopOpacity="0.01"></stop>
        <stop offset="1" stopColor="#fff" stopOpacity="0.1"></stop>
      </linearGradient>
      <filter
        id="filter0_i_2055_279"
        width="314.642"
        height="314.642"
        x="231.077"
        y="-105.661"
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
        <feBlend
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        ></feBlend>
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        ></feColorMatrix>
        <feOffset dx="2.033" dy="4.066"></feOffset>
        <feGaussianBlur stdDeviation="8.132"></feGaussianBlur>
        <feComposite
          in2="hardAlpha"
          k2="-1"
          k3="1"
          operator="arithmetic"
        ></feComposite>
        <feColorMatrix values="0 0 0 0 0.972549 0 0 0 0 0.972549 0 0 0 0 0.972549 0 0 0 0.06 0"></feColorMatrix>
        <feBlend in2="shape" result="effect1_innerShadow_2055_279"></feBlend>
      </filter>
      <filter
        id="filter1_i_2055_279"
        width="314.333"
        height="314.333"
        x="-97.163"
        y="143.108"
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
        <feBlend
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        ></feBlend>
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        ></feColorMatrix>
        <feOffset dx="2.033" dy="4.066"></feOffset>
        <feGaussianBlur stdDeviation="8.132"></feGaussianBlur>
        <feComposite
          in2="hardAlpha"
          k2="-1"
          k3="1"
          operator="arithmetic"
        ></feComposite>
        <feColorMatrix values="0 0 0 0 0.972549 0 0 0 0 0.972549 0 0 0 0 0.972549 0 0 0 0.06 0"></feColorMatrix>
        <feBlend in2="shape" result="effect1_innerShadow_2055_279"></feBlend>
      </filter>
      <filter
        id="filter2_i_2055_279"
        width="276.162"
        height="276.162"
        x="415.056"
        y="173.409"
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
        <feBlend
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        ></feBlend>
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        ></feColorMatrix>
        <feOffset dx="1.943" dy="3.886"></feOffset>
        <feGaussianBlur stdDeviation="7.772"></feGaussianBlur>
        <feComposite
          in2="hardAlpha"
          k2="-1"
          k3="1"
          operator="arithmetic"
        ></feComposite>
        <feColorMatrix values="0 0 0 0 0.972549 0 0 0 0 0.972549 0 0 0 0 0.972549 0 0 0 0.06 0"></feColorMatrix>
        <feBlend in2="shape" result="effect1_innerShadow_2055_279"></feBlend>
      </filter>
      <filter
        id="filter3_i_2055_279"
        width="358.776"
        height="358.776"
        x="-45.829"
        y="-67.581"
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
        <feBlend
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        ></feBlend>
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        ></feColorMatrix>
        <feOffset dx="2.033" dy="4.066"></feOffset>
        <feGaussianBlur stdDeviation="8.132"></feGaussianBlur>
        <feComposite
          in2="hardAlpha"
          k2="-1"
          k3="1"
          operator="arithmetic"
        ></feComposite>
        <feColorMatrix values="0 0 0 0 0.972549 0 0 0 0 0.972549 0 0 0 0 0.972549 0 0 0 0.06 0"></feColorMatrix>
        <feBlend in2="shape" result="effect1_innerShadow_2055_279"></feBlend>
      </filter>
      <radialGradient
        id="paint0_radial_2055_279"
        cx="0"
        cy="0"
        r="1"
        gradientTransform="rotate(76.007 21.566 325.638)scale(194.809 360.161)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#D9D9D9"></stop>
        <stop offset="0.615" stopColor="#D8D8D8" stopOpacity="0.986"></stop>
        <stop offset="1" stopColor="#737373" stopOpacity="0"></stop>
      </radialGradient>
      <clipPath id="clip0_2055_279">
        <path fill="#fff" d="M0 0h629v433H0z"></path>
      </clipPath>
    </defs>
  </motion.svg>
);

export default Feature2SvgComponent;