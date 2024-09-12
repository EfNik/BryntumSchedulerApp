<template>
  <header class="header">
    <nav class="navbar">
      <div class="app-name">Task Management</div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'HeaderNavbar'
}
</script>

<style scoped>
.header {
  background-color: #42b883; /* Vue 3 default green */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Light shadow for depth */
  border-radius: 12px; /* Rounded corners */
  margin: 10px; /* Adds margin around the header */
}

.navbar {
  max-width: 1200px; /* Max width for the navbar content */
  margin: 0 auto; /* Center the navbar horizontally */
  padding: 1rem 2rem; /* Padding for spacing */
  display: flex; /* Flexbox layout */
  justify-content: center; /* Center the content */
  align-items: center; /* Center vertically */
}

.app-name {
  color: white;
  font-size: 1.75rem; /* Text size slightly larger */
  font-weight: bold; /* Bold for emphasis */
}
</style>
