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
                  @click="exportProduct"
                  class="btn btn-light-primary font-weight-bolder dropdown-toggle"
                >
                  <font-awesome-icon :icon="['fas', 'file-export']" />
                  Export
                </button>
              </div>
              <div
                @click="goToRoute"
                class="btn btn-primary font-weight-bolder mr-2"
              >
                <font-awesome-icon :icon="['fas', 'record-vinyl']" />
                New Record
              </div>
              <div
                @click="refetch()"
                class="btn btn-primary font-weight-bolder"
              >
                <font-awesome-icon :icon="['fas', 'rotate-right']" />
              </div>
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
                <tr
                  class="datatable-row"
                  v-for="product in products"
                  :key="product.id"
                >
                  <td class="data-value">
                    <span>{{ product.id }}</span>
                  </td>
                  <!-- <td class="data-value">
                    <span>
                      Product IMG
                      <img src="{{ product.id }}" alt="product-img" />
                    </span>
                  </td> -->
                  <td class="data-value">
                    <span>{{ product.name }}</span>
                  </td>
                  <td class="data-value">
                    <span>{{ product.price }}</span>
                  </td>
                  <td class="data-value">
                    <span>{{ product.category.name }}</span>
                  </td>
                  <td class="data-value">
                    <router-link
                      :to="`/product/${product.id}`"
                      class="btn btn-sm btn-clean btn-icon mr-2"
                      data-toggle="tooltip"
                      title="Detail"
                    >
                      <font-awesome-icon :icon="['fas', 'circle-info']" />
                    </router-link>
                    <router-link
                      :to="`/product/edit/${product.id}`"
                      class="btn btn-sm btn-clean btn-icon mr-2"
                      data-toggle="tooltip"
                      title="Edit"
                    >
                      <font-awesome-icon :icon="['fas', 'pencil']" />
                    </router-link>
                    <div
                      @click="onDeleteClicked(product.id)"
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
import { reactive, ref } from "vue";
import {
  TITLE_DATA_PRODUCT,
  GET_ALL_PRODUCT,
  EXPORT_PRODUCT,
  DELETE_PRODUCT,
} from "@/constants";
import { useQuery, useMutation } from "@vue/apollo-composable";
import axios from "axios";
import { print } from "graphql";
import { URI } from "../constants";

export default {
  setup() {
    const titleItems = reactive(TITLE_DATA_PRODUCT);
    const route = useRoute();
    const router = useRouter();
    const formData = reactive({
      message: "",
      isShow: true,
    });

    function goToRoute() {
      router.push({ name: "NewProduct", params: {} });
    }

    const { result: dataProduct, refetch } = useQuery(GET_ALL_PRODUCT);

    // Export Data
    function exportProduct() {
      axios
        .post(URI, {
          query: print(EXPORT_PRODUCT),
          responseType: "blob",
        })
        .then((res) => {
          const url = res.data.data.exportProduct.fileUrl;

          const link = document.createElement("a");
          link.href = url;

          const fileName = `${+new Date()}.csv`;
          link.setAttribute("download", fileName);
          document.body.appendChild(link);
          link.click();
          link.remove();
        })
        .catch((err) => console.log("err: ", err));
    }

    // Delete Product
    const productDelete = ref("");
    const onDeleteClicked = (item) => {
      if (window.confirm("Delete This Item?")) {
        productDelete.value = item;
        deleteProduct();
      }
    };

    const { mutate: deleteProduct } = useMutation(DELETE_PRODUCT, () => ({
      variables: {
        productId: productDelete.value,
      },
      update(cache) {
        cache.evict({
          id: cache.identify({
            id: productDelete.value,
            __typename: "Product",
          }),
        });
        cache.gc();
      },
    }));

    return {
      titleItems,
      meta: computed(() => route.meta),
      goToRoute,
      products: computed(() => dataProduct.value?.products),
      exportProduct,
      formData,
      onDeleteClicked,
      refetch,
    };
  },
};
</script>

<style scoped>
.data-value span {
  width: 100%;
}
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
