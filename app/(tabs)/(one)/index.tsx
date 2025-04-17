import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { View, Text } from 'react-native';

const OneScreen = () => {
  const { t } = useTranslation();

  return (
    <View className="items-center justify-center flex-1">
      <Button>
        <Text>Default</Text>
      </Button>
    </View>
  );
};

export default OneScreen;
