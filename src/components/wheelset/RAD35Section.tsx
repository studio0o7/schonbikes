import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const RAD35Section = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the section is visible
    );
    
    const section = document.getElementById('rad35-section');
    if (section) {
      observer.observe(section);
    }
    
    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section id="rad35-section" className="py-12 sm:py-16 md:py-24 bg-white overflow-hidden relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-gray-100 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-100 to-transparent"></div>
      <div className="absolute -left-48 top-1/4 w-96 h-96 rounded-full bg-[#f87f01]/5 blur-3xl"></div>
      <div className="absolute -right-48 bottom-1/4 w-96 h-96 rounded-full bg-[#f87f01]/5 blur-3xl"></div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[url('/images/grid-pattern.png')] opacity-5 z-0"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Image side */}
          <motion.div 
            className="w-full lg:w-1/2 relative"
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              {/* Frame elements */}
              <div className="absolute -top-4 -left-4 w-8 sm:w-16 h-8 sm:h-16 border-2 border-[#f87f01]"></div>
              <div className="absolute -bottom-4 -right-4 w-8 sm:w-16 h-8 sm:h-16 border-2 border-[#f87f01]"></div>
              
              {/* Main image */}
              <div className="aspect-square overflow-hidden bg-gray-100">
                <Image 
                  src="/images/RAD 35.png"
                  alt="RAD 35 Gravel Wheelset" 
                  className="w-full h-full object-contain"
                  width={500}
                  height={500}
                  priority
                />
              </div>
              
              {/* Corner accent */}
              <div className="absolute top-0 right-0 border-t-[30px] sm:border-t-[40px] border-r-[30px] sm:border-r-[40px] border-t-transparent border-r-[#f87f01]"></div>
              
              {/* Badge */}
              <div className="absolute -bottom-4 sm:-bottom-5 right-6 sm:right-10 bg-white text-gray-800 px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg border-2 border-[#f87f01]/80">
                <span className="text-base sm:text-xl font-bold">35mm Depth</span>
              </div>
            </div>
            
            {/* Specs badge - hidden on mobile, visible on tablets and up */}
            <div className="hidden md:block absolute -left-10 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-4 rounded-lg border-l-2 border-[#f87f01] shadow-lg">
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-[#f87f01] rounded-full"></div>
                  <span className="text-gray-800 text-sm">1620g per set</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-[#f87f01] rounded-full"></div>
                  <span className="text-gray-800 text-sm">35mm wide, 32mm deep</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-[#f87f01] rounded-full"></div>
                  <span className="text-gray-800 text-sm">Tubeless Ready</span>
                </div>
              </div>
            </div>
            
            {/* Mobile specs - only visible on mobile */}
            <div className="md:hidden flex flex-wrap justify-center gap-3 mt-4 bg-white/90 p-3 rounded-lg border-l-2 border-[#f87f01] shadow-lg">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#f87f01] rounded-full"></div>
                <span className="text-gray-800 text-xs">1620g per set</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#f87f01] rounded-full"></div>
                <span className="text-gray-800 text-xs">35mm wide, 32mm deep</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#f87f01] rounded-full"></div>
                <span className="text-gray-800 text-xs">Tubeless Ready</span>
              </div>
            </div>
          </motion.div>
          
          {/* Content side */}
          <motion.div 
            className="w-full lg:w-1/2 text-gray-800 mt-8 lg:mt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Eyebrow */}
            <div className="mb-3">
              <div className="inline-block bg-[#f87f01] text-white text-xs tracking-[0.25em] py-1 px-3 uppercase font-bold">
                Gravel Series
              </div>
            </div>
            
            {/* Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 font-racing">
              RAD <span className="text-[#f87f01]">35</span>
            </h2>
            
            {/* Description */}
            <div className="mb-6 sm:mb-8">
              <p className="text-lg sm:text-xl mb-3 sm:mb-4 text-gray-700">
                The Ultimate Gravel Wheelset
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-3 sm:mb-4">
                Designed specifically for the demands of gravel riding, the RAD 35 wheelset delivers the perfect balance of durability, compliance, and speed. With a 35mm width and 32mm depth profile, these wheels offer excellent stability in crosswinds while maintaining aerodynamic efficiency.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-3 sm:mb-4">
                The wider profile provides optimal tire support for gravel tires, ensuring superior traction and comfort on the roughest terrain.
              </p>
            </div>
            
            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
              <div className="bg-gray-100 p-3 sm:p-4 rounded-lg border-l-2 border-[#f87f01]">
                <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">Tubeless-Ready Clincher</h3>
                <p className="text-xs sm:text-sm text-gray-600">
                  Specific angle drilling for optimal strength and performance.
                </p>
              </div>
              <div className="bg-gray-100 p-3 sm:p-4 rounded-lg border-l-2 border-[#f87f01]">
                <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">Schonroad Centerlock Hubs</h3>
                <p className="text-xs sm:text-sm text-gray-600">
                  Precision engineered with locking bearings and black satin anodized finish.
                </p>
              </div>
              <div className="bg-gray-100 p-3 sm:p-4 rounded-lg border-l-2 border-[#f87f01]">
                <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">Pillar 1423 Spokes</h3>
                <p className="text-xs sm:text-sm text-gray-600">
                  Straight-pull black finish, double butted for durability and performance.
                </p>
              </div>
              <div className="bg-gray-100 p-3 sm:p-4 rounded-lg border-l-2 border-[#f87f01]">
                <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">Ultralight Carbon Layup</h3>
                <p className="text-xs sm:text-sm text-gray-600">
                  Unidirectional carbon construction for optimal strength-to-weight ratio.
                </p>
              </div>
            </div>
            
            {/* CTA */}
            <motion.div
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.98 }}
              className="inline-block"
            >
              <button 
                onClick={() => document.getElementById('order')?.scrollIntoView({ behavior: 'smooth' })} 
                className="w-full sm:w-auto cursor-pointer"
              >
                <div className="rhombus-btn-primary relative overflow-hidden group">
                  <span className="relative z-10 text-sm sm:text-base">Request Order</span>
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
        </div>
      </div>
    </section>
  );
};

export default RAD35Section; 