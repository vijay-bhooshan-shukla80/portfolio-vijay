import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path from "node:path"

export default defineConfig({
  plugins: [react()],
  server: {
    host: "127.0.0.1",
    port: 3000,
    strictPort: true,
  },
  resolve: {
    alias: [
      { find: "next/navigation", replacement: path.resolve(__dirname, "src/compat/next-navigation.js") },
      { find: "next/image", replacement: path.resolve(__dirname, "src/compat/next-image.jsx") },
      { find: "next/link", replacement: path.resolve(__dirname, "src/compat/next-link.jsx") },
      { find: "@", replacement: path.resolve(__dirname, "src") },
    ],
  },
})
