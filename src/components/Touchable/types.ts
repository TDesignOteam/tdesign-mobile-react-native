import { ReactElement } from 'react';
import { TouchableOpacityProps, TouchableHighlightProps } from 'react-native';

interface TDTouchableHighlightProps extends TouchableOpacityProps {
  mode?: 'highlight';
  // throttleTime?: number;
  onPress?: () => void;
}
interface TDTouchableNoneProps extends TouchableOpacityProps {
  mode?: 'none';
  // throttleTime?: number;
  onPress?: () => void;
}

interface TDTouchableOpacityProps extends TouchableHighlightProps {
  mode?: 'opacity';
  // throttleTime?: number;
  onPress?: () => void;
}

type ITouchable = (props: TDTouchableOpacityProps | TDTouchableNoneProps | TDTouchableHighlightProps) => ReactElement;

export type { TDTouchableHighlightProps, TDTouchableOpacityProps, ITouchable };
