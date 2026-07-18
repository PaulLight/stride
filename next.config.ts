import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "magento.test",
                pathname: "/media/**",
            },
        ],
        dangerouslyAllowLocalIP: process.env.NODE_ENV === "development",
    },
};

export default nextConfig;
