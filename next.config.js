const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      'styled-components': path.resolve(
        __dirname,
        'node_modules/styled-components'
      ),
      react: path.resolve(__dirname, 'node_modules/react')
    }

    return config
  }
}

module.exports = nextConfig
