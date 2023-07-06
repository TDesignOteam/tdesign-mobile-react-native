/**
 * title: Collapse 折叠面板
 * description: 可以将较多或较复杂的内容进行分组，分组内容区可以折叠展开或隐藏。
 * spline: base
 * isComponent: true
 * toc: false
 */

import { Collapse, Text } from 'tdesign-react-native/components';
import { useCallback } from 'react';
import { Section, CodeSpace, H3, H5 } from '@src/../example/src/components';
import { StarIcon, StarFilledIcon } from 'tdesign-icons-react-native/src';

const IconDemo = () => {
  const icon = useCallback((state: boolean) => (state ? <StarFilledIcon /> : <StarIcon />), []);
  return (
    <Collapse header="展开" headerRight="操作说明" icon={icon} className="p10 bgPage">
      <Text>
        此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容可自定义内容
      </Text>
    </Collapse>
  );
};

const Demo = () => {
  return (
    <>
      <Section>
        <H3>1.类型</H3>
        <H5>基础展开</H5>
        <CodeSpace>
          <Collapse header="展开" className="p10 bgPage">
            <Text>
              此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容可自定义内容
            </Text>
          </Collapse>
        </CodeSpace>
        <H5>带操作说明</H5>
        <CodeSpace>
          <Collapse header="展开" headerRight="操作说明" className="p10 bgPage">
            <Text>
              此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容可自定义内容
            </Text>
          </Collapse>
        </CodeSpace>
        <H5>自定义icon</H5>
        <CodeSpace>
          <IconDemo />
        </CodeSpace>
      </Section>
      <Section>
        <H3>2.样式</H3>
        <H5>容器样式</H5>
        <CodeSpace>
          <Collapse header="展开" style={{ marginHorizontal: 10 }} className="p6 bgPage">
            <Text>
              此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容可自定义内容
            </Text>
          </Collapse>
        </CodeSpace>
        <H5>header样式</H5>
        <CodeSpace>
          <Collapse header="展开" headerStyle={{ color: 'green' }} className="p10 bgPage">
            <Text>
              此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容可自定义内容
            </Text>
          </Collapse>
        </CodeSpace>
        <H5>header right样式</H5>
        <CodeSpace>
          <Collapse header="展开" headerRight="操作说明" headerRightStyle={{ color: 'green' }} className="p10 bgPage">
            <Text>
              此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容可自定义内容
            </Text>
          </Collapse>
        </CodeSpace>
        <H5>内容样式</H5>
        <CodeSpace>
          <Collapse header="展开" className="p10 bgPage">
            <Text className="p10 bg">
              此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容可自定义内容
            </Text>
          </Collapse>
        </CodeSpace>
      </Section>

      <Section>
        <H3>3.其他</H3>
        <H5>展开状态</H5>
        <CodeSpace>
          <Collapse header="展开" expandable className="p10 bgPage">
            <Text>
              此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容可自定义内容
            </Text>
          </Collapse>
        </CodeSpace>
        <H5>动画时长</H5>
        <CodeSpace>
          <Collapse header="展开" duration={1000} className="p10 bgPage">
            <Text>
              此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容可自定义内容
            </Text>
          </Collapse>
        </CodeSpace>
      </Section>
    </>
  );
};
export default Demo;
