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
                        <!--begin::Svg Icon | path:assets/media/svg/icons/General/User.svg-->
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
                    </span>
                    <span class="nav-text font-size-lg">Account</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- End Card Header -->
          <!-- ------------------------------ -->
          <!-- Start Card Content -->
          <div
            class="alert alert-custom alert-notice alert-light-primary fade show mt-3 mb-5"
            role="alert"
            v-if="formData.message"
            v-show="formData.isShow"
          >
            <div class="alert-icon">
              <font-awesome-icon :icon="['fas', 'check']" />
            </div>
            <div class="alert-text">{{ formData.message }}</div>
            <div class="alert-close">
              <button
                type="button"
                class="close"
                data-dismiss="alert"
                aria-label="Close"
                @click="formData.isShow = false"
              >
                <span aria-hidden="true">
                  <font-awesome-icon :icon="['fas', 'xmark']" />
                </span>
              </button>
            </div>
          </div>
          <div class="card-body">
            <form class="form" id="profile" @submit.prevent>
              <div class="tab-content">
                <div class="tab-pane px-7 active">
                  <div class="row">
                    <div class="col-xl-2"></div>
                    <div class="col-xl-7">
                      <div class="my-2">
                        <div class="form-group row">
                          <label
                            class="col-form-label col-3 text-lg-right text-left"
                          >
                            Name
                          </label>
                          <div class="col-9">
                            <div
                              class="input-group input-group-lg input-group-solid"
                            >
                              <input
                                type="text"
                                class="form-control form-control-lg form-control-solid"
                                v-model="formData.name"
                                placeholder="Name"
                                required
                              />
                            </div>
                          </div>
                        </div>
                        <div class="form-group row">
                          <label
                            class="col-form-label col-3 text-lg-right text-left"
                          >
                            User Name
                          </label>
                          <div class="col-9">
                            <div
                              class="input-group input-group-lg input-group-solid"
                            >
                              <input
                                type="text"
                                class="form-control form-control-lg form-control-solid"
                                v-model="formData.userName"
                                placeholder="User Name"
                                required
                              />
                            </div>
                          </div>
                        </div>
                        <div class="form-group row">
                          <label
                            class="col-form-label col-3 text-lg-right text-left"
                          >
                            Phone Number
                          </label>
                          <div class="col-9">
                            <div
                              class="input-group input-group-lg input-group-solid"
                            >
                              <div class="input-group-prepend">
                                <span class="input-group-text">
                                  <font-awesome-icon :icon="['fas', 'phone']" />
                                </span>
                              </div>
                              <input
                                type="text"
                                class="form-control form-control-lg form-control-solid"
                                v-model="formData.phoneNumber"
                                placeholder="Phone"
                                required
                              />
                            </div>
                          </div>
                        </div>
                        <div class="form-group row">
                          <label
                            class="col-form-label col-3 text-lg-right text-left"
                          >
                            Email
                          </label>
                          <div class="col-9">
                            <div
                              class="input-group input-group-lg input-group-solid email-disable"
                            >
                              <div class="input-group-prepend">
                                <span class="input-group-text">
                                  <i class="la la-at"></i>
                                  <font-awesome-icon :icon="['fas', 'at']" />
                                </span>
                              </div>
                              <input
                                type="text"
                                class="form-control form-control-lg form-control-solid input-disable"
                                disabled
                                v-model="formData.email"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="form-group row">
                          <label
                            class="col-form-label col-3 text-lg-right text-left"
                          >
                            Addess
                          </label>
                          <div class="col-9">
                            <div
                              class="input-group input-group-lg input-group-solid"
                            >
                              <div class="input-group-prepend">
                                <span class="input-group-text">
                                  <font-awesome-icon
                                    :icon="['fas', 'location-dot']"
                                  />
                                </span>
                              </div>
                              <input
                                type="text"
                                class="form-control form-control-lg form-control-solid"
                                v-model="formData.address"
                                placeholder="Address"
                                required
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-footer">
                <button
                  type="reset"
                  class="btn btn-primary mr-2"
                  @click="updateUser"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
          <!-- End Cart Content -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
import { GET_USER, UPDATE_PROFILE } from "@/constants";
import { useQuery, useMutation } from "@vue/apollo-composable";

export default {
  setup() {
    const formData = reactive({
      name: "",
      userName: "",
      phoneNumber: "",
      email: "",
      address: "",
      message: "",
      isShow: true,
    });

    const id = localStorage.getItem("userId");
    const { result, onResult } = useQuery(GET_USER, {
      userId: id * 1,
    });

    onResult((queryResult) => {
      formData.name = queryResult.data.user.name;
      formData.userName = queryResult.data.user.userName;
      formData.phoneNumber = queryResult.data.user.phoneNumber;
      formData.email = queryResult.data.user.email;
      formData.address = queryResult.data.user.address;
    });

    const { mutate: updateUser, onDone } = useMutation(UPDATE_PROFILE, () => ({
      variables: {
        userId: id * 1,
        input: {
          name: formData.name,
          userName: formData.userName,
          phoneNumber: formData.phoneNumber,
          address: formData.address,
        },
      },
    }));

    onDone(() => {
      localStorage.setItem("userName", formData.userName);
      formData.message = "User Updated !";
    });

    return {
      formData,
      result,
      updateUser,
      onsubmit,
    };
  },
};
</script>

<style scoped>
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
