<template>
  <div class="content d-flex flex-column flex-column-fluid">
    <div class="d-flex flex-column-fluid">
      <div class="container">
        <div class="card card-custom">
          <!-- Start Card Header -->
          <div class="card-header flex-wrap border-0 pt-6 pb-0">
            <!-- End Card Header -->
          </div>
          <!-- End Card Header -->
          <!-- -------------------------- -->
          <!-- Start Data Table -->
          <div class="card-spacer mt-n25">
            <!--begin::Row-->
            <div class="row m-0">
              <router-link
                :to="{ name: 'Order', params: {} }"
                class="col bg-light-warning px-6 py-8 rounded-xl mr-7"
              >
                <div class="wrap-item">
                  <div class="total-left">
                    <span
                      class="svg-icon svg-icon-3x svg-icon-warning d-block my-2"
                    >
                      <!--begin::Svg Icon | path:assets/media/svg/icons/Media/Equalizer.svg-->
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
                          <rect
                            fill="#000000"
                            opacity="0.3"
                            x="13"
                            y="4"
                            width="3"
                            height="16"
                            rx="1.5"
                          ></rect>
                          <rect
                            fill="#000000"
                            x="8"
                            y="9"
                            width="3"
                            height="11"
                            rx="1.5"
                          ></rect>
                          <rect
                            fill="#000000"
                            x="18"
                            y="11"
                            width="3"
                            height="9"
                            rx="1.5"
                          ></rect>
                          <rect
                            fill="#000000"
                            x="3"
                            y="13"
                            width="3"
                            height="7"
                            rx="1.5"
                          ></rect>
                        </g>
                      </svg>
                      <!--end::Svg Icon-->
                    </span>
                    <div class="text-warning font-weight-bold font-size-h6">
                      Orders
                    </div>
                  </div>
                  <div
                    class="total-right text-warning font-weight-bold font-size-h1"
                  >
                    {{ orders }}
                  </div>
                </div>
              </router-link>
              <router-link
                :to="{ name: 'User', params: {} }"
                class="col bg-light-primary px-6 py-8 rounded-xl mr-7"
              >
                <div class="wrap-item">
                  <div class="total-left">
                    <span
                      class="svg-icon svg-icon-3x svg-icon-primary d-block my-2"
                    >
                      <!--begin::Svg Icon | path:assets/media/svg/icons/Communication/Add-user.svg-->
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
                            d="M18,8 L16,8 C15.4477153,8 15,7.55228475 15,7 C15,6.44771525 15.4477153,6 16,6 L18,6 L18,4 C18,3.44771525 18.4477153,3 19,3 C19.5522847,3 20,3.44771525 20,4 L20,6 L22,6 C22.5522847,6 23,6.44771525 23,7 C23,7.55228475 22.5522847,8 22,8 L20,8 L20,10 C20,10.5522847 19.5522847,11 19,11 C18.4477153,11 18,10.5522847 18,10 L18,8 Z M9,11 C6.790861,11 5,9.209139 5,7 C5,4.790861 6.790861,3 9,3 C11.209139,3 13,4.790861 13,7 C13,9.209139 11.209139,11 9,11 Z"
                            fill="#000000"
                            fill-rule="nonzero"
                            opacity="0.3"
                          ></path>
                          <path
                            d="M0.00065168429,20.1992055 C0.388258525,15.4265159 4.26191235,13 8.98334134,13 C13.7712164,13 17.7048837,15.2931929 17.9979143,20.2 C18.0095879,20.3954741 17.9979143,21 17.2466999,21 C13.541124,21 8.03472472,21 0.727502227,21 C0.476712155,21 -0.0204617505,20.45918 0.00065168429,20.1992055 Z"
                            fill="#000000"
                            fill-rule="nonzero"
                          ></path>
                        </g>
                      </svg>
                      <!--end::Svg Icon-->
                    </span>
                    <div
                      class="text-primary font-weight-bold font-size-h6 mt-2"
                    >
                      Users
                    </div>
                  </div>
                  <div
                    class="total-right text-primary font-weight-bold font-size-h1 mt-2"
                  >
                    {{ users }}
                  </div>
                </div>
              </router-link>
              <router-link
                :to="{ name: 'Product', params: {} }"
                class="col bg-light-danger px-6 py-8 rounded-xl mr-7"
              >
                <div class="wrap-item">
                  <div class="total-left">
                    <span
                      class="svg-icon svg-icon-3x svg-icon-danger d-block my-2"
                    >
                      <!--begin::Svg Icon | path:assets/media/svg/icons/Design/Layers.svg-->
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
                            d="M12.9336061,16.072447 L19.36,10.9564761 L19.5181585,10.8312381 C20.1676248,10.3169571 20.2772143,9.3735535 19.7629333,8.72408713 C19.6917232,8.63415859 19.6104327,8.55269514 19.5206557,8.48129411 L12.9336854,3.24257445 C12.3871201,2.80788259 11.6128799,2.80788259 11.0663146,3.24257445 L4.47482784,8.48488609 C3.82645598,9.00054628 3.71887192,9.94418071 4.23453211,10.5925526 C4.30500305,10.6811601 4.38527899,10.7615046 4.47382636,10.8320511 L4.63,10.9564761 L11.0659024,16.0730648 C11.6126744,16.5077525 12.3871218,16.5074963 12.9336061,16.072447 Z"
                            fill="#000000"
                            fill-rule="nonzero"
                          ></path>
                          <path
                            d="M11.0563554,18.6706981 L5.33593024,14.122919 C4.94553994,13.8125559 4.37746707,13.8774308 4.06710397,14.2678211 C4.06471678,14.2708238 4.06234874,14.2738418 4.06,14.2768747 L4.06,14.2768747 C3.75257288,14.6738539 3.82516916,15.244888 4.22214834,15.5523151 C4.22358765,15.5534297 4.2250303,15.55454 4.22647627,15.555646 L11.0872776,20.8031356 C11.6250734,21.2144692 12.371757,21.2145375 12.909628,20.8033023 L19.7677785,15.559828 C20.1693192,15.2528257 20.2459576,14.6784381 19.9389553,14.2768974 C19.9376429,14.2751809 19.9363245,14.2734691 19.935,14.2717619 L19.935,14.2717619 C19.6266937,13.8743807 19.0546209,13.8021712 18.6572397,14.1104775 C18.654352,14.112718 18.6514778,14.1149757 18.6486172,14.1172508 L12.9235044,18.6705218 C12.377022,19.1051477 11.6029199,19.1052208 11.0563554,18.6706981 Z"
                            fill="#000000"
                            opacity="0.3"
                          ></path>
                        </g>
                      </svg>
                      <!--end::Svg Icon-->
                    </span>
                    <div class="text-danger font-weight-bold font-size-h6 mt-2">
                      Products
                    </div>
                  </div>
                  <div
                    class="total-right text-danger font-weight-bold font-size-h1 mt-2"
                  >
                    {{ products }}
                  </div>
                </div>
              </router-link>
              <!-- <router-link
                :to="{ name: 'NewShipping', params: {} }"
                class="col bg-light-success px-6 py-8 rounded-xl"
              >
                <div class="wrap-item">
                  <div class="total-left">
                    <span
                      class="svg-icon svg-icon-3x svg-icon-success d-block my-2"
                    >
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
                            d="M12.7037037,14 L15.6666667,10 L13.4444444,10 L13.4444444,6 L9,12 L11.2222222,12 L11.2222222,14 L6,14 C5.44771525,14 5,13.5522847 5,13 L5,3 C5,2.44771525 5.44771525,2 6,2 L18,2 C18.5522847,2 19,2.44771525 19,3 L19,13 C19,13.5522847 18.5522847,14 18,14 L12.7037037,14 Z"
                            fill="#000000"
                            opacity="0.3"
                          ></path>
                          <path
                            d="M9.80428954,10.9142091 L9,12 L11.2222222,12 L11.2222222,16 L15.6666667,10 L15.4615385,10 L20.2072547,6.57253826 C20.4311176,6.4108595 20.7436609,6.46126971 20.9053396,6.68513259 C20.9668779,6.77033951 21,6.87277228 21,6.97787787 L21,17 C21,18.1045695 20.1045695,19 19,19 L5,19 C3.8954305,19 3,18.1045695 3,17 L3,6.97787787 C3,6.70173549 3.22385763,6.47787787 3.5,6.47787787 C3.60510559,6.47787787 3.70753836,6.51099993 3.79274528,6.57253826 L9.80428954,10.9142091 Z"
                            fill="#000000"
                          ></path>
                        </g>
                      </svg>
                    </span>
                    <div
                      class="text-success font-weight-bold font-size-h6 mt-2"
                    >
                      Bug Reports
                    </div>
                  </div>
                  <div
                    class="total-right text-success font-weight-bold font-size-h1 mt-2"
                  >
                    {{ users }}
                  </div>
                </div>
              </router-link> -->
            </div>
            <!--end::Row-->
          </div>
          <!-- End Data Table -->
          <!-- Start Data Table -->
          <!-- <div
            class="datatable datatable-bordered datatable-head-custom datatable-default datatable-loaded"
          >
            <h3>Top User</h3>
            <table class="datatable-table">
              <thead class="datatable-head">
                <tr class="datatable-row flex-wrap">
                  <th
                    v-for="titleItem in titleItems"
                    :key="titleItem.title"
                    class="data-title"
                  >
                    <span>{{ titleItem.title }}</span>
                  </th>
                </tr>
              </thead>
              <tbody class="datatable-body">
                <tr
                  class="datatable-row"
                  v-for="user in dataUser.users"
                  :key="user.id"
                >
                  <td class="data-value">
                    <span>{{ user.id }}</span>
                  </td>
                  <td class="data-value">
                    <span>{{ user.name }}</span>
                  </td>
                  <td class="data-value">
                    <span>{{ user.email }}</span>
                  </td>
                  <td class="data-value">
                    <span>{{ user.phoneNumber }}</span>
                  </td>
                  <td class="data-value">
                    <span>{{ user.isAdmin }}</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div> -->
          <!-- End Data Table -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/runtime-core";
