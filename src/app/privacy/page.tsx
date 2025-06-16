"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function PrivacyPolicyPage() {
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
                Privacy • Security • Transparency
              </p>
              <h1 className="text-3xl md:text-5xl font-bold mb-4 font-racing text-white relative inline-block">
                SchönMO <span className="text-[#f87f01]">Privacy Policy</span>
                <motion.div 
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="absolute -bottom-2 left-0 h-1 bg-[#f87f01]"
                ></motion.div>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mt-6">
                Your privacy matters to us. Learn how we collect, use, and protect your information.
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
                SchönMO (operated by Schon Mobility) is committed to protecting and respecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
            </motion.div>

            {/* Information We Collect */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 relative inline-block">
                Information We <span className="text-[#f87f01]">Collect</span>
                <div className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-[#f87f01]"></div>
              </h2>
              
              <div className="grid gap-6">
                {/* Personal Information */}
                <div className="bg-white rounded-lg shadow-md p-6 transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="flex items-start space-x-4">
                    <div className="h-12 w-12 flex items-center justify-center bg-[#f87f01]/10 rounded-full flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#f87f01]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#f87f01] mb-3">Personal Information</h3>
                      <ul className="text-gray-700 leading-relaxed space-y-2">
                        <li>• Name, email address, phone number, and mailing address</li>
                        <li>• Payment information (processed securely through third-party providers)</li>
                        <li>• Physical measurements for custom bike fitting</li>
                        <li>• Riding preferences and cycling experience</li>
                        <li>• Communication preferences</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Technical Information */}
                <div className="bg-white rounded-lg shadow-md p-6 transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="flex items-start space-x-4">
                    <div className="h-12 w-12 flex items-center justify-center bg-[#f87f01]/10 rounded-full flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#f87f01]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#f87f01] mb-3">Technical Information</h3>
                      <ul className="text-gray-700 leading-relaxed space-y-2">
                        <li>• IP address, browser type, and operating system</li>
                        <li>• Website usage data and analytics</li>
                        <li>• Cookies and similar tracking technologies</li>
                        <li>• Device information and mobile identifiers</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* How We Use Information */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 relative inline-block">
                How We Use Your <span className="text-[#f87f01]">Information</span>
                <div className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-[#f87f01]"></div>
              </h2>
              
              <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#f87f01] rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700">Process and fulfill your custom bike orders</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#f87f01] rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700">Provide personalized bike fitting services</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#f87f01] rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700">Communicate with you about your orders and services</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#f87f01] rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700">Process payments and manage billing</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#f87f01] rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700">Improve our website and services</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#f87f01] rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700">Send marketing communications (with your consent)</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#f87f01] rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700">Comply with legal obligations</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#f87f01] rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700">Protect against fraud and security threats</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Information Sharing */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 relative inline-block">
                Information <span className="text-[#f87f01]">Sharing</span>
                <div className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-[#f87f01]"></div>
              </h2>
              
              <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 space-y-6">
                <p className="text-gray-700 leading-relaxed">
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
                </p>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-[#f87f01] pl-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Service Providers</h4>
                    <p className="text-gray-700 text-sm">Payment processors, shipping companies, and other trusted partners who assist in delivering our services.</p>
                  </div>
                  
                  <div className="border-l-4 border-[#f87f01] pl-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Legal Requirements</h4>
                    <p className="text-gray-700 text-sm">When required by law, court order, or legal process, or to protect our rights and safety.</p>
                  </div>
                  
                  <div className="border-l-4 border-[#f87f01] pl-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Business Transfers</h4>
                    <p className="text-gray-700 text-sm">In connection with a merger, acquisition, or sale of business assets.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Data Security */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 relative inline-block">
                Data <span className="text-[#f87f01]">Security</span>
                <div className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-[#f87f01]"></div>
              </h2>
              
              <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="h-16 w-16 flex items-center justify-center bg-[#f87f01]/10 rounded-full flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#f87f01]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-[#f87f01] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        SSL encryption for data transmission
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-[#f87f01] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Secure servers and regular security updates
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-[#f87f01] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Access controls and employee training
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-[#f87f01] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Regular security audits and assessments
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Your Rights */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 relative inline-block">
                Your <span className="text-[#f87f01]">Rights</span>
                <div className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-[#f87f01]"></div>
              </h2>
              
              <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold text-[#f87f01] mb-2">Access</h4>
                      <p className="text-gray-700 text-sm">Request a copy of the personal information we hold about you</p>
                    </div>
                    
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold text-[#f87f01] mb-2">Correction</h4>
                      <p className="text-gray-700 text-sm">Request correction of inaccurate or incomplete information</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold text-[#f87f01] mb-2">Deletion</h4>
                      <p className="text-gray-700 text-sm">Request deletion of your personal information (subject to legal requirements)</p>
                    </div>
                    
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold text-[#f87f01] mb-2">Opt-out</h4>
                      <p className="text-gray-700 text-sm">Unsubscribe from marketing communications at any time</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-[#f87f01]/10 rounded-lg border-l-4 border-[#f87f01]">
                  <p className="text-gray-700">
                    To exercise these rights, please contact us at <strong>privacy@schonmobility.com</strong> or through our contact form.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Cookies */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 relative inline-block">
                Cookies and <span className="text-[#f87f01]">Tracking</span>
                <div className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-[#f87f01]"></div>
              </h2>
              
              <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  We use cookies and similar technologies to enhance your browsing experience, analyze website traffic, and provide personalized content. You can control cookie settings through your browser preferences.
                </p>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 border border-gray-200 rounded-lg">
                    <h4 className="font-semibold text-[#f87f01] mb-2">Essential</h4>
                    <p className="text-gray-700 text-sm">Required for website functionality</p>
                  </div>
                  <div className="text-center p-4 border border-gray-200 rounded-lg">
                    <h4 className="font-semibold text-[#f87f01] mb-2">Analytics</h4>
                    <p className="text-gray-700 text-sm">Help us improve our website</p>
                  </div>
                  <div className="text-center p-4 border border-gray-200 rounded-lg">
                    <h4 className="font-semibold text-[#f87f01] mb-2">Marketing</h4>
                    <p className="text-gray-700 text-sm">Personalized advertising (optional)</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 relative inline-block">
                Contact <span className="text-[#f87f01]">Us</span>
                <div className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-[#f87f01]"></div>
              </h2>
              
              <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
                <p className="text-gray-700 leading-relaxed mb-6">
                  If you have any questions about this Privacy Policy or how we handle your personal information, please contact us:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-[#f87f01] mb-2">Email</h4>
                    <p className="text-gray-700">privacy@schonmobility.com</p>
                    <p className="text-gray-700">sales@schonmobility.com</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-[#f87f01] mb-2">Mailing Address</h4>
                    <p className="text-gray-700">
                      Beedstraße 54<br />
                      40468 Düsseldorf, Germany
                    </p>
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