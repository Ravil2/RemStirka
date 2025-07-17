'use client'

import Head from 'next/head'

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Политика конфиденциальности | Remstirka.kz</title>
        <meta
          name="description"
          content="Узнайте, как Remstirka.kz собирает, использует и защищает ваши персональные данные. Политика конфиденциальности сайта."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://remstirka.kz/privacy-policy" />
      </Head>

      <section className="max-w-3xl mx-auto px-4 py-12 text-gray-800">
        <h1 className="text-3xl font-bold mb-6 mt-15">Политика конфиденциальности</h1>
        <p className="mb-4">
          Настоящая политика конфиденциальности объясняет, как сайт{' '}
          <strong>remstirka.kz</strong> собирает, использует и защищает
          персональные данные пользователей при оказании услуг по ремонту
          стиральных машин.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          1. Какие данные мы собираем
        </h2>
        <p className="mb-4">
          Мы собираем только те данные, которые вы добровольно предоставляете
          при оформлении заявки на ремонт:
        </p>
        <ul className="list-disc ml-6 mt-2">
          <li>Имя</li>
          <li>Номер телефона</li>
          <li>Информацию о проблеме со стиральной машинкой</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          2. Цели сбора данных
        </h2>
        <p className="mb-4">
          Мы используем ваши данные исключительно для связи с вами, уточнения
          информации по заявке и оказания услуг по ремонту стиральных машин в
          Алматы и других регионах.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          3. Передача данных третьим лицам
        </h2>
        <p className="mb-4">
          Мы не передаём ваши персональные данные третьим лицам, за исключением
          случаев, предусмотренных законодательством Республики Казахстан.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">4. Безопасность</h2>
        <p className="mb-4">
          Мы принимаем разумные меры для защиты ваших данных от
          несанкционированного доступа, утраты и раскрытия. Защита персональных
          данных — наш приоритет.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">5. Ваши права</h2>
        <p className="mb-4">
          Вы можете запросить удаление или изменение своих персональных данных,
          обратившись к нам по контактам ниже. Мы уважаем ваше право на
          конфиденциальность.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          6. Контактная информация
        </h2>
        <p className="mb-2">Если у вас возникли вопросы, свяжитесь с нами:</p>
        <ul className="list-disc ml-6">
          <li>Телефон: +7 747 700 08 71</li>
          <li>Email: remstirka.kz@mail.ru</li>
        </ul>

        <p className="mt-6 text-sm text-gray-500">
          Используя сайт remstirka.kz, вы соглашаетесь с данной политикой
          конфиденциальности. Мы ценим вашу доверие и соблюдаем нормы обработки
          персональных данных.
        </p>
      </section>
    </>
  )
}
