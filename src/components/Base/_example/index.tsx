/**
 * title: Base 基础容器
 * description: 对原生组件做一些功能增强，并新增className属性
 * spline: base
 * isComponent: true
 * toc: false
 */

import { View, Text } from 'tdesign-react-native/components';
import { Section, CodeSpace, H3, P, H5, CodeSpaceOnlyDoc } from '@src/../example/src/components';

function JustifyContentItems() {
  return (
    <>
      <View className="bgSuccess flexCenter" style={{ width: 50, height: 50 }}>
        <Text className="white">1</Text>
      </View>
      <View className="bgWarning flexCenter" style={{ width: 50, height: 50 }}>
        <Text className="white">2</Text>
      </View>
      <View className="bgError flexCenter" style={{ width: 50, height: 50 }}>
        <Text className="white">3</Text>
      </View>
    </>
  );
}

function AlignItemsItems() {
  return (
    <>
      <View className="flex1 bgSuccess flexCenter p16">
        <Text className="white">1</Text>
      </View>
      <View className="flex1 bgWarning flexCenter p30">
        <Text className="white">2</Text>
      </View>
      <View className="flex1 bgError flexCenter p8">
        <Text className="white">3</Text>
      </View>
    </>
  );
}
function GapItems() {
  return (
    <>
      <View className="bgSuccess flexCenter" style={{ width: '30%', height: 50 }}>
        <Text className="white">1</Text>
      </View>
      <View className="bgWarning flexCenter" style={{ width: '30%', height: 50 }}>
        <Text className="white">2</Text>
      </View>
      <View className="bgError flexCenter" style={{ width: '30%', height: 50 }}>
        <Text className="white">3</Text>
      </View>
      <View className="bgWarning flexCenter" style={{ width: '30%', height: 50 }}>
        <Text className="white">4</Text>
      </View>
      <View className="bgError flexCenter" style={{ width: '30%', height: 50 }}>
        <Text className="white">5</Text>
      </View>
      <View className="bgSuccess flexCenter" style={{ width: '30%', height: 50 }}>
        <Text className="white">6</Text>
      </View>
    </>
  );
}

