import { useColorScheme as useReactNativeColorScheme } from 'react-native';
import { useState } from 'react';

export function useColorScheme() {
  const systemColorScheme = useReactNativeColorScheme();
  const [colorScheme, setColorScheme] = useState(systemColorScheme ?? 'dark');

  const toggleColorScheme = () => {
    setColorScheme((prevScheme) => (prevScheme === 'dark' ? 'light' : 'dark'));
  };

  return {
    colorScheme,
    isDarkColorScheme: colorScheme === 'dark',
    setColorScheme,
    toggleColorScheme,
  };
}
