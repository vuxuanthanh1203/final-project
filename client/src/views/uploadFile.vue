<template>
  <div class="content d-flex flex-column flex-column-fluid">
    <div class="d-flex flex-column-fluid">
      <div class="container">
        <div class="card card-custom">
          <!-- Start Card Header -->
          <div class="card-header flex-wrap border-0 pt-6 pb-0">
            <div class="card-title flex-column">
              <h3 class="card-label">Upload Image</h3>
              <span class="text-muted pt-2 font-size-sm d-block">
                Upload Image Of This Product
              </span>
            </div>

            <!-- End Card Header -->
          </div>
          <!-- End Card Header -->
          <!-- -------------------------- -->
          <!-- Begin Form -->
          <!-- <div
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
                @click="showMessage"
              >
                <span aria-hidden="true">
                  <font-awesome-icon :icon="['fas', 'xmark']" />
                </span>
              </button>
            </div>
          </div> -->
          <div class="card-body">
            <div class="form-div-wrapper row d-flex">
              <div class="form-group col-lg-4">
                <label> Image <span class="text-danger">*</span> </label>
                <input
                  type="file"
                  id="file"
                  class="form-control"
                  accept="image/*"
                  @change="onFileChange"
                />
                <div class="form-group">
                  <img
                    class="product-img mt-3"
                    :src="imageUrl ? imageUrl : defaultImg"
                    alt="thumbnail"
                  />
                </div>
              </div>
            </div>

            <div class="card-footer">
              <button
                type="submit"
                class="btn btn-primary mr-2"
                @click="onUpload"
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
          </div>
          <!-- End Form -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { useMutation } from "@vue/apollo-composable";
import { UPLOAD_FILE } from "@/constants";
// import axios from "axios";

export default {
  data() {
    return {
      selectedFile: null,
    };
  },
  methods: {
    onFileChange(event) {
      this.selectedFile = event.target.files[0];
    },

    async onUpload() {
      console.log(this);
      let { data } = await this.$apollo.mutate({
        mutation: UPLOAD_FILE,
        variables: { file: this.selectedFile },
      });

      console.log("Data: ", data);
    },
  },
};
</script>

<style scoped>
.product-img {
  width: 100%;
  border-radius: 5px;
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
