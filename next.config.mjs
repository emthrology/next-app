/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        // https://cdn.pixabay.com/user/2016/03/26/22-06-36-459_250x250.jpg
        protocol: "https",
        hostname: "cdn.pixabay.com",
        port: "",
        // pathname: "/account123/**",
        search: "",
      },
    ],
  },
};

export default nextConfig;
