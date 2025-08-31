"use client"

import type { LogoProps } from "@/types/header.types"
import { motion } from "framer-motion"

export default function Logo({ className = "", onClick }: LogoProps) {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
    onClick?.()
  }

  return (
    <motion.div
      className={`relative cursor-pointer ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      onClick={handleClick}
    >
      <div className="uppercase flex items-center gap-2 text-2xl text-white font-bold relative z-10">
        <svg width="108" height="30" viewBox="0 0 108 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M46.9213 12.9916H42.3191L40.6413 24.9629H36.3653L38.0431 12.9916H33.4409L33.9652 9.39128H47.4417L46.9174 12.9916H46.9213Z" fill="white" />
          <path d="M58.6529 9.3913H62.925L60.7229 24.9668H56.4508L57.3246 18.8517H51.8059L50.932 24.9668H46.6599L48.862 9.3913H53.138L52.2875 15.2707H57.8256L58.6529 9.3913Z" fill="white" />
          <path d="M67.854 19.8059L67.1355 24.9668H62.8596L65.0616 9.3913H71.5164C75.1593 9.3913 77.3808 11.2146 77.3808 14.1621C77.3808 16.5069 75.9865 18.4345 73.7184 19.3037L76.4215 24.9668H71.8193L69.5279 19.8059H67.8501H67.854ZM70.9261 16.4451C72.2543 16.4451 73.1942 15.6416 73.1942 14.5136C73.1942 13.5363 72.4524 12.953 71.1435 12.953H68.8094L68.3279 16.4451H70.9261Z" fill="white" />
          <path d="M84.1188 9.3913L81.9167 24.9668H77.6407L79.8428 9.3913H84.1188Z" fill="white" />
          <path d="M84.054 24.9668L86.256 9.39128H90.532L88.831 21.3626H95.5692L95.0682 24.9629H84.054V24.9668Z" fill="white" />
          <path d="M96.4848 24.9668L98.6868 9.39128H102.963L101.262 21.3626H108L107.499 24.9629H96.4848V24.9668Z" fill="white" />
          <path d="M20.7779 11.0394L28.2575 6.74782L17.8694 0.789474L0 11.0394L10.3881 16.9978L10.3898 5.08108L20.7779 11.0394Z" fill="white" />
          <path d="M10.3898 16.9978L10.3881 16.9978L10.3881 23.2505L20.7779 29.2105L20.7779 11.0394L10.3898 16.9978Z" fill="white" />
        </svg>

      </div>
    </motion.div>
  )
}