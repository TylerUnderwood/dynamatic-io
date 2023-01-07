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
