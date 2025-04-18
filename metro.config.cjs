const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');
const { withNativeWind } = require('nativewind/metro');
const withStorybook = require('@storybook/react-native/metro/withStorybook');

const config = getDefaultConfig(__dirname);

const isStorybookEnabled = process.env.WITH_STORYBOOK === 'true';

// Exclude Storybook files when not in Storybook mode
config.resolver.blockList = [
  /.*\.test\.(ts|tsx)$/, // Exclude test files
  !isStorybookEnabled && /.*\.stories\.(ts|tsx|js|jsx)$/, // Exclude Storybook files
].filter(Boolean); // Remove `false` entries

module.exports = isStorybookEnabled
  ? withStorybook(withNativeWind(config, { input: './nativewind.css' }), {
      enabled: true,
      configPath: path.resolve(__dirname, './.storybook'),
    })
  : withNativeWind(config, { input: './nativewind.css' });
