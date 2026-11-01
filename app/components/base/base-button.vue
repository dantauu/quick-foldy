<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'

type Variant = 'primary' | 'secondary' | 'tonal' | 'danger'
type Size = 'md' | 'lg'

const {
  variant = 'primary',
  size = 'md',
  to,
} = defineProps<{
  variant?: Variant
  size?: Size
  to?: RouteLocationRaw
}>()

const variantClasses: Record<Variant, string> = {
  primary: 'border-transparent bg-accent text-on-accent hover:bg-accent-hover',
  secondary: 'border-line bg-surface text-fg hover:border-muted',
  tonal: 'border-transparent bg-line text-fg hover:border-muted',
  danger: 'border-line text-folder-terracotta hover:border-folder-terracotta',
}

const sizeClasses: Record<Size, string> = {
  md: 'h-11 px-6',
  lg: 'h-14 px-8 text-[17px]',
}

const classes = computed(() => [
  'inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-xl border font-semibold transition-colors',
  variantClasses[variant],
  sizeClasses[size],
])
</script>

<template>
  <NuxtLink v-if="to" :to="to" :class="classes">
    <slot />
  </NuxtLink>
  <button v-else type="button" :class="classes">
    <slot />
  </button>
</template>
