<template>
  <div class="content d-flex flex-column flex-column-fluid">
    <div class="d-flex flex-column-fluid">
      <div class="container">
        <div class="card card-custom">
          <!-- Start Card Header -->
          <!-- <div class="card-header flex-wrap border-0 pt-6 pb-0">
            <div class="card-title flex-column">
              <h3 class="card-label">{{ meta.title }}</h3>
              <span class="text-muted pt-2 font-size-sm d-block">
                {{ meta.des }}
              </span>
            </div>
          </div> -->
          <!-- End Card Header -->
          <!-- -------------------------- -->
          <!-- Begin Form -->
          <div class="flex-row-fluid">
            <div class="row">
              <div class="col-md-7 col-lg-12 col-xxl-7">
                <div class="card card-custom card-stretch gutter-b">
                  <div class="card-body p-15 pb-20">
                    <div class="row mb-17">
                      <div class="col-lg-6 mb-11 mb-xxl-0">
                        <div class="card card-custom card-stretch">
                          <div
                            class="card-body p-0 rounded px-10 py-15 d-flex align-items-center justify-content-center"
                          >
                            <img
                              :src="product.image"
                              class="mw-100 w-200px"
                              style="transform: scale(1.6)"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-6 pl-xxl-11">
                        <h2
                          class="font-weight-bolder text-dark mb-7"
                          style="font-size: 32px"
                        >
                          {{ product.name }}
                        </h2>
                        <div class="font-size-h2 mb-7 text-dark-50">
                          From
                          <span class="text-info font-weight-boldest ml-2">
                            {{ product.price }} VND
                          </span>
                        </div>
                        <div class="line-height-xl">
                          {{ product.description }}
                        </div>
                        <div class="row mb-6 mt-5">
                          <div class="col-6 col-md-4">
                            <div class="mb-8 d-flex">
                              <span class="text-dark font-weight-bold mb-4">
                                Category:
                              </span>
                              <span
                                class="text-muted font-weight-bolder font-size-lg ml-3"
                              >
                                {{ product.category.name }}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="d-flex flex-row-reverse mb-5">
                      <div
                        @click="refetch()"
                        class="btn btn-primary font-weight-bolder"
                        data-toggle="tooltip"
                        title="Reload"
                      >
                        <font-awesome-icon :icon="['fas', 'rotate-right']" />
                      </div>
                      <div
                        @click="goToRoute"
                        type="button"
                        class="btn btn-primary font-weight-bolder mr-2 px-6 font-size-sm"
                      >
                        New Stock
                      </div>
                      <div
                        @click="goToUpload"
                        type="button"
                        class="btn btn-primary font-weight-bolder mr-2 px-6 font-size-sm"
                      >
                        New Image
                      </div>
                    </div>
                    <div class="row mb-6">
                      <!--begin::Info-->
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
                              v-for="productAttr in productAttrs"
                              :key="productAttr?.id"
                            >
                              <td class="data-value">
                                <span>{{ productAttr.id }}</span>
                              </td>
                              <td class="data-value">
                                <span>{{ productAttr.value }}</span>
                              </td>
                              <td class="data-value">
                                <span>{{ productAttr.quantityInStock }}</span>
                              </td>
                              <td class="data-value">
                                <div
                                  @click="onDeleteClicked(productAttr.id)"
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
                      <!--end::Info-->
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
  GET_PRODUCT_ATTRS,
  TITLE_DATA_PRODUCT_ATTR,
  GET_PRODUCT,
  DELETE_PRODUCT_ATTR,
} from "@/constants/";
import { useQuery, useMutation } from "@vue/apollo-composable";

export default {
  setup() {
    const route = useRoute();
    const router = useRouter();
    const id = route.params.id;

    const titleItems = reactive(TITLE_DATA_PRODUCT_ATTR);

    function backToRoute() {
      router.push({ name: "Product", params: {} });
    }

    function goToRoute() {
      router.push({ name: "NewAttr", params: { id } });
    }
    function goToUpload() {
      router.push({ name: "Upload File", params: { id } });
    }

    const { result: dataProductAttrs, refetch } = useQuery(GET_PRODUCT_ATTRS, {
      productId: route.params.id * 1,
    });

    const { result: dataProduct } = useQuery(GET_PRODUCT, {
      productId: route.params.id * 1,
    });

    // Delete Product Attribute
    const attrDelete = ref("");
    const onDeleteClicked = (item) => {
      if (window.confirm("Delete This Item?")) {
        attrDelete.value = item;
        deleteProductAttr();
      }
    };

    const { mutate: deleteProductAttr } = useMutation(
      DELETE_PRODUCT_ATTR,
      () => ({
        variables: {
          productAttrId: attrDelete.value,
        },
        update(cache) {
          cache.evict({
            id: cache.identify({
              id: attrDelete.value,
              __typename: "ProductAttr",
            }),
          });
          cache.gc();
        },
      })
    );

    return {
      meta: computed(() => route.meta),
      product: computed(() => dataProduct.value?.product),
      productAttrs: computed(() => dataProductAttrs.value?.productAttributes),
      backToRoute,
      goToRoute,
      titleItems,
      onDeleteClicked,
      goToUpload,
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
