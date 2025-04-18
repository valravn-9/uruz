import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import { Text } from '@/components/ui/text';

const OneScreen = () => {
  const { t } = useTranslation();

  return (
    <View className="items-center justify-center flex-1 ">
      <Text className="text-6xl">{t('one')}</Text>
    </View>
  );
};

export default OneScreen;
