"use client"
import { Button } from "@/components/ui/Button"
import { motion } from "framer-motion"

export default function HeroCTAButton() {
    return (
        <motion.div 
            className="relative"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
        >
            <Button 
                size="lg"
                className="relative !shadow-primary-glow"
            >
                become an affiliate
            </Button>
        </motion.div>
    )
}