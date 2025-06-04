"use client";

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const SaddleHero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Add smooth scrolling function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Prevent default anchor link behavior
      event?.preventDefault();
      
      // Smooth scroll to element
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-32 bg-gradient-to-l from-[#f87f01]/20 to-transparent z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-32 bg-gradient-to-r from-[#f87f01]/20 to-transparent z-10"></div>
      <div className="absolute top-1/4 right-0 w-64 h-64 rounded-full bg-[#f87f01]/5 blur-3xl z-10"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('/images/grid-pattern.png')] opacity-5 z-10"></div>
      
      <div className="container mx-auto min-h-screen relative z-20">
        <div className="flex flex-col lg:flex-row min-h-screen py-12 lg:py-0">
          {/* Images on left side with frame */}
          <div className="lg:w-1/2 relative flex items-center justify-center p-4 sm:p-8 order-2 lg:order-1">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isLoaded ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, delay: 0.2 }}
              className="w-full h-[300px] sm:h-[400px] lg:h-4/5 relative rounded-lg overflow-hidden"
            >
              {/* Design elements - hide on very small screens */}
              <div className="absolute -top-4 -left-4 w-10 sm:w-16 h-10 sm:h-16 border-2 border-[#f87f01] z-20 hidden sm:block"></div>
              <div className="absolute -bottom-4 -right-4 w-10 sm:w-16 h-10 sm:h-16 border-2 border-[#f87f01] z-20 hidden sm:block"></div>
              
              {/* Saddle Image */}
              <div className="relative w-full h-full">
                <Image 
                  src="/images/saddle_main.png" 
                  alt="SchönMO VitruFit Saddle"
                  className="w-full h-full object-contain"
                  fill
                  sizes="(max-width: 640px) 90vw, (max-width: 768px) 80vw, (max-width: 1024px) 50vw, 45vw"
                  priority
                />
              </div>
              
              {/* Image badge */}
              <div className="absolute bottom-2 sm:bottom-6 left-2 sm:left-6 bg-black/80 backdrop-blur-sm px-2 sm:px-4 py-1 sm:py-2 z-20 border-l-2 border-[#f87f01]">
                <span className="text-[10px] sm:text-xs text-white/70 uppercase tracking-wider">SchönMO Premium</span>
              </div>
            </motion.div>
            
            {/* Side badge - hide on mobile */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 rotate-90 origin-left hidden lg:block">
              <div className="bg-[#f87f01] text-black text-xs tracking-[0.25em] py-1 px-3 uppercase font-bold">
                Saddle Series
              </div>
            </div>
          </div>
          
          {/* Content on right side */}
          <div className="lg:w-1/2 flex items-center justify-center order-1 lg:order-2 mb-6 lg:mb-0">
            <div className="text-white px-4 sm:px-8 py-8 sm:py-12 max-w-lg">
              {/* Eyebrow text */}
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xs sm:text-sm font-medium tracking-widest mb-2 sm:mb-4 uppercase text-[#f87f01] drop-shadow-[0_2px_3px_rgba(0,0,0,0.9)]"
              >
                Ergonomic Design • Performance Comfort
              </motion.p>
            
              {/* Main title with animated underline */}
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="text-3xl sm:text-5xl lg:text-7xl font-bold mb-2 sm:mb-4 leading-tight font-racing"
              >
                VitruFit
                <div className="relative inline-block">
                  <span className="text-[#f87f01] block mt-2">Saddles</span>
                  <motion.div 
                    initial={{ width: "0%" }}
                    animate={isLoaded ? { width: "100%" } : {}}
                    transition={{ duration: 1, delay: 1.4 }}
                    className="absolute -bottom-1 left-0 h-1 bg-[#f87f01]"
                  ></motion.div>
                </div>
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={isLoaded ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <p className="text-xl sm:text-2xl mb-3 sm:mb-6 text-gray-300 font-light">Performance Ergonomic Saddles</p>
                <p className="text-base sm:text-lg mb-4 sm:mb-8 leading-relaxed text-gray-400">
                  The perfect balance of comfort and performance. Our premium saddles feature innovative ergonomic designs that relieve pressure points while maintaining optimal power transfer for both road and gravel riding.
                </p>
              </motion.div>
              
              {/* Feature highlights */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1 }}
                className="flex flex-wrap gap-2 sm:gap-4 mb-6 sm:mb-8"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[#f87f01] rounded-full"></div>
                  <span className="text-xs sm:text-sm text-gray-300">Pressure Relief Channel</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[#f87f01] rounded-full"></div>
                  <span className="text-xs sm:text-sm text-gray-300">Carbon-Reinforced Base</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[#f87f01] rounded-full"></div>
                  <span className="text-xs sm:text-sm text-gray-300">Three Size Options</span>
                </div>
              </motion.div>
              
              {/* Buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="flex flex-col sm:flex-row gap-4 sm:gap-6"
              >
                <motion.div
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto"
                >
                  <button 
                    onClick={() => scrollToSection('specifications')} 
                    className="cursor-pointer w-full"
                  >
                    <div className="rhombus-btn-primary relative overflow-hidden group w-full text-center text-sm sm:text-base">
                      <span className="relative z-10">View Specifications</span>
                      <motion.div 
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "0%" }}
                        transition={{ duration: 0.4 }}
                        className="absolute inset-0 bg-white/20"
                      ></motion.div>
                    </div>
                  </button>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto"
                >
                  <button 
                    onClick={() => scrollToSection('order')} 
                    className="cursor-pointer w-full"
                  >
                    <div className="rhombus-btn-outline relative overflow-hidden group w-full text-center text-sm sm:text-base">
                      <span className="relative z-10">Request Order</span>
                      <motion.div 
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "0%" }}
                        transition={{ duration: 0.4 }}
                        className="absolute inset-0 bg-[#f87f01]/20"
                      ></motion.div>
                    </div>
                  </button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SaddleHero; 