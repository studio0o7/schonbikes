"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ContactPage() {
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
      const response = await fetch('/api/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
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
        }),
      });
      
      const result = await response.json();
      
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
    <main className="bg-white">
      {/* Hero Section - Contact form and content */}
      <section className="relative min-h-screen bg-black text-white overflow-hidden">
        {/* Decorative elements matching other pages */}
        <div className="absolute top-0 right-0 w-1/3 h-32 bg-gradient-to-l from-[#f87f01]/20 to-transparent z-10"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-32 bg-gradient-to-r from-[#f87f01]/20 to-transparent z-10"></div>
        <div className="absolute top-1/4 right-0 w-64 h-64 rounded-full bg-[#f87f01]/5 blur-3xl z-10"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.png')] opacity-5 z-10"></div>
        
        <div className="container-custom relative z-20 flex items-center min-h-screen py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center w-full">
            {/* Left side - Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center mb-4">
                <div className="h-px w-8 bg-[#f87f01]"></div>
                <span className="mx-3 text-sm font-semibold tracking-widest text-[#f87f01] uppercase">Global Excellence</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-4 font-racing">
                <span className="text-white">Three</span>
                <span className="text-[#f87f01]"> Continents</span>
              </h1>
              
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Engineering excellence across the automotive capitals of the world, 
                bringing precision carbon technology to every corner of the globe.
              </p>
              
              <div className="flex flex-wrap gap-3 mt-6">
                <span className="bg-[#f87f01]/20 text-[#f87f01] text-sm font-medium px-3 py-2 rounded-full">Detroit • Michigan</span>
                <span className="bg-[#f87f01]/20 text-[#f87f01] text-sm font-medium px-3 py-2 rounded-full">Düsseldorf • Germany</span>
                <span className="bg-[#f87f01]/20 text-[#f87f01] text-sm font-medium px-3 py-2 rounded-full">Coimbatore • India</span>
              </div>
            </motion.div>

            {/* Right side - Contact Form from Contact.tsx */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -top-2 -left-2 w-8 h-8 bg-[#f87f01] opacity-20 transform rotate-45 -z-10"></div>
              <div className="bg-white/10 backdrop-blur-sm p-4 md:p-6 rounded-lg shadow-lg">
                <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-center text-white">Send Us a Message</h3>
                
                {formStatus.submitted ? (
                  <div className="text-center py-6 md:py-8">
                    {formStatus.error ? (
                      <>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 md:h-16 md:w-16 text-red-500 mx-auto mb-3 md:mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <h4 className="text-lg md:text-xl font-bold mb-2 text-white">Error</h4>
                      </>
                    ) : (
                      <>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 md:h-16 md:w-16 text-[#f87f01] mx-auto mb-3 md:mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <h4 className="text-lg md:text-xl font-bold mb-2 text-white">Thank You!</h4>
                      </>
                    )}
                    <p className="text-sm md:text-base text-white">{formStatus.message}</p>
                    <button 
                      onClick={() => setFormStatus({ submitted: false, error: false, message: '' })}
                      className="mt-4 md:mt-6 px-4 md:px-6 py-2 bg-[#f87f01] text-white rounded-md hover:bg-[#f87f01]/80 transition-colors text-sm md:text-base"
                    >
                      {formStatus.error ? 'Try Again' : 'Send Another Message'}
                    </button>
                  </div>
                ) : (
                                     <form onSubmit={handleSubmit} className="space-y-2 md:space-y-3">
                    <div>
                      <label htmlFor="name" className="block mb-1 text-xs font-medium text-white">Your Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full p-2 bg-white/5 border border-gray-700 rounded-md focus:ring-[#f87f01] focus:border-[#f87f01] text-white text-sm"
                        placeholder="John Doe"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block mb-1 text-xs font-medium text-white">Your Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full p-2 bg-white/5 border border-gray-700 rounded-md focus:ring-[#f87f01] focus:border-[#f87f01] text-white text-sm"
                        placeholder="john@example.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="interest" className="block mb-1 text-xs font-medium text-white">I&apos;m Interested In</label>
                      <select
                        id="interest"
                        name="interest"
                        value={formData.interest}
                        onChange={handleChange}
                        className="w-full p-2 bg-white/5 border border-gray-700 rounded-md focus:ring-[#f87f01] focus:border-[#f87f01] text-white text-sm"
                      >
                        <option value="performance">Performance Bikes</option>
                        <option value="endurance">Endurance Bikes</option>
                        <option value="custom">Custom Fitting</option>
                        <option value="components">Components</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block mb-1 text-xs font-medium text-white">Your Message</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={2}
                        className="w-full p-2 bg-white/5 border border-gray-700 rounded-md focus:ring-[#f87f01] focus:border-[#f87f01] text-white text-sm"
                        placeholder="How can we help you?"
                      ></textarea>
                    </div>
                    
                    <button 
                      type="submit"
                      className="w-full py-2 px-4 bg-[#f87f01] text-white font-medium rounded-md hover:bg-[#f87f01]/80 transform hover:scale-105 transition-all duration-300 text-sm"
                    >
                      Send Message
                    </button>
                  </form>
                )}
              </div>
              
              {/* Email info underneath form */}
              <div className="mt-4 text-center">
                <p className="text-sm text-gray-300 mb-1">Or email us directly:</p>
                <p className="text-[#f87f01] font-medium">sales@schonmobility.com</p>
              </div>
              
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-[#f87f01] opacity-20 transform rotate-45 -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>



      {/* American Office - Contact focused */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mb-8 bg-gradient-to-b from-gray-50 to-white rounded-xl overflow-hidden shadow-2xl border border-gray-100"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Left side - Content */}
                <div className="p-6 lg:p-8 flex flex-col justify-center order-2 lg:order-1">
                  <div className="inline-flex items-center mb-4">
                    <div className="h-px w-8 bg-[#f87f01]"></div>
                    <span className="mx-3 text-sm font-semibold tracking-widest text-[#f87f01] uppercase">American Office</span>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-racing">
                    Detroit <span className="text-[#f87f01]">Michigan</span>
                  </h2>
                  
                  <p className="text-base text-gray-600 mb-6 leading-relaxed">
                    Our North American headquarters serves customers across the US and Canada. 
                    Contact our Detroit team for sales inquiries, technical support, and dealer partnerships.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg border-l-4 border-[#f87f01] shadow-sm">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#f87f01] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        Address
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        43313 Woodward Ave #1021<br />
                        Bloomfield Hills, MI 48302<br />
                        United States
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <h4 className="font-semibold text-gray-900 text-sm mb-1">Phone</h4>
                        <p className="text-[#f87f01] font-medium">+1 (248) 555-0123</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <h4 className="font-semibold text-gray-900 text-sm mb-1">Business Hours</h4>
                        <p className="text-gray-600 text-sm">Mon-Fri 9AM-6PM EST</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="bg-[#f87f01]/10 text-[#f87f01] text-xs font-medium px-2 py-1 rounded-full">Sales</span>
                    <span className="bg-[#f87f01]/10 text-[#f87f01] text-xs font-medium px-2 py-1 rounded-full">Support</span>
                    <span className="bg-[#f87f01]/10 text-[#f87f01] text-xs font-medium px-2 py-1 rounded-full">Partnerships</span>
                  </div>
                </div>
                
                {/* Right side - Image */}
                <div className="relative overflow-hidden h-96 lg:h-auto min-h-[400px] order-1 lg:order-2">
                  <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent z-10 lg:hidden"></div>
                  <Image 
                    src="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcTKlT8GWOzRU-XRTqnTlsYKJkEZXyPJKxrhgR2UYLtZJps-MSoGIFTMszKUx-hImAy52bEwu4T-iLUfTKJQIsoTKoXaziGdmNWMVBXzSQ"
                    alt="Detroit Michigan skyline"
                    fill
                    className="object-cover object-center"
                  />
                  <div className="absolute top-0 right-0 w-20 h-20 bg-[#f87f01] opacity-20 rounded-bl-full"></div>
                  <div className="absolute bottom-5 right-5 flex items-center justify-center w-16 h-16 border-2 border-[#f87f01] rounded-full animate-pulse">
                    <div className="w-10 h-10 bg-[#f87f01]/30 rounded-full"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* European Office - Black background like other sections */}
      <section className="py-12 bg-black text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-gradient-to-br from-[#f87f01]/20 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 -left-40 w-80 h-80 bg-gradient-to-br from-[#f87f01]/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('/images/grid-pattern.png')] opacity-5"></div>
        </div>
        
        <div className="container-custom relative z-20">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bg-gradient-to-b from-gray-900 to-black rounded-xl overflow-hidden shadow-2xl border border-gray-800"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Left side - Image */}
                <div className="relative overflow-hidden h-64 lg:h-auto min-h-[300px]">
                  <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-10 lg:hidden"></div>
                  <Image 
                    src="https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcSVzDJpP-0BCUBpNJRjkaZ_W00P2H_lW7K8U45h50e79-fELgnRsuwUulvvZYOpMtiUSYJJ1Cc7hEUZOjvLyypa8at7IJPPAWekWbbkHQ"
                    alt="Düsseldorf Germany Rhine Tower"
                    fill
                    className="object-cover object-center"
                  />
                  <div className="absolute top-0 left-0 w-20 h-20 bg-[#f87f01] opacity-20 rounded-br-full"></div>
                  <div className="absolute bottom-5 left-5 flex items-center justify-center w-16 h-16 border-2 border-[#f87f01] rounded-full animate-pulse">
                    <div className="w-10 h-10 bg-[#f87f01]/30 rounded-full"></div>
                  </div>
                </div>
                
                {/* Right side - Content */}
                <div className="p-6 lg:p-8 flex flex-col justify-center">
                  <div className="inline-flex items-center mb-4">
                    <div className="h-px w-8 bg-[#f87f01]"></div>
                    <span className="mx-3 text-sm font-semibold tracking-widest text-[#f87f01] uppercase">European Office</span>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-racing">
                    Düsseldorf <span className="text-[#f87f01]">Germany</span>
                  </h2>
                  
                  <p className="text-base text-gray-300 mb-6 leading-relaxed">
                    Our European headquarters serves customers across the EU, UK, and surrounding regions. 
                    Contact our Düsseldorf team for European sales, technical support, and warranty services.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="bg-black/40 backdrop-blur-sm p-4 rounded-lg border-l-4 border-[#f87f01]">
                      <h3 className="text-lg font-semibold text-white mb-2 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#f87f01] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        Address
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        Beedstraße 54<br />
                        40468 Düsseldorf<br />
                        Germany
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-black/20 p-3 rounded-lg border border-gray-700">
                        <h4 className="font-semibold text-white text-sm mb-1">Phone</h4>
                        <p className="text-[#f87f01] font-medium">+49 211 555-0123</p>
                      </div>
                      <div className="bg-black/20 p-3 rounded-lg border border-gray-700">
                        <h4 className="font-semibold text-white text-sm mb-1">Business Hours</h4>
                        <p className="text-gray-300 text-sm">Mon-Fri 9AM-6PM CET</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="bg-[#f87f01]/20 text-[#f87f01] text-xs font-medium px-2 py-1 rounded-full">EU Sales</span>
                    <span className="bg-[#f87f01]/20 text-[#f87f01] text-xs font-medium px-2 py-1 rounded-full">Warranty</span>
                    <span className="bg-[#f87f01]/20 text-[#f87f01] text-xs font-medium px-2 py-1 rounded-full">Distribution</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Asian Office */}
      <section className="py-12 bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="bg-white rounded-xl overflow-hidden shadow-2xl border border-gray-100"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Left side - Content */}
                <div className="p-6 lg:p-8 flex flex-col justify-center order-2 lg:order-1">
                  <div className="inline-flex items-center mb-4">
                    <div className="h-px w-8 bg-[#f87f01]"></div>
                    <span className="mx-3 text-sm font-semibold tracking-widest text-[#f87f01] uppercase">Asian Office</span>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-racing">
                    Coimbatore <span className="text-[#f87f01]">South India</span>
                  </h2>
                  
                  <p className="text-base text-gray-600 mb-6 leading-relaxed">
                    Our Asian headquarters serves customers across India, Southeast Asia, and the Asia-Pacific region. 
                    Contact our Coimbatore team for regional sales, manufacturing inquiries, and technical support.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-[#f87f01]">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#f87f01] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        Address
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        Industrial Hub<br />
                        Coimbatore, Tamil Nadu<br />
                        South India
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-white p-3 rounded-lg border border-gray-200">
                        <h4 className="font-semibold text-gray-900 text-sm mb-1">Phone</h4>
                        <p className="text-[#f87f01] font-medium">+91 422 555-0123</p>
                      </div>
                      <div className="bg-white p-3 rounded-lg border border-gray-200">
                        <h4 className="font-semibold text-gray-900 text-sm mb-1">Business Hours</h4>
                        <p className="text-gray-600 text-sm">Mon-Fri 9AM-6PM IST</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="bg-[#f87f01]/10 text-[#f87f01] text-xs font-medium px-2 py-1 rounded-full">Asia Sales</span>
                    <span className="bg-[#f87f01]/10 text-[#f87f01] text-xs font-medium px-2 py-1 rounded-full">Manufacturing</span>
                    <span className="bg-[#f87f01]/10 text-[#f87f01] text-xs font-medium px-2 py-1 rounded-full">Support</span>
                  </div>
                </div>
                
                {/* Right side - Image */}
                <div className="relative overflow-hidden h-64 lg:h-auto min-h-[300px] order-1 lg:order-2">
                  <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent z-10 lg:hidden"></div>
                  <Image 
                    src="https://lh3.googleusercontent.com/gps-cs-s/AC9h4npW8RZVLcL52dIRCUB0OcUDoUD-FDRdo0GDQIFFe1FwnLu7jfeLn20-c2UnpV0GWRahWOWs4VIOIeZbDkpIpkM43nSErZIgcvYFRJvNcyBZX6cdbFULNx177W84bfnwwhyJwXM9qw=w1080-h624-n-k-no"
                    alt="Coimbatore South India hills and landscape"
                    fill
                    className="object-cover object-center"
                  />
                  <div className="absolute top-0 right-0 w-20 h-20 bg-[#f87f01] opacity-20 rounded-bl-full"></div>
                  <div className="absolute bottom-5 right-5 flex items-center justify-center w-16 h-16 border-2 border-[#f87f01] rounded-full animate-pulse">
                    <div className="w-10 h-10 bg-[#f87f01]/30 rounded-full"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Global Excellence Section - Black background with stats like other pages */}
      <section className="py-12 bg-black text-white relative overflow-hidden">
        {/* Abstract design elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -bottom-20 right-1/4 w-60 h-60 bg-gradient-to-br from-[#f87f01]/15 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('/images/grid-pattern.png')] opacity-5"></div>
          <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black to-transparent"></div>
        </div>
        
        <div className="container-custom relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-4xl mx-auto mb-10"
          >
            <div className="inline-flex items-center mb-6">
              <div className="h-px w-8 bg-[#f87f01]"></div>
              <span className="mx-3 text-sm font-semibold tracking-widest text-[#f87f01] uppercase">Global Network</span>
              <div className="h-px w-8 bg-[#f87f01]"></div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-racing">
              <span className="text-white">Engineering Excellence</span>
              <span className="text-[#f87f01]"> Worldwide</span>
            </h2>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              From the automotive capitals of Detroit and Düsseldorf to the industrial hub of Coimbatore, 
              our global presence ensures that SchönMO bikes deliver unmatched performance and quality, 
              backed by decades of engineering expertise and local cycling culture.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center bg-gradient-to-b from-gray-900 to-black p-6 rounded-xl border border-gray-800 hover:border-[#f87f01]/50 transition-all duration-300"
            >
              <div className="text-4xl font-bold text-[#f87f01] mb-3 font-racing">3</div>
              <div className="text-base text-gray-300 mb-1">Global Offices</div>
              <div className="text-sm text-gray-500">Strategic locations worldwide</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center bg-gradient-to-b from-gray-900 to-black p-6 rounded-xl border border-gray-800 hover:border-[#f87f01]/50 transition-all duration-300"
            >
              <div className="text-4xl font-bold text-[#f87f01] mb-3 font-racing">24/7</div>
              <div className="text-base text-gray-300 mb-1">Worldwide Support</div>
              <div className="text-sm text-gray-500">Around the clock assistance</div>
            </motion.div>
            
                         <motion.div
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6, delay: 0.3 }}
               className="text-center bg-gradient-to-b from-gray-900 to-black p-6 rounded-xl border border-gray-800 hover:border-[#f87f01]/50 transition-all duration-300"
             >
               <div className="text-2xl font-bold text-[#f87f01] mb-3 font-racing">International</div>
               <div className="text-base text-gray-300 mb-1">Global Reach</div>
               <div className="text-sm text-gray-500">Worldwide distribution network</div>
             </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
} 