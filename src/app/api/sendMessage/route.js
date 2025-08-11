export async function POST(request) {
  try {
    const { name, phone, issue } = await request.json()

    const token = process.env.TELEGRAM_BOT_TOKEN
    const chatId = process.env.TELEGRAM_CHAT_ID

    const message = `📌 Новая заявка:\n\n👤 Имя: ${name}\n📞 Телефон: ${phone}\n🔧 Проблема: ${
      issue || 'Не указана'
    }`

    const response = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
        }),
      },
    )

    if (!response.ok) {
      const errorData = await response.json()
      return new Response(JSON.stringify({ error: errorData }), {
        status: response.status,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    return new Response(JSON.stringify({ message: 'Заявка отправлена' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Ошибка сервера' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}
