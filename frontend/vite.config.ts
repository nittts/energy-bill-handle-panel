import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [tsconfigPaths(), react()],
  preview: {
    port: 6667,
    host: true,
  },
  server: {
    watch: {
      usePolling: true,
    },
    origin: "0.0.0.0",
    host: true,
    strictPort: true,
    port: 6667,
  },
});
