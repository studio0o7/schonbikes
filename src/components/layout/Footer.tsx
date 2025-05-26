"use client";

import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-16 relative overflow-hidden">
      {/* Geometric Elements */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-primary opacity-10 transform -rotate-45 -translate-x-20 -translate-y-20"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-primary opacity-10 transform -rotate-45 translate-x-20 translate-y-20"></div>
      <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-primary opacity-5 transform rotate-45"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-4 mb-8 md:mb-0">
            <h4 className="text-2xl font-bold mb-6 font-racing">
              <span className="text-primary">SCHON</span>MO
            </h4>
            <p className="mb-6 text-gray-300">
              Custom performance and endurance bikes engineered for speed and precision, 
              designed to fit your body perfectly.
            </p>
            <div className="flex space-x-5">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                className="h-10 w-10 bg-gray-800 rounded-sm flex items-center justify-center hover:bg-primary transition-colors duration-300">
                <FaFacebook className="text-lg" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                className="h-10 w-10 bg-gray-800 rounded-sm flex items-center justify-center hover:bg-primary transition-colors duration-300">
                <FaTwitter className="text-lg" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                className="h-10 w-10 bg-gray-800 rounded-sm flex items-center justify-center hover:bg-primary transition-colors duration-300">
                <FaInstagram className="text-lg" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"
                className="h-10 w-10 bg-gray-800 rounded-sm flex items-center justify-center hover:bg-primary transition-colors duration-300">
                <FaYoutube className="text-lg" />
              </a>
            </div>
          </div>
          
          <div className="md:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div>
                <h5 className="text-lg font-bold mb-4 text-white relative inline-block">
                  Products
                  <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-primary"></span>
                </h5>
                <ul className="space-y-3">
                  <li>
                    <Link href="/bikes/performance" className="text-gray-300 hover:text-primary transition-colors flex items-center">
                      <span className="h-1 w-1 bg-primary mr-2"></span>
                      Performance Bikes
                    </Link>
                  </li>
                  <li>
                    <Link href="/bikes/endurance" className="text-gray-300 hover:text-primary transition-colors flex items-center">
                      <span className="h-1 w-1 bg-primary mr-2"></span>
                      Endurance Bikes
                    </Link>
                  </li>
                  <li>
                    <Link href="/components/framesets" className="text-gray-300 hover:text-primary transition-colors flex items-center">
                      <span className="h-1 w-1 bg-primary mr-2"></span>
                      Framesets
                    </Link>
                  </li>
                  <li>
                    <Link href="/components/wheelsets" className="text-gray-300 hover:text-primary transition-colors flex items-center">
                      <span className="h-1 w-1 bg-primary mr-2"></span>
                      Wheelsets
                    </Link>
                  </li>
                </ul>
              </div>
              
              <div>
                <h5 className="text-lg font-bold mb-4 text-white relative inline-block">
                  Support
                  <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-primary"></span>
                </h5>
                <ul className="space-y-3">
                  <li>
                    <Link href="/custom" className="text-gray-300 hover:text-primary transition-colors flex items-center">
                      <span className="h-1 w-1 bg-primary mr-2"></span>
                      Custom Sizing
                    </Link>
                  </li>
                  <li>
                    <Link href="/faq" className="text-gray-300 hover:text-primary transition-colors flex items-center">
                      <span className="h-1 w-1 bg-primary mr-2"></span>
                      FAQs
                    </Link>
                  </li>
                  <li>
                    <Link href="/warranty" className="text-gray-300 hover:text-primary transition-colors flex items-center">
                      <span className="h-1 w-1 bg-primary mr-2"></span>
                      Warranty
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-gray-300 hover:text-primary transition-colors flex items-center">
                      <span className="h-1 w-1 bg-primary mr-2"></span>
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
              
              <div>
                <h5 className="text-lg font-bold mb-4 text-white relative inline-block">
                  Company
                  <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-primary"></span>
                </h5>
                <ul className="space-y-3">
                  <li>
                    <Link href="/about" className="text-gray-300 hover:text-primary transition-colors flex items-center">
                      <span className="h-1 w-1 bg-primary mr-2"></span>
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/technology" className="text-gray-300 hover:text-primary transition-colors flex items-center">
                      <span className="h-1 w-1 bg-primary mr-2"></span>
                      Our Technology
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy" className="text-gray-300 hover:text-primary transition-colors flex items-center">
                      <span className="h-1 w-1 bg-primary mr-2"></span>
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms" className="text-gray-300 hover:text-primary transition-colors flex items-center">
                      <span className="h-1 w-1 bg-primary mr-2"></span>
                      Terms of Service
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">&copy; {currentYear} SchonMO. All rights reserved.</p>
          <div className="flex items-center">
            <Link href="/custom" className="transform hover:scale-105 transition-transform duration-300">
              <div className="rhombus-btn-small">
                <span>Get Fitted Today</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 