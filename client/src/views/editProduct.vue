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
                @click="closeMessage"
              >
                <span aria-hidden="true">
                  <font-awesome-icon :icon="['fas', 'xmark']" />
                </span>
              </button>
            </div>
          </div>
          <form @submit.prevent>
            <div class="card-body">
              <div class="form-div-wrapper d-flex">
                <div class="form-group input-width">
                  <label>
                    Product Name <span class="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter the name of the new product"
                    v-model="formData.name"
                  />
                  <span
                    class="form-text text-muted text-err"
                    v-for="error in v$.name.$errors"
                    :key="error.$uid"
                  >
                    {{ error.$message }}
                  </span>
                </div>
                <div class="form-group input-width ml-5">
                  <label>
                    Product Slug
                    <span class="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    class="form-control input-disable"
                    placeholder="The slug of the product"
                    disabled="disabled"
                    :value="renderSlug()"
                  />
                  <span
                    class="form-text text-muted text-err"
                    v-for="error in v$.slug.$errors"
                    :key="error.$uid"
                  >
                    {{ error.$message }}
                  </span>
                </div>
              </div>
              <div class="form-div-wrapper row d-flex">
                <!-- <div class="form-group col-lg-4">
                  <label> Image <span class="text-danger">*</span> </label>
                  <input type="file" class="form-control" />
                  <span class="form-text text-muted text-err">
                    {{ error.$message }}
                  </span>
                </div> -->
                <div class="form-group col-lg-6">
                  <label> Price <span class="text-danger">*</span> </label>
                  <input
                    type="number"
                    class="form-control"
                    placeholder="Enter the name of the new product"
                    v-model="formData.price"
                  />
                  <span
                    class="form-text text-muted text-err"
                    v-for="error in v$.price.$errors"
                    :key="error.$uid"
                  >
                    {{ error.$message }}
                  </span>
                </div>
                <div class="form-group col-lg-6">
                  <label for="category">
                    Category
                    <span class="text-danger">*</span>
                  </label>
                  <select v-model="formData.categoryId" class="form-control">
                    <option disabled value="">Please select one</option>
                    <option
                      v-for="category in categories"
                      :key="category.id"
                      :value="category.id"
                    >
                      {{ category.name }}
                    </option>
                  </select>
                  <span
                    class="form-text text-muted text-err"
                    v-for="error in v$.categoryId.$errors"
                    :key="error.$uid"
                  >
                    {{ error.$message }}
                  </span>
                </div>
              </div>
              <div class="form-group">
                <label>Description <span class="text-danger">*</span></label>
                <textarea
                  rows="5"
                  class="form-control"
                  placeholder="Enter the address of the new user"
                  v-model="formData.description"
                >
                </textarea>
                <span
                  class="form-text text-muted text-err"
                  v-for="error in v$.description.$errors"
                  :key="error.$uid"
                >
                  {{ error.$message }}
                </span>
              </div>
            </div>
            <div class="card-footer">
              <button
                type="submit"
                class="btn btn-primary mr-2"
                @click="handleFunction"
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
import { reactive } from "vue";
import { UPDATE_PRODUCT, GET_PRODUCT, GET_ALL_CATEGORIES } from "@/constants";
import { useQuery, useMutation } from "@vue/apollo-composable";
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";

import slugify from "slugify";

export default {
  setup() {
    const route = useRoute();
    const router = useRouter();

    function backToRoute() {
      router.push({ name: "Product", params: {} });
    }

    const { result: getAllCategories } = useQuery(GET_ALL_CATEGORIES);

    const { result, onResult } = useQuery(GET_PRODUCT, {
      productId: route.params.id * 1,
    });

    onResult((queryResult) => {
      formData.name = queryResult.data.product.name;
      formData.slug = queryResult.data.product.slug;
      formData.price = queryResult.data.product.price;
      formData.description = queryResult.data.product.description;
      formData.categoryId = queryResult.data.product.category.id;
    });

    const formData = reactive({
      name: result.value?.product?.name,
      slug: result.value?.product?.slug,
      price: result.value?.product?.price,
      description: result.value?.product?.description,
      categoryId: result.value?.product?.category.id,
      message: "",
      isShow: false,
      checkForm: false,
    });

    const rules = computed(() => {
      return {
        name: { required },
        slug: { required },
        price: { required },
        description: { required },
        categoryId: { required },
      };
    });

    const v$ = useVuelidate(rules, formData);

    function renderSlug() {
      formData.slug = slugify(formData.name, {
        replacement: "-",
        remove: /[*+~.()'"!:@]/g,
        lower: true,
      });

      return formData.slug;
    }

    const handleChange = async () => {
      formData.checkForm = await v$.value.$validate();
      return formData.checkForm;
    };

    async function handleFunction() {
      const checkValidate = await handleChange();
      if (checkValidate) {
        updateProduct();
      }
    }

    const {
      mutate: updateProduct,
      onError,
      onDone,
    } = useMutation(UPDATE_PRODUCT, () => ({
      variables: {
        productId: route.params.id * 1,
        input: {
          name: formData.name,
          slug: formData.slug,
          price: formData.price,
          categoryId: formData.categoryId,
          description: formData.description,
        },
      },
    }));

    onError(async () => {
      await v$.value.$validate();
    });

    onDone(() => {
      if (formData.checkForm) {
        formData.message = "Product Updated !";

        formData.isShow = !formData.isShow;
      }
    });

    function closeMessage() {
      formData.message = "";
      formData.isShow = !formData.isShow;
    }

    return {
      meta: computed(() => route.meta),
      categories: computed(() => getAllCategories.value?.categories),
      backToRoute,
      formData,
      renderSlug,
      result,
      handleFunction,
      v$,
      closeMessage,
    };
  },
};
</script>

<style scoped>
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
