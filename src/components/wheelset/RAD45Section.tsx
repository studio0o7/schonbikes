import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const RAD45Section = () => {
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
    
    const section = document.getElementById('rad45-section');
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
    <section id="rad45-section" className="py-24 bg-black overflow-hidden relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-gray-900 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-900 to-transparent"></div>
      <div className="absolute -right-48 top-1/4 w-96 h-96 rounded-full bg-[#f87f01]/10 blur-3xl"></div>
      <div className="absolute -left-48 bottom-1/4 w-96 h-96 rounded-full bg-[#f87f01]/10 blur-3xl"></div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[url('/images/grid-pattern.png')] opacity-5 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
          {/* Image side */}
          <motion.div 
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              {/* Frame elements */}
              <div className="absolute -top-4 -left-4 w-16 h-16 border-2 border-[#f87f01]"></div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 border-2 border-[#f87f01]"></div>
              
              {/* Main image */}
              <div className="aspect-square overflow-hidden bg-black">
                <Image 
                  src="/images/RAD 45.png"
                  alt="RAD 45 Road Wheelset" 
                  className="w-full h-full object-contain"
                  width={500}
                  height={500}
                  priority
                />
              </div>
              
              {/* Corner accent */}
              <div className="absolute top-0 right-0 border-t-[40px] border-r-[40px] border-t-transparent border-r-[#f87f01]"></div>
              
              {/* Badge */}
              <div className="absolute -bottom-5 left-10 bg-black text-white px-6 py-3 shadow-lg border-2 border-[#f87f01]/80">
                <span className="text-xl font-bold">50mm Depth</span>
              </div>
            </div>
            
            {/* Specs badge */}
            <div className="absolute -right-10 top-1/2 -translate-y-1/2 bg-black/90 backdrop-blur-sm p-4 border-r-2 border-[#f87f01] shadow-lg">
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-[#f87f01] rounded-full"></div>
                  <span className="text-white text-sm">1620g per set</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-[#f87f01] rounded-full"></div>
                  <span className="text-white text-sm">28mm wide, 50mm deep</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-[#f87f01] rounded-full"></div>
                  <span className="text-white text-sm">Tubeless Ready</span>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Content side */}
          <motion.div 
            className="lg:w-1/2 text-white"
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Eyebrow */}
            <div className="mb-3">
              <div className="inline-block bg-[#f87f01] text-white text-xs tracking-[0.25em] py-1 px-3 uppercase font-bold">
                Aero Road Series
              </div>
            </div>
            
            {/* Title */}
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 font-racing">
              RAD <span className="text-[#f87f01]">45</span>
            </h2>
            
            {/* Description */}
            <div className="mb-8">
              <p className="text-xl mb-4 text-gray-300">
                The Ultimate Road Wheelset
              </p>
              <p className="text-gray-400 leading-relaxed mb-4">
                Engineered for maximum speed and efficiency on the road, the RAD 45 wheelset combines cutting-edge aerodynamics with exceptional stability. The 28mm width and 50mm depth profile strikes the perfect balance between aerodynamic advantage and crosswind stability.
              </p>
              <p className="text-gray-400 leading-relaxed mb-4">
                Optimized for modern road tires, these wheels deliver superior rolling resistance and cornering grip, giving you the confidence to push your limits.
              </p>
            </div>
            
            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="bg-black/30 p-4 border-l-2 border-[#f87f01] shadow-sm">
                <h3 className="text-lg font-semibold mb-2">Tubeless-Ready Clincher</h3>
                <p className="text-sm text-gray-400">
                  Specific angle drilling for optimal strength and aerodynamics.
                </p>
              </div>
              <div className="bg-black/30 p-4 border-l-2 border-[#f87f01] shadow-sm">
                <h3 className="text-lg font-semibold mb-2">Schonroad Centerlock Hubs</h3>
                <p className="text-sm text-gray-400">
                  Precision engineered with locking bearings and black satin anodized finish.
                </p>
              </div>
              <div className="bg-black/30 p-4 border-l-2 border-[#f87f01] shadow-sm">
                <h3 className="text-lg font-semibold mb-2">Aero Spokes</h3>
                <p className="text-sm text-gray-400">
                  Pillar straight-pull with black finish and double butted aero profile.
                </p>
              </div>
              <div className="bg-black/30 p-4 border-l-2 border-[#f87f01] shadow-sm">
                <h3 className="text-lg font-semibold mb-2">Ultralight Carbon Layup</h3>
                <p className="text-sm text-gray-400">
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
                className="cursor-pointer"
              >
                <div className="rhombus-btn-primary relative overflow-hidden group">
                  <span className="relative z-10">Request Order</span>
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

export default RAD45Section; 