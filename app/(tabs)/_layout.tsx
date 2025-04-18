import { Tabs } from 'expo-router';
import { BlurView } from 'expo-blur';
import { Platform } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';

const TabsLayout = () => {
  const { t } = useTranslation();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          borderTopWidth: 0,
          paddingTop: Platform.OS === 'ios' ? 8 : 0,
        },
        tabBarLabelStyle: {
          fontFamily: 'Norse-Bold',
          fontSize: 12,
        },
        tabBarBackground: () => (
          <BlurView
            experimentalBlurMethod="dimezisBlurView" // To make this work on Android
            intensity={90}
            className="absolute inset-0 overflow-hidden rounded-tl-2xl rounded-tr-2xl"
          />
        ),
      }}
    >
      <Tabs.Screen
        name="(one)"
        options={{
          headerShown: false,
          title: t('one'),
          tabBarIcon: ({ color }) => <FontAwesome6 name="1" size={20} color={color} />,
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          headerShown: false,
          title: t('two'),
          tabBarIcon: ({ color }) => <FontAwesome6 name="2" size={20} color={color} />,
        }}
      />
      <Tabs.Screen
        name="three"
        options={{
          headerShown: false,
          title: t('three'),
          tabBarIcon: ({ color }) => <FontAwesome6 name="3" size={20} color={color} />,
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
