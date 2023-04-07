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
} from 'react-native';
import WrapperComponent from './WrapperComponent';

export const View = WrapperComponent<ViewProps>(RnView);
export const ScrollView = WrapperComponent<ScrollViewProps>(RnScrollView);
export const Image = WrapperComponent<ImageProps>(RnImage);
export const Text = WrapperComponent<TextProps>(RnText);
export const TextInput = WrapperComponent<TextInputProps>(RnTextInput);
export { WrapperComponent };
