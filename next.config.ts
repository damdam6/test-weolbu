const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin');

const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.weolbu.com'],
  },
};

module.exports = withVanillaExtract(nextConfig);
