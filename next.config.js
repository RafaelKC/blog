module.exports = {
    trailingSlash: true,
    async redirects() {
        return [ 
            {
            source: '/about/',
            destination: '/sobre/',
            permanent: true,
            }
        ]
    },
    async headers() {
        return [
            {
                source: '/:path*',
                headers: [
                    {
                        key: 'X-Frame-Options',
                        value: 'DENY',
                    }
                ]

            }
        ]
    },
}