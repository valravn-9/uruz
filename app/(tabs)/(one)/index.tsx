import { View, Text } from 'react-native';

const OneScreen = () => {
  const x = 3;
  return (
    <View className="items-center justify-center flex-1 bg-white dark:bg-black">
      <Text className="color-black dark:color-white">One</Text>
    </View>
  );
};

export default OneScreen;
