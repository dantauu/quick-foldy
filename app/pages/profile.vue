<script setup lang="ts">
  const { user, logout } = useAuth()

  const handleLogout = async () => {
    logout()
    await navigateTo('/')
  }
  console.log("user", user)
</script>

<template>
  <p>Profile page</p>
  <div>
    <p>Name: {{ user?.name }}</p>
    <p>Email: {{ user?.email }}</p>
    <BaseButton variant="secondary" @click="handleLogout">Выйти</BaseButton>
  </div>
</template>