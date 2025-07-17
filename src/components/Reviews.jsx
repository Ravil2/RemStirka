'use client'
import { Phone } from 'lucide-react'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { useState } from 'react'

export default function Reviews() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const reviews = [
    {
      id: 1,
      name: 'Алия Нургазинова',
      rating: 5,
      date: '15 мая 2024',
      text: 'Мастер приехал через час после звонка, быстро диагностировал проблему и починил стиральную машину. Все объяснил, дал гарантию на работу. Очень вежливый и профессиональный сервис!',
      location: 'Алматы, мкр. Коктем-2',
    },
    {
      id: 2,
      name: 'Арман Жунусов',
      rating: 5,
      date: '3 июня 2024',
      text: 'Ребята спасли нашу стиральную машину Bosch, которая перестала отжимать. Сначала обращались в другой сервис - не смогли помочь. Здесь же все починили за один визит, запчасти оригинальные. Рекомендую!',
      location: 'Алматы, ул. Наурызбай батыра',
    },
    {
      id: 3,
      name: 'Елена Петрова',
      rating: 4,
      date: '22 апреля 2024',
      text: 'Хороший сервис, но пришлось ждать мастера почти 3 часа (хотя обещали в течение часа). Зато ремонт качественный, уже месяц работает без нареканий. Цены адекватные для Алматы.',
      location: 'Алматы, мкр. Айнабулак',
    },
    {
      id: 4,
      name: 'Дамир Каримов',
      rating: 5,
      date: '10 июня 2024',
      text: 'Лучший сервис по ремонту техники в Алматы! Чинили сложную поломку в стиральной машине LG - в других местах сразу говорили, что проще новую купить. Здесь нашли решение и сделали все за разумные деньги.',
      location: 'Алматы, ул. Толе би',
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === reviews.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? reviews.length - 1 : prev - 1))
  }

  return (
    <section id='reviews' className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-medium text-gray-900 mb-4">
            Отзывы наших <span className="text-blue-600">клиентов</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Что говорят люди о качестве нашего сервиса
          </p>
        </div>

        <div className="relative">
          {/* Отзывы */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.slice(currentSlide, currentSlide + 3).map((review) => (
              <div
                key={review.id}
                className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all"
              >
                <div className="flex items-center mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < review.rating
                            ? 'text-yellow-400 fill-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500 ml-2">
                    {review.date}
                  </span>
                </div>

                <Quote className="w-6 h-6 text-blue-200 mb-3" />

                <p className="text-gray-700 mb-4 italic">"{review.text}"</p>

                <div className="mt-auto">
                  <p className="font-medium text-gray-900">{review.name}</p>
                  <p className="text-sm text-gray-500">{review.location}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Навигация */}
          <div className="flex justify-center mt-10 space-x-4">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-white border border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors"
              aria-label="Предыдущий отзыв"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-white border border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors"
              aria-label="Следующий отзыв"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Кнопка CTA */}
        <div className="text-center mt-14">
          <a
            href="#request"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-md"
          >
            <Phone className="w-5 h-5 mr-2" />
            Оставить свой отзыв
          </a>
        </div>
      </div>
    </section>
  )
}
