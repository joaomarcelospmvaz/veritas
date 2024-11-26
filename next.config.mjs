import { hostname } from 'os';

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
       { hostname: 'static.canva.com'},
       { hostname: 'www.veritass.com.br'},
      ],
    }
};

export default nextConfig;
