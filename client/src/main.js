import { createApp, provide, h } from "vue";
import { DefaultApolloClient } from "@vue/apollo-composable";
import { ApolloClient, InMemoryCache } from "@apollo/client/core";
// createHttpLink,
import App from "./App.vue";
import router from "./router";

import { createUploadLink } from "apollo-upload-client";

import { registerGlobalComponents } from "./utils/import";
import "./assets/styles/style.bundle.css";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle";

// Import FontAwesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

import { URI } from "./constants";

library.add(fas, fab, far);

const link = createUploadLink({ uri: URI });

// const httpLink = createHttpLink({
//   uri: URI,
// });

const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
  cache,
  // link: httpLink,
  link: link,
});

const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient);
  },

  render: () => h(App),
});

// const app = createApp(App);

registerGlobalComponents(app);

app.use(router);
app.use(bootstrap);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
