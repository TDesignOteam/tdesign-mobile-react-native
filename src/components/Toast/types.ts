import { ReactElement } from 'react';
import { ViewProps } from 'react-native';
import { LayoutEnum } from '../common';

export type ToastStaticProps = {
  toastId?: number;
  show: (config: ToastProps) => number;
  hide: (id?: number) => Promise<void>;
  text: (text: string) => number;
  success: (config: ToastProps | string) => number;
  error: (config: ToastProps | string | ErrorConstructor) => number;
  loading: (config?: Partial<ToastProps> | string) => number;
};

export type ToastProps = {
  /**
   * 提示文案
   */
  text: string;
  /**
   * 错误默认提示文案
   * @default 系统错误
   */
  defaultErrorText?: string;
  /**
   * 显示时间
   * @default 1000
   */
  duration?: number;
  /**
   * 内容
   */
  icon?: ReactElement;
  /**
   * 布局方式
   * @default 'vertical'
   */
  layout?: LayoutEnum;
  /**
   * 是否展示蒙层
   * @default false
   */
  showOverlay?: boolean;
  /**
   * pointerEvents
   * @default 'box-none'
   */
  pointerEvents?: ViewProps['pointerEvents'];
  /**
   * 隐藏后的回调
   */
  onHide?: () => void;
};
