import {
  View as RnView,
  ScrollView as RnScrollView,
  Text as RnText,
  Image as RnImage,
  TextInput as RnTextInput,
  ScrollViewProps,
  ViewProps,
  TextProps,
  TextInputProps,
  ImageProps,
  ViewStyle,
  ImageStyle,
  TextStyle,
} from 'react-native';
import WrapperComponent from './WrapperComponent';

export const View = WrapperComponent<ViewProps, ViewStyle>(RnView);
export const ScrollView = WrapperComponent<ScrollViewProps, ViewStyle>(RnScrollView);
export const Image = WrapperComponent<ImageProps, ImageStyle>(RnImage);
export const Text = WrapperComponent<TextProps, TextStyle>(RnText);
export const TextInput = WrapperComponent<TextInputProps, TextStyle>(RnTextInput);
export { WrapperComponent };
