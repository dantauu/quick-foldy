export interface NavLink {
  label: string
  to: string
}

export const navLinks: NavLink[] = [
  { label: 'Возможности', to: '/#features' },
  { label: 'Как это работает', to: '/#how-it-works' },
  { label: 'Приватность', to: '/#privacy' },
  { label: 'FAQ', to: '/#faq' },
]

// TODO: заменить на ссылку Chrome Web Store после публикации расширения
export const installUrl = '/#install'
