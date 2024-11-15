<template>
  <div class="services_container">
    <header>
      <Header></Header>
    </header>
    <h1
      style="text-align: center; font-family: &quot;Poppins&quot;, sans-serif"
    >
      Xidmətlərimiz
    </h1>
    <p
      style="
        text-align: center;
        font-family: &quot;Poppins&quot;, sans-serif;
        color: gray;
      "
    >
      EmilOğlu MMC 4 sahədə xidmətinizdədir
    </p>
    <div class="everything">
      <div class="img_everthing">
        <img src="../assets/images/image_11.png" alt="" />
      </div>
      <div class="services_all_container">
        <div>
          <div
            v-for="(service, index) in services"
            :key="index"
            class="service"
            @click="toggleService(index)"
          >
            <div class="text_services">
              <h3>
                <ion-icon name="chevron-down-outline"></ion-icon>
                {{ service.title }}
              </h3>
              <ul v-if="service.isVisible && service.items">
                <li
                  v-for="(item, index) in service.items"
                  :key="`item-${index}`"
                >
                  {{ item }}
                </li>
              </ul>
              <p v-else-if="service.isVisible && service.text">
                {{ service.text }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <FooterC></FooterC>
  </div>
</template>
<script>
import Header from "../components/HeaderC.vue";
import FooterC from "../components/FooterC.vue";
export default {
  components: {
    Header,
    FooterC,
  },
  data() {
    return {
      services: [
        {
          title: "Laminat",
          items: [
            "Türkiyə və Rusiya istehsalı olan",
            "geniş çeşiddə laminat",
            "Laminatın quraşdırılması",
            "Laminat seçimi ilə bağlı məsləhət məhsulları",
          ],
          isVisible: false,
        },
        {
          title: "İnşaat",
          items: [
            "Beton-dəmir-qəlib işləri",
            "Hörgü-suvaq işləri",
            "Şpaplopka işləri",
            "Kafel-metlax işləri",
          ],
          isVisible: false,
        },
        {
          title: "Mebel",
          items: [
            "Mebellərin xüsusi dizaynı",
            "Mebel satışı",
            "Mebel seçimi ilə bağlı məsləhət",
            "Mebel üçün məkanın planlaşdırılmasında dəstək",
          ],
          isVisible: false,
        },
        { title: "Rabitə", items: ["Çox yaxında"], isVisible: false },
      ],
    };
  },
  methods: {
    toggleService(index) {
      this.services[index].isVisible = !this.services[index].isVisible;
    },
  },
};
// Diğer HomeView kodları...
</script>
<style scoped>
header {
  background-color: #141f55;
}
.everything {
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-top: 30px;
}
.everything img {
  width: 100%;
  height: 500px;
  border-radius: 7px;
  opacity: 90%;
  margin: auto;
  margin-left: 50px;
}
.img_everthing {
  display: block;
  width: 50%;
}
.text_services {
  color: #fff;
  padding: 5px;
  display: flex;
  width: 100%;
  flex-direction: column;
  flex-flow: wrap;
  flex-shrink: 0;
  flex-direction: column;
  flex-wrap: wrap;
  height: 100%;
}
.text_services h3 {
  display: flex;
  color: black;
  align-items: center;
}
.services_all_container {
  width: 70%;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-around !important;
}
.inaloglandeyil {
  display: flex;
  flex-direction: row-reverse !important;
}
#services_first {
  width: 100%;
  max-width: 630px;
  border: 1px solid rgb(176, 176, 176);
  margin: auto;
  background-color: rgba(0, 162, 255, 0.53);
  border-radius: 10px;
  height: 100%;
  font-family: "Poppins", sans-serif;
  display: flex;
  margin-top: 20px;
}
.service {
  width: 100%;
  max-width: 630px;
  border: 1px solid rgb(176, 176, 176);
  margin: auto;

  border-radius: 10px;
  height: 100%;
  font-family: "Poppins", sans-serif;
  display: flex;
  padding-top: 20px;
  padding-left: 20px;
  padding-bottom: 20px;
  margin-top: 20px;
}
#services_first:hover {
  background-color: #f49112;
  transition: 0.7s ease-in;
}
.text_services ul li {
  margin-left: 40px;
  color: black;
}
@media only screen and (max-width: 1268px) {
  .everything .img_everthing {
    display: none;
  }
  .services_all_container {
    width: 100%;
  }
}
</style>
