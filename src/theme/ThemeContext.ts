import { useContext, createContext } from 'react';
import { ITheme } from './types';
import { ThemeType, light } from './themes';

export interface ThemeContextProps {
  theme: ITheme;
  themeName: ThemeType;
  setThemeName: any;
}
export type { ITheme };

const themeConfig: ThemeContextProps = {
  theme: light,
  themeName: 'light',
  setThemeName: 'aa',
};

export const ThemeContext = createContext<ThemeContextProps>({
  theme: light,
  themeName: 'light',
  setThemeName: 'aa',
});

export const setThemeConfig = (key: string | number, value: any) => {
  // @ts-ignore
  themeConfig[key] = value;
};

export default ThemeContext;

export const useTheme = () => useContext<ThemeContextProps>(ThemeContext);
