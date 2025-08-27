"use client"
import { motion } from "framer-motion"
import { Button } from "../ui/Button"
import { useNavigate } from "@/hooks/useNavigate"

type SignInButtonProps = {
  onClick?: () => void
  size?: "full" | "normal"
}

export default function SignInButton({ onClick, size = "normal" }: SignInButtonProps) {
  const { navigate } = useNavigate([
    { label: "SignIn", url: "#signin" },
  ])

  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
      <Button
        className={`!shadow-signin-glow ${size === "full" ? "w-full font-light" : ""}`}
        onClick={() => {
          navigate({ label: "SignIn", url: "#signin" })
          onClick?.()
        }}
      >
        sign in
      </Button>
    </motion.div>
  )
}

