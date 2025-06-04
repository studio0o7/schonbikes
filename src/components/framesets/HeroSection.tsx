import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

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
    <section className="relative bg-black text-white">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-32 bg-gradient-to-l from-[#f87f01]/20 to-transparent z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-32 bg-gradient-to-r from-[#f87f01]/20 to-transparent z-10"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('/images/grid-pattern.png')] opacity-5 z-10"></div>
      
      <div className="container mx-auto px-4 pt-6 sm:pt-8 md:pt-10 pb-16 sm:pb-20 md:pb-24 relative z-20">
        <div className="flex flex-col-reverse md:flex-row items-center gap-6 sm:gap-8 md:gap-12 max-w-6xl mx-auto">
          {/* Content Side */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={isLoaded ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="w-full md:w-1/2 md:pr-6"
          >
            {/* Eyebrow text */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center gap-2 mb-3 sm:mb-4"
            >
              <div className="h-px w-6 sm:w-8 bg-[#f87f01]"></div>
              <p className="text-xs sm:text-sm font-medium tracking-widest uppercase text-[#f87f01] drop-shadow-[0_2px_3px_rgba(0,0,0,0.9)]">
                German Engineering • Premium Carbon
              </p>
            </motion.div>
            
            {/* Main title with animated underline */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-5 leading-tight font-racing"
            >
              <span className="text-white block">Custom</span>
              <div className="relative inline-block">
                <span className="text-[#f87f01]">Frameset</span>
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
              <p className="text-lg sm:text-xl mb-5 sm:mb-6 text-gray-300 font-light border-l-2 border-[#f87f01] pl-3 sm:pl-4">
                Engineered for Excellence • Tailored to Your Body
              </p>
              <p className="text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed text-gray-400">
                Each frameset is carefully crafted to match your body proportions, ensuring the perfect fit 
                for maximum efficiency and comfort on every ride.
              </p>
            </motion.div>
            
            {/* Feature highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1 }}
              className="grid grid-cols-3 gap-2 sm:gap-4 mb-6 sm:mb-8"
            >
              <div className="flex items-center">
                <div className="w-2 h-2 bg-[#f87f01] rounded-full mr-1 sm:mr-2"></div>
                <span className="text-xs sm:text-sm text-gray-300">Premium Carbon</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-[#f87f01] rounded-full mr-1 sm:mr-2"></div>
                <span className="text-xs sm:text-sm text-gray-300">Custom Geometry</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-[#f87f01] rounded-full mr-1 sm:mr-2"></div>
                <span className="text-xs sm:text-sm text-gray-300">Race Proven</span>
              </div>
            </motion.div>
            
            {/* Size Guide */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 border-l-2 border-[#f87f01] shadow-lg mb-6 sm:mb-8"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4 flex items-center">
                <span className="inline-block w-5 h-5 mr-2 rounded-full bg-[#f87f01]/20 flex items-center justify-center text-[#f87f01]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                Size Guide
              </h3>
              <div className="overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0">
                <table className="min-w-full border-collapse">
                  <thead>
                    <tr className="bg-white/5">
                      <th className="py-2 sm:py-3 px-2 sm:px-4 text-left border border-gray-700 font-medium text-xs sm:text-sm">SIZE</th>
                      <th className="py-2 sm:py-3 px-2 sm:px-4 text-center border border-gray-700 font-medium text-xs sm:text-sm">490</th>
                      <th className="py-2 sm:py-3 px-2 sm:px-4 text-center border border-gray-700 font-medium text-xs sm:text-sm">520</th>
                      <th className="py-2 sm:py-3 px-2 sm:px-4 text-center border border-gray-700 font-medium text-xs sm:text-sm">550</th>
                      <th className="py-2 sm:py-3 px-2 sm:px-4 text-center border border-gray-700 font-medium text-xs sm:text-sm">580</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 border border-gray-700 font-medium text-xs sm:text-sm">BODY HEIGHT</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-center border border-gray-700 text-xs sm:text-sm">165-172cm</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-center border border-gray-700 bg-[#f87f01]/10 text-xs sm:text-sm">173-179cm</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-center border border-gray-700 text-xs sm:text-sm">180-186cm</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-center border border-gray-700 text-xs sm:text-sm">187-194cm</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs sm:text-sm text-gray-400 italic mt-2 flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#f87f01] mr-1 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <span>For reference only, may vary due to different body proportions</span>
              </p>
            </motion.div>
            
            {/* Custom Order Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.98 }}
              >
                <button 
                  onClick={() => scrollToSection('specifications')} 
                  className="cursor-pointer"
                >
                  <div className="rhombus-btn-primary relative overflow-hidden group">
                    <span className="relative z-10">Custom Order</span>
                    <motion.div 
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "0%" }}
                      transition={{ duration: 0.4 }}
                      className="absolute inset-0 bg-white/20"
                    ></motion.div>
                  </div>
                </button>
              </motion.div>
            </motion.div>
          </motion.div>
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isLoaded ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="w-full md:w-1/2 md:pl-6 flex justify-center items-center"
          >
            <div className="relative w-full max-w-lg mx-auto">
              {/* Design elements */}
              <div className="absolute -top-4 sm:-top-6 -left-4 sm:-left-6 w-12 sm:w-16 h-12 sm:h-16 border-2 border-[#f87f01] z-20"></div>
              <div className="absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 w-12 sm:w-16 h-12 sm:h-16 border-2 border-[#f87f01] z-20"></div>
              
              <div className="relative overflow-hidden rounded-lg shadow-2xl">
                <div className="absolute top-2 left-2 w-8 sm:w-12 h-8 sm:h-12 border border-white/30 z-20"></div>
                <div className="absolute bottom-2 right-2 w-8 sm:w-12 h-8 sm:h-12 border border-white/30 z-20"></div>
                
                <Image 
                  src="/images/Frame1.jpg" 
                  alt="SchönMO Carbon Frameset" 
                  width={500} 
                  height={400}
                  className="object-cover hover:scale-[1.02] transition-transform duration-300 w-full h-auto"
                  priority
                />
                
                {/* Overlay gradients */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/40 z-10 pointer-events-none"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-10 pointer-events-none"></div>
                
                {/* Corner accent */}
                <div className="absolute top-0 right-0 border-t-[40px] sm:border-t-[60px] border-r-[40px] sm:border-r-[60px] border-t-transparent border-r-[#f87f01] z-20"></div>
                
                {/* Image badge */}
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 bg-black/80 backdrop-blur-sm px-3 sm:px-5 py-2 sm:py-3 rounded z-20 border-l-2 border-[#f87f01] transform hover:scale-[1.03] transition-transform duration-300">
                  <span className="text-xs text-white/70 uppercase tracking-wider font-medium">Carbon Excellence</span>
                </div>
                
                {/* Ring accent */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 sm:w-64 h-48 sm:h-64 border border-[#f87f01]/20 rounded-full z-20 animate-ping opacity-30 duration-3000"></div>
              </div>
              
              {/* Bottom Accent */}
              <div className="absolute -bottom-3 sm:-bottom-4 right-1/2 transform translate-x-1/2 bg-[#f87f01] h-1 w-24 sm:w-32 z-20"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 