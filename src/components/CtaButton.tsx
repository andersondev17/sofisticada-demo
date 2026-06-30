import React from "react";
import { motion } from "motion/react";

interface CtaButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  id?: string;
}

export function CtaButton({ onClick, children, id }: CtaButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="bg-white text-black rounded-full px-8 py-4 text-sm font-semibold tracking-wider uppercase hover:bg-neutral-100 transition-all cursor-pointer shadow-lg font-body"
      id={id}
    >
      {children}
    </motion.button>
  );
}
