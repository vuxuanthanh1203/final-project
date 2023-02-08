import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Login",
    meta: {
      layout: "auth",
    },
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/login.vue"),
  },
  {
    path: "/error",
    name: "Error",
    meta: {
      layout: "error",
    },
    component: () => import(/* webpackChunkName: "error" */ "../views/404.vue"),
  },
  {
    path: "/overview",
    name: "Overview",
    meta: {
      title: "Dashboard",
    },
    component: () =>
      import(/* webpackChunkName: "overview" */ "../views/overview.vue"),
  },
  {
    path: "/category",
    name: "Category",
    meta: {
      title: "Category",
      des: "All of the categories",
    },
    component: () =>
      import(/* webpackChunkName: "category" */ "../views/category.vue"),
  },
  {
    path: "/category/new-category",
    name: "NewCategory",
    meta: {
      title: "Add New Category",
      des: "Fill in new category information",
    },
    component: () =>
      import(/* webpackChunkName: "category" */ "../views/new-category.vue"),
  },
  {
    path: "/category/:id",
    name: "EditCategory",
    meta: {
      title: "Edit Category",
      des: "Fill in category new information",
    },
    component: () =>
      import(/* webpackChunkName: "category" */ "../views/edit-category.vue"),
  },
  {
    path: "/category/delete/:id",
    name: "DeleteCategory",
    meta: {
      title: "Edit Category",
      des: "Fill in category information",
    },
    component: () =>
      import(/* webpackChunkName: "category" */ "../views/category.vue"),
  },
  {
    path: "/order",
    name: "Order",
    meta: {
      title: "Order",
      des: "All of the orders",
    },
    component: () =>
      import(/* webpackChunkName: "order" */ "../views/order.vue"),
  },
  {
    path: "/product",
    name: "Product",
    meta: {
      title: "Product",
      des: "All of the products",
    },
    component: () =>
      import(/* webpackChunkName: "product" */ "../views/product.vue"),
  },
  {
    path: "/product/new-product",
    name: "NewProduct",
    meta: {
      title: "Add New Product",
      des: "Fill in new product information",
    },
    component: () =>
      import(/* webpackChunkName: "product" */ "../views/new-product.vue"),
  },
  {
    path: "/product/:id",
    name: "Edit Product",
    meta: {
      title: "Add New Product",
      des: "Fill in new product information",
    },
    component: () =>
      import(/* webpackChunkName: "product" */ "../views/edit-product.vue"),
  },
  {
    path: "/shipping",
    name: "Shipping",
    meta: {
      title: "Shipping",
      des: "All of the shipping methods",
    },
    component: () =>
      import(/* webpackChunkName: "shipping" */ "../views/shipping.vue"),
  },
  {
    path: "/shipping/new-shipping",
    name: "NewShipping",
    meta: {
      title: "Add New Shipping Method",
      des: "Fill in new shipping method information",
    },
    component: () =>
      import(/* webpackChunkName: "product" */ "../views/new-shipping.vue"),
  },
  {
    path: "/user",
    name: "User",
    meta: {
      title: "User",
      des: "All of the users",
    },
    component: () => import(/* webpackChunkName: "user" */ "../views/user.vue"),
  },
  {
    path: "/user/new-user",
    name: "NewUser",
    meta: {
      title: "Add New User",
      des: "Fill in new user information",
    },
    component: () =>
      import(/* webpackChunkName: "product" */ "../views/new-user.vue"),
  },
  {
    path: "/user/:id",
    name: "UpdateUser",
    meta: {
      title: "Update User",
      des: "Fill in user new information",
    },
    component: () =>
      import(/* webpackChunkName: "user" */ "../views/edit-user.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "menu-item-active",
});

export default router;
