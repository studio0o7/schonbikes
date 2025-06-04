import Image from 'next/image';
import { motion } from 'framer-motion';

const BikeShowcase = () => {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6 sm:space-y-8 order-2 lg:order-1"
            >
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 font-racing text-white">
                  Premium <span className="text-[#f87f01]">Carbon Performance</span>
                </h2>
                <div className="w-12 sm:w-16 h-1 bg-[#f87f01] mb-4 sm:mb-6"></div>
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                  The TarX Carbon X-Light frame combines strength with compliance, featuring an integrated 
                  cockpit and custom hard trail saddle for maximum comfort on long adventures.
                </p>
              </div>
              
              <div className="space-y-4">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="border-l-2 border-[#f87f01] pl-3 sm:pl-4"
                >
                  <h3 className="text-white font-bold text-sm sm:text-base">TarX Carbon X-Light Frame</h3>
                  <p className="text-gray-400 text-sm sm:text-base">Optimized stiffness-to-weight ratio for responsive handling and comfort</p>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="border-l-2 border-[#f87f01] pl-3 sm:pl-4"
                >
                  <h3 className="text-white font-bold text-sm sm:text-base">Integrated Cockpit Design</h3>
                  <p className="text-gray-400 text-sm sm:text-base">Clean aesthetics with improved aerodynamics and handling precision</p>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="border-l-2 border-[#f87f01] pl-3 sm:pl-4"
                >
                  <h3 className="text-white font-bold text-sm sm:text-base">700x40C Standard Tires</h3>
                  <p className="text-gray-400 text-sm sm:text-base">Optimal balance of speed and grip for confident riding on varied terrain</p>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative order-1 lg:order-2 mt-0 mb-6 lg:mb-0"
            >
              <div className="overflow-hidden">
                <Image 
                  src="/images/Gravel2.png"
                  alt="One Adventure bike" 
                  width={800}
                  height={600}
                  className="w-full"
                />
              </div>
              
              {/* Triangle overlay in bottom right */}
              <div 
                className="absolute bottom-0 right-0 w-[70px] h-[70px] sm:w-[100px] sm:h-[100px] bg-[#f87f01] z-20"
                style={{
                  clipPath: 'polygon(100% 0%, 100% 100%, 0% 100%)'
                }}
              ></div>
              
              {/* Subtle accent elements */}
              <div className="absolute -bottom-4 -left-4 w-16 sm:w-24 h-16 sm:h-24 border border-[#f87f01]/30 rounded-full -z-10"></div>
              <div className="absolute -top-4 -right-4 w-12 sm:w-16 h-12 sm:h-16 border border-[#f87f01]/30 -z-10"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BikeShowcase; 