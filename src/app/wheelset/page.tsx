'use client';

import {
  WheelsetHero,
  RAD35Section,
  RAD45Section,
  WheelsetSpecs,
  OrderRequest
} from '@/components/wheelset';

export default function WheelsetPage() {
  return (
    <>
      <WheelsetHero />
      <RAD35Section />
      <RAD45Section />
      <WheelsetSpecs />
      <OrderRequest />
    </>
  );
} 