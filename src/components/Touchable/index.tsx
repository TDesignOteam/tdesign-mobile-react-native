import { View } from 'react-native';
import TouchableOpacity from './TouchableOpacity';
// import { useThrottleFn } from '../../../hooks';
import type { ITouchable } from './types';

export const Touchable: ITouchable = (props) => {
  const { children, mode = 'opacity', disabled, onPress, ...others } = props;

  const childElement = disabled ? <View style={{ opacity: 0.5 }}>{children}</View> : children;

  switch (mode) {
    // 先放在这里, 目前用不到highlight这种模式 统一opacity就可以
    case 'none':
      return (
        <TouchableOpacity disabled={disabled} activeOpacity={1} onPress={onPress} {...others}>
          {childElement}
        </TouchableOpacity>
      );
    default:
      return (
        <TouchableOpacity disabled={disabled} onPress={onPress} {...others}>
          {childElement}
        </TouchableOpacity>
      );
  }
};

export default Touchable;
