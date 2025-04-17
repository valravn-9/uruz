import { useTranslation } from 'react-i18next';
import { View, Text } from '@/components';

const OneScreen = () => {
  const { t } = useTranslation();

  return (
    <View>
      <Text>{t('one')}</Text>
    </View>
  );
};

export default OneScreen;
