import { Tabs } from 'expo-router';

const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen name="(one)" options={{ headerShown: false }} />
      <Tabs.Screen name="two" options={{ headerShown: false }} />
      <Tabs.Screen name="three" options={{ headerShown: false }} />
    </Tabs>
  );
};

export default TabsLayout;
