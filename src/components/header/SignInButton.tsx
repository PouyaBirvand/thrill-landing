"use client"
import { motion } from "framer-motion"
import { Button } from "../ui/Button"

export default function SignInButton() {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
        >
            <Button className="!shadow-signin-glow">
                sign in
            </Button>
        </motion.div>
    )
}