/** @type {import('next').NextConfig} */
const nextConfig = {
    swcMinify: true,
    images: {
        domains: ['images.unsplash.com'],
        unoptimized: true, // not needed in static
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
        },
        optimizeCss: true,
        modularizeImports: {
            'react': {
                transform: 'react/{{member}}'
            }
        },
    },
    // not needed in static
    compress: false,
    poweredByHeader: false,
    generateEtags: false,
};

export default nextConfig;
