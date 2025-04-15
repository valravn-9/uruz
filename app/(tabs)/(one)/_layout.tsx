import { Stack } from 'expo-router';

const OneTabLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
};

export default OneTabLayout;
