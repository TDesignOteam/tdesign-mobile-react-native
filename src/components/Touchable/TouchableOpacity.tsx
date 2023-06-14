import { TouchableOpacity as RNTouchableOpacity, TouchableOpacityProps } from 'react-native';

export const TouchableOpacity = (props: TouchableOpacityProps) => {
  const { children, ...others } = props;
  return <RNTouchableOpacity {...others}>{children}</RNTouchableOpacity>;
};

TouchableOpacity.displayName = 'TouchableOpacity';
TouchableOpacity.defaultProps = {
  activeOpacity: 0.6,
};
