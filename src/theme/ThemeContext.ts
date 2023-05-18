import { useContext, createContext } from 'react';
import { ThemeType } from './types';
import { ThemeName, themes } from './themes';

export interface ThemeContextProps {
  theme: ThemeType;
  themeName: ThemeName;
  setThemeName: (value: ThemeName) => void;
}
export type { ThemeType };

export const ThemeContext = createContext<ThemeContextProps>({
  theme: themes.light,
  themeName: themes.name,
  setThemeName: () => {},
});

export default ThemeContext;

export const useTheme = () => useContext<ThemeContextProps>(ThemeContext);
