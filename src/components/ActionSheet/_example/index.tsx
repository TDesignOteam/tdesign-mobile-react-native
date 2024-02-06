/**
 * title: ActionSheet 动作面板
 * description: 由用户操作后触发的一种特定的模态弹出框 ，呈现一组与当前情境相关的两个或多个选项。
 * spline: base
 * isComponent: true
 * toc: false
 */
import { View, ActionSheet, Button } from 'tdesign-react-native/components';
import { Section, CodeSpace, H3, P } from '@src/../example/src/components';

const Demo = () => {
  return (
    <>
      <Section>
        <P>用于展示用户头像信息，除了纯展示也可点击进入个人详情等操作。</P>
        <H3>1.类型</H3>
        <CodeSpace>
          <View className="gapY10">
            <Button
              content={'常规使用'}
              onPress={() => {
                const id = ActionSheet.show({
                  title: '常规使用',
                  items: [{ text: '第一项' }, { text: '第二项' }, { text: '第三项' }, { text: '第四项' }],
                  onSelected: (item) => {
                    console.log(item);
                    ActionSheet.hide(id);
                  },
                });
              }}
            />
            <Button
              content={'选项说明'}
              onPress={() => {
                const id = ActionSheet.show({
                  title: '选项说明',
                  items: [
                    { text: '第一项', theme: 'info' },
                    { text: '第二项', theme: 'info' },
                    { text: '第三项', theme: 'error', tip: '说明' },
                    { text: '第四项', theme: 'info', tip: '说明' },
                  ],
                  onSelected: (item) => {
                    console.log(item);
                    ActionSheet.hide(id);
                  },
                });
              }}
            />
            <Button
              content={'隐藏取消按钮'}
              onPress={() => {
                const id = ActionSheet.show({
                  hideCancel: true,
                  title: '隐藏取消按钮',
                  items: [{ text: '第一项' }, { text: '第二项' }, { text: '第三项' }, { text: '第四项' }],
                  onSelected: (item) => {
                    console.log(item);
                    ActionSheet.hide(id);
                  },
                });
              }}
            />
            <Button
              content={'取消按钮文字自定义'}
              onPress={() => {
                const id = ActionSheet.show({
                  cancelText: '自定义',
                  title: '取消按钮文字自定义',
                  items: [{ text: '第一项' }, { text: '第二项' }, { text: '第三项' }, { text: '第四项' }],
                  onSelected: (item) => {
                    console.log(item);
                    ActionSheet.hide(id);
                  },
                });
              }}
            />
            <Button
              content={'点击蒙层不关闭'}
              onPress={() => {
                const id = ActionSheet.show({
                  closeOnOverlay: false,
                  title: '点击蒙层不关闭',
                  items: [{ text: '第一项' }, { text: '第二项' }, { text: '第三项' }, { text: '第四项' }],
                  onSelected: (item) => {
                    console.log(item);
                    ActionSheet.hide(id);
                  },
                });
              }}
            />
          </View>
        </CodeSpace>
      </Section>
      <Section>
        <H3>2.样式</H3>
        <CodeSpace>
          <View className="gapY10">
            <Button
              content={'选项禁用'}
              onPress={() => {
                const id = ActionSheet.show({
                  title: '选项禁用',
                  items: [
                    { text: '第一项' },
                    { text: '第二项', disable: true },
                    { text: '第三项', disable: true },
                    { text: '第四项' },
                  ],
                  onSelected: (item) => {
                    console.log(item);
                    ActionSheet.hide(id);
                  },
                });
              }}
            />
            <Button
              content={'选项主题'}
              onPress={() => {
                const id = ActionSheet.show({
                  title: '选项主题',
                  items: [
                    { text: '第一项', theme: 'warning' },
                    { text: '第二项', theme: 'error' },
                    { text: '第三项', theme: 'success' },
                    { text: '第四项', theme: 'info' },
                  ],
                  onSelected: (item) => {
                    console.log(item);
                    ActionSheet.hide(id);
                  },
                });
              }}
            />
            <Button
              content={'选项左对齐'}
              onPress={() => {
                const id = ActionSheet.show({
                  align: 'left',
                  title: '选项左对齐',
                  items: [{ text: '第一项' }, { text: '第二项' }, { text: '第三项' }, { text: '第四项' }],
                  onSelected: (item) => {
                    console.log(item);
                    ActionSheet.hide(id);
                  },
                });
              }}
            />
          </View>
        </CodeSpace>
      </Section>
    </>
  );
};

export default Demo;
