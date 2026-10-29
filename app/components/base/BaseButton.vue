<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'

const { variant = 'primary', to } = defineProps<{
  variant?: 'primary' | 'secondary'
  to?: RouteLocationRaw
}>()
</script>

<template>
  <NuxtLink v-if="to" :to="to" :class="['button', `button--${variant}`]">
    <slot />
  </NuxtLink>
  <button v-else type="button" :class="['button', `button--${variant}`]">
    <slot />
  </button>
</template>

<style scoped>
.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 44px;
  padding-inline: var(--space-5);
  border: 1px solid transparent;
  border-radius: var(--radius-md);
  font: inherit;
  font-weight: 600;
  text-decoration: none;
  white-space: nowrap;
  cursor: pointer;
  transition: background-color var(--transition-fast), border-color var(--transition-fast);
}

.button--primary {
  background-color: var(--color-accent);
  color: var(--color-on-accent);
}

.button--primary:hover {
  background-color: var(--color-accent-hover);
}

.button--secondary {
  background-color: var(--color-surface);
  border-color: var(--color-border);
  color: var(--color-text);
}

.button--secondary:hover {
  border-color: var(--color-text-muted);
}
</style>
