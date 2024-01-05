import { ReactElement } from 'react';
import { ThemeEnum } from '../common';

export type MessagegProps = {
  /**
   * 提示文案
   */
  text: string;
  /**
   * 显示时间 0表示常驻不会自动关闭
   * @default 3000
   */
  duration?: number;
  /**
   * 内容
   */
  icon?: ReactElement;
  /**
   * 主题
   * @default 'primary'
   */
  theme?: ThemeEnum;
  /**
   * 关闭按钮 true时展示关闭按钮，也可以自定义icon，自定义icon需要自己处理关闭事件
   * @default false
   */
  closeBtn?: boolean | ReactElement;
  /**
   * 关闭时回调
   */
  onClose?: () => void;
  /**
   * 关闭后回调
   */
  onClosed?: () => void;
};
