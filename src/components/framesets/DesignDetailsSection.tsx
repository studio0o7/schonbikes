import { motion } from 'framer-motion';
import Image from 'next/image';

export default function DesignDetailsSection() {
  return (
    <section id="design-details" className="py-16 sm:py-20 md:py-24 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-racing text-gray-900">
              <span className="text-[#f87f01]">Design</span> <span className="text-white">Details</span>
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-[#f87f01] mx-auto mb-4 sm:mb-6"></div>
            <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto">
              Engineered with Toray T700 carbon fiber for the perfect balance of performance, 
              aesthetics, and functionality
            </p>
          </motion.div>
          
          {/* Featured Design Elements */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mb-16 sm:mb-20 bg-gradient-to-b from-gray-900 to-black rounded-xl overflow-hidden shadow-2xl border border-gray-800"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Left side - Content */}
              <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
                <div className="inline-flex items-center mb-3 sm:mb-4">
                  <div className="h-px w-6 sm:w-8 bg-[#f87f01]"></div>
                  <span className="mx-2 sm:mx-3 text-xs sm:text-sm font-semibold tracking-widest text-[#f87f01] uppercase">Premium Experience</span>
                </div>
                
                <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-white">Engineered for Excellence</h3>
                
                <p className="text-sm sm:text-base text-gray-300 mb-6 sm:mb-8 leading-relaxed">
                  Our frameset combines cutting-edge carbon technology with meticulous attention to 
                  detail. From the precisely calculated geometry to the integrated storage solutions, 
                  every element is designed to enhance your riding experience.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6">
                  <div className="bg-black/40 backdrop-blur-sm p-3 sm:p-4 rounded-lg border-l-2 border-[#f87f01]">
                    <div className="text-[#f87f01] mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 sm:h-6 w-5 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h4 className="text-white font-semibold mb-1">Electronic Ready</h4>
                    <p className="text-gray-400 text-xs sm:text-sm">Di2 and electronic groupset compatible with hidden battery integration</p>
                  </div>
                  
                  <div className="bg-black/40 backdrop-blur-sm p-3 sm:p-4 rounded-lg border-l-2 border-[#f87f01]">
                    <div className="text-[#f87f01] mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 sm:h-6 w-5 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h4 className="text-white font-semibold mb-1">ISO Certified</h4>
                    <p className="text-gray-400 text-xs sm:text-sm">Meets ISO4210 standards for performance, durability and safety</p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 sm:gap-4 mt-2">
                  <span className="bg-[#f87f01]/20 text-[#f87f01] text-xs font-medium px-2 sm:px-3 py-1 rounded-full">Integrated Cables</span>
                  <span className="bg-[#f87f01]/20 text-[#f87f01] text-xs font-medium px-2 sm:px-3 py-1 rounded-full">Premium Carbon</span>
                  <span className="bg-[#f87f01]/20 text-[#f87f01] text-xs font-medium px-2 sm:px-3 py-1 rounded-full">Aero Design</span>
                  <span className="bg-[#f87f01]/20 text-[#f87f01] text-xs font-medium px-2 sm:px-3 py-1 rounded-full">Custom Geometry</span>
                </div>
              </div>
              
              {/* Right side - Image */}
              <div className="relative overflow-hidden h-64 sm:h-80 md:h-auto min-h-[250px] lg:min-h-0">
                <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-10 lg:hidden"></div>
                <Image 
                  src="/images/Frame1.jpg" 
                  alt="SchönMO Carbon Frameset"
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute top-0 right-0 w-16 sm:w-20 h-16 sm:h-20 bg-[#f87f01] opacity-20 rounded-bl-full"></div>
                <div className="absolute bottom-5 right-5 flex items-center justify-center w-12 sm:w-16 h-12 sm:h-16 border-2 border-[#f87f01] rounded-full animate-pulse">
                  <div className="w-8 sm:w-10 h-8 sm:h-10 bg-[#f87f01]/30 rounded-full"></div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Three Key Design Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {/* Seatpost Feature */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gradient-to-b from-gray-900 to-black rounded-xl overflow-hidden shadow-lg border border-gray-800"
            >
              <div className="relative h-48 sm:h-60 overflow-hidden">
                <Image 
                  src="/images/seatpost.png" 
                  alt="Aerodynamic seatpost design"
                  fill
                  className="object-cover object-center" 
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80"></div>
                <div className="absolute bottom-4 left-4 bg-[#f87f01] text-black text-xs font-bold py-1 px-3 rounded">Aerodynamic</div>
              </div>
              
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-white">Integrated Seatpost</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                  Custom designed aero seatpost with optimized carbon layup providing the perfect balance 
                  of comfort and performance. Available in SP02 (25mm) and SP03 (15mm) setback options.
                </p>
                <ul className="space-y-1 sm:space-y-2">
                  <FeatureItem>Aerodynamic profile</FeatureItem>
                  <FeatureItem>Vibration dampening</FeatureItem>
                  <FeatureItem>25mm or 15mm setback options</FeatureItem>
                </ul>
              </div>
            </motion.div>
            
            {/* Storage Feature */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-b from-gray-900 to-black rounded-xl overflow-hidden shadow-lg border border-gray-800"
            >
              <div className="relative h-48 sm:h-60 overflow-hidden">
                <Image 
                  src="/images/Storage.png" 
                  alt="Integrated downtube storage system"
                  fill
                  className="object-cover object-center" 
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80"></div>
                <div className="absolute bottom-4 left-4 bg-[#f87f01] text-black text-xs font-bold py-1 px-3 rounded">Practical</div>
              </div>
              
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-white">Integrated Storage</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                  Innovative downtube storage system provides convenient access to tools, spare tubes, and 
                  essentials. Includes custom fitted pouch and bottle cage mounting.
                </p>
                <ul className="space-y-1 sm:space-y-2">
                  <FeatureItem>Dual access points</FeatureItem>
                  <FeatureItem>Custom storage pouch included</FeatureItem>
                  <FeatureItem>Aero-optimized design</FeatureItem>
                </ul>
              </div>
            </motion.div>
            
            {/* Handlebar Feature */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gradient-to-b from-gray-900 to-black rounded-xl overflow-hidden shadow-lg border border-gray-800 md:col-span-2 lg:col-span-1"
            >
              <div className="relative h-48 sm:h-60 overflow-hidden">
                <Image 
                  src="/images/HandleBAr.jpg" 
                  alt="Integrated handlebar system"
                  fill
                  className="object-cover object-center" 
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80"></div>
                <div className="absolute bottom-4 left-4 bg-[#f87f01] text-black text-xs font-bold py-1 px-3 rounded">Ergonomic</div>
              </div>
              
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-white">Integrated Cockpit</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                  Fully integrated handlebar system with internal cable routing for a clean, 
                  aerodynamic front end. Available in multiple widths to suit your riding style.
                </p>
                <ul className="space-y-1 sm:space-y-2">
                  <FeatureItem>Multiple width options (380-440mm)</FeatureItem>
                  <FeatureItem>Internal cable routing</FeatureItem>
                  <FeatureItem>Optimized ergonomics</FeatureItem>
                </ul>
              </div>
            </motion.div>
          </div>
          
          {/* Engineering highlight section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="bg-gradient-to-r from-gray-900 to-black rounded-xl p-5 sm:p-8 border-l-2 border-[#f87f01] shadow-xl"
          >
            <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-white">German Engineering Excellence</h3>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-4 sm:mb-6">
              Every SchönMO frameset is designed and engineered in Germany, using cutting-edge carbon layup techniques 
              and rigorous quality control standards. Our frames undergo extensive testing to meet ISO4210 certification, 
              ensuring they exceed standards for performance, durability, and safety.
            </p>
            <div className="flex flex-wrap gap-4 sm:gap-6 mt-3 sm:mt-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-[#f87f01] rounded-full"></div>
                <span className="text-gray-300 text-sm sm:text-base">UCI Approved</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-[#f87f01] rounded-full"></div>
                <span className="text-gray-300 text-sm sm:text-base">Wind Tunnel Tested</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-[#f87f01] rounded-full"></div>
                <span className="text-gray-300 text-sm sm:text-base">Impact Tested</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FeatureItem({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 sm:h-4 w-3 sm:w-4 text-[#f87f01] flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
      </svg>
      <span className="text-gray-300 text-xs sm:text-sm">{children}</span>
    </div>
  );
} 