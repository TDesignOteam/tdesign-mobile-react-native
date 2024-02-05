import { ImageProps as RNImageProps, ViewStyle } from 'react-native';
import { ReactElement } from 'react';
import { ShapeEnum, ContainerClassName } from '../common';

export type ImageProps = RNImageProps & {
  /**
   * 图片容器样式
   */
  style?: ViewStyle;
  /**
   * 自定义加载失败时显示的Icon
   */
  errorIcon?: ReactElement;
  /**
   * 自定义图片背景颜色
   */
  backgroundColor?: string;
  width?: number | undefined;
  height?: number | undefined;
  /**
   * 形状
   * @default: square
   */
  shape?: ShapeEnum;
} & ContainerClassName;

export type ImageStatusType = 'pending' | 'success' | 'error';
