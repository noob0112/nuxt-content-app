<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="text-center">
    Powered by
    <span>hoang</span>
    | Copyright © 2023-{{ currentYear }} | MIT License
  </footer>
</template>
