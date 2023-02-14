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
                  class="btn btn-light-primary font-weight-bolder dropdown-toggle"
                >
                  <font-awesome-icon :icon="['fas', 'file-export']" />
                  Export
                </button>
              </div>
              <div
                @click="goToRoute"
                class="btn btn-primary font-weight-bolder"
              >
                <font-awesome-icon :icon="['fas', 'record-vinyl']" />
                New Record
              </div>
            </div>
            <!-- End Card Header -->
          </div>
          <!-- End Card Header -->
          <!-- -------------------------- -->
          <!-- Start Data Table -->
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
                  v-for="category in result.categories"
                  :key="category.id"
                >
                  <td class="data-value">
                    <span>{{ category.id }}</span>
                  </td>
                  <td class="data-value">
                    <span>{{ category.name }}</span>
                  </td>
                  <td class="data-value">
                    <span>{{ category.slug }}</span>
                  </td>
                  <td class="data-value">
                    <router-link
                      :to="`/category/edit/${category.id}`"
                      class="btn btn-sm btn-clean btn-icon mr-2"
                      data-toggle="tooltip"
                      title="Edit"
                    >
                      <font-awesome-icon :icon="['fas', 'pencil']" />
                    </router-link>
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
import { useRoute, useRouter } from "vue-router";
import { reactive } from "vue";
import { ref } from "vue";
import {
  TITLE_DATA_CATEGORY,
  GET_ALL_CATEGORIES,
  DELETE_CATEGORY,
} from "@/constants/";
import { useQuery, useMutation } from "@vue/apollo-composable";

export default {
  setup() {
    const tooltip = () => {
      document.querySelectorAll('[data-toggle="tooltip"]').tooltip();
    };

    const titleItems = reactive(TITLE_DATA_CATEGORY);
    const route = useRoute();
    const router = useRouter();
    const message = ref("");

    function goToRoute() {
      router.push({ name: "NewCategory", params: {} });
    }

    const { result, loading, error } = useQuery(GET_ALL_CATEGORIES);

    const { mutate: deleteCategory, onDone } = useMutation(
      DELETE_CATEGORY,
      () => ({
        variables: {
          categoryId: parseInt(route.params.id),
        },
      })
    );
    onDone(() => {
      message.value = "category deleted!";
    });

    return {
      meta: computed(() => route.meta),
      goToRoute,
      titleItems,
      result,
      loading,
      error,
      tooltip,
      deleteCategory,
    };
  },
};
</script>

<style scoped>
.data-value {
  vertical-align: middle;
  padding: 1rem 0;
  width: 250px;
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
</style>
