// next.config.js
export default {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/:path*', // Matches all paths
        has: [
          {
            type: 'host',
            value: 'www.ideax.in', // Your domain with www
          },
        ],
        destination: 'https://ideax.in/:path*', // Redirects to the non-www version with the same path
        permanent: true, // Indicates a 301 permanent redirect
      },
    ];
  },
};
