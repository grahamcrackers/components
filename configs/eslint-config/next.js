const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

/** @type {import("eslint").Linter.Config} */
module.exports = {
    globals: {
        React: true,
        JSX: true,
    },
    env: {
        node: true,
        browser: true,
    },
    plugins: ["only-warn"],
    extends: [
        require.resolve("@vercel/style-guide/eslint/next"), 
        "turbo",
        "plugin:@typescript-eslint/recommended", 
        "plugin:prettier/recommended"
    ],
    settings: {
        "import/resolver": {
            typescript: {
                project,
            },
        },
    },
    ignorePatterns: [
        // Ignore dotfiles
        ".*.js",
        "node_modules/",
    ],
    overrides: [{ files: ["*.js?(x)", "*.ts?(x)"] }],
};
