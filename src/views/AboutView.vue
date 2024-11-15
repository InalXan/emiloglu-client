<template>
  <header>
    <HeaderComponent />
  </header>

  <AboutComponent />
</template>
<script setup>
import HeaderComponent from "../components/HeaderC.vue";
import AboutComponent from "../components/pages/About.vue";
</script>

<style scoped>
header {
  background-color: #141f55;
}
</style>
