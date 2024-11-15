import axios from "axios";

const API_URL = "https://emiloglu.com/api";

export const getSubCategories = async () => {
  const response = await axios.get(`${API_URL}/subcategories`);
  console.log("getSubCategories", response);
  return response.data;
};

export const createSubCategory = async (name, category) => {
  // const cat = '66b0c6b3299e512c3f1eb2e4'
  const response = await axios.post(`${API_URL}/add/subcategories`, {
    name,
    category,
  });
  return response.data;
};

export const updateSubCategory = async (id, name, category) => {
  const response = await axios.put(`${API_URL}/subcategories/${id}`, {
    name,
    category,
  });
  return response.data;
};

export const deleteSubCategory = async (id) => {
  await axios.delete(`${API_URL}/subcategories/${id}`);
};

export const getCategories = async () => {
  const response = await axios.get(`${API_URL}/categories`);
  return response.data;
};

export const createCategory = async (name) => {
  const response = await axios.post(`${API_URL}/categories`, { name });
  console.log("response-a bax", response);
  return response.data;
};

export const updateCategory = async (id, name) => {
  const response = await axios.put(`${API_URL}/categories/${id}`, { name });
  return response.data;
};

export const deleteCategory = async (id) => {
  await axios.delete(`${API_URL}/categories/${id}`);
};

export const getProducts = async () => {
  const response = await axios.get(`${API_URL}/products`);
  return response.data;
};
export const getProductByCategory = async (id) => {
  const response = await axios.get(`${API_URL}/products/by-category/${id}`);
  return response.data;
};

export const createProduct = async (productData) => {
  const response = await axios.post(`${API_URL}/products`, productData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response.data;
};

export const updateProduct = async (id, productData) => {
  const response = await axios.put(`${API_URL}/products/${id}`, productData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response.data;
};

export const deleteProduct = async (id) => {
  await axios.delete(`${API_URL}/products/${id}`);
};
