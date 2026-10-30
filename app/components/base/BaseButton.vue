<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'

type Variant = 'primary' | 'secondary'
type Size = 'md' | 'lg'

const { variant = 'primary', size = 'md', to } = defineProps<{
  variant?: Variant
  size?: Size
  to?: RouteLocationRaw
}>()

const variantClasses: Record<Variant, string> = {
  primary: 'bg-accent text-on-accent hover:bg-accent-hover',
  secondary: 'border-line bg-surface text-fg hover:border-muted',
}

const sizeClasses: Record<Size, string> = {
  md: 'h-11 px-6',
  lg: 'h-14 px-8 text-[17px]',
}

const classes = computed(() => [
  'inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-xl border border-transparent font-semibold transition-colors',
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
