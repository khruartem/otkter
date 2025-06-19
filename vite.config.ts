import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const __dirname = dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    origin: "http://localhost:5173",
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        // Страницы проеков
        all: resolve(__dirname, "projects/all/index.html"),
        uniqueChronicle: resolve(
          __dirname,
          "projects/unique-chronicle/index.html"
        ),
        friendship: resolve(__dirname, "projects/friendship/index.html"),
        openPlay: resolve(__dirname, "projects/open-play/index.html"),
        mastership: resolve(__dirname, "projects/mastership/index.html"),
        nikolay: resolve(__dirname, "projects/nikolay/index.html"),
        twoInWorld: resolve(__dirname, "projects/two-in-world/index.html"),
        esenin: resolve(__dirname, "projects/esenin/index.html"),
        amplitude: resolve(__dirname, "projects/amplitude/index.html"),
        // Страницы услуг
        OT: resolve(__dirname, "services/open-sea/index.html"),
        events: resolve(__dirname, "services/events/index.html"),
        design: resolve(__dirname, "services/design/index.html"),
        content: resolve(__dirname, "services/content/index.html"),
        masterClasses: resolve(__dirname, "services/master-class/index.html"),
        lamp: resolve(__dirname, "services/lamp/index.html"),
        smm: resolve(__dirname, "services/smm/index.html"),
        // 404
        notFound: resolve(__dirname, "not-found/index.html"),
      },
    },
  },
  // base: 'https://khruartem.github.io/otkter',
  //assetsInclude: ['*/*.svg']
});
