import Image from 'next/image'
import React from 'react'

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden border-b border-gray-300"
      aria-labelledby="hero-title"
    >
      <div className="container mx-auto px-4 py-8 md:py-12 lg:py-15 xl:py-15">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="w-full lg:w-1/2 space-y-4 md:space-y-6 lg:space-y-8 flex flex-col">
            <div>
              <h1
                id="hero-title"
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-snug md:leading-tight"
              >
                Профессиональный ремонт стиральных машин в Алматы
              </h1>

              <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed mt-4 md:mt-6">
                Добро пожаловать в <strong>RemStirka</strong> — ваш надежный
                сервис по ремонту бытовой техники, специализирующийся на
                стиральных машинах. Наша команда предлагает быстрый и
                качественный ремонт с гарантией.
              </p>
            </div>

            <a
              href="#request"
              className="w-full items-center text-center md:w-auto bg-black text-white py-3 px-6 rounded-xl cursor-pointer hover:bg-gray-800 transition-all mt-6 md:mt-0 self-start"
              aria-label="Оставить заявку на ремонт стиральной машины"
            >
              Оставить заявку
            </a>
          </div>

          <div className="hidden lg:block w-full lg:w-1/2 relative h-64 md:h-80 lg:h-96 xl:h-[500px]">
            <Image
              src="/images/icons/human.png"
              alt="Мастер по ремонту стиральных машин RemStirka в Алматы"
              fill
              className="object-contain object-center"
              priority
              sizes="50vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
