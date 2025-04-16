import eslintPluginUnicorn from 'eslint-plugin-unicorn';

export default [
  eslintPluginUnicorn.configs.all,
  {
    ignores: ['.gitignore'],
    rules: {
      'unicorn/better-regex': 'warn',
    },
  },
];
