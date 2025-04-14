import { Stack } from 'expo-router';
import { View } from 'react-native';

const OneScreenLayout = () => {
  return (
    <View>
      <Stack>
        <Stack.Screen name="index" options={{ headerTitle: 'One' }} />
      </Stack>
    </View>
  );
};

export default OneScreenLayout;
