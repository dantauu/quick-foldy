export interface LandingCard {
  title: string
  text: string
  color: string
  icon: string
}

export const problems: LandingCard[] = [
  {
    title: 'Чат утонул в истории',
    text: 'Через неделю уже не вспомнить, как назывался тот самый разговор.',
    color: 'var(--color-folder-terracotta)',
    icon: 'M4 6h16M4 12h10M4 18h6',
  },
  {
    title: 'Экспорт упёрся в лимиты',
    text: 'Выгрузить большой чат целиком получается не всегда.',
    color: 'var(--color-folder-sand)',
    icon: 'M12 4v12m0 0-5-5m5 5 5-5M5 20h14M5 4l14 14',
  },
  {
    title: 'Сменил аккаунт — потерял всё',
    text: 'Старые чаты остаются там, куда больше нет доступа.',
    color: 'var(--color-folder-blue)',
    icon: 'M15 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM4 20a7 7 0 0 1 11-5.7m2 .7 4 4m0-4-4 4',
  },
  {
    title: 'Нет привычных папок',
    text: 'Claude и ChatGPT не дают разложить историю по обычным цветным папкам.',
    color: 'var(--color-folder-green)',
    icon: 'M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z',
  },
  {
    title: 'Поиск не знает о папках',
    text: 'Нельзя искать внутри одной темы: результаты приходят со всей истории.',
    color: 'var(--color-folder-lilac)',
    icon: 'M18 11a7 7 0 1 1-14 0 7 7 0 0 1 14 0Zm2 9-3.5-3.5M9 9l4 4m0-4-4 4',
  },
  {
    title: 'Чат не положить в две темы',
    text: 'Разговор касается и работы, и учёбы, а выбирать приходится что-то одно.',
    color: 'var(--color-folder-terracotta)',
    icon: 'M12 20v-6m0 0L6 8V4m6 10 6-6V4',
  },
]

export const features: LandingCard[] = [
  {
    title: 'Поиск по тексту',
    text: 'Ищет по названиям и содержимому всех сохранённых чатов.',
    color: 'var(--color-folder-blue)',
    icon: 'M18 11a7 7 0 1 1-14 0 7 7 0 0 1 14 0Zm2 9-3.5-3.5',
  },
  {
    title: 'Теги',
    text: 'Один чат может жить в папке и нести сразу несколько тегов.',
    color: 'var(--color-folder-sand)',
    icon: 'M12.6 3H5a2 2 0 0 0-2 2v7.6a2 2 0 0 0 .6 1.4l7.4 7.4a2 2 0 0 0 2.8 0l7.2-7.2a2 2 0 0 0 0-2.8L14 3.6a2 2 0 0 0-1.4-.6ZM8 8h.01',
  },
  {
    title: 'Экспорт в три формата',
    text: 'Markdown, JSON или обычный текст. Блоки кода сохраняются как есть.',
    color: 'var(--color-folder-terracotta)',
    icon: 'M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8Zm0 0v5h5M9 13h6m-6 4h4',
  },
  {
    title: 'Автосохранение',
    text: 'Открыли чат в Claude или ChatGPT, и он уже у вас. Без отдельной выгрузки.',
    color: 'var(--color-folder-green)',
    icon: 'm5 12 5 5 9-10',
  },
  {
    title: 'Свои названия',
    text: 'Переименуйте чат так, как вам удобно его искать.',
    color: 'var(--color-folder-lilac)',
    icon: 'M4 20l1-4L16.5 4.5a2.1 2.1 0 0 1 3 3L8 19Zm10.5-13.5 3 3',
  },
]

export const steps = [
  {
    title: 'Установите расширение',
    text: 'Один клик в Chrome Web Store, и всё готово.',
  },
  {
    title: 'Откройте Claude или ChatGPT',
    text: 'Слева появится панель Quick Foldy, а чат сохранится автоматически.',
  },
  {
    title: 'Разложите и найдите',
    text: 'Перетащите чат в папку, добавьте тег. Потом найдите поиском за секунду.',
  },
]

export const demoServices = [
  {
    name: 'Claude',
    url: 'claude.ai/chat/...',
    question: 'Как лучше разбить лендинг на компоненты в Nuxt?',
  },
  {
    name: 'ChatGPT',
    url: 'chatgpt.com/c/...',
    question: 'Составь план переезда сайта на Nuxt',
  },
]

export const privacyPoints: Omit<LandingCard, 'color'>[] = [
  {
    title: 'Только то, что вы открыли.',
    text: 'Никакого фонового сбора всей истории.',
    icon: 'M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Zm13 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z',
  },
  {
    title: 'Удаление в один клик.',
    text: 'Любой чат или всё сразу.',
    icon: 'M4 7h16m-10 4v6m4-6v6M6 7l1 12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2l1-12M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2',
  },
  {
    title: 'Всё можно забрать с собой.',
    text: 'Выгрузите чаты в Markdown, JSON или обычный текст.',
    icon: 'M12 16V4m0 0L7 9m5-5 5 5M5 20h14',
  },
]

export const footerLinks = [
  // TODO: заменить на страницу политики, когда она появится
  { label: 'Политика конфиденциальности', to: '/#privacy' },
  { label: 'FAQ', to: '/#faq' },
]
