<script>
import axios from "axios";

export default {
  data() {
    return {
      name: "",
      number: "",
      message: "",
    };
  },
  methods: {
    async submitForm() {
      try {
        const response = await axios.post(
          "https://emiloglu.com:5000/admin/submit",
          {
            name: this.name,
            number: this.number,
            message: this.message,
          },
        );
        alert(response.data.message);
        this.name = "";
        this.number = "";
        this.message = "";
      } catch (error) {
        console.error(error);
        alert("There was an error submitting the form");
      }
    },
  },
};
</script>

<template lang="">
  <header>
    <Header></Header>
  </header>
  <div class="map">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.594312971266!2d49.9079985!3d40.417837199999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x403063e72f5aa46d%3A0xbe28503bce8e61ce!2sBMS%20Plaza!5e0!3m2!1str!2saz!4v1725308319723!5m2!1str!2saz"
      width="100%"
      height="100%"
      style="border: 0"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
  <div class="contact_container_form">
    <div class="contact_container_form_first">
      <div class="logo_contact">
        <img src="../../assets/images/logo-removebg-preview.png" alt="" />
        <h1>EMİLOĞLU MMC</h1>
      </div>
      <div class="contact_form_info">
        <ion-icon name="call-outline"></ion-icon>
        <a href="tel:+994503552263">+994 50 355 22 63</a>
      </div>
      <div class="contact_form_info">
        <ion-icon name="mail-outline"></ion-icon>
        <a href="mailto:ahmedemil@mail.ru">ahmedemil@mail.ru</a>
      </div>

      <div class="location_contact">
        <p>
          <ion-icon name="location-outline" style="color: #fff"></ion-icon
          >-AZ1031 Azərbaycan Bakı Ş Nizami Rayonu Davud Aslan 2
        </p>
      </div>
      <div class="social_media_contact">
        <h3>BİZİ İZLƏYİN</h3>
        <div class="social_icon_contact">
          <a href="https://www.instagram.com/emiloglu_mebel/"
            ><ion-icon name="logo-instagram"></ion-icon
          ></a>
          <a href="#"><ion-icon name="logo-facebook"></ion-icon></a>
          <a href="#"><ion-icon name="logo-linkedin"></ion-icon></a>
        </div>
      </div>
    </div>
    <div class="contact_container_form_second">
      <h3>ƏLAQƏ</h3>
      <h1>
        <strong style="color: #00b1e5; filter: brightness(120%)"
          >Bizimlə əlaqə</strong
        >
        saxlayın
      </h1>
      <form @submit.prevent="submitForm">
        <div class="input_username">
          <ion-icon name="person-outline"></ion-icon>
          <input v-model="name" type="text" placeholder="Ad" />
        </div>
        <div class="input_contact">
          <div
            class="space"
            style="width: 30px; background-color: #1b3c54"
          ></div>
          <div class="input_contact_icons">
            <ion-icon
              name="call-outline"
              style="margin-left: 10px !important"
            ></ion-icon>
            <input v-model="number" type="tel" placeholder="Əlaqə Nömrəsi" />
          </div>
        </div>
        <input
          v-model="message"
          type="text"
          placeholder="Mesajınızı qeyd edin"
          class="message_contact"
        />
        <input
          type="submit"
          value="Göndər"
          style="border: 2px solid #bababa; border-radius: 30px"
          class="send_contact"
        />
      </form>
    </div>
  </div>
</template>
<style scoped>
header {
  background-color: #f49112;
}

.map {
  height: 42vh;
  filter: brightness(70%);
}

.contact_container_form {
  height: 80vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: #f49112;
  background-size: 100% 100%;
}

.contact_container_form_second h1 {
  color: #fff;
  font-size: 30px;
  margin-bottom: 20px;
  font-family: "Poppins", sans-serif;
}

.contact_container_form_second h3 {
  color: #fff;
  font-size: 20px;
  margin-bottom: 10px;
  font-family: "Poppins", sans-serif;
  text-decoration: underline rgb(255, 132, 0);
}

