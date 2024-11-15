<template>
  <div class="form-container">
    <h2 class="form-title">
      {{ editMode.value ? "Edit Category" : "Add New Category" }}
    </h2>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="category-name" class="form-label">Category Name</label>
        <input
          id="category-name"
          v-model="name"
          type="text"
          placeholder="Enter category name"
          class="form-input"
          required
        />
      </div>
      <div class="form-group actions">
        <button v-if="loading" class="form-button">loading...</button>
        <button v-else type="submit" class="form-button">Add Category</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { createCategory, updateCategory } from "../../api.js";
const emit = defineEmits(["subcategory-added"]);
const props = defineProps({
  selectedCategory: Object,
});
const loading = ref(false);

const name = ref("");
const editMode = ref(false);

const submitForm = async () => {
  if (editMode.value) {
    await updateCategory(props.selectedCategory._id, name.value);
  } else {
    await createCategory(name.value);
  }

  emit("category-added");
  name.value = "";
  category.value = "";
  name.value = "";
  editMode.value = false;
  loading.value = false;
};

const cancelEdit = () => {
  name.value = "";
  editMode.value = false;
};

watch(
  () => props.selectedCategory,
  (newVal) => {
    if (newVal) {
      name.value = newVal.name;
      editMode.value = true;
    }
  },
);
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

.form-input {
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
}

.form-input:focus {
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
  width: 100%;
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
