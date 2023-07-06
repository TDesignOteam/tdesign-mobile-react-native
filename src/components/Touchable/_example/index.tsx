/**
 * title: Touchable 触摸操作
 * description: 需要点击的区域可以使用Touchable包裹，形成点击区域
 * spline: base
 * isComponent: true
 * toc: false
 */

import { View, Touchable, Text } from 'tdesign-react-native/components';
import { Section, CodeSpace, H3, H4, P } from '@src/../example/src/components';

const Demo = () => (
  <>
    <Section>
      <P>View组件不支持直接传入点击事件，需要点击的部分需要用Touchable组件包裹</P>
      <H3>1.类型</H3>
      <H4>opacity</H4>
      <CodeSpace>
        <View className="flexCenter">
          <Touchable onPress={() => console.log('点击')}>
            <View className="flexCenter bgBrand mt24" style={{ width: 150, height: 80 }}>
              <Text className="white">默认透明</Text>
            </View>
          </Touchable>
        </View>
      </CodeSpace>
      <H4>highlight</H4>
      <CodeSpace>
        <View className="flexCenter">
          <Touchable mode="highlight" onPress={() => console.log('点击')}>
            <View className="flexCenter bgBrand mt24" style={{ width: 150, height: 80 }}>
              <Text className="white">highlight</Text>
            </View>
          </Touchable>
        </View>
      </CodeSpace>
      <H4>none</H4>
      <CodeSpace>
        <View className="flexCenter">
          <Touchable mode="none" onPress={() => console.log('点击')}>
            <View className="flexCenter bgBrand mt24" style={{ width: 150, height: 80 }}>
              <Text className="white">无反馈</Text>
            </View>
          </Touchable>
        </View>
      </CodeSpace>
    </Section>
    <Section>
      <H3>2.禁止点击</H3>
      <CodeSpace>
        <View className="flexCenter">
          <Touchable disabled onPress={() => console.log('点击')}>
            <View className="flexCenter bgBrand mt24" style={{ width: 150, height: 80 }}>
              <Text className="white">disabled</Text>
            </View>
          </Touchable>
        </View>
      </CodeSpace>
    </Section>
  </>
);
export default Demo;
