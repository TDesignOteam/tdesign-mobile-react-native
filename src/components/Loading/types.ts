import { ReactElement } from 'react';
import { SizeEnum } from '../common';
import { ToastProps } from '../Toast';

export type LoadingProps = {
  /**
   * 加载图标的大小
   */
  size?: SizeEnum;
  /**
   * 动画速度
   * @default 1000
   */
  duration?: number;
  /**
   * 主题
   * @default 'default'
   */
  theme?: 'default' | 'white';
  /**
   * 自定义图标
   * @default null
   */
  children?: ReactElement;
};

export type LoadingStaticProps = {
  id?: number;
  show: (options?: ToastProps) => void;
  hide: () => Promise<void>;
};
