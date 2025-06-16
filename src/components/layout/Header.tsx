"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [bikesDropdownOpen, setBikesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  return (
    <header 
      className={`bg-white text-gray-800 sticky top-0 z-50 transition-all duration-300 ease-in-out 
                  ${scrolled ? 'py-3' : 'py-5'}`}
    >
      <div className="container-custom flex justify-between items-center relative z-10">
        {/* Enhanced Logo */}
        <Link href="/" className="flex items-center group">
          <div className="relative overflow-hidden p-1"> {/* Added padding for hover effect visibility */}
            <div className="flex items-center transition-transform duration-300 group-hover:scale-105">
              <div 
                className="h-8 w-3 bg-[#f87f01] mr-2 transition-all duration-300 group-hover:w-8 transform group-hover:skew-x-[-15deg]"
              ></div>
              <span className="text-3xl font-bold font-racing tracking-wider">
                <span className="text-[#f87f01] transition-colors duration-300">SCHÖN</span>
                <span className="text-gray-800 transition-colors duration-300 group-hover:text-[#f87f01]">MO</span>
              </span>
            </div>
            {/* Subtle underline accent expanding on hover */}
            <div className="absolute h-0.5 w-0 bg-[#f87f01] bottom-0 left-1/2 transform -translate-x-1/2 group-hover:w-3/4 transition-all duration-400 ease-out"></div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 lg:space-x-8 items-center">
          <Link href="/" className="group relative py-2 px-1 overflow-hidden">
            <span className="font-medium text-gray-700 group-hover:text-[#f87f01] transition-all duration-300 ease-out tracking-wide">
              Home
            </span>
            <span className="absolute h-0.5 w-0 bg-[#f87f01] bottom-0 left-1/2 transform -translate-x-1/2 group-hover:w-full transition-all duration-300 ease-out"></span>
            <span className="absolute h-full w-full bg-[#f87f01]/5 top-0 left-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-center -z-10"></span>
          </Link>
          
          <div 
            className="relative group"
            onMouseEnter={() => setBikesDropdownOpen(true)}
            onMouseLeave={() => setBikesDropdownOpen(false)}
          >
            <div className="relative py-2 px-1 overflow-hidden flex items-center cursor-default">
              <span className={`font-medium transition-all duration-300 ease-out tracking-wide ${bikesDropdownOpen ? 'text-[#f87f01]' : 'text-gray-700 group-hover:text-[#f87f01]'}`}>
                Bikes
              </span>
              <span className={`absolute h-0.5 bg-[#f87f01] bottom-0 left-1/2 transform -translate-x-1/2 transition-all duration-300 ease-out ${bikesDropdownOpen ? 'w-full': 'w-0 group-hover:w-full'}`}></span>
              <span className="absolute h-full w-full bg-[#f87f01]/5 top-0 left-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-center -z-10"></span>
            </div>
            
            {/* Integrated Dropdown */}
            <div 
              className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-0 w-[450px] 
                          bg-white overflow-hidden z-20 
                          border-x border-b border-gray-200
                          transition-all duration-300 ease-out transform origin-top
                          ${bikesDropdownOpen ? 'opacity-100 scale-y-100 translate-y-0' : 'opacity-0 scale-y-95 -translate-y-2 pointer-events-none'}`}
            >
              <div className="p-1"> {/* Inner padding for content */}
                <Link 
                  href="/bikes/endurance" 
                  className="block hover:bg-[#f87f01]/5 transition-all duration-200 rounded-md m-1"
                  onClick={() => setBikesDropdownOpen(false)}
                >
                  <div className="p-4 group flex gap-4 items-center">
                    <div className="flex-1">
                      <h4 className="text-[#f87f01] font-semibold text-sm sm:text-base transition-colors duration-300 group-hover:text-[#f87f01]">
                        Gravel - SchönMO One Adventure
                      </h4>
                      <p className="text-xs text-gray-600 group-hover:text-gray-800 mt-1 transition-colors duration-300">Conquer any terrain with our versatile gravel bike, built for adventure.</p>
                    </div>
                  </div>
                </Link>
                
                <div className="h-px bg-gray-200 mx-4 my-1"></div>
                
                <Link 
                  href="/bikes/performance" 
                  className="block hover:bg-[#f87f01]/5 transition-all duration-200 rounded-md m-1"
                  onClick={() => setBikesDropdownOpen(false)}
                >
                  <div className="p-4 group flex gap-4 items-center">
                    <div className="flex-1">
                      <h4 className="text-[#f87f01] font-semibold text-sm sm:text-base transition-colors duration-300 group-hover:text-[#f87f01]">
                        Road - SchönMO One Road
                      </h4>
                      <p className="text-xs text-gray-600 group-hover:text-gray-800 mt-1 transition-colors duration-300">Experience pure speed with our flagship road bike, engineered for peak performance.</p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          
          <Link href="/framesets" className="group relative py-2 px-1 overflow-hidden">
            <span className="font-medium text-gray-700 group-hover:text-[#f87f01] transition-all duration-300 ease-out tracking-wide">
              Framesets
            </span>
            <span className="absolute h-0.5 w-0 bg-[#f87f01] bottom-0 left-1/2 transform -translate-x-1/2 group-hover:w-full transition-all duration-300 ease-out"></span>
            <span className="absolute h-full w-full bg-[#f87f01]/5 top-0 left-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-center -z-10"></span>
          </Link>
          
          <Link href="/wheelset" className="group relative py-2 px-1 overflow-hidden">
            <span className="font-medium text-gray-700 group-hover:text-[#f87f01] transition-all duration-300 ease-out tracking-wide">
              Wheelsets
            </span>
            <span className="absolute h-0.5 w-0 bg-[#f87f01] bottom-0 left-1/2 transform -translate-x-1/2 group-hover:w-full transition-all duration-300 ease-out"></span>
            <span className="absolute h-full w-full bg-[#f87f01]/5 top-0 left-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-center -z-10"></span>
          </Link>
          
          <Link href="/saddles" className="group relative py-2 px-1 overflow-hidden">
            <span className="font-medium text-gray-700 group-hover:text-[#f87f01] transition-all duration-300 ease-out tracking-wide">
              Saddles
            </span>
            <span className="absolute h-0.5 w-0 bg-[#f87f01] bottom-0 left-1/2 transform -translate-x-1/2 group-hover:w-full transition-all duration-300 ease-out"></span>
            <span className="absolute h-full w-full bg-[#f87f01]/5 top-0 left-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-center -z-10"></span>
          </Link>
          
          <Link href="/about" className="group relative py-2 px-1 overflow-hidden">
            <span className="font-medium text-gray-700 group-hover:text-[#f87f01] transition-all duration-300 ease-out tracking-wide">
              About Us
            </span>
            <span className="absolute h-0.5 w-0 bg-[#f87f01] bottom-0 left-1/2 transform -translate-x-1/2 group-hover:w-full transition-all duration-300 ease-out"></span>
            <span className="absolute h-full w-full bg-[#f87f01]/5 top-0 left-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-center -z-10"></span>
          </Link>
        </nav>

        {/* Enhanced Action Button */}
        <div className="hidden md:block">
          <div className="transform hover:scale-105 transition-transform duration-300 group cursor-pointer">
            <div className="rhombus-btn-small relative overflow-hidden border-2 border-[#f87f01] transition-all duration-300">
              <span className="relative z-10 text-white transition-colors duration-300 group-hover:text-white">Get Fitted</span>
              <div className="absolute inset-0 bg-[#f87f01] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></div>
            </div>
          </div>
        </div>

        {/* Mobile Menu Button with enhanced animation */}
        <button 
          className="md:hidden p-2 focus:outline-none relative group"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="relative w-6 h-5">
            <span className={`absolute h-0.5 w-full bg-gray-700 transform transition-all duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 top-2 bg-[#f87f01]' : 'top-0 group-hover:bg-[#f87f01]'}`}></span>
            <span className={`absolute h-0.5 w-full bg-gray-700 top-2 transition-all duration-200 ease-in-out ${isMenuOpen ? 'opacity-0 translate-x-2' : 'opacity-100 group-hover:bg-[#f87f01]'}`}></span>
            <span className={`absolute h-0.5 w-full bg-gray-700 transform transition-all duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 top-2 bg-[#f87f01]' : 'top-4 group-hover:bg-[#f87f01]'}`}></span>
          </div>
          <div className={`absolute inset-0 bg-[#f87f01]/10 rounded-md scale-0 transition-transform duration-200 ease-out ${isMenuOpen ? 'scale-125 opacity-100' : 'group-hover:scale-125 group-hover:opacity-50'}`}></div>
        </button>

        {/* Enhanced Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg p-4 flex flex-col space-y-1 border-t border-gray-200">
            <Link 
              href="/" 
              className="font-medium text-gray-700 hover:text-[#f87f01] transition-colors duration-200 py-3 px-3 border-l-2 border-transparent hover:border-[#f87f01] relative group rounded-md hover:bg-[#f87f01]/5"
              onClick={() => { setIsMenuOpen(false); setBikesDropdownOpen(false); }}
            >
              Home
            </Link>
            
            <div className="border-l-2 border-transparent hover:border-[#f87f01] transition-colors duration-200 group rounded-md hover:bg-[#f87f01]/5">
              <button 
                className="font-medium text-gray-700 group-hover:text-[#f87f01] transition-colors duration-200 w-full text-left flex justify-between items-center py-3 px-3"
                onClick={() => setBikesDropdownOpen(!bikesDropdownOpen)}
              >
                Bikes
                <svg 
                  className={`ml-1 h-5 w-5 transition-transform duration-300 ${bikesDropdownOpen ? 'rotate-180 text-[#f87f01]' : 'text-gray-500 group-hover:text-[#f87f01]'}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div 
                className={`pl-3 space-y-1 transition-all duration-300 ease-out overflow-hidden 
                            ${bikesDropdownOpen ? 'max-h-96 opacity-100 pt-1 pb-2' : 'max-h-0 opacity-0'}`}
              >
                <Link 
                  href="/bikes/endurance" 
                  className="block"
                  onClick={() => { setIsMenuOpen(false); setBikesDropdownOpen(false); }}
                >
                  <div className="py-2.5 border-l-2 border-gray-300 pl-4 hover:border-[#f87f01] group rounded-r-md hover:bg-[#f87f01]/5 transition-all duration-200">
                    <div>
                      <h4 className="text-[#f87f01] font-medium transition-colors duration-200">Gravel</h4>
                      <p className="text-sm text-gray-600 group-hover:text-gray-800">SchönMO Adventure</p>
                    </div>
                  </div>
                </Link>
                <Link 
                  href="/bikes/performance" 
                  className="block"
                  onClick={() => { setIsMenuOpen(false); setBikesDropdownOpen(false); }}
                >
                  <div className="py-2.5 border-l-2 border-gray-300 pl-4 hover:border-[#f87f01] group rounded-r-md hover:bg-[#f87f01]/5 transition-all duration-200">
                    <div>
                      <h4 className="text-[#f87f01] font-medium transition-colors duration-200">Road</h4>
                      <p className="text-sm text-gray-600 group-hover:text-gray-800">SchönMO Performance</p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            
            <Link 
              href="/framesets" 
              className="font-medium text-gray-700 hover:text-[#f87f01] transition-colors duration-200 py-3 px-3 border-l-2 border-transparent hover:border-[#f87f01] relative group rounded-md hover:bg-[#f87f01]/5"
              onClick={() => { setIsMenuOpen(false); setBikesDropdownOpen(false); }}
            >
              Framesets
            </Link>
            
            <Link 
              href="/wheelset" 
              className="font-medium text-gray-700 hover:text-[#f87f01] transition-colors duration-200 py-3 px-3 border-l-2 border-transparent hover:border-[#f87f01] relative group rounded-md hover:bg-[#f87f01]/5"
              onClick={() => { setIsMenuOpen(false); setBikesDropdownOpen(false); }}
            >
              Wheelsets
            </Link>
            
            <Link 
              href="/saddles" 
              className="font-medium text-gray-700 hover:text-[#f87f01] transition-colors duration-200 py-3 px-3 border-l-2 border-transparent hover:border-[#f87f01] relative group rounded-md hover:bg-[#f87f01]/5"
              onClick={() => { setIsMenuOpen(false); setBikesDropdownOpen(false); }}
            >
              Saddles
            </Link>
            
            <Link 
              href="/about" 
              className="font-medium text-gray-700 hover:text-[#f87f01] transition-colors duration-200 py-3 px-3 border-l-2 border-transparent hover:border-[#f87f01] relative group rounded-md hover:bg-[#f87f01]/5"
              onClick={() => { setIsMenuOpen(false); setBikesDropdownOpen(false); }}
            >
              About Us
            </Link>
            
            <div className="pt-4 pb-2">
              <div 
                className="inline-block w-full text-center bg-[#f87f01] text-white font-semibold py-3.5 px-4 
                           transform skew-x-[-12deg] hover:bg-[#f87f01]/90 transition-all duration-300 group relative overflow-hidden
                           border border-[#f87f01] cursor-pointer"
              >
                <span className="inline-block transform skew-x-[12deg] relative z-10 tracking-wide">Get Fitted</span>
                <div className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-400 ease-out"></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
} 