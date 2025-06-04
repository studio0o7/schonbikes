import { motion } from 'framer-motion';
import { useState } from 'react';
import { sendEmail } from '@/utils/emailService';

export default function OrderRequestSection() {
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    size: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const result = await sendEmail({
        subject: `Frameset Order Request: ${formState.firstName} ${formState.lastName} - ${formState.size}`,
        message: `
Name: ${formState.firstName} ${formState.lastName}
Email: ${formState.email}
Phone: ${formState.phone}

Order Details:
Preferred Size: ${getSizeText(formState.size)}

Additional Information:
${formState.message || 'None provided'}
        `,
        htmlMessage: `
<div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
  <h2 style="color: #f87f01;">New Frameset Order Request</h2>
  
  <h3 style="margin-top: 20px;">Customer Information</h3>
  <p><strong>Name:</strong> ${formState.firstName} ${formState.lastName}</p>
  <p><strong>Email:</strong> ${formState.email}</p>
  <p><strong>Phone:</strong> ${formState.phone}</p>
  
  <h3 style="margin-top: 20px;">Order Details</h3>
  <p><strong>Preferred Size:</strong> ${getSizeText(formState.size)}</p>
  
  <h3 style="margin-top: 20px;">Additional Information</h3>
  <p>${formState.message || 'None provided'}</p>
</div>
        `
      });
      
      if (result.success) {
        setFormStatus({ 
          submitted: true, 
          error: false,
          message: 'Thank you for your request! Our team will contact you shortly to discuss your frameset requirements.'
        });
        // Reset form
        setFormState({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          size: '',
          message: ''
        });
      } else {
        throw new Error(result.error || 'Failed to submit request');
      }
    } catch (error) {
      console.error('Error submitting frameset order:', error);
      setFormStatus({ 
        submitted: true, 
        error: true,
        message: error instanceof Error ? error.message : 'Failed to submit request'
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // Helper function to get readable size text
  const getSizeText = (size: string): string => {
    switch (size) {
      case '490': return '490 (165-172cm)';
      case '520': return '520 (173-179cm)';
      case '550': return '550 (180-186cm)';
      case '580': return '580 (187-194cm)';
      case 'custom': return 'Custom Geometry';
      default: return size;
    }
  };
  
  const resetForm = () => {
    setFormStatus({
      submitted: false,
      error: false,
      message: ''
    });
  };

  return (
    <section id="order-form" className="py-16 sm:py-20 md:py-24 bg-black text-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 font-racing text-white">
            <span className="text-[#f87f01]">Order</span> Request
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-[#f87f01] mx-auto mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
            Ready to get your custom frameset? Fill out the form below and our team will contact you to discuss your specific requirements and fitting details.
          </p>
        </motion.div>
        
        <div className="max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-sm rounded-lg shadow-md p-5 sm:p-8 border-t border-[#f87f01]/30"
          >
            {formStatus.submitted ? (
              <div className="text-center py-6 sm:py-8">
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
                <p className="text-gray-300 mb-6 sm:mb-8 text-sm sm:text-base">{formStatus.message}</p>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={resetForm}
                  className="inline-block bg-[#f87f01] text-white font-semibold py-2.5 sm:py-3.5 px-4 sm:px-6 
                          transform skew-x-[-12deg] hover:bg-[#f87f01]/90 transition-all duration-300 group relative overflow-hidden
                          border border-[#f87f01] text-sm sm:text-base"
                >
                  <span className="inline-block transform skew-x-[12deg] relative z-10">
                    {formStatus.error ? 'Try Again' : 'Submit Another Request'}
                  </span>
                  <div className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-400 ease-out"></div>
                </motion.button>
              </div>
            ) : (
              <form className="space-y-6 sm:space-y-8" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <FormField
                    label="First Name"
                    name="firstName"
                    type="text"
                    placeholder="Your first name"
                    value={formState.firstName}
                    onChange={handleChange}
                    required
                  />
                  
                  <FormField
                    label="Last Name"
                    name="lastName"
                    type="text"
                    placeholder="Your last name"
                    value={formState.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <FormField
                    label="Email Address"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formState.email}
                    onChange={handleChange}
                    required
                  />
                  
                  <FormField
                    label="Phone Number"
                    name="phone"
                    type="tel"
                    placeholder="Your phone number"
                    value={formState.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="size" className="block text-xs sm:text-sm font-medium text-gray-300 mb-1">Preferred Size</label>
                  <select
                    id="size"
                    name="size"
                    value={formState.size}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 border bg-white/10 border-gray-700 rounded-md focus:ring-[#f87f01] focus:border-[#f87f01] outline-none transition-colors duration-200 text-white placeholder-gray-500 text-sm"
                    required
                  >
                    <option value="" disabled>Select a size</option>
                    <option value="490">490 (165-172cm)</option>
                    <option value="520">520 (173-179cm)</option>
                    <option value="550">550 (180-186cm)</option>
                    <option value="580">580 (187-194cm)</option>
                    <option value="custom">Custom Geometry</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-gray-300 mb-1">Additional Information</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formState.message}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 border bg-white/10 border-gray-700 rounded-md focus:ring-[#f87f01] focus:border-[#f87f01] outline-none transition-colors duration-200 text-white placeholder-gray-500 text-sm"
                    placeholder="Please share any specific requirements, questions, or your current bike measurements..."
                  ></textarea>
                </div>
                
                <div className="pt-2 sm:pt-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-block bg-[#f87f01] text-white font-semibold py-2.5 sm:py-3.5 px-4 sm:px-6 
                            transform skew-x-[-12deg] hover:bg-[#f87f01]/90 transition-all duration-300 group relative overflow-hidden
                            border border-[#f87f01] w-full md:w-auto text-sm sm:text-base disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    <span className="inline-block transform skew-x-[12deg] relative z-10">
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing...
                        </span>
                      ) : 'Submit Request'}
                    </span>
                    <div className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-400 ease-out"></div>
                  </motion.button>
                </div>
              </form>
            )}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="bg-white/5 backdrop-blur-sm rounded-lg p-4 sm:p-6 border-l-2 border-[#f87f01] mt-6 sm:mt-8 flex flex-col sm:flex-row items-center gap-4 sm:gap-6"
          >
            <div className="flex-1">
              <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2 text-white text-center sm:text-left">Premium Support</h3>
              <p className="text-gray-400 text-sm sm:text-base text-center sm:text-left">Our team will work with you throughout the entire process to ensure your frameset meets your exact specifications.</p>
            </div>
            
            <div className="flex flex-col items-center sm:items-end">
              <div className="bg-[#f87f01]/20 px-3 sm:px-4 py-1.5 sm:py-2 rounded-md mb-1 sm:mb-2">
                <span className="text-[#f87f01] font-semibold text-sm sm:text-base">10-14 Weeks</span>
              </div>
              <span className="text-gray-400 text-xs sm:text-sm">Estimated Production Time</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

interface FormFieldProps {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

function FormField({ label, name, type, placeholder, value, onChange, required = false }: FormFieldProps) {
  return (
    <div>
      <label htmlFor={name} className="block text-xs sm:text-sm font-medium text-gray-300 mb-1">{label}</label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full px-3 sm:px-4 py-2 border bg-white/10 border-gray-700 rounded-md focus:ring-[#f87f01] focus:border-[#f87f01] outline-none transition-colors duration-200 text-white placeholder-gray-500 text-sm"
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
} 