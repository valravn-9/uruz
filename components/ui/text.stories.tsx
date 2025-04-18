import { ScrollView } from 'react-native';
import { Text } from './text';

const meta = {
  component: Text,
};

export default meta;

export const Default = {
  render: () => {
    const args = [
      { text: '9xl', className: 'text-9xl' },
      { text: '8xl', className: 'text-8xl' },
      { text: '7xl', className: 'text-7xl' },
      { text: '6xl', className: 'text-6xl' },
      { text: '5xl', className: 'text-5xl' },
      { text: '4xl', className: 'text-4xl' },
      { text: '3xl', className: 'text-3xl' },
      { text: '2xl', className: 'text-2xl' },
      { text: 'xl', className: 'text-xl' },
      { text: 'lg', className: 'text-lg' },
      { text: 'md', className: 'text-md' },
      { text: 'sm', className: 'text-sm' },
      { text: 'xs', className: 'text-xs' },
    ];

    return (
      <ScrollView contentContainerClassName="flex-col items-center justify-center flex-1">
        {args.map(({ text, className }) => (
          <Text key={text} className={className}>
            {text}
          </Text>
        ))}
      </ScrollView>
    );
  },
};
