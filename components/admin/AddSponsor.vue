<template>
  <div class="inbox_container">
    <section class="dashboard">
      <div class="dash-content">
        <div class="overview">
          <div class="title">
            <i class="uil uil-tachometer-fast-alt"></i>
            <span class="text">Sponsors</span>
          </div>
          <div class="boxes">
            <div class="box box1">
              <box-icon name="cloud-upload"></box-icon>
              <span class="text">Şəkil Əlavə Et</span>
              <span class="number">
                <form @submit.prevent="createSponsor">
                  <input v-model="name" placeholder="Sponsor Name" required />
                  <input type="file" @change="onFileChange" required />
                  <button class="reload" type="submit">Əlavə Et</button>
                </form>
              </span>
            </div>
            <div class="box box2" v-if="editMode">
              <form @submit.prevent="updateSponsor">
                <input v-model="name" placeholder="Sponsor Name" required />
                <input type="file" @change="onFileChange" />
                <button type="submit" class="reload">Dəyişdir</button>
              </form>
            </div>
            <div class="box box3">
              <i class="uil uil-comments"></i>
              <span class="text">Yüklənmiş Şəkillərin Sayı</span>
              <span class="number">{{ sponsors.length }}</span>
            </div>
          </div>
        </div>
        <div class="activity">
          <div class="title">
            <i class="uil uil-clock-three"></i>
            <span class="text">Recent Activity</span>
          </div>
          <div v-if="sponsors.length">
            <div
              class="activity-data"
              v-for="sponsor in sponsors"
              :key="sponsor._id"
            >
              <div class="data names">
                <span class="data-title">Sponsor</span>
                <span class="data-list">
                  <img :src="getImageUrl(sponsor.image)" />
                </span>
              </div>
              <div class="data names">
                <span class="data-title">Sponsorun Adı</span>
                <span class="data-list">
                  <h3>{{ sponsor.name }}</h3>
                </span>
              </div>
              <div class="data status">
                <span class="data-title">Ayarlar</span>
                <span class="data-list">
                  <button @click="deleteSponsor(sponsor._id)">
                    <box-icon name="trash-alt" type="solid"></box-icon>
                  </button>
                  <button @click="editSponsor(sponsor)">
                    <box-icon name="edit-alt" type="solid"></box-icon>
                  </button>
                </span>
              </div>
            </div>
          </div>
          <div v-else>
            <p>Heç bir sponsor tapılmadı.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      name: "",
      imageFile: null,
      sponsors: [],
      editMode: false,
      editId: null,
    };
  },
  methods: {
    onFileChange(event) {
      this.imageFile = event.target.files[0];
    },
    async createSponsor() {
      try {
        const formData = new FormData();
        formData.append("name", this.name);
        formData.append("image", this.imageFile);

        const response = await axios.post(
          "https://emiloglu.com/api/new/sponsor",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          },
        );

        this.sponsors.push(response.data);
        this.resetForm();
      } catch (error) {
        console.error(error);
      }
    },
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
    async deleteSponsor(id) {
      try {
        await axios.delete(`https://emiloglu.com/api/delete/sponsor/${id}`);
        await this.fetchSponsors();
      } catch (error) {
        console.error("Error deleting sponsor", error);
      }
    },
    editSponsor(sponsor) {
      this.name = sponsor.name;
      this.editId = sponsor._id;
      this.editMode = true;
    },
    async updateSponsor() {
      try {
        const formData = new FormData();
        formData.append("name", this.name);
        if (this.imageFile) {
          formData.append("image", this.imageFile);
        }

        const response = await axios.put(
          `https://emiloglu.com/api/sponsor/${this.editId}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          },
        );

        const index = this.sponsors.findIndex(
          (sponsor) => sponsor._id === this.editId,
        );
        this.$set(this.sponsors, index, response.data);
        this.resetForm();
        this.editMode = false;
      } catch (error) {
        console.error(error);
      }
    },
    getImageUrl(path) {
      return path ? `https://emiloglu.com/${path}` : "";
    },
    resetForm() {
      this.name = "";
      this.imageFile = null;
      this.editId = null;
      this.editMode = false;
    },
  },
  created() {
    this.fetchSponsors();
  },
};
</script>

