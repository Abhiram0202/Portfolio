'use client';

import { personalData } from '@/lib/data';
import { motion, Variants } from 'framer-motion';
import { useState, useEffect } from 'react';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -20, filter: 'blur(10px)' },
  visible: { 
    opacity: 1, 
    x: 0, 
    filter: 'blur(0px)',
    transition: { 
      duration: 1,
      ease: [0.25, 1, 0.5, 1]
    } 
  }
};

const titles = ["Software Engineer", "Backend Developer"];

export function HeroSection() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);

  useEffect(() => {
    const currentTitle = titles[titleIndex].toUpperCase();
    
    const handleTyping = () => {
      if (!isDeleting) {
        const nextText = currentTitle.substring(0, displayText.length + 1);
        setDisplayText(nextText);
        setSpeed(150);

        if (nextText === currentTitle) {
          setIsDeleting(true);
          setSpeed(2000);
        }
      } else {
        const nextText = currentTitle.substring(0, displayText.length - 1);
        setDisplayText(nextText);
        setSpeed(50);

        if (nextText === '') {
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % titles.length);
          setSpeed(500);
        }
      }
    };

    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, titleIndex, speed]);

  return (
    <section
      id="home"
      className="flex min-h-[calc(100vh-3.5rem)] items-center relative overflow-hidden bg-transparent"
    >
      <div className="container max-w-screen-xl px-4 md:px-8 mx-auto relative z-10 bg-transparent">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start justify-center text-left space-y-2 m-0 p-0"
        >
          <motion.div variants={itemVariants} className="flex items-center gap-2 m-0 p-0 text-left w-full">
            <h1 className="text-lg font-bold sm:text-xl md:text-2xl m-0 p-0">
              Hi There!
            </h1>
            <motion.span 
              className="inline-block text-xl origin-bottom-right"
              animate={{ rotate: [0, 20, -10, 20, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 4 }}
            >
              👋
            </motion.span>
          </motion.div>
          
          <motion.h1 
            variants={itemVariants} 
            className="font-headline text-xl font-extrabold sm:text-2xl md:text-3xl lg:text-4xl flex flex-wrap items-baseline gap-x-2 pb-1 m-0 p-0 text-left w-full tracking-tight"
          >
            <span className="m-0 p-0 uppercase">I&apos;M</span>
            <span className="relative inline-block pb-1 m-0 p-0">
              <span className="text-primary relative z-10 whitespace-nowrap drop-shadow-sm uppercase">
                {personalData.name}
              </span>
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-primary to-accent rounded-full opacity-60"></span>
            </span>
          </motion.h1>
          
          <motion.div 
            variants={itemVariants}
            className="text-sm md:text-base font-bold uppercase tracking-wide mt-1 text-left flex items-center min-h-[1.5em] m-0 p-0 w-full"
          >
            <div className="flex">
              {displayText.split('').map((char, index) => {
                const currentFullWord = titles[titleIndex].toUpperCase();
                const spaceIndex = currentFullWord.indexOf(' ');
                const isFirstWord = spaceIndex === -1 ? true : index < spaceIndex;
                
                return (
                  <span
                    key={index}
                    className={isFirstWord ? "text-primary" : "text-muted-foreground"}
                  >
                    {char === " " ? "\u00A0" : char}
                  </span>
                );
              })}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                className="ml-1 w-[2px] h-[1em] bg-primary inline-block self-center"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}