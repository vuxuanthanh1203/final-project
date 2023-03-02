import { createRouter, createWebHistory } from "vue-router";
// import { parseJwt } from "./getExpiredToken";

const routes = [
  {
    path: "/",
    name: "Login",
    meta: {
      layout: "auth",
    },
    component: () => import("@/views/login.vue"),
  },
  {
    path: "/error",
    name: "Error",
    meta: {
      layout: "error",
    },
    component: () => import("@/views/404.vue"),
  },
  {
    path: "/overview",
    name: "Dashboard",
    meta: {
      title: "Dashboard",
      requiresAuth: true,
    },
    component: () => import("@/views/overview.vue"),
  },
  {
    path: "/category",
    name: "Category",
    meta: {
      title: "Category",
      des: "All of the categories",
      requiresAuth: true,
    },
    component: () => import("@/views/category.vue"),
  },
  {
    path: "/category/new-category",
    name: "NewCategory",
    meta: {
      title: "Add New Category",
      des: "Fill in new category information",
      requiresAuth: true,
    },
    component: () => import("@/views/newCategory.vue"),
  },
  {
    path: "/category/edit/:id",
    name: "EditCategory",
    meta: {
      title: "Edit Category",
      des: "Fill in category new information",
      requiresAuth: true,
    },
    component: () => import("@/views/editCategory.vue"),
  },
  {
    path: "/order",
    name: "Order",
    meta: {
      title: "Order",
      des: "All of the orders",
      requiresAuth: true,
    },
    component: () => import("@/views/order.vue"),
  },
  {
    path: "/product",
    name: "Product",
    meta: {
      title: "Product",
      des: "All of the products",
      requiresAuth: true,
    },
    component: () => import("@/views/product.vue"),
  },
  {
    path: "/product/new-product",
    name: "NewProduct",
    meta: {
      title: "Add New Product",
      des: "Fill in new product information",
      requiresAuth: true,
    },
    component: () => import("@/views/newProduct.vue"),
  },
  {
    path: "/product/edit/:id",
    name: "Edit Product",
    meta: {
      title: "Edit Product",
      des: "Fill in new product information",
      requiresAuth: true,
    },
    component: () => import("@/views/editProduct.vue"),
  },
  {
    path: "/product/:id",
    name: "Product Detail",
    meta: {
      title: "Product Detail",
      des: "Infomation of the product",
      requiresAuth: true,
    },
    component: () => import("@/views/productDetail.vue"),
  },
  {
    path: "/product/:id/new-attribute",
    name: "NewAttr",
    meta: {
      title: "Product Attribute",
      des: "New Product Attribute",
      requiresAuth: true,
    },
    component: () => import("@/views/newAttr.vue"),
  },
  {
    path: "/shipping",
    name: "Shipping",
    meta: {
      title: "Shipping",
      des: "All of the shipping methods",
      requiresAuth: true,
    },
    component: () => import("@/views/shipping.vue"),
  },
  {
    path: "/shipping/new-shipping",
    name: "NewShipping",
    meta: {
      title: "Add New Shipping Method",
      des: "Fill in new shipping method information",
      requiresAuth: true,
    },
    component: () => import("@/views/newShipping.vue"),
  },
  {
    path: "/user",
    name: "User",
    meta: {
      title: "User",
      des: "All of the users",
      requiresAuth: true,
    },
    component: () => import("@/views/user.vue"),
  },
  {
    path: "/user/new-user",
    name: "NewUser",
    meta: {
      title: "Add New User",
      des: "Fill in new user information",
      requiresAuth: true,
    },
    component: () => import("@/views/newUser.vue"),
  },
  {
    path: "/user/edit/:id",
    name: "UpdateUser",
    meta: {
      title: "Update User",
      des: "Fill in user new information",
      requiresAuth: true,
    },
    component: () => import("@/views/editUser.vue"),
  },
  {
    path: "/profile",
    name: "Profile",
    meta: {
      title: "Profile",
      des: "Your Infomation",
      requiresAuth: true,
    },
    component: () => import("@/views/profile.vue"),
  },
  {
    path: "/change-password",
    name: "ChangePassword",
    component: () => import("@/views/changePassword.vue"),
  },
  {
    path: "/check-password",
    name: "CheckPassword",
    component: () => import("@/views/checkPassword.vue"),
  },
  {
    path: "/product/:id/upload-image",
    name: "Upload File",
    component: () => import("@/views/uploadFile.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "menu-item-active",
});

router.beforeEach((to) => {
  const isLoggedIn = localStorage.getItem("token") || null;

  if (to.meta.requiresAuth && !isLoggedIn) {
    return {
      path: "/",
    };
  }
});

export default router;
