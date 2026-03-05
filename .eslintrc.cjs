module.exports = {
  root: true,
  env: { browser: true, es2021: true },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "detect" } },
  plugins: ["react", "react-hooks"],
  rules: {
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }],
  },
};
