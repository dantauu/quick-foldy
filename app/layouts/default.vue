<script setup lang="ts">
const { isOpen, close } = useAuthModal()
</script>

<template>
  <AppHeader />
  <main>
    <slot />
  </main>
  <AppFooter />
  <BaseModal :open="isOpen" @update:open="close">
    <ModalsAuthModal />
  </BaseModal>
</template>
