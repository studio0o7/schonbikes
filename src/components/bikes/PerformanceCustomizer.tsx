import { useState } from 'react';
import { motion } from 'framer-motion';

type ConfigOption = {
  id: string;
  title: string;
  description: string;
};

const PerformanceCustomizer = () => {
  const [selectedWheel, setSelectedWheel] = useState('roll-1-carbon');
  const [selectedDrivetrain, setSelectedDrivetrain] = useState('sram-red');
  const [selectedHandlebar, setSelectedHandlebar] = useState('standard');
  
  const wheelOptions: ConfigOption[] = [
    { id: 'roll-1-carbon', title: 'Schönmomo Roll 1 Carbon', description: '700c 28mm - Aero (Standard)' },
    { id: 'roll-1-light', title: 'Schönmomo Roll 1 Light', description: 'Ultra-lightweight climbing wheels' },
    { id: 'roll-2-deep', title: 'Schönmomo Roll 2 Deep', description: '60mm deep-section for time trials' }
  ];
  
  const drivetrainOptions: ConfigOption[] = [
    { id: 'sram-red', title: 'SRAM RED eTap AXS', description: '12-speed wireless electronic (Standard)' },
    { id: 'sram-force', title: 'SRAM Force eTap AXS', description: '12-speed wireless electronic (Value)' },
    { id: 'shimano-di2', title: 'Shimano Dura-Ace Di2', description: '12-speed electronic shifting' }
  ];
  
  const handlebarOptions: ConfigOption[] = [
    { id: 'standard', title: 'Standard Width (42cm)', description: 'Integrated carbon handlebar (Standard)' },
    { id: 'narrow', title: 'Narrow Width (40cm)', description: 'For smaller riders or narrower shoulders' },
    { id: 'wide', title: 'Wide Width (44cm)', description: 'For larger riders or better stability' }
  ];

  return (
    <section id="customize" className="py-24 bg-black text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-32 bg-gradient-to-l from-[#f87f01]/20 to-transparent z-0"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-32 bg-gradient-to-r from-[#f87f01]/20 to-transparent z-0"></div>
      <div className="absolute top-1/4 right-0 w-64 h-64 rounded-full bg-[#f87f01]/5 blur-3xl z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 font-racing">
            Build Your <span className="text-[#f87f01]">Road Bike</span>
          </h2>
          <div className="w-24 h-1 bg-[#f87f01] mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Request your custom One Road build tailored to your riding style and racing goals
          </p>
        </motion.div>
        
        <div className="bg-gray-900/80 backdrop-blur-sm rounded-lg overflow-hidden border border-gray-700 p-6 md:p-8 max-w-7xl mx-auto">
          <form className="space-y-8">
            {/* Personal Information + Bike Fit in one row on desktop */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Personal Information */}
              <div>
                <h3 className="text-xl font-bold mb-6 text-[#f87f01] pb-2 border-b border-gray-700">Your Information</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-[#f87f01] focus:border-[#f87f01] focus:outline-none transition text-white"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-[#f87f01] focus:border-[#f87f01] focus:outline-none transition text-white"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
              </div>
              
              {/* Bike Fit */}
              <div>
                <h3 className="text-xl font-bold mb-6 text-[#f87f01] pb-2 border-b border-gray-700">Bike Fit Details</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="height" className="block text-sm font-medium text-gray-300 mb-1">Height (cm)</label>
                    <input 
                      type="text" 
                      id="height" 
                      className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-[#f87f01] focus:border-[#f87f01] focus:outline-none transition text-white"
                      placeholder="178"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="inseam" className="block text-sm font-medium text-gray-300 mb-1">Inseam (cm)</label>
                    <input 
                      type="text" 
                      id="inseam" 
                      className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-[#f87f01] focus:border-[#f87f01] focus:outline-none transition text-white"
                      placeholder="84"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="riding-style" className="block text-sm font-medium text-gray-300 mb-1">Primary Riding Style</label>
                  <select 
                    id="riding-style" 
                    className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-[#f87f01] focus:border-[#f87f01] focus:outline-none transition text-white"
                  >
                    <option value="">Select your primary use</option>
                    <option value="road-racing">Road Racing</option>
                    <option value="time-trial">Time Trials / Triathlons</option>
                    <option value="climbing">Climbing Specialist</option>
                    <option value="gran-fondo">Gran Fondos / Sportives</option>
                    <option value="recreational">Recreational Road Riding</option>
                  </select>
                </div>
              </div>
            </div>
            
            {/* Component Selection */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-[#f87f01] pb-2 border-b border-gray-700">Build Options</h3>
              
              {/* 3-Column layout for desktop */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Wheelset Configuration */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">Wheelset Selection</label>
                  <div className="space-y-3">
                    {wheelOptions.map((option) => (
                      <div 
                        key={option.id}
                        className={`p-3 border rounded-lg cursor-pointer transition-all ${
                          selectedWheel === option.id 
                            ? 'border-[#f87f01] bg-[#f87f01]/10' 
                            : 'border-gray-700 hover:border-gray-600'
                        }`}
                        onClick={() => setSelectedWheel(option.id)}
                      >
                        <div className="flex items-center">
                          <div className={`w-5 h-5 rounded-full border-2 ${
                            selectedWheel === option.id 
                              ? 'border-[#f87f01] bg-[#f87f01]' 
                              : 'border-gray-500'
                          } mr-3 flex-shrink-0`}>
                            {selectedWheel === option.id && (
                              <div className="w-full h-full rounded-full bg-white transform scale-50"></div>
                            )}
                          </div>
                          <div>
                            <span className="font-medium text-white">{option.title}</span>
                            <p className="text-sm text-gray-400">{option.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Drivetrain Options */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">Drivetrain Options</label>
                  <div className="space-y-3">
                    {drivetrainOptions.map((option) => (
                      <div 
                        key={option.id}
                        className={`p-3 border rounded-lg cursor-pointer transition-all ${
                          selectedDrivetrain === option.id 
                            ? 'border-[#f87f01] bg-[#f87f01]/10' 
                            : 'border-gray-700 hover:border-gray-600'
                        }`}
                        onClick={() => setSelectedDrivetrain(option.id)}
                      >
                        <div className="flex items-center">
                          <div className={`w-5 h-5 rounded-full border-2 ${
                            selectedDrivetrain === option.id 
                              ? 'border-[#f87f01] bg-[#f87f01]' 
                              : 'border-gray-500'
                          } mr-3 flex-shrink-0`}>
                            {selectedDrivetrain === option.id && (
                              <div className="w-full h-full rounded-full bg-white transform scale-50"></div>
                            )}
                          </div>
                          <div>
                            <span className="font-medium text-white">{option.title}</span>
                            <p className="text-sm text-gray-400">{option.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Handlebar Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">Handlebar Selection</label>
                  <div className="space-y-3">
                    {handlebarOptions.map((option) => (
                      <div 
                        key={option.id}
                        className={`p-3 border rounded-lg cursor-pointer transition-all ${
                          selectedHandlebar === option.id 
                            ? 'border-[#f87f01] bg-[#f87f01]/10' 
                            : 'border-gray-700 hover:border-gray-600'
                        }`}
                        onClick={() => setSelectedHandlebar(option.id)}
                      >
                        <div className="flex items-center">
                          <div className={`w-5 h-5 rounded-full border-2 ${
                            selectedHandlebar === option.id 
                              ? 'border-[#f87f01] bg-[#f87f01]' 
                              : 'border-gray-500'
                          } mr-3 flex-shrink-0`}>
                            {selectedHandlebar === option.id && (
                              <div className="w-full h-full rounded-full bg-white transform scale-50"></div>
                            )}
                          </div>
                          <div>
                            <span className="font-medium text-white">{option.title}</span>
                            <p className="text-sm text-gray-400">{option.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Additional Comments */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="lg:col-span-2">
                <label htmlFor="comments" className="block text-sm font-medium text-gray-300 mb-1">Additional Comments</label>
                <textarea 
                  id="comments" 
                  rows={3}
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-[#f87f01] focus:border-[#f87f01] focus:outline-none transition text-white"
                  placeholder="Any specific requirements or questions..."
                ></textarea>
              </div>
            </div>
            
            {/* Submit Button */}
            <div className="pt-4 text-center">
              <button type="submit" className="inline-block">
                <div className="rhombus-btn-primary relative overflow-hidden group">
                  <span className="relative z-10">Request Performance Build</span>
                  <motion.div 
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0 bg-white/20"
                  ></motion.div>
                </div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default PerformanceCustomizer; 