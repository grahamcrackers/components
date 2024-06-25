// import type { Options } from "tsup";

// export const tsup: Options = {
//     entry: ["src/**/*.ts"],
//     treeshake: true,
//     sourcemap: false,
//     minify: true,
//     clean: true,
//     dts: true,
//     splitting: false,
//     target: "es2020",
//     format: ["cjs", "esm"],
//     external: ["react", "react/jsx-runtime"],
//     injectStyle: false,
// };

import { defineConfig } from "tsup";

export default defineConfig((options) => ({
    entry: ["src/index.ts", "src/**/*.ts", "src/**/*.tsx"],
    format: ["cjs", "esm"],
    dts: true,
    clean: true,
    sourcemap: true,
    target: "es2022",
    external: ["react", "react/jsx-runtime"],
    minify: !options.watch,
    banner: { js: '"use client";' },
}));
