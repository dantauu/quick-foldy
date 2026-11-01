<script setup lang="ts">
const { eyebrow, title, description, color } = defineProps<{
  eyebrow: string
  title: string
  description?: string
  color: string
}>()
</script>

<template>
  <div class="mb-12 max-w-3xl">
    <p class="text-sm font-bold tracking-widest uppercase" :style="{ color }">
      {{ eyebrow }}
    </p>
    <h2
      class="mt-4 text-[clamp(2rem,3vw_+_1rem,3.25rem)] leading-[1.1] font-extrabold tracking-[-0.03em]"
    >
      {{ title }}
    </h2>
    <p v-if="description" class="mt-4 text-xl leading-relaxed text-muted">
      {{ description }}
    </p>
  </div>
</template>
