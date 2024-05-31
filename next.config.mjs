// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     typescript: {
//         // Ignore build errors
//         ignoreBuildErrors: true,
//     },
//     images: {
//         remotePatterns: [
//             {
//                 protocol: 'https',
//                 hostname: '0.0.0.0',
//                 port: process.env.PORT || '8000',
//                 pathname: '/**'
//             }
//         ]
//     }

//     // next.config.js
// }

// export default nextConfig;

module.exports = {
    server: {
        host: '0.0.0.0',
        port: process.env.PORT || 3000,
    },
};
