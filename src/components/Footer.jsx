import {
  MessageSquareCode,
  MessageSquareText,
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
} from 'lucide-react'

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-gray-900 text-white pt-16 pb-8"
      aria-label="Контактная информация и форма обратной связи"
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Лого и описание */}
          <div className="space-y-4">
            <div className="flex items-center">
              <MessageCircle
                className="w-8 h-8 text-blue-400 mr-2"
                aria-hidden="true"
              />
              <span className="text-2xl font-bold">
                Rem<span className="text-blue-400">Stirka</span>
              </span>
            </div>
            <p className="text-gray-400">
              Профессиональный ремонт стиральных машин в Алматы с гарантией
              качества и выездом на дом.
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href="https://wa.me/77477000871"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors"
                title="Написать сообщение в WhatsApp"
                aria-label="Написать сообщение в WhatsApp"
              >
                <MessageSquareText className="w-5 h-5" />
              </a>
              <a
                href="tel:+77477000871"
                className="text-gray-400 hover:text-white transition-colors"
                title="Позвонить"
                aria-label="Позвонить"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Контакты */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone className="w-5 h-5 text-blue-400 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">Телефон</p>
                  <a
                    href="tel:+77477000871"
                    className="hover:text-blue-400 transition-colors"
                  >
                    +7 747 700 08 71
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 text-blue-400 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">Email</p>
                  <a
                    href="mailto:remstirka.kz@mail.ru"
                    className="hover:text-blue-400 transition-colors"
                  >
                    remstirka.kz@mail.ru
                  </a>
                </div>
              </li>

              <li className="flex items-start">
                <Clock className="w-5 h-5 text-blue-400 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">График работы</p>
                  <p>Ежедневно: 8:00 - 18:00</p>
                </div>
              </li>
              <li className="flex items-start">
                <MessageSquareCode className="w-5 h-5 text-blue-400 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">Разработчик сайта</p>
                  <p>
                    Y. Ravil |
                    <a
                      className="text-blue-400 pl-1"
                      target="_blank"
                      href="https://t.me/Zyko2442"
                      rel="noopener noreferrer"
                    >
                      Telegram
                    </a>
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Меню */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Меню</h3>
            <ul className="space-y-3">
              {[
                { name: 'Главная', href: '#home' },
                { name: 'Услуги', href: '#services' },
                { name: 'Бренды', href: '#brands' },
                { name: 'О нас', href: '#about' },
                { name: 'Отзывы', href: '#reviews' },
                { name: 'Контакты', href: '#contact' },
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Форма обратной связи */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Остались вопросы?</h3>

            <button
              className="cursor-pointer w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
              aria-label="Отправить форму обратной связи"
            >
              <a target="_blank" href="https://wa.me/77477000871">
                Связаться с мастером
              </a>
            </button>
          </div>
        </div>

        {/* Копирайт */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>© {new Date().getFullYear()} RemStirka. Все права защищены.</p>
          <div className="mt-2 flex justify-center space-x-6">
            <a
              href="/privacy"
              className="text-gray-500 hover:text-gray-300 transition-colors text-sm"
            >
              Политика конфиденциальности
            </a>
            <a
              href="/terms"
              className="text-gray-500 hover:text-gray-300 transition-colors text-sm"
            >
              Пользовательское соглашение
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
