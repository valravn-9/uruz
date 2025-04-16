import { useTranslation } from 'react-i18next';
import { View, Text } from 'react-native';

const OneScreen = () => {
  const { t } = useTranslation();

  return (
    <View className="items-center justify-center flex-1 bg-white dark:bg-black">
      <Text className="color-black dark:color-white">{t('one')}</Text>
    </View>
  );
};

export default OneScreen;
