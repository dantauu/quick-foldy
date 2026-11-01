<script setup lang="ts">
import { features } from '~/data/landing'
import { previewStackColors } from '~/data/hero'
</script>

<template>
  <BaseSection id="features">
    <BaseSectionHeading
      v-reveal
      eyebrow="Возможности"
      title="Всё, чего не хватает в истории чатов"
      color="var(--color-accent)"
    />

    <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      <BaseCard
        v-reveal
        class="md:col-span-2"
        title="Папки с цветами"
        text="Создавайте папки, красьте их и перетаскивайте чаты между ними. У каждого чата в списке полоска цвета его папки."
      >
        <div
          class="flex w-52 shrink-0 flex-col items-center self-center max-sm:hidden"
          aria-hidden="true"
        >
          <div
            v-for="(color, index) in previewStackColors"
            :key="color"
            class="-mb-3 h-8 rounded-t-xl"
            :style="{ backgroundColor: color, width: `${86 + index * 4}%` }"
          />
          <div class="relative h-24 w-full rounded-2xl bg-line" />
        </div>
      </BaseCard>

      <BaseCard
        v-for="(feature, index) in features"
        :key="feature.title"
        v-reveal="((index + 1) % 3) * 80"
        v-bind="feature"
      />
    </div>
  </BaseSection>
</template>
