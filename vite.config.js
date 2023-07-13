import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://fstv-electro.github.io/Podology/",
  plugins: [vue()],
});
