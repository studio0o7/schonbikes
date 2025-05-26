import { useState } from 'react';

const WheelsetSpecs = () => {
  const [activeTab, setActiveTab] = useState('rad35');

  return (
    <section id="specifications" className="py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[url('/images/grid-pattern.png')] opacity-10 z-0"></div>
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-gray-100 to-transparent"></div>
      
      {/* Dynamic background elements */}
      <div className="absolute -left-48 top-1/2 w-96 h-96 bg-[#f87f01]/10 transform rotate-45 blur-3xl animate-pulse"></div>
      <div className="absolute -right-48 bottom-1/4 w-96 h-96 bg-[#f87f01]/10 transform rotate-45 blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute left-1/4 top-1/4 w-64 h-64 bg-blue-500/5 transform rotate-45 blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-800 font-racing">
            Technical <span className="text-[#f87f01]">Specifications</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Engineered with precision and built with the finest materials, our wheelsets are designed to perform at the highest level for years to come.
          </p>
        </div>
        
        {/* Rhombus Tabs - using the site's skewed button style */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex space-x-8">
            {/* RAD 35 Tab */}
            <div onClick={() => setActiveTab('rad35')} className="cursor-pointer">
              <div className={`
                ${activeTab === 'rad35' 
                  ? 'bg-[#f87f01] text-white' 
                  : 'bg-white text-gray-800 border-2 border-[#f87f01]'} 
                relative overflow-hidden transition-all duration-300
                px-8 py-3 font-medium shadow-md
                ${activeTab === 'rad35' 
                  ? 'shadow-[5px_5px_0_rgba(0,0,0,0.2)]' 
                  : 'hover:shadow-[5px_5px_0_rgba(248,127,1,0.2)]'}
                ${activeTab === 'rad35' ? '' : 'hover:bg-[#f87f01]/5'}
                rhombus-btn-tab
              `}>
                <span className="block">
                  RAD 35 (Gravel)
                </span>
              </div>
            </div>
            
            {/* RAD 45 Tab */}
            <div onClick={() => setActiveTab('rad45')} className="cursor-pointer">
              <div className={`
                ${activeTab === 'rad45' 
                  ? 'bg-[#f87f01] text-white' 
                  : 'bg-white text-gray-800 border-2 border-[#f87f01]'} 
                relative overflow-hidden transition-all duration-300
                px-8 py-3 font-medium shadow-md
                ${activeTab === 'rad45' 
                  ? 'shadow-[5px_5px_0_rgba(0,0,0,0.2)]' 
                  : 'hover:shadow-[5px_5px_0_rgba(248,127,1,0.2)]'}
                ${activeTab === 'rad45' ? '' : 'hover:bg-[#f87f01]/5'}
                rhombus-btn-tab
              `}>
                <span className="block">
                  RAD 45 (Road)
                </span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Specs Content */}
        <div className="bg-white shadow-[0_20px_50px_-15px_rgba(0,0,0,0.15)] border border-gray-200 p-10 relative">
          {/* Sharp corner accents */}
          <div className="absolute top-0 left-0 w-5 h-5 border-t-4 border-l-4 border-[#f87f01]"></div>
          <div className="absolute top-0 right-0 w-5 h-5 border-t-4 border-r-4 border-[#f87f01]"></div>
          <div className="absolute bottom-0 left-0 w-5 h-5 border-b-4 border-l-4 border-[#f87f01]"></div>
          <div className="absolute bottom-0 right-0 w-5 h-5 border-b-4 border-r-4 border-[#f87f01]"></div>
          
          {/* RAD 35 Specs */}
          <div className={`${activeTab === 'rad35' ? 'block animate-fadeIn' : 'hidden'}`}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="bg-gray-50 p-6 border-t-2 border-[#f87f01] shadow-md transform transition-all hover:shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-6 border-b-2 border-[#f87f01] pb-2 flex items-center">
                  <span className="w-3 h-3 bg-[#f87f01] rhombus-bullet mr-3"></span>
                  Rim Specifications
                </h3>
                <table className="w-full text-left">
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 text-gray-600 font-medium">Rim Size</td>
                      <td className="py-3 text-gray-800 font-medium">ETRTO 622, (28&quot;/700c) 35mm wide, 32mm deep</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 text-gray-600 font-medium">Rim Spec</td>
                      <td className="py-3 text-gray-800 font-medium">Tubeless-Ready Clincher, specific angle drilling</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 text-gray-600 font-medium">Rim Material</td>
                      <td className="py-3 text-gray-800 font-medium">Unidirectional carbon - ultralight layup</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="bg-gray-50 p-6 border-t-2 border-[#f87f01] shadow-md transform transition-all hover:shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-6 border-b-2 border-[#f87f01] pb-2 flex items-center">
                  <span className="w-3 h-3 bg-[#f87f01] rhombus-bullet mr-3"></span>
                  Hub Specifications
                </h3>
                <table className="w-full text-left">
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 text-gray-600 font-medium">Hubs</td>
                      <td className="py-3 text-gray-800 font-medium">Schonroad Centerlock type, locking bearings, black satin anodized</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 text-gray-600 font-medium">Front Hub Spec</td>
                      <td className="py-3 text-gray-800 font-medium">Thru-axle 100x12mm</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 text-gray-600 font-medium">Rear Hub Spec</td>
                      <td className="py-3 text-gray-800 font-medium">Thru-axle 142x12mm</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 text-gray-600 font-medium">Rear Hub Compatibility</td>
                      <td className="py-3 text-gray-800 font-medium">SRAM XDR Driver body included</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-gray-50 p-6 border-t-2 border-[#f87f01] shadow-md transform transition-all hover:shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-6 border-b-2 border-[#f87f01] pb-2 flex items-center">
                  <span className="w-3 h-3 bg-[#f87f01] rhombus-bullet mr-3"></span>
                  Component Specifications
                </h3>
                <table className="w-full text-left">
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 text-gray-600 font-medium">Spokes</td>
                      <td className="py-3 text-gray-800 font-medium">Pillar 1423 Straight-pull black finish, double butted</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 text-gray-600 font-medium">Nipples</td>
                      <td className="py-3 text-gray-800 font-medium">Chrome-plated brass</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="bg-gray-50 p-6 border-t-2 border-[#f87f01] shadow-md transform transition-all hover:shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-6 border-b-2 border-[#f87f01] pb-2 flex items-center">
                  <span className="w-3 h-3 bg-[#f87f01] rhombus-bullet mr-3"></span>
                  Performance Specifications
                </h3>
                <table className="w-full text-left">
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 text-gray-600 font-medium">Wheel weight (+/- 5%)</td>
                      <td className="py-3 text-gray-800 font-medium">1620g</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 text-gray-600 font-medium">Recommended Use</td>
                      <td className="py-3 text-gray-800 font-medium">Gravel, All-Road, Adventure</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          
          {/* RAD 45 Specs */}
          <div className={`${activeTab === 'rad45' ? 'block animate-fadeIn' : 'hidden'}`}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="bg-gray-50 p-6 border-t-2 border-[#f87f01] shadow-md transform transition-all hover:shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-6 border-b-2 border-[#f87f01] pb-2 flex items-center">
                  <span className="w-3 h-3 bg-[#f87f01] rhombus-bullet mr-3"></span>
                  Rim Specifications
                </h3>
                <table className="w-full text-left">
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 text-gray-600 font-medium">Rim Size</td>
                      <td className="py-3 text-gray-800 font-medium">ETRTO 622, (28&quot;/700c) 28mm wide, 50mm deep</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 text-gray-600 font-medium">Rim Spec</td>
                      <td className="py-3 text-gray-800 font-medium">Tubeless-Ready Clincher, specific angle drilling</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 text-gray-600 font-medium">Rim Material</td>
                      <td className="py-3 text-gray-800 font-medium">Unidirectional carbon - ultralight layup</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="bg-gray-50 p-6 border-t-2 border-[#f87f01] shadow-md transform transition-all hover:shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-6 border-b-2 border-[#f87f01] pb-2 flex items-center">
                  <span className="w-3 h-3 bg-[#f87f01] rhombus-bullet mr-3"></span>
                  Hub Specifications
                </h3>
                <table className="w-full text-left">
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 text-gray-600 font-medium">Hubs</td>
                      <td className="py-3 text-gray-800 font-medium">Schonroad Centerlock type, locking bearings, black satin anodized</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 text-gray-600 font-medium">Front Hub Spec</td>
                      <td className="py-3 text-gray-800 font-medium">Thru-axle 100x12mm</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 text-gray-600 font-medium">Rear Hub Spec</td>
                      <td className="py-3 text-gray-800 font-medium">Thru-axle 142x12mm</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 text-gray-600 font-medium">Rear Hub Compatibility</td>
                      <td className="py-3 text-gray-800 font-medium">SRAM XDR Driver body included</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-gray-50 p-6 border-t-2 border-[#f87f01] shadow-md transform transition-all hover:shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-6 border-b-2 border-[#f87f01] pb-2 flex items-center">
                  <span className="w-3 h-3 bg-[#f87f01] rhombus-bullet mr-3"></span>
                  Component Specifications
                </h3>
                <table className="w-full text-left">
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 text-gray-600 font-medium">Spokes</td>
                      <td className="py-3 text-gray-800 font-medium">Pillar Straight-pull black finish, double butted aero</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 text-gray-600 font-medium">Nipples</td>
                      <td className="py-3 text-gray-800 font-medium">Chrome-plated brass</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="bg-gray-50 p-6 border-t-2 border-[#f87f01] shadow-md transform transition-all hover:shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-6 border-b-2 border-[#f87f01] pb-2 flex items-center">
                  <span className="w-3 h-3 bg-[#f87f01] rhombus-bullet mr-3"></span>
                  Performance Specifications
                </h3>
                <table className="w-full text-left">
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 text-gray-600 font-medium">Wheel weight (+/- 5%)</td>
                      <td className="py-3 text-gray-800 font-medium">1620g</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 text-gray-600 font-medium">Recommended Use</td>
                      <td className="py-3 text-gray-800 font-medium">Road, Aero, Racing</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WheelsetSpecs; 