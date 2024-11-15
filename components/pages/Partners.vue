<template>
  <div class="container">
    <div class="partners_container">
      <div class="category" v-for="(sponsor, index) in sponsors" :key="index">
        <h2>{{ sponsor.name }}</h2>
        <div class="category_images">
          <img :src="getImageUrl(sponsor.image)" :alt="sponsor.name" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Partners",
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

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

header {
  background-color: #f49112;
  text-align: center; /* Center align text in the header */
  padding: 10px 0; /* Add padding for better spacing */
}
.container {
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
}
.partners_container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
}

.category {
  background-color: #f9f9f9; /* Light gray background for categories */
  border-radius: 10px; /* Rounded corners for category containers */
  padding: 20px; /* Padding inside category containers */
  margin-bottom: 20px; /* Bottom margin between categories */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Shadow effect for category containers */
}

.category h2 {
  text-align: center; /* Center align category titles */
  margin-bottom: 10px; /* Bottom margin for category titles */
  font-size: 24px; /* Larger font size for category titles */
  color: #333; /* Darker text color for category titles */
}

.category_images {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.category_images img {
  width: 280px;
  height: 250px;
  margin-bottom: 10px;
  border-radius: 8px; /* Rounded corners for images */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Shadow effect for images */
}
</style>