const Demo = () => (
  <>
    <Section>
      <P>
        使用封装后的基础组件可以使用className属性，可以使用类似tailwind的方式便捷输入样式。目前支持View、Text、ScrollView、Image、TextInput。demo中只例举部分示例，全部请查看声明文件。
      </P>
      <H3>1.内边距</H3>
      <CodeSpace>
        <View className="gapY8">
          <View className="flexRow gapX8" style={{ height: 50 }}>
            <View className="flex1">
              <View className="flex1 bgBrand p10">
                <View className="flex1 bgContainer flexCenter">
                  <Text>p10</Text>
                </View>
              </View>
            </View>
            <View className="flex1">
              <View className="flex1 bgBrand py10">
                <View className="flex1 bgContainer flexCenter">
                  <Text>py10</Text>
                </View>
              </View>
            </View>
            <View className="flex1">
              <View className="flex1 bgBrand px10">
                <View className="flex1 bgContainer flexCenter">
                  <Text>px10</Text>
                </View>
              </View>
            </View>
          </View>
          <View className="flexRow gapX8" style={{ height: 50 }}>
            <View className="flex1">
              <View className="flex1 bgBrand pt10">
                <View className="flex1 bgContainer flexCenter">
                  <Text>pt10</Text>
                </View>
              </View>
            </View>
            <View className="flex1">
              <View className="flex1 bgBrand pr10">
                <View className="flex1 bgContainer flexCenter">
                  <Text>pr10</Text>
                </View>
              </View>
            </View>
            <View className="flex1">
              <View className="flex1 bgBrand pl10">
                <View className="flex1 bgContainer flexCenter">
                  <Text>pl10</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </CodeSpace>
    </Section>
    <Section>
      <H3>2.外边距</H3>
      <CodeSpace>
        <View className="gapY8">
          <View className="flexRow gapX8" style={{ height: 50 }}>
            <View className="flex1 b1">
              <View className="flex1 bgContainer m10">
                <View className="flex1 bgBrand flexCenter">
                  <Text className="white">m10</Text>
                </View>
              </View>
            </View>
            <View className="flex1 b1">
              <View className="flex1 bgContainer my10">
                <View className="flex1 bgBrand flexCenter">
                  <Text className="white">my10</Text>
                </View>
              </View>
            </View>
            <View className="flex1 b1">
              <View className="flex1 bgContainer mx10">
                <View className="flex1 bgBrand flexCenter">
                  <Text className="white">mx10</Text>
                </View>
              </View>
            </View>
          </View>
          <View className="flexRow gapX8" style={{ height: 50 }}>
            <View className="flex1 b1">
              <View className="flex1 bgContainer mt10">
                <View className="flex1 bgBrand flexCenter">
                  <Text className="white">mt10</Text>
                </View>
              </View>
            </View>
            <View className="flex1 b1">
              <View className="flex1 bgContainer mb10">
                <View className="flex1 bgBrand flexCenter">
                  <Text className="white">mb10</Text>
                </View>
              </View>
            </View>
            <View className="flex1 b1">
              <View className="flex1 bgContainer ml10">
                <View className="flex1 bgBrand flexCenter">
                  <Text className="white">ml10</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </CodeSpace>
    </Section>
    <Section>
      <H3>3.flex</H3>
      <H5>flexRow</H5>
      <CodeSpace>
        <View className="bgContainer flexRow">
          <View className="bgSuccess flexCenter" style={{ width: 50, height: 50 }}>
            <Text className="white">1</Text>
          </View>
          <View className="bgWarning flexCenter" style={{ width: 50, height: 50 }}>
            <Text className="white">2</Text>
          </View>
          <View className="bgError flexCenter" style={{ width: 50, height: 50 }}>
            <Text className="white">3</Text>
          </View>
        </View>
      </CodeSpace>
      <H5>flexRowReverse</H5>
      <CodeSpace>
        <View className="bgContainer flexRowReverse">
          <View className="bgSuccess flexCenter" style={{ width: 50, height: 50 }}>
            <Text className="white">1</Text>
          </View>
          <View className="bgWarning flexCenter" style={{ width: 50, height: 50 }}>
            <Text className="white">2</Text>
          </View>
          <View className="bgError flexCenter" style={{ width: 50, height: 50 }}>
            <Text className="white">3</Text>
          </View>
        </View>
      </CodeSpace>
      <H5>flexCol</H5>
      <CodeSpace>
        <View className="bgContainer flexCol">
          <View className="bgSuccess flexCenter" style={{ width: 50, height: 50 }}>
            <Text className="white">1</Text>
          </View>
          <View className="bgWarning flexCenter" style={{ width: 50, height: 50 }}>
            <Text className="white">2</Text>
          </View>
          <View className="bgError flexCenter" style={{ width: 50, height: 50 }}>
            <Text className="white">3</Text>
          </View>
        </View>
      </CodeSpace>
      <H5>flexColReverse</H5>
      <CodeSpace>
        <View className="bgContainer flexColReverse">
          <View className="bgSuccess flexCenter" style={{ width: 50, height: 50 }}>
            <Text className="white">1</Text>
          </View>
          <View className="bgWarning flexCenter" style={{ width: 50, height: 50 }}>
            <Text className="white">2</Text>
          </View>
          <View className="bgError flexCenter" style={{ width: 50, height: 50 }}>
            <Text className="white">3</Text>
          </View>
        </View>
      </CodeSpace>
      <H5>justifyContent</H5>
      <CodeSpaceOnlyDoc>
        <JustifyContentItems />
      </CodeSpaceOnlyDoc>
      <CodeSpace>
        <View className="gapY6">
          <View>
            <Text>justifyStart</Text>
            <View className="bgContainer flexRow justifyStart">
              <JustifyContentItems />
            </View>
          </View>
          <View>
            <Text>justifyEnd</Text>
            <View className="bgContainer flexRow justifyEnd">
              <JustifyContentItems />
            </View>
          </View>
          <View>
            <Text>justifyCenter</Text>
            <View className="bgContainer flexRow justifyCenter">
              <JustifyContentItems />
            </View>
          </View>
          <View>
            <Text>justifyBetween</Text>
            <View className="bgContainer flexRow justifyBetween">
              <JustifyContentItems />
            </View>
          </View>
          <View>
            <Text>justifyAround</Text>
            <View className="bgContainer flexRow justifyAround">
              <JustifyContentItems />
            </View>
          </View>
          <View>
            <Text>justifyEvenly</Text>
            <View className="bgContainer flexRow justifyEvenly">
              <JustifyContentItems />
            </View>
          </View>
        </View>
      </CodeSpace>
      <H5>alignItems</H5>
      <CodeSpaceOnlyDoc>
        <AlignItemsItems />
      </CodeSpaceOnlyDoc>
      <CodeSpace>
        <View className="gapY6">
          <View>
            <Text>itemsStart</Text>
            <View className="bgContainer flexRow itemsStart" style={{ height: 100 }}>
              <AlignItemsItems />
            </View>
          </View>
          <View>
            <Text>itemsEnd</Text>
            <View className="bgContainer flexRow itemsEnd" style={{ height: 100 }}>
              <AlignItemsItems />
            </View>
          </View>
          <View>
            <Text>itemsCenter</Text>
            <View className="bgContainer flexRow itemsCenter" style={{ height: 100 }}>
              <AlignItemsItems />
            </View>
          </View>
          <View>
            <Text>itemsStretch</Text>
            <View className="bgContainer flexRow itemsStretch" style={{ height: 100 }}>
              <AlignItemsItems />
            </View>
          </View>
          <View>
            <Text>itemsBaseline</Text>
            <View className="bgContainer flexRow itemsBaseline" style={{ height: 100 }}>
              <AlignItemsItems />
            </View>
          </View>
        </View>
      </CodeSpace>
      <H5>gap</H5>
      <CodeSpaceOnlyDoc>
        <GapItems />
      </CodeSpaceOnlyDoc>
      <CodeSpace>
        <View className="gapY6">
          <View>
            <Text>gap10</Text>
            <View className="bgContainer flexRow flexCenter flexWrap gap10">
              <GapItems />
            </View>
          </View>
          <View>
            <Text>gapX10</Text>
            <View className="bgContainer flexRow flexCenter flexWrap gapX10">
              <GapItems />
            </View>
          </View>
          <View>
            <Text>gapY10</Text>
            <View className="bgContainer flexRow flexCenter flexWrap gapY10">
              <GapItems />
            </View>
          </View>
        </View>
      </CodeSpace>
    </Section>
    <Section>
      <H3>4.圆角</H3>
      <CodeSpace>
        <View className="gap8 flexWrap flexRow">
          <View className="bgSuccess flexCenter p12 rounded0">
            <Text className="white">rounded0</Text>
          </View>
          <View className="bgWarning flexCenter p12 roundedSm">
            <Text className="white">roundedSm</Text>
          </View>
          <View className="bgError flexCenter p12 rounded">
            <Text className="white">rounded</Text>
          </View>
          <View className="bgSuccess flexCenter p12 roundedMd">
            <Text className="white">roundedMd</Text>
          </View>
          <View className="bgWarning flexCenter p12 roundedLg">
            <Text className="white">roundedLg</Text>
          </View>
          <View className="bgError flexCenter p12 roundedXl">
            <Text className="white">roundedXl</Text>
          </View>
          <View className="bgSuccess flexCenter p12 roundedFull">
            <Text className="white">roundedFull</Text>
          </View>
        </View>
      </CodeSpace>
    </Section>
    <Section>
      <H3>5.文字对齐</H3>
      <CodeSpace>
        <View className="gapY8">
          <View className="bgBrand p4">
            <Text className="white textCenter">demo中只例举部分示例，全部请查看声明文件。</Text>
          </View>
          <View className="bgBrand p4">
            <Text className="white textRight">demo中只例举部分示例，全部请查看声明文件。</Text>
          </View>
          <View className="bgBrand p4">
            <Text className="white textLeft">
              demo中只例举部分示例，全部请查看声明文件。demo中只例举部分示例，全部请查看声明文件。
            </Text>
          </View>
          <View className="bgBrand p4">
            <Text className="white textJustfy">
              demo中只例举部分示例，全部请查看声明文件。demo中只例举部分示例，全部请查看声明文件。
            </Text>
          </View>
        </View>
      </CodeSpace>
    </Section>
    <Section>
      <H3>6.字体大小</H3>
      <CodeSpace>
        <View className="flexRow flexWrap flexCenterV gap8">
          <Text className="text1">text1</Text>
          <Text className="text1b">text1b</Text>
          <Text className="text2">text2</Text>
          <Text className="text2b">text2b</Text>
          <Text className="text3">text3</Text>
          <Text className="text3b">text3b</Text>
          <Text className="text4">text4</Text>
          <Text className="text4b">text4b</Text>
          <Text className="text5">text5</Text>
          <Text className="text5b">text5b</Text>
          <Text className="text6">text6</Text>
          <Text className="text6b">text6b</Text>
          <Text className="text7">text7</Text>
          <Text className="text7b">text7b</Text>
        </View>
      </CodeSpace>
    </Section>
    <Section>
      <H3>7.边框</H3>
      <CodeSpace>
        <View className="flexRow flexWrap gap8">
          <View className="bgContainer flexCenter b1" style={{ borderColor: 'red', width: 50, height: 50 }}>
            <Text>b1</Text>
          </View>
          <View className="bgContainer flexCenter bb1" style={{ borderColor: 'red', width: 50, height: 50 }}>
            <Text>bb1</Text>
          </View>
          <View className="bgContainer flexCenter bt1" style={{ borderColor: 'red', width: 50, height: 50 }}>
            <Text>bt1</Text>
          </View>
          <View className="bgContainer flexCenter br1" style={{ borderColor: 'red', width: 50, height: 50 }}>
            <Text>br1</Text>
          </View>
          <View className="bgContainer flexCenter bl1" style={{ borderColor: 'red', width: 50, height: 50 }}>
            <Text>bl1</Text>
          </View>
          <View className="bgContainer flexCenter b0" style={{ borderColor: 'red', width: 50, height: 50 }}>
            <Text>b0</Text>
          </View>
        </View>
      </CodeSpace>
    </Section>
    <Section>
      <H3>8.背景色</H3>
      <CodeSpace>
        <View className="flexRow flexWrap gap8">
          <View className="bg flexCenter p16">
            <Text>bg</Text>
          </View>
          <View className="bgPage flexCenter p16">
            <Text>bgPage</Text>
          </View>
          <View className="bgContainer flexCenter p16">
            <Text>bgContainer</Text>
          </View>
          <View className="bgContainerHover flexCenter p16">
            <Text>bgContainerHover</Text>
          </View>
          <View className="bgContainerActive flexCenter p16">
            <Text>bgContainerActive</Text>
          </View>
          <View className="bgContainerSelect flexCenter p16">
            <Text>bgContainerSelect</Text>
          </View>
          <View className="bgSubContainer flexCenter p16">
            <Text>bgSubContainer</Text>
          </View>
          <View className="bgSubContainerHover flexCenter p16">
            <Text>bgSubContainerHover</Text>
          </View>
          <View className="bgSubContainerActive flexCenter p16">
            <Text>bgSubContainerActive</Text>
          </View>
          <View className="bgComponent flexCenter p16">
            <Text>bgComponent</Text>
          </View>
          <View className="bgComponentHover flexCenter p16">
            <Text>bgComponentHover</Text>
          </View>
          <View className="bgComponentActive flexCenter p16">
            <Text>bgComponentActive</Text>
          </View>
          <View className="bgComponentDisabled flexCenter p16">
            <Text>bgComponentDisabled</Text>
          </View>
          <View className="bgSubComponent flexCenter p16">
            <Text>bgSubComponent</Text>
          </View>
          <View className="bgSubComponentHover flexCenter p16">
            <Text>bgSubComponentHover</Text>
          </View>
          <View className="bgSubComponentActive flexCenter p16">
            <Text>bgSubComponentActive</Text>
          </View>
          <View className="bgBrand flexCenter p16">
            <Text className="white">bgBrand</Text>
          </View>
          <View className="bgError flexCenter p16">
            <Text className="white">bgError</Text>
          </View>
          <View className="bgSuccess flexCenter p16">
            <Text className="white">bgSuccess</Text>
          </View>
          <View className="bgWarning flexCenter p16">
            <Text className="white">bgWarning</Text>
          </View>
        </View>
      </CodeSpace>
    </Section>
    <Section>
      <H3>8.字体颜色</H3>
      <CodeSpace>
        <View className="gapY8">
          <View className="flexRow flexWrap flexCenterV gap8">
            <Text className="bgBrand brand1">brand1</Text>
            <Text className="brand2">brand2</Text>
            <Text className="brand3">brand3</Text>
            <Text className="brand4">brand4</Text>
            <Text className="brand5">brand5</Text>
            <Text className="brand6">brand6</Text>
            <Text className="brand7">brand7</Text>
            <Text className="brand8">brand8</Text>
            <Text className="brand9">brand9</Text>
            <Text className="brand10">brand10</Text>
            <Text className="brand">brand</Text>
            <Text className="bgBrand brandLight">brandLight</Text>
            <Text className="brandFocus">brandFocus</Text>
            <Text className="brandDisabled">brandDisabled</Text>
            <Text className="brandHover">brandHover</Text>
            <Text className="brandActive">brandActive</Text>
          </View>
          <View className="flexRow flexWrap flexCenterV gap8">
            <Text className="bgError error1">error1</Text>
            <Text className="error2">error2</Text>
            <Text className="error3">error3</Text>
            <Text className="error4">error4</Text>
            <Text className="error5">error5</Text>
            <Text className="error6">error6</Text>
            <Text className="error7">error7</Text>
            <Text className="error8">error8</Text>
            <Text className="error9">error9</Text>
            <Text className="error10">error10</Text>
            <Text className="error">error</Text>
            <Text className="bgError errorLight">errorLight</Text>
            <Text className="errorFocus">errorFocus</Text>
            <Text className="errorDisabled">errorDisabled</Text>
            <Text className="errorHover">errorHover</Text>
            <Text className="errorActive">errorActive</Text>
          </View>
          <View className="flexRow flexWrap flexCenterV gap8">
            <Text className="bgSuccess success1">success1</Text>
            <Text className="success2">success2</Text>
            <Text className="success3">success3</Text>
            <Text className="success4">success4</Text>
            <Text className="success5">success5</Text>
            <Text className="success6">success6</Text>
            <Text className="success7">success7</Text>
            <Text className="success8">success8</Text>
            <Text className="success9">success9</Text>
            <Text className="success10">success10</Text>
            <Text className="success">success</Text>
            <Text className="bgSuccess successLight">successLight</Text>
            <Text className="successFocus">successFocus</Text>
            <Text className="successDisabled">successDisabled</Text>
            <Text className="successHover">successHover</Text>
            <Text className="successActive">successActive</Text>
          </View>
          <View className="flexRow flexWrap flexCenterV gap8">
            <Text className="bgWarning warning1">warning1</Text>
            <Text className="warning2">warning2</Text>
            <Text className="warning3">warning3</Text>
            <Text className="warning4">warning4</Text>
            <Text className="warning5">warning5</Text>
            <Text className="warning6">warning6</Text>
            <Text className="warning7">warning7</Text>
            <Text className="warning8">warning8</Text>
            <Text className="warning9">warning9</Text>
            <Text className="warning10">warning10</Text>
            <Text className="warning">warning</Text>
            <Text className="bgWarning warningLight">warningLight</Text>
            <Text className="warningFocus">warningFocus</Text>
            <Text className="warningDisabled">warningDisabled</Text>
            <Text className="warningHover">warningHover</Text>
            <Text className="warningActive">warningActive</Text>
          </View>
          <View className="flexRow flexWrap flexCenterV gap8">
            <Text className="bgBrand gray1">gray1</Text>
            <Text className="bgBrand gray2">gray2</Text>
            <Text className="bgBrand gray3">gray3</Text>
            <Text className="bgBrand gray4">gray4</Text>
            <Text className="gray5">gray5</Text>
            <Text className="gray6">gray6</Text>
            <Text className="gray7">gray7</Text>
            <Text className="gray8">gray8</Text>
            <Text className="gray9">gray9</Text>
            <Text className="gray10">gray10</Text>
            <Text className="gray11">gray11</Text>
            <Text className="gray12">gray12</Text>
            <Text className="gray13">gray13</Text>
            <Text className="gray14">gray14</Text>
          </View>
        </View>
      </CodeSpace>
    </Section>
  </>
);

export default Demo;
