<script setup lang="ts">
import { routes } from "~/constants/route";

</script>

<template>
  <nav class="flex items-center">
    <ul class="nav flex items-center gap-x-2">
      <li
        v-for="{ path, name, label } in routes"
        :key="name"
        class="relative rounded-lg px-3 py-1.5"
        :class="{
          active: $route.path === path,
        }"
      >
        <nuxt-link :to="path">{{ label }}</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
.relative {
  &.active {
    background-color: #282a36;
    color: #fff;
  }
}
</style>
