import React, { useCallback, useContext } from 'react';
import { StyleSheet } from 'react-native';
import { isArray, isString } from 'lodash';
import { View, Text, ScrollView } from '../Base';
import { Touchable } from '../Touchable';
import { Popup } from '../Popup';
import { ThemeContext } from '../../theme';
import { DialogProps, DialogStaticProps } from './types';

const styles = StyleSheet.create({
  container: {
    height: 'auto',
    width: 320,
  },
});

export const Dialog: React.FunctionComponent<DialogProps> & DialogStaticProps = (props) => {
  const { style } = props;
  const { theme } = useContext(ThemeContext);

  const renderTitle = useCallback(() => {
    const { title, titleStyle } = props;
    if (isString(title)) {
      return (
        <Text className="text3b fontGray1 textCenter" style={[titleStyle]}>
          {title}
        </Text>
      );
    }
    if (React.isValidElement(title)) {
      return title;
    }
    return null;
  }, [props]);

  const renderContent = useCallback(() => {
    const { content, contentStyle } = props;
    let element = null;
    if (isString(content)) {
      element = (
        <Text className="text3 textCenter" style={[contentStyle]}>
          {content}
        </Text>
      );
    } else if (isArray(content)) {
      element = content?.map((item, index) => (
        <Text key={index} className={`text3 textCenter ${index !== 0 ? 'mt8' : ''}`} style={[contentStyle]}>
          {item}
        </Text>
      ));
    } else if (React.isValidElement(content)) {
      element = content;
    }
    return element ? (
      <ScrollView className="mt8 px4" style={{ maxHeight: 290 }}>
        {element}
      </ScrollView>
    ) : null;
  }, [props]);

  const renderButton = useCallback(() => {
    const { buttons, buttonLayout } = props;
    const classMap = {
      default: 'text3 fontGray1',
      primary: 'text3b brand7',
      danger: 'text3b error6',
    };
    return (
      <View className={`bt1 ${buttonLayout === 'vertical' ? 'flexCol' : 'flexRow'}`} style={{ minHeight: 56 }}>
        {buttons?.map((item, index) => {
          const textClass = classMap[item.theme || (buttons.length === 1 ? 'primary' : 'default')];
          const viewClass = buttonLayout === 'vertical' ? 'bt1' : 'bl1';

          return (
            <Touchable
              key={`button_${index}`}
              mode="opacity"
              onPress={() => {
                if (item?.onPress) {
                  item?.onPress?.();
                  return;
                }
                Dialog.hide(Dialog.dialogId);
              }}
              style={buttonLayout === 'vertical' ? { width: '100%' } : { flex: 1 }}
            >
              <View className={`flexCenter py16 ${index !== 0 ? viewClass : ''}`}>
                <Text className={`textCenter ${textClass}`} style={[item.style]}>
                  {item.text}
                </Text>
              </View>
            </Touchable>
          );
        })}
      </View>
    );
  }, [props]);

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.bgContainer }, style]}>
      <View className="py32 px24">
        {renderTitle()}
        {renderContent()}
      </View>
      {renderButton()}
    </View>
  );
};

Dialog.defaultProps = {
  showOverlay: true,
  buttons: [{ text: '知道了' }],
  buttonLayout: 'horizontal',
  closeOnOverlay: false,
};

Dialog.show = (config) => {
  const mergedConfig = { ...Dialog.defaultProps, ...config };
  Dialog.dialogId = Popup.show(<Dialog {...mergedConfig} />, {
    wrapperStyle: {
      borderRadius: 8,
      height: 'auto',
      width: 'auto',
      overflow: 'hidden',
      ...mergedConfig.popupWrapperStyle,
    },
    closeOnOverlay: mergedConfig.closeOnOverlay,
    showOverlay: mergedConfig.showOverlay,
  });
  return Dialog.dialogId;
};

Dialog.hide = (id) => {
  return Popup.hide(id);
};

Dialog.confirm = (message, onConfirm, onCancel) => {
  const isObj = typeof message === 'object';
  const title = isObj ? message.title : '提示';
  const content = isObj ? message.content : message;
  const confirmText = isObj && message.confirm ? message.confirm : '确定';
  const cancelText = isObj && message.cancel ? message.cancel : '取消';

  const id = Dialog.show({
    title,
    content,
    buttons: [
      {
        text: cancelText,
        onPress: () => {
          Dialog.hide(id).then(() => {
            onCancel?.();
          });
        },
      },
      {
        text: confirmText,
        theme: 'primary',
        onPress: () => {
          Dialog.hide(id).then(() => {
            onConfirm?.();
          });
        },
      },
    ],
    closeOnOverlay: true,
  });
};

Dialog.alert = (message, onConfirm) => {
  const id = Dialog.show({
    title: null,
    content: [message],
    buttons: [
      {
        text: '确定',
        theme: 'primary',
        onPress: () => {
          Dialog.hide(id).then(() => {
            onConfirm?.();
          });
        },
      },
    ],
    closeOnOverlay: true,
  });
};
