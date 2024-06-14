// next.config.js
module.exports = {
    // experimental: {
    //     missingSuspenseWithCSRBailout: false,
    // },
    // typescript: {
    //     // !! WARN !!
    //     // Dangerously allow production builds to successfully complete even if
    //     // your project has type errors.
    //     // !! WARN !!
    //     ignoreBuildErrors: true,
    // },


    images: {
        domains: ['backend-airbnb-production.up.railway.app'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'backend-airbnb-production.up.railway.app',
                port: '',
                pathname: '/media/uploads/**',
            },
        ],
    },

};
