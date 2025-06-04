'use client';

import {
  GravelHero,
  GravelGallery,
  BikeShowcase,
  TechnicalSpecs,
  Customizer
} from '@/components/bikes';
import { useEffect } from 'react';

// Create CSS module style with enhanced mobile responsiveness
const mobileStyles = `
  @media (max-width: 767px) {
    /* Layout and spacing adjustments */
    .mobile-responsive .py-24 {
      padding-top: 3rem;
      padding-bottom: 3rem;
    }
    
    .mobile-responsive .py-20 {
      padding-top: 2.5rem;
      padding-bottom: 2.5rem;
    }

    .mobile-responsive .gap-16 {
      gap: 1.5rem;
    }
    
    .mobile-responsive .gap-8 {
      gap: 1rem;
    }
    
    .mobile-responsive .space-y-8 > * {
      margin-top: 1.25rem;
      margin-bottom: 1.25rem;
    }
    
    /* Typography adjustments */
    .mobile-responsive .text-5xl {
      font-size: 2.25rem;
      line-height: 1.2;
    }
    
    .mobile-responsive .text-4xl {
      font-size: 1.875rem;
      line-height: 1.2;
    }
    
    .mobile-responsive .text-3xl {
      font-size: 1.5rem;
    }
    
    .mobile-responsive .text-2xl {
      font-size: 1.25rem;
    }
    
    .mobile-responsive .text-xl {
      font-size: 1.125rem;
    }
    
    /* Form elements */
    .mobile-responsive input, 
    .mobile-responsive select, 
    .mobile-responsive textarea {
      font-size: 16px; /* Prevents iOS zoom on focus */
    }
    
    /* Container adjustments */
    .mobile-responsive .container {
      padding-left: 1rem;
      padding-right: 1rem;
    }
    
    /* Section height adjustments */
    .mobile-responsive .h-screen {
      height: auto;
      min-height: 100vh;
    }
    
    /* Button adjustments */
    .mobile-responsive button {
      touch-action: manipulation;
    }
    
    /* Grid adjustments */
    .mobile-responsive .grid-cols-2,
    .mobile-responsive .grid-cols-3 {
      grid-template-columns: 1fr;
    }
    
    /* Fix for overflow issues */
    .mobile-responsive .overflow-x-hidden {
      width: 100%;
      position: relative;
    }
    
    /* Image sizing */
    .mobile-responsive img {
      max-width: 100%;
      height: auto;
    }
    
    /* Video container sizing */
    .mobile-responsive video {
      max-width: 100%;
      height: auto;
    }
  }
  
  /* Small phone adjustments */
  @media (max-width: 374px) {
    .mobile-responsive .text-5xl {
      font-size: 1.875rem;
    }
    
    .mobile-responsive .text-4xl {
      font-size: 1.5rem;
    }
    
    .mobile-responsive .text-2xl {
      font-size: 1.125rem;
    }
    
    .mobile-responsive .py-24 {
      padding-top: 2rem;
      padding-bottom: 2rem;
    }
  }
  
  /* Tablet specific adjustments */
  @media (min-width: 768px) and (max-width: 1023px) {
    .mobile-responsive .py-24 {
      padding-top: 4rem;
      padding-bottom: 4rem;
    }
    
    .mobile-responsive .grid-cols-3 {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  
  /* Handle orientation changes */
  @media (orientation: landscape) and (max-height: 500px) {
    .mobile-responsive .h-screen {
      height: auto;
      min-height: 500px;
    }
  }
`;

export default function GravelBikePage() {
  // Add viewport meta tag and mobile styles to ensure proper mobile rendering
  useEffect(() => {
    // Ensure viewport meta tag is set for responsive design
    const viewportMeta = document.querySelector('meta[name="viewport"]');
    if (!viewportMeta) {
      const meta = document.createElement('meta');
      meta.name = 'viewport';
      meta.content = 'width=device-width, initial-scale=1, maximum-scale=5, user-scalable=1';
      document.head.appendChild(meta);
    } else {
      // Use type assertion to handle the content property
      const metaElement = viewportMeta as HTMLMetaElement;
      if (!metaElement.content.includes('width=device-width')) {
        metaElement.content = 'width=device-width, initial-scale=1, maximum-scale=5, user-scalable=1';
      }
    }
    
    // Inject mobile-specific styles
    if (!document.getElementById('mobile-responsive-styles')) {
      const styleElement = document.createElement('style');
      styleElement.id = 'mobile-responsive-styles';
      styleElement.textContent = mobileStyles;
      document.head.appendChild(styleElement);
    }
    
    // Add responsive class to body for mobile optimizations
    document.body.classList.add('mobile-responsive');
    
    // Handle touch events better on mobile
    document.addEventListener('touchstart', function() {}, {passive: true});
    
    return () => {
      document.body.classList.remove('mobile-responsive');
      const styleElement = document.getElementById('mobile-responsive-styles');
      if (styleElement) {
        styleElement.remove();
      }
    };
  }, []);

  return (
    <div className="endurance-bike-page overflow-x-hidden">
      <GravelHero />
      <GravelGallery />
      <BikeShowcase />
      <TechnicalSpecs />
      <Customizer />
    </div>
  );
} 