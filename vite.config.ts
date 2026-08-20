import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { inspectAttr } from 'kimi-plugin-inspect-react'

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [inspectAttr(), react()],
  server: {
    port: 3000,
    // Windows can report EBUSY for native watchers on binary assets in public/.
    // Polling keeps HMR reliable when images are added or updated.
    watch: {
      usePolling: true,
      interval: 1000,
      binaryInterval: 1000,
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
