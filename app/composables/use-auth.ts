const mockUser: User = {
    id: '1',
    name: "Артём",
    email: "test@gmail.com",
    avatarUrl: "https://quick-foldy/avatar.png"
}

export function useAuth() {
    const cookie = useCookie<User | null>("qf-mock-user", { default: () => null })
    const user = useState<User | null>("auth-user", () => cookie.value)

    const isLoggedIn = computed(() => user.value !== null)

    function login() {
        user.value = mockUser
        cookie.value = mockUser
    }

    function logout() {
        user.value = null
        cookie.value = null
    }

    return { user, isLoggedIn, login, logout }
}