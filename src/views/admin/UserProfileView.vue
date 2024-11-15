<script setup>
import AdminMenuComponent from "../../components/AdminMenu.vue";
import UserProfileComponent from "../../components/pages/UserProfile.vue";
</script>

<template>
  <div>
    <AdminMenuComponent />
    <div class="profile_container">
      <div class="profile_contain">
        <div class="profile_header"></div>
        <div class="profile_content">
          <UserProfileComponent />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less">
.profile_container {
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;

  .profile_contain {
    width: 100%;
    max-width: 1000px;
    margin: 5vh;
    border-radius: 20px;
    display: flex;
    justify-content: space-between;

    div {
      margin: 5px;
      height: 30vh;
      width: 100%;
      background: #fdffe2;
    }

    .profile_header {
      max-width: 400px;
    }

    .profile_content {
      max-width: 600px;
    }
  }
}
</style>
