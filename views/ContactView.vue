<template>
  <div class="contact_container">
    <header>
      <Header />
    </header>
    <ContactForm />
  </div>
</template>
<script setup>
import Header from "../components/HeaderC.vue";
import ContactForm from "../components/pages/ContactForm.vue";
</script>

<style lang="less">
.contact_container {
  background: #222;
}
header {
  background: #141f55;
}
</style>
