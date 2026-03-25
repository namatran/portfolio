import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    // Strict mode catches subtle React bugs in dev
    reactStrictMode: true,

    images: {
        // Add external image domains here as you need them.
        // e.g. TMDB posters when you pull in real project screenshots
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'image.tmdb.org',
            },
        ],
    },
};

export default nextConfig;