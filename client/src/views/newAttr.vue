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
              <div class="form-group">
                <label>Size <span class="text-danger">*</span></label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter the name of the new attribute"
                  v-model="formData.size"
                />
                <span
                  class="form-text text-muted text-err"
                  v-for="error in v$.size.$errors"
                  :key="error.$uid"
                >
                  {{ error.$message }}
                </span>
              </div>
              <div class="form-group">
                <label>Quantity <span class="text-danger">*</span></label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter the quantity of the attribute"
                  v-model="formData.quantity"
                />
                <span
                  class="form-text text-muted text-err"
                  v-for="error in v$.quantity.$errors"
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
import { CREATE_ATTR } from "@/constants";
import { useMutation } from "@vue/apollo-composable";
import useVuelidate from "@vuelidate/core";
import { required, numeric } from "@vuelidate/validators";
// helpers,

export default {
  setup() {
    const route = useRoute();
    const router = useRouter();
    const id = route.params.id;

    function backToRoute() {
      router.push({ name: "Product Detail", params: { id } });
    }

    const formData = reactive({
      size: "",
      quantity: "",
      message: "",
      isShow: false,
      checkForm: false,
    });

    const rules = computed(() => {
      return {
        size: { required },
        quantity: { required, numeric },
      };
    });

    const v$ = useVuelidate(rules, formData);

    const handleChange = async () => {
      formData.checkForm = await v$.value.$validate();
      return formData.checkForm;
    };

    async function handleFunction() {
      const checkValidate = await handleChange();
      if (checkValidate) {
        createAttr();
        v$.value.$reset();
      }
    }

    const {
      mutate: createAttr,
      onError,
      onDone,
    } = useMutation(CREATE_ATTR, () => ({
      variables: {
        input: {
          value: formData.size.toUpperCase(),
          quantityInStock: formData.quantity * 1,
          productId: id * 1,
        },
      },
    }));

    onError(async () => {
      await v$.value.$validate();
    });

    onDone(() => {
      if (formData.checkForm) {
        formData.size = "";
        formData.quantity = "";
        formData.message = "Attribute Created !";
        formData.isShow = !formData.isShow;
      }
    });

    function closeMessage() {
      formData.message = "";
      formData.isShow = !formData.isShow;
    }

    return {
      meta: computed(() => route.meta),
      backToRoute,
      formData,
      v$,
      handleFunction,
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
