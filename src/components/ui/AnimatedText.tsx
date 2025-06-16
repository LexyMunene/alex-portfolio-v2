"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  variant?: "fade" | "slideUp" | "slideLeft" | "typewriter";
}

export function AnimatedText({ 
  text, 
  className = "", 
  delay = 0, 
  duration = 0.5,
  variant = "fade" 
}: AnimatedTextProps) {
  const variants = {
    fade: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
    },
    slideUp: {
      initial: { opacity: 0, y: 30 },
      animate: { opacity: 1, y: 0 },
    },
    slideLeft: {
      initial: { opacity: 0, x: -30 },
      animate: { opacity: 1, x: 0 },
    },
    typewriter: {
      initial: { width: 0 },
      animate: { width: "auto" },
    },
  };

  const selectedVariant = variants[variant];

  if (variant === "typewriter") {
    return (
      <motion.div
        initial={selectedVariant.initial}
        animate={selectedVariant.animate}
        transition={{ delay, duration, ease: "easeOut" }}
        className={`overflow-hidden whitespace-nowrap ${className}`}
      >
        {text}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={selectedVariant.initial}
      animate={selectedVariant.animate}
      transition={{ delay, duration, ease: "easeOut" }}
      className={className}
    >
      {text}
    </motion.div>
  );
}

interface AnimatedWordsProps {
  text: string;
  className?: string;
  delay?: number;
  staggerChildren?: number;
}

export function AnimatedWords({ 
  text, 
  className = "", 
  delay = 0, 
  staggerChildren = 0.1 
}: AnimatedWordsProps) {
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay,
        staggerChildren,
      },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={child}
          className="inline-block mr-2"
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}

interface AnimatedLettersProps {
  text: string;
  className?: string;
  delay?: number;
  staggerChildren?: number;
}

export function AnimatedLetters({ 
  text, 
  className = "", 
  delay = 0, 
  staggerChildren = 0.03 
}: AnimatedLettersProps) {
  const letters = text.split("");

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay,
        staggerChildren,
      },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          variants={child}
          className="inline-block"
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  );
}