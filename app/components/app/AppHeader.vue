<script setup lang="ts">
import { installUrl, navLinks } from '~/data/navigation'
</script>

<template>
  <header class="sticky top-0 z-10 border-b border-line bg-base/85 backdrop-blur-md">
    <BaseContainer class="grid h-header grid-cols-[auto_1fr_auto] items-center gap-8">
      <AppLogo />

      <!-- Навигация переедет в мобильное меню на следующем шаге -->
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
        <BaseButton to="/login" variant="secondary" class="max-sm:hidden">
          Войти
        </BaseButton>
        <BaseButton :to="installUrl">
          Установить
        </BaseButton>
      </div>
    </BaseContainer>
  </header>
</template>
