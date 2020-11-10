module.exports = {
  // Dep names: 'eslint-plugin-jest', 'eslint-plugin-react', 'eslint-plugin-react-hooks', '@typescript-eslint/eslint-plugin', '@typescript-eslint/parser', 'eslint-plugin-jsx-a11y'

  // REVIEW: React plugins and rules
  // REVIEW: TypeScript rules/config (file extensions, plugins, parsers, etc.)
  // REVIEW: jsx-a11y

  plugins: ["react-hooks", "jsx-a11y"],
  extends: ["plugin:react/recommended", "plugin:jsx-a11y/recommended"],
  env: {
    es6: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 11,
    sourceType: "module",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  ignorePatterns: ["dist/", "build/", "coverage/", ".cache/", "public/"],

  rules: {
    /**
     * Possible Errors
     *
     * https://eslint.org/docs/rules/#possible-errors
     */
    "no-compare-neg-zero": 2,
    "no-cond-assign": 2,
    "no-console": [2, { allow: ["error"] }],
    "no-constant-condition": 2,
    "no-debugger": 2,
    "no-dupe-args": 2,
    "no-dupe-keys": 2,
    "no-duplicate-case": 2,
    "no-empty": [2, { allowEmptyCatch: true }],
    "no-empty-character-class": 2,
    "no-ex-assign": 2,
    "no-extra-boolean-cast": 2,
    "no-extra-semi": 2,
    "no-func-assign": 2,
    "no-inner-declarations": 2,
    "no-invalid-regexp": 2,
    "no-irregular-whitespace": 2,
    "no-obj-calls": 2,
    "no-regex-spaces": 2,
    "no-sparse-arrays": 0,
    "no-template-curly-in-string": 2,
    "no-unexpected-multiline": 2,
    "no-unreachable": 2,
    "no-unsafe-finally": 2,
    "use-isnan": 2,
    "valid-typeof": 2,
    eqeqeq: ["error", "always", { null: "ignore" }],

    /**
     * Best Practices
     *
     * https://eslint.org/docs/rules/#best-practices
     */
    "prefer-regex-literals": 2,
    "no-caller": 2,
    "no-case-declarations": 2,
    "no-empty-pattern": 2,
    "no-extend-native": 2,
    "no-new-wrappers": 2,
    "no-octal": 2,
    "no-redeclare": 2,
    "no-self-assign": 2,
    "no-unused-labels": 2,
    "no-var": 2,

    /**
     * ESLint's "Variables" rules
     *
     * https://eslint.org/docs/rules/#variables
     */
    "no-delete-var": 2,
    "no-undef": 2,
    "no-unused-vars": [
      2,
      {
        args: "none",
        ignoreRestSiblings: true,
      },
    ],
    "no-use-before-define": [
      2,
      {
        functions: false,
      },
    ],

    /**
     * ECMAScript 6
     *
     * https://eslint.org/docs/rules/#ecmascript-6
     */
    "constructor-super": 2,

    /**
     * React
     */
    "react/prop-types": 0,

    /**
     * React hooks
     */
    "react-hooks/rules-of-hooks": 2,
    "react-hooks/exhaustive-deps": 2,
  },
  overrides: [
    /**
     * Node files
     */
    {
      files: [".eslintrc.js", "./gatsby-*.js"],
      env: {
        node: true,
        browser: false,
      },
    },
  ],
};
