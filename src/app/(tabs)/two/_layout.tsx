import { Stack } from 'expo-router';
import { View } from 'react-native';

const TwoScreenLayout = () => {
  return (
    <View>
      <Stack>
        <Stack.Screen name="index" options={{ headerTitle: 'Two' }} />
      </Stack>
    </View>
  );
};

export default TwoScreenLayout;
