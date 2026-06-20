// import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import vercel from "nitropack/presets/vercel";

export default defineConfig({
  nitro: {
    preset: vercel(),
  },
});
