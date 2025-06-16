"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { clsx } from "clsx";
import { HTMLMotionProps } from "framer-motion";

interface CardProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  variant?: "default" | "glass" | "gradient" | "elevated";
  padding?: "none" | "sm" | "md" | "lg";
  className?: string;
  hover?: boolean;
}

export function Card({
  children,
  variant = "default",
  padding = "md",
  className,
  hover = true,
  ...props
}: CardProps) {
  const baseClasses = "rounded-xl transition-all duration-300";

  const variants = {
    default: "bg-slate-800 border border-slate-700",
    glass: "glass-effect backdrop-blur-md bg-white/10 border border-white/20",
    gradient: "bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700",
    elevated: "bg-slate-800 border border-slate-700 shadow-xl shadow-black/20",
  };

  const paddings = {
    none: "",
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  const hoverClasses = hover ? "hover:bg-white/5 hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/10" : "";

  const cardClasses = clsx(
    baseClasses,
    variants[variant],
    paddings[padding],
    hoverClasses,
    className
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={hover ? { y: -5 } : {}}
      className={cardClasses}
      {...props}
    >
      {children}
    </motion.div>
  );
}

interface CardHeaderProps {
  children: ReactNode;
  className?: string;
}

export function CardHeader({ children, className }: CardHeaderProps) {
  return (
    <div className={clsx("mb-4", className)}>
      {children}
    </div>
  );
}

interface CardTitleProps {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export function CardTitle({ children, className, as: Component = "h3" }: CardTitleProps) {
  return (
    <Component className={clsx("text-xl font-semibold text-white mb-2", className)}>
      {children}
    </Component>
  );
}

interface CardDescriptionProps {
  children: ReactNode;
  className?: string;
}

export function CardDescription({ children, className }: CardDescriptionProps) {
  return (
    <p className={clsx("text-gray-400 leading-relaxed", className)}>
      {children}
    </p>
  );
}

interface CardContentProps {
  children: ReactNode;
  className?: string;
}

export function CardContent({ children, className }: CardContentProps) {
  return (
    <div className={clsx("mb-4", className)}>
      {children}
    </div>
  );
}

interface CardFooterProps {
  children: ReactNode;
  className?: string;
}

export function CardFooter({ children, className }: CardFooterProps) {
  return (
    <div className={clsx("mt-auto pt-4 border-t border-slate-700", className)}>
      {children}
    </div>
  );
}

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
}

export function FeatureCard({ icon, title, description, className }: FeatureCardProps) {
  return (
    <Card variant="glass" hover className={clsx("text-center", className)}>
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg mb-4"
      >
        {icon}
      </motion.div>
      <CardTitle className="text-lg">{title}</CardTitle>
      <CardDescription className="text-sm">{description}</CardDescription>
    </Card>
  );
}

interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  className?: string;
}

export function ProjectCard({
  title,
  description,
  image,
  technologies,
  githubUrl,
  demoUrl,
  className
}: ProjectCardProps) {
  return (
    <Card variant="glass" className={clsx("overflow-hidden group", className)}>
      {image && (
        <div className="relative h-48 -m-6 mb-6 overflow-hidden">
          <div className="w-full h-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
            <span className="text-white font-semibold text-lg">{title}</span>
          </div>
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
            {githubUrl && (
              <motion.a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </motion.a>
            )}
            {demoUrl && (
              <motion.a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
              >
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </motion.a>
            )}
          </div>
        </div>
      )}
      
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>

      <CardFooter className="border-t-0 pt-0">
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs bg-slate-800 text-gray-300 rounded-full border border-slate-700"
            >
              {tech}
            </span>
          ))}
        </div>
      </CardFooter>
    </Card>
  );
}