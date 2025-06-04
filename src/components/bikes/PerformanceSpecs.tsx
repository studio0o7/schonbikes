import { motion } from 'framer-motion';
import Link from 'next/link';

const PerformanceSpecs = () => {
  return (
    <section id="specifications" className="py-12 sm:py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
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
            <div className="w-24 h-1 bg-[#f87f01] mx-auto mb-4 sm:mb-6"></div>
            <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
              Pro-level racing components for ultimate performance
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 md:gap-x-10 gap-y-10 md:gap-y-16">
            {/* Frame Section */}
            <div className="space-y-4 sm:space-y-6">
              <div className="border-b border-gray-200 pb-2">
                <h3 className="text-xl font-bold text-[#f87f01]">Frame & Components</h3>
              </div>
              
              <div className="space-y-3 sm:space-y-4">
                <div>
                  <div className="font-semibold text-gray-900">Frame</div>
                  <div className="text-sm sm:text-base text-gray-700">Schönmo Tar Carbon X-Light Frame</div>
                </div>
                
                <div>
                  <div className="font-semibold text-gray-900">Fork</div>
                  <div className="text-sm sm:text-base text-gray-700">Schönmo Tar Carbon X-Wide</div>
                </div>
                
                <div>
                  <div className="font-semibold text-gray-900">Stem</div>
                  <div className="text-sm sm:text-base text-gray-700">Integrated Cockpit</div>
                </div>
                
                <div>
                  <div className="font-semibold text-gray-900">Handlebar</div>
                  <div className="text-sm sm:text-base text-gray-700">Carbon Frame</div>
                </div>
                
                <div>
                  <div className="font-semibold text-gray-900">Seatpost</div>
                  <div className="text-sm sm:text-base text-gray-700">Carbon</div>
                </div>
                
                <div>
                  <div className="font-semibold text-gray-900">Bottom Bracket</div>
                  <div className="text-sm sm:text-base text-gray-700">SRAM DUB</div>
                </div>
              </div>
            </div>
            
            {/* Drivetrain Section */}
            <div className="space-y-4 sm:space-y-6">
              <div className="border-b border-gray-200 pb-2">
                <h3 className="text-xl font-bold text-[#f87f01]">Drivetrain</h3>
              </div>
              
              <div className="space-y-3 sm:space-y-4">
                <div>
                  <div className="font-semibold text-gray-900">Rear Derailleur</div>
                  <div className="text-sm sm:text-base text-gray-700">SRAM RED eTap AXS 12</div>
                </div>
                
                <div>
                  <div className="font-semibold text-gray-900">Front Derailleur</div>
                  <div className="text-sm sm:text-base text-gray-700">SRAM RED eTap AXS x2</div>
                </div>
                
                <div>
                  <div className="font-semibold text-gray-900">Cassette</div>
                  <div className="text-sm sm:text-base text-gray-700">SRAM 36T</div>
                </div>
                
                <div>
                  <div className="font-semibold text-gray-900">Crank</div>
                  <div className="text-sm sm:text-base text-gray-700">SRAM Carbon Crank</div>
                </div>
                
                <div>
                  <div className="font-semibold text-gray-900">Chain</div>
                  <div className="text-sm sm:text-base text-gray-700">12sp</div>
                </div>
              </div>
            </div>
            
            {/* Wheels Section */}
            <div className="space-y-4 sm:space-y-6">
              <div className="border-b border-gray-200 pb-2">
                <h3 className="text-xl font-bold text-[#f87f01]">Wheels & Components</h3>
              </div>
              
              <div className="space-y-3 sm:space-y-4">
                <div>
                  <div className="font-semibold text-gray-900">Wheels</div>
                  <div className="text-sm sm:text-base text-gray-700">
                    <Link href="/wheelset" className="hover:text-[#f87f01] transition-colors">
                      RAD45 Carbon Aero
                    </Link>
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">28mm wide, 50mm deep • 700c</div>
                </div>
                
                <div>
                  <div className="font-semibold text-gray-900">Tires</div>
                  <div className="text-sm sm:text-base text-gray-700">700x32C Premium</div>
                </div>
                
                <div>
                  <div className="font-semibold text-gray-900">Saddle</div>
                  <div className="text-sm sm:text-base text-gray-700">Schönmo Custom Fit Saddle</div>
                </div>
                
                <div>
                  <div className="font-semibold text-gray-900">Brakes</div>
                  <div className="text-sm sm:text-base text-gray-700">SRAM RED eTap AXS Hydraulic Disc</div>
                </div>
                
                <div>
                  <div className="font-semibold text-gray-900 flex items-center gap-2">
                    Total Weight 
                    <span className="text-xs sm:text-sm font-normal text-gray-600">(Size M)</span>
                  </div>
                  <div className="text-sm sm:text-base text-gray-700">6.8kg (15.0 lbs)</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-10 sm:mt-16 text-center">
            <div className="inline-block px-5 sm:px-6 py-2 sm:py-3 border border-[#f87f01] rounded-lg text-[#f87f01]">
              <span className="font-semibold">UCI Legal Race Bike</span>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">Complies with all international racing regulations</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerformanceSpecs; 