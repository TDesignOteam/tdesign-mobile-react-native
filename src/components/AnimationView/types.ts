import { ViewStyle, ImageStyle, TextStyle, StyleProp } from 'react-native';
import { Directions } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import { PlacementProps } from '../Popup';

export type AnimationType = {
  to?: TextStyle & ViewStyle & ImageStyle;
  from?: TextStyle & ViewStyle & ImageStyle;
};

export type AnimationDirections = Directions | 0;

export const DIRECTION: Record<PlacementProps, AnimationDirections> = {
  top: Directions.UP,
  bottom: Directions.DOWN,
  left: Directions.LEFT,
  right: Directions.RIGHT,
  fullScreen: 0,
  center: 0,
  none: 0,
};

export type AnimationProps = {
  /**
   * 预设展示位置 配合动画确定位置
   * @default 'center'
   */
  placement?: PlacementProps;
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
   * 手势需要的方向
   */
  gestureDirection?: Directions;
  /**
   * 手势完成的回调事件
   */
  gestureCallback?: () => void;
  /**
   * 开启组件手势
   */
  gesture?: boolean;
  style?: StyleProp<ViewStyle>;
  /**
   * 启用硬件加速
   */
  useNativeDriver?: boolean;
  /**
   * 启用硬件加速
   */
  needsOffscreenAlphaCompositing?: boolean;
  children?: React.ReactNode;
};
