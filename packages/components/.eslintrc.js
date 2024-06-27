/** @type {import("eslint").Linter.Config} */
module.exports = {
    root: true,
    extends: ["@repo/eslint-config/common.js"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: "./tsconfig.lint.json",
        tsconfigRootDir: __dirname,
        sourceType: "module",
        ecmaVersion: "latest",
    },
};
