'use client'
import { useState } from 'react'
import { X, Phone, User, Send, AlertCircle } from 'lucide-react'

export const ModalPage = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    issue: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const botToken = '7813877720:AAFyALQJS54-vU9OttLxRsI5NjQrm8rDH_E'
      const chatId = '6167046254'

      const message = `📌 Новая заявка:\n\n👤 Имя: ${
        formData.name
      }\n📞 Телефон: ${formData.phone}\n🔧 Проблема: ${
        formData.issue || 'Не указана'
      }`

      const response = await fetch(
        `https://api.telegram.org/bot${botToken}/sendMessage`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            chat_id: chatId,
            text: message,
          }),
        },
      )

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', phone: '', issue: '' })
        setTimeout(onClose, 2000)
      } else {
        throw new Error('Ошибка отправки')
      }
    } catch (error) {
      console.error('Ошибка:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modalTitle"
      aria-describedby="modalDescription"
    >
      <div className="bg-white rounded-xl max-w-md w-full shadow-xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100"
          aria-label="Закрыть модальное окно"
        >
          <X className="w-6 h-6 text-gray-500" />
        </button>

        <div className="p-6">
          <h2 id="modalTitle" className="text-2xl font-bold text-gray-900 mb-2">
            Оставить заявку
          </h2>
          <p id="modalDescription" className="text-gray-600 mb-6">
            Наш мастер свяжется с вами в течение 15 минут
          </p>

          {submitStatus === 'success' ? (
            <div className="text-center py-8">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
                <svg
                  className="h-6 w-6 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Заявка отправлена!
              </h3>
              <p className="text-gray-500">Мы скоро с вами свяжемся</p>
            </div>
          ) : submitStatus === 'error' ? (
            <div className="text-center py-8">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 mb-4">
                <AlertCircle className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Ошибка отправки
              </h3>
              <p className="text-gray-500 mb-4">
                Попробуйте позже или позвоните нам
              </p>
              <button
                onClick={() => setSubmitStatus(null)}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Попробовать снова
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="space-y-4"
              itemScope
              itemType="https://schema.org/ContactPage"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Ваше имя
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    itemProp="name"
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Имя Фамилия"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Телефон *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Phone className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    itemProp="telephone"
                    autoComplete="tel"
                    inputMode="tel"
                    pattern="^[0-9+\s()-]{7,}$"
                    value={formData.phone}
                    onChange={handleChange}
                    className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    placeholder="+7 (---) --- -- --"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="issue"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Описание проблемы (необязательно)
                </label>
                <textarea
                  id="issue"
                  name="issue"
                  rows="3"
                  itemProp="description"
                  value={formData.issue}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Например: не включается, течёт вода, не греет..."
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex justify-center items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 disabled:bg-blue-400"
                >
                  {isSubmitting ? (
                    'Отправка...'
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Отправить заявку
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
