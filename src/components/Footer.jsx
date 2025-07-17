import { MessageSquareText } from 'lucide-react'
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Лого и описание */}
          <div className="space-y-4">
            <div className="flex items-center">
              <MessageCircle className="w-8 h-8 text-blue-400 mr-2" />
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
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <MessageSquareText  className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Phone className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
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
                    href="mailto:info@remstirka.kz"
                    className="hover:text-blue-400 transition-colors"
                  >
                    info@remstirka.kz
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-blue-400 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">Адрес</p>
                  <p>г. Алматы, ул. Ремонтная 123</p>
                </div>
              </li>
              <li className="flex items-start">
                <Clock className="w-5 h-5 text-blue-400 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">График работы</p>
                  <p>Ежедневно: 8:00 - 22:00</p>
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
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Ваше имя"
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Телефон"
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
              >
                Заказать звонок
              </button>
            </form>
          </div>
        </div>

        {/* Копирайт */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>© {new Date().getFullYear()} RemStirka. Все права защищены.</p>
          <div className="mt-2 flex justify-center space-x-6">
            <a
              href="#"
              className="text-gray-500 hover:text-gray-300 transition-colors text-sm"
            >
              Политика конфиденциальности
            </a>
            <a
              href="#"
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
