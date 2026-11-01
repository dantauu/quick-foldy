<script setup lang="ts">
  const { isOpen, close } = useAuthModal()
</script>

<template>
  <AppHeader />
  <main>
    <slot />
  </main>
  <BaseModal :open="isOpen" @update:open="close">
    <ModalsAuthModal />
  </BaseModal>
</template>
