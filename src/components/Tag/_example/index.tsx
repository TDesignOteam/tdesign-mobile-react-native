/**
 * title: Highlight 高亮
 * description: 文案需要关键字高亮的场景使用
 * spline: base
 * isComponent: true
 * toc: false
 */

import { Tag, View } from 'tdesign-react-native/components';
import { Section, CodeSpace, H3, H5 } from '@src/../example/src/components';
import { DiscountIcon } from 'tdesign-icons-react-native/src';

const Demo = () => (
  <>
    <Section>
      <H3>1.类型</H3>
      <H5>基础标签</H5>
      <CodeSpace>
        <View className="flexRow flexCenterV gapX20">
          <Tag content={'标签'} />
          <Tag variant="light" content={'标签'} />
          <Tag variant="outline" content={'标签'} />
        </View>
      </CodeSpace>
      <H5>圆弧标签</H5>
      <CodeSpace>
        <View className="gapY6">
          <View className="flexRow flexCenterV gapX20">
            <Tag shape="round" theme="primary" content={'标签'} />
            <Tag shape="round" theme="primary" variant="light" content={'标签'} />
            <Tag shape="round" theme="primary" variant="outline" content={'标签'} />
          </View>
          <View className="flexRow flexCenterV gapX20">
            <Tag shape="mark" theme="warning" content={'标签'} />
            <Tag shape="mark" theme="warning" variant="light" content={'标签'} />
            <Tag shape="mark" theme="warning" variant="outline" content={'标签'} />
          </View>
        </View>
      </CodeSpace>
      <H5>带图标标签</H5>
      <CodeSpace>
        <View className="flexRow flexCenterV gapX20">
          <Tag icon={<DiscountIcon style={{ marginRight: 4 }} />} theme="danger" content={'标签'} />
          <Tag icon={<DiscountIcon style={{ marginRight: 4 }} />} theme="danger" variant="light" content={'标签'} />
          <Tag icon={<DiscountIcon style={{ marginRight: 4 }} />} theme="danger" variant="outline" content={'标签'} />
        </View>
      </CodeSpace>
      <H5>可关闭标签</H5>
      <CodeSpace>
        <View className="flexRow flexCenterV gapX20">
          <Tag
            closable
            onClose={() => {
              console.log('close');
            }}
            theme="success"
            content={'标签'}
          />
          <Tag
            closable
            onClose={() => {
              console.log('close');
            }}
            theme="success"
            variant="light"
            content={'标签'}
          />
          <Tag
            closable
            onClose={() => {
              console.log('close');
            }}
            theme="success"
            variant="outline"
            content={'标签'}
          />
        </View>
      </CodeSpace>
    </Section>
    <Section>
      <H3>2.主题&风格</H3>
      <CodeSpace>
        <View className="gapY6">
          <View className="flexRow flexCenterV flexWrap gapX20">
            <Tag content={'默认'} />
            <Tag theme="primary" content={'主要'} />
            <Tag theme="warning" content={'警告'} />
            <Tag theme="danger" content={'危险'} />
            <Tag theme="success" content={'成功'} />
          </View>
          <View className="flexRow flexCenterV flexWrap gapX20">
            <Tag variant="light" content={'默认'} />
            <Tag variant="light" theme="primary" content={'主要'} />
            <Tag variant="light" theme="warning" content={'警告'} />
            <Tag variant="light" theme="danger" content={'危险'} />
            <Tag variant="light" theme="success" content={'成功'} />
          </View>
          <View className="flexRow flexCenterV flexWrap gapX20">
            <Tag variant="outline" content={'默认'} />
            <Tag variant="outline" theme="primary" content={'主要'} />
            <Tag variant="outline" theme="warning" content={'警告'} />
            <Tag variant="outline" theme="danger" content={'危险'} />
            <Tag variant="outline" theme="success" content={'成功'} />
          </View>
        </View>
      </CodeSpace>
    </Section>
    <Section>
      <H3>3.禁止状态</H3>
      <CodeSpace>
        <View className="gapY6">
          <View className="flexRow flexCenterV flexWrap gapX20">
            <Tag disabled content={'默认'} />
            <Tag disabled theme="primary" content={'主要'} />
            <Tag disabled theme="warning" content={'警告'} />
            <Tag disabled theme="danger" content={'危险'} />
            <Tag disabled theme="success" content={'成功'} />
          </View>
          <View className="flexRow flexCenterV flexWrap gapX20">
            <Tag disabled variant="light" content={'默认'} />
            <Tag disabled variant="light" theme="primary" content={'主要'} />
            <Tag disabled variant="light" theme="warning" content={'警告'} />
            <Tag disabled variant="light" theme="danger" content={'危险'} />
            <Tag disabled variant="light" theme="success" content={'成功'} />
          </View>
          <View className="flexRow flexCenterV flexWrap gapX20">
            <Tag disabled variant="outline" content={'默认'} />
            <Tag disabled variant="outline" theme="primary" content={'主要'} />
            <Tag disabled variant="outline" theme="warning" content={'警告'} />
            <Tag disabled variant="outline" theme="danger" content={'危险'} />
            <Tag disabled variant="outline" theme="success" content={'成功'} />
          </View>
        </View>
      </CodeSpace>
    </Section>
    <Section>
      <H3>4.其他</H3>
      <H5>tag可换行数</H5>
      <CodeSpace>
        <View className="flexRow flexCenterV gapX20">
          <Tag style={{ width: 100 }} numberOfLines={1} content={'超长标签超长标签'} />
          <Tag style={{ width: 100 }} numberOfLines={2} variant="light" content={'超长标签超长标签超长标签超长标签'} />
          <Tag
            style={{ width: 100 }}
            numberOfLines={2}
            variant="outline"
            content={'超长标签超长标签超长标签超长标签'}
          />
        </View>
      </CodeSpace>
      <H5>点击事件</H5>
      <CodeSpace>
        <View className="flexRow flexCenterV gapX20">
          <Tag
            onPress={() => {
              console.log('press');
            }}
            theme="primary"
            content={'标签'}
          />
          <Tag
            onPress={() => {
              console.log('press');
            }}
            theme="primary"
            variant="light"
            content={'标签'}
          />
          <Tag
            onPress={() => {
              console.log('press');
            }}
            theme="primary"
            variant="outline"
            content={'标签'}
          />
        </View>
        <H5>样式</H5>
        <CodeSpace>
          <View className="flexRow flexCenterV gapX20">
            <Tag style={{ opacity: 0.5 }} theme="warning" content={'标签'} />
            <Tag style={{ marginRight: 10 }} theme="warning" variant="light" content={'标签'} />
            <Tag
              style={{ padding: 10, backgroundColor: 'lightgray' }}
              theme="warning"
              variant="outline"
              content={'标签'}
            />
          </View>
        </CodeSpace>
      </CodeSpace>
    </Section>
  </>
);
export default Demo;
