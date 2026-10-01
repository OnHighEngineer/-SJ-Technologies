const fs = require("fs");

const content = `import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
`;

fs.writeFileSync("next.config.ts", content, "utf8");
console.log("next.config.ts updated with clean Vercel configuration");
