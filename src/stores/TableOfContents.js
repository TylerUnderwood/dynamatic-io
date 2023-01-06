import { defineStore } from "pinia";

export const useTableOfContentsStore = defineStore({
  id: "TableOfContents",
  state: () => ({
    items: [
      {
        id: 'temp-link-id',
        name: 'Temp Heading',
      },
    ],
  }),
  getters: {
    // doubleCount: (state) => state.counter * 2,
  },
  actions: {
    increment() {
      this.counter++;
    },
  },
});
