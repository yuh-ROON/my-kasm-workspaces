/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'My KASM Workspaces',
    description: 'My Kasm supported workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://github.com/yuh-ROON/my-kasm-workspaces/',
    contactUrl: 'https://github.com/yuh-ROON/my-kasm-workspaces/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/my-kasm-workspaces/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
