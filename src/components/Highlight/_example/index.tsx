/**
 * title: Highlight 高亮
 * description: 文案需要关键字高亮的场景使用
 * spline: base
 * isComponent: true
 * toc: false
 */

import { Highlight } from 'tdesign-react-native/components';
import { Section, CodeSpace, H3, H4 } from '@src/../example/src/components';

const Demo = () => (
  <>
    <Section>
      <H3>1.设置关键字</H3>
      <CodeSpace>
        <Highlight text="说着笑着的午后钟声一直在停留" keyword="着" />
      </CodeSpace>
    </Section>
    <Section>
      <H3>2.高亮样式</H3>
      <H4>设置color</H4>
      <CodeSpace>
        <Highlight color={'red'} text="风声静静躺着在诱惑" keyword="静" />
      </CodeSpace>
      <H4>设置highlightStyle</H4>
      <CodeSpace>
        <Highlight highlightStyle={{ color: 'green', fontSize: 30 }} text="我一个人在角落没有你陪伴的我" keyword="我" />
      </CodeSpace>
    </Section>
    <Section>
      <H3>3.忽略大小写</H3>
      <CodeSpace>
        <Highlight text="ABCDabcd" keyword="A" caseSensitive />
      </CodeSpace>
    </Section>
    <Section>
      <H3>4.设置文字样式</H3>
      <H4>基础容器支持的className</H4>
      <CodeSpace>
        <Highlight className="text4 bgContainer" text="连寂寞都笑我太堕落" keyword="我" caseSensitive />
      </CodeSpace>
      <H4>设置style</H4>
      <CodeSpace>
        <Highlight
          style={{ color: 'burlywood', fontSize: 20 }}
          text="广场旁边的烟囱烟雾弥漫你面容"
          keyword="面容"
          caseSensitive
        />
      </CodeSpace>
    </Section>
  </>
);
export default Demo;
