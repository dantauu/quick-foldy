<script setup lang="ts">
import { installUrl, navLinks } from '~/data/navigation'

const { isLoggedIn } = useAuth()
const { open } = useAuthModal()
</script>

<template>
  <header class="sticky top-0 z-10 border-b border-line bg-base/85 backdrop-blur-md">
    <BaseContainer class="grid h-header grid-cols-[auto_1fr_auto] items-center gap-8">
      <AppLogo />

      <nav class="invisible justify-self-center lg:visible" aria-label="Основная навигация">
        <ul class="flex gap-8">
          <li v-for="link in navLinks" :key="link.to">
            <NuxtLink :to="link.to" class="font-medium text-muted transition-colors hover:text-fg">
              {{ link.label }}
            </NuxtLink>
          </li>
        </ul>
      </nav>

      <div class="flex gap-3">
        <BaseButton v-if="isLoggedIn" to="/profile" variant="secondary" class="max-sm:hidden">
          Профиль
        </BaseButton>
        <BaseButton v-else variant="secondary" class="max-sm:hidden" @click="open('login')">
          Войти
        </BaseButton>
        <BaseButton :to="installUrl"> Установить </BaseButton>
      </div>
    </BaseContainer>
  </header>
</template>
