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
                  <label>Name <span class="text-danger">*</span></label>
                  <input
                    type="text"
                    class="form-control"
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
                  <label>User Name <span class="text-danger">*</span></label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="formData.userName"
                  />
                  <span
                    class="form-text text-muted text-err"
                    v-for="error in v$.userName.$errors"
                    :key="error.$uid"
                  >
                    {{ error.$message }}
                  </span>
                </div>
              </div>
              <div class="form-div-wrapper d-flex">
                <div class="form-group input-width">
                  <label>
                    Password
                    <span class="password-default">(Default: 12345678)</span>
                    <span class="text-danger"> *</span>
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Enter the name of the new user"
                    v-model="formData.password"
                  />
                  <span
                    class="form-text text-muted text-err"
                    v-for="error in v$.password.$errors"
                    :key="error.$uid"
                  >
                    {{ error.$message }}
                  </span>
                </div>
                <div class="form-group input-width ml-5">
                  <label>
                    Confirm Password
                    <span class="password-default">(Default: 12345678)</span>
                    <span class="text-danger"> *</span>
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Re-enter the password"
                    v-model="formData.confirmPassword"
                  />
                  <span
                    class="form-text text-muted text-err"
                    v-for="error in v$.confirmPassword.$errors"
                    :key="error.$uid"
                  >
                    {{ error.$message }}
                  </span>
                </div>
              </div>
              <div class="form-div-wrapper d-flex">
                <div class="form-group input-width">
                  <label>Phone Number <span class="text-danger">*</span></label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="formData.phoneNumber"
                  />
                  <span
                    class="form-text text-muted text-err"
                    v-for="error in v$.phoneNumber.$errors"
                    :key="error.$uid"
                  >
                    {{ error.$message }}
                  </span>
                </div>
                <div class="form-group input-width ml-5">
                  <label>Role</label>
                  <div class="checkbox-inline mt-3">
                    <label class="checkbox">
                      <input type="checkbox" v-model="formData.isAdmin" />
                      <span></span> Is Admin
                    </label>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label>Address <span class="text-danger">*</span></label>
                <textarea
                  rows="5"
                  class="form-control"
                  v-model="formData.address"
                >
                </textarea>
                <span
                  class="form-text text-muted text-err"
                  v-for="error in v$.address.$errors"
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
import { GET_USER, UPDATE_USER } from "@/constants";
import { useQuery, useMutation } from "@vue/apollo-composable";
import useVuelidate from "@vuelidate/core";
import { required, minLength, sameAs } from "@vuelidate/validators";
// helpers,

export default {
  setup() {
    const route = useRoute();
    const router = useRouter();

    function backToRoute() {
      router.push({ name: "User", params: {} });
    }

    const { result, onResult } = useQuery(GET_USER, {
      userId: route.params.id * 1,
    });

    onResult((queryResult) => {
      formData.name = queryResult.data.user.name;
      formData.userName = queryResult.data.user.userName;
      formData.phoneNumber = queryResult.data.user.phoneNumber;
      formData.isAdmin = queryResult.data.user.isAdmin;
      formData.address = queryResult.data.user.address;
    });

    const formData = reactive({
      name: result.value?.user?.name,
      userName: result.value?.user?.userName,
      password: "12345678",
      confirmPassword: "12345678",
      phoneNumber: result.value?.user?.phoneNumber,
      isAdmin: result.value?.user?.isAdmin,
      address: result.value?.user?.address,
      isShow: false,
      checkForm: false,
    });

    const rules = computed(() => {
      return {
        name: { required },
        userName: { required },
        password: { required, minLength: minLength(8) },
        confirmPassword: { required, sameAs: sameAs(formData.password) },
        phoneNumber: { required },
        address: { required },
      };
    });

    const v$ = useVuelidate(rules, formData);

    const handleChange = async () => {
      formData.checkForm = await v$.value.$validate();
      return formData.checkForm;
    };

    async function handleFunction() {
      const checkValidate = await handleChange();
      console.log(checkValidate);
      if (checkValidate) {
        updateUser();
      }
    }

    const {
      mutate: updateUser,
      onError,
      onDone,
    } = useMutation(UPDATE_USER, () => ({
      variables: {
        userId: parseInt(route.params.id),
        input: {
          name: formData.name,
          userName: formData.userName,
          password: formData.password,
          phoneNumber: formData.phoneNumber,
          isAdmin: formData.isAdmin,
          address: formData.address,
        },
      },
    }));

    onError(async () => {
      await v$.value.$validate();
    });

    onDone(() => {
      if (formData.checkForm) {
        formData.message = "User Updated !";
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
.password-default {
  color: #33333385;
  font-style: italic;
  font-size: 12px;
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
