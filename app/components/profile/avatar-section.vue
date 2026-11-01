<script setup lang="ts">
const { user } = useAuth()
</script>

<template>
  <section
    class="flex items-center gap-6 rounded-3xl border border-line bg-raised p-7 max-sm:flex-col max-sm:text-center"
  >
    <div class="relative shrink-0">
      <AppAvatar :name="user?.name" class="size-28 text-5xl" />
      <span
        class="absolute right-0 bottom-0 flex size-9 items-center justify-center rounded-full border-4 border-raised bg-line"
        aria-hidden="true"
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path
            d="M3 9a2 2 0 0 1 2-2h2l2-3h6l2 3h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm12 4a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
        </svg>
      </span>
    </div>

    <div>
      <h2 class="text-xl font-bold">Аватарка</h2>
      <p class="mt-2 text-muted">PNG или JPG, квадратная картинка смотрится лучше всего.</p>
      <div class="mt-4 flex flex-wrap gap-3 max-sm:justify-center">
        <BaseButton variant="tonal"> Загрузить фото </BaseButton>
        <BaseButton variant="danger"> Удалить </BaseButton>
      </div>
    </div>
  </section>
</template>
