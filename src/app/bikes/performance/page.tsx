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
    <main className="min-h-screen flex flex-col">
      <PerformanceHero />
      <PerformanceGallery />
      <PerformanceShowcase />
      <PerformanceSpecs />
      <PerformanceCustomizer />
    </main>
  );
} 