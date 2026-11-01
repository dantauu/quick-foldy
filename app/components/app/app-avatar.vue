<script setup lang="ts">
const { name = '' } = defineProps<{ name?: string }>()
</script>

<template>
  <span
    class="flex shrink-0 items-center justify-center rounded-full bg-folder-blue font-bold text-on-accent uppercase"
    aria-hidden="true"
  >
    {{ name.slice(0, 1) }}
  </span>
</template>
