"use client";

import HeroSection from '@/components/framesets/HeroSection';
import GeometrySection from '@/components/framesets/GeometrySection';
import DesignDetailsSection from '@/components/framesets/DesignDetailsSection';
import SpecificationsSection from '@/components/framesets/SpecificationsSection';
import OrderRequestSection from '@/components/framesets/OrderRequestSection';

export default function Framesets() {
  return (
    <main className="pt-0 pb-16 sm:pb-20 md:pb-24">
      <HeroSection />
      <GeometrySection />
      <DesignDetailsSection />
      <SpecificationsSection />
      <OrderRequestSection />
    </main>
  );
} 