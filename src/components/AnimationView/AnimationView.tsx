import React, { useEffect, useMemo, useRef, ForwardedRef } from 'react';
import { GestureDetector, Gesture, Directions } from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withDelay,
  withTiming,
  runOnJS,
  Easing,
} from 'react-native-reanimated';
import { wrapStyleTransforms, flattenStyle, TRANSFORM_STYLE_PROPERTIES } from './utils';
import { AnimationProps, DIRECTION, AnimationDirections } from './types';

export const AnimationView = React.forwardRef<unknown, AnimationProps>((props, ref: ForwardedRef<any>) => {
  const {
    style,
    duration = 300,
    delay = 0,
    easing = Easing.bezierFn(0.42, 0, 0.58, 1),
    animation,
    placement = 'center',
    gesture,
    gestureCallback,
    gestureDirection,
    ...rest
  } = props;
  const offset = useSharedValue({ x: 0, y: 0 });
  const timestamp = useSharedValue(0);

  const direction: AnimationDirections = gestureDirection ?? DIRECTION[placement] ?? 0;
  const timeConfig = useMemo(() => ({ duration, easing }), [duration, easing]);

  const fromStyle = wrapStyleTransforms(animation?.from);
  const fromFlatten = flattenStyle(fromStyle);
  const toStyle = wrapStyleTransforms(animation?.to);
  const toFlatten = flattenStyle(toStyle);
  const animationSharedValue = useRef<any>({});

  Object.keys(fromFlatten).forEach((key) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    animationSharedValue.current[key] = useSharedValue(fromFlatten[key]);
  });

  const animatedStyles = useAnimatedStyle(() => {
    const result: any = {};
    Object.keys(fromFlatten).forEach((key) => {
      if (TRANSFORM_STYLE_PROPERTIES.indexOf(key) !== -1) {
        if (!result?.transform) {
          result.transform = [];
        }
        result.transform.push({ [key]: animationSharedValue.current[key].value });
      } else {
        result[key] = animationSharedValue.current[key].value;
      }
    });
    return result;
  });

  useEffect(() => {
    Object.keys(toFlatten).forEach((key) => {
      if (animationSharedValue.current[key]) {
        animationSharedValue.current[key].value = withDelay(delay, withTiming(toFlatten[key], timeConfig));
      }
    });
  }, [delay, timeConfig, toFlatten]);

  const gesturePan = Gesture.Pan()
    .onBegin(() => {
      'worklet';

      offset.value = {
        x: toFlatten?.translateX ?? 0,
        y: toFlatten?.translateY ?? 0,
      };
    })
    .onChange((e) => {
      'worklet';

      switch (direction) {
        case Directions.DOWN:
          if (e.changeY + offset.value.y < toFlatten?.translateY ?? 0) {
            return;
          }
          break;
        case Directions.UP:
          if (e.changeY + offset.value.y > toFlatten?.translateY ?? 0) {
            return;
          }
          break;
        case Directions.LEFT:
          if (e.changeX + offset.value.x > toFlatten?.translateX ?? 0) {
            return;
          }
          break;
        case Directions.RIGHT:
          if (e.changeX + offset.value.x < toFlatten?.translateX ?? 0) {
            return;
          }
          break;
      }

      offset.value = {
        x: e.changeX + offset.value.x,
        y: e.changeY + offset.value.y,
      };
      // 更新最新触摸时间
      timestamp.value = new Date().valueOf();

      switch (direction) {
        case Directions.UP:
        case Directions.DOWN:
          // case 'none':
          animationSharedValue.current.translateY.value = offset.value.y;
          break;
        case Directions.LEFT:
        case Directions.RIGHT:
          animationSharedValue.current.translateX.value = offset.value.x;
          break;
      }
    })
    .onFinalize((e) => {
      'worklet';

      const mainAxis = ([Directions.UP, Directions.DOWN] as number[]).includes(direction) ? 'Y' : 'X';

      // 如果滑动方向和定义不一致 返回原位
      if (
        (([Directions.UP, Directions.LEFT] as number[]).includes(direction) && e[`translation${mainAxis}`] > 0) ||
        (([Directions.DOWN, Directions.RIGHT] as number[]).includes(direction) && e[`translation${mainAxis}`] < 0)
      ) {
        animationSharedValue.current[`translate${mainAxis}`].value = withTiming(
          toFlatten[`translate${mainAxis}`],
          timeConfig,
        );
        return;
      }

      // 计算滑动时间，如果很快 速度很大 判断为投掷
      if (Math.abs(e[`translation${mainAxis}`] / (new Date().valueOf() - timestamp.value)) > 5) {
        if (gestureCallback) {
          runOnJS(gestureCallback)();
        }
        return;
      }

      // 不超过三分之一
      const distance = Math.abs(
        (toFlatten?.[`translate${mainAxis}`] ?? 0) - (fromFlatten?.[`translate${mainAxis}`] ?? 0),
      );
      if (distance > 0 && Math.abs(e[`translation${mainAxis}`]) < distance / 3) {
        // 返回原位
        animationSharedValue.current[`translate${mainAxis}`].value = withTiming(
          toFlatten[`translate${mainAxis}`],
          timeConfig,
        );
      } else {
        // 关闭
        if (gestureCallback) {
          runOnJS(gestureCallback)();
        }
      }
    });

  return gesture ? (
    <GestureDetector gesture={gesturePan}>
      <Animated.View ref={ref} style={[style, animatedStyles]} {...rest}>
        {props.children}
      </Animated.View>
    </GestureDetector>
  ) : (
    <Animated.View ref={ref} style={[style, animatedStyles]} {...rest}>
      {props.children}
    </Animated.View>
  );
});
