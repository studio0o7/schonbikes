"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  id: string;
  question: string;
  answer: string | React.ReactElement;
  category: string;
}

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<string[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const toggleItem = (id: string) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const faqData: FAQItem[] = [
    {
      id: "sram-vs-shimano",
      question:
        "SRAM AXS vs Shimano Di2: Which electronic shifting system should I choose?",
      category: "technology",
      answer: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            When it comes to high-end bike drivetrains, two names stand out
            above the rest: SRAM AXS and Shimano Di2. Both systems offer
            exceptional performance, reliability, and precision, but there are
            key differences that might make one better suited for your needs.
          </p>

          <div className="bg-[#f87f01]/10 rounded-lg p-4 border-l-4 border-[#f87f01]">
            <h4 className="font-bold text-[#f87f01] mb-2">SRAM AXS</h4>
            <p className="text-gray-700 text-sm leading-relaxed">
              A wireless system using a single battery to power both derailleur
              and shifters. No wires or cables needed, offering a cleaner setup
              with extensive customization options. You can program buttons for
              specific functions like shifting both derailleurs simultaneously
              or adjusting dropper posts. Designed to work seamlessly with
              SRAM&apos;s Eagle drivetrain for wide gear ranges.
            </p>
          </div>

          <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
            <h4 className="font-bold text-blue-600 mb-2">Shimano Di2</h4>
            <p className="text-gray-700 text-sm leading-relaxed">
              A wired system using multiple batteries for derailleurs and
              shifters. While more complex to set up, you don&apos;t need to
              worry about charging a single battery. Offers precise shifting and
              excellent durability thanks to Shimano&apos;s renowned
              engineering. Compatible with a wide range of drivetrains and
              components.
            </p>
          </div>

          <p className="text-gray-700 leading-relaxed">
            <strong>Choose SRAM AXS if:</strong> You want wireless convenience
            and extensive customization options.
            <br />
            <strong>Choose Shimano Di2 if:</strong> You prioritize precision,
            reliability, and component compatibility above all else.
          </p>
        </div>
      ),
    },
    {
      id: "road-vs-gravel",
      question:
        "Road vs Gravel bikes: Which type is right for my riding style?",
      category: "bikes",
      answer: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            Choosing between road and gravel bikes depends on your riding
            preferences and the terrain you plan to tackle. Here&apos;s a
            comprehensive breakdown:
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
              <h4 className="font-bold text-green-600 mb-3">Gravel Bikes</h4>
              <div className="space-y-3">
                <div>
                  <h5 className="font-semibold text-green-700 text-sm">
                    Pros:
                  </h5>
                  <ul className="text-xs text-gray-700 space-y-1 mt-1">
                    <li>
                      • <strong>Versatility:</strong> Handle paved roads to dirt
                      trails
                    </li>
                    <li>
                      • <strong>Stability:</strong> More stable geometry for
                      rough terrain
                    </li>
                    <li>
                      • <strong>Comfort:</strong> Wider tires and forgiving
                      frames
                    </li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-red-700 text-sm">Cons:</h5>
                  <ul className="text-xs text-gray-700 space-y-1 mt-1">
                    <li>
                      • <strong>Weight:</strong> Heavier than road bikes
                    </li>
                    <li>
                      • <strong>Speed:</strong> Less efficient on smooth
                      pavement
                    </li>
                    <li>
                      • <strong>Cost:</strong> Specialized components increase
                      price
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
              <h4 className="font-bold text-blue-600 mb-3">Road Bikes</h4>
              <div className="space-y-3">
                <div>
                  <h5 className="font-semibold text-green-700 text-sm">
                    Pros:
                  </h5>
                  <ul className="text-xs text-gray-700 space-y-1 mt-1">
                    <li>
                      • <strong>Speed:</strong> Designed for efficiency on paved
                      roads
                    </li>
                    <li>
                      • <strong>Lightweight:</strong> More nimble and easier to
                      handle
                    </li>
                    <li>
                      • <strong>Competitive edge:</strong> Perfect for racing
                      and performance
                    </li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-red-700 text-sm">Cons:</h5>
                  <ul className="text-xs text-gray-700 space-y-1 mt-1">
                    <li>
                      • <strong>Limited terrain:</strong> Only suitable for
                      smooth roads
                    </li>
                    <li>
                      • <strong>Less comfort:</strong> Narrower tires, stiffer
                      frames
                    </li>
                    <li>
                      • <strong>Cost:</strong> High-end components can be
                      expensive
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#f87f01]/10 rounded-lg p-4 border-l-4 border-[#f87f01]">
            <p className="text-gray-700 text-sm leading-relaxed">
              <strong>Recommendation:</strong> Choose gravel if you want
              versatility and comfort for mixed terrain adventures. Choose road
              if you prioritize speed and efficiency on paved surfaces. We
              recommend test riding both types to find your perfect match.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "custom-fitting",
      question: "How does SchönMO&apos;s custom fitting process work?",
      category: "fitting",
      answer:
        "Our custom fitting process involves detailed body measurements, riding style analysis, and biomechanical assessment. We use advanced fitting technology to ensure your bike is perfectly tailored to your unique physiology and riding preferences. The process typically takes 2-3 hours and includes multiple test rides with adjustments.",
    },
    {
      id: "frame-materials",
      question:
        "What frame materials do you offer and what are the differences?",
      category: "bikes",
      answer:
        "We offer premium carbon fiber and high-grade aluminum frames. Carbon fiber provides superior vibration damping, lighter weight, and allows for more complex geometries. Aluminum offers excellent durability, responsive handling, and better value. Both materials are engineered to our exacting standards for performance and longevity.",
    },
    {
      id: "delivery-time",
      question:
        "How long does it take to build and deliver a custom SchönMO bike?",
      category: "ordering",
      answer:
        "Custom bike builds typically take 8-12 weeks from order confirmation to delivery. This includes the fitting process, frame manufacturing, component selection and installation, quality testing, and shipping. Rush orders may be available for an additional fee, reducing delivery time to 6-8 weeks.",
    },
    {
      id: "maintenance",
      question: "What maintenance is required for my SchönMO bike?",
      category: "maintenance",
      answer:
        "Regular maintenance includes cleaning after rides, checking tire pressure, lubricating the chain, and periodic professional tune-ups every 6 months or 2000km. We provide a detailed maintenance guide with every bike and offer service packages through our authorized dealers worldwide.",
    },
    {
      id: "warranty-coverage",
      question: "What does the SchönMO warranty cover?",
      category: "warranty",
      answer:
        "Our 2-year warranty covers defects in materials and workmanship. This includes frame integrity, component functionality, and manufacturing defects. Normal wear items, crash damage, and improper maintenance are not covered. Paint and decals have a 1-year warranty. See our full warranty policy for complete details.",
    },
    {
      id: "component-upgrades",
      question: "Can I upgrade components on my SchönMO bike after purchase?",
      category: "customization",
      answer:
        "Absolutely! Our bikes are designed with standard interfaces to accommodate component upgrades. Popular upgrades include wheels, drivetrains, and cockpit components. We recommend consulting with our technical team or authorized dealers to ensure compatibility and optimal performance.",
    },
  ];

  const categories = [
    {
      id: "all",
      name: "All Questions",
      icon: (
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      ),
    },
    {
      id: "technology",
      name: "Technology",
      icon: (
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
    },
    {
      id: "bikes",
      name: "Bikes",
      icon: (
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
    {
      id: "fitting",
      name: "Custom Fitting",
      icon: (
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
    },
    {
      id: "ordering",
      name: "Ordering",
      icon: (
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
          />
        </svg>
      ),
    },
    {
      id: "maintenance",
      name: "Maintenance",
      icon: (
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
    },
    {
      id: "warranty",
      name: "Warranty",
      icon: (
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
    {
      id: "customization",
      name: "Customization",
      icon: (
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM7 21h10a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 002 2z"
          />
        </svg>
      ),
    },
  ];

  const filteredFAQs =
    activeCategory === "all"
      ? faqData
      : faqData.filter((faq) => faq.category === activeCategory);

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
                Knowledge • Support • Expertise
              </p>
              <h1 className="text-3xl md:text-5xl font-bold mb-4 font-racing text-white relative inline-block">
                Frequently Asked{" "}
                <span className="text-[#f87f01]">Questions</span>
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="absolute -bottom-2 left-0 h-1 bg-[#f87f01]"
                ></motion.div>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mt-6">
                Everything you need to know about SchönMO bikes, technology, and
                services
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Category Filter */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      activeCategory === category.id
                        ? "bg-[#f87f01] text-white shadow-lg"
                        : "bg-white text-gray-700 hover:bg-gray-100 shadow-md"
                    }`}
                  >
                    <span className="mr-2">{category.icon}</span>
                    {category.name}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* FAQ Items */}
            <div className="space-y-4">
              {filteredFAQs.map((faq, index) => (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <button
                    onClick={() => toggleItem(faq.id)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </h3>
                    <motion.div
                      animate={{ rotate: openItems.includes(faq.id) ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0"
                    >
                      <svg
                        className="w-5 h-5 text-[#f87f01]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {openItems.includes(faq.id) && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-4 border-t border-gray-100">
                          <div className="pt-4">
                            {typeof faq.answer === "string" ? (
                              <p className="text-gray-700 leading-relaxed">
                                {faq.answer}
                              </p>
                            ) : (
                              faq.answer
                            )}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>

            {/* Contact CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-16 text-center"
            >
              <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-[#f87f01]">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Still have questions?
                </h3>
                <p className="text-gray-700 mb-6">
                  Our team of cycling experts is here to help you find the
                  perfect SchönMO solution.
                </p>
                <div className="flex justify-center">
                  <a
                    href="/company"
                    className="inline-flex items-center justify-center px-6 py-3 bg-[#f87f01] text-white font-medium rounded-lg hover:bg-[#e67000] transition-colors duration-300"
                  >
                    Contact Our Experts
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
