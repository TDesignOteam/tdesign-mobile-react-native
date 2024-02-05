import type { ImageErrorEventData, ImageLoadEventData, NativeSyntheticEvent, ViewStyle } from 'react-native';
import { PropsWithChildren, ReactElement } from 'react';
import { SizeEnum } from '../common';

/**
 * 形状
 */
export type AvatarShape = 'circle' | 'round' | 'square';

type CascadingValue = 'left-up' | 'right-up';

export type AvatarProps = PropsWithChildren<{
  /**
   * 头像样式
   */
  style?: ViewStyle;
  /**
   * 图标
   */
  icon?: ReactElement<any, any>;
  /**
   * 图片地址，icon和url并存时优先使用url
   */
  url?: string;
  /**
   * 头像尺寸
   * @default medium
   */
  size?: SizeEnum;
  /**
   * 形状
   * @default: circle
   */
  shape?: AvatarShape;
  /**
   * 图片加载失败时触发
   */
  onError?: (e: NativeSyntheticEvent<ImageErrorEventData>) => void;
  /**
   * 图片加载完成时触发
   */
  onLoad?: (e: NativeSyntheticEvent<ImageLoadEventData>) => void;
}>;

export type AvatarGroupProps = {
  /**
   * group容器样式
   */
  style?: ViewStyle;
  /**
   * 传入的Avatar组件列表
   */
  children?: React.ReactNode;
  /**
   * group内统一的头像size
   */
  size?: SizeEnum;
  /**
   * 能够同时显示的最多头像数量
   */
  max?: number;
  /**
   * 图片层叠关系
   * @default right-up
   */
  cascading?: CascadingValue;
  /**
   * 头像超出时的自定义展示
   */
  collapseAvatar?: ReactElement;
};
