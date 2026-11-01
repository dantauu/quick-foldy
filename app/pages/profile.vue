<script setup lang="ts">
definePageMeta({ layout: 'cabinet' })
</script>

<template>
  <div class="mx-auto flex w-full max-w-3xl flex-col gap-6 px-6 py-14">
    <h1 class="text-4xl font-extrabold tracking-[-0.03em]">Профиль</h1>

    <ProfileAvatarSection />
    <ProfilePersonalInfo />
    <ProfileInstallExtension />
  </div>
</template>
