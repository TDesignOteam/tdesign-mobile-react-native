import React from 'react';
import { TextStyle, ViewStyle } from 'react-native';

export type SwipeCellItemProps = {
  /**
   * 按钮文字
   */
  text?: string | React.ReactNode;
  /**
   * 文字样式，text为string时生效
   */
  textStyle?: TextStyle;
  /**
   * 容器样式
   */
  style?: ViewStyle;
  /**
   * 容器宽度，若无默认宽度整条撑开
   */
  width?: number;
  /**
   * 点击回调
   */
  onPress?: () => void;
};

export interface SwipeCellProps {
  /**
   * 唯一id 配合autoClose
   */
  id: string;
  /**
   * 打开某个滑动时自动关闭其他滑动框
   * @default true
   */
  autoClose?: boolean;
  /**
   * 右侧内容，数组
   */
  right?: SwipeCellItemProps[];
  /**
   * 左侧内容，数组
   */
  left?: SwipeCellItemProps[];
  /**
   * 滑动侧栏打开的回调
   */
  onSwipeableOpen?: (direction: 'left' | 'right') => void;
  /**
   * 滑动侧栏关闭的回调
   */
  onSwipeableClose?: (direction: 'left' | 'right') => void;
}
