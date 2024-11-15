<template>
  <div class="form-container">
    <h2 class="form-title">Add New Subcategory</h2>
    <div class="form-group">
      <label for="subcategory-name" class="form-label">Subcategory Name</label>
      <input
        id="subcategory-name"
        v-model="name"
        placeholder="Enter subcategory name"
        class="form-input"
      />
    </div>

    <div class="form-group">
      <label for="category-select" class="form-label">Select Category</label>
      <select id="category-select" v-model="category" class="form-select">
        <option value="" disabled>Select a category</option>
        <option v-for="cat in categories" :key="cat._id" :value="cat._id">
          {{ cat.name }}
        </option>
      </select>
    </div>

    <button @click="addSubcategory" class="form-button">Add Subcategory</button>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { createSubCategory, getCategories } from "../../api.js";

const emit = defineEmits(["subcategory-added"]);

const name = ref("");
const category = ref("");
const categories = ref([]);

const fetchCategories = async () => {
  categories.value = await getCategories();
};

onMounted(() => {
  fetchCategories();
});

const addSubcategory = async () => {
  if (name.value && category.value) {
    await createSubCategory(name.value, category.value);
    emit("subcategory-added");
    name.value = "";
    category.value = "";
  } else {
    alert("Please fill in all fields before adding a subcategory.");
  }
};
</script>
<style scoped>
.form-container {
  max-width: 500px;
  margin: 20px auto;
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.form-title {
  font-size: 20px;
  margin-bottom: 20px;
  text-align: center;
  color: #333;
}

.form-group {
  margin-bottom: 15px;
}

.form-label {
  display: block;
  margin-bottom: 5px;
  font-size: 14px;
  color: #555;
}

.form-input,
.form-select {
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
}

.form-input:focus,
.form-select:focus {
  outline: none;
  border-color: #666;
}

.form-button {
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px;
  text-align: center;
}

.form-button:hover {
  background-color: #45a049;
}
</style>
