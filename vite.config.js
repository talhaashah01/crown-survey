import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
// export default defineConfig({
//   plugins: [react()],
//   root: "src",
//   build: {
//     outDir: 'dist',
//   },
// });

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    define: {
      "process.env.API_URL": JSON.stringify(env.API_URL),
      // If you want to exposes all env variables, which is not recommended
      // 'process.env': env
    },
    plugins: [react()],
    root: "src",
    build: {
      outDir: "dist",
    },
    server: {
      port: 4111, // Configure the development server port
    },
    preview: {
      port: 4111, // Configure the preview server port
      host: true, // Allow access from external IPs (useful for testing on other devices)
    },
  };
});
