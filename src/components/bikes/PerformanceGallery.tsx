import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

const PerformanceGallery = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Simple two-column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            {/* Image column */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="overflow-hidden">
                <Image 
                  src="/images/Road2.png"
                  alt="One Road Bike" 
                  width={800}
                  height={600}
                  className="w-full"
                  priority
                />
              </div>
              {/* Filled shape covering bottom right corner - smaller, no animation */}
              <div 
                className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-[#f87f01] z-20"
                style={{ clipPath: 'polygon(100% 0, 0% 100%, 100% 100%)' }} // Creates a triangle
              ></div>
            </motion.div>
            
            {/* Text content */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6 sm:space-y-8 mt-6 lg:mt-0"
            >
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 font-racing text-gray-900">
                  Designed for <span className="text-[#f87f01]">Pure Speed</span>
                </h2>
                <div className="w-16 h-1 bg-[#f87f01] mb-4 sm:mb-6"></div>
              </div>
              
              <p className="text-base sm:text-lg text-gray-700">
                The One Road is engineered for serious racers and performance-oriented cyclists 
                who demand lightning-fast acceleration, precise handling, and aerodynamic excellence.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="border-l-2 border-[#f87f01] pl-4">
                  <h3 className="text-[#f87f01] font-bold mb-1">Superior Aerodynamics</h3>
                  <p className="text-sm sm:text-base text-gray-600">Tar Carbon X-Light Frame with internal cable routing</p>
                </div>
                
                <div className="border-l-2 border-[#f87f01] pl-4">
                  <h3 className="text-[#f87f01] font-bold mb-1">Wireless Shifting</h3>
                  <p className="text-sm sm:text-base text-gray-600">SRAM RED eTap AXS 12-speed electronic system</p>
                </div>
                
                <div className="border-l-2 border-[#f87f01] pl-4">
                  <h3 className="text-[#f87f01] font-bold mb-1">Ultra-Light Carbon</h3>
                  <p className="text-sm sm:text-base text-gray-600">SRAM Carbon Crank with DUB bottom bracket</p>
                </div>
                
                <div className="border-l-2 border-[#f87f01] pl-4">
                  <h3 className="text-[#f87f01] font-bold mb-1">Premium Wheelset</h3>
                  <p className="text-sm sm:text-base text-gray-600">
                    <Link href="/wheelset" className="hover:text-[#f87f01] transition-colors">
                      RAD45 Carbon Aero with 700x32C tires
                    </Link>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerformanceGallery; 