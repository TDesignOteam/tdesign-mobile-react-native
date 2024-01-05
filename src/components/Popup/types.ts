import { ReactElement } from 'react';
import { ViewStyle, ViewProps } from 'react-native';
import { Directions } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import { AnimationType } from '../AnimationView';

export type PlacementProps = 'right' | 'left' | 'top' | 'bottom' | 'center' | 'fullScreen' | 'none';

export type PopupConfig = {
  /**
   * 预设展示位置 配合动画确定位置
   * @default 'center'
   */
  placement?: PlacementProps;
  /**
   * zindex
   * @default 110
   */
  zIndex?: number;
  /**
   * 延迟时间
   * @default 0
   */
  delay?: number;
  /**
   * 动画时间
   * @default 300
   */
  duration?: number;
  /**
   * 动画函数
   */
  easing?: Animated.EasingFunction;
  /**
   * 动画效果
   * @default 与placement相同,如果自定义animation会覆盖默认
   */
  animation?: AnimationType;
  /**
   * 动画效果
   * @default 如果没有自定义animation,则使用animation的反向动画
   */
  closeAnimation?: AnimationType;
  /**
   * 自动关闭时间
   * @default 0 不自动关闭
   */
  autoClose?: number;
  /**
   * 是否需要遮罩
   * @default true
   */
  showOverlay?: boolean;
  /**
   * 点击遮罩层关闭popup
   * @default true
   */
  closeOnOverlay?: boolean;
  // native动画
  /**
   * useNativeDriver
   * @default false
   */
  useNativeDriver?: boolean;
  /**
   * 容器styles
   * @default {}
   */
  wrapperStyle?: ViewStyle;
  /**
   * pointerEvents
   * @default 'box-none'
   */
  pointerEvents?: ViewProps['pointerEvents'];
  /**
   * 遮罩层动画效果
   * @default {
   *    from: { backgroundColor: 'rgba(0, 0, 0, 0)' },
   *    to: { backgroundColor: 'rgba(0, 0, 0, 0.6)' },
   *  }
   */
  overlayAnimation?: AnimationType;
  /**
   * 是否开启手势
   */
  gesture?: boolean;
  /**
   * 手势需要的方向
   */
  gestureDirection?: Directions;
  /**
   * 持久化dom不销毁
   * @default false
   */
  persistDom?: boolean;
  /**
   * 持久化的dom id，在show时传入不重复创建
   */
  persistDomId?: number;
  /**
   * 动画执行完的回调
   */
  onAnimationEnd?: () => void;
  /**
   * 关闭动画执行完的回调
   */
  onCloseAnimationEnd?: () => void;
  /**
   * 隐藏后的回调
   */
  onHide?: () => void;
};

export type PopupItemConfig = {
  element: ReactElement;
  config: PopupConfig;
  id: number;
  overlayAnimation?: AnimationType;
  popupVisible: boolean;
  // 保存原始的config配置 用户动画重置
  _originConfig: PopupConfig;
};
