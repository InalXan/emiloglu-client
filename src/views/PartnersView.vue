<template>
  <div class="partners_container">
    <header>
      <HeaderC></HeaderC>
    </header>
    <Partners></Partners>
  </div>
</template>

<script>
import HeaderC from "../components/HeaderC.vue";
import Partners from "../components/pages/Partners.vue";

export default {
  name: "YourMainComponent",
  components: {
    HeaderC,
    Partners,
  },
};
</script>
<style scoped>
header {
  background-color: #141f55;
}
</style>
