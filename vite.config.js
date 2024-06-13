import { defineConfig } from "vite";

export default defineConfig({
    base:"./",
    build:{
        minify:"terser",
        assetsInclude: ["src/monogram.ttf", "src/utils/**", "src/kaboomCtx/**"],
    },
});