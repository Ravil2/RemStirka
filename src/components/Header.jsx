'use client'
import { useState } from 'react'
import { Menu, X, Phone, MessageSquare } from 'lucide-react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenu = () => setMenuOpen(!menuOpen)

  return (
    <header className="relative flex justify-between items-center px-5 md:px-5 xl:px-20 py-5 border-b border-gray-300">
      <a
        href="/"
        className="text-2xl font-bold text-black"
        aria-label="RemStirka — главная страница"
      >
        RemStirka
      </a>

      <nav className="hidden md:block">
        <ul className="flex gap-6 text-base font-medium text-gray-800 ">
          {navItems.map((item) => (
            <li
              key={item.href}
            >
              <a href={item.href} className="px-2 py-1 hover:text-black">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="md:hidden z-50">
        <button onClick={toggleMenu} aria-label="Меню">
          {menuOpen ? (
            <X className="w-7 h-7 text-black" />
          ) : (
            <Menu className="w-7 h-7 text-black" />
          )}
        </button>
      </div>

      {menuOpen && (
        <div className="fixed top-0 left-0 w-full h-screen bg-white z-40 flex flex-col justify-between p-6">
          <a
            href="/"
            className="text-2xl font-bold text-black"
            aria-label="RemStirka — главная страница"
          >
            RemStirka
          </a>
          <ul className="mt-5 flex flex-col gap-6 text-xl font-medium text-gray-900">
            {navItems.map((item) => (
              <li key={item.href} className="border-b border-gray-300 pb-1">
                <a
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-black"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex gap-6 items-center justify-center mt-auto">
            <a
              href="tel:+77477000871"
              className="flex items-center gap-2 text-gray-800 hover:text-black"
              aria-label="Позвонить"
            >
              <Phone className="w-5 h-5" /> Позвонить
            </a>
            <a
              href="https://wa.me/77001234567"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-800 hover:text-black"
              aria-label="WhatsApp"
            >
              <MessageSquare className="w-5 h-5" /> WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

const navItems = [
  { label: 'Главная', href: '#home' },
  { label: 'Услуги', href: '#services' },
  { label: 'О нас', href: '#about' },
  { label: 'Контакты', href: '#contact' },
  { label: 'Оставить заявку', href: '#request' },
]
