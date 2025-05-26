'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <main>
      {/* Founder's Story Section - Styled like BikeShowcase */}
      <section className="py-24 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-4xl font-bold mb-4 font-racing text-white">
                    Our <span className="text-[#f87f01]">Story</span>
                  </h2>
                  <div className="w-16 h-1 bg-[#f87f01] mb-6"></div>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    SchönMO was born from frustration – the frustration of never finding that perfect bike. Our founder,
                    an avid cyclist with decades of experience, grew tired of compromising between performance, comfort, and style.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="border-l-2 border-[#f87f01] pl-4"
                  >
                    <h3 className="text-white font-bold">The Vision</h3>
                    <p className="text-gray-400">
                      Having experienced the limitations of mass-produced bicycles firsthand, there was a clear vision: 
                      create bikes that truly adapt to the rider, not the other way around.
                    </p>
                  </motion.div>
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="border-l-2 border-[#f87f01] pl-4"
                  >
                    <h3 className="text-white font-bold">German Engineering</h3>
                    <p className="text-gray-400">
                      Drawing upon years of German engineering expertise, SchönMO emerged as an answer to the 
                      one-size-fits-most approach of the industry.
                    </p>
                  </motion.div>
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="border-l-2 border-[#f87f01] pl-4"
                  >
                    <h3 className="text-white font-bold">Personalized Performance</h3>
                    <p className="text-gray-400">
                      Each SchönMO bike represents the culmination of that vision – where precision engineering 
                      meets personalized performance. We don&apos;t just build bikes; we craft riding experiences 
                      tailored to the unique profile of each cyclist.
                    </p>
                  </motion.div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="overflow-hidden rounded-lg">
                  <Image 
                    src="/images/Road1.png"
                    alt="SchönMO Custom Experience" 
                    width={800}
                    height={600}
                    className="w-full"
                  />
                </div>
                
                {/* Simple overlay element - moved to bottom right */}
                <div className="absolute bottom-0 right-0 border-b-[40px] border-r-[40px] border-b-[#f87f01] border-r-transparent z-20"></div>
                
                {/* Subtle accent elements */}
                <div className="absolute -bottom-4 -left-4 w-24 h-24 border border-[#f87f01]/30 rounded-full -z-10"></div>
                <div className="absolute -top-4 -right-4 w-16 h-16 border border-[#f87f01]/30 -z-10"></div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Values Section - Enhanced Design */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl font-bold mb-4 font-racing text-gray-900 relative inline-block">
                Our <span className="text-[#f87f01]">Values</span>
                <motion.div 
                  initial={{ width: "0%" }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="absolute -bottom-2 left-0 h-1 bg-[#f87f01]"
                ></motion.div>
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto mt-8">
                The principles that guide every bike we craft and every relationship we build
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Precision Engineering */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                <div className="h-2 bg-[#f87f01]"></div>
                <div className="p-8">
                  <div className="h-16 w-16 flex items-center justify-center bg-[#f87f01]/10 rounded-full mb-6 mx-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#f87f01]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-[#f87f01] text-center mb-4">Precision Engineering</h3>
                  
                  <p className="text-gray-700 text-center mb-6">
                    Every component, angle, and material is meticulously selected and tested to deliver 
                    uncompromising performance and durability. We leave nothing to chance.
                  </p>
                  
                  <div className="text-[#f87f01] font-medium text-sm text-center pt-4 border-t border-gray-100">
                    Performance • Reliability • Excellence
                  </div>
                </div>
              </motion.div>
              
              {/* Rider-Centric Design */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                <div className="h-2 bg-[#f87f01]"></div>
                <div className="p-8">
                  <div className="h-16 w-16 flex items-center justify-center bg-[#f87f01]/10 rounded-full mb-6 mx-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#f87f01]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-[#f87f01] text-center mb-4">Rider-Centric Design</h3>
                  
                  <p className="text-gray-700 text-center mb-6">
                    We believe the bike should adapt to you, not the other way around. Every SchönMO 
                    creation is built around the unique needs of its rider, ensuring perfect harmony.
                  </p>
                  
                  <div className="text-[#f87f01] font-medium text-sm text-center pt-4 border-t border-gray-100">
                    Custom Fit • Adaptability • Comfort
                  </div>
                </div>
              </motion.div>
              
              {/* Uncompromising Quality */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                <div className="h-2 bg-[#f87f01]"></div>
                <div className="p-8">
                  <div className="h-16 w-16 flex items-center justify-center bg-[#f87f01]/10 rounded-full mb-6 mx-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#f87f01]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-[#f87f01] text-center mb-4">Uncompromising Quality</h3>
                  
                  <p className="text-gray-700 text-center mb-6">
                    From materials to manufacturing, we maintain the highest standards at every step. Each bike is 
                    a testament to our commitment to excellence and attention to detail.
                  </p>
                  
                  <div className="text-[#f87f01] font-medium text-sm text-center pt-4 border-t border-gray-100">
                    Premium Materials • Craftsmanship • Longevity
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Commitment Section - Dark like BikeShowcase */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 font-racing">
              Our <span className="text-[#f87f01]">Commitment</span> to You
            </h2>
            <div className="w-24 h-1 bg-[#f87f01] mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 mb-10">
              Every SchönMO customer is part of our extended family. We don&apos;t just sell you a bike; 
              we welcome you into a community of passionate riders and dedicated craftspeople.
            </p>
            
            <motion.div
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.98 }}
              className="inline-block"
            >
              <Link href="/custom">
                <div className="rhombus-btn-primary relative overflow-hidden group">
                  <span className="relative z-10">Experience the Difference</span>
                  <motion.div 
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0 bg-white/20"
                  ></motion.div>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
} 