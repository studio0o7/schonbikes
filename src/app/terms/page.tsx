"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function TermsOfServicePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="py-12 md:py-24 bg-black text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-[#f87f01] opacity-10 transform -rotate-45 translate-x-20 -translate-y-20"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#f87f01] opacity-10 transform -rotate-45 -translate-x-20 translate-y-20"></div>
        <div className="absolute top-1/2 right-1/3 w-20 h-20 bg-[#f87f01] opacity-5 transform rotate-45"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-xs sm:text-sm font-medium tracking-widest mb-4 uppercase text-[#f87f01]">
                Terms • Conditions • Agreement
              </p>
              <h1 className="text-3xl md:text-5xl font-bold mb-4 font-racing text-white relative inline-block">
                SchönMO <span className="text-[#f87f01]">Terms of Service</span>
                <motion.div 
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="absolute -bottom-2 left-0 h-1 bg-[#f87f01]"
                ></motion.div>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mt-6">
                The terms and conditions governing your use of our website and services
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Introduction */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-lg shadow-lg p-6 md:p-8 mb-8 border-l-4 border-[#f87f01]"
            >
              <p className="text-gray-700 leading-relaxed">
                <strong>Last Updated:</strong> December 2024
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                These Terms of Service (&quot;Terms&quot;) govern your use of the SchönMO website and services operated by Schon Mobility. By accessing or using our service, you agree to be bound by these Terms.
              </p>
            </motion.div>

            {/* Acceptance of Terms */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 relative inline-block">
                Acceptance of <span className="text-[#f87f01]">Terms</span>
                <div className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-[#f87f01]"></div>
              </h2>
              
              <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
                <div className="flex items-start space-x-4">
                  <div className="h-12 w-12 flex items-center justify-center bg-[#f87f01]/10 rounded-full flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#f87f01]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      We reserve the right to change these terms at any time. Your continued use of the website following any changes shall constitute your acceptance of such changes.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Products and Services */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 relative inline-block">
                Products and <span className="text-[#f87f01]">Services</span>
                <div className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-[#f87f01]"></div>
              </h2>
              
              <div className="grid gap-6">
                <div className="bg-white rounded-lg shadow-md p-6 transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="flex items-start space-x-4">
                    <div className="h-12 w-12 flex items-center justify-center bg-[#f87f01]/10 rounded-full flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#f87f01]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#f87f01] mb-3">Custom Bicycle Manufacturing</h3>
                      <p className="text-gray-700 leading-relaxed">
                        SchönMO specializes in custom performance and endurance bicycles. All specifications, delivery times, and prices are subject to change without notice. Custom builds typically require 8-12 weeks for completion.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="flex items-start space-x-4">
                    <div className="h-12 w-12 flex items-center justify-center bg-[#f87f01]/10 rounded-full flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#f87f01]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#f87f01] mb-3">Fitting Services</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Our custom fitting process involves detailed measurements and consultation. Measurements provided by customers are used at their own risk, and we recommend professional fitting consultations for optimal results.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Orders and Payment */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 relative inline-block">
                Orders and <span className="text-[#f87f01]">Payment</span>
                <div className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-[#f87f01]"></div>
              </h2>
              
              <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 space-y-6">
                <div className="space-y-4">
                  <div className="border-l-4 border-[#f87f01] pl-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Order Confirmation</h4>
                    <p className="text-gray-700 text-sm">All orders are subject to acceptance and availability. We reserve the right to refuse or cancel any order at our discretion.</p>
                  </div>
                  
                  <div className="border-l-4 border-[#f87f01] pl-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Pricing</h4>
                    <p className="text-gray-700 text-sm">All prices are in the currency specified on our website and are subject to change without notice. Custom builds may have additional costs based on specifications.</p>
                  </div>
                  
                  <div className="border-l-4 border-[#f87f01] pl-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Payment Terms</h4>
                    <p className="text-gray-700 text-sm">Payment is required in full or according to the payment schedule provided at the time of order. Late payments may result in order delays or cancellation.</p>
                  </div>
                  
                  <div className="border-l-4 border-[#f87f01] pl-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Cancellations</h4>
                    <p className="text-gray-700 text-sm">Custom orders may be cancelled within 48 hours of confirmation. After production begins, cancellations may incur fees or be subject to restocking charges.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Delivery and Risk */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 relative inline-block">
                Delivery and <span className="text-[#f87f01]">Risk Transfer</span>
                <div className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-[#f87f01]"></div>
              </h2>
              
              <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold text-[#f87f01] mb-2">Delivery Times</h4>
                      <p className="text-gray-700 text-sm">Estimated delivery times are provided in good faith but are not guaranteed. Delays may occur due to manufacturing, shipping, or force majeure events.</p>
                    </div>
                    
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold text-[#f87f01] mb-2">Shipping Costs</h4>
                      <p className="text-gray-700 text-sm">Shipping costs are calculated based on destination and will be clearly displayed before order confirmation.</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold text-[#f87f01] mb-2">Risk Transfer</h4>
                      <p className="text-gray-700 text-sm">Risk of loss or damage transfers to the buyer upon delivery or pickup, whichever occurs first.</p>
                    </div>
                    
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold text-[#f87f01] mb-2">Inspection</h4>
                      <p className="text-gray-700 text-sm">Customers must inspect products upon delivery and report any issues within 48 hours.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Intellectual Property */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 relative inline-block">
                Intellectual <span className="text-[#f87f01]">Property</span>
                <div className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-[#f87f01]"></div>
              </h2>
              
              <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  All content on this website, including but not limited to text, graphics, logos, images, audio clips, digital downloads, data compilations, and software, is the property of SchönMO or its content suppliers and is protected by copyright laws.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#f87f01] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">You may not reproduce, duplicate, copy, sell, resell, or exploit any portion of the service without our express written permission.</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#f87f01] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">The SchönMO name, logo, and all related marks are trademarks owned by Schon Mobility.</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#f87f01] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">Custom designs created for customers remain the intellectual property of SchönMO unless otherwise agreed in writing.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Limitation of Liability */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 relative inline-block">
                Limitation of <span className="text-[#f87f01]">Liability</span>
                <div className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-[#f87f01]"></div>
              </h2>
              
              <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 space-y-4">
                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
                  <h3 className="text-lg font-bold text-red-700 mb-2 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                    Important Notice
                  </h3>
                  <p className="text-red-700 text-sm leading-relaxed">
                    Cycling involves inherent risks. Users assume all risks associated with cycling and use of our products.
                  </p>
                </div>
                
                <div className="space-y-3 text-gray-700">
                  <p className="leading-relaxed">
                    To the maximum extent permitted by law, SchönMO shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages, including but not limited to:
                  </p>
                  
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Personal injury or property damage arising from the use of our products
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Loss of profits, revenue, or business opportunities
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Interruption of business or service
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Errors or omissions in content or information
                    </li>
                  </ul>
                  
                  <p className="leading-relaxed font-medium">
                    Our total liability for any claim shall not exceed the amount paid for the specific product or service giving rise to the claim.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Governing Law */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 relative inline-block">
                Governing Law and <span className="text-[#f87f01]">Disputes</span>
                <div className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-[#f87f01]"></div>
              </h2>
              
              <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-[#f87f01] mb-3">Jurisdiction</h4>
                    <p className="text-gray-700 text-sm leading-relaxed mb-4">
                      These Terms shall be governed by and construed in accordance with the laws of Germany for European customers and the laws of Michigan, USA for North American customers.
                    </p>
                    
                    <h4 className="font-semibold text-[#f87f01] mb-3">Dispute Resolution</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Any disputes arising from these Terms or your use of our services shall be resolved through binding arbitration in accordance with local arbitration rules.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-[#f87f01] mb-3">Contact for Disputes</h4>
                    <div className="space-y-2 text-gray-700 text-sm">
                      <p><strong>Email:</strong> legal@schonmobility.com</p>
                      <p><strong>Germany:</strong><br />
                      Beedstraße 54<br />
                      40468 Düsseldorf, Germany</p>
                      <p><strong>USA:</strong><br />
                      43313 Woodward Ave. #1021<br />
                      Bloomfield, Michigan 48302, US</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 relative inline-block">
                Questions About <span className="text-[#f87f01]">These Terms</span>
                <div className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-[#f87f01]"></div>
              </h2>
              
              <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
                <p className="text-gray-700 leading-relaxed mb-6">
                  If you have any questions about these Terms of Service, please contact us through any of the following methods:
                </p>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-4 border border-gray-200 rounded-lg">
                    <div className="h-12 w-12 flex items-center justify-center bg-[#f87f01]/10 rounded-full mx-auto mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#f87f01]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-[#f87f01] mb-2">Email</h4>
                    <p className="text-gray-700 text-sm">sales@schonmobility.com</p>
                  </div>
                  
                  <div className="text-center p-4 border border-gray-200 rounded-lg">
                    <div className="h-12 w-12 flex items-center justify-center bg-[#f87f01]/10 rounded-full mx-auto mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#f87f01]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-[#f87f01] mb-2">Visit Us</h4>
                    <p className="text-gray-700 text-sm">Düsseldorf, Germany<br />Detroit, Michigan</p>
                  </div>
                  
                  <div className="text-center p-4 border border-gray-200 rounded-lg">
                    <div className="h-12 w-12 flex items-center justify-center bg-[#f87f01]/10 rounded-full mx-auto mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#f87f01]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-[#f87f01] mb-2">Contact Form</h4>
                    <p className="text-gray-700 text-sm">Use our website contact form for detailed inquiries</p>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </main>
  );
} 