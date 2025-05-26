"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Ethos() {
  return (
    <section className="py-24 bg-black text-white relative overflow-hidden">
      {/* Abstract design elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-gradient-to-br from-[#f87f01]/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 -left-40 w-80 h-80 bg-gradient-to-br from-[#f87f01]/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 right-1/4 w-60 h-60 bg-gradient-to-br from-[#f87f01]/15 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('/images/grid-pattern.png')] opacity-5"></div>
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black to-transparent"></div>
      </div>
      
      <div className="container mx-auto relative z-10 px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-sm font-semibold tracking-[0.25em] text-[#f87f01] uppercase mb-3 px-6 py-2 border border-[#f87f01]/30 rounded-full">German Precision, Global Reach</span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 font-racing">
            The <span className="text-[#f87f01] relative inline-block">
              Art & Science
              <svg className="absolute -bottom-6 left-0 w-full" viewBox="0 0 100 15" preserveAspectRatio="none">
                <path d="M0,5 Q50,15 100,5" stroke="#f87f01" strokeWidth="2" fill="none" />
              </svg>
            </span> of Perfect Fit
          </h2>
          <div className="w-24 h-1 bg-[#f87f01] mx-auto mb-8"></div>
          <p className="text-xl max-w-3xl mx-auto text-gray-300 leading-relaxed">
            Our German engineering philosophy meets your personalized measurements to create bikes that feel like a natural extension of your body.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#f87f01] to-[#f87f01]/70 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            <div className="p-8 rounded-xl bg-gray-900 border border-gray-800 group-hover:border-[#f87f01]/50 transition-all duration-300 h-full">
              <div className="w-16 h-16 mb-6 relative">
                <div className="absolute inset-0 bg-[#f87f01]/20 rounded-lg transform rotate-6 group-hover:rotate-12 transition-transform duration-300"></div>
                <div className="absolute inset-0 bg-[#f87f01]/20 rounded-lg transform -rotate-6 group-hover:-rotate-12 transition-transform duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#f87f01]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-white transition-colors duration-300">Your Measurements</h3>
              <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                Submit your body measurements and riding preferences using our online form, and we&rsquo;ll create a personalized geometry profile for your perfect bike.
              </p>
            </div>
            <div className="absolute -bottom-3 -right-3 w-full h-full border border-[#f87f01]/40 rounded-xl -z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#f87f01] to-[#f87f01]/70 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            <div className="p-8 rounded-xl bg-gray-900 border border-gray-800 group-hover:border-[#f87f01]/50 transition-all duration-300 h-full">
              <div className="w-16 h-16 mb-6 relative">
                <div className="absolute inset-0 bg-[#f87f01]/20 rounded-lg transform rotate-6 group-hover:rotate-12 transition-transform duration-300"></div>
                <div className="absolute inset-0 bg-[#f87f01]/20 rounded-lg transform -rotate-6 group-hover:-rotate-12 transition-transform duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#f87f01]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-white transition-colors duration-300">German Engineering</h3>
              <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                Our German-engineered design process transforms your precise measurements into frame geometries that maximize both comfort and performance.
              </p>
            </div>
            <div className="absolute -bottom-3 -right-3 w-full h-full border border-[#f87f01]/40 rounded-xl -z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#f87f01] to-[#f87f01]/70 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            <div className="p-8 rounded-xl bg-gray-900 border border-gray-800 group-hover:border-[#f87f01]/50 transition-all duration-300 h-full">
              <div className="w-16 h-16 mb-6 relative">
                <div className="absolute inset-0 bg-[#f87f01]/20 rounded-lg transform rotate-6 group-hover:rotate-12 transition-transform duration-300"></div>
                <div className="absolute inset-0 bg-[#f87f01]/20 rounded-lg transform -rotate-6 group-hover:-rotate-12 transition-transform duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#f87f01]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-white transition-colors duration-300">Global Delivery</h3>
              <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                Riders across the globe can submit their measurements online and receive a precision-crafted bike that feels tailor-made to their body.
              </p>
            </div>
            <div className="absolute -bottom-3 -right-3 w-full h-full border border-[#f87f01]/40 rounded-xl -z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
          </motion.div>
        </div>
        
        <div className="flex flex-col lg:flex-row items-stretch gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:w-1/2 order-2 lg:order-1 flex flex-col justify-center"
          >
            <div className="relative mb-6">
              <h3 className="text-3xl md:text-4xl font-bold font-racing text-white relative z-10 leading-tight">
                German Precision,<br /><span className="text-[#f87f01]">Global Excellence</span>
              </h3>
              <div className="absolute -left-6 top-0 h-full w-2 bg-[#f87f01]"></div>
            </div>
            <p className="mb-5 text-gray-300 leading-relaxed">
              At SchönMO, we blend traditional German bicycle craftsmanship with modern fitting techniques. Simply provide us with your key body measurements and riding preferences, and we&rsquo;ll create a frame geometry that works in perfect harmony with your unique physiology.
            </p>
            <p className="mb-8 text-gray-300 leading-relaxed">
              This personalized approach eliminates common riding discomforts, maximizes power transfer, and provides greater endurance on long rides, giving you more speed with less effort.
            </p>
            
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="bg-gray-900/70 p-5 rounded-lg border border-gray-800 text-center transform transition-transform hover:scale-105 hover:border-[#f87f01]/50">
                <div className="text-3xl font-bold text-[#f87f01]">12+</div>
                <p className="text-sm text-gray-400 mt-1">Measurements Needed</p>
              </div>
              <div className="bg-gray-900/70 p-5 rounded-lg border border-gray-800 text-center transform transition-transform hover:scale-105 hover:border-[#f87f01]/50">
                <div className="text-3xl font-bold text-[#f87f01]">45+</div>
                <p className="text-sm text-gray-400 mt-1">Countries Served</p>
              </div>
              <div className="bg-gray-900/70 p-5 rounded-lg border border-gray-800 text-center transform transition-transform hover:scale-105 hover:border-[#f87f01]/50">
                <div className="text-3xl font-bold text-[#f87f01]">100%</div>
                <p className="text-sm text-gray-400 mt-1">Custom Built</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2 text-gray-400 italic">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#f87f01]" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>&ldquo;The perfect bike is one that disappears beneath you, becoming an extension of your body.&rdquo;</span>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:w-1/2 order-1 lg:order-2 relative"
          >
            <div className="relative overflow-hidden aspect-[4/3]">
              <Image
                src="/images/Ethos.png"
                alt="SchönMO premium performance bike"
                fill
                style={{ objectFit: 'cover' }}
                className="transition-transform duration-10000 hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 p-6 z-20">
                <div className="text-xs text-[#f87f01] font-semibold tracking-wider mb-2 uppercase">Premium Performance</div>
                <div className="text-xl font-bold">SchönMO Custom Design</div>
              </div>
              
              {/* Corner accent like in PerformanceShowcase */}
              <div 
                className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-[#f87f01] z-20"
                style={{ clipPath: 'polygon(100% 0, 0% 100%, 100% 100%)' }}
              ></div>
            </div>
            
            <div className="absolute -bottom-8 -left-8 w-24 h-24 border-2 border-[#f87f01] -z-10"></div>
            <div className="absolute -top-8 -right-8 w-24 h-24 border-2 border-[#f87f01] -z-10"></div>
            
            <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 rotate-90">
              <div className="bg-[#f87f01] text-black text-xs tracking-widest py-1 px-3 uppercase font-bold">
                Made in Germany
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 