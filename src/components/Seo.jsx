import { NextSeo } from 'next-seo'

export default function Seo({ title, description }) {
  return <NextSeo title={title} description={description} />
}
