<template>
  <div class="form-container">
    <h2 class="form-title">
      {{ editMode.value ? "Edit Product" : "Add New Product" }}
    </h2>
    <form @submit.prevent="submitForm" enctype="multipart/form-data">
      <div class="form-group">
        <label for="product-name" class="form-label">Product Name</label>
        <input
          id="product-name"
          v-model="name"
          type="text"
          placeholder="Enter product name"
          class="form-input"
          required
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

      <div class="form-group">
        <label for="subcategory-select" class="form-label"
          >Select Subcategory</label
        >
        <select
          id="subcategory-select"
          v-model="subCategory"
          class="form-select"
        >
          <option value="" disabled>Select a subcategory</option>
          <option
            v-for="subCat in subCategories"
            :key="subCat._id"
            :value="subCat._id"
          >
            {{ subCat.name }}
          </option>
        </select>
      </div>

      <div class="form-group">
        <label for="product-image" class="form-label">Upload Image</label>
        <input
          required
          type="file"
          id="product-image"
          @change="handleFileUpload"
          class="form-input"
        />
      </div>

      <div class="form-group actions">
        <button type="submit" class="form-button">
          {{ editMode.value ? "Update" : "Add" }} Product
        </button>
        <button
          v-if="editMode.value"
          @click="cancelEdit"
          type="button"
          class="form-button cancel-button"
        >
          Cancel
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import {
  createProduct,
  updateProduct,
  getCategories,
  getSubCategories,
} from "../../api.js";

const props = defineProps({
  selectedProduct: Object,
});

const emit = defineEmits(["product-added"]);

const name = ref("");
const category = ref("");
const subCategory = ref("");
const file = ref(null);
const categories = ref([]);
const subCategories = ref([]);
const editMode = ref(false);

const fetchCategories = async () => {
  categories.value = await getCategories();
};

const fetchSubCategories = async () => {
  subCategories.value = await getSubCategories();
};

const handleFileUpload = (event) => {
  file.value = event.target.files[0];
};

const submitForm = async () => {
  const formData = new FormData();
  formData.append("name", name.value);
  formData.append("category", category.value);
  formData.append("subCategory", subCategory.value);
  emit("product-added");
  if (file.value) {
    formData.append("image", file.value);
  }

  if (editMode.value) {
    await updateProduct(props.selectedProduct._id, formData);
  } else {
    await createProduct(formData);
  }

  name.value = "";
  category.value = "";
  subCategory.value = "";
  file.value = null;
  editMode.value = false;
};

const cancelEdit = () => {
  name.value = "";
  category.value = "";
  subCategory.value = "";
  file.value = null;
  editMode.value = false;
};

watch(
  () => props.selectedProduct,
  (newVal) => {
    if (newVal) {
      name.value = newVal.name;
      category.value = newVal.category._id;
      subCategory.value = newVal.subCategory?._id || "";
      editMode.value = true;
    }
  },
);

onMounted(fetchCategories);
onMounted(fetchSubCategories);
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

.actions {
  display: flex;
  justify-content: space-between;
}

.form-button {
  padding: 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  width: 48%;
  text-align: center;
}

.form-button:hover {
  background-color: #45a049;
}

.cancel-button {
  background-color: #f44336;
}

.cancel-button:hover {
  background-color: #e53935;
}
</style>
