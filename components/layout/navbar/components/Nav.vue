<script setup lang="ts">
import { routes } from "~/constants/route";

function getHeadPath(path: string) {
  return `/${path.split("/")[1]}`;
}
</script>

<template>
  <nav class="flex items-center">
    <ul class="menu menu-horizontal gap-x-2">
      <li v-for="{ path, name, label } in routes" :key="name">
        <nuxt-link
          :class="{
            active: path === getHeadPath($route.path),
          }"
          :to="path"
        >
          {{ label }}
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss"></style>
