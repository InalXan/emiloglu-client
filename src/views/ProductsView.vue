<template lang="">
  <div class="container_products">
    <header>
      <Header></Header>
    </header>
    <div class="productscontainer">
      <ul class="menuproducts">
        <li v-for="category in categories" :key="category.id">
          <a href="#" @click="selectCategory(category)">
            {{ category.name }}
          </a>
        </li>
      </ul>

      <div class="all">
        <h1
          style="
            font-family: &quot;Poppins&quot;, sans-serif;
            text-align: center;
          "
        ></h1>
        <div class="product-grid">
          <div
            class="product-card"
            v-for="product in products"
            :key="product.id"
          >
            <img
              :src="getImageUrl(product.image)"
              alt="Product Image"
              class="product-image"
              @click="openModal(product.image)"
            />
            <h1>{{ product.name }}</h1>
          </div>
        </div>
      </div>
    </div>

    <div v-if="selectedImage" class="modal-overlay" @click="closeModal">
      <div class="modal-content">
        <img
          :src="getImageUrl(selectedImage)"
          alt="Selected Product"
          class="modal-image"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import Header from "../components/HeaderC.vue";
import { ref } from "vue";
import { getCategories, getProducts, getProductByCategory } from "@/api.js";

// Ref to track the currently selected image for the modal
const selectedImage = ref(null);

// Function to open the modal with the selected image
const openModal = (image) => {
  selectedImage.value = image;
};

// Function to close the modal
const closeModal = () => {
  selectedImage.value = null;
};

const categories = ref([
  { id: 1, name: "Mebel" },
  { id: 2, name: "Laminat" },
  { id: 3, name: "İnşaat" },
  { id: 4, name: "Rabitə" },
]);

const api = "https://emiloglu.com/uploads/product/";

const getImageUrl = (imagePath) => {
  return `${api}${imagePath}`;
};

const selectedCategoryId = ref(1);
const products = ref([]);

const fetchCategories = async () => {
  categories.value = await getCategories();
};

const fetchProducts = async () => {
  products.value = await getProducts();
};

fetchProducts();
fetchCategories();

const selectCategory = async (category) => {
  selectedCategoryId.value = category._id;
  products.value = await getProductByCategory(selectedCategoryId.value);
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");

header {
  background-color: #141f55 !important;
}
.product-card h1 {
  font-size: 1rem;
}
.container_products {
  padding: 20px;
}

.productscontainer {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.menuproducts {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 95%;
  background-color: rgba(151, 144, 141, 0.3);
  margin: 10px auto;
  padding: 10px;
  border-radius: 20px;
  list-style-type: none;
}

.menuproducts a {
  color: black;
  padding: 10px;
  text-decoration: none;
  border-radius: 3px;
  font-size: 18px;
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
}

.menuproducts li {
  margin: 0 10px;
}

.menuproducts a:hover {
  background-color: #1b3c54;
  color: #fff;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4 columns for large screens */
  gap: 20px;
  justify-items: center;
  width: 100%;
  padding: 20px;
}

/* Adjust for medium screens (e.g., tablets) */
@media (max-width: 1024px) {
  .product-grid {
    grid-template-columns: repeat(3, 1fr); /* 3 columns */
  }
}

/* Adjust for small screens (e.g., large phones) */
@media (max-width: 768px) {
  .product-grid {
    grid-template-columns: repeat(2, 1fr); /* 2 columns */
  }
}

/* Adjust for extra small screens (e.g., phones) */
@media (max-width: 480px) {
  .product-grid {
    grid-template-columns: repeat(1, 1fr); /* 1 column */
  }
}

.product-card {
  text-align: center;
  font-family: "Poppins", sans-serif;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background-color: white;
  overflow: hidden;
  transition: transform 0.3s ease;
  width: 100%; /* Makes sure the card takes up the available space */
  max-width: 200px; /* Restricts the max size of the cards */
}

.product-card:hover {
  transform: scale(1.05);
}

.product-image {
  width: 100%;
  height: auto;
  max-height: 200px;
  object-fit: cover;
}

.card h1 {
  font-size: 16px;
  padding: 10px;
  margin: 0;
  background-color: #fff;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
}

.modal-image {
  max-width: 100%;
  max-height: 80vh;
  object-fit: cover;
}
</style>
