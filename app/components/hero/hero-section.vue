<script setup lang="ts">
import { installUrl } from '~/data/navigation'
</script>

<template>
  <BaseSection>
    <div class="grid items-center gap-16 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
      <div class="flex flex-col items-start">
        <HeroBadge />

        <h1
          class="mt-8 max-w-[11ch] text-[clamp(2.75rem,4vw_+_1rem,5rem)] leading-[1.02] font-extrabold tracking-[-0.035em]"
        >
          Ваши чаты с&nbsp;Claude и&nbsp;ChatGPT. Разложены по&nbsp;папкам. Никогда
          не&nbsp;теряются.
        </h1>

        <p class="mt-8 max-w-[34rem] text-xl leading-relaxed text-muted">
          Quick Foldy сохраняет каждый открытый чат у&nbsp;вас в&nbsp;браузере, раскладывает
          по&nbsp;цветным папкам и&nbsp;находит нужный разговор за&nbsp;секунду.
        </p>

        <div class="mt-8 flex w-full flex-wrap gap-3 max-sm:*:w-full">
          <BaseButton :to="installUrl" size="lg">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <path d="M12 4v12m0 0-5-5m5 5 5-5M5 20h14" />
            </svg>
            Добавить в Chrome — бесплатно
          </BaseButton>
          <BaseButton to="/#how-it-works" variant="secondary" size="lg">
            Как это работает
          </BaseButton>
        </div>
      </div>

      <HeroPreview />
    </div>
  </BaseSection>
</template>
