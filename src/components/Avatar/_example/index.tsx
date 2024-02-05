/**
 * title: Avatar 头像
 * description: 用图标、图片、字符的形式展示用户或事物信息
 * spline: base
 * isComponent: true
 * toc: false
 */
import { View, Avatar, AvatarGroup, Touchable, Badge } from 'tdesign-react-native/components';
import { UserIcon, UserAddIcon } from 'tdesign-icons-react-native/src';
import { Section, CodeSpace, H3, P } from '@src/../example/src/components';
import { useState } from 'react';

const TypeDemo1 = () => {
  const [list, setList] = useState([1, 2, 3, 4, 5, 6]);
  const handleAdd = () => {
    const test = [list.length + 1, ...list];
    setList(test);
  };
  return (
    <AvatarGroup
      max={5}
      collapseAvatar={
        <Touchable onPress={handleAdd}>
          <UserAddIcon />
        </Touchable>
      }
    >
      {list.map((item, i) => (
        <Avatar size="large" key={i}>
          {item}
        </Avatar>
      ))}
    </AvatarGroup>
  );
};

const Demo = () => {
  return (
    <>
      <Section>
        <P>用于展示用户头像信息，除了纯展示也可点击进入个人详情等操作。</P>
        <H3>1.类型</H3>
        <P>图片头像</P>
        <CodeSpace>
          <View className="flexRow gapX10">
            <Avatar url={'https://tdesign.gtimg.com/mobile/demos/avatar1.png'} />
            <Avatar shape="round" url={'https://tdesign.gtimg.com/mobile/demos/avatar1.png'} />
            <Avatar shape="square" url={'https://tdesign.gtimg.com/mobile/demos/avatar1.png'} />
          </View>
        </CodeSpace>
        <P>图标头像</P>
        <CodeSpace>
          <View className="flexRow gapX10">
            <Avatar icon={<UserIcon />} />
            <Avatar shape="round" icon={<UserIcon />} />
            <Avatar shape="square" icon={<UserIcon />} />
          </View>
        </CodeSpace>
        <P>字符头像</P>
        <CodeSpace>
          <View className="flexRow gapX10">
            <Avatar>A</Avatar>
            <Avatar shape="round">A</Avatar>
            <Avatar shape="square">A</Avatar>
          </View>
        </CodeSpace>
      </Section>
      <Section>
        <H3>2.组件样式</H3>
        <P>向上堆叠</P>
        <CodeSpace>
          <AvatarGroup max={5}>
            <Avatar url={'https://tdesign.gtimg.com/mobile/demos/avatar1.png'} />
            <Avatar url={'https://tdesign.gtimg.com/mobile/demos/avatar1.png'} />
            <Avatar url={'https://tdesign.gtimg.com/mobile/demos/avatar1.png'} />
            <Avatar url={'https://tdesign.gtimg.com/mobile/demos/avatar1.png'} />
            <Avatar url={'https://tdesign.gtimg.com/mobile/demos/avatar1.png'} />
            <Avatar url={'https://tdesign.gtimg.com/mobile/demos/avatar1.png'} />
            <Avatar url={'https://tdesign.gtimg.com/mobile/demos/avatar1.png'} />
          </AvatarGroup>
        </CodeSpace>
        <P>向下堆叠</P>
        <CodeSpace>
          <AvatarGroup cascading={'left-up'} max={5}>
            <Avatar url={'https://tdesign.gtimg.com/mobile/demos/avatar1.png'} />
            <Avatar url={'https://tdesign.gtimg.com/mobile/demos/avatar1.png'} />
            <Avatar url={'https://tdesign.gtimg.com/mobile/demos/avatar1.png'} />
            <Avatar url={'https://tdesign.gtimg.com/mobile/demos/avatar1.png'} />
            <Avatar url={'https://tdesign.gtimg.com/mobile/demos/avatar1.png'} />
            <Avatar url={'https://tdesign.gtimg.com/mobile/demos/avatar1.png'} />
            <Avatar url={'https://tdesign.gtimg.com/mobile/demos/avatar1.png'} />
          </AvatarGroup>
        </CodeSpace>
        <P>带操作</P>
        <CodeSpace>
          <TypeDemo1 />
        </CodeSpace>
        <P>徽标头像</P>
        <CodeSpace>
          <View className="flexRow gapX10">
            <Badge dot offset={[2, 2]}>
              <Avatar url={'https://tdesign.gtimg.com/mobile/demos/avatar1.png'} />
            </Badge>
            <Badge count={5} offset={[-2, -2]}>
              <Avatar url={'https://tdesign.gtimg.com/mobile/demos/avatar1.png'} />
            </Badge>
            <Badge count={'DL'} offset={[30, -5]} color={'#307AF2'} shape="round">
              <Avatar url={'https://tdesign.gtimg.com/mobile/demos/avatar1.png'} />
            </Badge>
          </View>
        </CodeSpace>
      </Section>
      <Section>
        <H3>3.组件尺寸</H3>
        <CodeSpace>
          <View className="flexRow flexCenterV gapX10">
            <Avatar size={'small'} url={'https://tdesign.gtimg.com/mobile/demos/avatar1.png'} />
            <Avatar url={'https://tdesign.gtimg.com/mobile/demos/avatar1.png'} />
            <Avatar size={'large'} url={'https://tdesign.gtimg.com/mobile/demos/avatar1.png'} />
          </View>
        </CodeSpace>
      </Section>
    </>
  );
};

export default Demo;
