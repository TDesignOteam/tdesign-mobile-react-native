import { useContext, useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { ErrorCircleIcon, CheckCircleIcon } from 'tdesign-icons-react-native/src';
import { isObject } from 'lodash';
import { View, Text } from '../Base';
import { Popup } from '../Popup';
import { Loading } from '../Loading';
import { ThemeContext } from '../../theme';
import { ToastProps, ToastStaticProps } from './types';

const styles = StyleSheet.create({
  container: {
    height: 'auto',
    minWidth: 135,
    maxWidth: 190,
  },
});

export const Toast: React.FunctionComponent<ToastProps> & ToastStaticProps = (props) => {
  const { text, layout, icon } = props;
  const { theme } = useContext(ThemeContext);

  const iconStyle = useMemo(() => {
    return layout === 'vertical' ? { width: 42, height: 42 } : { width: 21, height: 21 };
  }, [layout]);

  const iconElement = useMemo(() => {
    return icon ? { ...icon, props: { ...icon?.props, color: theme.colors.fontWhite1, ...iconStyle } } : null;
  }, [icon, iconStyle, theme.colors.fontWhite1]);

  return (
    <View
      className={`py16 px24 flexCenter ${layout === 'vertical' ? 'flexCol' : 'flexRow'}`}
      style={[styles.container, { backgroundColor: theme.colors.fontGray2 }]}
    >
      {iconElement ? <View className={layout === 'vertical' ? 'mb12' : 'mr8'}>{iconElement}</View> : null}
      <Text className="text4 fontWhite1 textCenter">{text}</Text>
    </View>
  );
};

Toast.defaultProps = {
  text: '',
  layout: 'vertical',
  showOverlay: false,
  duration: 1000,
};

Toast.show = (config) => {
  const mergedConfig = { ...Toast.defaultProps, ...config };

  // 业务很多场景传入的可能是Error对象
  const text = mergedConfig.text as any;
  if (text instanceof Error) {
    mergedConfig.text = text.message;
  }

  Toast.toastId = Popup.show(<Toast {...mergedConfig} />, {
    wrapperStyle: {
      borderRadius: 8,
      height: 'auto',
      width: 'auto',
      overflow: 'hidden',
    },
    animation: { from: { opacity: 0 }, to: { opacity: 1 } },
    closeAnimation: { from: { opacity: 1 }, to: { opacity: 0 } },
    autoClose: mergedConfig.duration,
    closeOnOverlay: false,
    showOverlay: mergedConfig.showOverlay,
    pointerEvents: mergedConfig.pointerEvents,
    onHide: mergedConfig.onHide,
  });
  return Toast.toastId;
};

Toast.hide = (id) => {
  return Popup.hide(id);
};

Toast.text = (text) => {
  Toast.toastId = Toast.show({
    text,
  });
  return Toast.toastId;
};

Toast.success = (config) => {
  if (typeof config === 'string') {
    Toast.toastId = Toast.show({
      text: config,
      icon: <CheckCircleIcon />,
    });
  } else {
    Toast.toastId = Toast.show({
      icon: <CheckCircleIcon />,
      ...config,
      text: config.text,
    });
  }
  return Toast.toastId;
};

Toast.error = (config) => {
  const { defaultErrorText } = Toast.defaultProps || {};
  if (typeof config === 'string') {
    Toast.toastId = Toast.show({
      text: config,
      icon: <ErrorCircleIcon />,
    });
  } else if (config instanceof Error && config.message) {
    Toast.toastId = Toast.show({
      text: config.message,
      icon: <ErrorCircleIcon />,
    });
  } else if (isObject(config) && (config as any)?.code !== undefined && (config as any)?.msg !== undefined) {
    Toast.toastId = Toast.show({
      text: (config as any)?.msg ?? defaultErrorText,
      icon: <ErrorCircleIcon />,
    });
  } else {
    Toast.toastId = Toast.show({
      text: (config as ToastProps).text,
      icon: <ErrorCircleIcon />,
      ...config,
    });
  }
  return Toast.toastId;
};

Toast.loading = (config) => {
  if (typeof config === 'string') {
    Toast.toastId = Toast.show({
      text: config,
      layout: 'vertical',
      duration: 0,
      icon: <Loading size="large" theme="white" />,
      pointerEvents: 'box-only',
    });
  } else {
    Toast.toastId = Toast.show({
      text: config?.text || '请稍候...',
      layout: 'vertical',
      duration: 0,
      icon: <Loading size="large" theme="white" />,
      pointerEvents: 'box-only',
      ...(config || {}),
    });
  }
  return Toast.toastId;
};
