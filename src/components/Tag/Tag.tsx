import { cloneElement, useMemo } from 'react';
import { StyleSheet, TextStyle } from 'react-native';
import { CloseIcon } from 'tdesign-icons-react-native/src';
import { useTheme, ThemeType } from '../../theme';
import { Text, View, Touchable } from '../index';
import type { TagProps } from './types';

const createStyles = (props: { appTheme: ThemeType } & Pick<TagProps, 'size' | 'theme' | 'shape' | 'variant'>) => {
  const { appTheme, size = 'medium', theme = 'default', shape = 'square', variant = 'dark' } = props;

  // 尺寸
  const sizeMap = {
    large: {
      paddingHorizontal: appTheme.spacers.spacer16,
      paddingVertical: appTheme.spacers.spacer4,
    },
    medium: {
      paddingHorizontal: appTheme.spacers.spacer12,
      paddingVertical: appTheme.spacers.spacer2,
    },
    small: {
      paddingHorizontal: appTheme.spacers.spacer8,
      paddingVertical: appTheme.spacers.spacer2,
    },
  };

  // 字体大小
  const fontMap = {
    large: appTheme.classnames.text4,
    medium: appTheme.classnames.text5,
    small: appTheme.classnames.text6,
  };

  // 形状
  const shapeMap = {
    square: { borderRadius: appTheme.radius.small },
    round: { borderRadius: appTheme.radius.round },
    mark: {
      borderTopLeftRadius: appTheme.spacers.spacer0,
      borderTopRightRadius: appTheme.radius.round,
      borderBottomRightRadius: appTheme.radius.round,
      borderBottomLeftRadius: appTheme.spacers.spacer0,
    },
  };

  // 字体颜色
  const colorMap = {
    default: {
      color: appTheme.colors.fontGray1,
    },
    primary: {
      color: variant === 'dark' ? appTheme.colors.white : appTheme.colors.brand,
    },
    warning: {
      color: variant === 'dark' ? appTheme.colors.white : appTheme.colors.warning,
    },
    danger: {
      color: variant === 'dark' ? appTheme.colors.white : appTheme.colors.error,
    },
    success: {
      color: variant === 'dark' ? appTheme.colors.white : appTheme.colors.success,
    },
  };

  // 背景色
  const backgroundColorMap = {
    default: {
      backgroundColor: {
        dark: appTheme.colors.gray4,
        light: appTheme.colors.gray3,
        outline: appTheme.colors.white,
      }[variant],
    },
    primary: {
      backgroundColor: {
        dark: appTheme.colors.brand,
        light: appTheme.colors.brand2,
        outline: appTheme.colors.white,
      }[variant],
    },
    warning: {
      backgroundColor: {
        dark: appTheme.colors.warning,
        light: appTheme.colors.warning2,
        outline: appTheme.colors.white,
      }[variant],
    },
    danger: {
      backgroundColor: {
        dark: appTheme.colors.error,
        light: appTheme.colors.error2,
        outline: appTheme.colors.white,
      }[variant],
    },
    success: {
      backgroundColor: {
        dark: appTheme.colors.success,
        light: appTheme.colors.success2,
        outline: appTheme.colors.white,
      }[variant],
    },
  };

  // 边框
  const borderMap = {
    default: variant === 'outline' ? { ...appTheme.classnames.b1, borderColor: appTheme.colors.gray4 } : {},
    primary: variant === 'outline' ? { ...appTheme.classnames.b1, borderColor: appTheme.colors.brand } : {},
    warning: variant === 'outline' ? { ...appTheme.classnames.b1, borderColor: appTheme.colors.warning } : {},
    danger: variant === 'outline' ? { ...appTheme.classnames.b1, borderColor: appTheme.colors.error } : {},
    success: variant === 'outline' ? { ...appTheme.classnames.b1, borderColor: appTheme.colors.success } : {},
  };

  return {
    styles: StyleSheet.create({
      container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        ...sizeMap[size],
        ...shapeMap[shape],
        ...backgroundColorMap[theme],
        ...borderMap[theme],
      },
      text: { ...fontMap[size], ...colorMap[theme], textAlign: 'center' },
    }),
    color: colorMap[theme]?.color,
    fontSize: (fontMap[size] as TextStyle)?.fontSize,
  };
};

export const Tag = (props: TagProps) => {
  const {
    children,
    icon,
    content = children,
    size = 'medium',
    theme = 'default',
    shape = 'square',
    variant = 'dark',
    disabled,
    closable,
    onClose,
    onPress,
    style,
    numberOfLines,
  } = props;
  const { theme: appTheme } = useTheme();
  const { styles, color, fontSize } = createStyles({ appTheme, size, theme, shape, variant });

  const onClosePress = () => {
    onClose?.();
  };

  const onTagPress = () => {
    onPress?.();
  };

  const _icon = useMemo(() => {
    const { color: customColor } = icon?.props || {};
    return icon ? cloneElement(icon, { color: customColor || color, ...icon?.props }) : null;
  }, [color, icon]);

  return (
    <Touchable style={style} disabled={disabled} mode={onPress ? 'opacity' : 'none'} onPress={() => onTagPress()}>
      <View style={styles.container}>
        {_icon}
        <Text numberOfLines={numberOfLines} style={styles.text}>
          {content}
        </Text>
        {closable ? (
          <Touchable
            style={{ opacity: 0.7 }}
            mode="opacity"
            onPress={() => {
              onClosePress();
            }}
          >
            <CloseIcon
              color={color}
              style={{
                fontSize,
                marginLeft: 4,
              }}
            />
          </Touchable>
        ) : null}
      </View>
    </Touchable>
  );
};
