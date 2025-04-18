import { Stack } from 'expo-router';
import { useTranslation } from 'react-i18next';

const ThreeTabLayout = () => {
  const { t } = useTranslation();

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerLargeTitle: true, headerTitle: t('three') }} />
    </Stack>
  );
};

export default ThreeTabLayout;
