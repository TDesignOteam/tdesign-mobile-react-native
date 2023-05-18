import { TextStyle, ViewStyle } from 'react-native';
import { commonClassNames } from '../common/classnames';
import { CommonTokens } from '../common/tokens';
import { ThemeTokensType } from '../types';
import { darkTokens } from './tokens';

export function darkClassNames(
  tokens: ThemeTokensType = darkTokens,
  classnames = commonClassNames(),
): Record<string, ViewStyle | TextStyle> {
  return {
    ...classnames,
    text1: {
      ...classnames.text1,
      color: tokens.colors.fontGray2,
    },
    text1b: {
      ...classnames.text1b,
      color: tokens.colors.fontGray2,
    },
    text2: {
      ...classnames.text2,
      color: tokens.colors.fontGray2,
    },
    text2b: {
      ...classnames.text2b,
      color: tokens.colors.fontGray2,
    },
    text3: {
      ...classnames.text3,
      color: tokens.colors.fontGray2,
    },
    text3b: {
      ...classnames.text3b,
      color: tokens.colors.fontGray2,
    },
    text4: {
      ...classnames.text4,
      color: tokens.colors.fontGray2,
    },
    text4b: {
      ...classnames.text4b,
      color: tokens.colors.fontGray2,
    },
    text5: {
      ...classnames.text5,
      color: tokens.colors.fontGray2,
    },
    text5b: {
      ...classnames.text5b,
      color: tokens.colors.fontGray2,
    },
    text6: {
      ...classnames.text6,
      color: tokens.colors.fontGray2,
    },
    text6b: {
      ...classnames.text6b,
      color: tokens.colors.fontGray2,
    },
    text7: {
      ...classnames.text7,
      color: tokens.colors.fontGray2,
    },
    text7b: {
      ...classnames.text7b,
      color: tokens.colors.fontGray2,
    },

    // ================  边框  ===================
    b0: { borderWidth: CommonTokens.spacers.spacer0 },
    b1: {
      borderWidth: CommonTokens.spacers.spacer1,
      borderStyle: 'solid',
      borderColor: tokens.colors.componentBorder,
    },
    bb1: {
      borderBottomWidth: CommonTokens.spacers.spacer1,
      borderStyle: 'solid',
      borderColor: tokens.colors.componentBorder,
    },
    bt1: {
      borderTopWidth: CommonTokens.spacers.spacer1,
      borderStyle: 'solid',
      borderColor: tokens.colors.componentBorder,
    },
    br1: {
      borderRightWidth: CommonTokens.spacers.spacer1,
      borderStyle: 'solid',
      borderColor: tokens.colors.componentBorder,
    },
    bl1: {
      borderLeftWidth: CommonTokens.spacers.spacer1,
      borderStyle: 'solid',
      borderColor: tokens.colors.componentBorder,
    },

    // ================  背景色  ===================
    bg: { backgroundColor: tokens.colors.bgContainer },
    bgPage: { backgroundColor: tokens.colors.bgPage },
    bgContainer: { backgroundColor: tokens.colors.bgContainer },
    bgContainerHover: { backgroundColor: tokens.colors.bgContainerHover },
    bgContainerActive: { backgroundColor: tokens.colors.bgContainerActive },
    bgContainerSelect: { backgroundColor: tokens.colors.bgContainerSelect },
    bgSubContainer: { backgroundColor: tokens.colors.bgSubContainer },
    bgSubContainerHover: { backgroundColor: tokens.colors.bgSubContainerHover },
    bgSubContainerActive: { backgroundColor: tokens.colors.bgSubContainerActive },
    bgComponent: { backgroundColor: tokens.colors.bgComponent },
    bgComponentHover: { backgroundColor: tokens.colors.bgComponentHover },
    bgComponentActive: { backgroundColor: tokens.colors.bgComponentActive },
    bgComponentDisabled: { backgroundColor: tokens.colors.bgComponentDisabled },
    bgSubComponent: { backgroundColor: tokens.colors.bgSubComponent },
    bgSubComponentHover: { backgroundColor: tokens.colors.bgSubComponentHover },
    bgSubComponentActive: { backgroundColor: tokens.colors.bgSubComponentActive },

    // ================  字体颜色  ===================
    white: { color: tokens.colors.white },
    brand1: { color: tokens.colors.brand1 },
    brand2: { color: tokens.colors.brand2 },
    brand3: { color: tokens.colors.brand3 },
    brand4: { color: tokens.colors.brand4 },
    brand5: { color: tokens.colors.brand5 },
    brand6: { color: tokens.colors.brand6 },
    brand7: { color: tokens.colors.brand7 },
    brand8: { color: tokens.colors.brand8 },
    brand9: { color: tokens.colors.brand9 },
    brand10: { color: tokens.colors.brand10 },
    brand: { color: tokens.colors.brand },
    brandLight: { color: tokens.colors.brandLight },
    brandFocus: { color: tokens.colors.brandFocus },
    brandDisabled: { color: tokens.colors.brandDisabled },
    brandHover: { color: tokens.colors.brandHover },
    brandActive: { color: tokens.colors.brandActive },

    error1: { color: tokens.colors.error1 },
    error2: { color: tokens.colors.error2 },
    error3: { color: tokens.colors.error3 },
    error4: { color: tokens.colors.error4 },
    error5: { color: tokens.colors.error5 },
    error6: { color: tokens.colors.error6 },
    error7: { color: tokens.colors.error7 },
    error8: { color: tokens.colors.error8 },
    error9: { color: tokens.colors.error9 },
    error10: { color: tokens.colors.error10 },
    error: { color: tokens.colors.error },
    errorLight: { color: tokens.colors.errorLight },
    errorFocus: { color: tokens.colors.errorFocus },
    errorDisabled: { color: tokens.colors.errorDisabled },
    errorHover: { color: tokens.colors.errorHover },
    errorActive: { color: tokens.colors.errorActive },

    success1: { color: tokens.colors.success1 },
    success2: { color: tokens.colors.success2 },
    success3: { color: tokens.colors.success3 },
    success4: { color: tokens.colors.success4 },
    success5: { color: tokens.colors.success5 },
    success6: { color: tokens.colors.success6 },
    success7: { color: tokens.colors.success7 },
    success8: { color: tokens.colors.success8 },
    success9: { color: tokens.colors.success9 },
    success10: { color: tokens.colors.success10 },
    success: { color: tokens.colors.success },
    successLight: { color: tokens.colors.successLight },
    successFocus: { color: tokens.colors.successFocus },
    successDisabled: { color: tokens.colors.successDisabled },
    successHover: { color: tokens.colors.successHover },
    successActive: { color: tokens.colors.successActive },

    warning1: { color: tokens.colors.warning1 },
    warning2: { color: tokens.colors.warning2 },
    warning3: { color: tokens.colors.warning3 },
    warning4: { color: tokens.colors.warning4 },
    warning5: { color: tokens.colors.warning5 },
    warning6: { color: tokens.colors.warning6 },
    warning7: { color: tokens.colors.warning7 },
    warning8: { color: tokens.colors.warning8 },
    warning9: { color: tokens.colors.warning9 },
    warning10: { color: tokens.colors.warning10 },
    warning: { color: tokens.colors.warning },
    warningLight: { color: tokens.colors.warningLight },
    warningFocus: { color: tokens.colors.warningFocus },
    warningDisabled: { color: tokens.colors.warningDisabled },
    warningHover: { color: tokens.colors.warningHover },
    warningActive: { color: tokens.colors.warningActive },

    gray1: { color: tokens.colors.gray1 },
    gray2: { color: tokens.colors.gray2 },
    gray3: { color: tokens.colors.gray3 },
    gray4: { color: tokens.colors.gray4 },
    gray5: { color: tokens.colors.gray5 },
    gray6: { color: tokens.colors.gray6 },
    gray7: { color: tokens.colors.gray7 },
    gray8: { color: tokens.colors.gray8 },
    gray9: { color: tokens.colors.gray9 },
    gray10: { color: tokens.colors.gray10 },
    gray11: { color: tokens.colors.gray11 },
    gray12: { color: tokens.colors.gray12 },
    gray13: { color: tokens.colors.gray13 },
    gray14: { color: tokens.colors.gray14 },
  };
}
