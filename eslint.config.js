import eslintPluginUnicorn from "eslint-plugin-unicorn";

export default [
  eslintPluginUnicorn.configs.all,
  {
    rules: {
      "unicorn/better-regex": "warn",
    },
  },
];
