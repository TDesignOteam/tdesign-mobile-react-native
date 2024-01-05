import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';

// These styles need to be nested in a transform array
export const TRANSFORM_STYLE_PROPERTIES = [
  'perspective',
  'rotate',
  'rotateX',
  'rotateY',
  'rotateZ',
  'scale',
  'scaleX',
  'scaleY',
  'skewX',
  'skewY',
  'translateX',
  'translateY',
  'matrix',
];

// Transforms { translateX: 1 } to { transform: [{ translateX: 1 }]}
export function wrapStyleTransforms(style: TextStyle & ViewStyle & ImageStyle = {}) {
  const wrapped: Record<string, any> = {};
  Object.keys(style || {}).forEach((key) => {
    if (TRANSFORM_STYLE_PROPERTIES.indexOf(key) !== -1) {
      if (!wrapped.transform) {
        wrapped.transform = [];
      }
      wrapped.transform.push({
        [key]: (style as any)[key],
      });
    } else {
      wrapped[key] = (style as any)[key];
    }
  });
  return wrapped;
}

export function flattenStyle(style: any) {
  const flatStyle = { ...StyleSheet.flatten(style) };
  if (flatStyle.transform) {
    flatStyle.transform.forEach((transform: any) => {
      const key = Object.keys(transform)[0];
      flatStyle[key] = transform[key];
    });
    delete flatStyle.transform;
  }
  return flatStyle;
}
