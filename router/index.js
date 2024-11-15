import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ContactView from "../views/ContactView.vue";
import ProductsView from "../views/ProductsView.vue";
import ServicesView from "../views/ServicesView.vue";
import PartnersView from "../views/PartnersView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/contact",
      name: "contact",
      component: ContactView,
    },
    {
      path: "/products",
      name: "products",
      component: ProductsView,
    },
    {
      path: "/services",
      name: "services",
      component: ServicesView,
    },
    {
      path: "/sponsors",
      name: "partners",
      component: PartnersView,
    },
    // Admin pages
    {
      path: "/admin/register",
      name: "admin-register",
      component: () => import("../views/admin/UserRegisterView.vue"),
    },
    {
      path: "/admin/login",
      name: "admin-login",
      component: () => import("../views/admin/UserLoginView.vue"),
    },
    {
      path: "/admin/profile/:id",
      name: "UserProfileView",
      component: () => import("../views/admin/UserProfileView.vue"),
      // meta: { requiresAuth: true }
    },
    {
      path: "/admin/:id/add/subcategory",
      name: "user-subcategory",
      component: () => import("../views/admin/AddSubcategoryView.vue"),
      // meta: { requiresAuth: true }
    },
    {
      path: "/admin/:id/add/about",
      name: "add-about",
      component: () => import("../views/admin/AddAboutView.vue"),
      // meta: { requiresAuth: true }
    },

    {
      path: "/admin/:id/add/sponsor",
      name: "add-sponsor",
      component: () => import("../views/admin/AddSponsorView.vue"),
      // meta: { requiresAuth: true }
    },
    {
      path: "/admin/:id/add/product",
      name: "add-product",
      component: () => import("../views/admin/AddProductView.vue"),
      // meta: { requiresAuth: true }
    },
    {
      path: "/admin/:id/add/category",
      name: "add-category",
      component: () => import("../views/admin/AddCategoryView.vue"),
      // meta: { requiresAuth: true }
    },
    {
      path: "/admin/:id/messagebox",
      name: "messages-profile",
      component: () => import("../views/admin/MessageBoxView.vue"),
      // meta: { requiresAuth: true }
    },
  ],
});

// Simple auth check middleware
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    const isAuthenticated = localStorage.getItem("accessToken") !== null;
    if (!isAuthenticated) {
      next({ name: "admin-login" });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
