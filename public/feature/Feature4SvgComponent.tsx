import * as React from "react";
import { motion } from "framer-motion";

const Feature4SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="85"
    height="37"
    fill="none"
    viewBox="0 0 85 37"
    {...props}
  >
   <motion.path
      d="M83.438 1.223 47.89 35.858H.784"
      stroke="#fff"
      strokeDasharray="8.96 8.96"
      strokeOpacity="0.3"
      strokeWidth="1.823"
      animate={{ 
        strokeDashoffset: [-17.92, 17.92]
      }}
      transition={{ 
        duration: 3, 
        repeat: Infinity, 
        ease: "easeInOut",
        repeatType: "reverse"
      }}
    />
  </svg>
);

export default Feature4SvgComponent;