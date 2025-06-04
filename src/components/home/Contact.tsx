"use client";

import { useState } from 'react';
import { sendEmail } from '@/utils/emailService';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    interest: 'performance'
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const result = await sendEmail({
        subject: `SchönMO Contact Form: ${formData.name} - ${formData.interest}`,
        message: `
Name: ${formData.name}
Email: ${formData.email}
Interest: ${formData.interest}
Message: ${formData.message}
        `,
        htmlMessage: `
<div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
  <h2 style="color: #f87f01;">New Contact Form Submission</h2>
  <p><strong>Name:</strong> ${formData.name}</p>
  <p><strong>Email:</strong> ${formData.email}</p>
  <p><strong>Interest:</strong> ${formData.interest}</p>
  <p><strong>Message:</strong> ${formData.message}</p>
</div>
        `
      });
      
      if (result.success) {
        setFormStatus({ 
          submitted: true, 
          error: false,
          message: 'Your message has been sent successfully. We\'ll get back to you soon.'
        });
        // Reset form
        setFormData({
          name: '',
          email: '',
          message: '',
          interest: 'performance'
        });
      } else {
        throw new Error(result.error || 'Failed to send message');
      }
    } catch (error) {
      console.error('Error sending form:', error);
      setFormStatus({ 
        submitted: true, 
        error: true,
        message: error instanceof Error ? error.message : 'Failed to send message'
      });
    }
  };
  
  return (
    <section id="contact-section" className="py-12 md:py-20 bg-black text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-32 bg-gradient-to-l from-[#f87f01]/20 to-transparent z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-32 bg-gradient-to-r from-[#f87f01]/20 to-transparent z-10"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('/images/grid-pattern.png')] opacity-5 z-10"></div>
      
      <div className="container mx-auto px-4 relative z-20">
        <div className="flex flex-col md:flex-row items-stretch gap-8 md:gap-16">
          <div className="md:w-1/2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 font-racing">Get In <span className="text-[#f87f01]">Touch</span></h2>
            <div className="w-16 sm:w-24 h-1 bg-[#f87f01] mb-6 md:mb-8"></div>
            <p className="mb-6 md:mb-8 text-base md:text-lg">
              Have questions about our bikes, components, or custom fitting process? Our team of cycling experts is here to help you find the perfect ride.
            </p>
            
            <div className="space-y-4 md:space-y-6">
              <div className="flex items-start">
                <div className="bg-[#f87f01]/20 p-2 md:p-3 rounded-lg mr-3 md:mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6 text-[#f87f01]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-semibold mb-1">Email Us</h3>
                  <p className="text-sm md:text-base text-gray-300">info@schonmo.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[#f87f01]/20 p-2 md:p-3 rounded-lg mr-3 md:mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6 text-[#f87f01]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-semibold mb-1">Call Us</h3>
                  <p className="text-sm md:text-base text-gray-300">+1 (888) 555-BIKE</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[#f87f01]/20 p-2 md:p-3 rounded-lg mr-3 md:mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6 text-[#f87f01]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-semibold mb-1">Visit Our Showroom</h3>
                  <p className="text-sm md:text-base text-gray-300">123 Cycling Avenue<br />San Francisco, CA 94103</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 relative mt-10 md:mt-0">
            <div className="absolute -top-4 -left-4 w-12 md:w-20 h-12 md:h-20 bg-[#f87f01] opacity-20 transform rotate-45 -z-10"></div>
            <div className="bg-white/10 backdrop-blur-sm p-5 md:p-8 rounded-lg shadow-lg">
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-center">Send Us a Message</h3>
              
              {formStatus.submitted ? (
                <div className="text-center py-6 md:py-8">
                  {formStatus.error ? (
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 md:h-16 md:w-16 text-red-500 mx-auto mb-3 md:mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <h4 className="text-lg md:text-xl font-bold mb-2">Error</h4>
                    </>
                  ) : (
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 md:h-16 md:w-16 text-[#f87f01] mx-auto mb-3 md:mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <h4 className="text-lg md:text-xl font-bold mb-2">Thank You!</h4>
                    </>
                  )}
                  <p className="text-sm md:text-base">{formStatus.message}</p>
                  <button 
                    onClick={() => setFormStatus({ submitted: false, error: false, message: '' })}
                    className="mt-4 md:mt-6 px-4 md:px-6 py-2 bg-[#f87f01] text-white rounded-md hover:bg-[#f87f01]/80 transition-colors text-sm md:text-base"
                  >
                    {formStatus.error ? 'Try Again' : 'Send Another Message'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
                  <div>
                    <label htmlFor="name" className="block mb-1 md:mb-2 text-xs md:text-sm font-medium">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full p-2 md:p-3 bg-white/5 border border-gray-700 rounded-md focus:ring-[#f87f01] focus:border-[#f87f01] text-white text-sm md:text-base"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block mb-1 md:mb-2 text-xs md:text-sm font-medium">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full p-2 md:p-3 bg-white/5 border border-gray-700 rounded-md focus:ring-[#f87f01] focus:border-[#f87f01] text-white text-sm md:text-base"
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="interest" className="block mb-1 md:mb-2 text-xs md:text-sm font-medium">I&apos;m Interested In</label>
                    <select
                      id="interest"
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      className="w-full p-2 md:p-3 bg-white/5 border border-gray-700 rounded-md focus:ring-[#f87f01] focus:border-[#f87f01] text-white text-sm md:text-base"
                    >
                      <option value="performance">Performance Bikes</option>
                      <option value="endurance">Endurance Bikes</option>
                      <option value="custom">Custom Fitting</option>
                      <option value="components">Components</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block mb-1 md:mb-2 text-xs md:text-sm font-medium">Your Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={3}
                      className="w-full p-2 md:p-3 bg-white/5 border border-gray-700 rounded-md focus:ring-[#f87f01] focus:border-[#f87f01] text-white text-sm md:text-base"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit"
                    className="w-full py-2 md:py-3 px-4 md:px-6 bg-[#f87f01] text-white font-medium rounded-md hover:bg-[#f87f01]/80 transform hover:scale-105 transition-all duration-300 text-sm md:text-base"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
            <div className="absolute -bottom-4 -right-4 w-12 md:w-20 h-12 md:h-20 bg-[#f87f01] opacity-20 transform rotate-45 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
} 