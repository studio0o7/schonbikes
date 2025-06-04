"use client";

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-16 relative overflow-hidden">
      {/* Geometric Elements */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-[#f87f01] opacity-10 transform -rotate-45 -translate-x-20 -translate-y-20"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#f87f01] opacity-10 transform -rotate-45 translate-x-20 translate-y-20"></div>
      <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-[#f87f01] opacity-5 transform rotate-45"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-4 mb-8 md:mb-0">
            <Link href="/" className="flex items-center group">
              <div className="relative overflow-hidden p-1">
                <div className="flex items-center transition-transform duration-300 group-hover:scale-105">
                  <div 
                    className="h-8 w-3 bg-[#f87f01] mr-2 transition-all duration-300 group-hover:w-8 transform group-hover:skew-x-[-15deg]"
                  ></div>
                  <span className="text-3xl font-bold font-racing tracking-wider">
                    <span className="text-[#f87f01] transition-colors duration-300">SCHÖN</span>
                    <span className="text-white transition-colors duration-300 group-hover:text-[#f87f01]">MO</span>
                  </span>
                </div>
                <div className="absolute h-0.5 w-0 bg-[#f87f01] bottom-0 left-1/2 transform -translate-x-1/2 group-hover:w-3/4 transition-all duration-400 ease-out"></div>
              </div>
            </Link>
            <p className="mb-6 text-gray-300 mt-4">
              Custom performance and endurance bikes engineered for speed and precision, 
              designed to fit your body perfectly.
            </p>
          </div>
          
          <div className="md:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div>
                <h5 className="text-lg font-bold mb-4 text-white relative inline-block">
                  Products
                  <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-[#f87f01]"></span>
                </h5>
                <ul className="space-y-3">
                  <li>
                    <Link href="/bikes/performance" className="group relative py-2 px-1 overflow-hidden flex items-center">
                      <span className="font-medium text-gray-300 group-hover:text-[#f87f01] transition-all duration-300 ease-out tracking-wide">
                        Performance Bikes
                      </span>
                      <span className="absolute h-0.5 w-0 bg-[#f87f01] bottom-0 left-0 group-hover:w-full transition-all duration-300 ease-out"></span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/bikes/endurance" className="group relative py-2 px-1 overflow-hidden flex items-center">
                      <span className="font-medium text-gray-300 group-hover:text-[#f87f01] transition-all duration-300 ease-out tracking-wide">
                        Endurance Bikes
                      </span>
                      <span className="absolute h-0.5 w-0 bg-[#f87f01] bottom-0 left-0 group-hover:w-full transition-all duration-300 ease-out"></span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/framesets" className="group relative py-2 px-1 overflow-hidden flex items-center">
                      <span className="font-medium text-gray-300 group-hover:text-[#f87f01] transition-all duration-300 ease-out tracking-wide">
                        Framesets
                      </span>
                      <span className="absolute h-0.5 w-0 bg-[#f87f01] bottom-0 left-0 group-hover:w-full transition-all duration-300 ease-out"></span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/wheelset" className="group relative py-2 px-1 overflow-hidden flex items-center">
                      <span className="font-medium text-gray-300 group-hover:text-[#f87f01] transition-all duration-300 ease-out tracking-wide">
                        Wheelsets
                      </span>
                      <span className="absolute h-0.5 w-0 bg-[#f87f01] bottom-0 left-0 group-hover:w-full transition-all duration-300 ease-out"></span>
                    </Link>
                  </li>
                </ul>
              </div>
              
              <div>
                <h5 className="text-lg font-bold mb-4 text-white relative inline-block">
                  Support
                  <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-[#f87f01]"></span>
                </h5>
                <ul className="space-y-3">
                  <li>
                    <Link href="/custom" className="group relative py-2 px-1 overflow-hidden flex items-center">
                      <span className="font-medium text-gray-300 group-hover:text-[#f87f01] transition-all duration-300 ease-out tracking-wide">
                        Custom Sizing
                      </span>
                      <span className="absolute h-0.5 w-0 bg-[#f87f01] bottom-0 left-0 group-hover:w-full transition-all duration-300 ease-out"></span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/faq" className="group relative py-2 px-1 overflow-hidden flex items-center">
                      <span className="font-medium text-gray-300 group-hover:text-[#f87f01] transition-all duration-300 ease-out tracking-wide">
                        FAQs
                      </span>
                      <span className="absolute h-0.5 w-0 bg-[#f87f01] bottom-0 left-0 group-hover:w-full transition-all duration-300 ease-out"></span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/warranty" className="group relative py-2 px-1 overflow-hidden flex items-center">
                      <span className="font-medium text-gray-300 group-hover:text-[#f87f01] transition-all duration-300 ease-out tracking-wide">
                        Warranty
                      </span>
                      <span className="absolute h-0.5 w-0 bg-[#f87f01] bottom-0 left-0 group-hover:w-full transition-all duration-300 ease-out"></span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="group relative py-2 px-1 overflow-hidden flex items-center">
                      <span className="font-medium text-gray-300 group-hover:text-[#f87f01] transition-all duration-300 ease-out tracking-wide">
                        Contact Us
                      </span>
                      <span className="absolute h-0.5 w-0 bg-[#f87f01] bottom-0 left-0 group-hover:w-full transition-all duration-300 ease-out"></span>
                    </Link>
                  </li>
                </ul>
              </div>
              
              <div>
                <h5 className="text-lg font-bold mb-4 text-white relative inline-block">
                  Company
                  <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-[#f87f01]"></span>
                </h5>
                <ul className="space-y-3">
                  <li>
                    <Link href="/about" className="group relative py-2 px-1 overflow-hidden flex items-center">
                      <span className="font-medium text-gray-300 group-hover:text-[#f87f01] transition-all duration-300 ease-out tracking-wide">
                        About Us
                      </span>
                      <span className="absolute h-0.5 w-0 bg-[#f87f01] bottom-0 left-0 group-hover:w-full transition-all duration-300 ease-out"></span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/technology" className="group relative py-2 px-1 overflow-hidden flex items-center">
                      <span className="font-medium text-gray-300 group-hover:text-[#f87f01] transition-all duration-300 ease-out tracking-wide">
                        Our Technology
                      </span>
                      <span className="absolute h-0.5 w-0 bg-[#f87f01] bottom-0 left-0 group-hover:w-full transition-all duration-300 ease-out"></span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy" className="group relative py-2 px-1 overflow-hidden flex items-center">
                      <span className="font-medium text-gray-300 group-hover:text-[#f87f01] transition-all duration-300 ease-out tracking-wide">
                        Privacy Policy
                      </span>
                      <span className="absolute h-0.5 w-0 bg-[#f87f01] bottom-0 left-0 group-hover:w-full transition-all duration-300 ease-out"></span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms" className="group relative py-2 px-1 overflow-hidden flex items-center">
                      <span className="font-medium text-gray-300 group-hover:text-[#f87f01] transition-all duration-300 ease-out tracking-wide">
                        Terms of Service
                      </span>
                      <span className="absolute h-0.5 w-0 bg-[#f87f01] bottom-0 left-0 group-hover:w-full transition-all duration-300 ease-out"></span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">&copy; {currentYear} SchönMO. All rights reserved.</p>
          <div className="flex items-center">
            <Link 
              href="#" 
              className="transform hover:scale-105 transition-transform duration-300 group"
              onClick={(e) => {
                e.preventDefault();
                const sections = document.querySelectorAll('section');
                const lastSection = sections[sections.length - 1];
                if (lastSection) {
                  lastSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <div className="rhombus-btn-small relative overflow-hidden border-2 border-[#f87f01] transition-all duration-300">
                <span className="relative z-10 text-white transition-colors duration-300 group-hover:text-white">Get Fitted</span>
                <div className="absolute inset-0 bg-[#f87f01] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 