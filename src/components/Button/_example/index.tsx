/**
 * title: Button 按钮
 * description: 按钮用于开启一个闭环的操作任务，如“删除”对象、“购买”商品等。
 * spline: base
 * isComponent: true
 * toc: false
 */

import { View, Button } from 'tdesign-react-native/components';
import { Section, CodeSpace, H3, H4, P } from '@src/../example/src/components';
import { UserIcon, SearchIcon } from 'tdesign-icons-react-native/src';

const Demo = () => (
  <>
    <Section>
      <H3>1.基础按钮</H3>
      <P>基础类型分为主按钮、次按钮、文字按钮。</P>
      <H4>主按钮</H4>
      <P>使用场景：大部分场景都可以使用，例如反馈页、表单页、对话框，一个页面建议最多只出现一个主按钮</P>
      <H4>次按钮</H4>
      <P>
        使用场景：在用户进行的操作为流程中的辅助操作，或者进行不那么重要的交互行为时，选择用次按钮；次要按钮通常和主要按钮一起出现
      </P>
      <H4>文字按钮</H4>
      <P>使用场景：它的操作通常和其旁边内容相关，通常出现在标题旁、字段旁、列表最下方</P>
      <CodeSpace>
        <View className="flexRow flexWrap gapX12">
          <Button style={{ flex: 1 }} theme="primary" content={'主按钮'} />
          <Button style={{ flex: 1 }} theme="primary" variant="outline" content={'次按钮'} />
          <Button style={{ flex: 1 }} theme="primary" variant="text" content={'文字按钮'} />
        </View>
      </CodeSpace>
    </Section>
    <Section>
      <H3>2.图标按钮</H3>
      <P>图标按钮由图标+文字或图标构成。通过图标可增强识别性，以便直观理解。</P>
      <CodeSpace>
        <View className="flexRow flexWrap gapX12">
          <Button style={{ flex: 1 }} theme="primary" icon={<UserIcon />} content={'横向'} />
          <Button style={{ flex: 1 }} theme="primary" icon={<UserIcon />} content={null} />
          <Button
            style={{ flex: 1 }}
            theme="primary"
            icon={<UserIcon />}
            iconDirection="column"
            variant="text"
            content={'纵向'}
          />
        </View>
      </CodeSpace>
    </Section>
    <Section>
      <H3>3.按钮尺寸</H3>
      <CodeSpace>
        <View className="flexRow flexWrap gapX12">
          <Button style={{ flex: 1 }} size="large" content={'大'} />
          <Button style={{ flex: 1 }} size="normal" content={'中'} />
          <Button style={{ flex: 1 }} size="small" content={'小'} />
        </View>
      </CodeSpace>
    </Section>
    <Section>
      <H3>4.按钮形状</H3>
      <CodeSpace>
        <View className="flexRow flexWrap gapX12">
          <Button style={{ flex: 1 }} theme="primary" shape="round" content={'默认'} />
          <Button style={{ flex: 1 }} theme="primary" shape="rectangle" content={'rectangle'} />
          <Button theme="primary" shape="square" icon={<SearchIcon />} content={null} />
          <Button theme="primary" shape="circle" icon={<SearchIcon />} content={null} />
        </View>
      </CodeSpace>
    </Section>
    <Section>
      <H3>5.按钮主题</H3>
      <CodeSpace>
        <View className="gapY6">
          <View className="flexRow flexWrap gapX12">
            <Button style={{ flex: 1 }} theme="primary" content={'主按钮'} />
            <Button style={{ flex: 1 }} theme="primary" variant="outline" content={'描边按钮'} />
            <Button style={{ flex: 1 }} theme="primary" variant="text" content={'文字按钮'} />
          </View>
          <View className="flexRow flexWrap gapX12">
            <Button style={{ flex: 1 }} content={'主按钮'} />
            <Button style={{ flex: 1 }} variant="outline" content={'描边按钮'} />
            <Button style={{ flex: 1 }} variant="text" content={'文字按钮'} />
          </View>
          <View className="flexRow flexWrap gapX12">
            <Button style={{ flex: 1 }} theme="danger" content={'主按钮'} />
            <Button style={{ flex: 1 }} theme="danger" variant="outline" content={'描边按钮'} />
            <Button style={{ flex: 1 }} theme="danger" variant="text" content={'文字按钮'} />
          </View>
          <View className="flexRow flexWrap gapX12">
            <Button style={{ flex: 1 }} theme="warning" content={'主按钮'} />
            <Button style={{ flex: 1 }} theme="warning" variant="outline" content={'描边按钮'} />
            <Button style={{ flex: 1 }} theme="warning" variant="text" content={'文字按钮'} />
          </View>
          <View className="flexRow flexWrap gapX12">
            <Button style={{ flex: 1 }} theme="success" content={'主按钮'} />
            <Button style={{ flex: 1 }} theme="success" variant="outline" content={'描边按钮'} />
            <Button style={{ flex: 1 }} theme="success" variant="text" content={'文字按钮'} />
          </View>
        </View>
      </CodeSpace>
    </Section>
    <Section>
      <H3>6.按钮状态</H3>
      <CodeSpace>
        <View className="flexRow flexWrap gapX12">
          <Button style={{ flex: 1 }} theme="primary" loading content={'加载'} />
          <Button style={{ flex: 1 }} theme="primary" disabled content={'禁用'} />
        </View>
      </CodeSpace>
    </Section>
  </>
);
export default Demo;
