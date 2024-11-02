// next.config.js
export default {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.ideax.in',
          },
        ],
        destination: 'https://ideax.in/:path*',
        permanent: true,
      },
    ];
  },
};