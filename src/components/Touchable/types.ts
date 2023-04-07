import { ReactElement } from 'react';
import { TouchableOpacityProps, TouchableHighlightProps } from 'react-native';

// 交互统一的场景,highlight暂时用不到, 所以没有在ITouchable定义,
interface ITouchableHighlightProps extends TouchableOpacityProps {
  mode?: 'highlight';
  // throttleTime?: number;
  onPress?: () => void;
}
interface ITouchableNoneProps extends TouchableOpacityProps {
  mode?: 'none';
  // throttleTime?: number;
  onPress?: () => void;
}

interface ITouchableOpacityProps extends TouchableHighlightProps {
  mode?: 'opacity';
  // throttleTime?: number;
  onPress?: () => void;
}

type ITouchable = (props: ITouchableOpacityProps | ITouchableNoneProps) => ReactElement;

export type { ITouchableHighlightProps, ITouchableOpacityProps, ITouchable };
