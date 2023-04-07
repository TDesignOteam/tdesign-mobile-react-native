import { View, Text } from '../Base';
import Touchable from './index';

const BaseDemo = () => (
  <View className="flex">
    <Text className="text3 gray8">View组件不支持直接传入点击事件，需要点击的部分需要用Touchable组件包裹</Text>
    <View className="flexCenter">
      <Touchable mode="opacity" onPress={() => console.log('默认透明!')}>
        <View className="flexCenter bgBrand7 mt24" style={{ width: 150, height: 150 }}>
          <Text className="white">默认透明</Text>
        </View>
      </Touchable>
    </View>
    <View className="flexCenter">
      <Touchable disabled mode="opacity" onPress={() => console.log('默认透明!')}>
        <View className="flexCenter bgBrand7 mt24" style={{ width: 150, height: 150 }}>
          <Text className="white">disabled</Text>
        </View>
      </Touchable>
    </View>
    <View className="flexCenter">
      <Touchable mode="none" onPress={() => console.log('无反馈!')}>
        <View className="flexCenter bgBrand7 mt24" style={{ width: 200, height: 200 }}>
          <Text className="white">无反馈</Text>
        </View>
      </Touchable>
    </View>
  </View>
);
export default BaseDemo;
