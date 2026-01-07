/** @type {import('next').NextConfig} */
const nextConfig = {
  siteUrl: 'https://remstirka.kz',
  
  // Оптимизация изображений
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Оптимизация производительности
  compress: true,
  poweredByHeader: false,
  
  // Headers для SEO и безопасности
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ]
  },

  async redirects() {
    return [
      {
        // кириллица в URL-encoded виде
        source:
          '/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%81%D1%82%D0%B8%D1%80%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D1%85-%D0%BC%D0%B0%D1%88%D0%B8%D0%BD-%D0%B0%D0%BB%D0%BC%D0%B0%D1%82%D1%8B',
        destination: '/remont-stiralnyh-mashin-almaty',
        permanent: true,
      },
      {
        source:
          '/%D0%BF%D0%BE%D0%BB%D0%B8%D1%82%D0%B8%D0%BA%D0%B0-%D0%BA%D0%BE%D0%BD%D1%84%D0%B8%D0%B4%D0%B5%D0%BD%D1%86%D0%B8%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D1%81%D1%82%D0%B8',
        destination: '/privacy',
        permanent: true,
      },
      {
        source:
          '/%D1%83%D1%81%D0%BB%D0%BE%D0%B2%D0%B8%D1%8F-%D0%B8%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F',
        destination: '/terms',
        permanent: true,
      },
      // Редиректы для старых URL
      {
        source: '/privacy-policy',
        destination: '/privacy',
        permanent: true,
      },
      {
        source: '/terms-of-use',
        destination: '/terms',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
