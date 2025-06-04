"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[600px] h-screen bg-black overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-32 bg-gradient-to-l from-[#f87f01]/20 to-transparent z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-32 bg-gradient-to-r from-[#f87f01]/20 to-transparent z-10"></div>
      <div className="absolute top-1/4 right-0 w-64 h-64 rounded-full bg-[#f87f01]/5 blur-3xl z-10"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('/images/grid-pattern.png')] opacity-5 z-10"></div>
      
      {/* Main image with overlay */}
      <div className="absolute inset-0">
        <Image 
          src="/images/Main.png"
          alt="SchönMO Custom Performance Bike" 
          fill
          style={{
            objectFit: 'cover',
            objectPosition: 'center right'
          }}
          priority
          className="opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/30 z-10"></div>
      </div>

      <div className="container mx-auto h-full relative z-20 px-4">
        <div className="flex flex-col lg:flex-row h-full">
          {/* Content side (takes up full width on mobile, left half on lg screens) */}
          <div className="lg:w-1/2 flex items-center justify-center py-12 lg:py-0">
            <div className="text-white max-w-lg">
              {/* Eyebrow text */}
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xs sm:text-sm font-medium tracking-widest mb-4 uppercase text-[#f87f01] drop-shadow-[0_2px_3px_rgba(0,0,0,0.9)]"
              >
                German Engineering • International Excellence
              </motion.p>
            
              {/* Main title with animated underline */}
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 leading-tight font-racing"
              >
                <span className="text-white">Every Rider</span>
                <div className="relative inline-block">
                  <span className="text-[#f87f01] block mt-2">Perfect Fit</span>
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
                <p className="text-xl sm:text-2xl mb-4 sm:mb-6 text-gray-300 font-light">Deserves a custom experience</p>
                <p className="text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed text-gray-400">
                  Precision-engineered custom bikes tailored to your individual measurements and riding style
                </p>
              </motion.div>
              
              {/* Feature highlights */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1 }}
                className="flex flex-wrap gap-3 sm:gap-4 mb-6 sm:mb-8"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[#f87f01] rounded-full"></div>
                  <span className="text-xs sm:text-sm text-gray-300">Performance Engineered</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[#f87f01] rounded-full"></div>
                  <span className="text-xs sm:text-sm text-gray-300">Custom Fitted</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[#f87f01] rounded-full"></div>
                  <span className="text-xs sm:text-sm text-gray-300">Premium Materials</span>
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
                  <Link href="/bikes/performance">
                    <div className="rhombus-btn-primary relative overflow-hidden group w-full sm:w-auto text-center">
                      <span className="relative z-10 whitespace-nowrap">Explore Performance</span>
                      <motion.div 
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "0%" }}
                        transition={{ duration: 0.4 }}
                        className="absolute inset-0 bg-white/20"
                      ></motion.div>
                    </div>
                  </Link>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto"
                >
                  <Link href="#" onClick={(e) => {
                    e.preventDefault();
                    scrollToContact();
                  }}>
                    <div className="rhombus-btn-outline relative overflow-hidden group w-full sm:w-auto text-center">
                      <span className="relative z-10 whitespace-nowrap">Get Your Custom Fit</span>
                      <motion.div 
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "0%" }}
                        transition={{ duration: 0.4 }}
                        className="absolute inset-0 bg-[#f87f01]/20"
                      ></motion.div>
                    </div>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
          {/* The right half (lg:w-1/2) is intentionally left empty for the background to show through */}
        </div>
      </div>
      
      {/* Side badge - hidden on small screens */}
      <div className="hidden sm:block absolute top-1/2 left-3 -translate-y-1/2 rotate-90 origin-left z-30">
        <div className="bg-[#f87f01] text-black text-xs tracking-[0.25em] py-1 px-3 uppercase font-bold">
          SchönMO Bikes
        </div>
      </div>
    </section>
  );
} 