<script setup lang="ts">
import { footerLinks } from '~/data/landing'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-line">
    <BaseContainer class="flex flex-wrap items-center justify-between gap-6 py-8">
      <AppLogo />

      <ul class="flex flex-wrap gap-6">
        <li v-for="link in footerLinks" :key="link.label">
          <NuxtLink :to="link.to" class="text-muted transition-colors hover:text-fg">
            {{ link.label }}
          </NuxtLink>
        </li>
      </ul>

      <p class="text-muted">© {{ year }} Quick Foldy</p>
    </BaseContainer>
  </footer>
</template>
