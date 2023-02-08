import { defineAsyncComponent } from "vue";

export function registerGlobalComponents(app) {
  app.component(
    "auth-layout",
    defineAsyncComponent(() => import("@/assets/layouts/auth"))
  );

  app.component(
    "default-layout",
    defineAsyncComponent(() => import("@/assets/layouts/default"))
  );
}
