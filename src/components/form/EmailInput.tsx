"use client"

import type React from "react"
import { useState } from "react"

export default function FigmaEmailInput() {
  const [formData, setFormData] = useState({ email: "" })
  const [isFocused, setIsFocused] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="relative w-96 h-14">
        {/* Main border */}
        <div
          className={`absolute inset-0 rounded-full transition-all duration-300 ease-in-out ${
            isFocused ? "opacity-100" : "opacity-0"
          }`}
          style={{
            background: "linear-gradient(277.31deg, rgba(50, 50, 122, 0.21) 10.26%, #5CFFC1 43.19%)",
            padding: "3px",
            borderRadius: "9999px",
          }}
        >
          <div className="w-full h-full bg-gray-900 rounded-full" />
        </div>

        <div
          className={`absolute inset-0 rounded-full transition-all duration-300 ease-in-out ${
            isFocused ? "opacity-100" : "opacity-0"
          }`}
          style={{
            background: "linear-gradient(277.31deg, rgba(50, 50, 122, 0.21) 10.26%, #5CFFC1 43.19%)",
            padding: "3px",
            borderRadius: "9999px",
            zIndex: 5,
            maskImage: "linear-gradient(270deg, white 0%, white 30%, transparent 70%)",
            WebkitMaskImage: "linear-gradient(270deg, white 0%, white 30%, transparent 50%)",
            filter: "blur(3px)",
          }}
        >
          <div className="w-full h-full bg-gray-900 rounded-full" />
        </div>

        {/* Static border */}
        <div
          className={`absolute inset-0 rounded-full border-3 transition-all duration-300 ease-in-out ${
            isFocused ? "opacity-0" : "opacity-100"
          }`}
          style={{
            borderColor: "rgba(159, 171, 199, 0.5)",
          }}
        />

        {/* Input */}
        <div className="relative flex items-center h-full px-6 rounded-full z-20">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className="w-full bg-transparent text-white placeholder-gray-400 outline-none border-none text-base"
            style={{
              fontFamily: "inherit",
            }}
            required
          />
        </div>
      </div>
    </div>
  )
}
