import { BlurView } from 'expo-blur';
import { Tabs } from 'expo-router';
import { useColorScheme } from 'nativewind';
import { StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const TabsNavigation = () => {
  const { colorScheme } = useColorScheme();
  const isDarkMode = colorScheme === 'dark';

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#4c3d87',
        tabBarStyle: {
          position: 'absolute',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          borderTopWidth: 0,
          paddingTop: 8,
        },
        headerStyle: { backgroundColor: isDarkMode ? '#000000' : '#ffffff' },
        headerShown: false,
        tabBarBackground: () => (
          <BlurView
            intensity={95}
            style={{
              ...StyleSheet.absoluteFillObject,
              overflow: 'hidden',
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
            }}
          />
        ),
      }}
    >
      <Tabs.Screen
        name="one"
        options={{
          title: 'One',
          tabBarIcon: ({ color }: { color: any }) => (
            <FontAwesome name="heart" size={20} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: 'Two',
          tabBarIcon: ({ color }: { color: any }) => (
            <FontAwesome name="heart" size={20} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsNavigation;
