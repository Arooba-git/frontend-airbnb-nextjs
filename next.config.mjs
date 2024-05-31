/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
        // Ignore build errors
        ignoreBuildErrors: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '8000',
                pathname: '/**'
            }
        ]
    }

    // next.config.js
}

export default nextConfig;
