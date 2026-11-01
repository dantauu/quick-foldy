<script setup lang="ts">
import { previewFolders, previewStackColors, previewTags } from '~/data/hero'
</script>

<template>
  <div class="flex w-full max-w-[560px] flex-col items-center justify-self-center" aria-hidden="true">
    <div
      v-for="(color, index) in previewStackColors"
      :key="color"
      class="-mb-5 h-[38px] rounded-t-[20px]"
      :style="{ backgroundColor: color, width: `${86 + index * 4}%` }"
    />

    <div class="relative w-full rounded-[20px] border border-line bg-surface p-6 shadow-[0_40px_120px_rgb(0_0_0/0.55)]">
      <div class="flex items-center gap-3 rounded-xl border border-line bg-base px-4 py-3 text-muted">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-3.5-3.5" />
        </svg>
        <span class="flex-1">Найти в сохранённых чатах</span>
        <kbd class="rounded-md border border-line px-2 py-0.5 font-sans text-xs">⌘K</kbd>
      </div>

      <ul class="mt-4 flex flex-col gap-1">
        <HeroPreviewFolder v-for="folder in previewFolders" :key="folder.name" :folder="folder" />
      </ul>

      <ul class="mt-4 flex flex-wrap gap-2">
        <li v-for="tag in previewTags" :key="tag" class="rounded-full bg-line px-3 py-1 text-sm text-muted">
          #{{ tag }}
        </li>
      </ul>
    </div>
  </div>
</template>
