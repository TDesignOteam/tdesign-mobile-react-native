/**
 * title: Toast 轻提示
 * description: 用于轻量级反馈或提示，不会打断用户操作。
 * spline: base
 * isComponent: true
 * toc: false
 */
import { View, Button, Toast } from 'tdesign-react-native/components';
import { CheckCircleIcon } from 'tdesign-icons-react-native/src';
import { Section, CodeSpace, H3 } from '@src/../example/src/components';

const Demo = () => {
  return (
    <>
      <Section>
        <H3>1.类型</H3>
        <CodeSpace>
          <View>
            <Button
              content={'纯文本'}
              onPress={() => {
                Toast.show({
                  text: '轻提示文字内容',
                });
              }}
            />
            <Button
              style={{ marginTop: 10 }}
              content={'带图标横向'}
              onPress={() => {
                Toast.show({
                  text: '带图标横向',
                  layout: 'horizontal',
                  icon: <CheckCircleIcon />,
                });
              }}
            />
            <Button
              style={{ marginTop: 10 }}
              content={'带图标竖向'}
              onPress={() => {
                Toast.show({
                  text: '带图标竖向',
                  icon: <CheckCircleIcon />,
                });
              }}
            />
            <Button
              style={{ marginTop: 10 }}
              content={'长文本'}
              onPress={() => {
                Toast.show({
                  text: '这是一段很长的文字超级长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长',
                });
              }}
            />
          </View>
        </CodeSpace>
      </Section>
      <Section>
        <H3>2.展示时间</H3>
        <CodeSpace>
          <View>
            <Button
              content={'展示1秒'}
              onPress={() => {
                Toast.show({
                  text: '展示1秒',
                });
              }}
            />
            <Button
              style={{ marginTop: 10 }}
              content={'展示3秒'}
              onPress={() => {
                Toast.show({
                  duration: 3000,
                  text: '展示3秒',
                });
              }}
            />
          </View>
        </CodeSpace>
      </Section>
      <Section>
        <H3>3.展示遮罩层</H3>
        <CodeSpace>
          <Button
            content={'展示遮罩层'}
            onPress={() => {
              Toast.show({
                text: '轻提示文字内容',
                showOverlay: true,
              });
            }}
          />
        </CodeSpace>
      </Section>
      <Section>
        <H3>4.回调函数</H3>
        <CodeSpace>
          <Button
            content={'隐藏后的回调'}
            onPress={() => {
              Toast.show({
                text: '轻提示文字内容',
                onHide: () => {
                  console.log('隐藏了');
                },
              });
            }}
          />
        </CodeSpace>
      </Section>
      <Section>
        <H3>5.简易调用</H3>
        <CodeSpace>
          <Button
            content={'文字toast'}
            onPress={() => {
              Toast.text('文字toast');
            }}
          />
          <Button
            style={{ marginTop: 10 }}
            content={'成功toast'}
            onPress={() => {
              Toast.success('成功toast');
            }}
          />
          <Button
            style={{ marginTop: 10 }}
            content={'失败toast'}
            onPress={() => {
              Toast.error('失败toast');
            }}
          />
        </CodeSpace>
      </Section>
    </>
  );
};

export default Demo;
