import { Stack } from 'expo-router';

const TwoTabLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
};

export default TwoTabLayout;
