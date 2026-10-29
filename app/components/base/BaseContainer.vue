<template>
  <div class="container">
    <slot />
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  max-width: var(--container-width);
  margin-inline: auto;
  padding-inline: var(--space-5);
}
</style>
