'use client'

import TermsOfService from '@/components/TermsOfUse'
import dynamic from 'next/dynamic'

const Seo = dynamic(() => import('@/components/Seo'), { ssr: false })

export default function TermsPage() {
  return (
    <>
      <Seo
        title="Пользовательское соглашение | Ремстирка"
        description="Правила пользования сервисом Ремстирка."
      />
      <TermsOfService />
    </>
  )
}
