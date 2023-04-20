import { ITokens } from './types';

// light
import { lightTokens } from './light/tokens';
// import lightAtom from './light/atom';

// dark
import { darkTokens } from './dark/tokens';
// import darkAtom from './dark/atom';

export const light: ITokens = {
  name: 'light',
  ...lightTokens,
};

export const dark: ITokens = {
  name: 'dark',
  ...darkTokens,
};

const themes = {
  light,
  dark,
} as const;

/**
 * @description 主题类型
 */
export type ThemeType = keyof typeof themes;

export default themes;
