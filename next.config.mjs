/** @type {import('next').NextConfig} */
const nextConfig = {
  crossOrigin: "anonymous",
  // output: "export",
  images: {
    loader: "custom",
    loaderFile: "./loader.js",
  },
};

export default nextConfig;
