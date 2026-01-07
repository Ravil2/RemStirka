/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://remstirka.kz',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  sitemapSize: 7000,
  changefreq: 'weekly',
  priority: 0.8,
  exclude: ['/api/*', '/admin/*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
    ],
    additionalSitemaps: [],
  },
  transform: async (config, path) => {
    // Устанавливаем приоритеты для разных страниц
    let priority = 0.7
    let changefreq = 'monthly'

    if (path === '/') {
      priority = 1.0
      changefreq = 'weekly'
    } else if (path === '/remont-stiralnyh-mashin-almaty') {
      priority = 0.9
      changefreq = 'weekly'
    } else if (path.includes('/privacy') || path.includes('/terms')) {
      priority = 0.3
      changefreq = 'yearly'
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    }
  },
}
