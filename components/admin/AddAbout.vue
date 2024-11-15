<template>
  <div class="inbox_container">
    <section class="dashboard">
      <div class="dash-content">
        <div class="overview">
          <div class="title">
            <i class="uil uil-tachometer-fast-alt"></i>
            <span class="text">About</span>
          </div>
          <div class="boxes">
            <div class="box box1">
              <span class="text">Add About Content</span>
              <form @submit.prevent="createOrUpdateAboutContent">
                <input
                  v-model="aboutContent.header"
                  placeholder="Header"
                  required
                />
                <select v-model="aboutContent.section" required>
                  <option value="" disabled>Select Section</option>
                  <option value="about_first_container">First Container</option>
                  <option value="about_second_container">
                    Second Container
                  </option>
                  <option value="about_third_container">Third Container</option>
                </select>
                <input
                  v-model="aboutContent.paragraph"
                  placeholder="Paragraph"
                  required
                />
                <input type="file" @change="onFileChange" multiple />
                <button type="submit" class="reload">
                  {{ editMode ? "Update" : "Add" }}
                </button>
              </form>
            </div>
          </div>
        </div>
        <div class="activity">
          <div class="title">
            <i class="uil uil-clock-three"></i>
            <span class="text">Existing About Sections</span>
          </div>
          <div v-if="abouts.length">
            <div class="activity-data" v-for="about in abouts" :key="about._id">
              <div class="data names">
                <span class="data-title">{{ about.section }}</span>
                <div class="data-list">
                  <h3>{{ about.header }}</h3>
                  <p>{{ about.paragraph }}</p>
                  <div
                    v-for="(image, imgIndex) in about.images"
                    :key="imgIndex"
                  >
                    <img :src="getImageUrl(image)" alt="Content Image" />
                  </div>
                </div>
              </div>
              <div class="data status">
                <span class="data-title">Actions</span>
                <div class="data-list">
                  <button @click="deleteAbout(about._id)">
                    <box-icon name="trash-alt" type="solid"></box-icon>
                  </button>
                  <button @click="editAbout(about)">
                    <box-icon name="edit-alt" type="solid"></box-icon>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div v-else>
            <p>No about sections found.</p>
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
      abouts: [],
      aboutContent: {
        header: "",
        section: "",
        paragraph: "",
        images: [],
      },
      editMode: false,
      currentAboutId: null,
    };
  },
  methods: {
    async getAllAbouts() {
      try {
        const response = await axios.get(
          "https://emiloglu.com/api/fetch/about",
        );
        this.abouts = response.data;
      } catch (error) {
        console.error("Error fetching about sections:", error);
      }
    },
    async createOrUpdateAboutContent() {
      const formData = new FormData();
      formData.append("header", this.aboutContent.header);
      formData.append("section", this.aboutContent.section);
      formData.append("paragraph", this.aboutContent.paragraph);
      this.aboutContent.images.forEach((image, index) => {
        formData.append("images", image);
      });

      try {
        if (this.editMode && this.currentAboutId) {
          await axios.put(
            `https://emiloglu.com/api/about/${this.currentAboutId}`,
            formData,
          );
        } else {
          await axios.post("https://emiloglu.com/api/new/about", formData);
        }
        this.getAllAbouts();
        this.resetAboutForm();
      } catch (error) {
        console.error("Error creating or updating about content:", error);
      }
    },
    onFileChange(event) {
      this.aboutContent.images = Array.from(event.target.files);
    },
    async deleteAbout(id) {
      try {
        await axios.delete(`https://emiloglu.com/api/delete/about/${id}`);
        this.getAllAbouts();
      } catch (error) {
        console.error("Error deleting about section:", error);
      }
    },
    editAbout(about) {
      this.currentAboutId = about._id;
      this.aboutContent.header = about.header;
      this.aboutContent.section = about.section;
      this.aboutContent.paragraph = about.paragraph;
      this.aboutContent.images = []; // Load images if needed
      this.editMode = true;
    },
    resetAboutForm() {
      this.aboutContent.header = "";
      this.aboutContent.section = "";
      this.aboutContent.paragraph = "";
      this.aboutContent.images = [];
      this.editMode = false;
      this.currentAboutId = null;
    },
    getImageUrl(image) {
      return `http://emiloglu.com/api/${image}`;
    },
  },
  mounted() {
    this.getAllAbouts();
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
