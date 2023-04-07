import { ITheme } from './types';

// 通用
import commonSpacers from './common/spacers';
import commonDimensions from './common/dimensions';
import commonFonts from './common/fonts';

// light
import lightColors from './light/colors';
import lightAtom from './light/atom';

// dark
import darkColors from './dark/colors';
import darkAtom from './dark/atom';

export const light: ITheme = {
  name: 'light',
  colors: lightColors,
  spacers: commonSpacers,
  dimensions: commonDimensions,
  fonts: commonFonts,
  atom: lightAtom,
};

export const dark: ITheme = {
  name: 'dark',
  colors: darkColors,
  spacers: commonSpacers,
  dimensions: commonDimensions,
  fonts: commonFonts,
  atom: darkAtom,
};

export const auto = undefined;

const themes = {
  auto,
  light,
  dark,
} as const;

/**
 * @description 主题类型
 */
export type ThemeType = keyof typeof themes;

export default themes;
