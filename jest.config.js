export default {
  preset: 'jest-expo',
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@sentry/react-native|native-base|react-native-svg|@rn-primitives/slot)',
  ],
  setupFilesAfterEnv: ['./tests/setup.ts'],
  moduleNameMapper: {
    '^components$': '<rootDir>/components',
  },
};
