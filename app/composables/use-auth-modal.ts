type AuthMode = "login" | "register"

export function useAuthModal() {
    const route = useRoute()
    const mode = computed<AuthMode | null>(() => {
        const value = route.query.auth
        return value === "login" || value === "register" ? value : null
    })
    const isOpen = computed(() => mode.value !== null)

    function open(next: AuthMode) {
        return navigateTo({ query: { ...route.query, auth: next } })
    }

    function close() {
        const { auth: _, ...rest } = route.query
        return navigateTo({ query: rest })
    }

    function switchMode(next: AuthMode) {
        return navigateTo({ query: { ...route.query, auth: next }, replace: true })
    }

    return { open, close, switchMode, isOpen, mode }
}