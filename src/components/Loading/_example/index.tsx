/**
 * title: Loading 加载中
 * description: 加载过程中只有图标显示。适用于打开页面或操作完成后模块内等待刷新的加载场景。
 * spline: base
 * isComponent: true
 * toc: false
 */
import { View, Button, Loading, Text } from 'tdesign-react-native/components';
import { RefreshIcon } from 'tdesign-icons-react-native/src';
import { Section, CodeSpace, H3, H4 } from '@src/../example/src/components';

const LoadingDemo = () => {
  return (
    <View>
      <Button
        content={'简单使用'}
        onPress={() => {
          Loading.show();
          setTimeout(() => Loading.hide(), 3000);
        }}
      />
      <Button
        style={{ marginTop: 10 }}
        content={'自定义文字'}
        onPress={() => {
          Loading.show({ text: '请等待' });
          setTimeout(() => Loading.hide(), 3000);
        }}
      />
      <Button
        style={{ marginTop: 10 }}
        content={'自定义布局'}
        onPress={() => {
          Loading.show({ text: '请等待', layout: 'horizontal' });
          setTimeout(() => Loading.hide(), 3000);
        }}
      />
      <Button
        style={{ marginTop: 10 }}
        content={'自定义图标'}
        onPress={() => {
          Loading.show({
            text: '请等待',
            layout: 'horizontal',
            icon: (
              <Loading>
                <RefreshIcon color="blue" />
              </Loading>
            ),
          });
          setTimeout(() => Loading.hide(), 3000);
        }}
      />
    </View>
  );
};

const Demo = () => {
  return (
    <>
      <Section>
        <H3>1.基础使用</H3>
        <H4>尺寸</H4>
        <CodeSpace>
          <View className="flexRow">
            <Loading size="large" />
            <Loading size="normal" />
            <Loading size="small" />
          </View>
        </CodeSpace>
        <H4>主题</H4>
        <CodeSpace>
          <View className="flexRow bgSubComponent">
            <Loading theme="default" />
            <Loading theme="white" />
          </View>
        </CodeSpace>
        <H4>动画速度</H4>
        <CodeSpace>
          <View className="flexRow">
            <Loading duration={6000} />
            <Loading duration={4000} />
            <Loading duration={2000} />
            <Loading duration={1000} />
          </View>
        </CodeSpace>
        <H4>自定义图标</H4>
        <CodeSpace>
          <View className="flexRow">
            <Loading>
              <Text>文字</Text>
            </Loading>
            <Loading>
              <RefreshIcon />
            </Loading>
          </View>
        </CodeSpace>
      </Section>
      <Section>
        <H3>2.弹出层使用</H3>
        <CodeSpace>
          <LoadingDemo />
        </CodeSpace>
      </Section>
    </>
  );
};

export default Demo;
