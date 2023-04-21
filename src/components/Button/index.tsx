import { ReactElement, PropsWithChildren, useEffect } from 'react';
import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
  Easing,
  cancelAnimation,
} from 'react-native-reanimated';
import { useTheme, ITokens } from '../../theme';
import { Text, View } from '../Base';
import { Touchable } from '../Touchable';

export type TButtonTheme = 'default' | 'primary' | 'danger';
export type IButtonProps = PropsWithChildren<{
  /**
   * 按钮内容
   */
  content?: string;
  /**
   * 是否禁用按钮
   * @default false
   */
  disabled?: boolean;
  /**
   * 点击回调
   */
  onPress?: () => void;
  /**
   * 按钮内部图标，可完全自定义
   */
  icon?: ReactElement;
  /**
   * 按钮排列方式
   * @default 'row'
   */
  iconDirection?: 'row' | 'column';
  /**
   * 组件尺寸
   * @default medium
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * 组件风格，依次为默认色、品牌色、危险色
   */
  theme?: TButtonTheme;
  /**
   * 按钮形式，基础、线框、文字
   * @default base
   */
  variant?: 'base' | 'outline' | 'text';
  /**
   * touchable styles
   */
  style?: ViewStyle;
  /**
   * 容器styles
   */
  containerStyle?: ViewStyle;
  /**
   * 文字styles
   */
  textStyle?: TextStyle;
  /**
   * icon styles
   */
  iconStyle?: TextStyle;
  loading?: boolean;
}>;

const createStyles = (theme: ITokens, size?: string, color?: string, variant?: string) => {
  let height;
  let font;
  let fontColor;
  let border = {};
  let backgroundColor;
  // 尺寸
  switch (size) {
    case 'small':
      height = 32;
      font = theme.classnames.text4;
      break;
    case 'medium':
      height = 36;
      font = theme.classnames.text4;
      break;
    case 'large':
      height = 44;
      font = theme.classnames.text3;
      break;
  }

  // 风格&按钮形式
  switch (color) {
    case 'default':
      fontColor = variant === 'base' ? theme.colors.fontGray1 : theme.colors.fontGray1;
      backgroundColor = variant === 'base' ? theme.colors.gray4 : 'transparent';
      border =
        variant === 'text'
          ? {}
          : {
              borderColor: theme.colors.gray4,
              borderWidth: 1,
              borderStyle: 'solid',
            };
      break;
    case 'primary':
      fontColor = variant === 'base' ? theme.colors.fontWhite1 : theme.colors.brand7;
      backgroundColor = variant === 'base' ? theme.colors.brand7 : 'transparent';
      border =
        variant === 'text'
          ? {}
          : {
              borderColor: theme.colors.brand7,
              borderWidth: 1,
              borderStyle: 'solid',
            };
      break;
    case 'danger':
      fontColor = variant === 'base' ? theme.colors.fontWhite1 : theme.colors.error6;
      backgroundColor = variant === 'base' ? theme.colors.error6 : 'transparent';
      border =
        variant === 'text'
          ? {}
          : {
              borderColor: theme.colors.error6,
              borderWidth: 1,
              borderStyle: 'solid',
            };
      break;
  }

  return StyleSheet.create({
    container: {
      height,
      borderRadius: theme.radius.default,
      backgroundColor,
      ...border,
    },
    text: { ...font, color: fontColor, textAlign: 'center' },
  });
};

export const Button = (props: IButtonProps) => {
  const { theme: appTheme } = useTheme();
  const {
    onPress,
    children,
    content = children,
    size,
    theme,
    variant,
    disabled,
    icon,
    style = {},
    containerStyle = {},
    textStyle = {},
    iconStyle = {},
    iconDirection = 'row',
    loading = false,
  } = props;
  const styles = createStyles(appTheme, size, theme, variant);
  const rotate = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotateZ: `${rotate.value}deg` }],
  }));

  const _iconStyle = [
    styles.text,
    iconDirection === 'row' ? { marginRight: 8 } : { marginBottom: 2 },
    icon?.props?.style,
    iconStyle,
  ];
  const _iconColor = textStyle?.color || styles.text.color;

  const iconChild = {
    ...icon,
    props: {
      color: _iconColor,
      ...icon?.props,
      style: _iconStyle,
    },
  };

  useEffect(() => {
    rotate.value = withRepeat(
      withTiming(360, {
        duration: 1000,
        easing: Easing.linear,
      }),
      999,
    );
    return () => {
      cancelAnimation(rotate);
    };
  }, [rotate]);

  const loadingNode = (
    <View style={_iconStyle}>
      <Animated.View style={animatedStyle}>
        <Text>loading</Text>
      </Animated.View>
    </View>
  );

  return (
    <Touchable mode="opacity" disabled={loading || disabled} onPress={onPress} style={style}>
      <View
        className={`px12 flexCenter ${iconDirection === 'row' ? 'flexRow' : 'flexCol'}`}
        style={[styles.container, containerStyle]}
      >
        {/* @ts-ignore */}
        {loading ? loadingNode : <>{icon ? <View>{iconChild}</View> : null}</>}
        <Text style={[styles.text, textStyle]}>{content}</Text>
      </View>
    </Touchable>
  );
};

Button.defaultProps = {
  disabled: false,
  icon: null,
  size: 'medium',
  theme: 'default',
  variant: 'base',
  iconDirection: 'row',
};

export default Button;
