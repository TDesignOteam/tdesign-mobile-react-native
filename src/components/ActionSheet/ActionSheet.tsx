import React, { useCallback, useContext } from 'react';
import { StyleSheet } from 'react-native';
import { isString } from 'lodash';
import { SafeAreaInsetsContext } from 'react-native-safe-area-context';
import { View, Text } from '../Base';
import { Touchable } from '../Touchable';
import { Popup } from '../Popup';
import { ThemeContext } from '../../theme';
import { ActionSheetProps, ActionSheetStaticProps, ActionSheetItem, ActionSheetItemTheme } from './types';

const styles = StyleSheet.create({
  container: {},
});

export const ActionSheet: React.FunctionComponent<ActionSheetProps> & ActionSheetStaticProps = (props) => {
  const { style, title, align, items, onSelected, cancelText, hideCancel } = props;
  const { theme } = useContext(ThemeContext);
  const insets = useContext(SafeAreaInsetsContext);

  const renderTitle = useCallback(() => {
    if (isString(title)) {
      return (
        <View className="bg px16 py8">
          <Text className={`text4 ${align === 'left' ? '' : 'textCenter'}`}>{title}</Text>
        </View>
      );
    }
    if (React.isValidElement(title)) {
      return title;
    }
    return null;
  }, [title, align]);

  const getColor = useCallback(
    (itemTheme?: ActionSheetItemTheme) => {
      switch (itemTheme) {
        case 'success':
          return theme.colors.success5;
        case 'error':
          return theme.colors.error6;
        case 'warning':
          return theme.colors.warning5;
        case 'info':
          return theme.colors.brand7;
        default:
          return theme.colors.fontGray1;
      }
    },
    [theme],
  );

  const renderCancel = useCallback(() => {
    return hideCancel ? null : (
      <Touchable onPress={() => ActionSheet.hide(ActionSheet.actionSheetId)}>
        <View
          className="mt4 bg flexCenter"
          style={{
            height: 50 + (insets?.bottom || 0),
            paddingBottom: insets?.bottom,
          }}
        >
          <Text className="bg text3 textCenter">{cancelText}</Text>
        </View>
      </Touchable>
    );
  }, [cancelText, hideCancel, insets]);

  const onItemPress = (item: ActionSheetItem, index: number) => {
    onSelected?.(item, index);
  };

  return (
    <View className="bgPage" style={[styles.container, style]}>
      {renderTitle()}
      {items?.map((item, index) => (
        <Touchable key={index} disabled={!!item.disable} onPress={() => onItemPress(item, index)}>
          <View
            className={`bt1 px16 bg ${align === 'left' ? 'flexStartH flexCenterH' : 'flexCenter'}`}
            style={{ height: 50 }}
          >
            <Text
              className="text3"
              style={{
                color: getColor(item.theme),
                paddingBottom: !hideCancel && index === items.length - 1 ? 0 : insets?.bottom || 0,
              }}
            >
              {item.text}
            </Text>
            {item.tip ? (
              <Text
                className="textCenter"
                style={{
                  fontSize: theme.fontSize.base,
                  color: theme.colors.fontGray2,
                }}
              >
                {item.tip}
              </Text>
            ) : null}
          </View>
        </Touchable>
      ))}
      {renderCancel()}
    </View>
  );
};

ActionSheet.defaultProps = {
  align: 'center',
  cancelText: '取消',
  closeOnOverlay: true,
};

ActionSheet.show = (config) => {
  // 整体内容高度 + 安全距离
  const offsetY = (config.title ? 38 : 0) + (config?.items?.length ? config.items.length * 50 : 0) + 50 + 40;
  const mergedConfig = { ...ActionSheet.defaultProps, ...config };

  ActionSheet.actionSheetId = Popup.show(<ActionSheet {...mergedConfig} />, {
    wrapperStyle: {
      height: 'auto',
      borderTopRightRadius: 8,
      borderTopLeftRadius: 8,
      overflow: 'hidden',
    },
    placement: 'bottom',
    animation: {
      from: { transform: [{ translateY: offsetY }] },
      to: { transform: [{ translateY: 0 }] },
    },
    closeOnOverlay: mergedConfig.closeOnOverlay,
    showOverlay: true,
  });
  return ActionSheet.actionSheetId;
};

ActionSheet.hide = (id) => {
  return Popup.hide(id);
};
