/**
 * title: Image 头像
 * description: 用图标、图片、字符的形式展示用户或事物信息
 * spline: base
 * isComponent: true
 * toc: false
 */
import { View, Image } from 'tdesign-react-native/components';
import { ErrorCircleFilledIcon } from 'tdesign-icons-react-native/src';
import { Section, CodeSpace, H3, P } from '@src/../example/src/components';

const Demo = () => {
  return (
    <>
      <Section>
        <P>用于展示用户头像信息，除了纯展示也可点击进入个人详情等操作。</P>
        <H3>1.类型</H3>
        <P>图片不同形状</P>
        <CodeSpace>
          <View className="flexRow gapX10">
            <Image source={{ uri: 'https://tdesign.gtimg.com/demo/demo-image-1.png' }} />
            <Image shape="circle" source={{ uri: 'https://tdesign.gtimg.com/demo/demo-image-1.png' }} />
            <Image shape="round" source={{ uri: 'https://tdesign.gtimg.com/demo/demo-image-1.png' }} />
          </View>
        </CodeSpace>
        <P>图片填充模式，和RN相同</P>
        <CodeSpace>
          <View className="flexRow gapX10">
            <Image
              shape="circle"
              style={{ backgroundColor: 'gray' }}
              source={{ uri: 'https://tdesign.gtimg.com/demo/demo-image-1.png' }}
            />
            <Image
              resizeMode="contain"
              style={{ backgroundColor: 'gray' }}
              shape="circle"
              source={{ uri: 'https://tdesign.gtimg.com/demo/demo-image-1.png' }}
            />
            <Image
              resizeMode="stretch"
              style={{ backgroundColor: 'gray' }}
              shape="circle"
              source={{ uri: 'https://tdesign.gtimg.com/demo/demo-image-1.png' }}
            />
            <Image
              resizeMode="repeat"
              style={{ backgroundColor: 'gray' }}
              shape="circle"
              source={{ uri: 'https://tdesign.gtimg.com/demo/demo-image-1.png' }}
            />
            <Image
              resizeMode="center"
              style={{ backgroundColor: 'gray' }}
              shape="circle"
              source={{ uri: 'https://tdesign.gtimg.com/demo/demo-image-1.png' }}
            />
          </View>
        </CodeSpace>
      </Section>
      <Section>
        <H3>2.组件状态</H3>
        <P>加载状态，图片加载完毕前的展示</P>
        <CodeSpace>
          <View className="flexRow gapX10">
            <Image source={{ uri: 'https://tdesign.gtimg.com/demo/demo-image-1.png' }} />
            <Image shape="circle" source={{ uri: 'https://tdesign.gtimg.com/demo/demo-image-1.png' }} />
            <Image shape="round" source={{ uri: 'https://tdesign.gtimg.com/demo/demo-image-1.png' }} />
          </View>
        </CodeSpace>
        <P>加载失败，可自定义</P>
        <CodeSpace>
          <View className="flexRow gapX10">
            <Image source={{ uri: 'https://tdesign.gtimg.com/demo/demo-image-12x.png' }} />
            <Image shape="circle" source={{ uri: 'https://tdesign.gtimg.com/demo/demo-image-12x.png' }} />
            <Image
              shape="round"
              source={{ uri: 'https://tdesign.gtimg.com/demo/demo-image-12x.png' }}
              errorIcon={<ErrorCircleFilledIcon color="red" />}
            />
          </View>
        </CodeSpace>
      </Section>
    </>
  );
};

export default Demo;
