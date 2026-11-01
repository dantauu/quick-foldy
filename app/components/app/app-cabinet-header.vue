<script setup lang="ts">
const { user, logout } = useAuth()

const handleLogout = async () => {
  logout()
  await navigateTo('/')
}
</script>

<template>
  <header class="sticky top-0 z-10 border-b border-line bg-base/85 backdrop-blur-md">
    <BaseContainer class="flex h-header max-w-3xl! items-center justify-between gap-4">
      <AppLogo />

      <div class="flex items-center gap-3">
        <AppAvatar :name="user?.name" class="size-9" />
        <span class="text-muted max-sm:hidden">{{ user?.name }}</span>
        <BaseButton variant="secondary" @click="handleLogout">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4m7 14 5-5-5-5m5 5H9" />
          </svg>
          Выйти
        </BaseButton>
      </div>
    </BaseContainer>
  </header>
</template>
