import { Stack } from 'expo-router';
import { useTranslation } from 'react-i18next';

const OneTabLayout = () => {
  const { t } = useTranslation();

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerLargeTitle: true,
          headerTitleStyle: { fontFamily: 'Norse-Bold' },
          headerLargeTitleStyle: { fontFamily: 'Norse-Bold' },
          headerTitle: t('one'),
        }}
      />
    </Stack>
  );
};

export default OneTabLayout;
