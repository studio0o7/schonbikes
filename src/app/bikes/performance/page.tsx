'use client';

import {
  PerformanceHero,
  PerformanceGallery,
  PerformanceShowcase,
  PerformanceSpecs,
  PerformanceCustomizer
} from '@/components/bikes';

export default function PerformanceBikePage() {
  return (
    <>
      <PerformanceHero />
      <PerformanceGallery />
      <PerformanceShowcase />
      <PerformanceSpecs />
      <PerformanceCustomizer />
    </>
  );
} 