<template>
  <div class="serviceshome_container">
    <div class="services_subject_container">
      <p>Mebel</p>
      <img src="../../assets/images/1.jpg" alt="" />
      <a href="#">Etrafli</a>
    </div>
    <div class="services_subject_container">
      <p>Mebel</p>
      <img src="../../assets/images/1.jpg" alt="" />
      <a href="#">Etrafli</a>
    </div>
    <div class="services_subject_container">
      <p>Mebel</p>
      <img src="../../assets/images/1.jpg" alt="" />
      <a href="#">Etrafli</a>
    </div>
    <div class="services_subject_container">
      <p>Mebel</p>
      <img src="../../assets/images/1.jpg" alt="" />
      <a href="#">Etrafli</a>
    </div>
  </div>
</template>

<style scoped>
.serviceshome_container {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  flex-flow: wrap;
  width: 100%;
  flex-shrink: 0;
}
.services_subject_container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 180px;
  border: 1px solid white;
}
.services_subject_container img {
  width: 80%;
  margin: auto;
}
</style>
