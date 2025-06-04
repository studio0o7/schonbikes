import { motion } from 'framer-motion';

const TechnicalSpecs = () => {
  return (
    <section id="specifications" className="py-12 sm:py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-10 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 font-racing text-gray-900">
              Technical <span className="text-[#f87f01]">Specifications</span>
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-[#f87f01] mx-auto mb-4 sm:mb-6"></div>
            <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
              Premium gravel build with industry-leading components
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 gap-y-10 sm:gap-y-12 md:gap-y-16 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 md:gap-x-10">
            {/* Frame Section */}
            <div className="space-y-4 sm:space-y-6">
              <div className="border-b border-gray-200 pb-2">
                <h3 className="text-lg sm:text-xl font-bold text-[#f87f01]">Frame & Components</h3>
              </div>
              
              <div className="space-y-3 sm:space-y-4">
                <div>
                  <div className="font-semibold text-gray-900 text-sm sm:text-base">Frame</div>
                  <div className="text-gray-700 text-sm sm:text-base">TarX Carbon X-Light Frame</div>
                </div>
                
                <div>
                  <div className="font-semibold text-gray-900 text-sm sm:text-base">Fork</div>
                  <div className="text-gray-700 text-sm sm:text-base">TarX Carbon X-Wide</div>
                </div>
                
                <div>
                  <div className="font-semibold text-gray-900 text-sm sm:text-base">Stem</div>
                  <div className="text-gray-700 text-sm sm:text-base">Integrated Cockpit</div>
                </div>
                
                <div>
                  <div className="font-semibold text-gray-900 text-sm sm:text-base">Handlebar</div>
                  <div className="text-gray-700 text-sm sm:text-base">Carbon+ Frame</div>
                </div>
                
                <div>
                  <div className="font-semibold text-gray-900 text-sm sm:text-base">Seatpost</div>
                  <div className="text-gray-700 text-sm sm:text-base">Carbon</div>
                </div>
                
                <div>
                  <div className="font-semibold text-gray-900 text-sm sm:text-base">Bottom Bracket</div>
                  <div className="text-gray-700 text-sm sm:text-base">Shimano</div>
                </div>
              </div>
            </div>
            
            {/* Drivetrain Section */}
            <div className="space-y-4 sm:space-y-6">
              <div className="border-b border-gray-200 pb-2">
                <h3 className="text-lg sm:text-xl font-bold text-[#f87f01]">Drivetrain</h3>
              </div>
              
              <div className="space-y-3 sm:space-y-4">
                <div>
                  <div className="font-semibold text-gray-900 text-sm sm:text-base">Rear Derailleur</div>
                  <div className="text-gray-700 text-sm sm:text-base">Shimano Di2 XTR</div>
                </div>
                
                <div>
                  <div className="font-semibold text-gray-900 text-sm sm:text-base">Front Derailleur</div>
                  <div className="text-gray-700 text-sm sm:text-base">1x Gearing</div>
                </div>
                
                <div>
                  <div className="font-semibold text-gray-900 text-sm sm:text-base">Cassette</div>
                  <div className="text-gray-700 text-sm sm:text-base">12x XD 10-50 Cassette</div>
                </div>
                
                <div>
                  <div className="font-semibold text-gray-900 text-sm sm:text-base">Crank</div>
                  <div className="text-gray-700 text-sm sm:text-base">Aluminium Crank</div>
                </div>
                
                <div>
                  <div className="font-semibold text-gray-900 text-sm sm:text-base">Chain</div>
                  <div className="text-gray-700 text-sm sm:text-base">12sp</div>
                </div>
              </div>
            </div>
            
            {/* Wheels Section */}
            <div className="space-y-4 sm:space-y-6">
              <div className="border-b border-gray-200 pb-2">
                <h3 className="text-lg sm:text-xl font-bold text-[#f87f01]">Wheels & Tires</h3>
              </div>
              
              <div className="space-y-3 sm:space-y-4">
                <div>
                  <div className="font-semibold text-gray-900 text-sm sm:text-base">Primary Wheels</div>
                  <div className="text-gray-700 text-sm sm:text-base">Tough Carbon Wheel</div>
                  <div className="text-gray-600 text-xs sm:text-sm">35mm depth • 32mm</div>
                </div>
                
                <div>
                  <div className="font-semibold text-gray-900 text-sm sm:text-base">Primary Tires</div>
                  <div className="text-gray-700 text-sm sm:text-base">700x40C Standard</div>
                </div>
                
                <div>
                  <div className="font-semibold text-gray-900 text-sm sm:text-base">Secondary Wheelset</div>
                  <div className="text-gray-700 text-sm sm:text-base">DTSwiss 1900 650B Wheelset</div>
                </div>
                
                <div>
                  <div className="font-semibold text-gray-900 text-sm sm:text-base">Secondary Tires</div>
                  <div className="text-gray-700 text-sm sm:text-base">Premium 2.1&quot; tires</div>
                </div>
                
                <div>
                  <div className="font-semibold text-gray-900 text-sm sm:text-base flex items-center gap-2">
                    Saddle 
                    <span className="text-xs sm:text-sm font-normal text-gray-600">(Custom Fit)</span>
                  </div>
                  <div className="text-gray-700 text-sm sm:text-base">Custom Hard Trail Saddle</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-10 sm:mt-16 text-center">
            <div className="inline-block px-4 sm:px-6 py-2 sm:py-3 border border-[#f87f01] rounded-lg text-[#f87f01]">
              <span className="font-semibold text-sm sm:text-base">Includes Dual Wheelset System</span>
              <p className="text-gray-600 text-xs sm:text-sm mt-1">Switch between 700c and 650B wheels for different terrain</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSpecs; 