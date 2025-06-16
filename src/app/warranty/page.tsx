"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function WarrantyPage() {
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
                Protection • Quality • Trust
              </p>
              <h1 className="text-3xl md:text-5xl font-bold mb-4 font-racing text-white relative inline-block">
                SchönMO <span className="text-[#f87f01]">Warranty</span>
                <motion.div 
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="absolute -bottom-2 left-0 h-1 bg-[#f87f01]"
                ></motion.div>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mt-6">
                Comprehensive coverage for your precision-engineered cycling experience
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
                The present document regulates all the aspects related to warranty, servicing, liability and crash replacements of all &ldquo;Schönmo&rdquo; products, meaning every product branded &ldquo;Schönmo&rdquo; (Schönmo is a brand by Schon Mobility) or sold to consumers by our authorized dealers.
              </p>
            </motion.div>

            {/* Preamble Section */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 relative inline-block">
                Preamble and <span className="text-[#f87f01]">Definitions</span>
                <div className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-[#f87f01]"></div>
              </h2>
              
              <div className="grid gap-6">
                {/* Product Service Life */}
                <div className="bg-white rounded-lg shadow-md p-6 transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="flex items-start space-x-4">
                    <div className="h-12 w-12 flex items-center justify-center bg-[#f87f01]/10 rounded-full flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#f87f01]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#f87f01] mb-3">PRODUCT SERVICE LIFE</h3>
                      <p className="text-gray-700 leading-relaxed">
                        All bicycle products have a finite useful service life. This is determined by a combination of many factors including: typical load, correct installation, materials and technologies, product design, rider weight and power, care and maintenance, type of usage, impact damage. These factors all affect wear. Additionally, products are subject to a less-known form of wear known as &lsquo;material fatigue&rsquo;. This is the progressive separation of the molecular structure, a &lsquo;micro-fracture&rsquo; that eventually grows large enough to cause failure. To minimise your riding risk, Schönmo recommends you check your bicycle regularly for signs of wear. Have a qualified mechanic regularly inspect all parts of the bicycle for corrosion, wear, cracks, deformation, surface damage, and any sign of fatigue. Spotting early signs of fatigue requires visual enhancers like penetrating fluids. Any component that is worn out, has lost its structural integrity, or shows any sign of fatigue or damage must be replaced immediately, to reduce the possibility of an accident that could cause serious injury.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Weight Limit */}
                <div className="bg-white rounded-lg shadow-md p-6 transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="flex items-start space-x-4">
                    <div className="h-12 w-12 flex items-center justify-center bg-[#f87f01]/10 rounded-full flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#f87f01]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#f87f01] mb-3">WEIGHT LIMIT</h3>
                      <p className="text-gray-700 leading-relaxed">
                        A heavier rider and/or an aggressive riding style increase the stress on the products, reducing service life. Schönmo products are suitable for riders below 110 kg/240 lb.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Intended Use */}
                <div className="bg-white rounded-lg shadow-md p-6 transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="flex items-start space-x-4">
                    <div className="h-12 w-12 flex items-center justify-center bg-[#f87f01]/10 rounded-full flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#f87f01]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#f87f01] mb-3">INTENDED USE</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Products are designed solely for the use specifically indicated in their description and packaging. Any other use may be dangerous and should be avoided.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Two Year Warranty Section */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 relative inline-block">
                Two Year <span className="text-[#f87f01]">Limited Warranty</span>
                <div className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-[#f87f01]"></div>
              </h2>
              
              <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 mb-6">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="h-16 w-16 flex items-center justify-center bg-[#f87f01]/10 rounded-full flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#f87f01]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                      Schönmo offers to the original owner a <strong className="text-[#f87f01]">2 years warranty</strong> against defects in materials or workmanship.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      When a product is verified by Schönmo to be defective within the terms of this warranty, it will be replaced or repaired, at the sole discretion of Schönmo, free of charge. In case of replacement, if the same original product is not available, it will be replaced with an equivalent product of similar value.
                    </p>
                  </div>
                </div>
              </div>

              {/* Warranty Exclusions */}
              <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                  This warranty does not cover:
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    products used beyond the scope of their intended design, products without a legitimate dated proof of purchase;
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    products not purchased through a legitimate 3T dealer;
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    products whose serial number and authenticity markings have been made unreadable;
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    normal aging, wear and fatigue;
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    damage caused by shipping, abuse, misuse, wrong assembly, improper maintenance, impacts, corrosion, accidents, aggressive/corrosive agents, use with non-compatible components, improper repairs, and any other cause which does not constitute a material or manufacturing defect;
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    products that have reached the end of their useful service life;
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    refinished/refurbished products;
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    products used commercially;
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    labour costs;
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    damage caused by wrong brake pads;
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    only in the case of customized products purchased directly from 3T Cycling SRL online store, cosmetic imperfections related to the handcrafted finishing process of the product made to order based on the customer request.
                  </li>
                </ul>
                
                <div className="mt-6 p-4 bg-[#f87f01]/10 rounded-lg border-l-4 border-[#f87f01]">
                  <p className="text-gray-700">
                    <strong>Please note:</strong> Product specifications Schönmo provides are nominal and may be changed at any time. 
                    <span className="block mt-2 font-medium text-[#f87f01]">1 year for paint, decals and coating.</span>
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Limitation of Liability */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 relative inline-block">
                Limitation of <span className="text-[#f87f01]">Liability</span>
                <div className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-[#f87f01]"></div>
              </h2>
              
              <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Schönmo shall not be liable for direct, indirect, special, incidental or consequential damages, to the extent allowed by local laws.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  This warranty is valid only for the original owner and is not transferable. This warranty is expressly limited to the repair or replacement of a defective product, which is the sole remedy of the warranty.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  In addition to the rights granted by this policy, you may have other legal rights granted by consumer laws of the country where the product was sold. If this warranty is inconsistent with any mandatory local law, it shall be deemed modified in accordance with such local law.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  This one is the only conventional warranty offered for the product you purchased. Any additional clause, extension or implied warranty is specifically excluded.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  When a product is repaired or replaced free of charge under warranty, the repaired or replaced product remains covered under the residual part of the original warranty. There is no renewal or extension of the warranty period, and the original product that was replaced becomes the property of Schönmo. Also Schönmo reserves the right to confiscate any counterfeit or unsafe product sent in for warranty inspection.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Any disputes arising out of this Agreement or regarding the use of this product will be governed by the laws of the country of the Schönmo legal entity who sold the product to the consumer, distributor, dealer or Original Equipment Manufacturer.
                </p>
              </div>
            </motion.div>

            {/* Claim Procedure */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 relative inline-block">
                Claim <span className="text-[#f87f01]">Procedure</span>
                <div className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-[#f87f01]"></div>
              </h2>
              
              <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="h-12 w-12 flex items-center justify-center bg-[#f87f01]/10 rounded-full flex-shrink-0">
                    <span className="text-[#f87f01] font-bold">1</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    The warranty claim shall be made through the legitimate Schönmo dealer that sold the product or through the dealer that sold the complete bicycle that came originally equipped with the Schönmo product. Schönmo or its Service Centers will not accept any warranty claim from end users (except the ones who purchased the Schönmo products in the Schönmo Online Store) or from dealers that were not the original sellers of the product.
                  </p>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="h-12 w-12 flex items-center justify-center bg-[#f87f01]/10 rounded-full flex-shrink-0">
                    <span className="text-[#f87f01] font-bold">2</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    All products must be shipped in for inspection properly cleaned (otherwise a charge may be applied). Unless otherwise requested in writing by the Service Center, wheels must be returned without quick releases, tires and sprockets; wheels for tubular tires must be returned with no residual glue on the tire bead as truing requires a smooth surface (otherwise a charge may be applied). Carbon wheels must be always accompanied by the brake pads used.
                  </p>
                </div>
                
                <div className="bg-[#f87f01]/10 rounded-lg p-6 border-l-4 border-[#f87f01]">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Required Documentation:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-[#f87f01] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      end user&apos;s name, address, phone numbers and e-mail (as provided when the product was registered in our website, if registered);
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-[#f87f01] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      the original invoice, for proof of date and place of purchase (products claimed without proof of purchase will be returned collect to the dealer without inspection);
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-[#f87f01] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      a detailed description of the problem encountered;
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-[#f87f01] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      a list of the products used in conjunction with the claimed product;
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-[#f87f01] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      instructions about what to do with the product if found not-warrantable (otherwise destroyed).
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </main>
  );
} 