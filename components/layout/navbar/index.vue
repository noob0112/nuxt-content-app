<script setup lang="ts">
import Nav from "./components/Nav.vue";
import Logo from "./components/Logo.vue";
import ThemeToggle from "./components/ThemeToggle.vue";
</script>

<template>
  <div class="navbar sticky top-0 left-0 h-14 flex items-center">
    <div
      class="container flex items-center gap-2 mx-auto px-5 h-9 xl:max-w-6xl"
    >
      <Logo class="h-9 w-9" />
      <Nav />
      <Search class="ml-auto" />
      <div class="divider divider-horizontal" />
      <ThemeToggle />
    </div>
  </div>
</template>

<style scoped lang="scss">
.divider {
  margin-right: unset;
  margin-left: unset;
}
</style>
