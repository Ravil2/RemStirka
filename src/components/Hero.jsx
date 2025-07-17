import Image from 'next/image'
import { PhoneCall, ShieldCheck, Clock, Wrench } from 'lucide-react'
import { CheckCircle2 } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-blue-50 to-white overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-blue-200 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-blue-100 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-20 lg:py-28">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 xl:gap-20">
          {/* Текстовый блок */}
          <div className="w-full lg:w-1/2 space-y-6 md:space-y-8">
            <div className="inline-flex items-center px-3 py-1 text-sm font-medium text-blue-700 bg-blue-100 rounded-full mb-4">
              <ShieldCheck className="w-4 h-4 mr-2" />
              Гарантия качества
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-gray-900">
              <span className="text-blue-600">Ремонт стиральных машин</span> в Алматы с выездом на дом
            </h1>

            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              <strong>RemStirka</strong> — профессиональный сервис по ремонту бытовой техники. 
              Мы устраняем любые неисправности быстро и с гарантией до 2 лет.
            </p>

            {/* Преимущества в виде списка */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              {[
                { icon: <Clock className="w-5 h-5 text-blue-600" />, text: "Выезд в течение 2 часов" },
                { icon: <Wrench className="w-5 h-5 text-blue-600" />, text: "Оригинальные запчасти" },
                { icon: <ShieldCheck className="w-5 h-5 text-blue-600" />, text: "Гарантия до 2 лет" },
                { icon: <PhoneCall className="w-5 h-5 text-blue-600" />, text: "Круглосуточная поддержка" }
              ].map((item, index) => (
                <li key={index} className="flex items-center space-x-2">
                  {item.icon}
                  <span className="text-gray-700">{item.text}</span>
                </li>
              ))}
            </ul>

            {/* Кнопки действий */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a
                href="#request"
                className="inline-flex items-center justify-center px-6 py-4 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-colors shadow-lg"
              >
                <PhoneCall className="w-5 h-5 mr-2" />
                Вызвать мастера
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center px-6 py-4 bg-white text-gray-700 font-medium rounded-xl hover:bg-gray-100 transition-colors border border-gray-200"
              >
                Наши услуги
              </a>
            </div>
          </div>

          {/* Изображение */}
          <div className="w-full lg:w-1/2 relative h-80 md:h-[450px] lg:h-[550px]">
            <Image
              src="/images/icons/human.png"
              alt="Мастер RemStirka ремонтирует стиральную машину"
              fill
              className="object-contain object-center"
              priority
              quality={100}
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Декоративный элемент на изображении */}
            <div className="absolute -bottom-6 -right-6 bg-white px-4 py-3 rounded-lg shadow-md border border-gray-100 hidden lg:block">
              <div className="flex items-center">
                <div className="bg-green-100 p-2 rounded-full mr-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                </div>
                <span className="font-medium">Работаем с 2019 года</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}