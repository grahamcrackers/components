/** @type {import('prettier').Config} */
module.exports = {
    semi: true,
    trailingComma: "all",
    singleQuote: false,
    printWidth: 120,
    tabWidth: 4,
    importOrder: [
        "^(react/(.*)$)|^(react$)",
        "^(next/(.*)$)|^(next$)",  
        "<THIRD_PARTY_MODULES>",
        "",
        "^types$",
        "^@/types/(.*)$",
        "^@/config/(.*)$",
        "^@/lib/(.*)$",
        "^@/hooks/(.*)$",
        "^@/components/ui/(.*)$",
        "^@/components/(.*)$",
        "^@/registry/(.*)$",
        "^@/styles/(.*)$",
        "^@/app/(.*)$",
        "",
        "^[./]",
    ],
    importOrderSeparation: false,
    importOrderSortSpecifiers: true,
    importOrderBuiltinModulesToTop: true,
    importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
    importOrderMergeDuplicateImports: true,
    importOrderCombineTypeAndValueImports: true,
    plugins: ["@ianvs/prettier-plugin-sort-imports"],
    overrides: [
        {
            files: "**/*.{yml,yaml}",
            options: {
                tabWidth: 2,
            }
        }
    ]
};
