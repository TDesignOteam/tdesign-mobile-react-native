import type { PropsWithChildren, ReactElement } from 'react';
import { ContainerStyle, SizeEnum, ThemeEnum } from '../common';

/**
 * 标签形状
 */
export type TagShape = 'square' | 'round' | 'mark';

/**
 * 标签变体
 */
export type TagVariant = 'dark' | 'light' | 'outline';

export type TagProps = PropsWithChildren<
  {
    /**
     * 图标
     */
    icon?: ReactElement;
    /**
     * 标签内容，可传入children
     */
    content?: string;
    /**
     * tag可换行数，默认可以换行
     */
    numberOfLines?: number | undefined;
    /**
     * 标签是否可关闭
     */
    closable?: boolean;
    /**
     * 标签禁用态，失效标签不能触发事件。默认风格（theme=default）才有禁用态
     */
    disabled?: boolean;
    /**
     * 标签尺寸。可选项：small/normal/large
     * @default normal
     */
    size?: SizeEnum;
    /**
     * 组件风格，用于描述组件不同的应用场景。可选项：default/primary/warning/danger/success
     * @default default
     */
    theme?: ThemeEnum;
    /**
     * 标签风格变体。可选项：dark/light/outline
     */
    variant?: TagVariant;
    /**
     * 标签类型，有三种：方形、圆角方形、标记型。可选项：square/round/mark
     */
    shape?: TagShape;
    /**
     * 如果关闭按钮存在，点击关闭按钮时触发
     */
    onClose?: () => void;
    /**
     * 点击时触发
     */
    onPress?: () => void;
  } & ContainerStyle
>;
