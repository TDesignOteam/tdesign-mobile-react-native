/**
 * title: Dialog 对话框
 * description: 一种打断当前操作的模态视图，用于显示重要提示或请求用户进行重要操作
 * spline: base
 * isComponent: true
 * toc: false
 */

import { View, Button, Dialog, Text } from 'tdesign-react-native/components';
import { Section, CodeSpace, H3 } from '@src/../example/src/components';

const Demo = () => (
  <>
    <Section>
      <H3>1.基础</H3>
      <CodeSpace>
        <View className="gapY10">
          <Button
            content={'单行标题'}
            onPress={() => {
              Dialog.show({
                title: '对话框标题',
              });
            }}
          />
          <Button
            content={'多行标题最大高度'}
            onPress={() => {
              Dialog.show({
                title: '对话框标题告知当前状态、信息和解决方法，等内容。描述文案尽可能控制在三行内',
              });
            }}
          />
          <Button
            content={'带说明文本'}
            onPress={() => {
              Dialog.show({
                title: '对话框标题',
                content: '对话框标题告知当前状态、信息和解决方法，等内容。描述文案尽可能控制在三行内',
              });
            }}
          />
          <Button
            content={'最大高度说明文本'}
            onPress={() => {
              Dialog.show({
                title: '对话框标题',
                content:
                  '告知当前状态、信息和解决方法，等内容。描述文案尽可能控制在三行内。告知当前状态、信息和解决方法，等内容。描述文案尽可能控制在三行内。告知当前状态、信息和解决方法，等内容。描述文案尽可能控制在三行内。告知当前状态、信息和解决方法，等内容。描述文案尽可能控制在三行内。告知当前状态、信息和解决方法，等内容。描述文案尽可能控制在三行内。告知当前状态、信息和解决方法，等内容。描述文案尽可能控制在三行内。告知当前状态、信息和解决方法，等内容。描述文案尽可能控制在三行内。告知当前状态、信息和解决方法，等内容。描述文案尽可能控制在三行内。告知当前状态、信息和解决方法，等内容。描述文案尽可能控制在三行内。',
              });
            }}
          />
        </View>
      </CodeSpace>
    </Section>
    <Section>
      <H3>2.按钮及排列</H3>
      <CodeSpace>
        <View className="gapY10">
          <Button
            content={'双按钮'}
            onPress={() => {
              Dialog.show({
                title: '对话框标题',
                content: '告知当前状态、信息和解决方法，等内容。描述文案尽可能控制在三行内。',
                buttons: [{ text: '取消' }, { text: '确定' }],
              });
            }}
          />
          <Button
            content={'按钮配置主题'}
            onPress={() => {
              Dialog.show({
                title: '对话框标题',
                content: '告知当前状态、信息和解决方法，等内容。描述文案尽可能控制在三行内。',
                buttons: [
                  { text: '取消', theme: 'primary' },
                  { text: '确定', theme: 'danger' },
                ],
              });
            }}
          />
          <Button
            content={'按钮自定义样式'}
            onPress={() => {
              Dialog.show({
                title: '对话框标题',
                content: '告知当前状态、信息和解决方法，等内容。描述文案尽可能控制在三行内。',
                buttons: [
                  { text: '取消', theme: 'primary' },
                  {
                    text: '自定义',
                    style: { color: 'green' },
                  },
                ],
              });
            }}
          />
          <Button
            content={'按钮竖向排列'}
            onPress={() => {
              Dialog.show({
                title: '对话框标题',
                content: '告知当前状态、信息和解决方法，等内容。描述文案尽可能控制在三行内。',
                buttons: [{ text: '取消' }, { text: '确定' }],
                buttonLayout: 'vertical',
              });
            }}
          />
        </View>
      </CodeSpace>
    </Section>
    <Section>
      <H3>3.自定义样式</H3>
      <CodeSpace>
        <View className="gapY10">
          <Button
            content={'自定义style控制'}
            onPress={() => {
              Dialog.show({
                title: '对话框标题',
                titleStyle: { color: 'green' },
                content: '告知当前状态、信息和解决方法，等内容。描述文案尽可能控制在三行内。',
                contentStyle: { color: 'blue', fontSize: 14 },
                buttons: [{ text: '取消' }, { text: '确定' }],
              });
            }}
          />
          <Button
            content={'自定义元素控制'}
            onPress={() => {
              Dialog.show({
                title: <Text className="success6">对话框标题</Text>,
                content: (
                  <View>
                    <Text className="brand7">告知当前状态、信息和解决方法，等内容。描述文案尽可能控制在三行内。</Text>
                  </View>
                ),
                buttons: [{ text: '取消' }, { text: '确定' }],
              });
            }}
          />
        </View>
      </CodeSpace>
    </Section>
    <Section>
      <H3>4.简易调用</H3>
      <CodeSpace>
        <View className="gapY10">
          <Button
            content={'confirm'}
            onPress={() => {
              Dialog.confirm(
                '对话框标题',
                () => {
                  console.log('onConfirm');
                },
                () => {
                  console.log('onCancel');
                },
              );
            }}
          />
          <Button
            content={'alert'}
            onPress={() => {
              Dialog.alert('对话框标题', () => {
                console.log('onConfirm');
              });
            }}
          />
        </View>
      </CodeSpace>
    </Section>
  </>
);
export default Demo;
