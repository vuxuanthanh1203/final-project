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
              <div class="form-group mr-2 select-type d-flex">
                <label for="type"> Type:</label>
                <select class="form-control ml-2" id="type">
                  <option>user</option>
                  <option @click="loadStaff">admin</option>
                </select>
              </div>
              <div
                @click="exportUser"
                class="btn btn-primary font-weight-bolder mr-2"
              >
                <font-awesome-icon :icon="['fas', 'file-export']" />
                Export Data
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
              <tbody v-if="users" class="datatable-body">
                <tr class="datatable-row" v-for="user in users" :key="user.id">
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
                    <div class="btn btn-sm btn-clean btn-icon mr-2">
                      <font-awesome-icon :icon="['fas', 'file']" />
                    </div>
                    <router-link
                      v-if="!user.isAdmin"
                      :to="`/user/${user.id}`"
                      class="btn btn-sm btn-clean btn-icon mr-2"
                    >
                      <font-awesome-icon :icon="['fas', 'pencil']" />
                    </router-link>
                    <div
                      v-if="!user.isAdmin"
                      @click="deleteItem({ userId: user.id })"
                      class="btn btn-sm btn-clean btn-icon"
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
import {
  TITLE_DATA_USER,
  GET_ALL_USERS,
  EXPORT_USER,
  DELETE_USER,
} from "@/constants";
import { useQuery, useMutation } from "@vue/apollo-composable";

export default {
  setup() {
    const titleItems = reactive(TITLE_DATA_USER);
    const route = useRoute();
    const router = useRouter();

    const formData = reactive({
      message: "",
      isShow: true,
    });

    function goToRoute() {
      router.push({ name: "NewUser", params: {} });
    }

    const { result: getAllUsers } = useQuery(GET_ALL_USERS);

    // Delete Item
    const users = computed(() => getAllUsers.value?.users);

    const { mutate: deleteItem } = useMutation(DELETE_USER);
    // const { mutate: deleteItem } = useMutation(DELETE_USER, {
    //   update(cache, { data }) {
    //     const { listUser } = cache.readQuery({
    //       query: GET_ALL_USERS,
    //     });

    //     cache.writeQuery({
    //       query: GET_ALL_USERS,
    //       data: {
    //         listUser: listUser.filter((user) => user.id !== data.deleteItem.id),
    //       },
    //     });
    //   },
    // });

    // Export Item
    const { mutate: exportUser, onDone } = useMutation(EXPORT_USER);

    onDone(() => {
      formData.message = "Exported !";
    });

    return {
      titleItems,
      meta: computed(() => route.meta),
      users,
      goToRoute,
      formData,
      exportUser,
      deleteItem,
    };
  },
};
</script>

<style scoped>
.select-type {
  align-items: center;
  align-content: center;
  margin-top: 25px;
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
