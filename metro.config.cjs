const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');
const { withNativeWind } = require('nativewind/metro');

const config = getDefaultConfig(__dirname);

config.resolver.blockList = /.*\.test\.(ts|tsx)$/;

module.exports = withNativeWind(config, { input: './nativewind.css' });
