import { useState } from 'react';
import { motion } from 'framer-motion';
import { sendEmail } from '@/utils/emailService';

type ConfigOption = {
  id: string;
  title: string;
  description: string;
};

const Customizer = () => {
  const [selectedHandlebar, setSelectedHandlebar] = useState('standard');
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    height: '',
    inseam: '',
    ridingStyle: '',
    comments: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  });
  
  const handlebarOptions: ConfigOption[] = [
    { id: 'standard', title: 'Standard Width (42cm)', description: 'Integrated carbon handlebar (Standard)' },
    { id: 'narrow', title: 'Narrow Width (40cm)', description: 'For smaller riders or narrower shoulders' },
    { id: 'wide', title: 'Wide Width (44cm)', description: 'For larger riders or better stability' }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const result = await sendEmail({
        subject: `Adventure Bike Customization Request: ${formState.name}`,
        message: `
Name: ${formState.name}
Email: ${formState.email}

Bike Fit Details:
Height: ${formState.height} cm
Inseam: ${formState.inseam} cm
Primary Riding Style: ${formState.ridingStyle}

Build Options:
Handlebar Selection: ${handlebarOptions.find(opt => opt.id === selectedHandlebar)?.title || selectedHandlebar}

Additional Comments:
${formState.comments}
        `,
        htmlMessage: `
<div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
  <h2 style="color: #f87f01;">New Adventure Bike Customization Request</h2>
  
  <h3 style="margin-top: 20px;">Customer Information</h3>
  <p><strong>Name:</strong> ${formState.name}</p>
  <p><strong>Email:</strong> ${formState.email}</p>
  
  <h3 style="margin-top: 20px;">Bike Fit Details</h3>
  <p><strong>Height:</strong> ${formState.height} cm</p>
  <p><strong>Inseam:</strong> ${formState.inseam} cm</p>
  <p><strong>Primary Riding Style:</strong> ${formState.ridingStyle}</p>
  
  <h3 style="margin-top: 20px;">Build Options</h3>
  <p><strong>Handlebar Selection:</strong> ${handlebarOptions.find(opt => opt.id === selectedHandlebar)?.title || selectedHandlebar}</p>
  <p><strong>Handlebar Description:</strong> ${handlebarOptions.find(opt => opt.id === selectedHandlebar)?.description || ''}</p>
  
  <h3 style="margin-top: 20px;">Additional Comments</h3>
  <p>${formState.comments}</p>
</div>
        `
      });
      
      if (result.success) {
        setFormStatus({ 
          submitted: true, 
          error: false,
          message: 'Your customization request has been submitted successfully. Our team will contact you shortly.'
        });
        // Reset form
        setFormState({
          name: '',
          email: '',
          height: '',
          inseam: '',
          ridingStyle: '',
          comments: ''
        });
        setSelectedHandlebar('standard');
      } else {
        throw new Error(result.error || 'Failed to submit request');
      }
    } catch (error) {
      console.error('Error submitting customization request:', error);
      setFormStatus({ 
        submitted: true, 
        error: true,
        message: error instanceof Error ? error.message : 'Failed to submit request'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="customize" className="py-12 sm:py-16 md:py-24 bg-black text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-32 bg-gradient-to-l from-[#f87f01]/20 to-transparent z-0"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-32 bg-gradient-to-r from-[#f87f01]/20 to-transparent z-0"></div>
      <div className="absolute top-1/4 right-0 w-64 h-64 rounded-full bg-[#f87f01]/5 blur-3xl z-0"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 font-racing">
            Build Your <span className="text-[#f87f01]">Adventure</span>
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-[#f87f01] mx-auto mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto">
            Request your custom One Adventure build tailored to your riding style
          </p>
        </motion.div>
        
        <div className="bg-gray-900/80 backdrop-blur-sm rounded-lg overflow-hidden border border-gray-700 p-4 sm:p-6 md:p-8 max-w-7xl mx-auto">
          {formStatus.submitted ? (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-8 sm:py-12"
            >
              {formStatus.error ? (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 sm:h-16 sm:w-16 text-red-500 mx-auto mb-4 sm:mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-4">Error</h3>
                </>
              ) : (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 sm:h-16 sm:w-16 text-green-500 mx-auto mb-4 sm:mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-4">Request Submitted!</h3>
                </>
              )}
              <p className="text-sm sm:text-base text-gray-300 mb-6 sm:mb-8">{formStatus.message}</p>
              <button 
                onClick={() => setFormStatus({ submitted: false, error: false, message: '' })}
                className="px-6 py-3 bg-[#f87f01] text-white rounded-md hover:bg-[#f87f01]/80 transition-colors"
              >
                {formStatus.error ? 'Try Again' : 'Submit Another Request'}
              </button>
            </motion.div>
          ) : (
            <form className="space-y-6 sm:space-y-8" onSubmit={handleSubmit}>
              {/* Personal Information + Bike Fit in one row on desktop */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                {/* Personal Information */}
                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-[#f87f01] pb-2 border-b border-gray-700">Your Information</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Full Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="w-full p-2 sm:p-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-[#f87f01] focus:border-[#f87f01] focus:outline-none transition text-white text-sm sm:text-base"
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="w-full p-2 sm:p-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-[#f87f01] focus:border-[#f87f01] focus:outline-none transition text-white text-sm sm:text-base"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Bike Fit */}
                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-[#f87f01] pb-2 border-b border-gray-700">Bike Fit Details</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div>
                      <label htmlFor="height" className="block text-sm font-medium text-gray-300 mb-1">Height (cm)</label>
                      <input 
                        type="text" 
                        id="height" 
                        name="height"
                        value={formState.height}
                        onChange={handleChange}
                        required
                        className="w-full p-2 sm:p-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-[#f87f01] focus:border-[#f87f01] focus:outline-none transition text-white text-sm sm:text-base"
                        placeholder="178"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="inseam" className="block text-sm font-medium text-gray-300 mb-1">Inseam (cm)</label>
                      <input 
                        type="text" 
                        id="inseam" 
                        name="inseam"
                        value={formState.inseam}
                        onChange={handleChange}
                        required
                        className="w-full p-2 sm:p-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-[#f87f01] focus:border-[#f87f01] focus:outline-none transition text-white text-sm sm:text-base"
                        placeholder="84"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="ridingStyle" className="block text-sm font-medium text-gray-300 mb-1">Primary Riding Style</label>
                    <select 
                      id="ridingStyle" 
                      name="ridingStyle"
                      value={formState.ridingStyle}
                      onChange={handleChange}
                      required
                      className="w-full p-2 sm:p-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-[#f87f01] focus:border-[#f87f01] focus:outline-none transition text-white text-sm sm:text-base"
                    >
                      <option value="">Select your primary use</option>
                      <option value="gravel-racing">Gravel Racing</option>
                      <option value="bikepacking">Bikepacking / Touring</option>
                      <option value="mixed-terrain">Mixed Road/Gravel</option>
                      <option value="commuting">Adventure Commuting</option>
                      <option value="recreational">Recreational Riding</option>
                    </select>
                  </div>
                </div>
              </div>
              
              {/* Component Selection */}
              <div>
                <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-[#f87f01] pb-2 border-b border-gray-700">Build Options</h3>
                
                {/* Handlebar Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2 sm:mb-3">Handlebar Selection</label>
                  <div className="space-y-2 sm:space-y-3">
                    {handlebarOptions.map((option) => (
                      <div 
                        key={option.id}
                        className={`p-2 sm:p-3 border rounded-lg cursor-pointer transition-all ${
                          selectedHandlebar === option.id 
                            ? 'border-[#f87f01] bg-[#f87f01]/10' 
                            : 'border-gray-700 hover:border-gray-600'
                        }`}
                        onClick={() => setSelectedHandlebar(option.id)}
                      >
                        <div className="flex items-center">
                          <div className={`w-4 sm:w-5 h-4 sm:h-5 rounded-full border-2 ${
                            selectedHandlebar === option.id 
                              ? 'border-[#f87f01] bg-[#f87f01]' 
                              : 'border-gray-500'
                          } mr-2 sm:mr-3 flex-shrink-0`}>
                            {selectedHandlebar === option.id && (
                              <div className="w-full h-full rounded-full bg-white transform scale-50"></div>
                            )}
                          </div>
                          <div>
                            <span className="font-medium text-white text-sm sm:text-base">{option.title}</span>
                            <p className="text-xs sm:text-sm text-gray-400">{option.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Additional Comments */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                <div className="lg:col-span-2">
                  <label htmlFor="comments" className="block text-sm font-medium text-gray-300 mb-1">Additional Comments</label>
                  <textarea 
                    id="comments" 
                    name="comments"
                    value={formState.comments}
                    onChange={handleChange}
                    rows={3}
                    className="w-full p-2 sm:p-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-[#f87f01] focus:border-[#f87f01] focus:outline-none transition text-white text-sm sm:text-base"
                    placeholder="Any specific requirements or questions..."
                  ></textarea>
                </div>
              </div>
              
              {/* Submit Button */}
              <div className="pt-2 sm:pt-4 text-center">
                <button type="submit" className="inline-block w-full sm:w-auto" disabled={isSubmitting}>
                  <div className="rhombus-btn-primary relative overflow-hidden group w-full sm:w-auto">
                    <span className="relative z-10 text-sm sm:text-base">
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing...
                        </span>
                      ) : 'Request Build Quote'}
                    </span>
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
          )}
        </div>
      </div>
    </section>
  );
};

export default Customizer; 