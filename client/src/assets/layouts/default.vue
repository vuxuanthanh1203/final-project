<template>
  <div class="d-flex flex-row flex-column-fluid page">
    <Menu />
    <div class="aside-right d-flex flex-column flex-row-fluid wrapper">
      <Header />
      <slot />
    </div>
  </div>
</template>

<script>
import Menu from "@/components/Menu.vue";
import Header from "@/components/Header.vue";
export default {
  components: { Menu, Header },
};
</script>

<style scoped>
.aside-right {
  left: 265px !important;
}
</style>
