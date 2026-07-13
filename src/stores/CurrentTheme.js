import { defineStore } from "pinia";
import { tokenBuilder } from 'dynamatic';
import themeDefault from '@config/theme.json';

const themeDefaultRaw = tokenBuilder(themeDefault);

export const useCurrentThemeStore = defineStore({
  id: "CurrentTheme",
  state: () => ({
    raw: themeDefaultRaw,
  }),
  actions: {
    reset() {
      this.raw = themeDefaultRaw;
    },
    update( theme ) {
      this.raw = theme;
    }
    // TODO: Store Locally
  },
});
