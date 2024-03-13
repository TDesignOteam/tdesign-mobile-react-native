/**
 * title: SwipeCell 滑动单元格
 * description: 用来承载列表中的更多操作，通过左右滑动来展示，按钮的宽度固定高度根据列表高度而变化。
 * spline: base
 * isComponent: true
 * toc: false
 */
import { View, SwipeCell, Text } from 'tdesign-react-native/components';
import { Section, CodeSpace, H3 } from '@src/../example/src/components';
import { useTheme } from '@src/theme';

const Demo = () => {
  const { theme } = useTheme();
  return (
    <>
      <Section>
        <H3>1.定宽按钮</H3>
        <CodeSpace>
          <SwipeCell
            id="1"
            right={[
              {
                text: '按钮111',
                textStyle: { color: theme.colors.fontWhite1 },
                style: { backgroundColor: theme.colors.error6 },
                width: 50,
                onPress: () => {
                  console.log('按钮1');
                },
              },
              {
                text: '按钮2',
                textStyle: { color: theme.colors.fontWhite1 },
                style: { backgroundColor: theme.colors.warning4 },
                width: 50,
                onPress: () => {
                  console.log('按钮2');
                },
              },
              {
                text: '按钮3',
                textStyle: { color: theme.colors.fontWhite1 },
                style: { backgroundColor: theme.colors.brand7 },
                width: 50,
                onPress: () => {
                  console.log('按钮3');
                },
              },
            ]}
            left={[
              {
                text: '按钮1',
                textStyle: { color: theme.colors.fontWhite1 },
                style: { backgroundColor: theme.colors.error6 },
                width: 50,
                onPress: () => {
                  console.log('按钮1');
                },
              },
              {
                text: '按钮2',
                textStyle: { color: theme.colors.fontWhite1 },
                style: { backgroundColor: theme.colors.warning4 },
                width: 50,
                onPress: () => {
                  console.log('按钮2');
                },
              },
              {
                text: '按钮3',
                textStyle: { color: theme.colors.fontWhite1 },
                style: { backgroundColor: theme.colors.brand7 },
                width: 50,
                onPress: () => {
                  console.log('按钮3');
                },
              },
            ]}
          >
            <View className="pl16">
              <View className={'flexRow flexBetween pr16 bb1 py8'}>
                <View className="flex1 flexRow flexCenterV mr16">
                  <Text className="text3 fontGray1">定宽按钮</Text>
                </View>
                <View className={'flexRow flexCenterV'}>
                  <Text className="text3">左右滑动</Text>
                </View>
              </View>
            </View>
          </SwipeCell>
        </CodeSpace>
      </Section>
      <Section>
        <H3>2.整行按钮</H3>
        <CodeSpace>
          <SwipeCell
            id="2"
            right={[
              {
                text: '按钮1',
                textStyle: { color: theme.colors.fontWhite1 },
                style: { backgroundColor: theme.colors.error6 },
                onPress: () => {
                  console.log('按钮1');
                },
              },
            ]}
            left={[
              {
                text: '按钮1',
                textStyle: { color: theme.colors.fontWhite1 },
                style: { backgroundColor: theme.colors.error6 },
                onPress: () => {
                  console.log('按钮1');
                },
              },
            ]}
          >
            <View className="pl16">
              <View className={'flexRow flexBetween pr16 bb1 py8'}>
                <View className="flex1 flexRow flexCenterV mr16">
                  <Text className="text3 fontGray1">整行按钮</Text>
                </View>
                <View className={'flexRow flexCenterV'}>
                  <Text className="text3">左右滑动</Text>
                </View>
              </View>
            </View>
          </SwipeCell>
        </CodeSpace>
      </Section>
      <Section>
        <H3>3.自动关闭</H3>
        <CodeSpace>
          <View>
            <SwipeCell
              id="3"
              right={[
                {
                  text: '按钮1',
                  textStyle: { color: theme.colors.fontWhite1 },
                  style: { backgroundColor: theme.colors.error6 },
                  width: 50,
                  onPress: () => {
                    console.log('按钮1');
                  },
                },
              ]}
            >
              <View className="pl16">
                <View className={'flexRow flexBetween pr16 bb1 py8'}>
                  <View className="flex1 flexRow flexCenterV mr16">
                    <Text className="text3 fontGray1">自动关闭</Text>
                  </View>
                  <View className={'flexRow flexCenterV'}>
                    <Text className="text3">向左滑动</Text>
                  </View>
                </View>
              </View>
            </SwipeCell>
            <SwipeCell
              id="4"
              right={[
                {
                  text: '按钮1',
                  textStyle: { color: theme.colors.fontWhite1 },
                  style: { backgroundColor: theme.colors.error6 },
                  width: 50,
                  onPress: () => {
                    console.log('按钮1');
                  },
                },
              ]}
            >
              <View className="pl16">
                <View className={'flexRow flexBetween pr16 bb1 py8'}>
                  <View className="flex1 flexRow flexCenterV mr16">
                    <Text className="text3 fontGray1">自动关闭</Text>
                  </View>
                  <View className={'flexRow flexCenterV'}>
                    <Text className="text3">向左滑动</Text>
                  </View>
                </View>
              </View>
            </SwipeCell>
            <SwipeCell
              id="5"
              right={[
                {
                  text: '按钮1',
                  textStyle: { color: theme.colors.fontWhite1 },
                  style: { backgroundColor: theme.colors.error6 },
                  width: 50,
                  onPress: () => {
                    console.log('按钮1');
                  },
                },
              ]}
            >
              <View className="pl16">
                <View className={'flexRow flexBetween pr16 bb1 py8'}>
                  <View className="flex1 flexRow flexCenterV mr16">
                    <Text className="text3 fontGray1">自动关闭</Text>
                  </View>
                  <View className={'flexRow flexCenterV'}>
                    <Text className="text3">向左滑动</Text>
                  </View>
                </View>
              </View>
            </SwipeCell>
          </View>
        </CodeSpace>
      </Section>
      <Section>
        <H3>3.禁止自动关闭</H3>
        <CodeSpace>
          <View>
            <SwipeCell
              autoClose={false}
              id="6"
              right={[
                {
                  text: '按钮1',
                  textStyle: { color: theme.colors.fontWhite1 },
                  style: { backgroundColor: theme.colors.error6 },
                  width: 50,
                  onPress: () => {
                    console.log('按钮1');
                  },
                },
              ]}
            >
              <View className="pl16">
                <View className={'flexRow flexBetween pr16 bb1 py8'}>
                  <View className="flex1 flexRow flexCenterV mr16">
                    <Text className="text3 fontGray1">自动关闭</Text>
                  </View>
                  <View className={'flexRow flexCenterV'}>
                    <Text className="text3">向左滑动</Text>
                  </View>
                </View>
              </View>
            </SwipeCell>
            <SwipeCell
              autoClose={false}
              id="7"
              right={[
                {
                  text: '按钮1',
                  textStyle: { color: theme.colors.fontWhite1 },
                  style: { backgroundColor: theme.colors.error6 },
                  width: 50,
                  onPress: () => {
                    console.log('按钮1');
                  },
                },
              ]}
            >
              <View className="pl16">
                <View className={'flexRow flexBetween pr16 bb1 py8'}>
                  <View className="flex1 flexRow flexCenterV mr16">
                    <Text className="text3 fontGray1">自动关闭</Text>
                  </View>
                  <View className={'flexRow flexCenterV'}>
                    <Text className="text3">向左滑动</Text>
                  </View>
                </View>
              </View>
            </SwipeCell>
            <SwipeCell
              autoClose={false}
              id="8"
              right={[
                {
                  text: '按钮1',
                  textStyle: { color: theme.colors.fontWhite1 },
                  style: { backgroundColor: theme.colors.error6 },
                  width: 50,
                  onPress: () => {
                    console.log('按钮1');
                  },
                },
              ]}
            >
              <View className="pl16">
                <View className={'flexRow flexBetween pr16 bb1 py8'}>
                  <View className="flex1 flexRow flexCenterV mr16">
                    <Text className="text3 fontGray1">自动关闭</Text>
                  </View>
                  <View className={'flexRow flexCenterV'}>
                    <Text className="text3">向左滑动</Text>
                  </View>
                </View>
              </View>
            </SwipeCell>
          </View>
        </CodeSpace>
      </Section>
    </>
  );
};

export default Demo;
