<script>
import axios from "axios";
import { useRouter } from "vue-router";
import { ref } from "vue";

export default {
  setup() {
    const router = useRouter();
    const formData = ref({
      email: "",
      password: "",
    });
    const message = ref("");

    const handleSubmit = async () => {
      console.log("Login attempt started");
      try {
        const response = await axios.post(
          "https://emiloglu.com/api/login",
          formData.value,
        );
        console.log("Login successful:", response.data);
        localStorage.setItem("token", response.data.token);
        console.log("Token saved:", localStorage.getItem("token"));
        router.push({
          name: "UserProfileView",
          params: { id: response.data.userId },
        });
        console.log("Redirecting to user profile");
      } catch (error) {
        console.error("Login failed:", error);
        message.value =
          error.response.data.msg || "Login failed. Please try again.";
      }
    };

    return {
      formData,
      message,
      handleSubmit,
    };
  },
};
</script>

<template>
  <div class="body">
    <div class="wrapper">
      <h2>Login</h2>
      <form @submit.prevent="handleSubmit">
        <div class="input-box">
          <input
            type="email"
            v-model="formData.email"
            placeholder="Enter your email"
            required
          />
        </div>
        <div class="input-box">
          <input
            type="password"
            v-model="formData.password"
            placeholder="**********"
            required
          />
        </div>
        <div class="input-box button">
          <input type="submit" value="Login" />
        </div>
        <div class="text">
          <h3>
            No Account? <router-link to="/admin/register">Register</router-link>
          </h3>
        </div>

        <p v-if="message">{{ message }}</p>
      </form>
    </div>
  </div>
</template>

<style scoped>
.body {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
  background-position: center;
  background-size: cover;
}

.wrapper {
  max-width: 430px;
  width: 100%;
  background: #fff;
  padding: 34px;
  border-radius: 6px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
}

.wrapper h2 {
  font-size: 22px;
  font-weight: 600;
  color: #222;
  margin-bottom: 20px;
  position: relative;
}

.wrapper h2::before {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  height: 3px;
  width: 28px;
  border-radius: 12px;
  background: crimson;
}

.wrapper form {
  margin-top: 30px;
}

.input-box {
  height: 52px;
  margin: 18px 0;
}

.input-box input {
  height: 100%;
  width: 100%;
  padding: 0 15px;
  font-size: 17px;
  color: #222;
  border: 1.5px solid rgba(0, 0, 0, 0.3);
  border-radius: 6px;
  transition: border-color 0.3s ease;
}

.input-box input:focus,
.input-box input:valid {
  border-color: crimson;
}

.input-box.button input {
  color: #fff;
  background: crimson;
  border: none;
  cursor: pointer;
  letter-spacing: 1px;
  transition: background-color 0.3s ease;
}

.input-box.button input:hover {
  background: darkred;
}

.text h3 {
  color: #222;
  text-align: center;
}

.text h3 a {
  color: crimson;
  text-decoration: none;
}

.text h3 a:hover {
  text-decoration: underline;
}

p {
  color: red;
  text-align: center;
  margin-top: 10px;
}
</style>
