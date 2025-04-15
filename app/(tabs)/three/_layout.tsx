import { Stack } from 'expo-router';

const ThreeTabLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
};

export default ThreeTabLayout;
