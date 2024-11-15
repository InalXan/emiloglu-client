<script>
import { isNavigationFailure, NavigationFailureType } from "vue-router";
export default {
  data() {
    return {};
  },
  methods: {
    async goToProfile() {
      const userId = this.$route.params.id;
      const navigationFailure = await this.$router.push(
        `/admin/profile/${userId}`,
      );
      if (
        isNavigationFailure(navigationFailure, NavigationFailureType.aborted)
      ) {
        console.log(navigationFailure.to);
        console.log(navigationFailure.from);
      } else {
        console.error("404 Page Not Found");
      }
    },

    async goToCategory() {
      const userId = this.$route.params.id;
      const navigationFailure = await this.$router.push(
        `/admin/${userId}/add/category`,
      );
      if (
        isNavigationFailure(navigationFailure, NavigationFailureType.aborted)
      ) {
        console.log(navigationFailure.to);
        console.log(navigationFailure.from);
      } else {
        console.error("404 Page Not Found");
      }
    },
    async goToSubcategory() {
      const userId = this.$route.params.id;
      const navigationFailure = await this.$router.push(
        `/admin/${userId}/add/subcategory`,
      );
      if (
        isNavigationFailure(navigationFailure, NavigationFailureType.aborted)
      ) {
        console.log(navigationFailure.to);
        console.log(navigationFailure.from);
      } else {
        console.error("404 Page Not Found");
      }
    },
    async goToSponsors() {
      // Corrected method name
      const userId = this.$route.params.id;
      const navigationFailure = await this.$router.push(
        `/admin/${userId}/add/sponsor`,
      );
      if (
        isNavigationFailure(navigationFailure, NavigationFailureType.aborted)
      ) {
        console.log(navigationFailure.to);
        console.log(navigationFailure.from);
      } else {
        console.error("404 Page Not Found");
      }
    },

    async goToInbox() {
      // Corrected method name
      const userId = this.$route.params.id;
      const navigationFailure = await this.$router.push(
        `/admin/${userId}/messagebox`,
      );
      if (
        isNavigationFailure(navigationFailure, NavigationFailureType.aborted)
      ) {
        console.log(navigationFailure.to);
        console.log(navigationFailure.from);
      } else {
        console.error("404 Page Not Found");
      }
    },
    async goToProducts() {
      // Corrected method name
      const userId = this.$route.params.id;
      const navigationFailure = await this.$router.push(
        `/admin/${userId}/add/product`,
      );
      if (
        isNavigationFailure(navigationFailure, NavigationFailureType.aborted)
      ) {
        console.log(navigationFailure.to);
        console.log(navigationFailure.from);
      } else {
        console.error("404 Page Not Found");
      }
    },
    async goToSubProducts() {
      // Corrected method name
      const userId = this.$route.params.id;
      const navigationFailure = await this.$router.push(
        `/admin/${userId}/add/sub/product`,
      );
      if (
        isNavigationFailure(navigationFailure, NavigationFailureType.aborted)
      ) {
        console.log(navigationFailure.to);
        console.log(navigationFailure.from);
      } else {
        console.error("404 Page Not Found");
      }
    },
    async goToGallery() {
      const userId = this.$route.params.id;
      const navigationFailure = await this.$router.push(
        `/admin/${userId}/add/gallery`,
      );
      if (
        isNavigationFailure(navigationFailure, NavigationFailureType.aborted)
      ) {
        console.log(navigationFailure.to);
        console.log(navigationFailure.from);
      } else {
        console.error("404 Page Not Found");
      }
    },

    async goToAbout() {
      const userId = this.$route.params.id;
      const navigationFailure = await this.$router.push(
        `/admin/${userId}/add/about`,
      );
      if (
        isNavigationFailure(navigationFailure, NavigationFailureType.aborted)
      ) {
        console.log(navigationFailure.to);
        console.log(navigationFailure.from);
      } else {
        console.error("404 Page Not Found");
      }
    },
  },
};
</script>

