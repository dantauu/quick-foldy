export interface PreviewChat {
  title: string
  date: string
}

export interface PreviewFolder {
  name: string
  color: string
  count: number
  chats?: PreviewChat[]
}

export const supportedServices = ['Claude', 'ChatGPT']

export const previewFolders: PreviewFolder[] = [
  {
    name: 'Работа',
    color: 'var(--color-folder-terracotta)',
    count: 12,
    chats: [
      { title: 'Разбор архитектуры корзины', date: 'сегодня' },
      { title: 'Ревью API заказов', date: 'вчера' },
    ],
  },
  { name: 'Учёба', color: 'var(--color-folder-sand)', count: 7 },
  { name: 'Проекты', color: 'var(--color-folder-blue)', count: 5 },
  { name: 'Идеи', color: 'var(--color-folder-green)', count: 3 },
]

export const previewTags = ['код', 'идеи', 'важное']

export const previewStackColors = [
  'var(--color-folder-terracotta)',
  'var(--color-folder-sand)',
  'var(--color-folder-blue)',
]
