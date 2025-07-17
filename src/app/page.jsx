import Brands from '@/components/Brands'
import Hero from '@/components/Hero'
import Reviews from '@/components/Reviews'
import Services from '@/components/Services'
import ServicesList from '@/components/ServicesList'

export const metadata = {
  title: 'Ремонт стиральных машин в Алматы — remstirka.kz',
  description:
    'Профессиональный ремонт стиральных машин в Алматы. Быстро, качественно и с гарантией. Оставьте заявку на сайте remstirka.kz!',
  alternates: {
    canonical: 'https://remstirka.kz/',
  },
  openGraph: {
    title: 'Ремонт стиральных машин в Алматы — remstirka.kz',
    description:
      'Профессиональный ремонт стиральных машин с гарантией. Выезд мастера в день обращения.',
    url: 'https://remstirka.kz/',
    siteName: 'remstirka.kz',
    locale: 'ru_RU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ремонт стиральных машин в Алматы — remstirka.kz',
    description:
      'Оперативный ремонт стиральных машин в Алматы. Оставьте заявку онлайн!',
  },
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Brands />
      <Services />
      <ServicesList />
      <Reviews />
    </>
  )
}
