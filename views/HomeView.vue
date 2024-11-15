<script>
import axios from "axios";
import Header from "../components/HeaderC.vue";
import ServicesHome from "../components/pages/ServicesHome.vue";

export default {
  name: "Partners",
  components: {
    Header,
    ServicesHome,
  },
  data() {
    return {
      sponsors: [],
    };
  },
  created() {
    this.fetchSponsors();
  },
  methods: {
    async fetchSponsors() {
      try {
        const response = await axios.get(
          "https://emiloglu.com/api/fetch/sponsors",
        );
        this.sponsors = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    getImageUrl(path) {
      return path ? `https://emiloglu.com/${path}` : "";
    },
  },
};
</script>

<template>
  <div class="container_index">
    <Header></Header>

    <div class="area">
      <div class="left">
        <div class="boxes">
          <div class="row">
            <div class="box">
              <div class="title">
                <h1>İnşaat</h1>
              </div>

              <div class="image">
                <img src="../assets/images/2.jpg" alt="" />
              </div>

              <div class="btn">
                <RouterLink style="cursor: pointer" to="/products"
                  ><button>Daha Ətraflı</button></RouterLink
                >
              </div>
            </div>

            <div class="box">
              <div class="title">
                <h1>Laminat</h1>
              </div>

              <div class="image">
                <img src="../assets/images/3.jpeg" alt="" />
              </div>

              <div class="btn">
                <RouterLink style="cursor: pointer" to="/products"
                  ><button>Daha Ətraflı</button></RouterLink
                >
              </div>
            </div>

            <div class="box">
              <div class="title">
                <h1>Mebel</h1>
              </div>

              <div class="image">
                <img src="/src/assets/images/1.jpg" alt="" />
              </div>

              <div class="btn">
                <RouterLink style="cursor: pointer" to="/products"
                  ><button>Daha Ətraflı</button></RouterLink
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="right">
        <div class="se">
          <h1>Tərəfdaşlarımız</h1>
          <div class="teref">
            <div
              class="t-img"
              v-for="(sponsor, index) in sponsors"
              :key="index"
            >
              <img :src="getImageUrl(sponsor.image)" :alt="sponsor.name" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
::-webkit-scrollbar {
  display: none;
}
@keyframes slideLeft {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}

.t-img {
  animation: slideLeft 10s linear infinite;
}
.container_index {
  background-image: url(../assets/images/photo1705116382.jpeg);
  width: 100%;
  min-height: 100vh;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.area {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100% - 70px);
}

.left {
  width: 100%;
  overflow: scroll;
  height: 60%;
}

.left .boxes {
  display: flex;
  justify-content: center;
  gap: 48px;
  height: 100%;
  flex-flow: wrap;
  flex-shrink: 0;
  flex-wrap: wrap;
  align-items: center;
}

.left .boxes .row {
  display: flex;
  gap: 24px;
  margin: 10px;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
}

.left .boxes .row .box {
  width: 200px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  padding: 12px 24px;
  background: #141f55;
  background-color: #0a2d4d82;
  border-radius: 12px;
}

.left .boxes .row .box h1 {
  color: #fff;
}

.left .boxes .row .box .image {
  width: 184px;
  height: 184px;
  padding: 2px;
  border: 2px inset #f8e800;
  background: #f8e80080;
  border-radius: 8px;
}

.left .boxes .row .box .image img {
  width: 100%;
  height: 100%;
  border-radius: 8px;
}
.t-img img {
  width: 200px;
  height: 90%;
  filter: brightness(150%);
}
.left .boxes .row .box .btn button {
  padding: 10px 20px;
  background-color: transparent;
  border: 1px solid #ff5733;
  color: white;
  border-radius: 5px;
  transition:
    background-color 0.3s,
    color 0.3s;
}

.left .boxes .row .box .btn button:hover {
  background-color: #ff5733; /* Mouse üzerine geldiğinde arkaplan rengi */
  color: black;
}

.right {
  width: 100%;
  display: flex;
  height: 40%;
  align-items: center;
}

.right .se {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  justify-content: center;
  align-items: center;
}

.right .se h1 {
  color: #fff;
}

.right .se .teref {
  width: 90%;
  display: flex;
  overflow: scroll;
  padding: 10px;
  border-radius: 16px;
}
.btn button {
  font-family: "Poppins", sans-serif;
}
.teref {
  background-color: #b8b8bc57;
}
@media screen and (max-width: 1720px) {
  .left {
    width: 100%;
  }

  .right {
    width: 100%;
  }
}

@media screen and (max-width: 1460px) {
  .left {
    width: 100%;
  }

  .right {
    width: 100%;
  }
}

@media screen and (max-width: 1280px) {
  .left .boxes .row .box .image {
    width: 192px;
    height: 192px;
  }
}
@media screen and (max-width: 1137px) {
  .left .boxes .row .box .image {
    height: 120px;
    width: 120px;
  }
}

@media screen and (max-width: 859px) {
  .left .boxes .row {
    width: 100%;
  }
  .left {
    height: 100%;
  }
}
@media screen and (max-width: 859px) {
  .area {
    flex-direction: column;
  }
  .left {
    width: 100%;
    height: 100%;
  }
  .left .box {
    width: 35%;
  }
  .left .box h1 {
    font-size: 18px;
  }
  .right {
    width: 100%;
  }
  .right .teref {
    height: 30%;
  }
  .container_index {
    height: 100%;
  }
}
</style>
