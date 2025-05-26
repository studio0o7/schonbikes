import Image from 'next/image';
import { motion } from 'framer-motion';

const PerformanceGallery = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Simple two-column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
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
              className="space-y-8"
            >
              <div>
                <h2 className="text-4xl font-bold mb-4 font-racing text-gray-900">
                  Designed for <span className="text-[#f87f01]">Pure Speed</span>
                </h2>
                <div className="w-16 h-1 bg-[#f87f01] mb-6"></div>
              </div>
              
              <p className="text-lg text-gray-700">
                The One Road is engineered for serious racers and performance-oriented cyclists 
                who demand lightning-fast acceleration, precise handling, and aerodynamic excellence.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border-l-2 border-[#f87f01] pl-4">
                  <h3 className="text-[#f87f01] font-bold mb-1">Superior Aerodynamics</h3>
                  <p className="text-gray-600">Tar Carbon X-Light Frame with internal cable routing</p>
                </div>
                
                <div className="border-l-2 border-[#f87f01] pl-4">
                  <h3 className="text-[#f87f01] font-bold mb-1">Wireless Shifting</h3>
                  <p className="text-gray-600">SRAM RED eTap AXS 12-speed electronic system</p>
                </div>
                
                <div className="border-l-2 border-[#f87f01] pl-4">
                  <h3 className="text-[#f87f01] font-bold mb-1">Ultra-Light Carbon</h3>
                  <p className="text-gray-600">SRAM Carbon Crank with DUB bottom bracket</p>
                </div>
                
                <div className="border-l-2 border-[#f87f01] pl-4">
                  <h3 className="text-[#f87f01] font-bold mb-1">Premium Wheelset</h3>
                  <p className="text-gray-600">Schönmomo Roll 1 Carbon Aero with 700x32C tires</p>
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