import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import theme from "./src/config/theme.json";

export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@config": fileURLToPath(new URL("./src/config", import.meta.url)),
      "@views": fileURLToPath(new URL("./src/views", import.meta.url)),
      "@styles": fileURLToPath(new URL("./src/assets/styles", import.meta.url)),
    },
  },
  server: {
    https: true,
  },
  define: {
    theme: theme,
  },
});
