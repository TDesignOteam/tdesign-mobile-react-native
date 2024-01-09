/**
 * title: Popup 弹出层
 * description: 由其他控件触发，屏幕滑出或弹出一块自定义内容区域。
 * spline: base
 * isComponent: true
 * toc: false
 */
import { View, Button, Popup, PlacementProps, Text, PopupContainer } from 'tdesign-react-native/components';
import { Section, CodeSpace, H3, P, CodeSpaceOnlyDoc } from '@src/../example/src/components';

const UsageDemo = () => {
  return <PopupContainer>{/* {<App />} */}</PopupContainer>;
};

const BaseDemo = () => {
  const onPress = (placement: PlacementProps = 'center') => {
    const id = Popup.show(
      <Button
        style={{ marginTop: 10 }}
        content={'消失'}
        onPress={() => {
          Popup.hide(id);
        }}
      />,
      {
        placement,
        gesture: true,
      },
    );
  };

  return (
    <View className="flex1">
      <Button style={{ marginTop: 10 }} content={'center'} onPress={() => onPress()} />
      <Button style={{ marginTop: 10 }} content={'top'} onPress={() => onPress('top')} />
      <Button style={{ marginTop: 10 }} content={'bottom'} onPress={() => onPress('bottom')} />
      <Button style={{ marginTop: 10 }} content={'right'} onPress={() => onPress('right')} />
      <Button style={{ marginTop: 10 }} content={'left'} onPress={() => onPress('left')} />
    </View>
  );
};

const CustomDemo1 = () => {
  return (
    <View className="flex1">
      <Button
        style={{ marginTop: 10 }}
        content={'自定义展示'}
        onPress={() => {
          const id = Popup.show(
            <>
              <View>
                <Text>自定义展示</Text>
              </View>
              <Button
                style={{ marginTop: 10 }}
                content={'消失'}
                onPress={() => {
                  Popup.hide(id);
                }}
              />
            </>,
            {
              placement: 'bottom',
            },
          );
        }}
      />
    </View>
  );
};

const CustomDemo2 = () => {
  return (
    <View className="flex1">
      <Button
        style={{ marginTop: 10 }}
        content={'自定义动画'}
        onPress={() => {
          const id = Popup.show(
            <>
              <View>
                <Text>自定义动画</Text>
              </View>
              <Button
                style={{ marginTop: 10 }}
                content={'消失'}
                onPress={() => {
                  Popup.hide(id);
                }}
              />
            </>,
            {
              animation: {
                from: { transform: [{ rotate: '0deg' }], opacity: 0 },
                to: { transform: [{ rotate: '180deg' }], opacity: 1 },
              },
            },
          );
        }}
      />
    </View>
  );
};

const Demo = () => {
  return (
    <>
      <Section>
        <P>使用popup前需要引入使用PopupContainer容器包裹应用</P>
        <CodeSpaceOnlyDoc>
          <UsageDemo />
        </CodeSpaceOnlyDoc>
      </Section>
      <Section>
        <H3>1.弹出方向</H3>
        <CodeSpace>
          <BaseDemo />
        </CodeSpace>
      </Section>
      <Section>
        <H3>2.弹出内容自定义</H3>
        <CodeSpace>
          <CustomDemo1 />
        </CodeSpace>
      </Section>
      <Section>
        <H3>3.弹出动画自定义</H3>
        <CodeSpace>
          <CustomDemo2 />
        </CodeSpace>
      </Section>
    </>
  );
};

export default Demo;
