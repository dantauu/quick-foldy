<script setup lang="ts">
import { privacyPoints } from '~/data/landing'
</script>

<template>
  <BaseSection id="privacy" class="border-y border-line bg-surface">
    <div class="grid items-center gap-12 lg:grid-cols-2">
      <BaseSectionHeading
        v-reveal
        class="mb-0!"
        eyebrow="Приватность"
        title="Вы решаете, что хранить"
        description="Quick Foldy сохраняет только те чаты, которые вы сами открыли. Удалить или выгрузить их можно в любой момент."
        color="var(--color-folder-lilac)"
      />

      <ul class="flex flex-col gap-4">
        <li
          v-for="(point, index) in privacyPoints"
          :key="point.title"
          v-reveal="index * 80"
          class="flex gap-4 rounded-2xl border border-line bg-raised p-6"
        >
          <svg
            class="shrink-0 text-folder-lilac"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.75"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <path :d="point.icon" />
          </svg>
          <p class="leading-relaxed text-muted">
            <strong class="font-bold text-fg">{{ point.title }}</strong>
            {{ point.text }}
          </p>
        </li>
      </ul>
    </div>
  </BaseSection>
</template>
