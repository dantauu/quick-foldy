<script setup lang="ts">
import { steps } from '~/data/landing'
</script>

<template>
  <BaseSection id="how-it-works" class="border-y border-line bg-surface">
    <BaseSectionHeading
      v-reveal
      eyebrow="Как это работает"
      title="Три шага к порядку в чатах"
      color="var(--color-folder-blue)"
    />

    <ol class="grid gap-10 md:grid-cols-3 md:gap-6">
      <li v-for="(step, index) in steps" :key="step.title" v-reveal="index * 80">
        <div class="mb-6 flex items-center gap-4">
          <span
            class="flex size-11 shrink-0 items-center justify-center rounded-xl border font-bold"
            :class="index === 0 ? 'border-accent bg-accent text-on-accent' : 'border-line bg-line'"
          >
            {{ index + 1 }}
          </span>
          <span
            v-if="index < steps.length - 1"
            class="h-px flex-1 max-md:hidden"
            :class="index === 0 ? 'bg-linear-to-r from-accent to-line' : 'bg-line'"
          />
        </div>
        <h3 class="text-xl font-bold">
          {{ step.title }}
        </h3>
        <p class="mt-3 leading-relaxed text-muted">
          {{ step.text }}
        </p>
      </li>
    </ol>
  </BaseSection>
</template>
