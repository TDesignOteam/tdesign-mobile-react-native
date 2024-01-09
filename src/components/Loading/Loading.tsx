import { useEffect } from 'react';
import { View } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
  Easing,
  cancelAnimation,
} from 'react-native-reanimated';
import { Toast } from '../Toast';
import type { LoadingProps, LoadingStaticProps } from './types';

export const Loading: React.FC<LoadingProps> & LoadingStaticProps = (props) => {
  const { size = 'normal', duration = 1000, theme = 'default', children } = props;
  const loadingSize = {
    small: 20,
    normal: 36,
    large: 48,
  };
  const rotate = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotateZ: `${rotate.value}deg` }],
  }));

  useEffect(() => {
    rotate.value = withRepeat(
      withTiming(360, {
        duration,
        easing: Easing.linear,
      }),
      -1,
    );
    return () => {
      cancelAnimation(rotate);
    };
  }, [duration, rotate]);

  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {children ? (
        <Animated.View style={[animatedStyle]}>{children}</Animated.View>
      ) : (
        <Animated.Image
          // eslint-disable-next-line global-require
          source={theme === 'white' ? require('./loading-white.png') : require('./loading.png')}
          style={[{ width: loadingSize[size], height: loadingSize[size] }, animatedStyle]}
        />
      )}
    </View>
  );
};

Loading.show = (options) => {
  const { text = '请稍候...', layout = 'vertical' } = options || {};
  Loading.id = Toast.show({
    text,
    layout,
    duration: 0,
    icon: <Loading size="large" theme="white" />,
    pointerEvents: 'box-only',
    ...options,
  });
};

Loading.hide = () => Toast.hide(Loading.id);
