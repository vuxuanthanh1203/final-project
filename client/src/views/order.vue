<template>
  <div class="content d-flex flex-column flex-column-fluid">
    <div class="d-flex flex-column-fluid">
      <div class="container">
        <div class="card card-custom">
          <!-- Start Card Header -->
          <div class="card-header flex-wrap border-0 pt-6 pb-0">
            <div class="card-title flex-column">
              <h3 class="card-label">{{ meta.title }}</h3>
              <span class="text-muted pt-2 font-size-sm d-block">
                {{ meta.des }}
              </span>
            </div>
            <div class="card-toolbar">
              <div class="dropdown dropdown-inline mr-2">
                <button
                  @click="exportOrder"
                  class="btn btn-light-primary font-weight-bolder dropdown-toggle"
                >
                  <font-awesome-icon :icon="['fas', 'file-export']" />
                  Export
                </button>
              </div>
              <!-- <router-link to="/" class="btn btn-primary font-weight-bolder">
                <font-awesome-icon :icon="['fas', 'record-vinyl']" />
                New Record
              </router-link> -->
            </div>
            <!-- End Card Header -->
          </div>
          <!-- End Card Header -->
          <!-- -------------------------- -->
          <!-- Start Data Table -->
          <div
            class="alert alert-custom alert-notice alert-light-primary fade show mb-5"
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
          <div
            class="datatable datatable-bordered datatable-head-custom datatable-default datatable-loaded"
          >
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
                  <th class="data-title">
                    <span>Action</span>
                  </th>
                </tr>
              </thead>
              <tbody class="datatable-body">
                <p v-if="error">{{ error }}</p>
                <p v-if="loading">Loading...</p>
                <tr
                  class="datatable-row"
                  v-else
                  v-for="order in result.orders"
                  :key="order.id"
                >
                  <td class="data-value">
                    <span>{{ order.id }}</span>
                  </td>
                  <td class="data-value">
                    <span>{{ order.user.email }}</span>
                  </td>
                  <td class="data-value">
                    <span>{{ order.shippingMethod.name }}</span>
                  </td>
                  <td class="data-value">
                    <div
                      class="btn btn-sm btn-clean btn-icon"
                      data-toggle="tooltip"
                      title="Delete"
                    >
                      <font-awesome-icon :icon="['fas', 'trash']" />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- End Data Table -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/runtime-core";
import { useRoute } from "vue-router";
import { reactive } from "vue";
import { TITLE_DATA_ORDER, GET_ALL_ORDERS, EXPORT_ORDER } from "@/constants";
import { useQuery, useMutation } from "@vue/apollo-composable";

export default {
  setup() {
    const titleItems = reactive(TITLE_DATA_ORDER);
    const route = useRoute();
    const formData = reactive({
      message: "",
      isShow: true,
    });

    const { result, loading, error } = useQuery(GET_ALL_ORDERS);

    const { mutate: exportOrder, onDone } = useMutation(EXPORT_ORDER);

    onDone(() => {
      formData.message = "Exported !";
    });

    return {
      titleItems,
      meta: computed(() => route.meta),
      result,
      loading,
      error,
      exportOrder,
      formData,
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
