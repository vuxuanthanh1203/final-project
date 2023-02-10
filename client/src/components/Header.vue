<template>
  <!-- Start Header -->
  <div class="header header-fixed">
    <div
      class="container-fluid d-flex align-items-stretch justify-content-between"
    >
      <div class="header-menu-wrapper header-menu-wrapper-left">
        <div class="d-flex align-items-center flex-wrap mr-2">
          <!-- <h5 class="text-dark font-weight-bold mt-2 mb-2 mr-5">Dashboard</h5> -->
          <!-- <div
            class="subheader-separator subheader-separator-ver mt-2 mb-2 mr-4 bg-gray-200"
          ></div> -->
        </div>
      </div>
      <div class="topbar">
        <div class="topbar-item">
          <div
            class="btn btn-icon btn-icon-mobile w-auto btn-clean d-flex align-items-center btn-lg px-2"
          >
            <span
              class="text-muted font-weight-bold font-size-base d-none d-md-inline mr-1"
            >
              Hi,
            </span>
            <span
              class="text-dark-50 font-weight-bolder font-size-base d-none d-md-inline mr-3"
            >
              Thanh
            </span>
            <span class="symbol symbol-lg-35 symbol-25 symbol-light-success">
              <span class="symbol-label font-size-h5 font-weight-bold">
                T
              </span>
            </span>
          </div>
        </div>
        <div
          @click="logout"
          class="topbar-item"
          data-offset="10px,0px"
          aria-expanded="false"
        >
          <div class="btn btn-icon btn-clean btn-dropdown btn-lg mr-1">
            <font-awesome-icon :icon="['fas', 'right-from-bracket']" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End Header -->
</template>
<script>
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();

    function logout() {
      localStorage.clear();
      router.push({ name: "Login", params: {} });
    }
    return {
      logout,
    };
  },
};
</script>

<style scoped>
.subheader-separator.subheader-separator-ver {
  width: 1px;
  height: 22px;
}

.header.header-fixed {
  left: 265px;
}

.header {
  background-color: #ffffff;
  box-shadow: 0 10px 30px 0 rgb(82 63 105 / 8%);
}
</style>
