"use client"
import { motion } from "framer-motion"
import { Button } from "../ui/Button"
import { useNavigate } from "@/hooks/useNavigate"

export default function SignInButton() {
  const { navigate } = useNavigate([
    { label: "SignIn", url: "#signin" }
  ])

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      <Button
        className="!shadow-signin-glow"
        onClick={() => navigate({ label: "SignIn", url: "#signin" })}
      >
        sign in
      </Button>
    </motion.div>
  )
}
