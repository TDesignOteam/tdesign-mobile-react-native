/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { View, Text } from './index';
// import { TouchableOpacity } from 'react-native';

const BaseDemo = () => {
  const [state, setState] = useState('flexRow');

  const onPressButton = (direation: string) => {
    setState(direation);
  };
  return (
    <View className="flex">
      <Text className="text3 gray8">
        使用封装后的基础组件可以使用className属性，使用theme中定义的atom全部样式及部分其他样式，目前支持View、Text、ScrollView、Image、TextInput
      </Text>
      <Text className="text1 success5">{'className="text1 success5"'}</Text>
      <Text className="text2 error6">{'className="text2 error6"'}</Text>
      <Text className="text3">{'className="text3"'}</Text>
      <Text className="text3b">{'className="text3b"'}</Text>
      <Text className="text3 mx32 warning4">{'className="mx32"'}</Text>
      <Text className="text3 mx32 warning4">{'className="mx64"'}</Text>
      <Text className="text3 my16 warning4">{'className="my16"'}</Text>
      <Text className="text3 my32 warning4">{'className="my32"'}</Text>
      <View style={{ height: 500, backgroundColor: 'aliceblue' }}>
        <Text className="text3 gray8">flex局部</Text>
        <View className="flexRow" style={{ flexWrap: 'wrap' }} />
        <Text className="text3 gray8">{`className="${state}"`}</Text>
        <View className={`flex1 mt12 ${state}`}>
          <View className="bgSuccess" style={{ width: 50, height: 50 }} />
          <View className="bgWarning" style={{ width: 50, height: 50 }} />
          <View className="bgError" style={{ width: 50, height: 50 }} />
        </View>
      </View>
    </View>
  );
};
export default BaseDemo;
