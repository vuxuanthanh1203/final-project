<template>
  <div class="content d-flex flex-column flex-column-fluid">
    <div class="d-flex flex-column-fluid">
      <div class="container">
        <div class="card card-custom">
          <!-- Start Card Header -->
          <div class="card-header card-header-tabs-line nav-tabs-line-3x">
            <div class="card-toolbar">
              <div class="nav nav-tabs nav-bold nav-tabs-line nav-tabs-line-3x">
                <div class="nav-item mr-3">
                  <div class="nav-link active">
                    <span class="nav-icon">
                      <span class="svg-icon">
                        <!--begin::Svg Icon | path:assets/media/svg/icons/Communication/Shield-user.svg-->
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
                    </span>
                    <span class="nav-text font-size-lg">Change Password</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- End Card Header -->
          <!-- ------------------------------ -->
          <!-- Start Card Content -->
          <div class="card-body px-7">
            <div>
              <div class="tab-pane px-7">
                <div class="row">
                  <div class="col-xl-2"></div>
                  <div class="col-xl-7">
                    <form
                      class="form fv-plugins-bootstrap fv-plugins-framework"
                      @submit.prevent
                    >
                      <div class="form-group fv-plugins-icon-container">
                        <div class="justify-content-between mt-n5">
                          <label
                            class="font-size-h6 font-weight-bolder text-dark pt-5"
                            for="current-password"
                          >
                            Current Password
                          </label>
                          <input
                            class="form-control form-control-solid h-auto py-6 px-6 rounded-lg"
                            type="password"
                            v-model="formData.currentPassword"
                            id="current-password"
                            placeholder="Password ..."
                            autocomplete="off"
                          />
                        </div>
                      </div>
                      <div class="pb-lg-0 pb-5">
                        <button
                          type="submit"
                          @click="checkPassword"
                          class="btn btn-primary font-weight-bolder font-size-h6 px-7 py-3 my-3 mr-3"
                        >
                          Check
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- End Cart Content -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { watch } from "@vue/runtime-core";
// import { computed } from "@vue/runtime-core";
import { useRouter } from "vue-router";

import { reactive, ref } from "vue";
import { CHECK_PASSWORD } from "@/constants";
import { useQuery } from "@vue/apollo-composable";

export default {
  setup() {
    const formData = reactive({
      currentPassword: "",
      message: "",
    });

    const router = useRouter();

    // Check password
    const fetchEnabled = ref(false);
    const userId = localStorage.getItem("userId");

    const { result } = useQuery(
      CHECK_PASSWORD,
      () => ({
        userId: userId * 1,
        input: {
          password: formData.currentPassword,
        },
      }),
      { enabled: fetchEnabled }
    );

    watch(result, async (value) => {
      let errMessage = value.checkPassword.message;

      alert(errMessage);
      if (errMessage !== "Success") {
        formData.currentPassword = "";
        fetchEnabled.value = false;
      } else {
        goToRoute();
      }
    });

    function checkPassword() {
      fetchEnabled.value = true;
    }

    function goToRoute() {
      router.push({ name: "ChangePassword", params: {} });
    }

    return {
      formData,
      goToRoute,
      checkPassword,
    };
  },
};
</script>

<style scoped>
.current-err {
  margin-left: 10px;
}
.current-value {
  width: 94%;
  margin-left: 10px;
}
.current-text {
  left: 10px;
}
.nav-link {
  cursor: default;
}
.email-disable {
  background-color: #d1d3d5;
}
.input-width {
  width: 50%;
}
.input-disable {
  cursor: not-allowed;
}

.text-err {
  color: red !important;
}

.data-value {
  vertical-align: middle;
  padding: 1rem 0;
  font-size: 1rem;
}
.data-title {
  width: 250px;
  color: #b5b5c3;
  font-size: 0.9rem;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 0.1rem;
}
.datatable {
  padding: 2rem 2.5rem;
}
.card-title {
  align-items: start !important;
}

.content {
  left: 265px;
  margin-top: 90px;
  position: absolute;
  width: 80%;
}

.alert {
  margin: 0 30px;
}
</style>
