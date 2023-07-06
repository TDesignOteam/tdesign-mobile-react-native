import { useRef } from 'react';
import { View as RNView } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, runOnJS } from 'react-native-reanimated';
import { ChevronDownIcon } from 'tdesign-icons-react-native/src';
import { isString } from 'lodash';
import { View, Text, Touchable } from '../index';
import { useToggle } from '../../_utils/use-toggle';
import { useTheme } from '../../theme';
import { CollapseProps } from './types';

const DURATION = 300;

export const Collapse = (props: CollapseProps) => {
  const {
    style,
    className,
    headerContainerStyle,
    header,
    headerStyle,
    headerRight,
    headerRightStyle,
    children,
    expandable,
    icon,
    duration = DURATION,
  } = props;
  const { theme } = useTheme();
  const [toggleState, { toggle }] = useToggle(expandable || false);
  const contentRef = useRef<RNView>(null);
  const wrapperHeight = useRef<number>();
  const isAnimating = useRef<boolean>(false);
  const height = useSharedValue(expandable ? 'auto' : 0);
  const translateY = useSharedValue(0);
  const scaleY = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    height: height?.value,
    transform: [{ translateY: translateY.value }, { scaleY: scaleY.value }],
  }));

  const isAnimatingCallback = (value: boolean) => {
    isAnimating.current = value;
  };

  const toggleExpand = () => {
    if (isAnimating.current) {
      return;
    }
    contentRef?.current?.measure?.((x: number, y: number, width: number, _height: number) => {
      wrapperHeight.current = _height;
      isAnimating.current = true;
      toggle();
      if (!toggleState) {
        // 展开
        height.value = 0;
        translateY.value = -_height / 2;
        height.value = withTiming(_height, { duration }, () => {
          runOnJS(isAnimatingCallback)(false);
          height.value = 'auto';
        });
        translateY.value = withTiming(0, { duration });
        scaleY.value = withTiming(1, { duration });
      } else {
        // 收起
        height.value = _height;
        height.value = withTiming(0, { duration }, () => {
          runOnJS(isAnimatingCallback)(false);
        });
        translateY.value = withTiming(-_height / 2, { duration });
        scaleY.value = withTiming(0, { duration });
      }
    });
  };
  return (
    <View style={style} className={className}>
      <Touchable
        onPress={() => {
          toggleExpand();
        }}
      >
        <View className="flexRow flexBetween" style={headerContainerStyle}>
          {isString(header) ? (
            <Text className="text4 fontGray1" style={headerStyle}>
              {header}
            </Text>
          ) : (
            header
          )}
          <View className="flexRow flexCenter gapX4">
            {isString(headerRight) ? <Text style={headerRightStyle}>{headerRight}</Text> : headerRight}
            {icon ? (
              icon(toggleState)
            ) : (
              <View style={toggleState ? { transform: [{ rotateZ: '180deg' }] } : {}}>
                <ChevronDownIcon width="20" height="20" color={theme.colors.fontGray3} />
              </View>
            )}
          </View>
        </View>
      </Touchable>
      <View style={[{ overflow: 'hidden', height: 'auto' }]}>
        <Animated.View style={animatedStyle}>{children}</Animated.View>
      </View>

      <View
        style={{
          position: 'absolute',
          opacity: 0,
          zIndex: -99,
          height: 'auto',
        }}
        ref={contentRef}
      >
        {children}
      </View>
    </View>
  );
};
