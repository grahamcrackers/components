import type { Options } from "tsup";

export const tsup: Options = {
    entry: ["src/**/*.ts"],
    treeshake: true,
    sourcemap: false,
    minify: true,
    clean: true,
    dts: true,
    splitting: false,
    format: ["cjs", "esm"],
    external: ["react", "react-dom", "react/jsx-runtime"],
    injectStyle: false,
};
