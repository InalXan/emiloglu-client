<script>
import axios from "axios";

export default {
  data() {
    return {
      contacts: [],
    };
  },
  methods: {
    async loadContacts() {
      try {
        const response = await axios.get("https://emiloglu.com/api/contacts");
        this.contacts = response.data;
      } catch (error) {
        console.error(error);
        alert("There was an error loading the contacts");
      }
    },
    async deleteContact(id) {
      try {
        const response = await axios.delete(
          `https://emiloglu.com/api/contacts/${id}`,
        );
        alert(response.data.message);
        this.loadContacts();
      } catch (error) {
        console.error(error);
        alert("There was an error deleting the contact");
      }
    },
  },
  mounted() {
    this.loadContacts();
  },
};
</script>

<template>
  <div class="inbox_container">
    <section class="dashboard">
      <div class="dash-content">
        <div class="overview">
          <div class="title">
            <i class="uil uil-tachometer-fast-alt"></i>
            <span class="text">Dashboard</span>
          </div>
          <div class="boxes">
            <div class="box box1">
              <i class="uil uil-thumbs-up"></i>
              <span class="text"></span>
              <span class="number"></span>
            </div>
            <div class="box box2">
              <i class="uil uil-comments"></i>
              <span class="text">Mesajların Sayı</span>
              <span class="number">{{ contacts.length }}</span>
            </div>
            <div class="box box3">
              <i class="uil uil-share"></i>
              <span class="text">Yenilə</span>
              <span class="number">
                <button @click="loadContacts" class="reload">
                  Yenilə
                </button></span
              >
            </div>
          </div>
        </div>
        <div class="activity">
          <div class="title">
            <i class="uil uil-clock-three"></i>
            <span class="text">Recent Activity</span>
          </div>
          <div
            class="activity-data"
            v-if="contacts.length"
            v-for="contact in contacts"
            :key="contact._id"
          >
            <div class="data names">
              <span class="data-title">Name</span>
              <span class="data-list">{{ contact.name }}</span>
            </div>
            <div class="data joined">
              <span class="data-title">Number</span>
              <span class="data-list">{{ contact.number }}</span>
            </div>
            <div class="data type">
              <span class="data-title">Message</span>
              <span class="data-list">{{ contact.message }}</span>
            </div>
            <div class="data status">
              <span class="data-title">Ayarlar</span>
              <span class="data-list"
                ><button @click="deleteContact(contact._id)">
                  <box-icon name="trash-alt" type="solid"></box-icon></button
              ></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

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
@tran-03: all 0.2s ease;
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
  margin: 20px;
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
  font-size: 40px;
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
}
.activity-data .data {
  display: flex;
  flex-direction: column;
  margin: 0 15px;
}
.activity-data .data-title {
  font-size: 20px;
  font-weight: 500;
  color: @text-color;
}
.activity-data .data .data-list {
  font-size: 18px;
  font-weight: 400;
  margin-top: 20px;
  white-space: nowrap;
  color: @text-color;
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
