"use client";

import Image from 'next/image';
import Link from 'next/link';

export default function Components() {
  return (
    <section className="py-12 md:py-16 bg-black text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-32 bg-gradient-to-l from-[#f87f01]/20 to-transparent z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-32 bg-gradient-to-r from-[#f87f01]/20 to-transparent z-10"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('/images/grid-pattern.png')] opacity-5 z-10"></div>
      
      <div className="container mx-auto px-4 relative z-20">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4 font-racing">
            Premium <span className="text-[#f87f01]">Components</span>
          </h2>
          <div className="w-16 md:w-24 h-1 bg-[#f87f01] mx-auto mb-4 md:mb-6"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {/* Framesets Card */}
          <div className="bg-white/5 rounded-lg overflow-hidden shadow-lg border border-white/10 hover:border-[#f87f01]/30 transition-all duration-300">
            <div className="relative h-52 md:h-64">
              <Image 
                src="/images/Frame1.jpg"
                alt="SchonMO Custom Framesets" 
                fill
                style={{objectFit: 'contain'}}
                className="transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-1">Framesets</h3>
                <div className="h-1 w-8 md:w-10 bg-[#f87f01]"></div>
              </div>
            </div>
            <div className="p-4 md:p-5 text-center">
              <Link href="/framesets">
                <div className="inline-block bg-[#f87f01] text-white py-2 px-4 md:px-6 rounded-sm hover:bg-[#f87f01]/80 transition-colors duration-300 text-sm md:text-base">
                  Explore
                </div>
              </Link>
            </div>
          </div>
          
          {/* VitruFit Saddle Card */}
          <div className="bg-white/5 rounded-lg overflow-hidden shadow-lg border border-white/10 hover:border-[#f87f01]/30 transition-all duration-300">
            <div className="relative h-52 md:h-64">
              <Image 
                src="/images/saddle_main.png"
                alt="SchönMO VitruFit Saddle" 
                fill
                style={{objectFit: 'contain'}}
                className="transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-1">VitruFit Saddle</h3>
                <div className="h-1 w-8 md:w-10 bg-[#f87f01]"></div>
              </div>
            </div>
            <div className="p-4 md:p-5 text-center">
              <Link href="/saddles">
                <div className="inline-block bg-[#f87f01] text-white py-2 px-4 md:px-6 rounded-sm hover:bg-[#f87f01]/80 transition-colors duration-300 text-sm md:text-base">
                  Explore
                </div>
              </Link>
            </div>
          </div>
          
          {/* RAD35 Wheelset Card */}
          <div className="bg-white/5 rounded-lg overflow-hidden shadow-lg border border-white/10 hover:border-[#f87f01]/30 transition-all duration-300">
            <div className="relative h-52 md:h-64">
              <Image 
                src="/images/RAD 35.png"
                alt="SchonMO RAD35 Wheelset" 
                fill
                style={{objectFit: 'contain'}}
                className="transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-1">RAD35 Wheelset</h3>
                <div className="h-1 w-8 md:w-10 bg-[#f87f01]"></div>
              </div>
            </div>
            <div className="p-4 md:p-5 text-center">
              <Link href="/wheelset">
                <div className="inline-block bg-[#f87f01] text-white py-2 px-4 md:px-6 rounded-sm hover:bg-[#f87f01]/80 transition-colors duration-300 text-sm md:text-base">
                  Explore
                </div>
              </Link>
            </div>
          </div>
          
          {/* RAD45 Wheelset Card */}
          <div className="bg-white/5 rounded-lg overflow-hidden shadow-lg border border-white/10 hover:border-[#f87f01]/30 transition-all duration-300">
            <div className="relative h-52 md:h-64">
              <Image 
                src="/images/RAD 45.png"
                alt="SchonMO RAD45 Wheelset" 
                fill
                style={{objectFit: 'contain'}}
                className="transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-1">RAD45 Wheelset</h3>
                <div className="h-1 w-8 md:w-10 bg-[#f87f01]"></div>
              </div>
            </div>
            <div className="p-4 md:p-5 text-center">
              <Link href="/wheelset">
                <div className="inline-block bg-[#f87f01] text-white py-2 px-4 md:px-6 rounded-sm hover:bg-[#f87f01]/80 transition-colors duration-300 text-sm md:text-base">
                  Explore
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 