<template>
  <div class="wrapper">
    <input type="checkbox" id="btn" hidden />
    <label for="btn" class="menu-btn">
      <ion-icon class="M" name="grid"></ion-icon>
      <ion-icon class="M" name="grid-outline"></ion-icon>
    </label>
    <nav id="sidebar">
      <div class="title">EMILOGLU</div>
      <ul class="list-items">
        <li>
          <span @click="goToProfile()"
            ><ion-icon name="home-outline"></ion-icon> Profil</span
          >
        </li>
        <li>
          <span @click="goToProducts()"
            ><ion-icon name="images-outline"></ion-icon> Mal elave ele</span
          >
        </li>
        <li>
          <span @click="goToCategory()"
            ><ion-icon name="images-outline"></ion-icon> Kategoriya Əlavə
            Et</span
          >
        </li>

        <li>
          <span @click="goToSubcategory()"
            ><ion-icon name="images-outline"></ion-icon> Alt Kategoriya</span
          >
        </li>
        <li>
          <!-- Corrected span tag -->
          <span @click="goToSponsors()"
            ><ion-icon name="send-outline"></ion-icon>Sponsorlar</span
          >
        </li>

        <li>
          <!-- Corrected span tag -->
          <span @click="goToAbout()"
            ><ion-icon name="send-outline"></ion-icon>Haqqımızda</span
          >
        </li>
        <li>
          <span @click="goToInbox()"
            ><ion-icon name="archive-outline"></ion-icon>Mesajlar</span
          >
        </li>
      </ul>
    </nav>
  </div>
</template>

<style lang="less">
.wrapper {
  height: 100%;
  width: 300px;
  position: relative;
}
.wrapper .menu-btn {
  position: absolute;
  left: 20px;
  top: 10px;
  background: #fff;
  color: #222;
  height: 45px;
  width: 45px;
  z-index: 9999;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}
#btn:checked ~ .menu-btn {
  left: 247px;
}
.wrapper .menu-btn ion-icon {
  position: absolute;
  font-size: 23px;
  transition: all 0.3s ease;
}
.wrapper .menu-btn ion-icon.M {
  opacity: 1;
}
#btn:checked ~ .menu-btn ion-icon.M {
  opacity: 0;
  transform: rotate(-180deg);
}
#btn:checked ~ .menu-btn ion-icon {
  opacity: 0;
  transform: rotate(180deg);
}
#sidebar {
  position: fixed;
  background: #fff;
  height: 100%;
  width: 270px;
  overflow: hidden;
  border-right: 1px solid #222;
  left: -270px;
  z-index: 1000;
  transition: all 0.3s ease;
}
#btn:checked ~ #sidebar {
  left: 0;
}
#sidebar .title {
  line-height: 65px;
  text-align: center;
  background: #fff;
  font-size: 25px;
  font-weight: 600;
  color: #222;
  border-bottom: 1px solid #fff;
}
#sidebar .list-items {
  position: relative;
  background: #fff;
  width: 100%;
  height: 100%;
  list-style: none;
}
#sidebar .list-items li {
  padding-left: 40px;
  line-height: 50px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid #fff;
  transition: all 0.3s ease;
}
#sidebar .list-items li:hover {
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 0px 10px 3px #222;
}
#sidebar .list-items li:first-child {
  border-top: none;
}
#sidebar .list-items li span {
  cursor: pointer;
  color: #222;
  text-decoration: none;
  font-size: 18px;
  font-weight: 500;
  height: 100%;
  width: 100%;
  display: block;
}
#sidebar .list-items li span ion-icon {
  margin-right: 20px;
}
#sidebar .list-items .icons {
  width: 100%;
  height: 40px;
  text-align: center;
  position: absolute;
  bottom: 100px;
  line-height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}
#sidebar .list-items .icons span {
  height: 100%;
  width: 40px;
  display: block;
  margin: 0 5px;
  font-size: 18px;
  color: #222;
  background: #fff;
  border-radius: 5px;
  border: 1px solid #222;
  transition: all 0.3s ease;
}
#sidebar .list-items .icons span:hover {
  background: #fff;
}
.list-items .icons span:first-child {
  margin-left: 0px;
}
.content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #222;
  z-index: -1;
  width: 100%;
  text-align: center;
}
.content .header {
  font-size: 45px;
  font-weight: 700;
}
.content p {
  font-size: 40px;
  font-weight: 700;
}
</style>
