import Brands from '@/components/Brands'
import Hero from '@/components/Hero'
import Reviews from '@/components/Reviews'
import Services from '@/components/Services'
import ServicesList from '@/components/ServicesList'

export default function page() {
  return (
    <div>
      <Hero />
      <Brands />
      <Services />
      <ServicesList />
      <Reviews />
    </div>
  )
}
