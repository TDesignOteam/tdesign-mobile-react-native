/**
 * title: Message 消息提醒
 * description: 用于页面消息通知提示，具有成功提示、提醒、警示等功能，通常在顶部出现，可以自动消失或点击关闭。
 * spline: base
 * isComponent: true
 * toc: false
 */
import { View, Button, Message } from 'tdesign-react-native/components';
import { ErrorCircleIcon } from 'tdesign-icons-react-native/src';
import { Section, CodeSpace, H3 } from '@src/../example/src/components';

const BaseDemo = () => {
  return (
    <View>
      <Button
        content={'纯文字通知'}
        onPress={() => {
          Message.show({
            text: '这是一条纯文字通知',
          });
        }}
      />
      <Button
        style={{ marginTop: 10 }}
        content={'带图标通知'}
        onPress={() => {
          Message.show({
            text: '这是一条带图标通知',
            icon: <ErrorCircleIcon />,
          });
        }}
      />
      <Button
        style={{ marginTop: 10 }}
        content={'带关闭通知'}
        onPress={() => {
          Message.show({
            text: '这是一条带关闭通知',
            icon: <ErrorCircleIcon />,
            closeBtn: true,
          });
        }}
      />
      <Button
        style={{ marginTop: 10 }}
        content={'带按钮通知'}
        onPress={() => {
          const id = Message.show({
            text: '这是一条带按钮通知',
            icon: <ErrorCircleIcon />,
            closeBtn: (
              <Button
                containerStyle={{ height: 24 }}
                size="small"
                theme="primary"
                variant="outline"
                content="关闭"
                onPress={() => Message.hide(id)}
              />
            ),
          });
        }}
      />
      <Button
        style={{ marginTop: 10 }}
        content={'常驻通知'}
        onPress={() => {
          Message.show({
            text: '这是一条常驻通知',
            icon: <ErrorCircleIcon />,
            duration: 0,
            closeBtn: true,
          });
        }}
      />
    </View>
  );
};

const StatusDemo = () => {
  return (
    <View>
      <Button
        content={'普通通知'}
        onPress={() => {
          Message.show({
            text: '这是一条普通通知',
            icon: <ErrorCircleIcon />,
          });
        }}
      />
      <Button
        style={{ marginTop: 10 }}
        content={'警示提示通知'}
        onPress={() => {
          Message.show({
            text: '这是一条警示提示通知',
            theme: 'warning',
            icon: <ErrorCircleIcon />,
          });
        }}
      />
      <Button
        style={{ marginTop: 10 }}
        content={'成功提示通知'}
        onPress={() => {
          Message.show({
            text: '这是一条成功提示通知',
            theme: 'success',
            icon: <ErrorCircleIcon />,
          });
        }}
      />
      <Button
        style={{ marginTop: 10 }}
        content={'错误提示通知'}
        onPress={() => {
          Message.show({
            text: '这是一条错误提示通知',
            theme: 'danger',
            icon: <ErrorCircleIcon />,
          });
        }}
      />
    </View>
  );
};

const SimpleDemo = () => {
  return (
    <View>
      <Button
        content={'普通通知'}
        onPress={() => {
          Message.info('这是一条普通的通知信息');
        }}
      />
      <Button
        style={{ marginTop: 10 }}
        content={'警示提示通知'}
        onPress={() => {
          Message.warn('这是一条警示提示通知');
        }}
      />
      <Button
        style={{ marginTop: 10 }}
        content={'成功提示通知'}
        onPress={() => {
          Message.success('这是一条成功提示通知');
        }}
      />
      <Button
        style={{ marginTop: 10 }}
        content={'错误提示通知'}
        onPress={() => {
          Message.error('这是一条错误提示通知');
        }}
      />
    </View>
  );
};

const Demo = () => {
  return (
    <>
      <Section>
        <H3>1.类型</H3>
        <CodeSpace>
          <BaseDemo />
        </CodeSpace>
      </Section>
      <Section>
        <H3>2.状态</H3>
        <CodeSpace>
          <StatusDemo />
        </CodeSpace>
      </Section>
      <Section>
        <H3>3.简易调用</H3>
        <CodeSpace>
          <SimpleDemo />
        </CodeSpace>
      </Section>
    </>
  );
};

export default Demo;