.contact_container_form_first {
  display: flex;
  height: 100%;
  background-image: url(../assets/images/contactbckg.png);
  background-size: 100% 100%;
  flex-direction: column;
  width: 50%;
  padding: 70px;
}
.contact_container_form_first ion-icon {
  margin-left: 9px;
}
.contact_form_info {
  display: flex;
  padding: 20px;
  margin-left: 20px;
}

.logo_contact {
  display: flex;
  font-family: "Poppins", sans-serif;
  align-items: center;
  font-size: 20px;
  color: #fff;
}

.social_media_contact h3 {
  color: #fff;
  font-size: 23px;
  font-family: "Poppins", sans-serif;
  text-decoration: underline rgb(255, 132, 0);
}

.social_media_contact ion-icon {
  color: #bababa;
  font-size: 22px;
  margin-top: 10px;
}

.logo_contact img {
  width: 70px;
}

.logo_contact {
  margin-bottom: 50px;
}

.contact_form_info a {
  color: #fff;
  font-size: 22px;
  margin-left: 10px;
  font-family: "Poppins", sans-serif;
}

.contact_form_info ion-icon {
  font-size: 22px;
  color: #fff;
}

.location_contact {
  font-size: 24px;
  color: #fff;
  padding: 20px;
  margin-left: 20px;
  font-family: "Poppins", sans-serif;
}

.contact_container_form_second {
  display: flex;
  margin: auto;
  flex-direction: column;
}

.contact_container_form_second form input {
  border-radius: 7px;
  border: none;
}

.input_username {
  position: relative;
  width: 100%;
  display: flex;
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  border: 2px solid #bababa;
  padding: 10px;
}

.input_username input {
  background-color: rgb(255, 255, 255);
  color: #000000;
  width: 90%;
}

.input_contact {
  position: relative;
  width: 100%;
  display: flex;
  color: #fff;
  border-radius: 10px;
  margin-top: 20px;
  justify-content: space-around;
}

.input_username ion-icon {
  width: 10%;
  color: #000000;
  font-size: larger;
}

.input_contact_icons {
  display: flex;
  height: 100%;
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  border: 2px solid #bababa;
}

.input_contact ion-icon {
  width: 50px;
  color: #000000;
  font-size: larger;
  margin: auto;
  background-color: rgb(255, 255, 255);
}

.contact_container_form_second form {
  display: flex;
  flex-direction: column;
}
.contact_container_form {
  background-color: #1b3c54;
}
.input_contact_icons {
  padding: 10px;
}
.input_contact_icons input {
  border-radius: 10px;
  color: #000000;
  background-color: rgb(255, 255, 255);
}

.message_contact {
  padding-bottom: 200px;
  margin-top: 20px;
  padding-top: 10px;
  padding-left: 10px;
  background-color: rgb(255, 255, 255);
  color: #000000;
  border: 2px solid #bababa;
}

.send_contact {
  position: relative;
  width: 111px;
  margin-top: 20px;
  height: 42px;
  border-radius: 40px;
  background: none;
  color: #ffffff;
  background-color: rgba(0, 81, 255, 0.685);
}

.social_media_contact {
  margin-left: 17px;
  margin-top: 50px;
}

.logo_contact {
  display: flex;
  align-items: center;
}

.logo_contact img {
  margin-bottom: 5px;
}

@media only screen and (max-width: 988px) {
  .contact_container_form {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .contact_container_form_first {
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
  }

  input {
    width: 90%;
    margin: auto;
  }

  .input_username {
    width: 90%;
    margin: auto;
  }

  .input_contact {
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: auto;
    margin-top: 10px;
  }

  .input_contact:nth-child(2) {
    margin-top: 10px;
  }

  .social_media_contact {
    margin-left: 25px;
  }

  .input_contact input {
    width: 90%;
    margin: auto;
  }
}

@media only screen and (max-width: 818px) {
  .text_main_top {
    font-size: 27px;
  }

  .text_main_second {
    font-size: 27px;
  }

  .text_main_second img {
    width: 180px !important;
  }

  .contact_div {
    width: 100%;
  }
}
</style>
