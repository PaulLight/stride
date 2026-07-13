import { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'magento.test',
                pathname: '/media/***'
            }
        ]
    }
}

export default nextConfig;
