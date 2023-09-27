module.exports = {
    parser: "@typescript-eslint/parser",
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react-hooks/recommended",
        "plugin:storybook/recommended",
        "plugin:prettier/recommended",
    ],
    plugins: ["react-refresh"],
    rules: {
        "@typescript-eslint/explicit-function-return-type": "off",
        "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
        "@typescript-eslint/no-unused-vars": [
            "warn",
            {
                argsIgnorePattern: "^_",
                varsIgnorePattern: "^_",
                caughtErrorsIgnorePattern: "^_",
            },
        ],
    },
    ignorePatterns: ["dist", ".eslintrc.cjs"],
};
