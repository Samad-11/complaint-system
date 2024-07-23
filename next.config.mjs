/** @type {import('next').NextConfig} */

import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
  dest: "public",
});
const nextConfig = {};

export default withPWA({
  images: {
    remotePatterns: [{ hostname: "upload.wikimedia.org" }],
  },
});

// export default nextConfig;
