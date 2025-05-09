import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    minify: "esbuild", // Using esbuild instead of terser
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom", "framer-motion"],
          // Split your app code into smaller chunks
          emailjs: ["@emailjs/browser"],
        },
      },
    },
  },
});
