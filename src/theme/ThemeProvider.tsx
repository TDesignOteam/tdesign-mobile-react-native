import { useState, useMemo } from 'react';
import ThemeContext from './ThemeContext';
import themes, { light, ThemeType } from './themes';

type Props = {
  children?: JSX.Element;
};

// const isDayTime = () => {
//   const hours = new Date().getHours();
//   return hours > 6 && hours < 20;
// };

const ThemeProvider = (props: Props) => {
  const { children } = props;
  const [themeName, setThemeName] = useState<ThemeType>('light');
  const theme = useMemo(
    // () => (themeName === 'auto' ? themes[isDayTime() ? 'light' : 'dark'] : themes[themeName]),
    () => {
      return themeName === 'light' ? light : themes[themeName];
    },
    [themeName],
  );

  return <ThemeContext.Provider value={{ theme, themeName, setThemeName }}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
