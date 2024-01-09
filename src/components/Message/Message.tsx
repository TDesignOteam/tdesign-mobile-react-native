import { Component, ContextType } from 'react';
import { StyleSheet, NativeModules, Platform } from 'react-native';
import { ErrorCircleIcon, CloseIcon } from 'tdesign-icons-react-native/src';
import { Directions } from 'react-native-gesture-handler';
import { isBoolean } from 'lodash';
import { Popup, View, Text, Touchable } from '../index';
import { ThemeContext } from '../../theme';
import { MessageProps } from './types';

const { StatusBarManager } = NativeModules;

const styles = StyleSheet.create({
  container: {
    height: 'auto',
    width: 343,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 20,
  },
});

export class Message extends Component {
  static defaultProps: MessageProps = {
    text: '',
    duration: 3000,
    theme: 'default',
    closeBtn: false,
  };

  declare context: ContextType<typeof ThemeContext>;

  static contextType = ThemeContext;

  static messageId?: number;

  static show(config: MessageProps) {
    // 距离顶部高度 statueBar + navigateBar + 10
    const offsetY = (StatusBarManager?.HEIGHT || 0) + (Platform.OS === 'web' ? 64 : 44) + 10;
    const mergedConfig = { ...Message.defaultProps, ...config };
    Message.messageId = Popup.show(<Message {...mergedConfig} />, {
      wrapperStyle: {
        borderRadius: 8,
        height: 'auto',
        width: 'auto',
        alignItems: 'center',
      },
      placement: 'none',
      animation: {
        from: { opacity: 0, transform: [{ translateY: 0 }] },
        to: { opacity: 1, transform: [{ translateY: offsetY }] },
      },
      autoClose: mergedConfig.duration,
      closeOnOverlay: false,
      showOverlay: false,
      gesture: true,
      gestureDirection: Directions.UP,
    });
    return Message.messageId;
  }

  static hide(id?: number) {
    return Popup.hide(id);
  }

  static info(text: string, config?: Omit<MessageProps, 'text'>) {
    Message.messageId = Message.show({
      text,
      icon: <ErrorCircleIcon />,
      theme: 'default',
      ...config,
    });
    return Message.messageId;
  }

  static success(text: string, config?: Omit<MessageProps, 'text'>) {
    Message.messageId = Message.show({
      text,
      icon: <ErrorCircleIcon />,
      theme: 'success',
      ...config,
    });
    return Message.messageId;
  }

  static error(text: string, config?: Omit<MessageProps, 'text'>) {
    Message.messageId = Message.show({
      text,
      icon: <ErrorCircleIcon />,
      theme: 'danger',
      ...config,
    });
    return Message.messageId;
  }

  static warn(text: string, config?: Omit<MessageProps, 'text'>) {
    Message.messageId = Message.show({
      text,
      icon: <ErrorCircleIcon />,
      theme: 'warning',
      ...config,
    });
    return Message.messageId;
  }

  public props: MessageProps;

  public messageId?: number;

  constructor(props: MessageProps) {
    super(props);

    this.props = props;
    this.state = {};
  }

  getColor() {
    const { theme } = this.context;
    const { theme: messageTheme } = this.props;
    switch (messageTheme) {
      case 'success':
        return theme.colors.success5;
      case 'danger':
        return theme.colors.error6;
      case 'warning':
        return theme.colors.warning5;
      default:
        return theme.colors.brand7;
    }
  }

  onPressClose() {
    const { onClose, onClosed } = this.props;
    onClose?.();
    Message.hide(Message.messageId).then(() => {
      onClosed?.();
    });
  }

  render(): React.ReactNode {
    const { theme } = this.context;
    const { text, icon, closeBtn } = this.props;
    const color = this.getColor();
    const iconStyle = { color };
    const iconElement = icon
      ? {
          ...icon,
          props: { ...icon?.props, width: 20, height: 20, ...iconStyle },
        }
      : null;

    return (
      <View
        className={'py12 px16 flexRow flexCenter'}
        style={[
          styles.container,
          {
            backgroundColor: theme.colors.bgContainer,
            shadowColor: theme.colors.shadow1,
          },
        ]}
      >
        {iconElement ? <View className="mr8">{iconElement}</View> : null}
        <Text className="text4 flex1" style={{ color }}>
          {text}
        </Text>
        {isBoolean(closeBtn) && closeBtn ? (
          <Touchable mode="none" onPress={() => this.onPressClose()}>
            <CloseIcon style={{ width: 20, height: 20, color: this.getColor() }} />
          </Touchable>
        ) : null}
        {!isBoolean(closeBtn) ? closeBtn : null}
      </View>
    );
  }
}
