import { Text, View } from 'react-native';
import '@/styles/nativewind.css';

const App = () => {
  return (
    <View
      style={{
        backgroundColor: '#f3f4f6',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text className="bg-slate-400">valnir</Text>
    </View>
  );
};

export default App;
