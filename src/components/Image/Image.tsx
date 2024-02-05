import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  ImageSourcePropType,
  Platform,
  NativeSyntheticEvent,
  ImageLoadEventData,
  ImageErrorEventData,
  ImageURISource,
} from 'react-native';
import { ImageIcon } from 'tdesign-icons-react-native/src';

import { View, BaseImage } from '../Base';
import { Loading } from '../Loading';

import { useTheme } from '../../theme';
import type { ImageProps, ImageStatusType } from './types';

export const Image: React.FunctionComponent<ImageProps> = (props) => {
  const { theme } = useTheme();
  const {
    source,
    style,
    width = 48,
    height = 48,
    onLoad,
    onError,
    errorIcon,
    shape = 'square',
    backgroundColor = theme.colors.gray1,
    ...otherProps
  } = props;

  const [status, setStatus] = useState<ImageStatusType>();
  const [imageSource, setImageSource] = useState<ImageSourcePropType>(source);
  const sourceRef = useRef<ImageSourcePropType>();
  const newWidth = style?.width || width;
  const newHeight = style?.height || height;
  const radius = {
    circle: theme.spacers.spacer999,
    round: theme.spacers.spacer4,
    square: theme.spacers.spacer0,
  };

  const isSourceEmpty = useCallback((sourceItem: ImageSourcePropType) => {
    const newSource = Array.isArray(sourceItem) ? sourceItem : [sourceItem];
    for (let i = 0, len = newSource.length; i < len; i++) {
      const item = newSource[i];
      if (typeof item === 'number') {
        return false;
      }
      // RN ImageRequireSource经过RNWeb处理后会转为base64的文本，所以这里需要兼容
      if (typeof item === 'string' && item) {
        return false;
      }
      if (item?.uri) {
        return false;
      }
    }
    return true;
  }, []);

  const isUriChange = useCallback((sourceItem: ImageSourcePropType, oldSourceItem?: ImageSourcePropType) => {
    if (!oldSourceItem) {
      return true;
    }

    const newSource = Array.isArray(sourceItem) ? sourceItem : [sourceItem];
    const oldSource = Array.isArray(oldSourceItem) ? oldSourceItem : [oldSourceItem];
    const len = Math.max(newSource.length, oldSource.length);

    for (let i = 0; i < len; i++) {
      const newUri =
        typeof newSource[i] === 'object' && newSource[i] !== null
          ? (newSource[i] as ImageURISource)?.uri
          : newSource[i];
      const oldUri =
        typeof oldSource[i] === 'object' && oldSource[i] !== null
          ? (oldSource[i] as ImageURISource)?.uri
          : oldSource[i];

      if (newUri !== oldUri) {
        return true;
      }
    }
    return false;
  }, []);

  useEffect(() => {
    // 判断没有source就暂时不触发加载
    if (!source) {
      return;
    }

    if (!isUriChange(source, sourceRef.current)) {
      return;
    }

    // 比较时需要原数据，因为经过handleSource处理后会不一样，如相对uri
    sourceRef.current = source;

    let newSource = null;
    if (Array.isArray(source)) {
      // rn-web不支持数组格式,取首个
      if (Platform.OS === 'web') {
        newSource = source?.[0];
      } else {
        newSource = source;
      }
    } else {
      newSource = source;
    }

    // 实测uri=null时，不会触发onError事件，空字符串可以触发但会抛出不能为空的提示，这里重置下状态
    // uri不存在，设为error；存在的话由onLoadStart触发pending设置
    let newStatus = null;
    if (isSourceEmpty(newSource)) {
      newStatus = 'error';
    } else {
      // 上次pending，本次无需处理，交由RNImage触发对应回调即可
      // 上次success，1）要是数组的话，不确定内部使用哪一个作为展示，所以可能不会加载，不能直接设为pending；2）若不是数组，那应该是会加载的
      // 上次error，需要设为pending
      if (status === 'error') {
        newStatus = 'pending';
      } else if (status === 'success') {
        if (Array.isArray(newSource) && newSource.length > 1) {
          // 数组多个元素时，无法知道RNImage内部使用那个uri作为展示，这种情况不重置pending，让RNImage直接加载，所以可能看不到loading
        } else {
          newStatus = 'pending';
        }
      } else {
        newStatus = 'pending';
      }
    }

    if (newStatus === 'pending') {
      if (Platform.OS !== 'web') {
        setStatus(newStatus);
      } else {
        setStatus(newStatus);
        setImageSource(newSource);
      }
    } else if (newStatus === 'error') {
      setStatus(newStatus);
      setImageSource(newSource);
    } else {
      setImageSource(newSource);
    }
  }, [isSourceEmpty, isUriChange, source, status]);

  const handleImageLoaded = useCallback(
    (event: NativeSyntheticEvent<ImageLoadEventData>) => {
      setStatus('success');
      onLoad?.(event);
    },
    [onLoad],
  );

  const handleImageError = useCallback(
    (error: NativeSyntheticEvent<ImageErrorEventData>) => {
      setStatus('error');
      onError?.(error);
    },
    [onError],
  );

  return (
    <View style={[{ overflow: 'hidden', width: newWidth, height: newHeight, borderRadius: radius[shape] }, style]}>
      {/**
       * Android下uri为空，首次加载会触发handleImageError，但列表往下加载再往上查看，此时图片会再触发加载，此时会触发handleImageLoaded
       * 这里需要控制下RNImage的渲染逻辑，不要直接渲染
       */}
      {status !== 'error' && !isSourceEmpty(source) ? (
        <BaseImage
          resizeMode="contain"
          {...otherProps}
          source={imageSource}
          style={{ flex: 1, width: '100%', height: '100%' }}
          onLoad={handleImageLoaded}
          onError={handleImageError}
        />
      ) : null}
      {status === 'pending' && (
        <View className="flexCenter" style={{ position: 'absolute', backgroundColor, width: '100%', height: '100%' }}>
          <Loading size="small" />
        </View>
      )}
      {status === 'error' && (
        <View className="flexCenter" style={{ position: 'absolute', backgroundColor, width: '100%', height: '100%' }}>
          {errorIcon ? errorIcon : <ImageIcon color={theme.colors.gray6} />}
        </View>
      )}
    </View>
  );
};

Image.defaultProps = {
  shape: 'square',
};
