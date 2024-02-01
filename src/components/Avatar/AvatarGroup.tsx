import React, { Children, cloneElement, ReactNode, useMemo } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from '../Base';
import { useTheme, ThemeType } from '../../theme';
import { AVATAR_SIZE_MAP, AVATAR_ICON_SIZE_MAP } from './Avatar';
import type { AvatarGroupProps } from './types';
import { SizeEnum } from '../common';

const createStyles = (theme: ThemeType, size: SizeEnum) => {
  const height = AVATAR_SIZE_MAP[size];
  const width = AVATAR_SIZE_MAP[size];
  const textSize = AVATAR_ICON_SIZE_MAP[size];
  return StyleSheet.create({
    group: {
      display: 'flex',
      flexDirection: 'row',
    },
    offsetRight: {
      marginRight: -(theme.spacers.spacer10 ?? 10),
      borderColor: theme.colors.white,
      borderWidth: theme.spacers.spacer2,
    },
    numberWrap: {
      height,
      width,
      borderRadius: 999,
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.colors.brand2,
      fontSize: textSize,
      marginRight: -(theme.spacers.spacer10 ?? 10),
      borderColor: theme.colors.white,
      borderWidth: theme.spacers.spacer2,
    },
    numberText: {
      color: theme.colors.brand7,
    },
  });
};

export const AvatarGroup: React.FunctionComponent<AvatarGroupProps> = (props) => {
  const { style, children, size = 'normal', max, collapseAvatar, cascading } = props;
  const { theme } = useTheme();
  const styles = createStyles(theme, size);
  const childrens = Children.toArray(children);

  const childrenList = useMemo(() => {
    const result: ReactNode[] = [];
    childrens?.forEach((child, index) => {
      if (React.isValidElement(child)) {
        console.log(childrens.length - index);
        const cloneChild = cloneElement(child, {
          ...child.props,
          style: [
            styles.offsetRight,
            child?.props?.style || {},
            { zIndex: cascading === 'left-up' ? childrens.length - index : 0 },
          ],
          size,
        });
        if (max) {
          if (index < max) {
            result.push(cloneChild);
          }
        } else {
          result.push(cloneChild);
        }
      }
    });
    return result;
  }, [cascading, childrens, max, size, styles.offsetRight]);

  const hiddenNumber = useMemo(() => {
    if (max && childrens.length > max) {
      return childrens.length - max;
    }
    return false;
  }, [childrens, max]);

  const collapseElement = (
    <View style={styles.numberWrap}>
      {collapseAvatar ? collapseAvatar : <Text style={styles.numberText}>{`+${hiddenNumber}`}</Text>}
    </View>
  );

  return (
    <View style={[styles.group, style]}>
      {childrenList}
      {hiddenNumber ? collapseElement : null}
    </View>
  );
};

AvatarGroup.defaultProps = {
  cascading: 'right-up',
};
