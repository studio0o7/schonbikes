import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function GeometrySection() {
  const [selectedSize, setSelectedSize] = useState('520');
  
  return (
    <section className="bg-white py-16 relative overflow-hidden">
      {/* Subtle decorative elements */}
      <div className="absolute top-10 right-10 w-32 h-32 border border-gray-100 rounded-full opacity-50"></div>
      <div className="absolute top-40 left-20 w-24 h-24 bg-gray-50 rounded-full opacity-40"></div>
      <div className="absolute bottom-20 right-1/4 w-16 h-16 border-2 border-[#f87f01]/10 rounded-full"></div>
      <div className="absolute bottom-40 left-10 w-20 h-20 bg-[#f87f01]/5 rounded-full"></div>
      <div className="absolute top-20 left-1/2 w-40 h-1 bg-gradient-to-r from-transparent via-gray-100 to-transparent"></div>
      <div className="absolute bottom-10 right-20 w-28 h-1 bg-gradient-to-r from-transparent via-[#f87f01]/10 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center justify-center mb-2">
            <div className="h-px w-10 bg-[#f87f01]"></div>
            <span className="mx-3 text-sm font-semibold tracking-widest text-[#f87f01] uppercase">Frame measurements</span>
            <div className="h-px w-10 bg-[#f87f01]"></div>
          </div>
          
          <h2 className="text-4xl font-bold mb-3 font-racing text-gray-900 relative inline-block">
            <span className="text-[#f87f01]">Precise</span> Geometry
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#f87f01] to-[#f87f01]/20"
            ></motion.div>
          </h2>
          
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mt-4">
            Expertly designed for optimal performance and comfort with precision engineering
          </p>
        </motion.div>
        
        {/* Dark Size Selection */}
        <div className="max-w-7xl mx-auto mb-6">
          <div className="bg-gray-900 rounded-lg shadow-lg border border-gray-800 py-4 px-5 flex flex-wrap items-center justify-between gap-4 relative overflow-hidden">
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 opacity-50"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#f87f01]/5 rounded-full -mr-16 -mt-16"></div>
            
            <div className="flex items-center shrink-0 relative z-10">
              <span className="text-[#f87f01] mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" />
                </svg>
              </span>
              <h3 className="text-sm font-semibold text-white mr-3">Select Size:</h3>
            </div>
            
            <div className="flex items-center gap-3 relative z-10">
              {['490', '520', '550', '580'].map((size) => (
                <motion.button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  whileHover={{ scale: selectedSize === size ? 1 : 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`py-2 px-4 rounded-lg transition-all duration-300 relative border ${
                    selectedSize === size 
                      ? 'bg-[#f87f01] text-white font-semibold shadow-lg border-[#f87f01] ring-2 ring-[#f87f01]/30' 
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white border-gray-700 hover:border-gray-600'
                  }`}
                >
                  <span className="font-racing text-base">{size}</span>
                  {selectedSize === size && (
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full flex items-center justify-center"
                    >
                      <div className="w-1.5 h-1.5 bg-[#f87f01] rounded-full"></div>
                    </motion.div>
                  )}
                </motion.button>
              ))}
            </div>
            
            <div className="text-sm text-gray-300 flex items-center shrink-0 relative z-10">
              <span className="hidden sm:inline text-gray-400">Recommended for:</span>
              <span className="font-medium ml-1 text-white">
                {selectedSize === '490' ? 'Riders 165-172cm' : 
                 selectedSize === '520' ? 'Riders 173-179cm' :
                 selectedSize === '550' ? 'Riders 180-186cm' :
                 'Riders 187-194cm'}
              </span>
            </div>
          </div>
        </div>
        
        {/* Main Content with Image Left and Table Right */}
        <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
          {/* Left Column - Image */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-2/5 flex flex-col"
          >
            <div className="bg-white p-5 rounded-xl shadow-lg border border-gray-200 relative flex-grow">
              {/* Size indicator */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#f87f01] text-white font-bold py-1 px-6 rounded-full shadow-md z-20">
                <span className="font-racing">Size {selectedSize}</span>
              </div>
              
              {/* Frame diagram - reduced vertical padding */}
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-lg shadow-inner flex items-center justify-center overflow-hidden p-3 border border-gray-100 relative mt-2">
                <div className="relative w-full flex items-center justify-center">
                  <Image 
                    src="/images/geometry.png" 
                    alt={`Bicycle frame geometry diagram showing measurements for size ${selectedSize}`}
                    width={800}
                    height={500}
                    className="object-contain mx-auto relative z-10"
                    priority
                  />
                  
                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 border-t-[40px] border-r-[40px] border-t-transparent border-r-[#f87f01] z-20"></div>
                  <div className="absolute bottom-0 left-0 border-b-[30px] border-l-[30px] border-b-transparent border-l-[#f87f01]/50 z-20"></div>
                </div>
              </div>
              
              {/* Key geometry callouts */}
              <div className="grid grid-cols-2 gap-3 mt-4">
                {[
                  { label: 'Stack', value: selectedSize === '490' ? '542.6mm' : selectedSize === '520' ? '563.4mm' : selectedSize === '550' ? '598.6mm' : '627.1mm' },
                  { label: 'Reach', value: selectedSize === '490' ? '374.1mm' : selectedSize === '520' ? '377.5mm' : selectedSize === '550' ? '386mm' : '397.1mm' },
                  { label: 'Head Angle', value: selectedSize === '490' ? '71°' : selectedSize === '520' ? '71.5°' : selectedSize === '550' ? '72°' : '72°' },
                  { label: 'Seat Angle', value: selectedSize === '490' ? '73.5°' : selectedSize === '520' ? '73°' : selectedSize === '550' ? '72.5°' : '72.5°' }
                ].map((item, index) => (
                  <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-2 rounded-lg border border-gray-200 shadow-sm">
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-px">{item.label}</p>
                    <p className="text-lg font-racing text-[#f87f01] font-semibold">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Geometry note - moved below the image */}
            <div className="mt-4 bg-gray-50 rounded-lg p-3 border-l-2 border-[#f87f01] flex items-start shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#f87f01] mr-2 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <p className="text-sm text-gray-600">
                <span className="font-medium">Precise geometry:</span> STACK and REACH are key measurements used by professional bike fitters to determine the perfect frame size. Our frames are designed with a focus on these parameters for optimal positioning.
              </p>
            </div>
          </motion.div>
          
          {/* Right Column - Table */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-3/5"
          >
            <div className="bg-white p-5 rounded-xl shadow-lg border border-gray-200 h-full">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <span className="text-[#f87f01] mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                </span>
                Full Geometry Specifications
              </h3>
              
              {/* Measurements table */}
              <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm" style={{ minHeight: '500px' }}>
                <table className="min-w-full border-collapse">
                  <thead>
                    <tr className="bg-gradient-to-r from-gray-50 to-white">
                      <th colSpan={4} className="py-3 px-4 text-center border-b-2 border-[#f87f01] font-bold text-gray-800">
                        Geometry Specifications - Size {selectedSize}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="py-3 px-4 font-medium text-gray-800">SEAT TUBE LENGTH</td>
                      <td className="py-3 px-4 text-[#f87f01] font-semibold">
                        {selectedSize === '490' ? '490mm' : 
                         selectedSize === '520' ? '520mm' : 
                         selectedSize === '550' ? '550mm' : '580mm'}
                      </td>
                      <td className="py-3 px-4 font-medium text-gray-800">HEAD TUBE LENGTH</td>
                      <td className="py-3 px-4 text-[#f87f01] font-semibold">
                        {selectedSize === '490' ? '120mm' : 
                         selectedSize === '520' ? '140mm' : 
                         selectedSize === '550' ? '175mm' : '205mm'}
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors bg-gray-50">
                      <td className="py-3 px-4 font-medium text-gray-800">TOP TUBE LENGTH</td>
                      <td className="py-3 px-4 text-[#f87f01] font-semibold">
                        {selectedSize === '490' ? '535mm' : 
                         selectedSize === '520' ? '550mm' : 
                         selectedSize === '550' ? '575mm' : '595mm'}
                      </td>
                      <td className="py-3 px-4 font-medium text-gray-800">STACK</td>
                      <td className="py-3 px-4 text-[#f87f01] font-semibold">
                        {selectedSize === '490' ? '542.6mm' : 
                         selectedSize === '520' ? '563.4mm' : 
                         selectedSize === '550' ? '598.6mm' : '627.1mm'}
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="py-3 px-4 font-medium text-gray-800">REACH</td>
                      <td className="py-3 px-4 text-[#f87f01] font-semibold">
                        {selectedSize === '490' ? '374.1mm' : 
                         selectedSize === '520' ? '377.5mm' : 
                         selectedSize === '550' ? '386mm' : '397.1mm'}
                      </td>
                      <td className="py-3 px-4 font-medium text-gray-800">WHEELBASE</td>
                      <td className="py-3 px-4 text-[#f87f01] font-semibold">
                        {selectedSize === '490' ? '1008.9mm' : 
                         selectedSize === '520' ? '1014.5mm' : 
                         selectedSize === '550' ? '1029.6mm' : '1049.8mm'}
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors bg-gray-50">
                      <td className="py-3 px-4 font-medium text-gray-800">CHAINSTAY LENGTH</td>
                      <td className="py-3 px-4 text-[#f87f01] font-semibold">430mm</td>
                      <td className="py-3 px-4 font-medium text-gray-800">FRONT CENTER</td>
                      <td className="py-3 px-4 text-[#f87f01] font-semibold">
                        {selectedSize === '490' ? '593.8mm' : 
                         selectedSize === '520' ? '599.4mm' : 
                         selectedSize === '550' ? '614.5mm' : '634.5mm'}
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="py-3 px-4 font-medium text-gray-800">BB DROP</td>
                      <td className="py-3 px-4 text-[#f87f01] font-semibold">70mm</td>
                      <td className="py-3 px-4 font-medium text-gray-800">BB HEIGHT</td>
                      <td className="py-3 px-4 text-[#f87f01] font-semibold">285mm</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors bg-gray-50">
                      <td className="py-3 px-4 font-medium text-gray-800">SEAT TUBE ANGLE</td>
                      <td className="py-3 px-4 text-[#f87f01] font-semibold">
                        {selectedSize === '490' ? '73.5°' : 
                         selectedSize === '520' ? '73°' : 
                         selectedSize === '550' ? '72.5°' : '72.5°'}
                      </td>
                      <td className="py-3 px-4 font-medium text-gray-800">HEAD TUBE ANGLE</td>
                      <td className="py-3 px-4 text-[#f87f01] font-semibold">
                        {selectedSize === '490' ? '71°' : 
                         selectedSize === '520' ? '71.5°' : 
                         selectedSize === '550' ? '72°' : '72°'}
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="py-3 px-4 font-medium text-gray-800">FORK RAKE/OFFSET</td>
                      <td className="py-3 px-4 text-[#f87f01] font-semibold">50mm</td>
                      <td className="py-3 px-4 font-medium text-gray-800">FORK LENGTH</td>
                      <td className="py-3 px-4 text-[#f87f01] font-semibold">397mm</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors bg-gray-50">
                      <td className="py-3 px-4 font-medium text-gray-800">TRAIL</td>
                      <td className="py-3 px-4 text-[#f87f01] font-semibold">
                        {selectedSize === '490' ? '69.3mm' : 
                         selectedSize === '520' ? '66.1mm' : 
                         selectedSize === '550' ? '62.7mm' : '62.7mm'}
                      </td>
                      <td className="py-3 px-4 font-medium text-gray-800">SEATPOST INSERT LENGTH</td>
                      <td className="py-3 px-4 text-[#f87f01] font-semibold">
                        {selectedSize === '490' ? '180mm' : 
                         selectedSize === '520' ? '220mm' : 
                         selectedSize === '550' ? '250mm' : '270mm'}
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="py-3 px-4 font-medium text-gray-800">STANDOVER HEIGHT (700C)</td>
                      <td className="py-3 px-4 text-[#f87f01] font-semibold">
                        {selectedSize === '490' ? '776.4mm' : 
                         selectedSize === '520' ? '793.4mm' : 
                         selectedSize === '550' ? '833.4mm' : '863.9mm'}
                      </td>
                      <td className="py-3 px-4 font-medium text-gray-800">STANDOVER HEIGHT (650B)</td>
                      <td className="py-3 px-4 text-[#f87f01] font-semibold">
                        {selectedSize === '490' ? '766.4mm' : 
                         selectedSize === '520' ? '783.4mm' : 
                         selectedSize === '550' ? '823.4mm' : '853.9mm'}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              {/* Additional note about measurements */}
              <div className="mt-4 text-sm text-gray-500 italic">
                All measurements are based on a complete bike with the specified tire size and may vary slightly in production.
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 