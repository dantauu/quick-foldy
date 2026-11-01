<script setup lang="ts">
const { user } = useAuth()
const name = ref(user.value?.name)
</script>

<template>
  <section class="rounded-3xl border border-line bg-raised p-7">
    <h2 class="text-xl font-bold">Данные аккаунта</h2>

    <div class="mt-6 grid gap-5 md:grid-cols-2">
      <BaseField v-model="name" label="Имя" />
      <BaseField
        :model-value="user?.email"
        label="Почта"
        disabled
        hint="Почта используется для входа и привязана при регистрации."
      >
        <template #input-action>
          <svg
            class="text-muted"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <path
              d="M6 11h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1Zm2 0V7a4 4 0 1 1 8 0v4"
            />
          </svg>
        </template>
      </BaseField>
    </div>

    <div class="mt-6 flex justify-end gap-3 border-t border-line pt-6">
      <BaseButton variant="secondary"> Отменить </BaseButton>
      <BaseButton>Сохранить</BaseButton>
    </div>
  </section>
</template>
