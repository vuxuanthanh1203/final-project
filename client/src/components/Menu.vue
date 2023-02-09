<template>
  <!-- Start Navbar -->
  <div class="aside aside-left aside-fixed d-flex flex-column flex-row-auto">
    <!-- Start Brand -->
    <div class="brand flex-column-auto">
      <div class="brand flex-column-auto mx-auto">
        <div class="brand-logo">
          <img src="../assets/images/logo-light.png" alt="Logo" />
        </div>
      </div>
    </div>
    <!-- End Brand -->
    <!-- ------------------------- -->
    <!-- Start Menu -->
    <div class="aside-menu-wrapper flex-column-fluid">
      <div class="aside-menu my-4 scroll ps ps--active-y">
        <ul class="menu-nav">
          <!-- List Menu Item -->
          <li class="menu-item menu-item-submenu">
            <router-link to="/overview" class="menu-link">
              <span class="menu-icon">
                <font-awesome-icon :icon="['fas', 'layer-group']" />
              </span>
              <span class="menu-text">Dashboard</span>
            </router-link>
          </li>
          <li
            class="menu-item menu-item-submenu"
            v-for="menuItem in menuItems"
            :key="menuItem.text"
          >
            <router-link
              :to="{ name: menuItem.name, params: {} }"
              class="menu-link"
            >
              <span class="menu-icon">
                <font-awesome-icon :icon="menuItem.icon" />
              </span>
              <span class="menu-text">{{ menuItem.text }}</span>
            </router-link>
          </li>

          <!-- End List Menu Item -->
        </ul>
      </div>
    </div>
    <!-- End Menu -->
  </div>
  <!-- End Navbar -->
</template>

<script>
import { reactive } from "vue";
import { MENU_ITEMS } from "@/constants";
export default {
  setup() {
    const menuItems = reactive(MENU_ITEMS);
    return { menuItems };
  },
};
</script>

<style scoped>
.menu-item-submenu:hover > .menu-link .menu-text {
  color: #ffffff;
}

.menu-item-submenu:hover > .menu-link .menu-icon {
  color: #3699ff;
}

.menu-item-submenu:hover {
  background-color: #1b1b28;
}

.menu-item-active > .menu-link .menu-text {
  color: #ffffff;
}

.menu-item-active > .menu-link .menu-icon {
  color: #3699ff;
}

.menu-item-active {
  background-color: #1b1b28;
}

.menu-icon {
  color: #494b74;
}

.menu-text {
  color: #a2a3b7;
}

.menu-item {
  padding: 10px 0 !important;
}

/* .aside-fixed {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 98;
} */

.aside {
  position: fixed;
  left: 0;
  height: 100vh;
  background-color: #1e1e2d;
}
</style>
