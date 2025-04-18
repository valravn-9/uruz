import { useTranslation } from 'react-i18next';
import { ScrollView } from 'react-native';
import { Text } from '@/components/ui/text';

const ThreeScreen = () => {
  const { t } = useTranslation();

  return (
    <ScrollView contentContainerClassName="flex-1 justify-center items-center">
      <Text className="text-6xl">{t('three')}</Text>
    </ScrollView>
  );
};

export default ThreeScreen;
