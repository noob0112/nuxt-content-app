<script setup lang="ts">
const { generateString } = useGenerate();
const searchId = `search-${generateString(6)}`;

</script>

<template>
  <label :for="searchId" class="relative">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="absolute bottom-1/2 left-2 translate-y-2/4 h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>
    <input :id="searchId" type="text" placeholder="Search…" class="input input-bordered h-9 pl-8" />
  </label>
</template>
