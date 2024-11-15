<template>
  <div>
    <AdminMenuComponent />
    <!-- <ProductForm :selectedProduct="selectedProduct" /> -->
    <ProductList @edit-product="editProduct" />
  </div>
</template>

<script>
import { ref } from "vue";
import AdminMenuComponent from "@/components/AdminMenu.vue";
// import ProductForm from '@/components/ProductForm.vue'
import ProductList from "@/components/admin/ProductList.vue";

export default {
  components: {
    // ProductForm,
    ProductList,
    AdminMenuComponent,
  },
  setup() {
    const selectedProduct = ref(null);

    const editProduct = (product) => {
      selectedProduct.value = product;
    };

    return {
      selectedProduct,
      editProduct,
    };
  },
};
</script>
