'use client';

import {
  GravelHero,
  GravelGallery,
  BikeShowcase,
  TechnicalSpecs,
  Customizer
} from '@/components/bikes';

export default function GravelBikePage() {
  return (
    <>
      <GravelHero />
      <GravelGallery />
      <BikeShowcase />
      <TechnicalSpecs />
      <Customizer />
    </>
  );
} 