'use client'

import Image from 'next/image'

export default function Brands() {
  const brands = [
    { name: 'Samsung', logo: '/images/brands/samsung.webp' },
    { name: 'LG', logo: '/images/brands/lg.png' },
    { name: 'Bosch', logo: '/images/brands/bosh.png' },
    { name: 'Whirlpool', logo: '/images/brands/whirpool.png' },
    { name: 'Electrolux', logo: '/images/brands/electrolux.png' },
    { name: 'Indesit', logo: '/images/brands/indesit.png' },
    { name: 'Beko', logo: '/images/brands/beko.webp' },
    { name: 'Ariston', logo: '/images/brands/ariston.png' },
  ]

  const brandListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Популярные бренды стиральных машин',
    description: 'Бренды стиральных машин, которые мы ремонтируем в Алматы',
    itemListElement: brands.map((brand, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Brand',
        name: brand.name,
      },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(brandListSchema) }}
      />

      <section
        id="brands"
        className="py-12 md:py-16 bg-gray-50"
        aria-label="Бренды стиральных машин"
      >

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-medium text-gray-900">
              Работаем со всеми{' '}
              <span className="text-blue-600">популярными брендами</span>
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-gray-600">
              Официальные запчасти и сертифицированные специалисты для вашей
              техники
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="cursor-pointer bg-white p-4 md:p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 flex items-center justify-center"
              >
                <div className="relative w-full h-12 md:h-16">
                  <Image
                    src={brand.logo}
                    alt={`Логотип бренда ${brand.name} - ремонт стиральных машин ${brand.name} в Алматы`}
                    className="object-contain object-center"
                    loading="lazy"
                    width={120}
                    height={60}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600">
              Не нашли свой бренд?{' '}
              <a
                href="#contact"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Уточните у нашего специалиста
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
