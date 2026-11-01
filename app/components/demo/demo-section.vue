<script setup lang="ts">
import { demoServices } from '~/data/landing'
import { previewFolders } from '~/data/hero'

const activeName = ref(demoServices[0]!.name)
const active = computed(() => demoServices.find((service) => service.name === activeName.value)!)
const folders = previewFolders.slice(0, 3)
</script>

<template>
  <BaseSection class="max-md:hidden">
    <BaseSectionHeading
      v-reveal
      class="mx-auto text-center"
      eyebrow="Внутри Claude и ChatGPT"
      title="Панель живёт рядом с чатом"
      description="Никаких отдельных вкладок: папки, поиск и экспорт там же, где вы общаетесь с Claude или ChatGPT."
      color="var(--color-folder-green)"
    />

    <div v-reveal>
      <div class="mx-auto mb-10 flex w-fit gap-1 rounded-xl border border-line bg-raised p-1">
        <button
          v-for="service in demoServices"
          :key="service.name"
          type="button"
          class="cursor-pointer rounded-lg px-5 py-2 font-semibold transition-colors"
          :class="service.name === activeName ? 'bg-line text-fg' : 'text-muted hover:text-fg'"
          :aria-pressed="service.name === activeName"
          @click="activeName = service.name"
        >
          {{ service.name }}
        </button>
      </div>

      <div
        class="overflow-hidden rounded-3xl border border-line bg-raised shadow-[0_40px_120px_rgb(0_0_0/0.55)]"
        aria-hidden="true"
      >
        <div class="flex items-center gap-2 border-b border-line bg-surface px-5 py-3">
          <span v-for="dot in 3" :key="dot" class="size-3 rounded-full bg-line" />
          <span class="ml-3 rounded-lg bg-raised px-3 py-1 text-sm text-muted">{{
            active.url
          }}</span>
        </div>

        <div class="grid min-h-[26rem] grid-cols-[minmax(13rem,26%)_1fr]">
          <div class="border-r border-line bg-surface p-5">
            <img src="/quick-foldy-logo-on-dark.svg" alt="" width="117" height="28" />
            <div class="mt-4 rounded-xl border border-line bg-base px-4 py-3 text-muted">
              Поиск...
            </div>
            <ul class="mt-3 flex flex-col gap-1">
              <li
                v-for="(folder, index) in folders"
                :key="folder.name"
                class="flex items-center gap-3 rounded-xl px-4 py-3"
                :class="{ 'bg-line font-semibold': index === 0 }"
              >
                <span class="size-3 rounded" :style="{ backgroundColor: folder.color }" />
                <span class="flex-1">{{ folder.name }}</span>
                <span class="text-sm text-muted">{{ folder.count }}</span>
              </li>
            </ul>
          </div>

          <div class="flex flex-col p-8">
            <p class="self-end rounded-2xl bg-line px-5 py-3">
              {{ active.question }}
            </p>
            <div class="mt-6 flex flex-col gap-3">
              <span class="h-3 w-10/12 rounded-full bg-line" />
              <span class="h-3 w-11/12 rounded-full bg-line" />
              <span class="h-3 w-3/4 rounded-full bg-line" />
              <span class="mt-2 h-20 w-11/12 rounded-xl border border-line bg-base" />
            </div>
            <p
              class="mt-auto flex w-fit items-center gap-3 rounded-xl border border-success/30 bg-success/10 px-4 py-2 text-success"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m5 12 5 5 9-10" />
              </svg>
              Чат сохранён в «Работа»
            </p>
          </div>
        </div>
      </div>
    </div>
  </BaseSection>
</template>
