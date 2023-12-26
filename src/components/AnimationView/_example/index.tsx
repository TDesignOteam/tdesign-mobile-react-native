/**
 * title: AnimationView 动画容器
 * description: 执行特定的动画
 * spline: base
 * isComponent: true
 * toc: false
 */
import { View, Button, AnimationView } from 'tdesign-react-native/components';
import { Section, CodeSpace, H3, H5, P } from '@src/../example/src/components';
import { useState } from 'react';
import { Easing } from 'react-native-reanimated';
import { Directions } from 'react-native-gesture-handler';

const NormalDemo = () => {
  const [toggle, setToggle] = useState(false);
  const fromStyle = { width: 20, height: 20, backgroundColor: 'red', opacity: 1, transform: [{ translateX: 0 }] };
  const toStyle = { width: 50, height: 50, backgroundColor: 'blue', opacity: 0.5, transform: [{ translateX: 100 }] };
  return (
    <View style={{ height: 50 }} className="flexRow flexBetween gapX40 px16">
      <AnimationView animation={!toggle ? { from: fromStyle, to: toStyle } : { from: toStyle, to: fromStyle }} />
      <Button onPress={() => setToggle(!toggle)} size="small" theme="primary" content={'重复动画'} />
    </View>
  );
};

const DurationDemo = () => {
  const [toggle, setToggle] = useState(false);
  const fromStyle = { width: 20, height: 20, backgroundColor: 'red', opacity: 1, transform: [{ translateX: 0 }] };
  const toStyle = { width: 50, height: 50, backgroundColor: 'blue', opacity: 0.5, transform: [{ translateX: 100 }] };
  return (
    <View style={{ height: 50 }} className="flexRow flexBetween gapX40 px16">
      <AnimationView
        duration={2000}
        animation={!toggle ? { from: fromStyle, to: toStyle } : { from: toStyle, to: fromStyle }}
      />
      <Button onPress={() => setToggle(!toggle)} size="small" theme="primary" content={'重复动画'} />
    </View>
  );
};

const DelayDemo = () => {
  const [toggle, setToggle] = useState(false);
  const fromStyle = { width: 20, height: 20, backgroundColor: 'red', opacity: 1, transform: [{ translateX: 0 }] };
  const toStyle = { width: 50, height: 50, backgroundColor: 'blue', opacity: 0.5, transform: [{ translateX: 100 }] };
  return (
    <View style={{ height: 50 }} className="flexRow flexBetween gapX40 px16">
      <AnimationView
        delay={2000}
        animation={!toggle ? { from: fromStyle, to: toStyle } : { from: toStyle, to: fromStyle }}
      />
      <Button onPress={() => setToggle(!toggle)} size="small" theme="primary" content={'重复动画'} />
    </View>
  );
};

const EasingDemo = () => {
  const [toggle, setToggle] = useState(false);
  const fromStyle = { width: 20, height: 20, backgroundColor: 'red', opacity: 1, transform: [{ translateX: 0 }] };
  const toStyle = { width: 50, height: 50, backgroundColor: 'blue', opacity: 0.5, transform: [{ translateX: 100 }] };
  return (
    <View style={{ height: 50 }} className="flexRow flexBetween gapX40 px16">
      <AnimationView
        easing={Easing.bounce}
        animation={!toggle ? { from: fromStyle, to: toStyle } : { from: toStyle, to: fromStyle }}
      />
      <Button onPress={() => setToggle(!toggle)} size="small" theme="primary" content={'重复动画'} />
    </View>
  );
};

const GestureDemo = () => {
  const [toggle, setToggle] = useState(false);
  const fromStyle = { width: 20, height: 20, backgroundColor: 'red', opacity: 1, transform: [{ translateX: 0 }] };
  const toStyle = { width: 50, height: 50, backgroundColor: 'blue', opacity: 0.5, transform: [{ translateX: 100 }] };
  return (
    <View>
      <View style={{ height: 50 }} className="flexRow flexBetween gapX40 px16">
        <AnimationView
          gestureDirection={!toggle ? Directions.LEFT : Directions.RIGHT}
          gesture
          gestureCallback={() => setToggle(!toggle)}
          animation={!toggle ? { from: fromStyle, to: toStyle } : { from: toStyle, to: fromStyle }}
        />
        <Button onPress={() => setToggle(!toggle)} size="small" theme="primary" content={'重复动画'} />
      </View>
      <P>
        动画左右滑动试试，当滑动距离小于三分之一时会重置动画，大于三分之一时会触发gestureCallback定义的事件，用于某些动画组件的交互场景
      </P>
    </View>
  );
};

const Demo = () => {
  return (
    <>
      <Section>
        <H3>1.基础</H3>
        <H5>普通动画</H5>
        <CodeSpace>
          <NormalDemo />
        </CodeSpace>
        <H5>动画时间</H5>
        <CodeSpace>
          <DurationDemo />
        </CodeSpace>
        <H5>延迟动画</H5>
        <CodeSpace>
          <DelayDemo />
        </CodeSpace>
        <H5>动画函数</H5>
        <CodeSpace>
          <EasingDemo />
        </CodeSpace>
      </Section>
      <Section>
        <H3>2.手势</H3>
        <H5>动画配合手势</H5>
        <CodeSpace>
          <GestureDemo />
        </CodeSpace>
      </Section>
    </>
  );
};
export default Demo;
