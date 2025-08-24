'use client'

import { useEffect } from 'react'

export default function TermsOfUse() {
  useEffect(() => {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.innerHTML = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Пользовательское соглашение',
      url: 'https://remstirka.kz/terms',
      description:
        'Пользовательское соглашение сайта remstirka.kz, регулирующее условия использования, права и обязанности сторон, отказ от ответственности и изменения условий.',
      inLanguage: 'ru',
      mainEntity: {
        '@type': 'Organization',
        name: 'RemStirka',
        url: 'https://remstirka.kz',
        logo: 'https://remstirka.kz/logo.png',
      },
    })
    document.head.appendChild(script)
    return () => {
      document.head.removeChild(script)
    }
  }, [])

  return (
    <section className="max-w-3xl mx-auto px-4 py-12 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 mt-15">
        Пользовательское соглашение
      </h1>
      <p className="mb-4">
        Настоящее Пользовательское соглашение регулирует отношения между
        пользователем и сайтом <strong>remstirka.kz</strong>. Посещая сайт, вы
        соглашаетесь с условиями данного соглашения.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. Общие положения</h2>
      <p className="mb-4">
        Сайт предоставляет информацию об услугах по ремонту стиральных машин в
        городе Алматы. Все данные на сайте носят информационный характер.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        2. Права и обязанности сторон
      </h2>
      <p className="mb-2 font-semibold">Пользователь обязуется:</p>
      <ul className="list-disc ml-6 mb-4">
        <li>Указывать достоверные данные при заполнении заявки</li>
        <li>Не использовать сайт в противоправных целях</li>
      </ul>

      <p className="mb-2 font-semibold">Администрация сайта обязуется:</p>
      <ul className="list-disc ml-6 mb-4">
        <li>Обеспечить работу сайта</li>
        <li>Обрабатывать заявки в разумные сроки</li>
        <li>Сохранять конфиденциальность предоставленных данных</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        3. Отказ от ответственности
      </h2>
      <p className="mb-4">
        Администрация сайта не несет ответственности за возможные убытки,
        возникшие в результате использования или невозможности использования
        сайта.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Изменения условий</h2>
      <p className="mb-4">
        Мы оставляем за собой право изменять данное соглашение. Актуальная
        версия всегда доступна на сайте.
      </p>

      <p className="mt-6 text-sm text-gray-500">
        Если вы не согласны с условиями, пожалуйста, прекратите использование
        сайта remstirka.kz.
      </p>
    </section>
  )
}
