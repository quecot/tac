/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['ca'],
    defaultLocale: 'ca',
  },
};

module.exports = nextConfig;
