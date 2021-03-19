module.exports = {
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: 'https://internship-recipe-api.ckpd.co/:path*',
      },
    ]
  },
  env: {
    API_KEY: process.env.API_KEY,
  },
}
