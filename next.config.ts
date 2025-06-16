import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      'images.unsplash.com', 
      'plus.unsplash.com',
      'encrypted-tbn2.gstatic.com',
      'encrypted-tbn3.gstatic.com', 
      'lh3.googleusercontent.com'
    ],
  },
  env: {
    EMAIL_USER: process.env.EMAIL_USER,
    EMAIL_APP_PASSWORD: process.env.EMAIL_APP_PASSWORD,
  },
  // Ensure API routes work properly on Amplify
  serverExternalPackages: ['nodemailer'],
};

export default nextConfig;
