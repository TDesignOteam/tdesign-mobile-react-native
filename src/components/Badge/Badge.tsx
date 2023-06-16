import { useEffect, useState } from 'react';
import { LayoutChangeEvent, StyleSheet } from 'react-native';
import { isNumber, isEmpty, isString } from 'lodash';
import { useTheme, ThemeType } from '../../theme';
import { Text, View } from '../index';
import type { BadgeProps } from './types';

const createStyles = (
  props: { theme: ThemeType } & Pick<BadgeProps, 'color' | 'fontColor' | 'dot' | 'shape' | 'offset'>,
) => {
  const { theme, color, fontColor, dot, shape = 'circle', offset } = props;
  const shapeMap = {
    square: theme.spacers.spacer0,
    circle: theme.radius.round,
    round: theme.radius.default,
  };

  return StyleSheet.create({
    badge: {
      position: 'absolute',
      top: offset?.[0] ?? 0,
      right: offset?.[1] ?? 0,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      minWidth: theme.spacers.spacer8,
      paddingHorizontal: theme.spacers.spacer4,
      paddingVertical: dot ? theme.spacers.spacer4 : theme.spacers.spacer1,
      backgroundColor: color ? color : theme.colors.error6,
      borderRadius: shapeMap[shape],
    },
    text: {
      fontSize: theme.fontSize.s,
      color: fontColor ? fontColor : theme.colors.white,
      textAlign: 'center',
    },
  });
};

export const Badge = (props: BadgeProps) => {
  const { theme } = useTheme();
  const {
    content = null,
    children = null,
    count,
    color,
    fontColor,
    dot = false,
    maxCount = 99,
    showZero = false,
    shape = 'circle',
    offset,
    badgeStyles,
    style,
    className,
  } = props;

  const styles = createStyles({ theme, color, fontColor, dot, shape, offset });
  const [isShow, setIsShow] = useState(false);
  const [countText, setCountText] = useState('');
  const [containerSize, setContainerSize] = useState<null | { width: number; height: number }>(null);

  const handleLayout = (event: LayoutChangeEvent) => {
    const { width, height } = event.nativeEvent.layout;
    setContainerSize({ width, height });
  };

  useEffect(() => {
    if (dot) {
      setIsShow(true);
      return;
    }

    if (!isNumber(count) && isEmpty(count)) {
      setIsShow(false);
      return;
    }

    if (isNumber(count)) {
      if (count === 0 && !showZero) {
        setIsShow(false);
        return;
      }
      let _count = `${count}`;
      if (count > maxCount) {
        _count = `${maxCount}+`;
      }
      setIsShow(true);
      setCountText(_count);
      return;
    }

    if (isString(count)) {
      setIsShow(true);
      setCountText(count);
    }
  }, [count, maxCount, showZero, dot]);

  return (
    <View style={style} className={className}>
      {content || children}
      {isShow ? (
        <View
          onLayout={handleLayout}
          style={[
            styles.badge,
            containerSize && !offset ? { right: -containerSize.width / 2, top: -containerSize.height / 2 } : {},
            badgeStyles,
            containerSize === null ? { opacity: 0 } : {},
          ]}
        >
          {!dot && countText ? <Text style={styles.text}>{countText}</Text> : null}
        </View>
      ) : null}
    </View>
  );
};
