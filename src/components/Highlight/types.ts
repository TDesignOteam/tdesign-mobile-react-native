import { TextStyle, TextProps } from 'react-native';

export interface HighlightProps extends TextProps {
  /**
   * className 可以传入theme中定义的className
   */
  className?: string;
  /**
   * text样式
   */
  style?: TextStyle;
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
}