import { useRoute } from "vue-router";
// import { reactive, watch } from "vue";
import { reactive } from "vue";
import {
  TITLE_DATA_USER,
  GET_ALL_USERS,
  GET_ALL_ORDERS,
  GET_ALL_PRODUCT,
} from "@/constants";
import { useQuery } from "@vue/apollo-composable";

export default {
  setup() {
    const titleItems = reactive(TITLE_DATA_USER);
    const route = useRoute();
    const count = reactive({
      userLength: 0,
      productLength: 0,
      orderLength: 0,
    });

    const { result: dataUser } = useQuery(GET_ALL_USERS);
    const { result: dataOrder } = useQuery(GET_ALL_ORDERS);
    const { result: dataProduct } = useQuery(GET_ALL_PRODUCT);

    return {
      titleItems,
      meta: computed(() => route.meta),
      users: computed(() => dataUser.value?.users.length),
      orders: computed(() => dataOrder.value?.orders.length),
      products: computed(() => dataProduct.value?.products.length),
      count,
      dataUser,
      dataOrder,
      dataProduct,
    };
  },
};
</script>

<style scoped>
.data-value {
  vertical-align: middle;
  padding: 1rem 0;
  font-size: 1rem;
  width: 250px;
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

.wrap-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.content {
  left: 265px;
  margin-top: 90px;
  position: absolute;
  width: 80%;
}
.content-wrapper {
  height: 100vh;
}
</style>
