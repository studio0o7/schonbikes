import { motion } from 'framer-motion';

const TechnicalSpecs = () => {
  return (
    <section id="specifications" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 font-racing text-gray-900">
              Technical <span className="text-[#f87f01]">Specifications</span>
            </h2>
            <div className="w-24 h-1 bg-[#f87f01] mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Premium gravel build with industry-leading components
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
            {/* Frame Section */}
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-2">
                <h3 className="text-xl font-bold text-[#f87f01]">Frame & Components</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <div className="font-semibold text-gray-900">Frame</div>
                  <div className="text-gray-700">TarX Carbon X-Light Frame</div>
                </div>
                
                <div>
                  <div className="font-semibold text-gray-900">Fork</div>
                  <div className="text-gray-700">TarX Carbon X-Wide</div>
                </div>
                
                <div>
                  <div className="font-semibold text-gray-900">Stem</div>
                  <div className="text-gray-700">Integrated Cockpit</div>
                </div>
                
                <div>
                  <div className="font-semibold text-gray-900">Handlebar</div>
                  <div className="text-gray-700">Carbon+ Frame</div>
                </div>
                
                <div>
                  <div className="font-semibold text-gray-900">Seatpost</div>
                  <div className="text-gray-700">Carbon</div>
                </div>
                
                <div>
                  <div className="font-semibold text-gray-900">Bottom Bracket</div>
                  <div className="text-gray-700">Shimano</div>
                </div>
              </div>
            </div>
            
            {/* Drivetrain Section */}
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-2">
                <h3 className="text-xl font-bold text-[#f87f01]">Drivetrain</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <div className="font-semibold text-gray-900">Rear Derailleur</div>
                  <div className="text-gray-700">Shimano Di2 XTR</div>
                </div>
                
                <div>
                  <div className="font-semibold text-gray-900">Front Derailleur</div>
                  <div className="text-gray-700">1x Gearing</div>
                </div>
                
                <div>
                  <div className="font-semibold text-gray-900">Cassette</div>
                  <div className="text-gray-700">12x XD 10-50 Cassette</div>
                </div>
                
                <div>
                  <div className="font-semibold text-gray-900">Crank</div>
                  <div className="text-gray-700">Aluminium Crank</div>
                </div>
                
                <div>
                  <div className="font-semibold text-gray-900">Chain</div>
                  <div className="text-gray-700">12sp</div>
                </div>
              </div>
            </div>
            
            {/* Wheels Section */}
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-2">
                <h3 className="text-xl font-bold text-[#f87f01]">Wheels & Tires</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <div className="font-semibold text-gray-900">Primary Wheels</div>
                  <div className="text-gray-700">Tough Carbon Wheel</div>
                  <div className="text-gray-600 text-sm">35mm depth • 32mm</div>
                </div>
                
                <div>
                  <div className="font-semibold text-gray-900">Primary Tires</div>
                  <div className="text-gray-700">700x40C Standard</div>
                </div>
                
                <div>
                  <div className="font-semibold text-gray-900">Secondary Wheelset</div>
                  <div className="text-gray-700">DTSwiss 1900 650B Wheelset</div>
                </div>
                
                <div>
                  <div className="font-semibold text-gray-900">Secondary Tires</div>
                  <div className="text-gray-700">Premium 2.1&quot; tires</div>
                </div>
                
                <div>
                  <div className="font-semibold text-gray-900 flex items-center gap-2">
                    Saddle 
                    <span className="text-sm font-normal text-gray-600">(Custom Fit)</span>
                  </div>
                  <div className="text-gray-700">Custom Hard Trail Saddle</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <div className="inline-block px-6 py-3 border border-[#f87f01] rounded-lg text-[#f87f01]">
              <span className="font-semibold">Includes Dual Wheelset System</span>
              <p className="text-gray-600 text-sm mt-1">Switch between 700c and 650B wheels for different terrain</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSpecs; 