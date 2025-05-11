module.exports = {
  presets: ['babel-preset-expo'],
  plugins: [],
  env: {
    test: {
      presets: ['@babel/preset-env'],
      plugins: [],
    },
  },
  overrides: [
    {
      test: /node_modules\/@react-native\/js-polyfills/,
      presets: ['@babel/preset-env'],
    },
  ],
};
