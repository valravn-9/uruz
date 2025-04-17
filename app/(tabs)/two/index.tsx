import { useTranslation } from 'react-i18next';
import { View, Text } from '@/components';

const TwoScreen = () => {
  const { t } = useTranslation();
  return (
    <View>
      <Text className="text-6xl">{t('two')}</Text>
    </View>
  );
};

export default TwoScreen;
