<template>
  <div class="container">
    <h1 class="title">Categories</h1>
    <CategoryForm @category-added="fetchCategories" />
    <ul class="subcategory-list">
      <li
        v-for="category in categories"
        :key="category._id"
        class="subcategory-item"
      >
        <div class="subcategory-details">
          <input
            v-if="editId === category._id"
            v-model="editName"
            class="subcategory-input"
          />
          <span v-else class="subcategory-name">
            {{ category.name }}
          </span>
        </div>
        <div class="actions">
          <button
            v-if="loadingIds.includes(category._id)"
            class="btn delete-btn"
          >
            loading...
          </button>
          <button v-else class="btn delete-btn" @click="deleteC(category._id)">
            Delete
          </button>
          <button
            class="btn edit-btn"
            @click="
              editId === category._id
                ? updateC(category._id, editName)
                : setEdit(category)
            "
          >
            {{ editId === category._id ? "Save" : "Edit" }}
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { updateCategory, deleteCategory, getCategories } from "../../api.js";

import { ref } from "vue";
import CategoryForm from "./AddCategory.vue";

const categories = ref([]);
const editId = ref(null);
const editName = ref("");
const editCategory = ref("");
const loading = ref(false);
const loadingIds = ref([]);

const fetchCategories = async () => {
  categories.value = await getCategories();
};
fetchCategories();

const updateC = async (id, name) => {
  await updateCategory(id, name);
  fetchCategories();
  editId.value = null;
};

const deleteC = async (id) => {
  loadingIds.value.push(id);
  loading.value = true;
  await deleteCategory(id);
  loadingIds.value = loadingIds.value.filter((loadingId) => loadingId !== id);
  fetchCategories();
  loading.value = false;
};

const setEdit = async (category) => {
  editId.value = category._id;
  editName.value = category.name;
  editCategory.value = category.category._id;
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
}

.delete-btn {
  background-color: #f44336;
  color: white;
}

.btn:hover {
  opacity: 0.8;
}
</style>
