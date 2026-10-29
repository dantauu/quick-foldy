<script setup lang="ts">
import { installUrl, navLinks } from '~/data/navigation'
</script>

<template>
  <header class="header">
    <BaseContainer class="header__inner">
      <AppLogo />

      <nav class="header__nav" aria-label="Основная навигация">
        <ul class="header__links">
          <li v-for="link in navLinks" :key="link.to">
            <NuxtLink :to="link.to" class="header__link">
              {{ link.label }}
            </NuxtLink>
          </li>
        </ul>
      </nav>

      <div class="header__actions">
        <BaseButton to="/login" variant="secondary" class="header__login">
          Войти
        </BaseButton>
        <BaseButton to="/profile" variant="secondary" class="header__login">
          Профиль
        </BaseButton>
        <BaseButton :to="installUrl">
          Установить
        </BaseButton>
      </div>
    </BaseContainer>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 10;
  border-bottom: 1px solid var(--color-border);
  background-color: color-mix(in srgb, var(--color-bg) 85%, transparent);
  backdrop-filter: blur(12px);
}

.header__inner {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: var(--space-6);
  height: var(--header-height);
}

.header__nav {
  justify-self: center;
}

.header__links {
  display: flex;
  gap: var(--space-6);
  padding: 0;
  list-style: none;
}

.header__link {
  color: var(--color-text-muted);
  font-weight: 500;
  text-decoration: none;
  transition: color var(--transition-fast);
}

.header__link:hover {
  color: var(--color-text);
}

.header__actions {
  display: flex;
  gap: var(--space-3);
}

/* Навигация переедет в мобильное меню на следующем шаге */
@media (max-width: 960px) {
  .header__nav {
    visibility: hidden;
  }
}

@media (max-width: 560px) {
  .header__login {
    display: none;
  }
}
</style>
