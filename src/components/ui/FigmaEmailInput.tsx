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
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="relative w-96 h-14">
        {/* Main gradient border */}
        <div
          className={`absolute inset-0 rounded-full transition-opacity duration-500 ease-in-out ${
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
          className={`absolute inset-0 rounded-full transition-opacity duration-500 ease-in-out ${
            isFocused ? "opacity-100" : "opacity-0"
          }`}
          style={{
            background: "linear-gradient(277.31deg, rgba(50, 50, 122, 0.21) 10.26%, #5CFFC1 43.19%)",
            padding: "3px",
            borderRadius: "9999px",
            zIndex: 5,
            maskImage: "linear-gradient(270deg, white 0%, white 30%, transparent 70%)",
            WebkitMaskImage: "linear-gradient(270deg, white 0%, white 30%, transparent 70%)",
            filter: "blur(3px)",
          }}
        >
          <div className="w-full h-full bg-gray-900 rounded-full" />
        </div>

        <div
          className={`absolute inset-0 rounded-full border-2 transition-opacity duration-500 ease-in-out ${isFocused ? "opacity-0" : "opacity-100"}`}
          style={{
            borderColor: "rgba(159, 171, 199, 0.5)",
          }}
        />

        {/* Input */}
        <div className="relative flex items-center h-full px-6 rounded-full z-20">
          <div
            className={`absolute w-full right-0 bg-transparent h-10 top-0 -translate-y-1/2 backdrop-blur-sm transition-opacity duration-500 ease-in-out ${
              isFocused ? "opacity-100" : "opacity-0"
            }`}
            style={{
              mask: "linear-gradient(to left, green 65%, transparent)",
            }}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full bg-transparent text-white placeholder-gray-400 outline-none border-none text-base"
            style={{
              fontFamily: "inherit",
            }}
            value={formData.email}
            onChange={handleInputChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            required
          />
        </div>
      </div>
    </div>
  )
}
