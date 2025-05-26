import Image from 'next/image';
import { motion } from 'framer-motion';

const GravelGallery = () => {
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
              <div className="overflow-hidden rounded-lg">
                <Image 
                  src="/images/Gravel1.png"
                  alt="One Adventure Bike" 
                  width={800}
                  height={600}
                  className="w-full"
                  priority
                />
              </div>
              {/* Simple overlay element */}
              <div className="absolute top-0 right-0 border-t-[40px] border-r-[40px] border-t-transparent border-r-[#f87f01] z-20"></div>
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
                  Built for <span className="text-[#f87f01]">Every Adventure</span>
                </h2>
                <div className="w-16 h-1 bg-[#f87f01] mb-6"></div>
              </div>
              
              <p className="text-lg text-gray-700">
                Whether you&apos;re tackling epic gravel routes or exploring remote trails, 
                the One Adventure adapts to your journey with uncompromising performance and versatility.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border-l-2 border-[#f87f01] pl-4">
                  <h3 className="text-[#f87f01] font-bold mb-1">Dual Wheelset System</h3>
                  <p className="text-gray-600">700c Carbon + 650B DTSwiss for versatility across all terrain</p>
                </div>
                
                <div className="border-l-2 border-[#f87f01] pl-4">
                  <h3 className="text-[#f87f01] font-bold mb-1">Electronic Shifting</h3>
                  <p className="text-gray-600">Shimano Di2 XTR 12-speed for reliable performance</p>
                </div>
                
                <div className="border-l-2 border-[#f87f01] pl-4">
                  <h3 className="text-[#f87f01] font-bold mb-1">Carbon Frame</h3>
                  <p className="text-gray-600">TarX Carbon X-Light with integrated cockpit design</p>
                </div>
                
                <div className="border-l-2 border-[#f87f01] pl-4">
                  <h3 className="text-[#f87f01] font-bold mb-1">Wide Tire Clearance</h3>
                  <p className="text-gray-600">Up to 40mm (700c) / 2.1&quot; (650b) for diverse terrain</p>
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