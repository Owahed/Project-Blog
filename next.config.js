/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["sangw.in", "localhost", "picsum.photos"],
  },
};
// module.exports = {
//   images: {
//     domains: ["images.unsplash.com"],
//   },
// };

module.exports = nextConfig;
