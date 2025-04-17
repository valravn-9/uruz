import { View, Text } from 'components';
import { useTranslation } from 'react-i18next';

const OneScreen = () => {
  const { t } = useTranslation();

  return (
    <View>
      <Text>{t('one')}</Text>
    </View>
  );
};

export default OneScreen;
