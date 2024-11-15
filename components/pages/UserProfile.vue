<template>
  <div>
    <h2>User Profile</h2>
    <div v-if="user">
      <p><strong>Name:</strong> {{ user.name }}</p>
      <p><strong>Email:</strong> {{ user.email }}</p>
      <p><strong>Number:</strong> {{ user.number }}</p>
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      user: {},
    };
  },
  async created() {
    const token = localStorage.getItem("token");
    if (!token) {
      this.$router.push("/login");
    }

    try {
      const config = {
        headers: {
          "x-auth-token": token,
        },
      };
      const response = await axios.get(
        `https://emiloglu.com/api/profile/${this.$route.params.id}`,
        config,
      );
      this.user = response.data;
    } catch (error) {
      console.error(error);
    }
  },
};
</script>
