import { TextStyle, TextProps } from 'react-native';
import { ContainerProps } from '../common';

export type HighlightProps = {
  /**
   * 高亮样式
   */
  highlightStyle?: TextStyle;
  /**
   * 高亮颜色
   * @default 默认品牌色
   */
  color?: string;
  /**
   * 关键字
   */
  keyword: string;
  /**
   * 文字
   */
  text: string;
  /**
   * 忽略大小写
   * @default false
   */
  caseSensitive?: boolean;
} & TextProps &
  ContainerProps;