<style lang="less">
// color
@primary-color: #222;
@panel-color: #fff;
@text-color: #000;
@black-light-color: #707070;
@border-color: #e6e5e5;
@toggle-color: #ddd;
@box1-color: #4da3ff;
@box2-color: #ffe6ac;
@box3-color: #e7d1fc;
@title-icon-color: #fff;
// transition
@tran-05: all 0.5s ease;
@tran-03: all 0.3s ease;
@tran-02: all 0.2s ease;

.inbox_container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.dashboard {
  background-color: @panel-color;
  min-height: 100vh;
  width: calc(100% - 250px);
  padding: 10px 14px;
  transition: @tran-05;
}

.reload {
  border: none;
  color: #000;
}

.reload:after {
  position: absolute;
  content: "";
  width: 0;
  height: 100%;
  top: 0;
  left: 0;
  direction: rtl;
  z-index: -1;
  box-shadow:
    -7px -7px 20px 0px #fff9,
    -4px -4px 5px 0px #fff9,
    7px 7px 20px 0px #0002,
    4px 4px 5px 0px #0001;
  transition: all 0.3s ease;
}
.reload {
  width: 130px;
  height: 40px;
  color: #fff;
  border-radius: 5px;
  padding: 10px 25px;
  font-weight: bold;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  box-shadow:
    inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
    7px 7px 20px 0px rgba(0, 0, 0, 0.1),
    4px 4px 5px 0px rgba(0, 0, 0, 0.1);
  outline: none;
}

.reload:hover {
  color: #000;
}

.reload:hover:after {
  left: auto;
  right: 0;
  width: 100%;
}

.reload:active {
  top: 2px;
}

.dashboard {
  width: 100%;
}

.dashboard .dash-content {
  padding-top: 50px;
}

.dash-content .title {
  display: flex;
  align-items: center;
  margin: 60px 0 30px 0;
}

.dash-content .title i {
  position: relative;
  height: 35px;
  width: 35px;
  background-color: @primary-color;
  border-radius: 6px;
  color: @title-icon-color;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
}

.dash-content .title .text {
  font-size: 24px;
  font-weight: 500;
  color: @text-color;
  margin-left: 10px;
}

.dash-content .boxes {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}

.dash-content .boxes .box {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 12px;
  width: calc(100% / 3 - 15px);
  padding: 15px 20px;
  background-color: @box1-color;
  transition: @tran-05;
}

.boxes .box i {
  font-size: 35px;
  color: @text-color;
}

.boxes .box .text {
  white-space: nowrap;
  font-size: 18px;
  font-weight: 500;
  color: @text-color;
}

.boxes .box .number {
  font-size: 1rem;
  font-weight: 500;
  color: @text-color;
}

.boxes .box.box2 {
  background-color: @box2-color;
}

.boxes .box.box3 {
  background-color: @box3-color;
}

.dash-content .activity .activity-data {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.activity .activity-data {
  display: flex;
  flex-wrap: wrap;
  img {
    width: 100%;
    max-wdith: 500px;
  }
}

.activity-data .data {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 0 15px;
}

.activity-data .data-title {
  font-size: 20px;
  font-weight: 500;
  color: @text-color;
}

.activity-data .data .data-list {
  font-size: 1rem;
  font-weight: 400;
  margin-top: 20px;
  white-space: nowrap;
  color: @text-color;
  img {
    width: 100%;
    max-width: 200px;
  }
}

@media (max-width: 780px) {
  .dash-content .boxes .box {
    width: calc(100% / 2 - 15px);
    margin-top: 15px;
  }
}

@media (max-width: 560px) {
  .dash-content .boxes .box {
    width: 100%;
  }
}
</style>
