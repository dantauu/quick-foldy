<script setup lang="ts">
const { title, text, icon, color } = defineProps<{
  title: string
  text: string
  icon?: string
  color?: string
}>()
</script>

<template>
  <article class="flex gap-8 rounded-2xl border border-line bg-raised p-8">
    <div class="flex-1">
      <svg
        v-if="icon"
        class="mb-4"
        :style="{ color }"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.75"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <path :d="icon" />
      </svg>
      <h3 class="text-xl font-bold">
        {{ title }}
      </h3>
      <p class="mt-3 leading-relaxed text-muted">
        {{ text }}
      </p>
    </div>
    <slot />
  </article>
</template>
