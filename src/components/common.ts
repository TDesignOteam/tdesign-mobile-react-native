import { ViewStyle } from 'react-native';

export type ThemeEnum = 'default' | 'primary' | 'danger' | 'warning' | 'success';
export type SizeEnum = 'small' | 'medium' | 'large';

export type ContainerStyle = {
  /**
   * 容器样式
   */
  style?: ViewStyle;
};
export type ContainerClassName = {
  /**
   * 容器className，可以传入theme中定义的className
   */
  className?: string;
};
export type ContainerProps = ContainerStyle & ContainerClassName;
