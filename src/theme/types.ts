import { ViewStyle, TextStyle } from 'react-native';
import { LightColors } from './light/colors';
import { darkTokens } from './dark/tokens';
import { lightTokens } from './light/tokens';
import { CommonTokens } from './common/tokens';

export type TLightThemeColor = {
  [key in keyof typeof LightColors]: string;
};

export type TDarkThemeColor = {
  [key in keyof typeof darkTokens]: string;
};

export type CommonTokensType = {
  fontSize: {
    [key in keyof typeof CommonTokens.fontSize]?: number;
  };
  lineHeight: {
    [key in keyof typeof CommonTokens.lineHeight]?: number;
  };
  radius: {
    [key in keyof typeof CommonTokens.radius]?: number;
  };
  fontWeight: {
    [key in keyof typeof CommonTokens.fontWeight]?: TextStyle['fontWeight'];
  };
  spacers: {
    [key in keyof typeof CommonTokens.spacers]?: number;
  };
};

export type ThemeTokensType = {
  colors: {
    [key in keyof typeof lightTokens.colors]?: string;
  };
} & CommonTokensType;

export type ThemeType = {
  classnames: {
    [key: string]: ViewStyle | TextStyle;
  };
} & ThemeTokensType;

// export type PartailThemeType = Partial<ThemeType>;
