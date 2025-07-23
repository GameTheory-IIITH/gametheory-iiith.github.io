/** @type {import('next').NextConfig} */
const nextConfig = {
    swcMinify: true,
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.jsdelivr.net', // Or your actual CDN hostname
                port: '',
                pathname: '/**', // Or a more specific path if you want
            },
        ],
    },
    output: "export", // static
    reactStrictMode: false, // only in development
    typescript: {
        ignoreBuildErrors: true, // only in development
    },
    experimental: {
        // Enable build cache
        turbotrace: {
            enabled: true,
        }
    },
    // not needed in static
    compress: false,
    poweredByHeader: false,
    generateEtags: false,
};

export default nextConfig;
