import Brands from '@/components/Brands'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import ServicesList from '@/components/ServicesList'

export default function page() {
  return (
    <div>
      <Hero />
      <Brands />
      <Services />
      <ServicesList />
    </div>
  )
}
