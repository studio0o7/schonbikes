"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Bikes() {
  return (
    <section className="py-12 md:py-16 bg-white relative overflow-hidden">
      {/* Abstract design elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-gradient-to-br from-[#f87f01]/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 -left-40 w-80 h-80 bg-gradient-to-br from-[#f87f01]/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 right-1/4 w-60 h-60 bg-gradient-to-br from-[#f87f01]/8 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('/images/grid-pattern.png')] opacity-[0.03]"></div>
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 md:mb-10"
        >
          <span className="inline-block text-xs font-semibold tracking-[0.25em] text-[#f87f01] uppercase mb-2 px-3 sm:px-4 py-1 border border-[#f87f01]/30 rounded-full">Premium Collection</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 font-racing text-black">
            Our <span className="text-[#f87f01] relative inline-block">
              Bikes
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 100 15" preserveAspectRatio="none">
                <path d="M0,5 Q50,15 100,5" stroke="#f87f01" strokeWidth="2" fill="none" />
              </svg>
            </span>
          </h2>
          <div className="w-12 sm:w-16 h-1 bg-[#f87f01] mx-auto mb-3 md:mb-4"></div>
          <p className="text-base md:text-lg max-w-2xl mx-auto text-black font-semibold">
            Precision-engineered machines built for speed, performance, and your unique body measurements
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-4">
          {/* Performance Bike */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#f87f01]/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            <div className="bg-white rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:shadow-xl relative border border-gray-200 group-hover:border-[#f87f01]/30 h-full">
              <div className="relative h-48 sm:h-56 md:h-64 lg:h-72">
                <Image 
                  src="/images/Road1.png"
                  alt="SchönMO Performance Bike" 
                  fill
                  style={{objectFit: 'cover'}}
                  className="group-hover:scale-105 transition-transform duration-700"
                />
                {/* Corner accent like in the bike pages */}
                <div className="absolute top-0 right-0 border-t-[30px] border-r-[30px] border-t-transparent border-r-[#f87f01] z-20"></div>
                
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent h-1/3"></div>
                <div className="absolute top-4 right-4 bg-[#f87f01] text-black px-3 py-0.5 uppercase text-xs font-bold tracking-wider">
                  Performance Series
                </div>
              </div>
              <div className="p-4 md:p-5 relative">
                <h3 className="text-lg md:text-xl font-bold mb-2 font-racing text-black">SchönMO <span className="text-[#f87f01]">One Road</span></h3>
                <div className="w-8 md:w-10 h-0.5 bg-[#f87f01] mb-2 md:mb-3"></div>
                <p className="text-black mb-3 md:mb-4 font-bold text-xs sm:text-sm">
                  Our flagship performance model engineered for competitive riders who demand the absolute best in speed and responsiveness.
                </p>
                <div className="flex flex-wrap gap-1 mb-4">
                  <span className="bg-gray-100 border border-gray-300 px-2 py-0.5 rounded-full text-xs text-black font-bold">Carbon Fiber</span>
                  <span className="bg-gray-100 border border-gray-300 px-2 py-0.5 rounded-full text-xs text-black font-bold">Aero Design</span>
                  <span className="bg-gray-100 border border-gray-300 px-2 py-0.5 rounded-full text-xs text-black font-bold">Race Geometry</span>
                </div>
                <Link href="/bikes/performance">
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="rhombus-btn-primary relative overflow-hidden inline-block text-xs sm:text-sm"
                  >
                    <span className="relative z-10">View Details</span>
                    <motion.div 
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "0%" }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 bg-black/10"
                    ></motion.div>
                  </motion.div>
                </Link>
              </div>
            </div>
            
            {/* Design accents */}
            <div className="absolute -bottom-2 -right-2 w-full h-full border border-[#f87f01]/40 rounded-xl -z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1 group-hover:translate-y-1"></div>
            <div className="absolute -bottom-3 -left-3 w-12 md:w-16 h-12 md:h-16 border-2 border-[#f87f01]/30 -z-10"></div>
          </motion.div>
          
          {/* Endurance Bike */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#f87f01]/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            <div className="bg-white rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:shadow-xl relative border border-gray-200 group-hover:border-[#f87f01]/30 h-full">
              <div className="relative h-48 sm:h-56 md:h-64 lg:h-72">
                <Image 
                  src="/images/Gravel2.png"
                  alt="SchönMO Endurance Bike" 
                  fill
                  style={{objectFit: 'cover'}}
                  className="group-hover:scale-105 transition-transform duration-700"
                />
                {/* Corner accent like in the bike pages */}
                <div className="absolute top-0 right-0 border-t-[30px] border-r-[30px] border-t-transparent border-r-[#f87f01] z-20"></div>
                
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent h-1/3"></div>
                <div className="absolute top-4 right-4 bg-[#f87f01] text-black px-3 py-0.5 uppercase text-xs font-bold tracking-wider">
                  Adventure Series
                </div>
              </div>
              <div className="p-4 md:p-5 relative">
                <h3 className="text-lg md:text-xl font-bold mb-2 font-racing text-black">SchönMO <span className="text-[#f87f01]">One Adventure</span></h3>
                <div className="w-8 md:w-10 h-0.5 bg-[#f87f01] mb-2 md:mb-3"></div>
                <p className="text-black mb-3 md:mb-4 font-bold text-xs sm:text-sm">
                  Designed for the long haul with a perfect balance of comfort and performance to keep you riding stronger, longer.
                </p>
                <div className="flex flex-wrap gap-1 mb-4">
                  <span className="bg-gray-100 border border-gray-300 px-2 py-0.5 rounded-full text-xs text-black font-bold">Carbon Fiber</span>
                  <span className="bg-gray-100 border border-gray-300 px-2 py-0.5 rounded-full text-xs text-black font-bold">Vibration Dampening</span>
                  <span className="bg-gray-100 border border-gray-300 px-2 py-0.5 rounded-full text-xs text-black font-bold">Endurance Geometry</span>
                </div>
                <Link href="/bikes/endurance">
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="rhombus-btn-primary relative overflow-hidden inline-block text-xs sm:text-sm"
                  >
                    <span className="relative z-10">View Details</span>
                    <motion.div 
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "0%" }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 bg-black/10"
                    ></motion.div>
                  </motion.div>
                </Link>
              </div>
            </div>
            
            {/* Design accents */}
            <div className="absolute -bottom-2 -right-2 w-full h-full border border-[#f87f01]/40 rounded-xl -z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1 group-hover:translate-y-1"></div>
            <div className="absolute -top-3 -right-3 w-12 md:w-16 h-12 md:h-16 border-2 border-[#f87f01]/30 -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 