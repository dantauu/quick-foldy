<script setup lang="ts">
import type { PreviewFolder } from '~/data/hero'

const { folder } = defineProps<{ folder: PreviewFolder }>()
</script>

<template>
  <li :style="{ '--folder-color': folder.color }">
    <div
      class="flex items-center gap-3 rounded-xl px-4 py-3"
      :class="{ 'bg-line font-semibold': folder.chats }"
    >
      <span class="size-3.5 rounded bg-(--folder-color)" />
      <span class="flex-1">{{ folder.name }}</span>
      <span class="text-sm text-muted">{{ folder.count }}</span>
    </div>

    <ul v-if="folder.chats" class="my-2 ml-4 flex flex-col gap-1">
      <li
        v-for="chat in folder.chats"
        :key="chat.title"
        class="flex justify-between gap-3 rounded-md border-l-2 border-(--folder-color) px-4 py-2"
      >
        <span class="truncate">{{ chat.title }}</span>
        <span class="text-sm text-muted">{{ chat.date }}</span>
      </li>
    </ul>
  </li>
</template>
