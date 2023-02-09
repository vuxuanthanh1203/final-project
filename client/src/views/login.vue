<template>
  <div
    class="header-fixed header-mobile-fixed subheader-enabled subheader-fixed aside-enabled aside-fixed aside-minimize-hoverable"
  >
    <div class="d-flex flex-column flex-root">
      <div
        class="login login-signin-on d-flex flex-column flex-lg-row flex-column-fluid bg-white"
      >
        <!-- Start Login Image -->
        <div class="login-aside d-flex flex-column flex-row-auto">
          <div
            class="aside-img d-flex flex-row-fluid bgi-no-repeat bgi-position-y-bottom bgi-position-x-center"
          ></div>
        </div>
        <!-- End Login Images -->
        <!-- ------------------------- -->
        <!-- Start Login Form -->
        <div
          class="login-content flex-row-fluid d-flex flex-column justify-content-center position-relative overflow-hidden p-7 mx-auto"
        >
          <div class="d-flex flex-column-fluid flex-center">
            <div class="login-form login-signin">
              <form
                class="form fv-plugins-bootstrap fv-plugins-framework"
                @submit.prevent="login"
              >
                <div class="pb-13 pt-lg-0 pt-5">
                  <h3
                    class="font-weight-bolder text-dark font-size-h4 font-size-h1-lg"
                  >
                    Welcome to Admin Panel
                  </h3>
                </div>
                <div class="form-group fv-plugins-icon-container">
                  <label
                    class="font-size-h6 font-weight-bolder text-dark"
                    for="email"
                  >
                    Email
                  </label>
                  <input
                    class="form-control form-control-solid h-auto py-6 px-6 rounded-lg"
                    type="text"
                    v-model="formData.email"
                    id="email"
                    placeholder="someone@example.com"
                    autocomplete="off"
                  />
                  <span
                    class="form-text text-muted text-err"
                    v-for="error in v$.email.$errors"
                    :key="error.$uid"
                  >
                    {{ error.$message }}
                  </span>
                </div>
                <div class="form-group fv-plugins-icon-container">
                  <div class="justify-content-between mt-n5">
                    <label
                      class="font-size-h6 font-weight-bolder text-dark pt-5"
                      for="password"
                    >
                      Password
                    </label>
                    <input
                      class="form-control form-control-solid h-auto py-6 px-6 rounded-lg"
                      type="password"
                      v-model="formData.password"
                      id="password"
                      placeholder="Password ..."
                      autocomplete="off"
                    />
                    <span
                      class="form-text text-muted text-err"
                      v-for="error in v$.password.$errors"
                      :key="error.$uid"
                    >
                      {{ error.$message }}
                    </span>
                  </div>
                </div>
                <div class="pb-lg-0 pb-5">
                  <button
                    type="submit"
                    id="kt_login_signin_submit"
                    class="btn btn-primary font-weight-bolder font-size-h6 px-8 py-4 my-3 mr-3"
                  >
                    Sign In
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <!-- End Login Form -->
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/runtime-core";
import { watch, reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { LOGIN } from "@/constants";
import { useQuery } from "@vue/apollo-composable";
import useVuelidate from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";

export default {
  setup() {
    const router = useRouter();
    const formData = reactive({
      email: "",
      password: "",
    });
    const fetchEnabled = ref(false);

    const rules = computed(() => {
      return {
        email: { required, email },
        password: { required, minLength: minLength(6) },
      };
    });
    const v$ = useVuelidate(rules, formData);

    const { result, onError } = useQuery(
      LOGIN,
      () => ({
        input: {
          email: formData.email,
          password: formData.password,
        },
      }),
      { enabled: fetchEnabled }
    );

    onError((error) => {
      alert(error.graphQLErrors[0].message);
      formData.email = "";
      formData.password = "";
    });

    watch(result, (value) => {
      localStorage.setItem("apollo-token", value.login.token);
      router.push({ name: "Dashboard", params: {} });
    });

    function login() {
      fetchEnabled.value = true;
    }

    return { formData, v$, login };
  },
};
</script>

<style scoped>
.text-err {
  color: red !important;
}
.login.login-signin-on .login-signin {
  display: block;
}

.login .login-content .login-form {
  width: 100%;
  max-width: 450px;
}

.login.login-content {
  width: 100%;
  max-width: 500px;
}

.aside-img {
  min-height: 450px;
  background-image: url("../assets/images/login-visual-1.svg");
}

.login-aside {
  width: 100%;
  max-width: 450px;
  background-color: #f2c98a;
}

.login {
  height: 100vh;
}
</style>
