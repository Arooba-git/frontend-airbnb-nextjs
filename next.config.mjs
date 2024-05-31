/** @type {import('next').NextConfig} */
const nextConfig = {
    // typescript: {
    //     // Ignore build errors
    //     ignoreBuildErrors: true,
    // },
    // images: {
    //     remotePatterns: [
    //         {
    //             protocol: 'https',
    //             hostname: '0.0.0.0',
    //             port: process.env.PORT || '8000',
    //             pathname: '/**'
    //         }
    //     ]
    // }

    server: {
        host: '0.0.0.0',
        port: process.env.PORT || 3000,
    },

    // next.config.js
}

export default nextConfig;
