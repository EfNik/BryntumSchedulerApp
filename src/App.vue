<script setup>
import UserDashboard from './views/UserDashboard.vue'
import HeaderNavbar from './components/HeaderNavbar.vue'
</script>

<template>
  <header>
    <HeaderNavbar />
  </header>

  <main class="mai">
    <UserDashboard class="dashboard" />
  </main>
</template>

<style scoped>
.dashboard {
  height: 50vh;
}

.mai {
  height: 100vh;
  padding-top: 3rem;
}
</style>
