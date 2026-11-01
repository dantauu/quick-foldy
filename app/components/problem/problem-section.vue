<script setup lang="ts">
import { problems } from '~/data/landing'
</script>

<template>
  <BaseSection class="border-y border-line bg-surface">
    <BaseSectionHeading
      v-reveal
      eyebrow="Проблема"
      title="Важный разговор с ИИ легко потерять"
      description="История чатов растёт быстро, а всё полезное в ней лежит одним длинным списком."
      color="var(--color-folder-terracotta)"
    />

    <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <BaseCard
        v-for="(problem, index) in problems"
        :key="problem.title"
        v-reveal="(index % 3) * 80"
        v-bind="problem"
      />
    </div>
  </BaseSection>
</template>
