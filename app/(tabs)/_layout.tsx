import { Tabs } from 'expo-router';
import { BlurView } from 'expo-blur';
import { StyleSheet, useColorScheme } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';
import { colors } from '@/constants';

const TabsLayout = () => {
  const { t } = useTranslation();
  const colorScheme = useColorScheme() || 'dark';

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          borderTopWidth: 0,
          paddingTop: 8,
        },
        tabBarLabelStyle: {
          fontFamily: 'SanFrancisco',
        },
        tabBarActiveTintColor: colors.primary[colorScheme],
        tabBarInactiveTintColor: colors.muted[colorScheme],
        tabBarBackground: () => (
          <BlurView
            intensity={50}
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
        name="(one)"
        options={{
          headerShown: false,
          title: t('one'),
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name="1" size={20} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          headerShown: false,
          title: t('two'),
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name="2" size={20} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="three"
        options={{
          headerShown: false,
          title: t('three'),
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name="3" size={20} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
