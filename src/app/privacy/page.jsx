'use client'
import PrivacyPolicy from '@/components/PrivacyPolicy'
import dynamic from 'next/dynamic'
const Seo = dynamic(() => import('@/components/Seo'), { ssr: false })

export default function PrivacyPage() {
  return (
    <>
      <Seo
        title="Политика конфиденциальности | Ремстирка"
        description="Ознакомьтесь с политикой конфиденциальности сайта Ремстирка."
      />
      <PrivacyPolicy />
    </>
  )
}
