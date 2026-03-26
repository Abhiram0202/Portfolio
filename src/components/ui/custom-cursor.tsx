"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

const SharpArrow = ({ className, strokeWidth = 1.5, style }: { className?: string, strokeWidth?: number, style?: React.CSSProperties }) => (
  // Base 28x28 grid so it matches the hovered version perfectly
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 28 28" 
    className={className}
    fill="currentColor"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    style={style}
  >
    <path 
      d="M8 8v14l3.5-3.5 3 6 1.5-.75-3-6h4L8 8z" 
      strokeLinejoin="round"
      strokeLinecap="round"
    />
  </svg>
);

const SharpArrowHover = ({ className, strokeWidth = 1.5, style }: { className?: string, strokeWidth?: number, style?: React.CSSProperties }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 28 28" 
    className={className}
    fill="currentColor"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    style={style}
  >
    {/* The Arrow */}
    <path 
      d="M8 8v14l3.5-3.5 3 6 1.5-.75-3-6h4L8 8z" 
      strokeLinejoin="round"
      strokeLinecap="round"
    />
    {/* The 3 radiating burst lines precisely placed over the tip (8,8) */}
    <path
      d="M2.5 2.5l3.5 3.5M8 2v4.5M13.5 2.5l-3.5 3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);


export const CustomCursor = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isHidden, setIsHidden] = useState(true);

  // x and y correspond exactly to the pointer tip (0,0)
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  useEffect(() => {
    setIsMounted(true);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (isHidden) setIsHidden(false);
    };

    const handleMouseLeave = () => setIsHidden(true);
    const handleMouseEnter = () => setIsHidden(false);

    const handleHoverStart = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest("a, button, input, textarea, select, details, [role='button'], [tabindex]:not([tabindex='-1'])") ||
        window.getComputedStyle(target).cursor === "pointer"
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mouseover", handleHoverStart);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseover", handleHoverStart);
    };
  }, [cursorX, cursorY, isHidden]);

  if (!isMounted) return null;

  return (
    <motion.div
      className={cn(
        "pointer-events-none fixed left-0 top-0 z-[9999] hidden md:block" // Removed difference blend so it explicitly stays black on white
      )}
      style={{
        x: cursorX,      // Use raw motion value for zero latency
        y: cursorY,      // Use raw motion value for zero latency
        transformOrigin: "8px 8px", // Scale exactly from the actual tip of the SharpArrow path (x=8, y=8 in the 28x28 grid)
      }}
      animate={{
        opacity: isHidden ? 0 : 1,
        // Enlarge the arrow pointer slightly on hover for punch
        scale: isHovering ? 1.3 : 1,
      }}
      transition={{ duration: 0.15 }}
    >
      {isHovering ? (
        <SharpArrowHover
          strokeWidth={1.5}
          // White fill, Black stroke as requested!
          className="w-10 h-10 fill-white text-black drop-shadow-[0_15px_15px_rgba(0,0,0,0.6)]"
          style={{ position: 'relative', left: '-8px', top: '-8px' }}
        />
      ) : (
        <SharpArrow
          strokeWidth={1.5}
          // White fill, Black stroke default
          className="w-8 h-8 fill-white text-black drop-shadow-[0_8px_8px_rgba(0,0,0,0.5)]"
          style={{ position: 'relative', left: '-6px', top: '-6px' }}
        />
      )}
    </motion.div>
  );
};

