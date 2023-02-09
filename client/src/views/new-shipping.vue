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

            <!-- End Card Header -->
          </div>
          <!-- End Card Header -->
          <!-- -------------------------- -->
          <!-- Begin Form -->
          <form @submit.prevent>
            <div class="card-body">
              <div class="form-group">
                <label>
                  Shipping Method <span class="text-danger">*</span>
                </label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter the name of the shipping method"
                  v-model="shipping"
                />
                <span class="form-text text-muted text-err">
                  This field is required.
                </span>
              </div>
              <div class="form-group">
                <label>
                  Price
                  <span class="text-danger">*</span>
                </label>
                <input
                  type="number"
                  class="form-control"
                  placeholder="The price of this method"
                  v-model="price"
                />
                <span class="form-text text-muted text-err">
                  {{ message }}
                </span>
              </div>
            </div>
            <div class="card-footer">
              <button
                type="reset"
                class="btn btn-primary mr-2"
                @click="createShippingMethod"
              >
                Submit
              </button>
              <button
                type="button"
                class="btn btn-secondary"
                @click="backToRoute"
              >
                Cancel
              </button>
            </div>
          </form>
          <!-- End Form -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/runtime-core";
import { useRoute, useRouter } from "vue-router";
import { ref, reactive } from "vue";
import { TITLE_DATA_CATEGORY, CREATE_SHIPPING } from "@/constants";
import { useMutation } from "@vue/apollo-composable";

export default {
  setup() {
    const titleItems = reactive(TITLE_DATA_CATEGORY);
    const route = useRoute();
    const router = useRouter();

    function backToRoute() {
      router.push({ name: "Shipping", params: {} });
    }

    const shipping = ref("");
    const price = ref("");
    const message = ref("");

    function onsubmit() {
      console.log("name: " + shipping.value);
      console.log("price: " + typeof parseFloat(price.value));
    }

    const { mutate: createShippingMethod, onDone } = useMutation(
      CREATE_SHIPPING,
      () => ({
        variables: {
          input: {
            name: shipping.value,
            price: parseFloat(price.value),
          },
        },
      })
    );
    onDone(() => {
      shipping.value = "";
      price.value = "";
      message.value = "Created Successfully !";
    });

    return {
      titleItems,
      meta: computed(() => route.meta),
      backToRoute,
      shipping,
      price,
      message,
      createShippingMethod,
      onsubmit,
    };
  },
};
</script>

<style scoped>
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
</style>
