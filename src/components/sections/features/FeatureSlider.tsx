"use client";
import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, easeOut, easeIn, useScroll, useTransform } from "framer-motion";
import { features } from "@/constants/data/features";
import FeatureCard from "./FeatureCard";
import { ScrollVelocityContainer, ScrollVelocityRow } from "@/components/ui/ScrollVelocityRow";
import GlareHover from "@/components/ui/GlareHover";

export default function FeatureSlider() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [selectedFeature, setSelectedFeature] = useState<typeof features[0] | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const sectionOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const sectionY = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [30, 0, 0, -50]);
  const sectionScale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.95, 1, 1, 0.9]);

  useEffect(() => {
    if (selectedFeature) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedFeature]);

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 50, transition: { duration: 0.3, ease: easeOut } },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.3, ease: easeOut, when: "beforeChildren", staggerChildren: 0.1 },
    },
    exit: { opacity: 0, scale: 0.95, y: 50, transition: { duration: 0.25, ease: easeIn } },
  };

  const cardContentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: easeOut } },
  };

  return (
    <section ref={sectionRef} className="relative w-full z-10 bg-body">
      <motion.div
        style={{ opacity: sectionOpacity, y: sectionY, scale: sectionScale }}
        className="w-full bg-body"
      >
        <ScrollVelocityContainer className="w-full bg-body">
          <ScrollVelocityRow baseVelocity={8} direction={1} className="">
            {features.map((feature, index) => (
              <div
                key={index}
                className="mx-3 2xl:w-full xl:w-full lg:w-[24rem] md:w-[22rem] sm:w-[20rem] w-[22rem] bg-body"
              >
                <GlareHover className="bg-body">
                  <FeatureCard
                    {...feature}
                    onExpand={() => setSelectedFeature(feature)}
                  />
                </GlareHover>
              </div>
            ))}
          </ScrollVelocityRow>
        </ScrollVelocityContainer>
      </motion.div>

      <AnimatePresence>
        {selectedFeature && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-[10000] flex items-center justify-center overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: easeOut }}
            onClick={() => setSelectedFeature(null)}
          >
            <motion.div
              className="relative max-w-[490px] w-full m-4 sm:m-8"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div variants={cardContentVariants}>
                <FeatureCard
                  {...selectedFeature}
                  isExpanded={true}
                  onClose={() => setSelectedFeature(null)}
                  isModal={true}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}