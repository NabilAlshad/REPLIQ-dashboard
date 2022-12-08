/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["fakestoreapi.com"],
    formats: ["image/webp"],
},
}

module.exports = nextConfig
