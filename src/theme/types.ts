/**
 * Created by leon<silenceace@gmail.com> on 22/2/21.
 */

import { TextStyle, ViewStyle } from 'react-native';

export interface IThemeColor {
  white: string;
  gray1: string;
  gray2: string;
  gray3: string;
  gray4: string;
  gray5: string;
  gray6: string;
  gray7: string;
  gray8: string;
  gray9: string;
  gray10: string;
  gray11: string;
  gray12: string;
  gray13: string;
  gray14: string;
  brand1: string;
  brand2: string;
  brand3: string;
  brand4: string;
  brand5: string;
  brand6: string;
  brand7: string;
  brand8: string;
  brand9: string;
  brand10: string;
  blueGray1: string;
  blueGray2: string;
  blueGray3: string;
  blueGray4: string;
  blueGray5: string;
  blueGray6: string;
  blueGray7: string;
  blueGray8: string;
  blueGray9: string;
  blueGray10: string;
  blueGray11: string;
  blueGray12: string;
  blueGray13: string;
  blueGray14: string;
  bg: string;
  bgBrand7: string;

  error1: string;
  error2: string;
  error3: string;
  error4: string;
  error5: string;
  error6: string;
  error7: string;
  error8: string;
  error9: string;
  error10: string;

  warning1: string;
  warning2: string;
  warning3: string;
  warning4: string;
  warning5: string;
  warning6: string;
  warning7: string;
  warning8: string;
  warning9: string;
  warning10: string;

  success1: string;
  success2: string;
  success3: string;
  success4: string;
  success5: string;
  success6: string;
  success7: string;
  success8: string;
  success9: string;
  success10: string;

  fontWhite1: string;
  fontWhite2: string;
  fontWhite3: string;
  fontWhite4: string;
  fontGray1: string;
  fontGray2: string;
  fontGray3: string;
  fontGray4: string;
}

export interface IThemeDimension {
  /**
   * App level constants
   */
  borderRadius: number;
  borderRadius2: number;
  borderRadius4: number;
  borderRadius8: number;
  borderRadiusFull: number;
}

export interface IThemeSpacer {
  spacer0: number;
  spacer2: number;
  spacer4: number;
  spacer8: number;
  spacer12: number;
  spacer16: number;
  spacer24: number;
  spacer32: number;
  spacer40: number;
  spacer48: number;
  spacer64: number;
  spacer96: number;
  spacer160: number;
}

export interface IThemeFont {
  size1: number;
  size2: number;
  size3: number;
  size4: number;
  size5: number;
  size6: number;
  lineHeight1: number;
  lineHeight2: number;
  lineHeight3: number;
  lineHeight4: number;
  lineHeight5: number;
  lineHeight6: number;
}

export interface IThemeCommonAtom {
  // 'm-1': ViewStyle;
  [key: string]: ViewStyle | TextStyle;
}
export interface IThemeAtom {
  text1: TextStyle;
  text1b: TextStyle;
  text2: TextStyle;
  text2b: TextStyle;
  text3: TextStyle;
  text3b: TextStyle;
  text4: TextStyle;
  text4b: TextStyle;
  text5: TextStyle;
  text5b: TextStyle;
  text6: TextStyle;
  text6b: TextStyle;
  brand7: TextStyle;
}

export interface ITheme {
  name: string;
  colors: IThemeColor;
  spacers: IThemeSpacer;
  dimensions: IThemeDimension;
  fonts: IThemeFont;
  atom: IThemeAtom & IThemeCommonAtom;
}
