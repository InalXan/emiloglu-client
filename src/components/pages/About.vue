<template>
  <div class="container">
    <!-- // start header -->
    <div class="header">
      <div class="overlay"></div>
      <div class="text">
        <h1>Haqqimizda</h1>
        <p>Geleceyinizi bizimle qurun</p>
      </div>
    </div>
    <!-- // end header  -->
    <!-- about text start  -->
    <div class="about_contain">
      <div class="about">
        <div class="left-side">
          <div class="img_contain">
            <div class="squere"></div>
            <div class="image"></div>
          </div>
        </div>
        <div class="right-side">
          <div class="about_header">
            <span style="color: pink; text-decoration: underline"
              >Biz Kimik?</span
            >
            <h1 style="font-size: 1.8rem">
              "EMILOGLU MMC." <br />
              <span style="color: pink">Musteri Yonumlu</span> yanasma ile
              <br />
              keyfiyyetli mehsul ve <br />
              <span style="color: pink">insaat xidmetleri</span> teklif edir.
            </h1>
          </div>
          <div class="about_text">
            <ul>
              <li>
                <ion-icon name="checkmark-circle"></ion-icon>
                <p style="font-size: 0.8rem">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo
                </p>
              </li>
              <li>
                <ion-icon name="checkmark-circle"></ion-icon>
                <p style="font-size: 0.8rem">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- about text end -->
    <!-- customer message start  -->
    <div class="customer_msg">
      <div class="overlay"></div>
      <h1>
        "Keyfiyyetli mehsullar, <br />
        yenilikci yanasmalar ve, <br />
        musteri memnuniyyetleri ile <br />
        her zaman yaninizdayiq"
      </h1>
    </div>
    <!-- customer message end -->
    <!-- services start  -->
    <div class="service_box">
      <div class="service_left">
        <span style="color: #fff; font-style: italic">Deyerimiz</span>
        <h2>
          Keyfiyyetli Xidmet, <br />
          Yenilici yanasmalar, <br />
          Musteri Memnuniyyeti ile <br />
          Her Zaman Yaninizdayiq!
        </h2>
      </div>
      <div class="service_right">
        <div class="cards">
          <div class="card">
            <div>
              <img
                src="https://imgs.search.brave.com/SBBPyrIILA01uT5VDKnk0TEJ1YEGE7V0HidCyPTYRUU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA4LzI2LzQzLzUw/LzM2MF9GXzgyNjQz/NTAxMV9iOWJQdzQy/SWF3bzFEYnVhbzBF/bDZtNmRKUlJweTFI/bC5qcGc"
              />
            </div>
            <div>
              <h2>Vision</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim
              </p>
            </div>
          </div>
          <div class="card">
            <div>
              <img
                src="https://imgs.search.brave.com/SBBPyrIILA01uT5VDKnk0TEJ1YEGE7V0HidCyPTYRUU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA4LzI2LzQzLzUw/LzM2MF9GXzgyNjQz/NTAxMV9iOWJQdzQy/SWF3bzFEYnVhbzBF/bDZtNmRKUlJweTFI/bC5qcGc"
              />
            </div>
            <div>
              <h2>Vision</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- services end  -->
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  min-height: 100vh;
}
/*	header start */
.header {
  position: relative;
  width: 100%;
  height: 45vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("../../assets/images/build.jpg");
  background-size: cover;
  background-position: center;
  z-index: -2;
}
.header .text {
  text-align: center;
  color: #fff;
  z-index: 50;
}
.header .text h1 {
  font-weight: bold;
  font-size: 4rem;
  z-index: 1;
  margin: 10px;
}
.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-color: rgba(0, 0, 0, 0.3);
}
/*	header end */
.about_contain {
  width: 100%;
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.about {
  width: 100%;
  margin: 10px;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  align-items: center;
}
.left-side,
.right-side {
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
}
.right-side {
  flex-direction: column;
}
.squere {
  position: absolute;
  margin: -35px -35px;
  width: 150px;
  height: 150px;
  z-index: -5;
  border: 15px solid blue;
}
.img_contain .image {
  width: 350px;
  height: 350px;
  z-index: 1;
  background-image: url("../../assets/images/build-about.jpg");
  background-position: center;
  background-size: cover;
}
.about_header {
  text-align: left;
}
.about_text {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.about_text ul {
  width: 100%;
  max-width: 400px;
}
.about_text ul li ion-icon {
  font-size: 5rem;
  color: pink;
}
.about_text ul li {
  display: flex;
  font-style: italic;
}
ul li {
  list-style: none;
}
/* customer message start */
.customer_msg {
  position: relative;
  width: 100%;
  min-height: 50vh;
  background-image: url(../../assets/images/card-1.jpg);
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-style: italic;
  color: #fff;
  z-index: 1;
  font-weight: bold;
}
.customer_msg h1 {
  margin: 15px;
}
/*customer message end */
/*services start */
.service_box {
  width: 100%;
  min-height: 50vh;
  background: pink;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
}
.cards {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.cards .card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 300px;
  padding: 15px;
  margin: 10px;
  border-radius: 15px;
  background: #fff;
}
.cards .card p {
  width: 100%;
  font-size: 0.8rem;
}
.cards .card img {
  width: 50px;
}
/*services end */
</style>
