import { View } from 'react-native';
import { useTheme } from '@src/theme';
import Button from '@src/components/Button';

export const Test = () => {
  const { setThemeName, themeName } = useTheme();
  console.log('themeName', themeName);
  return (
    <View>
      <Button
        content="change2"
        onPress={() => {
          setThemeName(themeName === 'light' ? 'dark' : 'light');
        }}
      />
    </View>
  );
};
