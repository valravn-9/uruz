import eslintPluginUnicorn from 'eslint-plugin-unicorn';

export default [
  eslintPluginUnicorn.configs.all,
  {
    ignores: ['.gitignore'],
    rules: {
      'unicorn/better-regex': 'warn',
    },
    overrides: [
      {
        files: [
          '**/__tests__/**/*.[jt]s?(x)',
          '**/?(*.)+(spec|test).[jt]s?(x)',
        ],
        extends: ['plugin:testing-library/react'],
      },
    ],
  },
];
