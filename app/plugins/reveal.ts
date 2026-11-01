export default defineNuxtPlugin((nuxtApp) => {
  let observer: IntersectionObserver | undefined

  const getObserver = () => {
    observer ??= new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          const el = entry.target as HTMLElement
          el.dataset.revealed = ''
          observer?.unobserve(el)
        }
      },
      { rootMargin: '0px 0px -18% 0px' },
    )
    return observer
  }

  nuxtApp.vueApp.directive<HTMLElement, number | undefined>('reveal', {
    mounted(el, { value }) {
      // Прячем только то, что ещё ниже экрана: остальное пользователь уже мог увидеть до гидрации
      if (el.getBoundingClientRect().top < window.innerHeight) return

      el.dataset.reveal = ''
      if (value) el.style.setProperty('--reveal-delay', `${value}ms`)
      getObserver().observe(el)
    },
    unmounted: (el) => observer?.unobserve(el),
  })
})
