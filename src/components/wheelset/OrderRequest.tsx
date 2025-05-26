import { motion } from 'framer-motion';
import { useState } from 'react';

const OrderRequest = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    wheelsetType: 'rad35',
    hubType: 'shimano',
    comments: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
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
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormState({
          name: '',
          email: '',
          phone: '',
          wheelsetType: 'rad35',
          hubType: 'shimano',
          comments: ''
        });
      }, 5000);
    }, 2000);
  };
  
  return (
    <section id="order" className="py-24 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[url('/images/grid-pattern.png')] opacity-5 z-0"></div>
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent"></div>
      <div className="absolute -right-48 bottom-1/3 w-96 h-96 rounded-full bg-[#f87f01]/10 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white font-racing">
              Request <span className="text-[#f87f01]">Order</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Fill out the form below to request an order for your custom wheelset. Our team will contact you within 24 hours to discuss your options and provide a quote.
            </p>
          </div>
          
          {/* Order Form */}
          <div className="bg-gray-900/30 backdrop-blur-sm rounded-xl p-8 border border-gray-800">
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-12"
              >
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-8 w-8 text-green-500" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Request Submitted!</h3>
                <p className="text-gray-400 mb-6">
                  Thank you for your interest in SchönMO wheelsets. Our team will contact you shortly to discuss your requirements.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-white mb-2 font-medium">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#f87f01] focus:border-transparent transition"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-white mb-2 font-medium">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#f87f01] focus:border-transparent transition"
                      placeholder="Enter your email address"
                    />
                  </div>
                  
                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-white mb-2 font-medium">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#f87f01] focus:border-transparent transition"
                      placeholder="Enter your phone number (optional)"
                    />
                  </div>
                  
                  {/* Wheelset Type */}
                  <div>
                    <label htmlFor="wheelsetType" className="block text-white mb-2 font-medium">
                      Wheelset Type
                    </label>
                    <select
                      id="wheelsetType"
                      name="wheelsetType"
                      value={formState.wheelsetType}
                      onChange={handleChange}
                      required
                      className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#f87f01] focus:border-transparent transition"
                    >
                      <option value="rad35">RAD 35 (Gravel)</option>
                      <option value="rad45">RAD 45 (Road)</option>
                      <option value="both">Both RAD 35 & RAD 45</option>
                    </select>
                  </div>
                  
                  {/* Hub Type */}
                  <div>
                    <label htmlFor="hubType" className="block text-white mb-2 font-medium">
                      Freehub Type
                    </label>
                    <select
                      id="hubType"
                      name="hubType"
                      value={formState.hubType}
                      onChange={handleChange}
                      required
                      className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#f87f01] focus:border-transparent transition"
                    >
                      <option value="shimano">Shimano/SRAM 11-speed</option>
                      <option value="xdr">SRAM XDR</option>
                      <option value="campagnolo">Campagnolo</option>
                    </select>
                  </div>
                  
                  {/* Comments */}
                  <div className="md:col-span-2">
                    <label htmlFor="comments" className="block text-white mb-2 font-medium">
                      Additional Requirements
                    </label>
                    <textarea
                      id="comments"
                      name="comments"
                      value={formState.comments}
                      onChange={handleChange}
                      rows={4}
                      className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#f87f01] focus:border-transparent transition"
                      placeholder="Let us know if you have any specific requirements or questions..."
                    ></textarea>
                  </div>
                </div>
                
                {/* Submit Button */}
                <div className="text-center">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-block"
                  >
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="cursor-pointer"
                    >
                      <div className="rhombus-btn-primary relative overflow-hidden group">
                        <span className="relative z-10">
                          {isSubmitting ? (
                            <span className="flex items-center justify-center">
                              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              Processing...
                            </span>
                          ) : (
                            'Submit Request'
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

export default OrderRequest; 