import React, { Component, ReactElement, PropsWithChildren } from 'react';
import { Keyboard, View, StyleSheet, Dimensions, ViewStyle, TouchableWithoutFeedback } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Easing } from 'react-native-reanimated';
import { isEmpty } from 'lodash';
import { isWeb } from '../../_utils/constants';
import { ThemeType, ThemeContext } from '../../theme';
import { PopupConfig, PopupItemConfig } from './types';
import { AnimationView } from '../AnimationView/AnimationView';

const styles = StyleSheet.create({
  root: {
    overflow: 'hidden',
    position: 'absolute',
    zIndex: 100,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  container: {
    position: 'absolute',
    zIndex: 110,
    left: 0,
    top: 0,
    overflow: 'hidden',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// 预设样式
const placementStyle = (placement: PopupConfig['placement'], theme: ThemeType): ViewStyle => {
  switch (placement) {
    case 'right':
      return {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        width: '70%',
        height: '100%',
        backgroundColor: theme.colors.bgContainer,
      };
    case 'left':
      return {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        width: '70%',
        height: '100%',
        backgroundColor: theme.colors.bgContainer,
      };
    case 'top':
      return {
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        width: '100%',
        height: '40%',
        backgroundColor: theme.colors.bgContainer,
      };
    case 'bottom':
      return {
        position: 'absolute',
        right: 0,
        left: 0,
        bottom: 0,
        width: '100%',
        height: '40%',
        backgroundColor: theme.colors.bgContainer,
      };
    case 'fullScreen':
      return {
        width: '100%',
        height: '100%',
        backgroundColor: theme.colors.bgContainer,
      };
    case 'none':
      return {};
    default:
      return {
        width: 250,
        height: 200,
        backgroundColor: theme.colors.bgContainer,
      };
  }
};

// 预设动画
const placementAnimation = (placement: PopupConfig['placement']) => {
  switch (placement) {
    case 'right':
      return {
        from: { translateX: Dimensions.get('screen').width * 0.7 },
        to: { translateX: 0 },
      };
    case 'left':
      return {
        from: { translateX: -Dimensions.get('screen').width * 0.7 },
        to: { translateX: 0 },
      };
    case 'top':
      return {
        from: { translateY: -Dimensions.get('screen').height * 0.4 },
        to: { translateY: 0 },
      };
    case 'bottom':
      return {
        from: { translateY: Dimensions.get('screen').height * 0.4 },
        to: { translateY: 0 },
      };
    case 'none':
      return {};
    default:
      return {
        from: { transform: [{ scale: 1 }], opacity: 1 },
        to: { transform: [{ scale: 1 }], opacity: 1 },
      };
  }
};

const defaultConfig: PopupConfig = {
  placement: 'center',
  zIndex: 110,
  delay: 0,
  duration: 200,
  easing: Easing.bezierFn(0.42, 0, 0.58, 1),
  animation: {},
  showOverlay: true,
  closeOnOverlay: true,
  autoClose: 0,
  wrapperStyle: {},
  pointerEvents: 'box-none',
};

export class Popup extends Component {
  static popupInstance?: Popup = undefined;

  static show(element: ReactElement, config: PopupConfig): number {
    if (this.popupInstance) {
      return this.popupInstance.showPopup(element, config);
    } else {
      console.warn('popup没有初始化');
      return 0;
    }
  }

  static hide(id?: number): Promise<void> {
    if (this.popupInstance) {
      return this.popupInstance.hidePopup(id);
    } else {
      console.warn('popup没有初始化');
      return Promise.resolve();
    }
  }

  static destroy(id: number) {
    this.popupInstance?.hidePopup(id, true);
  }

  static contextType = ThemeContext;

  declare context: React.ContextType<typeof ThemeContext>;

  popupId = 1;

  hasPopup = false;

  _records = new Map<any, boolean>();

  state = {
    popups: new Map<any, PopupItemConfig>(),
  };

  overlayAnimation = {
    from: { backgroundColor: 'rgba(0, 0, 0, 0)' },
    to: { backgroundColor: 'rgba(0, 0, 0, 0.6)' },
  };

  closeAnimationOnCenter = {
    from: { transform: [{ scale: 1 }], opacity: 1 },
    to: { transform: [{ scale: 0.5 }], opacity: 0 },
  };

  showPopup(element: ReactElement, config: PopupConfig) {
    const mergedConfig = {
      ...defaultConfig,
      ...config,
      animation: !isEmpty(config.animation) ? config.animation : placementAnimation(config.placement),
    };
    const { popups } = this.state;
    let id: number;
    if (mergedConfig.persistDomId) {
      id = mergedConfig.persistDomId;
    } else {
      id = this.popupId;
      this.popupId += 1;
    }

    popups.set(id, {
      popupVisible: true,
      element,
      config: mergedConfig,
      id,
      overlayAnimation: config.overlayAnimation || this.overlayAnimation,
      _originConfig: config,
    });
    Keyboard.dismiss();

    this.setState({ popups });

    // 如果设置自动关闭，展示动画执行完毕后
    if (mergedConfig.autoClose) {
      setTimeout(() => {
        this.hidePopup(id);
      }, mergedConfig.autoClose + (mergedConfig?.duration ?? 0) + (mergedConfig?.delay ?? 0));
    }
    return id;
  }

  hidePopup(id?: number, forceDestroy?: boolean): Promise<void> {
    const { popups } = this.state;

    if (!id || !popups.has(id)) {
      return Promise.resolve();
    }
    // 执行关闭前动画
    return this.beforeHide(id).then((popup) => {
      // 移除popup
      if (forceDestroy || !popup?.config?.persistDom) {
        popups.delete(id);
      } else {
        popups.set(id, {
          ...popup,
          popupVisible: false,
        });
      }
      this.setState({ popups });
      popup?.config?.onHide?.();
      return Promise.resolve();
    });
  }

  beforeHide(id: number): Promise<PopupItemConfig | void> {
    const { popups } = this.state;
    const popup = popups.get(id);
    if (!popup) {
      return Promise.resolve();
    }
    popup.overlayAnimation = {
      from: (popup.overlayAnimation || this.overlayAnimation)?.to,
      to: (popup.overlayAnimation || this.overlayAnimation)?.from,
    };

    if (popup.config.closeAnimation) {
      popup.config.animation = popup.config.closeAnimation;
    } else {
      // 如果初始的动画不是空，直接相反过来使用
      if (!isEmpty(popup._originConfig.animation)) {
        popup.config.animation = {
          from: popup.config.animation?.to,
          to: popup.config.animation?.from,
        };
      } else {
        // 为空时如果是center 开始结束动画不一致要特殊判断
        popup.config.animation =
          popup.config.placement === 'center'
            ? this.closeAnimationOnCenter
            : {
                from: popup.config.animation?.to,
                to: popup.config.animation?.from,
              };
      }
    }
    popups.set(id, popup);
    this.setState({ popups });

    return new Promise<PopupItemConfig>((resolve) => {
      // 等待动画执行完毕
      setTimeout(() => resolve(popup), popup?.config.duration);
    });
  }

  onAnimationEnd(id: number) {
    const isCloseAnimation = this._records.has(id);
    const { popups } = this.state;
    const popup = popups.get(id);

    if (!isCloseAnimation) {
      this._records.set(id, true);
      popup?.config?.onAnimationEnd?.();
    } else {
      popup?.config?.onCloseAnimationEnd?.();
      this._records.delete(id);
    }
  }

  getAllPopups() {
    return this.state.popups;
  }

  creatPopupContent(popup: PopupItemConfig) {
    const { element, config, id, overlayAnimation, popupVisible } = popup;
    const wrapperStyle = {
      ...placementStyle(config.placement, this.context.theme),
      // 小于110会被遮罩层盖住
      zIndex: config.zIndex && config.zIndex > 110 ? config.zIndex : 110,
      borderRadius: config.placement === 'center' ? 8 : 0,
      ...config.wrapperStyle,
    };

    return (
      <View
        pointerEvents={config.pointerEvents}
        style={[styles.root, config.placement === 'center' ? styles.center : null]}
        key={`popup_${id}`}
      >
        {/* overlay */}
        {config.showOverlay && popupVisible ? (
          <TouchableWithoutFeedback
            onPress={() => {
              config.closeOnOverlay && this.hidePopup(id);
            }}
          >
            <AnimationView
              duration={config.duration}
              style={[
                styles.container,
                {
                  width: Dimensions.get('screen').width,
                  height: Dimensions.get('screen').height,
                },
              ]}
              delay={config.delay}
              animation={overlayAnimation}
              easing={config.easing}
            />
          </TouchableWithoutFeedback>
        ) : null}
        {/* content */}
        <AnimationView
          style={wrapperStyle}
          duration={config.duration}
          delay={config.delay}
          easing={config.easing}
          animation={config.animation}
          placement={config.placement}
          gestureCallback={() => this.hidePopup(id)}
          gesture={config.gesture}
          gestureDirection={config.gestureDirection}
          // onAnimationEnd={() => this.onAnimationEnd(id)}
          needsOffscreenAlphaCompositing // 处理android 有阴影时动画失效
          useNativeDriver={!isWeb}
        >
          {element}
        </AnimationView>
      </View>
    );
  }

  render(): React.ReactNode {
    const elements = [...(this.state.popups?.values() || [])]?.map((item) => this.creatPopupContent(item));
    this.hasPopup = elements.length > 0;
    return (
      <View pointerEvents={this.hasPopup ? 'box-none' : 'none'} style={styles.root}>
        {elements}
      </View>
    );
  }
}

export const PopupContainer = (props: PropsWithChildren<any>) => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        {props.children}
        <Popup
          ref={(c) => {
            if (c) Popup.popupInstance = c;
          }}
        />
      </View>
    </GestureHandlerRootView>
  );
};
