import { motion } from 'framer-motion';
import { useState } from 'react';

export default function OrderRequestSection() {
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    size: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally submit the form to your API
    console.log('Form submitted:', formState);
    alert('Thank you for your request! Our team will contact you shortly.');
  };

  return (
    <section id="order-form" className="py-24 bg-black text-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 font-racing text-white">
            <span className="text-[#f87f01]">Order</span> Request
          </h2>
          <div className="w-24 h-1 bg-[#f87f01] mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Ready to get your custom frameset? Fill out the form below and our team will contact you to discuss your specific requirements and fitting details.
          </p>
        </motion.div>
        
        <div className="max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-sm rounded-lg shadow-md p-8 border-t border-[#f87f01]/30"
          >
            <form className="space-y-8" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                <label htmlFor="size" className="block text-sm font-medium text-gray-300 mb-1">Preferred Size</label>
                <select
                  id="size"
                  name="size"
                  value={formState.size}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border bg-white/10 border-gray-700 rounded-md focus:ring-[#f87f01] focus:border-[#f87f01] outline-none transition-colors duration-200 text-white placeholder-gray-500"
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
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Additional Information</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formState.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border bg-white/10 border-gray-700 rounded-md focus:ring-[#f87f01] focus:border-[#f87f01] outline-none transition-colors duration-200 text-white placeholder-gray-500"
                  placeholder="Please share any specific requirements, questions, or your current bike measurements..."
                ></textarea>
              </div>
              
              <div className="pt-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="inline-block bg-[#f87f01] text-white font-semibold py-3.5 px-6 
                           transform skew-x-[-12deg] hover:bg-[#f87f01]/90 transition-all duration-300 group relative overflow-hidden
                           border border-[#f87f01] w-full md:w-auto"
                >
                  <span className="inline-block transform skew-x-[12deg] relative z-10">Submit Request</span>
                  <div className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-400 ease-out"></div>
                </motion.button>
              </div>
            </form>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border-l-2 border-[#f87f01] mt-8 flex flex-col md:flex-row items-center gap-6"
          >
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-2 text-white">Premium Support</h3>
              <p className="text-gray-400">Our team will work with you throughout the entire process to ensure your frameset meets your exact specifications.</p>
            </div>
            
            <div className="flex flex-col items-center md:items-end">
              <div className="bg-[#f87f01]/20 px-4 py-2 rounded-md mb-2">
                <span className="text-[#f87f01] font-semibold">10-14 Weeks</span>
              </div>
              <span className="text-gray-400 text-sm">Estimated Production Time</span>
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
      <label htmlFor={name} className="block text-sm font-medium text-gray-300 mb-1">{label}</label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-2 border bg-white/10 border-gray-700 rounded-md focus:ring-[#f87f01] focus:border-[#f87f01] outline-none transition-colors duration-200 text-white placeholder-gray-500"
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
} 