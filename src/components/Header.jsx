'use client'
import { useState, useEffect } from 'react'
import {
  Menu,
  X,
  Phone,
  MessageSquare,
  Wrench,
  Home,
  Info,
  Mail,
} from 'lucide-react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-md py-3'
          : 'bg-white/90 backdrop-blur-sm py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Логотип */}
          <a
            href="/"
            className="flex items-center gap-2"
            aria-label="RemStirka — главная страница"
          >
            <Wrench className="w-6 h-6 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">
              Rem<span className="text-blue-600">Stirka</span>
            </span>
          </a>

          {/* Основное меню (десктоп) */}
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      item.cta
                        ? 'bg-blue-600 text-white hover:bg-blue-700 ml-2'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Контакты (десктоп) */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+77477000871"
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg font-medium text-gray-700 hover:bg-gray-200 transition-colors"
              aria-label="Позвонить"
            >
              <Phone className="w-5 h-5" />
              <span>+7 747 700 08 71</span>
            </a>
          </div>

          {/* Мобильное меню */}
          <div className="lg:hidden z-50">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
            >
              {menuOpen ? (
                <X className="w-6 h-6 text-gray-900" />
              ) : (
                <Menu className="w-6 h-6 text-gray-900" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Мобильное меню (полноэкранное) */}
      {menuOpen && (
        <div className="fixed inset-0 bg-white z-40 flex flex-col pt-20 px-6">
          <ul className="space-y-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-lg font-medium ${
                    item.cta
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {item.icon}
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-auto pb-10 space-y-4">
            <a
              href="tel:+77477000871"
              className="flex items-center justify-center gap-3 px-4 py-3 bg-blue-50 rounded-xl text-blue-600 font-medium"
            >
              <Phone className="w-5 h-5" />
              Позвонить: +7 747 700 08 71
            </a>
            <a
              href="https://wa.me/77001234567"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-4 py-3 bg-green-50 rounded-xl text-green-600 font-medium"
            >
              <MessageSquare className="w-5 h-5" />
              Написать в WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

const navItems = [
  { label: 'Главная', href: '#home', icon: <Home className="w-5 h-5" /> },
  { label: 'Услуги', href: '#services', icon: <Wrench className="w-5 h-5" /> },
  { label: 'О нас', href: '#about', icon: <Info className="w-5 h-5" /> },
  { label: 'Контакты', href: '#contact', icon: <Mail className="w-5 h-5" /> },
  {
    label: 'Оставить заявку',
    href: '#request',
    icon: <Phone className="w-5 h-5" />,
    cta: true,
  },
]
