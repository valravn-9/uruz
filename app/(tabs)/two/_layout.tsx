import { Stack } from 'expo-router';
import { useTranslation } from 'react-i18next';

const TwoTabLayout = () => {
  const { t } = useTranslation();

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerLargeTitle: true, headerTitle: t('two') }} />
    </Stack>
  );
};

export default TwoTabLayout;
