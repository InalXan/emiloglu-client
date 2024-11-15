<template>
  <div class="about_container">
    <div class="about">
      <div v-for="content in abouts" :key="content._id" class="about_content">
        <div v-if="content.images && content.images.length" class="image">
          <img :src="getImageUrl(content.images[0])" alt="Content Image" />
        </div>
        <div class="paragraph">
          <h1>{{ content.header }}</h1>
          <p>{{ content.paragraph }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      abouts: [],
    };
  },
  methods: {
    async fetchAboutContent() {
      try {
        const response = await axios.get(
          "https://emiloglu.com/api/fetch/about",
        );
        console.log("response about", response);
        this.abouts = response.data;
      } catch (error) {
        console.error("Error fetching about content:", error);
      }
    },
    getImageUrl(image) {
      return `https://emiloglu.com/${image}`;
    },
  },
  mounted() {
    this.fetchAboutContent();
  },
};
</script>

<style scoped>
.about_container {
  width: 100%;
  min-height: 100vh;
}
.about_container .about {
  width: 100%;
}
.about_container .about .about_content {
  width: 100%;
  display: flex;
}
.about_container .about .about_content > div {
  margin: 10px;
}
.about_container .about .about_content .image img {
  width: 100%;
}
.about_container .about .about_content .paragraph {
  border-left: 2px solid rgba(0, 0, 0, 0.6);
  border-bottom: 2px solid rgba(0, 0, 0, 0.6);
}
.about_container .about .about_content .paragraph p,
.about_container .about .about_content .paragraph h1 {
  margin: 10px;
}
.about_container .about .about_content .paragraph h1 {
  font-weight: bold;
  text-decoration: underline solid rgba(28, 33, 63, 0.72);
  color: rgba(28, 33, 63, 0.72);
}
/* responsive  */
@media (max-width: 699px) {
  .about_container .about .about_content {
    display: flex;
    flex-direction: column;
  }
}
</style>
