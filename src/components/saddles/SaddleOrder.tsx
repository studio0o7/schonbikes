"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';
import { sendEmail } from '@/utils/emailService';

const SaddleOrder = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    saddleSize: 'medium',
    bikeType: 'road',
    comments: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  
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
        subject: `New VitruFit Saddle Order: ${formState.name} - ${getSaddleSizeText(formState.saddleSize)}`,
        message: `
Name: ${formState.name}
Email: ${formState.email}
Phone: ${formState.phone || 'Not provided'}

Order Details:
Saddle Size: ${getSaddleSizeText(formState.saddleSize)}
Primary Bike Type: ${getBikeTypeText(formState.bikeType)}

Additional Information:
${formState.comments || 'None provided'}
        `,
        htmlMessage: `
<div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
  <h2 style="color: #f87f01;">New VitruFit Saddle Order</h2>
  
  <h3 style="margin-top: 20px;">Customer Information</h3>
  <p><strong>Name:</strong> ${formState.name}</p>
  <p><strong>Email:</strong> ${formState.email}</p>
  <p><strong>Phone:</strong> ${formState.phone || 'Not provided'}</p>
  
  <h3 style="margin-top: 20px;">Order Details</h3>
  <p><strong>Saddle Size:</strong> ${getSaddleSizeText(formState.saddleSize)}</p>
  <p><strong>Primary Bike Type:</strong> ${getBikeTypeText(formState.bikeType)}</p>
  
  <h3 style="margin-top: 20px;">Additional Information</h3>
  <p>${formState.comments || 'None provided'}</p>
</div>
        `
      });
      
      if (result.success) {
        setIsSubmitted(true);
        setErrorMessage('');
        
        // Reset form after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
          setFormState({
            name: '',
            email: '',
            phone: '',
            saddleSize: 'medium',
            bikeType: 'road',
            comments: ''
          });
        }, 5000);
      } else {
        throw new Error(result.error || 'Failed to submit order request');
      }
    } catch (error) {
      console.error('Error submitting saddle order:', error);
      setErrorMessage(error instanceof Error ? error.message : 'Failed to submit order request');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // Helper functions to get readable text
  const getSaddleSizeText = (size: string): string => {
    switch (size) {
      case 'small': return 'Size S (Small) - 10-12cm sit bones';
      case 'medium': return 'Size M (Medium) - 12-14cm sit bones';
      case 'large': return 'Size L (Large) - 14-16cm sit bones';
      case 'unsure': return 'Not sure (needs help choosing)';
      default: return size;
    }
  };
  
  const getBikeTypeText = (type: string): string => {
    switch (type) {
      case 'road': return 'Road Bike';
      case 'gravel': return 'Gravel/Adventure Bike';
      case 'mountain': return 'Mountain Bike';
      case 'triathlon': return 'Triathlon/TT Bike';
      case 'commuter': return 'Commuter/City Bike';
      default: return type;
    }
  };
  
  return (
    <section id="order" className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[url('/images/grid-pattern.png')] opacity-5 z-0"></div>
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent"></div>
      <div className="absolute -right-48 bottom-1/3 w-96 h-96 rounded-full bg-[#f87f01]/10 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-white font-racing">
              Order <span className="text-[#f87f01]">VitruFit</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base px-2">
              Complete the form below to request your VitruFit saddle. Our team will contact you within 24 hours to confirm your order details and provide pricing information.
            </p>
          </div>
          
          {/* Order Form */}
          <div className="bg-gray-900/30 backdrop-blur-sm rounded-xl p-4 sm:p-6 md:p-8 border border-gray-800">
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-8 sm:py-12"
              >
                <div className="w-12 sm:w-16 h-12 sm:h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-6 sm:h-8 w-6 sm:w-8 text-green-500" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-4">Request Submitted!</h3>
                <p className="text-gray-400 text-sm sm:text-base mb-4 sm:mb-6">
                  Thank you for your interest in the SchönMO VitruFit saddle. Our team will contact you shortly to discuss your requirements.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit}>
                {errorMessage && (
                  <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-center">
                    <p className="text-red-400">{errorMessage}</p>
                  </div>
                )}
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-white text-sm sm:text-base mb-1 sm:mb-2 font-medium">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-black/50 border border-gray-700 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base text-white focus:outline-none focus:ring-2 focus:ring-[#f87f01] focus:border-transparent transition"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-white text-sm sm:text-base mb-1 sm:mb-2 font-medium">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-black/50 border border-gray-700 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base text-white focus:outline-none focus:ring-2 focus:ring-[#f87f01] focus:border-transparent transition"
                      placeholder="Enter your email address"
                    />
                  </div>
                  
                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-white text-sm sm:text-base mb-1 sm:mb-2 font-medium">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      className="w-full bg-black/50 border border-gray-700 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base text-white focus:outline-none focus:ring-2 focus:ring-[#f87f01] focus:border-transparent transition"
                      placeholder="Enter your phone number (optional)"
                    />
                  </div>
                  
                  {/* Saddle Size */}
                  <div>
                    <label htmlFor="saddleSize" className="block text-white text-sm sm:text-base mb-1 sm:mb-2 font-medium">
                      Saddle Size
                    </label>
                    <select
                      id="saddleSize"
                      name="saddleSize"
                      value={formState.saddleSize}
                      onChange={handleChange}
                      required
                      className="w-full bg-black/50 border border-gray-700 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base text-white focus:outline-none focus:ring-2 focus:ring-[#f87f01] focus:border-transparent transition"
                    >
                      <option value="small">Size S (Small) - 10-12cm sit bones</option>
                      <option value="medium">Size M (Medium) - 12-14cm sit bones</option>
                      <option value="large">Size L (Large) - 14-16cm sit bones</option>
                      <option value="unsure">Not sure (we&apos;ll help you choose)</option>
                    </select>
                  </div>
                  
                  {/* Bike Type */}
                  <div>
                    <label htmlFor="bikeType" className="block text-white text-sm sm:text-base mb-1 sm:mb-2 font-medium">
                      Primary Bike Type
                    </label>
                    <select
                      id="bikeType"
                      name="bikeType"
                      value={formState.bikeType}
                      onChange={handleChange}
                      required
                      className="w-full bg-black/50 border border-gray-700 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base text-white focus:outline-none focus:ring-2 focus:ring-[#f87f01] focus:border-transparent transition"
                    >
                      <option value="road">Road Bike</option>
                      <option value="gravel">Gravel/Adventure Bike</option>
                      <option value="mountain">Mountain Bike</option>
                      <option value="triathlon">Triathlon/TT Bike</option>
                      <option value="commuter">Commuter/City Bike</option>
                    </select>
                  </div>
                  
                  {/* Comments */}
                  <div className="md:col-span-2">
                    <label htmlFor="comments" className="block text-white text-sm sm:text-base mb-1 sm:mb-2 font-medium">
                      Additional Information
                    </label>
                    <textarea
                      id="comments"
                      name="comments"
                      value={formState.comments}
                      onChange={handleChange}
                      rows={4}
                      className="w-full bg-black/50 border border-gray-700 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base text-white focus:outline-none focus:ring-2 focus:ring-[#f87f01] focus:border-transparent transition"
                      placeholder="Let us know if you have any specific questions or requirements..."
                    ></textarea>
                  </div>
                </div>
                
                {/* Submit Button */}
                <div className="text-center">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-block w-full sm:w-auto"
                  >
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="cursor-pointer w-full sm:w-auto"
                    >
                      <div className="rhombus-btn-primary relative overflow-hidden group w-full sm:w-auto">
                        <span className="relative z-10 text-sm sm:text-base flex items-center justify-center">
                          {isSubmitting ? (
                            <span className="flex items-center justify-center">
                              <svg className="animate-spin -ml-1 mr-2 sm:mr-3 h-4 sm:h-5 w-4 sm:w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              Processing...
                            </span>
                          ) : (
                            'Submit Order Request'
                          )}
                        </span>
                        <motion.div 
                          initial={{ x: "-100%" }}
                          whileHover={{ x: "0%" }}
                          transition={{ duration: 0.4 }}
                          className="absolute inset-0 bg-white/20"
                        ></motion.div>
                      </div>
                    </button>
                  </motion.div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SaddleOrder; 