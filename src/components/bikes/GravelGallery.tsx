import Image from 'next/image';
import { motion } from 'framer-motion';

const GravelGallery = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Simple two-column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            {/* Image column */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative order-2 lg:order-1"
            >
              <div className="overflow-hidden">
                <Image 
                  src="/images/Gravel1.png"
                  alt="One Adventure Bike" 
                  width={800}
                  height={600}
                  className="w-full"
                  priority
                />
              </div>
              {/* Triangle overlay with both sides touching bottom and right edges */}
              <div 
                className="absolute bottom-0 right-0 w-[70px] h-[70px] sm:w-[100px] sm:h-[100px] bg-[#f87f01] z-20"
                style={{
                  clipPath: 'polygon(100% 0%, 100% 100%, 0% 100%)'
                }}
              ></div>
            </motion.div>
            
            {/* Text content */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6 sm:space-y-8 order-1 lg:order-2"
            >
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 font-racing text-gray-900">
                  Built for <span className="text-[#f87f01]">Every Adventure</span>
                </h2>
                <div className="w-12 sm:w-16 h-1 bg-[#f87f01] mb-4 sm:mb-6"></div>
              </div>
              
              <p className="text-base sm:text-lg text-gray-700">
                Whether you&apos;re tackling epic gravel routes or exploring remote trails, 
                the One Adventure adapts to your journey with uncompromising performance and versatility.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="border-l-2 border-[#f87f01] pl-3 sm:pl-4">
                  <h3 className="text-[#f87f01] font-bold mb-1 text-sm sm:text-base">Dual Wheelset System</h3>
                  <p className="text-gray-600 text-sm sm:text-base">700c Carbon + 650B DTSwiss for versatility across all terrain</p>
                </div>
                
                <div className="border-l-2 border-[#f87f01] pl-3 sm:pl-4">
                  <h3 className="text-[#f87f01] font-bold mb-1 text-sm sm:text-base">Electronic Shifting</h3>
                  <p className="text-gray-600 text-sm sm:text-base">Shimano Di2 XTR 12-speed for reliable performance</p>
                </div>
                
                <div className="border-l-2 border-[#f87f01] pl-3 sm:pl-4">
                  <h3 className="text-[#f87f01] font-bold mb-1 text-sm sm:text-base">Carbon Frame</h3>
                  <p className="text-gray-600 text-sm sm:text-base">TarX Carbon X-Light with integrated cockpit design</p>
                </div>
                
                <div className="border-l-2 border-[#f87f01] pl-3 sm:pl-4">
                  <h3 className="text-[#f87f01] font-bold mb-1 text-sm sm:text-base">Wide Tire Clearance</h3>
                  <p className="text-gray-600 text-sm sm:text-base">Up to 40mm (700c) / 2.1&quot; (650b) for diverse terrain</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GravelGallery; 