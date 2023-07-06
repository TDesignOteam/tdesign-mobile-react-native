import { ViewStyle } from 'react-native';
import { PropsWithChildren } from 'react';
import { ContainerProps } from '../common';

export type BadgeShape = 'circle' | 'round' | 'square';

export type BadgeProps = PropsWithChildren<
  {
    /**
     * 徽标内容
     */
    content?: string;
    /**
     * 徽标数值
     */
    count?: number | string;
    /**
     * 徽标颜色
     */
    color?: string;
    /**
     * 文字颜色
     */
    fontColor?: string;
    /**
     * 是否为红点
     * @default false
     */
    dot?: boolean;
    /**
     * 最大展示数字值
     * @default 99
     */
    maxCount?: number;
    /**
     * 设置状态点的位置偏移，示例：[-10, 20]
     * @default 徽标容器尺寸的一半
     */
    offset?: Array<number>;
    /**
     * 当数值为 0 时，是否展示徽标
     * @default false
     */
    showZero?: boolean;
    /**
     * 形状
     * @default circle
     */
    shape?: BadgeShape;
    /**
     * 徽标自定义style
     */
    badgeStyles?: ViewStyle;
  } & ContainerProps
>;
