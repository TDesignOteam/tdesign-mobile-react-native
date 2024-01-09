import { ReactElement } from 'react';
import { ViewStyle, TextStyle } from 'react-native';
import { LayoutEnum } from '../common';

export type DialogButtonProps = {
  text: string;
  onPress?: () => void;
  theme?: 'default' | 'primary' | 'danger';
  style?: TextStyle;
};

export type DialogProps = {
  /**
   * 标题
   */
  title?: string | ReactElement | null;
  /**
   * 内容
   */
  content?: string | string[] | ReactElement;
  /**
   * 按钮
   */
  buttons?: DialogButtonProps[];
  /**
   * 按钮布局方式
   * @default 'horizontal'
   */
  buttonLayout?: LayoutEnum;
  /**
   * 标题style
   */
  titleStyle?: TextStyle;
  /**
   * 内容style
   */
  contentStyle?: TextStyle;
  /**
   * 容器style
   */
  popupWrapperStyle?: ViewStyle;
  /**
   * dialog style
   */
  style?: ViewStyle;
  /**
   * 是否展示蒙层
   * @default true
   */
  showOverlay?: boolean;
  /**
   * 是否可以点击蒙层关闭
   * @default false
   */
  closeOnOverlay?: boolean;
};

type Message = {
  title: string;
  content: string | ReactElement;
  confirm?: string;
  cancel?: string;
};

export type DialogStaticProps = {
  dialogId?: number;
  show: (config: DialogProps) => number;
  hide: (id?: number) => Promise<void>;
  confirm: (config: string | Message, onConfirm?: () => void, onCancel?: () => void) => void;
  alert: (config: string, onConfirm?: () => void) => void;
};
