import { useMemo } from 'react';
import { TouchableOpacity } from './TouchableOpacity';
import { TouchableHighlight } from './TouchableHighlight';
import type { ITouchable } from './types';

export const Touchable: ITouchable = (props) => {
  const { children, mode = 'opacity', disabled, onPress, style, ...others } = props;

  const _style = useMemo(() => {
    return disabled ? [style, { opacity: 0.5 }] : style;
  }, [style, disabled]);

  switch (mode) {
    case 'none':
      return (
        <TouchableOpacity style={_style} disabled={disabled} activeOpacity={1} onPress={onPress} {...others}>
          {children}
        </TouchableOpacity>
      );
    case 'highlight':
      return (
        <TouchableHighlight style={_style} disabled={disabled} onPress={onPress} {...others}>
          {children}
        </TouchableHighlight>
      );
    default:
      return (
        <TouchableOpacity style={_style} disabled={disabled} onPress={onPress} {...others}>
          {children}
        </TouchableOpacity>
      );
  }
};
