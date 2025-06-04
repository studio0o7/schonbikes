import { Metadata } from 'next';
import { SaddleHero, VitruFitSection, SaddleSpecs, SaddleOrder } from '@/components/saddles';

export const metadata: Metadata = {
  title: 'VitruFit Saddles | SchönMO',
  description: 'Premium ergonomic saddles designed for maximum comfort and performance. Our VitruFit saddle series is available in S, M, and L sizes to accommodate all riders.',
};

export default function SaddlesPage() {
  return (
    <main className="min-h-screen">
      <SaddleHero />
      <VitruFitSection />
      <SaddleSpecs />
      <SaddleOrder />
    </main>
  );
} 