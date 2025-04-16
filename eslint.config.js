import eslintPluginUnicorn from 'eslint-plugin-unicorn';

export default [
  eslintPluginUnicorn.configs.all,
  {
    ignores: ['.gitignore'],
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      'unicorn/better-regex': 'warn',
    },
  },
];
