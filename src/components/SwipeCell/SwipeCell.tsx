import { isString } from 'lodash';
import { PropsWithChildren, useRef } from 'react';
import { Animated } from 'react-native';
import SwipeableView from 'react-native-gesture-handler/Swipeable';
import { View, Touchable, Text } from '../index';
import { SwipeCellProps, SwipeCellItemProps } from './types';

const refMap = new Map();

export const SwipeCell = (props: PropsWithChildren<SwipeCellProps>) => {
  const { children, right, left, onSwipeableOpen, onSwipeableClose, id } = props;
  const swipeCellRef = useRef<SwipeableView | null>(null);

  const close = () => {
    swipeCellRef?.current?.close();
  };

  const handleRef = (ref: SwipeableView) => {
    swipeCellRef.current = ref;
    refMap.set(id, ref);
  };

  const totalWidth = (config: SwipeCellItemProps[]) => {
    const everyHasWidth = config?.every((item) => item.width !== undefined || item?.style?.width !== undefined);
    if (everyHasWidth) {
      return config?.reduce((acc, item) => acc + (item.width ?? Number(item?.style?.width)), 0);
    }
    return 0;
  };

  const renderItem = (itemConfig: SwipeCellItemProps, x: number, progress: Animated.AnimatedInterpolation<number>) => {
    const transX = progress.interpolate({
      inputRange: [0, 1],
      outputRange: [x, 1],
    });

    const onPress = () => {
      itemConfig?.onPress?.();
      close();
    };

    return (
      <Animated.View style={{ flex: 1, transform: [{ translateX: transX }] }} key={x}>
        <Touchable
          style={[{ alignItems: 'center', flex: 1, justifyContent: 'center' }, { ...(itemConfig.style || {}) }]}
          onPress={onPress}
        >
          {isString(itemConfig.text) ? (
            <Text style={itemConfig?.textStyle || {}}>{itemConfig.text}</Text>
          ) : (
            itemConfig.text
          )}
        </Touchable>
      </Animated.View>
    );
  };

  const renderRightActions = (progress: Animated.AnimatedInterpolation<number>) => {
    if (!right || right?.length === 0) {
      return null;
    }
    // 如果按钮中有些没有规定宽度，则默认为整行撑开
    const _totalWidth = totalWidth(right);

    return (
      <Animated.View
        style={
          _totalWidth
            ? { width: _totalWidth, flexDirection: 'row' }
            : { flex: 1, flexDirection: 'row', justifyContent: 'center' }
        }
      >
        {right?.map((item, index) => {
          // 计算到边的距离
          const x = _totalWidth - totalWidth(right.slice(0, index));
          return renderItem(item, x, progress);
        })}
      </Animated.View>
    );
  };

  const renderLeftActions = (progress: Animated.AnimatedInterpolation<number>) => {
    if (!left || left?.length === 0) {
      return null;
    }
    // 如果按钮中有些没有规定宽度，则默认为整行撑开
    const _totalWidth = totalWidth(left);

    return (
      <Animated.View
        style={
          _totalWidth
            ? { width: _totalWidth, flexDirection: 'row' }
            : { flex: 1, flexDirection: 'row', justifyContent: 'center' }
        }
      >
        {left?.map((item, index) => {
          // 计算到边的距离
          const x = totalWidth(left.slice(0, index));
          return renderItem(item, -x, progress);
        })}
      </Animated.View>
    );
  };

  const onSwipeableWillOpen = () => {
    [...refMap.entries()].forEach(([key, ref]) => {
      if (key !== id && ref) {
        ref?.close?.();
      }
    });
  };

  return (
    <SwipeableView
      ref={handleRef}
      friction={2}
      leftThreshold={40}
      rightThreshold={40}
      enableTrackpadTwoFingerGesture
      overshootRight={false}
      overshootLeft={false}
      renderLeftActions={renderLeftActions}
      renderRightActions={renderRightActions}
      onSwipeableOpen={(direction) => {
        onSwipeableOpen?.(direction);
      }}
      onSwipeableWillOpen={onSwipeableWillOpen}
      onSwipeableClose={(direction) => {
        onSwipeableClose?.(direction);
      }}
    >
      <View className="bg">{children}</View>
    </SwipeableView>
  );
};
