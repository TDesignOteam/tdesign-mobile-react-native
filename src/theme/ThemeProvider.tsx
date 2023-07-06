import { useState, useMemo, useEffect, useReducer } from 'react';
import ThemeContext from './ThemeContext';
import { ThemeName, themes, ConfigType } from './themes';

type Props = {
  // 自定义的主题配置
  config?: ConfigType;
  // 初始主题
  theme?: ThemeName;
  children?: JSX.Element;
};

const ThemeProvider = (props: Props) => {
  const { children, config, theme: initTheme = 'light' } = props;
  const [themeName, setThemeName] = useState<ThemeName>(initTheme);
  const [update, forceUpdate] = useReducer(() => ({}), {});

  const theme = useMemo(() => {
    return themes[themeName] ? themes[themeName] : themes.light;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [themeName, update]);

  useEffect(() => {
    themes.initTheme(config);
    forceUpdate();
  }, [config]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        themeName,
        setThemeName: (value) => {
          return setThemeName(value);
        },
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
