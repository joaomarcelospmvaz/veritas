/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
       { hostname: 'static.canva.com'},
       { hostname: 'www.veritass.com.br'},
       { hostname: 'i.ibb.co'},
      ],
    }
};

export default nextConfig;
