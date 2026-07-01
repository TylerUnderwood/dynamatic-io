import { defineStore } from "pinia";

export const useTableOfContentsStore = defineStore({
  id: "TableOfContents",
  state: () => ({
    items: [
      {
        id: 'demo-link-id',
        name: 'Demo Heading',
      },
    ],
  }),
  actions: {
    clear() {
      this.items = [];
    },
    add( item ) {
      this.items.push(item);
    },
    remove( itemId ) {
      this.items = this.items.filter((item) => item.id !== itemId);
    }
  },
});
