'use client';

import Image from 'next/image';
import { personalData } from '@/lib/data';
import { SectionWrapper } from '@/components/section-wrapper';
import React from 'react';
import { motion, Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    }
  }
};

const textVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 1.5,
      ease: [0.25, 1, 0.5, 1]
    }
  }
};

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9, rotate: -5 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    rotate: 0,
    transition: { 
      duration: 1.5,
      ease: [0.25, 1, 0.5, 1],
      delay: 0.3
    }
  }
};

export function HomeAboutSection() {
  const [transform, setTransform] = React.useState({ x: 0, y: 0 });
  const containerRef = React.useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    const maxRotate = 40;

    setTransform({
      x: yPct * maxRotate * -1,
      y: xPct * maxRotate,
    });
  };

  const handleMouseLeave = () => {
    setTransform({ x: 0, y: 0 });
  };

  return (
    <SectionWrapper id="home-about" className="py-24 border-none overflow-hidden relative">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10"
      >
        {/* Left Content */}
        <motion.div variants={textVariants} className="space-y-6 text-left m-0 p-0">
          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl uppercase relative inline-block m-0 p-0">
            LET ME <span className="text-primary">INTRODUCE</span> MYSELF
            <motion.div 
              className="absolute -bottom-2 left-0 h-1 bg-primary rounded"
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            />
          </h2>
          <motion.p variants={textVariants} className="text-lg text-foreground/80 leading-relaxed max-w-2xl">
            {personalData.bio}
          </motion.p>
        </motion.div>

        {/* Right Profile Image */}
        <motion.div
          variants={imageVariants}
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="flex justify-center items-center"
          style={{ perspective: '800px' }}
        >
          <motion.div
            style={{
              transform: `rotateX(${transform.x}deg) rotateY(${transform.y}deg)`,
            }}
            className="glass p-2 rounded-full shadow-primary/20 transition-transform duration-100 ease-out relative group"
            whileHover={{ scale: 1.05 }}
          >
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-[50px] -z-10 group-hover:bg-primary/40 transition-colors duration-500" />
            <div className="relative w-[230px] aspect-square rounded-full overflow-hidden border-2 border-primary/30 group-hover:border-primary transition-colors duration-300">
              <Image
                src="/myphoto.png"
                alt="My Profile Photo"
                fill
                className="object-cover scale-125 group-hover:scale-110 transition-transform duration-700 ease-in-out"
                priority
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}