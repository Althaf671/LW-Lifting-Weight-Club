import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  turbopack: {
    root: __dirname,
  },
  // swcMinify: true,
  images: {
    domains: [
      "res.cloudinary.com",
      "lh3.googleusercontent.com",
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
