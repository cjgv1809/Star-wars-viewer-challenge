import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig(({ mode }) => {
  const isProduction = mode === "production";

  return {
    plugins: [
      react(),
      isProduction &&
        VitePWA({
          registerType: "autoUpdate",
          includeAssets: [
            "favicon.svg",
            "favicon.ico",
            "favicon-16x16.png",
            "favicon-32x32.png",
            "apple-touch-icon.png",
            "android-chrome-192x192.png",
            "android-chrome-512x512.png",
            "robots.txt",
          ],
          manifest: {
            name: "Star Wars Hero Viewer",
            short_name: "StarWarsHeroes",
            description: "View Star Wars characters and their details",
            theme_color: "#f3c623",
            icons: [
              {
                src: "/favicon.ico",
                sizes: "48x48",
                type: "image/x-icon",
              },
              {
                src: "/favicon.svg",
                sizes: "512x512",
                type: "image/svg+xml",
                purpose: "any",
              },
              {
                src: "/android-chrome-192x192.png",
                sizes: "192x192",
                type: "image/png",
              },
              {
                src: "/android-chrome-512x512.png",
                sizes: "512x512",
                type: "image/png",
              },
              {
                src: "/favicon-16x16.png",
                sizes: "16x16",
                type: "image/png",
              },
              {
                src: "/favicon-32x32.png",
                sizes: "32x32",
                type: "image/png",
              },
              {
                src: "/mask-icon.svg",
                sizes: "512x512",
                type: "image/svg+xml",
                purpose: "maskable",
              },
            ],
            background_color: "#131313",
            dir: "ltr",
            display: "standalone",
            lang: "en",
            orientation: "any",
          },
          workbox: {
            runtimeCaching: [
              {
                urlPattern:
                  /^https:\/\/starwars-visualguide\.com\/assets\/img\/characters\/.*\.jpg$/,
                handler: "CacheFirst",
                options: {
                  cacheName: "character-images",
                  expiration: {
                    maxEntries: 50,
                    maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
                  },
                },
              },
              {
                urlPattern: /^https:\/\/swapi\.dev\/api\/people\/.*$/,
                handler: "NetworkFirst",
                options: {
                  cacheName: "api-calls",
                  networkTimeoutSeconds: 10,
                  expiration: {
                    maxEntries: 50,
                    maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
                  },
                  cacheableResponse: {
                    statuses: [0, 200],
                  },
                },
              },
              {
                urlPattern: ({ request }) =>
                  request.destination === "document" ||
                  request.destination === "script" ||
                  request.destination === "style" ||
                  request.destination === "image" ||
                  request.destination === "font",
                handler: "StaleWhileRevalidate",
                options: {
                  cacheName: "static-resources",
                },
              },
            ],
          },
        }),
    ].filter(Boolean),
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: "./vitest.setup.ts",
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
