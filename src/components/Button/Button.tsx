import { cloneElement, useEffect, useMemo } from 'react';
import { StyleSheet } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
  Easing,
  cancelAnimation,
} from 'react-native-reanimated';
import { LoadingIcon } from 'tdesign-icons-react-native/src';
import { useTheme, ThemeType } from '../../theme';
import { Text, View } from '../Base';
import { Touchable } from '../Touchable';
import { TDButtonProps } from './types';

const createStyles = (
  appTheme: ThemeType,
  size: TDButtonProps['size'] = 'medium',
  theme: TDButtonProps['theme'] = 'default',
  variant: TDButtonProps['variant'] = 'base',
  shape: TDButtonProps['shape'] = 'round',
) => {
  const isBaseVariant = variant === 'base';
  const isTextVariant = variant === 'text';

  const heightMap = {
    small: 32,
    medium: 36,
    large: 44,
  };

  const fontMap = {
    small: appTheme.classnames.text4,
    medium: appTheme.classnames.text4,
    large: appTheme.classnames.text3,
  };

  const fontColorMap = {
    default: appTheme.colors.fontGray1,
    primary: isBaseVariant ? appTheme.colors.fontWhite1 : appTheme.colors.brand7,
    danger: isBaseVariant ? appTheme.colors.fontWhite1 : appTheme.colors.error6,
    warning: isBaseVariant ? appTheme.colors.fontWhite1 : appTheme.colors.warning5,
    success: isBaseVariant ? appTheme.colors.fontWhite1 : appTheme.colors.success5,
  };

  const backgroundColorMap = {
    default: appTheme.colors.gray4,
    primary: appTheme.colors.brand7,
    danger: appTheme.colors.error6,
    warning: appTheme.colors.warning5,
    success: appTheme.colors.success5,
  };

  const shapeMap = {
    rectangle: {},
    square: { width: heightMap[size] },
    round: { borderRadius: appTheme.radius.default },
    circle: { borderRadius: appTheme.radius.round },
  };

  return StyleSheet.create({
    container: {
      height: heightMap[size],
      ...shapeMap[shape],
      backgroundColor: isBaseVariant ? backgroundColorMap[theme] : 'transparent',
      ...(isTextVariant
        ? {}
        : {
            borderColor: backgroundColorMap[theme],
            borderWidth: appTheme.spacers.spacer1,
            borderStyle: 'solid',
          }),
    },
    text: { ...fontMap[size], color: fontColorMap[theme], textAlign: 'center' },
  });
};

export const Button = (props: TDButtonProps) => {
  const {
    onPress,
    children,
    content = children,
    size,
    theme,
    variant,
    shape,
    disabled,
    icon,
    style = {},
    containerStyle = {},
    textStyle = {},
    iconDirection = 'row',
    loading = false,
  } = props;

  const { theme: appTheme } = useTheme();
  const rotate = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotateZ: `${rotate.value}deg` }],
  }));

  const styles = useMemo(() => {
    return createStyles(appTheme, size, theme, variant, shape);
  }, [appTheme, size, theme, variant, shape]);

  const _iconColor = useMemo(() => {
    return textStyle?.color || styles.text.color;
  }, [styles.text.color, textStyle?.color]);

  const _iconStyle = useMemo(() => {
    const iconMargin =
      iconDirection === 'row' ? { marginRight: appTheme.spacers.spacer8 } : { marginBottom: appTheme.spacers.spacer2 };
    return [styles.text, content ? iconMargin : {}, icon?.props?.style];
  }, [appTheme.spacers.spacer2, appTheme.spacers.spacer8, icon?.props?.style, iconDirection, styles.text, content]);

  const _icon = useMemo(() => {
    return icon ? cloneElement(icon, { color: _iconColor, ...icon?.props, style: _iconStyle }) : null;
  }, [_iconColor, _iconStyle, icon]);

  const loadingNode = useMemo(() => {
    return (
      <View style={_iconStyle}>
        <Animated.View style={animatedStyle}>
          <LoadingIcon color={_iconColor} />
        </Animated.View>
      </View>
    );
  }, [_iconColor, _iconStyle, animatedStyle]);

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

  return (
    <Touchable mode="opacity" disabled={loading || disabled} onPress={onPress} style={style}>
      <View
        className={`px12 flexCenter ${iconDirection === 'row' ? 'flexRow' : 'flexCol'}`}
        style={[styles.container, containerStyle]}
      >
        {loading ? loadingNode : <>{_icon ? <View>{_icon}</View> : null}</>}
        {content === null ? content : <Text style={[styles.text, textStyle]}>{content}</Text>}
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
  shape: 'round',
  iconDirection: 'row',
};
