/**
 * title: Button 按钮
 * description: 按钮用于开启一个闭环的操作任务，如“删除”对象、“购买”商品等。
 * spline: base
 * isComponent: true
 * toc: false
 */

import { View, Text, Button } from 'tdesign-react-native/components';
import { Section, CodeSpace, H3, H4, P } from '@src/../example/src/components';
import { useState } from 'react';
import Demo4 from './base';

const Demo1 = () => {
  return (
    <View className="mb48">
      <Text className="text3 gray8">风格形式</Text>
      <Button style={{ marginTop: 10 }} content={'默认'} />
      <Button style={{ marginTop: 10 }} variant="outline" content={'outline'} />
      <Button style={{ marginTop: 10 }} variant="text" content={'variant=text'} />
      <Button style={{ marginTop: 10 }} theme="primary" content={'theme=primary'} />
      <Button style={{ marginTop: 10 }} theme="primary" variant="outline" content={'variant=outline'} />
      <Button style={{ marginTop: 10 }} theme="primary" variant="text" content={'variant=text'} />
      <Button style={{ marginTop: 10 }} theme="danger" content={'theme=danger'} />
      <Button style={{ marginTop: 10 }} theme="danger" variant="outline" content={'variant=outline'} />
      <Button style={{ marginTop: 10 }} theme="danger" variant="text" content={'variant=text'} />

      <Text className="text3 gray8 mt12">尺寸</Text>
      <Button style={{ marginTop: 10 }} theme="primary" content={'默认'} />
      <Button style={{ marginTop: 10 }} size="small" theme="primary" content={'size=small'} />
      <Button style={{ marginTop: 10 }} size="large" theme="primary" content={'size=large'} />

      <Text className="text3 gray8 mt12">状态</Text>
      <Button style={{ marginTop: 10 }} disabled theme="primary" content={'disabled'} />
      <Button style={{ marginTop: 10 }} disabled size="small" theme="primary" content={'disabled'} />
      <Button style={{ marginTop: 10 }} disabled size="large" theme="primary" content={'disabled'} />

      <Text className="text3 gray8 mt12">带图标</Text>
      <Button style={{ marginTop: 10 }} iconDirection="column" theme="primary" variant="text" content={'带图标'} />

      <Text className="text3 gray8 mt12">group</Text>
      <View className="flexRow">
        <Button style={{ flex: 1, marginRight: 16 }} theme="primary" content={'主按钮'} />
        <Button style={{ flex: 1 }} theme="primary" variant="outline" content={'次按钮'} />
      </View>
      <View className="flexRow mt12">
        <Button style={{ flex: 1, marginLeft: 16 }} iconDirection="column" variant="text" content={'关注'} />
        <Button style={{ flex: 1, marginRight: 16 }} iconDirection="column" variant="text" content={'转化'} />
        <Button style={{ flex: 2 }} theme="primary" variant="outline" content={'新增约见记录'} />
      </View>
    </View>
  );
};

const Demo3 = function () {
  const [count, setCount] = useState(0);
  return <Button onPress={() => setCount((p) => p + 1)}>{count} </Button>;
};

function Demo2() {
  const [count, setCount] = useState(0);
  return <Button onPress={() => setCount((p) => p + 1)}>{count} </Button>;
}

const Demo = () => (
  <>
    <Section>
      <H3>基础按钮</H3>
      <P>基础类型分为主按钮、次按钮、文字按钮。</P>
      <H4>次按钮</H4>
      <P>
        使用场景：在用户进行的操作为流程中的辅助操作，或者进行不那么重要的交互行为时，选择用次按钮；次要按钮通常和主要按钮一起出现
      </P>
      <CodeSpace>
        <Demo1 />
      </CodeSpace>
    </Section>
    <Section>
      <H3>基础按钮2</H3>
      <P>2基础类型分为主按钮、次按钮、文字按钮。</P>
      <H4>2次按钮</H4>
      <P>
        2使用场景：在用户进行的操作为流程中的辅助操作，或者进行不那么重要的交互行为时，选择用次按钮；次要按钮通常和主要按钮一起出现
      </P>
      <CodeSpace>
        <Demo2 />
      </CodeSpace>
    </Section>
    <Section>
      <H3>基础按钮3</H3>
      <P>3基础类型分为主按钮、次按钮、文字按钮。</P>
      <H4>3次按钮</H4>
      <P>
        3使用场景：在用户进行的操作为流程中的辅助操作，或者进行不那么重要的交互行为时，选择用次按钮；次要按钮通常和主要按钮一起出现
      </P>
      <CodeSpace>
        <Demo3 />
      </CodeSpace>
    </Section>
    <Section>
      <H3>基础按钮4</H3>
      <P>4基础类型分为主按钮、次按钮、文字按钮。</P>
      <H4>4次按钮</H4>
      <P>
        4使用场景：在用户进行的操作为流程中的辅助操作，或者进行不那么重要的交互行为时，选择用次按钮；次要按钮通常和主要按钮一起出现
      </P>
      <CodeSpace>
        <Demo4 />
      </CodeSpace>
    </Section>
  </>
);
export default Demo;
