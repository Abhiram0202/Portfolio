'use client';

import { personalData } from '@/lib/data';
import { motion, Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: 'blur(0px)',
    transition: { 
      duration: 1.2,
      ease: [0.25, 1, 0.5, 1]
    } 
  }
};

export function HeroSection() {
  const titleText = personalData.title.toUpperCase();
  
  return (
    <section
      id="home"
      className="flex min-h-[calc(100vh-4rem)] items-center relative overflow-hidden bg-transparent"
    >
      <div className="container px-16 md:px-24 relative z-10 bg-transparent">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start justify-center text-left"
        >
          <div className="space-y-4 max-w-full">
            <motion.div variants={itemVariants} className="flex items-center gap-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Hi There!
              </h1>
              <motion.span 
                className="inline-block text-4xl origin-bottom-right"
                animate={{ rotate: [0, 20, -10, 20, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 4 }}
              >
                👋
              </motion.span>
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="font-headline text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl flex flex-wrap gap-x-4 pb-4">
              <span>I&apos;M</span>
              <span className="relative inline-block pb-2 px-1">
                <span className="text-primary relative z-10 whitespace-nowrap drop-shadow-sm pr-2">
                  {personalData.name.toUpperCase()}
                </span>
                <span className="absolute bottom-0 left-0 w-full h-[6px] bg-gradient-to-r from-primary to-accent rounded-full opacity-60"></span>
              </span>
            </motion.h1>
            
            <motion.div 
              variants={itemVariants}
              className="text-xl md:text-2xl font-medium uppercase tracking-widest mt-4 flex items-center flex-wrap"
            >
              <div className="flex">
                {titleText.split('').map((char, index) => {
                  const isFirstWord = index < titleText.indexOf(' ');
                  return (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, display: "none" }}
                      animate={{ opacity: 1, display: "inline" }}
                      transition={{ duration: 0.01, delay: 0.5 + index * 0.1 }}
                      className={isFirstWord ? "text-primary font-bold" : "text-muted-foreground"}
                    >
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  );
                })}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                  className="ml-1 w-[3px] h-[1em] bg-primary inline-block self-center"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}