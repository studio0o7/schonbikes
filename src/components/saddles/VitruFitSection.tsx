"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

const VitruFitSection = () => {
  const [ref2, inView2] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [ref3, inView3] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [ref4, inView4] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  return (
    <section className="bg-white overflow-hidden">
      {/* Feature 1: Elevated Rear Design - Dark Background */}
      <div className="bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white py-12 sm:py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div 
            ref={ref2}
            initial={{ opacity: 0, x: -40 }}
            animate={inView2 ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row items-center"
          >
            <div className="md:w-1/2 md:pr-6 lg:pr-12 mb-8 md:mb-0">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4 relative inline-block">
                Elevated Rear Design
                <div className="absolute -bottom-2 left-0 w-1/2 h-1 bg-[#f87f01]"></div>
              </h3>
              <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6">
                The raised rear section provides better power transmission and improved 
                grip during climbs. This feature allows riders to generate more power with less effort,
                particularly beneficial on straight roads and uphill sections.
              </p>
              <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base">
                <li className="flex items-start">
                  <div className="mt-1.5 w-2 h-2 bg-[#f87f01] rhombus-bullet mr-2 sm:mr-3"></div>
                  <span className="text-gray-200">Enhanced power transfer during climbs</span>
                </li>
                <li className="flex items-start">
                  <div className="mt-1.5 w-2 h-2 bg-[#f87f01] rhombus-bullet mr-2 sm:mr-3"></div>
                  <span className="text-gray-200">Reduces slipping during intense efforts</span>
                </li>
                <li className="flex items-start">
                  <div className="mt-1.5 w-2 h-2 bg-[#f87f01] rhombus-bullet mr-2 sm:mr-3"></div>
                  <span className="text-gray-200">Supports optimal seated position</span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <div className="relative overflow-hidden bg-gray-800/80 p-1.5 shadow-lg transform hover:scale-[1.02] transition-transform duration-300">
                {/* Decorative elements - hide on very small screens */}
                <div className="absolute top-0 left-0 w-8 sm:w-12 h-8 sm:h-12 border-t-2 border-l-2 border-[#f87f01] z-10 hidden sm:block"></div>
                <div className="absolute bottom-0 right-0 w-8 sm:w-12 h-8 sm:h-12 border-b-2 border-r-2 border-[#f87f01] z-10 hidden sm:block"></div>
                <div className="absolute -right-20 -top-20 w-40 h-40 bg-[#f87f01]/10 rounded-full blur-2xl z-0"></div>
                
                {/* Elevated Rear Design image */}
                <div className="relative h-60 sm:h-80 overflow-hidden z-10">
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent z-10 pointer-events-none"></div>
                  <Image 
                    src="/images/saddleside.png" 
                    alt="Elevated Rear Design"
                    fill
                    className="object-cover object-center scale-[1.02]"
                    style={{ filter: 'contrast(1.05)' }}
                  />
                  <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 bg-black/70 px-2 sm:px-3 py-1 sm:py-1.5 text-[10px] sm:text-xs text-white/90 border-r-2 border-[#f87f01] z-20">
                    Elevated Design
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Feature 2: Extended Relief Channel - Light Background */}
      <div className="bg-gray-50 py-12 sm:py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div 
            ref={ref3}
            initial={{ opacity: 0, x: 40 }}
            animate={inView3 ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row-reverse items-center"
          >
            <div className="md:w-1/2 md:pl-6 lg:pl-12 mb-8 md:mb-0">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3 sm:mb-4 relative inline-block">
                Extended Relief Channel
                <div className="absolute -bottom-2 left-0 w-1/2 h-1 bg-[#f87f01]"></div>
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                Our extended central depression runs the length of the saddle, specifically 
                designed to reduce pressure on sensitive perineal structures. This feature is 
                optimized for aggressive riding positions while maintaining comfort during long rides.
              </p>
              <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base">
                <li className="flex items-start">
                  <div className="mt-1.5 w-2 h-2 bg-[#f87f01] rhombus-bullet mr-2 sm:mr-3"></div>
                  <span className="text-gray-700">Reduces pressure on soft tissue by up to 63%</span>
                </li>
                <li className="flex items-start">
                  <div className="mt-1.5 w-2 h-2 bg-[#f87f01] rhombus-bullet mr-2 sm:mr-3"></div>
                  <span className="text-gray-700">Prevents numbness during extended rides</span>
                </li>
                <li className="flex items-start">
                  <div className="mt-1.5 w-2 h-2 bg-[#f87f01] rhombus-bullet mr-2 sm:mr-3"></div>
                  <span className="text-gray-700">Optimized for aggressive riding positions</span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <div className="relative overflow-hidden bg-white shadow-lg p-2 transform hover:scale-[1.02] transition-transform duration-300">
                {/* Decorative elements - hide on very small screens */}
                <div className="absolute top-0 right-0 w-8 sm:w-12 h-8 sm:h-12 border-t-2 border-r-2 border-[#f87f01] z-10 hidden sm:block"></div>
                <div className="absolute bottom-0 left-0 w-8 sm:w-12 h-8 sm:h-12 border-b-2 border-l-2 border-[#f87f01] z-10 hidden sm:block"></div>
                <div className="absolute -left-20 -bottom-20 w-40 h-40 bg-[#f87f01]/10 rounded-full blur-2xl z-0"></div>
                
                {/* Relief Channel image - rotated 90 degrees */}
                <div className="relative flex items-center justify-center h-56 sm:h-72">
                  <Image 
                    src="/images/SaddleTop.png" 
                    alt="Extended Relief Channel"
                    width={400}
                    height={300}
                    className="transform rotate-90 object-contain max-w-full h-auto"
                    style={{ transformOrigin: 'center' }}
                  />
                  <div className="absolute top-2 sm:top-4 left-2 sm:left-4 bg-black/70 px-2 sm:px-3 py-1 sm:py-1.5 text-[10px] sm:text-xs text-white/90 border-l-2 border-[#f87f01] z-20">
                    Pressure Relief
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Feature 3: Perfect Fit System - Dark Background */}
      <div className="bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white py-12 sm:py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div 
            ref={ref4}
            initial={{ opacity: 0, x: -40 }}
            animate={inView4 ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row items-center"
          >
            <div className="md:w-1/2 md:pr-6 lg:pr-12 mb-8 md:mb-0">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4 relative inline-block">
                Perfect Fit System
                <div className="absolute -bottom-2 left-0 w-1/2 h-1 bg-[#f87f01]"></div>
              </h3>
              <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6">
                Available in three sizes (S, M, L) to ensure the perfect match for your 
                sit bone width. The right saddle size is essential for optimal performance and 
                comfort, allowing proper weight distribution and support.
              </p>
              <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base">
                <li className="flex items-start">
                  <div className="mt-1.5 w-2 h-2 bg-[#f87f01] rhombus-bullet mr-2 sm:mr-3"></div>
                  <span className="text-gray-200">Size S: Sit bone width 10-12cm</span>
                </li>
                <li className="flex items-start">
                  <div className="mt-1.5 w-2 h-2 bg-[#f87f01] rhombus-bullet mr-2 sm:mr-3"></div>
                  <span className="text-gray-200">Size M: Sit bone width 12-14cm</span>
                </li>
                <li className="flex items-start">
                  <div className="mt-1.5 w-2 h-2 bg-[#f87f01] rhombus-bullet mr-2 sm:mr-3"></div>
                  <span className="text-gray-200">Size L: Sit bone width 14-16cm</span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <div className="relative overflow-hidden bg-gray-800/80 p-1.5 shadow-lg transform hover:scale-[1.02] transition-transform duration-300">
                {/* Decorative elements - hide on very small screens */}
                <div className="absolute top-0 left-0 w-8 sm:w-12 h-8 sm:h-12 border-t-2 border-l-2 border-[#f87f01] z-10 hidden sm:block"></div>
                <div className="absolute bottom-0 right-0 w-8 sm:w-12 h-8 sm:h-12 border-b-2 border-r-2 border-[#f87f01] z-10 hidden sm:block"></div>
                <div className="absolute -right-20 -top-20 w-40 h-40 bg-[#f87f01]/10 rounded-full blur-2xl z-0"></div>
                
                {/* Perfect Fit System image */}
                <div className="relative h-60 sm:h-80 overflow-hidden z-10">
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent z-10 pointer-events-none"></div>
                  <Image 
                    src="/images/Sizesaddle.png" 
                    alt="Perfect Fit System"
                    fill
                    className="object-contain"
                  />
                  <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 bg-black/70 px-2 sm:px-3 py-1 sm:py-1.5 text-[10px] sm:text-xs text-white/90 border-r-2 border-[#f87f01] z-20">
                    Size Options
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VitruFitSection; 