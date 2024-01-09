import { ReactElement, PropsWithChildren, ReactNode } from 'react';
import { ViewStyle, TextStyle } from 'react-native';
import { ThemeEnum, SizeEnum } from '../common';

export type TDButtonProps = PropsWithChildren<{
  /**
   * 按钮内容
   */
  content?: string | ReactNode;
  /**
   * 是否禁用按钮
   * @default false
   */
  disabled?: boolean;
  /**
   * 点击回调
   */
  onPress?: () => void;
  /**
   * 按钮内部图标，可完全自定义
   */
  icon?: ReactElement;
  /**
   * 按钮排列方式
   * @default 'row'
   */
  iconDirection?: 'row' | 'column';
  /**
   * 组件尺寸
   * @default normal
   */
  size?: SizeEnum;
  /**
   * 组件形状
   * @default round
   */
  shape?: 'rectangle' | 'square' | 'round' | 'circle';
  /**
   * 组件风格，依次为默认色、品牌色、危险色、警告色、成功色
   */
  theme?: ThemeEnum;
  /**
   * 按钮形式，基础、线框、文字
   * @default base
   */
  variant?: 'base' | 'outline' | 'text';
  /**
   * touchable styles
   */
  style?: ViewStyle;
  /**
   * 容器styles
   */
  containerStyle?: ViewStyle;
  /**
   * 文字styles
   */
  textStyle?: TextStyle;
  /**
   * 按钮加载状态
   */
  loading?: boolean;
}>;
