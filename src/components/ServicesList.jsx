import {
  ClipboardCheck,
  Wrench,
  Settings,
  Home,
  AlertTriangle,
  Headphones,
} from 'lucide-react'

const ServicesList = () => {
  const services = [
    {
      id: 1,
      name: 'Диагностика',
      number: '01',
      icon: <ClipboardCheck className="w-6 h-6 text-blue-600" />,
      description:
        'Комплексная проверка техники с использованием профессионального оборудования',
    },
    {
      id: 2,
      name: 'Ремонт',
      number: '02',
      icon: <Wrench className="w-6 h-6 text-blue-600" />,
      description: 'Качественный ремонт любой сложности с гарантией на работы',
    },
    {
      id: 3,
      name: 'Обслуживание',
      number: '03',
      icon: <Settings className="w-6 h-6 text-blue-600" />,
      description:
        'Профилактические работы для продления срока службы оборудования',
    },
    {
      id: 4,
      name: 'Установка',
      number: '04',
      icon: <Home className="w-6 h-6 text-blue-600" />,
      description: 'Профессиональный монтаж и настройка бытовой техники',
    },
    {
      id: 5,
      name: 'Аварийная служба',
      number: '05',
      icon: <AlertTriangle className="w-6 h-6 text-blue-600" />,
      description: 'Экстренный выезд мастера в течение 60 минут',
    },
    {
      id: 6,
      name: 'Консультация',
      number: '06',
      icon: <Headphones className="w-6 h-6 text-blue-600" />,
      description: 'Экспертная помощь и рекомендации по эксплуатации техники',
    },
  ]

  return (
    <div  id='services' className="px-4 sm:px-6 lg:px-8 py-20 max-w-7xl mx-auto ">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-medium text-gray-900 mb-4">
          Полный <span className="text-blue-600">перечень услуг</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Все виды работ по ремонту и обслуживанию бытовой техники
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div
            key={service.id}
            className="cursor-pointer bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 group"
          >
            <div className="flex items-start mb-4">
              <span className="font-bold text-4xl text-gray-200 mr-4 group-hover:text-blue-100 transition-colors">
                {service.number}
              </span>
              <div className="w-0.5 h-12 bg-gray-200 mr-4 mt-2"></div>
              <div>
                <h3 className="text-xl font-medium text-gray-900 flex items-center">
                  {service.icon}
                  <span className="ml-2">{service.name}</span>
                </h3>
                <p className="text-gray-600 mt-2">{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors">
          Получить консультацию
        </button>
      </div>
    </div>
  )
}

export default ServicesList
