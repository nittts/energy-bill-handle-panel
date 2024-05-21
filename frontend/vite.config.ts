import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react()],
  preview: {
    port: 5555,
    host: true,
  },
  server: {
    watch: {
      usePolling: true,
    },
    origin: "0.0.0.0",
    host: true,
    strictPort: true,
    port: 5555,
  },
});
