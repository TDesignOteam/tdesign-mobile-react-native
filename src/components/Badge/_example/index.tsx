/**
 * title: Badge 徽标
 * description: 用于告知用户，该区域的状态变化或者待处理任务的数量。
 * spline: base
 * isComponent: true
 * toc: false
 */
import { Badge, View, Text, Button } from 'tdesign-react-native/components';
import { Section, CodeSpace, H3, H5 } from '@src/../example/src/components';
import { NotificationIcon } from 'tdesign-icons-react-native/src';

const Demo = () => (
  <>
    <Section>
      <H3>1.类型</H3>
      <H5>红点徽标</H5>
      <CodeSpace>
        <View className="flexRow flexCenterV gapX40">
          <Badge dot>
            <Text>新徽标</Text>
          </Badge>
          <Badge dot>
            <NotificationIcon width={30} height={30} />
          </Badge>
          <Badge dot>
            <Button size="small" theme="primary" content={'按钮'} />
          </Badge>
        </View>
      </CodeSpace>
      <H5>数字徽标</H5>
      <CodeSpace>
        <View className="flexRow flexCenterV gapX40">
          <Badge count={1}>
            <Text>新徽标</Text>
          </Badge>
          <Badge count={10}>
            <NotificationIcon width={30} height={30} />
          </Badge>
          <Badge count={1000} maxCount={99}>
            <Button size="small" theme="primary" content={'按钮'} />
          </Badge>
        </View>
      </CodeSpace>
      <H5>文字徽标</H5>
      <CodeSpace>
        <View className="flexRow flexCenterV gapX40">
          <Badge count={'New'}>
            <Text>新徽标</Text>
          </Badge>
          <Badge count={'New'}>
            <NotificationIcon width={30} height={30} />
          </Badge>
          <Badge count={'New'}>
            <Button size="small" theme="primary" content={'按钮'} />
          </Badge>
        </View>
      </CodeSpace>
    </Section>
    <Section>
      <H3>2.样式</H3>
      <H5>徽标颜色</H5>
      <CodeSpace>
        <View className="flexRow flexCenterV gapX40">
          <Badge color="blue" dot>
            <Text>新徽标</Text>
          </Badge>
          <Badge color="#0052d9" count={20}>
            <NotificationIcon width={30} height={30} />
          </Badge>
          <Badge color="#e37318" count={'New'}>
            <Button size="small" theme="primary" content={'按钮'} />
          </Badge>
        </View>
      </CodeSpace>

      <H5>文字颜色</H5>
      <CodeSpace>
        <View className="flexRow flexCenterV gapX40">
          <Badge fontColor="blue" dot>
            <Text>新徽标</Text>
          </Badge>
          <Badge fontColor="#0052d9" color={'#b5c7ff'} count={20}>
            <NotificationIcon width={30} height={30} />
          </Badge>
          <Badge fontColor="#0052d9" color={'#b5c7ff'} count={'New'}>
            <Button size="small" theme="primary" content={'按钮'} />
          </Badge>
        </View>
      </CodeSpace>

      <H5>徽标自定义样式</H5>
      <CodeSpace>
        <View className="flexRow flexCenterV gapX40">
          <Badge badgeStyles={{ borderRadius: 0 }} dot>
            <Text>新徽标</Text>
          </Badge>
          <Badge badgeStyles={{ borderRadius: 0, padding: 5 }} count={20}>
            <NotificationIcon width={30} height={30} />
          </Badge>
          <Badge badgeStyles={{ borderRadius: 0, paddingHorizontal: 10, opacity: 0.8 }} count={'New'}>
            <Button size="small" theme="primary" content={'按钮'} />
          </Badge>
        </View>
      </CodeSpace>

      <H5>容器样式</H5>
      <CodeSpace>
        <View className="flexRow flexCenterV gapX40">
          <Badge style={{ backgroundColor: '#b5c7ff' }} dot>
            <Text>新徽标</Text>
          </Badge>
          <Badge style={{ borderRadius: 99, backgroundColor: '#b5c7ff' }} count={20}>
            <NotificationIcon color="#0052d9" width={30} height={30} />
          </Badge>
          <Badge style={{ opacity: 0.5 }} count={'New'}>
            <Button size="small" theme="primary" content={'按钮'} />
          </Badge>
        </View>
      </CodeSpace>
    </Section>
    <Section>
      <H3>3.数字显示规则</H3>
      <H5>最大展示数字值</H5>
      <CodeSpace>
        <View className="flexRow flexCenterV gapX40">
          <Badge count={10} maxCount={9}>
            <Text>新徽标</Text>
          </Badge>
          <Badge count={100} maxCount={99}>
            <NotificationIcon width={30} height={30} />
          </Badge>
          <Badge count={1000} maxCount={999}>
            <Button size="small" theme="primary" content={'按钮'} />
          </Badge>
        </View>
      </CodeSpace>
      <H5>展示0值</H5>
      <CodeSpace>
        <View className="flexRow flexCenterV gapX40">
          <Badge count={0} showZero>
            <Text>新徽标</Text>
          </Badge>
          <Badge count={0} showZero>
            <NotificationIcon width={30} height={30} />
          </Badge>
          <Badge count={0} showZero>
            <Button size="small" theme="primary" content={'按钮'} />
          </Badge>
        </View>
      </CodeSpace>
    </Section>
    <Section>
      <H3>4.形状</H3>
      <CodeSpace>
        <View className="flexRow flexCenterV gapX40">
          <Badge count={10}>
            <Text>新徽标</Text>
          </Badge>
          <Badge count={10} shape="round">
            <NotificationIcon width={30} height={30} />
          </Badge>
          <Badge count={10} shape="square">
            <Button size="small" theme="primary" content={'按钮'} />
          </Badge>
        </View>
      </CodeSpace>
    </Section>
    <Section>
      <H3>5.偏移值</H3>
      <CodeSpace>
        <View className="flexRow flexCenterV gapX40">
          <Badge count={10} offset={[0, 0]}>
            <Text>新徽标</Text>
          </Badge>
          <Badge count={10} offset={[0, 20]}>
            <NotificationIcon width={30} height={30} />
          </Badge>
          <Badge count={10} offset={[0, -15]}>
            <Button size="small" theme="primary" content={'按钮'} />
          </Badge>
        </View>
      </CodeSpace>
    </Section>
  </>
);
export default Demo;
