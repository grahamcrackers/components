import fs from "fs";

import pkg from "../package.json";

const SRC = "./src/components";

(async () => {
    const allFiles = fs.readdirSync(SRC, { recursive: true }) as string[];
    const filtered = allFiles
        .map((file) => {
            const parts = file.split("/");
            if (parts.length > 1) return parts[1];
        })
        .filter((file) => file !== "index.ts" && file);

    // mapped exports
    const files = filtered.reduce((acc, cur) => {
        const componentName = cur?.split(".")[0];
        return {
            ...acc,
            [`./${componentName}`]: {
                require: `./dist/components/${componentName}/index.cjs`,
                import: `./dist/components/${componentName}/index.js`,
                types: `./dist/components/${componentName}/index.d.ts`,
            },
        };
    }, {});

    pkg.exports = {
        ...pkg.exports,
        ...files,
    };
})();
