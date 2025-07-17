import {
  Wrench,
  Settings,
  ClipboardCheck,
  Home,
  Clock,
  ShieldCheck,
  Hammer,
  Zap,
  CheckCircle2,
  PhoneCall,
} from 'lucide-react'
import Image from 'next/image'

const services = [
  {
    id: 1,
    title: 'Диагностика',
    description:
      'Точное выявление неисправностей с помощью профессионального оборудования',
    icon: <ClipboardCheck className="w-8 h-8 text-blue-600" />,
    highlight: 'от 30 мин',
  },
  {
    id: 2,
    title: 'Ремонт',
    description: 'Качественный ремонт любой сложности с гарантией на работы',
    icon: <Wrench className="w-8 h-8 text-blue-600" />,
    highlight: 'гарантия 2 года',
  },
  {
    id: 3,
    title: 'Обслуживание',
    description: 'Профилактические работы для продления срока службы техники',
    icon: <Settings className="w-8 h-8 text-blue-600" />,
    highlight: '+40% к сроку службы',
  },
  {
    id: 4,
    title: 'Установка',
    description: 'Профессиональный монтаж и настройка бытовой техники',
    icon: <Home className="w-8 h-8 text-blue-600" />,
    highlight: 'бесплатный выезд',
  },
]

export default function Services() {
  return (
    <section id='about' className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Заголовок */}
      <div className="text-center mb-16">
        <span className="inline-flex items-center px-3 py-1 text-sm font-medium text-blue-700 bg-blue-100 rounded-full mb-4">
          <Zap className="w-4 h-4 mr-1" />
          Наш сервис
        </span>
        <h1 className="text-3xl sm:text-4xl font-medium text-gray-900 mb-4">
          Профессиональный <span className="text-blue-600">ремонт техники</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Полный спектр услуг с гарантией качества и использованием оригинальных
          запчастей
        </p>
      </div>

      {/* Герой-блок */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
        <div className="relative h-80 md:h-96 rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/images/icons/service.png"
            alt="Мастер ремонтирует технику"
            fill
            className="object-contain"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent" />
          <div className="absolute bottom-8 left-8 right-8 text-white">
            <div className="bg-blue-600/90 backdrop-blur px-4 py-3 rounded-lg inline-flex items-center">
              <ShieldCheck className="w-5 h-5 mr-2" />
              <h3 className="text-xl font-medium cursor-pointer">
                Гарантия качества
              </h3>
            </div>
          </div>
        </div>

        {/* Преимущества */}
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-2xl font-medium text-gray-900 mb-6 flex items-center">
            <Hammer className="w-6 h-6 text-blue-600 mr-2" />
            <span>Наши преимущества</span>
          </h2>
          <ul className="space-y-4">
            {[
              'Опытные мастера с профильным образованием',
              'Оригинальные запчасти от производителей',
              'Гарантия до 2 лет на выполненные работы',
              'Выезд мастера в день обращения',
              'Честные цены без скрытых платежей',
              'Диагностика при клиенте',
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle2 className="flex-shrink-0 h-5 w-5 text-blue-500 mr-3 mt-0.5" />
                <p className="text-gray-700">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Услуги */}
      <div className="mb-20">
        <h2 className="text-2xl font-medium text-center text-gray-900 mb-12 flex justify-center items-center">
          <Settings className="w-6 h-6 text-blue-600 mr-2" />
          Наши услуги
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 group hover:border-blue-100"
            >
              <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-4 bg-blue-50 group-hover:bg-blue-100 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <span className="inline-flex items-center px-3 py-1 text-xs font-medium text-blue-700 bg-blue-100 rounded-full">
                {service.highlight}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div id='contact' className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 md:p-12 text-center text-white">
        <div className="max-w-2xl mx-auto">
          <PhoneCall className="w-10 h-10 mx-auto mb-4 text-blue-200" />
          <h3 className="text-2xl md:text-3xl font-medium mb-4">
            Нужна помощь с техникой?
          </h3>
          <p className="text-blue-100 mb-6">
            Оставьте заявку и наш мастер приедет к вам в течение 2 часов для
            бесплатной диагностики
          </p>
          <button className="cursor-pointer inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors shadow-md">
            <PhoneCall className="w-5 h-5 mr-2 " />
            Вызвать мастера
          </button>
        </div>
      </div>
    </section>
  )
}
