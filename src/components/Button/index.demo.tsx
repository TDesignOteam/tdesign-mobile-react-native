import { View, Text, Button } from 'tdesign-react-native';

const Demo = () => (
  <View className="mb48">
    <Text className="text3 gray8">风格形式</Text>
    <Button style={{ marginTop: 10 }} content={'默认'} />
    <Button style={{ marginTop: 10 }} variant="outline" content={'variant="outline"'} />
    <Button style={{ marginTop: 10 }} variant="text" content={'variant="text"'} />
    <Button style={{ marginTop: 10 }} theme="primary" content={'theme="primary"'} />
    <Button style={{ marginTop: 10 }} theme="primary" variant="outline" content={'variant="outline"'} />
    <Button style={{ marginTop: 10 }} theme="primary" variant="text" content={'variant="text"'} />
    <Button style={{ marginTop: 10 }} theme="danger" content={'theme="danger"'} />
    <Button style={{ marginTop: 10 }} theme="danger" variant="outline" content={'variant="outline"'} />
    <Button style={{ marginTop: 10 }} theme="danger" variant="text" content={'variant="text"'} />

    <Text className="text3 gray8 mt12">尺寸</Text>
    <Button style={{ marginTop: 10 }} theme="primary" content={'默认'} />
    <Button style={{ marginTop: 10 }} size="small" theme="primary" content={'size="small"'} />
    <Button style={{ marginTop: 10 }} size="large" theme="primary" content={'size="large"'} />

    <Text className="text3 gray8 mt12">状态</Text>
    <Button style={{ marginTop: 10 }} disabled theme="primary" content={'disabled'} />
    <Button style={{ marginTop: 10 }} disabled size="small" theme="primary" content={'disabled'} />
    <Button style={{ marginTop: 10 }} disabled size="large" theme="primary" content={'disabled'} />

    <Text className="text3 gray8 mt12">带图标</Text>
    <Button style={{ marginTop: 10 }} iconDirection="column" theme="primary" variant="text" content={'带图标'} />

    <Text className="text3 gray8 mt12">group</Text>
    <View className="flexRow">
      <Button style={{ flex: 1, marginRight: 16 }} theme="primary" content={'主按钮'} />
      <Button style={{ flex: 1 }} theme="primary" variant="outline" content={'次按钮'} />
    </View>
    <View className="flexRow mt12">
      <Button style={{ flex: 1, marginLeft: 16 }} iconDirection="column" variant="text" content={'关注'} />
      <Button style={{ flex: 1, marginRight: 16 }} iconDirection="column" variant="text" content={'转化'} />
      <Button style={{ flex: 2 }} theme="primary" variant="outline" content={'新增约见记录'} />
    </View>
  </View>
);
export default Demo;
