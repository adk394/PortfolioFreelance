import { motion } from "motion/react";
 

export default function Reveal({ children, delay = 0 }) {
  return (
    <motion.div
    className="flex justify-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
