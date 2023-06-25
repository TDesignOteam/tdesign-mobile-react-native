import { ReactNode, PropsWithChildren } from 'react';
import { ViewStyle, TextStyle } from 'react-native';
import { ContainerProps } from '../common';

type CollapseProps = PropsWithChildren<
  {
    /**
     * header容器样式
     */
    headerContainerStyle?: ViewStyle;
    /**
     * header
     */
    header?: string | ReactNode;
    /**
     * header 样式
     */
    headerStyle?: TextStyle;
    /**
     * header right
     */
    headerRight?: string | ReactNode;
    /**
     * header right 样式
     */
    headerRightStyle?: TextStyle;
    /**
     * 展开状态
     * @default 'false'
     */
    expandable?: boolean;
    /**
     * 动画时长
     * @default 300
     */
    duration?: number;
    /**
     * 自定义icon
     */
    icon?: (state: boolean) => ReactNode;
  } & ContainerProps
>;

export type { CollapseProps };
