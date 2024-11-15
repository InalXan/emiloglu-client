<template>
  <div>
    <h2>About Contents</h2>
    <ul>
      <li v-for="content in aboutContents" :key="content._id">
        <h3>{{ content.header }}</h3>
        <div v-for="(section, index) in content.contents" :key="index">
          <h4>{{ section.section }}</h4>
          <h5>{{ section.title }}</h5>
          <p>{{ section.paragraph }}</p>
          <img
            v-if="section.imagePath"
            :src="section.imagePath"
            :alt="section.title"
          />
        </div>
        <router-link :to="{ name: 'AboutForm', params: { id: content._id } }"
          >Edit</router-link
        >
        <button @click="handleDelete(content._id)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "AboutList",
  data() {
    return {
      aboutContents: [],
    };
  },
  mounted() {
    this.fetchAboutContents();
  },
  methods: {
    async fetchAboutContents() {
      try {
        const response = await axios.get("/fetch/about");
        this.aboutContents = response.data;
      } catch (error) {
        console.error("Error fetching about contents", error);
      }
    },
    async handleDelete(id) {
      try {
        await axios.delete(`/delete/about/${id}`);
        this.aboutContents = this.aboutContents.filter(
          (content) => content._id !== id,
        );
      } catch (error) {
        console.error("Error deleting about content", error);
      }
    },
  },
};
</script>
