"use client";

import { useState } from 'react';

const SaddleSpecs = () => {
  const [activeTab, setActiveTab] = useState('size-m');

  return (
    <section id="specifications" className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[url('/images/grid-pattern.png')] opacity-10 z-0"></div>
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-gray-100 to-transparent"></div>
      
      {/* Dynamic background elements */}
      <div className="absolute -left-48 top-1/2 w-96 h-96 bg-[#f87f01]/10 transform rotate-45 blur-3xl animate-pulse"></div>
      <div className="absolute -right-48 bottom-1/4 w-96 h-96 bg-[#f87f01]/10 transform rotate-45 blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute left-1/4 top-1/4 w-64 h-64 bg-blue-500/5 transform rotate-45 blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-gray-800 font-racing">
            Technical <span className="text-[#f87f01]">Specifications</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base px-2">
            Engineered with precision and built with the finest materials, our VitruFit saddles are designed to provide optimal comfort without compromising performance.
          </p>
        </div>
        
        {/* Rhombus Tabs - mobile scrollable, desktop inline */}
        <div className="flex justify-center mb-8 sm:mb-12 md:mb-16 overflow-x-auto pb-4 sm:pb-0 px-2 sm:px-0">
          <div className="inline-flex space-x-3 sm:space-x-8">
            {/* Size S Tab */}
            <div onClick={() => setActiveTab('size-s')} className="cursor-pointer flex-shrink-0">
              <div className={`
                ${activeTab === 'size-s' 
                  ? 'bg-[#f87f01] text-white' 
                  : 'bg-white text-gray-800 border-2 border-[#f87f01]'} 
                relative overflow-hidden transition-all duration-300
                px-4 sm:px-8 py-2 sm:py-3 text-sm sm:text-base font-medium shadow-md
                ${activeTab === 'size-s' 
                  ? 'shadow-[5px_5px_0_rgba(0,0,0,0.2)]' 
                  : 'hover:shadow-[5px_5px_0_rgba(248,127,1,0.2)]'}
                ${activeTab === 'size-s' ? '' : 'hover:bg-[#f87f01]/5'}
                rhombus-btn-tab
              `}>
                <span className="block whitespace-nowrap">
                  Size S (125mm)
                </span>
              </div>
            </div>
            
            {/* Size M Tab */}
            <div onClick={() => setActiveTab('size-m')} className="cursor-pointer flex-shrink-0">
              <div className={`
                ${activeTab === 'size-m' 
                  ? 'bg-[#f87f01] text-white' 
                  : 'bg-white text-gray-800 border-2 border-[#f87f01]'} 
                relative overflow-hidden transition-all duration-300
                px-4 sm:px-8 py-2 sm:py-3 text-sm sm:text-base font-medium shadow-md
                ${activeTab === 'size-m' 
                  ? 'shadow-[5px_5px_0_rgba(0,0,0,0.2)]' 
                  : 'hover:shadow-[5px_5px_0_rgba(248,127,1,0.2)]'}
                ${activeTab === 'size-m' ? '' : 'hover:bg-[#f87f01]/5'}
                rhombus-btn-tab
              `}>
                <span className="block whitespace-nowrap">
                  Size M (140mm)
                </span>
              </div>
            </div>
            
            {/* Size L Tab */}
            <div onClick={() => setActiveTab('size-l')} className="cursor-pointer flex-shrink-0">
              <div className={`
                ${activeTab === 'size-l' 
                  ? 'bg-[#f87f01] text-white' 
                  : 'bg-white text-gray-800 border-2 border-[#f87f01]'} 
                relative overflow-hidden transition-all duration-300
                px-4 sm:px-8 py-2 sm:py-3 text-sm sm:text-base font-medium shadow-md
                ${activeTab === 'size-l' 
                  ? 'shadow-[5px_5px_0_rgba(0,0,0,0.2)]' 
                  : 'hover:shadow-[5px_5px_0_rgba(248,127,1,0.2)]'}
                ${activeTab === 'size-l' ? '' : 'hover:bg-[#f87f01]/5'}
                rhombus-btn-tab
              `}>
                <span className="block whitespace-nowrap">
                  Size L (155mm)
                </span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Specs Content */}
        <div className="bg-white shadow-[0_20px_50px_-15px_rgba(0,0,0,0.15)] border border-gray-200 p-4 sm:p-6 md:p-10 relative">
          {/* Sharp corner accents */}
          <div className="absolute top-0 left-0 w-4 sm:w-5 h-4 sm:h-5 border-t-2 sm:border-t-4 border-l-2 sm:border-l-4 border-[#f87f01]"></div>
          <div className="absolute top-0 right-0 w-4 sm:w-5 h-4 sm:h-5 border-t-2 sm:border-t-4 border-r-2 sm:border-r-4 border-[#f87f01]"></div>
          <div className="absolute bottom-0 left-0 w-4 sm:w-5 h-4 sm:h-5 border-b-2 sm:border-b-4 border-l-2 sm:border-l-4 border-[#f87f01]"></div>
          <div className="absolute bottom-0 right-0 w-4 sm:w-5 h-4 sm:h-5 border-b-2 sm:border-b-4 border-r-2 sm:border-r-4 border-[#f87f01]"></div>
          
          {/* Size S Specs */}
          <div className={`${activeTab === 'size-s' ? 'block animate-fadeIn' : 'hidden'}`}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-10">
              <div className="bg-gray-50 p-4 sm:p-6 border-t-2 border-[#f87f01] shadow-md transform transition-all hover:shadow-lg">
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 sm:mb-6 border-b-2 border-[#f87f01] pb-2 flex items-center">
                  <span className="w-2 sm:w-3 h-2 sm:h-3 bg-[#f87f01] rhombus-bullet mr-2 sm:mr-3"></span>
                  Dimensions
                </h3>
                <table className="w-full text-left text-sm sm:text-base">
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="py-2 sm:py-3 text-gray-600 font-medium">Saddle Width</td>
                      <td className="py-2 sm:py-3 text-gray-800 font-medium">125mm</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-2 sm:py-3 text-gray-600 font-medium">Saddle Length</td>
                      <td className="py-2 sm:py-3 text-gray-800 font-medium">270mm</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-2 sm:py-3 text-gray-600 font-medium">Overall Size</td>
                      <td className="py-2 sm:py-3 text-gray-800 font-medium">270mm × 125mm</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-2 sm:py-3 text-gray-600 font-medium">Sit Bone Width</td>
                      <td className="py-2 sm:py-3 text-gray-800 font-medium">10-12cm</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="bg-gray-50 p-4 sm:p-6 border-t-2 border-[#f87f01] shadow-md transform transition-all hover:shadow-lg">
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 sm:mb-6 border-b-2 border-[#f87f01] pb-2 flex items-center">
                  <span className="w-2 sm:w-3 h-2 sm:h-3 bg-[#f87f01] rhombus-bullet mr-2 sm:mr-3"></span>
                  Materials
                </h3>
                <table className="w-full text-left text-sm sm:text-base">
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="py-2 sm:py-3 text-gray-600 font-medium">Rail Material</td>
                      <td className="py-2 sm:py-3 text-gray-800 font-medium">CR-MO ED Rail, w/Max Scale, w/o clamp</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-2 sm:py-3 text-gray-600 font-medium">Padding</td>
                      <td className="py-2 sm:py-3 text-gray-800 font-medium">One piece foam</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-2 sm:py-3 text-gray-600 font-medium">Cover</td>
                      <td className="py-2 sm:py-3 text-gray-800 font-medium">BK Vinyl Cover with printing</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-2 sm:py-3 text-gray-600 font-medium">Bumper</td>
                      <td className="py-2 sm:py-3 text-gray-800 font-medium">BK Front/Rear Bumper</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-gray-50 p-4 sm:p-6 border-t-2 border-[#f87f01] shadow-md transform transition-all hover:shadow-lg">
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 sm:mb-6 border-b-2 border-[#f87f01] pb-2 flex items-center">
                  <span className="w-2 sm:w-3 h-2 sm:h-3 bg-[#f87f01] rhombus-bullet mr-2 sm:mr-3"></span>
                  Performance
                </h3>
                <table className="w-full text-left text-sm sm:text-base">
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="py-2 sm:py-3 text-gray-600 font-medium">Weight</td>
                      <td className="py-2 sm:py-3 text-gray-800 font-medium">340g ±2%</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-2 sm:py-3 text-gray-600 font-medium">Relief Channel</td>
                      <td className="py-2 sm:py-3 text-gray-800 font-medium">61% Pressure Reduction</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-2 sm:py-3 text-gray-600 font-medium">Flex Rating</td>
                      <td className="py-2 sm:py-3 text-gray-800 font-medium">Medium-Firm</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="bg-gray-50 p-4 sm:p-6 border-t-2 border-[#f87f01] shadow-md transform transition-all hover:shadow-lg">
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 sm:mb-6 border-b-2 border-[#f87f01] pb-2 flex items-center">
                  <span className="w-2 sm:w-3 h-2 sm:h-3 bg-[#f87f01] rhombus-bullet mr-2 sm:mr-3"></span>
                  Compatibility
                </h3>
                <table className="w-full text-left text-sm sm:text-base">
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="py-2 sm:py-3 text-gray-600 font-medium">Rail Type</td>
                      <td className="py-2 sm:py-3 text-gray-800 font-medium">7mm Round</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-2 sm:py-3 text-gray-600 font-medium">Riding Type</td>
                      <td className="py-2 sm:py-3 text-gray-800 font-medium">Road, Gravel, Triathlon</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-2 sm:py-3 text-gray-600 font-medium">Max Rider Weight</td>
                      <td className="py-2 sm:py-3 text-gray-800 font-medium">90kg (198lbs)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          
          {/* Size M Specs */}
          <div className={`${activeTab === 'size-m' ? 'block animate-fadeIn' : 'hidden'}`}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-10">
              <div className="bg-gray-50 p-4 sm:p-6 border-t-2 border-[#f87f01] shadow-md transform transition-all hover:shadow-lg">
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 sm:mb-6 border-b-2 border-[#f87f01] pb-2 flex items-center">
                  <span className="w-2 sm:w-3 h-2 sm:h-3 bg-[#f87f01] rhombus-bullet mr-2 sm:mr-3"></span>
                  Dimensions
                </h3>
                <table className="w-full text-left text-sm sm:text-base">
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="py-2 sm:py-3 text-gray-600 font-medium">Saddle Width</td>
                      <td className="py-2 sm:py-3 text-gray-800 font-medium">140mm</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-2 sm:py-3 text-gray-600 font-medium">Saddle Length</td>
                      <td className="py-2 sm:py-3 text-gray-800 font-medium">270mm</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-2 sm:py-3 text-gray-600 font-medium">Overall Size</td>
                      <td className="py-2 sm:py-3 text-gray-800 font-medium">270mm × 140mm</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-2 sm:py-3 text-gray-600 font-medium">Sit Bone Width</td>
                      <td className="py-2 sm:py-3 text-gray-800 font-medium">12-14cm</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="bg-gray-50 p-4 sm:p-6 border-t-2 border-[#f87f01] shadow-md transform transition-all hover:shadow-lg">
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 sm:mb-6 border-b-2 border-[#f87f01] pb-2 flex items-center">
                  <span className="w-2 sm:w-3 h-2 sm:h-3 bg-[#f87f01] rhombus-bullet mr-2 sm:mr-3"></span>
                  Materials
                </h3>
                <table className="w-full text-left text-sm sm:text-base">
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="py-2 sm:py-3 text-gray-600 font-medium">Rail Material</td>
                      <td className="py-2 sm:py-3 text-gray-800 font-medium">CR-MO ED Rail, w/Max Scale, w/o clamp</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-2 sm:py-3 text-gray-600 font-medium">Padding</td>
                      <td className="py-2 sm:py-3 text-gray-800 font-medium">One piece foam</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-2 sm:py-3 text-gray-600 font-medium">Cover</td>
                      <td className="py-2 sm:py-3 text-gray-800 font-medium">BK Vinyl Cover with printing</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-2 sm:py-3 text-gray-600 font-medium">Bumper</td>
                      <td className="py-2 sm:py-3 text-gray-800 font-medium">BK Front/Rear Bumper</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="bg-gray-50 p-4 sm:p-6 border-t-2 border-[#f87f01] shadow-md transform transition-all hover:shadow-lg">
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 sm:mb-6 border-b-2 border-[#f87f01] pb-2 flex items-center">
                  <span className="w-2 sm:w-3 h-2 sm:h-3 bg-[#f87f01] rhombus-bullet mr-2 sm:mr-3"></span>
                  Performance
                </h3>
                <table className="w-full text-left text-sm sm:text-base">
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="py-2 sm:py-3 text-gray-600 font-medium">Weight</td>
                      <td className="py-2 sm:py-3 text-gray-800 font-medium">370g ±2%</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-2 sm:py-3 text-gray-600 font-medium">Relief Channel</td>
                      <td className="py-2 sm:py-3 text-gray-800 font-medium">63% Pressure Reduction</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-2 sm:py-3 text-gray-600 font-medium">Flex Rating</td>
                      <td className="py-2 sm:py-3 text-gray-800 font-medium">Medium-Firm</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="bg-gray-50 p-4 sm:p-6 border-t-2 border-[#f87f01] shadow-md transform transition-all hover:shadow-lg">
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 sm:mb-6 border-b-2 border-[#f87f01] pb-2 flex items-center">
                  <span className="w-2 sm:w-3 h-2 sm:h-3 bg-[#f87f01] rhombus-bullet mr-2 sm:mr-3"></span>
                  Compatibility
                </h3>
                <table className="w-full text-left text-sm sm:text-base">
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="py-2 sm:py-3 text-gray-600 font-medium">Rail Type</td>
                      <td className="py-2 sm:py-3 text-gray-800 font-medium">7mm Round</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-2 sm:py-3 text-gray-600 font-medium">Riding Type</td>
                      <td className="py-2 sm:py-3 text-gray-800 font-medium">Road, Gravel, Triathlon</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-2 sm:py-3 text-gray-600 font-medium">Max Rider Weight</td>
                      <td className="py-2 sm:py-3 text-gray-800 font-medium">95kg (210lbs)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          
          {/* Size L Specs */}
          <div className={`${activeTab === 'size-l' ? 'block animate-fadeIn' : 'hidden'}`}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-10">
              <div className="bg-gray-50 p-4 sm:p-6 border-t-2 border-[#f87f01] shadow-md transform transition-all hover:shadow-lg">
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 sm:mb-6 border-b-2 border-[#f87f01] pb-2 flex items-center">
                  <span className="w-2 sm:w-3 h-2 sm:h-3 bg-[#f87f01] rhombus-bullet mr-2 sm:mr-3"></span>
                  Dimensions
                </h3>
                <table className="w-full text-left text-sm sm:text-base">
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="py-2 sm:py-3 text-gray-600 font-medium">Saddle Width</td>
                      <td className="py-2 sm:py-3 text-gray-800 font-medium">155mm</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-2 sm:py-3 text-gray-600 font-medium">Saddle Length</td>
                      <td className="py-2 sm:py-3 text-gray-800 font-medium">270mm</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-2 sm:py-3 text-gray-600 font-medium">Overall Size</td>
                      <td className="py-2 sm:py-3 text-gray-800 font-medium">270mm × 155mm</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-2 sm:py-3 text-gray-600 font-medium">Sit Bone Width</td>
                      <td className="py-2 sm:py-3 text-gray-800 font-medium">14-16cm</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="bg-gray-50 p-4 sm:p-6 border-t-2 border-[#f87f01] shadow-md transform transition-all hover:shadow-lg">
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 sm:mb-6 border-b-2 border-[#f87f01] pb-2 flex items-center">
                  <span className="w-2 sm:w-3 h-2 sm:h-3 bg-[#f87f01] rhombus-bullet mr-2 sm:mr-3"></span>
                  Materials
                </h3>
                <table className="w-full text-left text-sm sm:text-base">
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="py-2 sm:py-3 text-gray-600 font-medium">Rail Material</td>
                      <td className="py-2 sm:py-3 text-gray-800 font-medium">CR-MO ED Rail, w/Max Scale, w/o clamp</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-2 sm:py-3 text-gray-600 font-medium">Padding</td>
                      <td className="py-2 sm:py-3 text-gray-800 font-medium">One piece foam</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-2 sm:py-3 text-gray-600 font-medium">Cover</td>
                      <td className="py-2 sm:py-3 text-gray-800 font-medium">BK Vinyl Cover with printing</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-2 sm:py-3 text-gray-600 font-medium">Bumper</td>
                      <td className="py-2 sm:py-3 text-gray-800 font-medium">BK Front/Rear Bumper</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="bg-gray-50 p-4 sm:p-6 border-t-2 border-[#f87f01] shadow-md transform transition-all hover:shadow-lg">
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 sm:mb-6 border-b-2 border-[#f87f01] pb-2 flex items-center">
                  <span className="w-2 sm:w-3 h-2 sm:h-3 bg-[#f87f01] rhombus-bullet mr-2 sm:mr-3"></span>
                  Performance
                </h3>
                <table className="w-full text-left text-sm sm:text-base">
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="py-2 sm:py-3 text-gray-600 font-medium">Weight</td>
                      <td className="py-2 sm:py-3 text-gray-800 font-medium">400g ±2%</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-2 sm:py-3 text-gray-600 font-medium">Relief Channel</td>
                      <td className="py-2 sm:py-3 text-gray-800 font-medium">65% Pressure Reduction</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-2 sm:py-3 text-gray-600 font-medium">Flex Rating</td>
                      <td className="py-2 sm:py-3 text-gray-800 font-medium">Medium-Firm</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="bg-gray-50 p-4 sm:p-6 border-t-2 border-[#f87f01] shadow-md transform transition-all hover:shadow-lg">
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 sm:mb-6 border-b-2 border-[#f87f01] pb-2 flex items-center">
                  <span className="w-2 sm:w-3 h-2 sm:h-3 bg-[#f87f01] rhombus-bullet mr-2 sm:mr-3"></span>
                  Compatibility
                </h3>
                <table className="w-full text-left text-sm sm:text-base">
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="py-2 sm:py-3 text-gray-600 font-medium">Rail Type</td>
                      <td className="py-2 sm:py-3 text-gray-800 font-medium">7mm Round</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-2 sm:py-3 text-gray-600 font-medium">Riding Type</td>
                      <td className="py-2 sm:py-3 text-gray-800 font-medium">Road, Gravel, Triathlon</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-2 sm:py-3 text-gray-600 font-medium">Max Rider Weight</td>
                      <td className="py-2 sm:py-3 text-gray-800 font-medium">120kg (264lbs)</td>
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

export default SaddleSpecs; 