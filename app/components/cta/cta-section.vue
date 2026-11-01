<script setup lang="ts">
import { installUrl } from '~/data/navigation'
import { previewFolders } from '~/data/hero'
</script>

<template>
  <BaseSection id="install">
    <div
      v-reveal
      class="relative overflow-hidden rounded-3xl border border-line bg-raised px-6 py-16 text-center"
    >
      <div class="absolute inset-x-0 top-0 flex h-1.5" aria-hidden="true">
        <span
          v-for="folder in previewFolders"
          :key="folder.name"
          class="flex-1"
          :style="{ backgroundColor: folder.color }"
        />
      </div>

      <img class="mx-auto" src="/quick-foldy-icon.svg" alt="" width="88" height="88" />

      <h2
        class="mx-auto mt-6 max-w-2xl text-[clamp(2rem,3vw_+_1rem,3.25rem)] leading-[1.1] font-extrabold tracking-[-0.03em]"
      >
        Начните сохранять чаты сегодня
      </h2>
      <p class="mx-auto mt-4 max-w-md text-xl leading-relaxed text-muted">
        Установка занимает меньше минуты. Следующий открытый чат уже будет в&nbsp;безопасности.
      </p>
      <BaseButton :to="installUrl" size="lg" class="mt-8 max-sm:w-full max-sm:whitespace-normal">
        Добавить в Chrome — бесплатно
      </BaseButton>
    </div>
  </BaseSection>
</template>
