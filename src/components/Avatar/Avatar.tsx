import React, { useMemo } from 'react';
import { View, StyleSheet } from 'react-native';
import { isString } from 'lodash';
import { Image, Text } from '../Base';
import { useTheme, ThemeType } from '../../theme';
import type { AvatarProps, AvatarShape } from './types';
import { SizeEnum } from '../common';

export const AVATAR_SIZE_MAP = {
  small: 32,
  normal: 48,
  large: 64,
};

export const AVATAR_ICON_SIZE_MAP = {
  small: 16,
  normal: 24,
  large: 32,
};

const createStyles = (theme: ThemeType, size: SizeEnum, shape: AvatarShape) => {
  const height = AVATAR_SIZE_MAP[size];
  const width = AVATAR_SIZE_MAP[size];
  const textSize = AVATAR_ICON_SIZE_MAP[size];

  return StyleSheet.create({
    avatar: {
      height,
      width,
      borderRadius: shape === 'circle' ? 999 : 4,
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.colors.brand2,
      fontSize: textSize,
      color: theme.colors.brand7,
    },
    image: {
      width: '100%',
      height: '100%',
    },
  });
};

export const Avatar: React.FunctionComponent<AvatarProps> = (props) => {
  const { shape = 'circle', url, size = 'normal', style, icon, onError, onLoad, children } = props;
  const { theme } = useTheme();
  const styles = createStyles(theme, size, shape);

  const avatarElement = useMemo(() => {
    if (url) {
      return (
        <Image
          source={{ uri: url }}
          style={styles.image}
          // errorIcon={defaultUserIcon}
          // backgroundColor={theme.colors.brand2}
          onError={(e) => onError?.(e)}
          onLoad={(e) => onLoad?.(e)}
        />
      );
    }

    if (React.isValidElement(icon)) {
      return icon;
    }

    if (isString(children)) {
      return <Text style={[styles.avatar, style]}>{children}</Text>;
    }

    return children;
  }, [children, icon, onError, onLoad, style, styles.avatar, styles.image, url]);

  return <View style={[styles.avatar, style]}>{avatarElement}</View>;
};

Avatar.defaultProps = {
  shape: 'circle',
  size: 'normal',
};
