<script setup lang="ts">
import { installUrl } from '~/data/navigation'
</script>

<template>
  <section
    class="flex items-center justify-between gap-5 rounded-3xl border border-dashed border-line bg-surface p-6 max-sm:flex-col max-sm:items-start"
  >
    <div class="flex items-center gap-4">
      <img src="/quick-foldy-icon.svg" alt="" width="44" height="44" />
      <div>
        <h2 class="font-bold">Расширение ещё не установлено</h2>
        <p class="mt-1 text-muted">Синхронизация чатов через аккаунт появится позже.</p>
      </div>
    </div>
    <BaseButton :to="installUrl" variant="secondary"> Установить в Chrome </BaseButton>
  </section>
</template>
