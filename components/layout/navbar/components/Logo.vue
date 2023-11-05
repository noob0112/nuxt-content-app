<script setup lang="ts">
import { route } from "~/constants/route";
</script>

<template>
  <nuxt-link :to="route.home">
    <nuxt-img class="w-full" src="/img/logo.webp" loading="lazy" />
  </nuxt-link>
</template>
