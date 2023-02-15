<template>
  <!-- Start Header -->
  <div class="header header-fixed">
    <div class="container-fluid d-flex align-items-stretch flex-row-reverse">
      <div class="topbar">
        <div class="topbar-item drop-menu" @click="isShow = !isShow">
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
              {{ userName }}
            </span>
            <span class="symbol symbol-lg-35 symbol-25 symbol-light-success">
              <span class="symbol-label font-size-h5 font-weight-bold">
                {{ charText }}
                <!-- A -->
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
      <div class="menu-submenu" v-show="isShow">
        <div class="menu-subnav">
          <div class="menu-item">
            <div @click="goToProfile" class="menu-link">
              <span class="svg-icon menu-icon">
                <!--begin::Svg Icon | path:assets/media/svg/icons/Communication/Safe-chat.svg-->
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  version="1.1"
                >
                  <g
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    <polygon points="0 0 24 0 24 24 0 24"></polygon>
                    <path
                      d="M12,11 C9.790861,11 8,9.209139 8,7 C8,4.790861 9.790861,3 12,3 C14.209139,3 16,4.790861 16,7 C16,9.209139 14.209139,11 12,11 Z"
                      fill="#000000"
                      fill-rule="nonzero"
                      opacity="0.3"
                    ></path>
                    <path
                      d="M3.00065168,20.1992055 C3.38825852,15.4265159 7.26191235,13 11.9833413,13 C16.7712164,13 20.7048837,15.2931929 20.9979143,20.2 C21.0095879,20.3954741 20.9979143,21 20.2466999,21 C16.541124,21 11.0347247,21 3.72750223,21 C3.47671215,21 2.97953825,20.45918 3.00065168,20.1992055 Z"
                      fill="#000000"
                      fill-rule="nonzero"
                    ></path>
                  </g>
                </svg>
                <!--end::Svg Icon-->
              </span>
              <span class="menu-text">Profile</span>
            </div>
          </div>
          <div @click="goToChangePassword" class="menu-item">
            <div class="menu-link">
              <span class="svg-icon menu-icon">
                <!--begin::Svg Icon | path:assets/media/svg/icons/Communication/Safe-chat.svg-->
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  version="1.1"
                >
                  <g
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    <rect x="0" y="0" width="24" height="24"></rect>
                    <path
                      d="M4,4 L11.6314229,2.5691082 C11.8750185,2.52343403 12.1249815,2.52343403 12.3685771,2.5691082 L20,4 L20,13.2830094 C20,16.2173861 18.4883464,18.9447835 16,20.5 L12.5299989,22.6687507 C12.2057287,22.8714196 11.7942713,22.8714196 11.4700011,22.6687507 L8,20.5 C5.51165358,18.9447835 4,16.2173861 4,13.2830094 L4,4 Z"
                      fill="#000000"
                      opacity="0.3"
                    ></path>
                    <path
                      d="M12,11 C10.8954305,11 10,10.1045695 10,9 C10,7.8954305 10.8954305,7 12,7 C13.1045695,7 14,7.8954305 14,9 C14,10.1045695 13.1045695,11 12,11 Z"
                      fill="#000000"
                      opacity="0.3"
                    ></path>
                    <path
                      d="M7.00036205,16.4995035 C7.21569918,13.5165724 9.36772908,12 11.9907452,12 C14.6506758,12 16.8360465,13.4332455 16.9988413,16.5 C17.0053266,16.6221713 16.9988413,17 16.5815,17 C14.5228466,17 11.463736,17 7.4041679,17 C7.26484009,17 6.98863236,16.6619875 7.00036205,16.4995035 Z"
                      fill="#000000"
                      opacity="0.3"
                    ></path>
                  </g>
                </svg>
                <!--end::Svg Icon-->
              </span>
              <span class="menu-text">Change Password</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End Header -->
</template>
<script>
import { useRouter } from "vue-router";
import { ref } from "vue";

export default {
  setup() {
    const router = useRouter();
    const userName = localStorage.getItem("userName");
    const charText = userName.toString().charAt(0).toUpperCase();

    function goToProfile() {
      router.push({ name: "Profile", params: {} });
    }
    function goToChangePassword() {
      router.push({ name: "ChangePassword", params: {} });
    }

    function logout() {
      localStorage.clear();
      router.push({ name: "Login", params: {} });
    }

    const isShow = ref(false);
    document.body.addEventListener(
      "click",
      () => {
        if (isShow.value) {
          isShow.value = false;
        }
      },
      true
    );

    return {
      logout,
      goToProfile,
      goToChangePassword,
      userName,
      isShow,
      charText,
    };
  },
};
</script>

<style scoped>
.menu-item:hover {
  color: #3699ff !important;
  background: #f3f6f9;
}
.menu-icon {
  margin-right: 10px;
}
.menu-link {
  transition: all 0.3s ease;
  cursor: pointer;
  padding: 10px;
  display: flex;
}
.menu-subnav {
  width: 100%;
}
.menu-submenu {
  position: relative;
  top: 67px;
  left: 125px;
  background-color: #fff;
  width: 170px;
  height: 100px;
  display: flex;
  align-items: center;
  padding: 20px 0;
  box-shadow: 0 15px 50px 0 rgb(82 63 105 / 15%);
  border-radius: 4px;
}

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
