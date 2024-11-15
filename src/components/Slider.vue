<template>
  <div class="slider-container">
    <div class="controls">
      <button
        v-for="(video, index) in videos"
        :key="index"
        @click="selectVideo(index)"
      >
        {{ video.name }}
      </button>
    </div>
    <div
      class="slider"
      :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
    >
      <div class="slide" v-for="(video, index) in videos" :key="index">
        <video :src="video.src" controls autoplay muted></video>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0,
      videos: [
        { name: "Mebel", src: "video1.mp4" },
        { name: "Laminat", src: "video2.mp4" },
        { name: "Rabitə", src: "video3.mp4" },
      ],
      intervalId: null,
    };
  },
  mounted() {
    this.startSlider();
  },
  methods: {
    startSlider() {
      this.intervalId = setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.videos.length;
      }, 5000); // Change every 5 seconds
    },
    selectVideo(index) {
      clearInterval(this.intervalId); // Stop automatic sliding
      this.currentIndex = index;
      this.startSlider(); // Restart automatic sliding
    },
  },
  beforeDestroy() {
    clearInterval(this.intervalId);
  },
};
</script>

<style scoped>
.slider-container {
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 400px;
  aspect-ratio: 16/9;
}

.controls {
  position: absolute;
  top: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 10px;
  z-index: 10;
}

.controls button {
  background-color: #f49112;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-family: "Poppins", sans-serif;
}

.controls button:hover {
  background-color: #d97810;
}

.slider {
  display: flex;
  transition: transform 1s ease-in-out;
}

.slide {
  min-width: 100%;
}

.slide video {
  width: 100%;
  height: 400px;
}
</style>
