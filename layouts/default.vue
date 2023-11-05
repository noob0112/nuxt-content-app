<template>
  <div class="app flex flex-col">
    <LayoutNavbar></LayoutNavbar>
    <div class="content grow">
      <!-- <div class="h-40 bg-black"></div> -->
      <!-- <LayoutWave /> -->
      <div class="container mx-auto px-5 py-10 xl:max-w-6xl">
        <slot />
      </div>
      <!-- <LayoutWave class="rotate-180" /> -->
      <!-- <div class="h-40 bg-black"></div> -->
    </div>
    <LayoutFooter />
  </div>
</template>

<style scoped lang="scss">
.app {
  min-height: 100vh;
}
</style>
