<template>
  <div class="container">
    <h1 class="title">Products</h1>
    <ProductForm @product-added="test()" />
    <ul class="subcategory-list">
      <li
        v-for="product in products"
        :key="product._id"
        class="subcategory-item"
      >
        <div class="subcategory-details">
          <input
            v-if="editId === product._id"
            v-model="editName"
            class="subcategory-input"
          />
          <span v-else class="subcategory-name">
            <img
              width="100"
              :src="`https://emiloglu.com/uploads/product/${product?.image}`"
              alt="Product Image"
              v-if="product.image"
            />
            <div>{{ product.name }} - {{ product?.category?.name }}</div>
          </span>
        </div>
        <div class="actions">
          <button
            v-if="loadingIds.includes(product._id)"
            class="btn delete-btn"
          >
            loading...
          </button>
          <button v-else class="btn delete-btn" @click="deleteP(product._id)">
            Delete
          </button>

          <button
            disabled
            class="btn edit-btn"
            @click="
              editId === product._id
                ? updateP(product._id, editName)
                : setEdit(product)
            "
          >
            {{ editId === product._id ? "Save" : "Edit" }}
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { updateProduct, deleteProduct, getProducts } from "../../api.js";

import { ref } from "vue";
import ProductForm from "./AddProduct.vue";

const products = ref([]);
const editId = ref(null);
const editName = ref("");
const editProduct = ref("");
const loading = ref(false);
const loadingIds = ref([]);

const fetchProducts = async () => {
  products.value = await getProducts();
};
fetchProducts();

const updateP = async (id, name) => {
  await updateProduct(id, name);
  fetchProducts();
  editId.value = null;
};

const deleteP = async (id) => {
  loadingIds.value.push(id);
  loading.value = true;
  await deleteProduct(id);
  loadingIds.value = loadingIds.value.filter((loadingId) => loadingId !== id);
  fetchProducts();
  loading.value = false;
};

const setEdit = async (product) => {
  editId.value = product._id;
  editName.value = product.name;
  editProduct.value = product.product._id;
};
const test = () => {
  setTimeout(() => {
    fetchProducts();
  }, 1500);
};
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
}

.subcategory-list {
  list-style: none;
  padding: 0;
}

.subcategory-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
}

.subcategory-details {
  display: flex;
  align-items: center;
}

.subcategory-name {
  font-size: 16px;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

.subcategory-input {
  font-size: 16px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.actions {
  display: flex;
  gap: 10px;
}

.btn {
  padding: 5px 10px;
  font-size: 14px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.edit-btn {
  background-color: #4caf50;
  color: white;
  cursor: not-allowed;
}

.delete-btn {
  background-color: #f44336;
  color: white;
}

.btn:hover {
  opacity: 0.8;
}
</style>
