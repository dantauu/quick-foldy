<script setup lang="ts">
import { supportedServices } from '~/data/hero'
</script>

<template>
  <p
    class="inline-flex flex-wrap items-center gap-2 rounded-full border border-line bg-surface py-1 pr-1 pl-4 text-sm text-muted"
  >
    <span class="size-2 rounded-full bg-success" aria-hidden="true" />
    Расширение для Chrome · работает с
    <span
      v-for="service in supportedServices"
      :key="service"
      class="rounded-full bg-line px-3 py-1 font-semibold text-fg"
    >
      {{ service }}
    </span>
  </p>
</template>
