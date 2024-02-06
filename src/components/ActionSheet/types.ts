import type { ViewStyle } from 'react-native';
import { ReactElement } from 'react';

export type ActionSheetItemTheme = 'info' | 'success' | 'warning' | 'error';

export type ActionSheetItem = {
  tip?: string;
  text?: string;
  theme?: ActionSheetItemTheme;
  disable?: boolean;
  [key: string]: any;
};

export type ActionSheetProps = {
  /**
   * style
   */
  style?: ViewStyle;
  /**
   * 水平对齐方式
   * @default center
   */
  align?: 'center' | 'left';
  /**
   * 取消按钮的文本
   * @default 取消
   */
  cancelText?: string;
  /**
   * 是否显示取消按钮
   * @default true
   */
  hideCancel?: boolean;
  /**
   * 动作面板描述
   */
  title?: string | ReactElement | null;
  /**
   * 点击蒙层关闭
   * @default true
   */
  closeOnOverlay?: boolean;
  /**
   * 菜单列表
   */
  items: ActionSheetItem[];
  /**
   * 点击菜单某项回调
   */
  onSelected?: (item?: ActionSheetItem, index?: number) => void;
};

export type ActionSheetStaticProps = {
  actionSheetId?: number;
  show: (config: ActionSheetProps) => number;
  hide: (id?: number) => Promise<void>;
};
