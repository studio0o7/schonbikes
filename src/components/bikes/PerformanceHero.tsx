import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const PerformanceHero = () => {
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
    <section className="relative h-screen bg-black overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-32 bg-gradient-to-l from-[#f87f01]/20 to-transparent z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-32 bg-gradient-to-r from-[#f87f01]/20 to-transparent z-10"></div>
      <div className="absolute top-1/4 right-0 w-64 h-64 rounded-full bg-[#f87f01]/5 blur-3xl z-10"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('/images/grid-pattern.png')] opacity-5 z-10"></div>
      
      <div className="container mx-auto h-full relative z-20">
        <div className="flex flex-col lg:flex-row h-full">
          {/* Video on left side with frame */}
          <div className="lg:w-1/2 h-full relative flex items-center justify-center p-8">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isLoaded ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, delay: 0.2 }}
              className="w-full h-4/5 relative rounded-lg overflow-hidden"
            >
              {/* Design elements */}
              <div className="absolute -top-4 -left-4 w-16 h-16 border-2 border-[#f87f01] z-20"></div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 border-2 border-[#f87f01] z-20"></div>
              
              {/* Video overlay gradients */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/50 z-10"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-10 opacity-40"></div>
              
              {/* Video */}
              <video 
                className="w-full h-full object-cover rounded-lg"
                autoPlay 
                loop 
                muted 
                playsInline
              >
                <source src="/images/road_video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Corner accent */}
              <div className="absolute top-0 right-0 border-t-[50px] border-r-[50px] border-t-transparent border-r-[#f87f01] z-20"></div>
              
              {/* Video badge */}
              <div className="absolute bottom-6 left-6 bg-black/80 backdrop-blur-sm px-4 py-2 rounded z-20 border-l-2 border-[#f87f01]">
                <span className="text-xs text-white/70 uppercase tracking-wider">SchönMO Exclusive</span>
              </div>
            </motion.div>
            
            {/* Side badge */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 rotate-90 origin-left">
              <div className="bg-[#f87f01] text-black text-xs tracking-[0.25em] py-1 px-3 uppercase font-bold">
                Performance Series
              </div>
            </div>
          </div>
          
          {/* Content on right side */}
          <div className="lg:w-1/2 flex items-center justify-center">
            <div className="text-white px-8 py-12 max-w-lg">
              {/* Eyebrow text */}
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-sm font-medium tracking-widest mb-4 uppercase text-[#f87f01] drop-shadow-[0_2px_3px_rgba(0,0,0,0.9)]"
              >
                German Engineering • Pro Race Technology
              </motion.p>
            
              {/* Main title with animated underline */}
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="text-5xl lg:text-7xl font-bold mb-4 leading-tight font-racing"
              >
                One
                <div className="relative inline-block">
                  <span className="text-[#f87f01] block mt-2">Road</span>
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
                <p className="text-2xl mb-6 text-gray-300 font-light">Bike for Performance - Road</p>
                <p className="text-lg mb-8 leading-relaxed text-gray-400">
                  Engineered for speed and precision. Our flagship race bike combines aggressive geometry 
                  with our custom-fit technology for unmatched aerodynamics and power transfer.
                </p>
              </motion.div>
              
              {/* Feature highlights */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1 }}
                className="flex flex-wrap gap-4 mb-8"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[#f87f01] rounded-full"></div>
                  <span className="text-sm text-gray-300">Race Geometry</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[#f87f01] rounded-full"></div>
                  <span className="text-sm text-gray-300">Electronic Shifting</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[#f87f01] rounded-full"></div>
                  <span className="text-sm text-gray-300">Ultra-Light Carbon</span>
                </div>
              </motion.div>
              
              {/* Buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="flex flex-col sm:flex-row gap-6"
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
                >
                  <button 
                    onClick={() => scrollToSection('customize')} 
                    className="cursor-pointer"
                  >
                    <div className="rhombus-btn-outline relative overflow-hidden group">
                      <span className="relative z-10">Customize Build</span>
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

export default PerformanceHero; 