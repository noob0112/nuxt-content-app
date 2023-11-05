<script setup lang="ts">
const { Theme, changeTheme } = useTheme();
const isDark = ref(false);

watch(isDark, toggleTheme);

function toggleTheme() {
  if (isDark.value) {
    changeTheme(Theme.DARK);
  } else {
    changeTheme(Theme.LIGHT);
  }
}
</script>

<template>
  <input v-model="isDark" type="checkbox" class="toggle" :checked="isDark" />
</template>
