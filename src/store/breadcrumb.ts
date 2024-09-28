import { defineStore } from "pinia";

export const useBreadcrumbStore = defineStore("breadcrumb", {
  state: () => {
    return {
      breadcrumb: [
        {
          name: "Home",
          path: "/",
        },
      ],
    };
  },
  actions: {
    setBreadcrumb(breadcrumb: any) {
      this.breadcrumb = breadcrumb;
    },
  },
  getters: {
    getBreadcrumb(): any {
      return this.breadcrumb;
    },
  },
});
