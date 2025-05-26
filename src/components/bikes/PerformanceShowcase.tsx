import Image from 'next/image';
import { motion } from 'framer-motion';

const PerformanceShowcase = () => {
  return (
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
                  Ultimate <span className="text-[#f87f01]">Race Performance</span>
                </h2>
                <div className="w-16 h-1 bg-[#f87f01] mb-6"></div>
                <p className="text-lg text-gray-300 leading-relaxed">
                  The Schönmo Tar Carbon X-Light frame delivers competition-level stiffness and response, with an 
                  integrated cockpit system and wireless SRAM electronic shifting for maximum power transfer.
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
                  <h3 className="text-white font-bold">Premium Carbon Technology</h3>
                  <p className="text-gray-400">Schönmo Tar Carbon X-Light frame with vibration dampening design</p>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="border-l-2 border-[#f87f01] pl-4"
                >
                  <h3 className="text-white font-bold">Wireless SRAM Shifting</h3>
                  <p className="text-gray-400">SRAM RED eTap AXS 12-speed for instantaneous gear changes</p>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="border-l-2 border-[#f87f01] pl-4"
                >
                  <h3 className="text-white font-bold">Race-Ready Wheelset</h3>
                  <p className="text-gray-400">Schönmomo Roll 1 Carbon wheels with 700x32C Premium tires</p>
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
              <div className="overflow-hidden">
                <Image 
                  src="/images/Road1.png"
                  alt="One Road bike" 
                  width={800}
                  height={600}
                  className="w-full"
                />
              </div>
              
              {/* Filled shape covering bottom right corner - smaller, no animation */}
              <div 
                className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-[#f87f01] z-20"
                style={{ clipPath: 'polygon(100% 0, 0% 100%, 100% 100%)' }} // Creates a triangle
              ></div>
              
              {/* Subtle accent elements */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border border-[#f87f01]/30 rounded-full -z-10"></div>
              <div className="absolute -top-4 -right-4 w-16 h-16 border border-[#f87f01]/30 -z-10"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerformanceShowcase; 