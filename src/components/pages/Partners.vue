<template>
  <div class="container">
    <div class="partners_container">
      <ul class="menuproducts">
        <li v-for="category in categories" :key="category._id">
          <a href="#">
            {{ category.name }}
          </a>
        </li>
      </ul>

      <div
        class="category"
        v-for="category in categories"
        :key="category._id"
      >
        <h2>{{ category.name }}</h2>
        <div class="category_images">
          <img
            v-for="sponsor in category.sponsors"
            :key="sponsor._id"
            :src="getImageUrl(sponsor.image)"
            :alt="sponsor.name"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Partners",
  data() {
    return {
      categories: [],
    };
  },
  created() {
    this.fetchCategoriesWithSponsors();
  },
  methods: {
    async fetchCategoriesWithSponsors() {
      try {
        const categoryResponse = await axios.get(
          "https://emiloglu.com/api/admin/spocategories"
        );
        const categories = categoryResponse.data;

        const categoriesWithSponsors = await Promise.all(
          categories.map(async (category) => {
            const sponsorResponse = await axios.get(
              `https://emiloglu.com/api/admin/fetch/sponsors/${category._id}`
            );
            return {
              ...category,
              sponsors: sponsorResponse.data,
            };
          })
        );

        this.categories = categoriesWithSponsors;
      } catch (error) {
        console.error("Error fetching categories or sponsors:", error);
      }
    },
    getImageUrl(path) {
      return path ? `https://emiloglu.com/api${path}` : "";
    },
  },
};
</script>

<style scoped>
/* Genel Stiller */
body {
  font-family: "Roboto", sans-serif;
  background-color: #f8f9fa; /* Hafif gri arka plan */
  color: #343a40; /* Nötr metin rengi */
  margin: 0;
}

/* Ana Konteyner */
.container {
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 40px 20px;
}

/* Partnerler Konteyneri */
.partners_container {
  width: 100%;
  max-width: 1200px; /* Daha iyi görüntü için genişlik sınırı */
  display: flex;
  flex-direction: column;
  gap: 40px;
}

/* Menü */
.menuproducts {
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 0;
  margin: 0;
}

.menuproducts li {
  font-size: 18px;
  font-weight: bold;
}

.menuproducts a {
  text-decoration: none;
  color: #007bff; /* Modern mavi link rengi */
  transition: color 0.3s ease;
}

.menuproducts a:hover {
  color: #0056b3; /* Hover için koyu mavi */
}

/* Kategori Kartları */
.category {
  background-color: #ffffff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Hafif gölge */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.category:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
}

.category h2 {
  text-align: center;
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 15px;
  color: #343a40;
}

/* Resim Alanları */
.category_images {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.category_images img {
  width: 250px;
  height: 200px;
  border-radius: 8px;
  object-fit: cover; /* Görüntü boyutunu düzenle */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Hafif gölge */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.category_images img:hover {
  transform: scale(1.05); /* Hover ile büyüt */
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
}

/* Medya Sorguları */
@media (max-width: 768px) {
  .category_images img {
    width: 200px;
    height: 160px;
  }
}

@media (max-width: 576px) {
  .category_images img {
    width: 100%;
    height: auto;
  }

  .category {
    padding: 15px;
  }
}
</style>