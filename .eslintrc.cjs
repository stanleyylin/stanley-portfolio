module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react-hooks/recommended",
    ],
    ignorePatterns: ["dist", ".eslintrc.cjs"],
    parser: "@typescript-eslint/parser",
    plugins: ["react-refresh"],
    rules: {
        "react-refresh/only-export-components": [
            "warn",
            { allowConstantExport: true },
        ],
        "no-unused-vars": "off",
        "simple-import-sort/exports": "warn",
        "simple-import-sort/imports": [
            "warn",
            {
                groups: [
                    // ext library & side effect imports
                    ["^@?\\w", "^\\u0000"],
                    // {s}css files
                    ["^.+\\.s?css$"],
                    // Lib and hooks
                    ["^@/lib", "^@/hooks"],
                    // static data
                    ["^@/data"],
                    // components
                    ["^@/components", "^@/container"],
                    // zustand store
                    ["^@/store"],
                    // Other imports
                    ["^@/"],
                    // relative paths up until 3 level
                    [
                        "^\\./?$",
                        "^\\.(?!/?$)",
                        "^\\.\\./?$",
                        "^\\.\\.(?!/?$)",
                        "^\\.\\./\\.\\./?$",
                        "^\\.\\./\\.\\.(?!/?$)",
                        "^\\.\\./\\.\\./\\.\\./?$",
                        "^\\.\\./\\.\\./\\.\\.(?!/?$)",
                    ],
                    ["^@/types"],
                    // other that didnt fit in
                    ["^"],
                ],
            },
        ],
    },
};
