<template>
  <header style="background-color: #141f55">
    <div class="logo">
      <a href="/">
        <img src="../assets/images/logo_home.png" style="width: 130px" alt="" />
      </a>
    </div>
    <nav>
      <div class="nav_menu">
        <ul :class="{ show: isNavMenuVisible }">
          <li><a href="/about">Haqqımızda</a></li>
          <li><a href="/services">Xidmətlərimiz</a></li>
          <li><a href="/products">Məhsullar</a></li>
          <li><a href="/sponsors">Tərəfdaşlarımız</a></li>
        </ul>
      </div>

      <div class="nav_social_media">
        <a href="https://www.instagram.com/emiloglu_mebel/"
          ><ion-icon name="logo-instagram"></ion-icon
        ></a>
        <a href="#"><ion-icon name="logo-facebook"></ion-icon></a>
        <a href="#"><ion-icon name="logo-linkedin"></ion-icon></a>
      </div>

      <a href="/contact" class="contact_header"> Əlaqə </a>
      <div class="burger-menu" @click="toggleNavMenu">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isNavMenuVisible: false,
    };
  },
  methods: {
    toggleNavMenu() {
      this.isNavMenuVisible = !this.isNavMenuVisible;
    },
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Work+Sans&display=swap");
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
header {
  min-height: 70px;
  font-family: "Poppins", sans-serif;
  display: flex;
  background: #141f55;
  align-items: center;
}
header nav {
  width: 80%;
  display: flex;
  align-items: center;
  background: #141f55;
  justify-content: space-between;
}
header a {
  text-decoration: none;
}
header nav ul {
  display: flex;
  list-style-type: none;
}
.contact_header {
  padding: 12px 24px;
  border-radius: 4px;
  color: #ffffff;
  border: 2px solid #ffffff;
}
header nav ul li a {
  margin-left: 25px;
}
header .logo {
  position: relative;
  width: 20%;
  height: 100%;
  left: 10px;
  align-items: center;
  display: flex;
}
.logo img {
  width: 50px;
  display: block;
  filter: brightness(170%);
}
.logo a {
  color: #fff;
  display: block;
}
nav ul li {
  display: inline-block;
  margin-right: 20px;
}
.contact_header {
  margin: 10px;
}
nav ul li a {
  text-decoration: none;
  font-weight: 600;
  position: relative;
  padding-bottom: 3px;
  color: #ffffff; /* Yazı rengini ihtiyacınıza göre ayarlayabilirsiniz */
}

nav ul li a::after {
  content: "";
  display: block;
  width: 0;
  height: 2px;

  background-color: #00b1e5;
  position: absolute;
  bottom: 0;
  left: 0;
  transition: width 0.5s ease;
}

nav ul li a:hover::after {
  width: 100%;
}
nav ul li a:hover {
  transition: width 0.5s ease;
  color: #00b1e5;
}
header nav ion-icon {
  margin-left: 14px;
  color: #ffffff;
  font-size: larger;
}
.burger-menu {
  display: none;
  flex-direction: column;
  cursor: pointer;
  margin: 15px;
}

.line {
  width: 20px;
  height: 2px;
  background-color: #ffffff;
  margin: 3px 0;
}
@media only screen and (max-width: 988px) {
  header nav ul li a {
    margin-left: 7px;
  }
  .nav_social_media {
    display: none;
  }
}
@media only screen and (max-width: 768px) {
  .nav_menu ul {
    display: none;
    flex-direction: column;
    width: 100%;
    position: absolute;
    height: 35%;
    transition: transform 0.5s ease-in-out;
    top: 70px;
    right: 0;
    background-color: rgba(28, 33, 63, 0.72);
    justify-content: space-evenly;
    color: #fff;
    text-align: center;
    z-index: 1000;
  }
  .nav_menu ul li {
    margin-top: 15px;
  }
  .nav_menu ul li a {
    color: #fff;
    position: relative;
    padding-top: 20px;
  }

  .nav_menu ul.show {
    display: flex;
  }

  .nav_social_media {
    display: none;
  }

  .burger-menu {
    display: flex;
    margin: 0;
  }
}
@media only screen and (max-width: 428px) {
  .logo a {
    font-size: 12px;
  }
}
</style>
