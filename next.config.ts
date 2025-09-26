import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  /*allowedDevOrigins: [
    "http://localhost:3001",
    "http://10.48.55.191",
    "10.68.200.190",
  ],*/
  reactStrictMode: true,
  turbopack: {
    root: __dirname,
  },
  // swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },
  /* i18n: {
    locales: ["eng", "id"],
    defaultLocale: "eng"
  },*/
  /* async redirects() {
    return []; // I will config later
  } */
};

export default nextConfig;
