import { TouchableHighlight as RNTouchableHighlight, TouchableHighlightProps } from 'react-native';

const TouchableHighlight = (props: TouchableHighlightProps) => {
  const { children, ...others } = props;
  return <RNTouchableHighlight {...others}>{children}</RNTouchableHighlight>;
};

TouchableHighlight.displayName = 'TouchableHighlight';
TouchableHighlight.defaultProps = {
  activeOpacity: 0.8,
  underlayColor: '#f5f5f5',
};
export default TouchableHighlight;
