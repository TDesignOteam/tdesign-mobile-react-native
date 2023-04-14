import { View, Text } from '@src/components';
// import { useTheme } from '@src/theme';
import { ReactNode } from 'react';
import { TextStyle, TouchableOpacity } from 'react-native';

interface ListItemProps {
  /**
   * 上下间距大小 normal-16 small-10
   * @default normal
   */
  size?: 'normal' | 'small';
  /**
   * label值
   */
  label?: string | ReactNode;
  /**
   * label style
   */
  labelStyle?: TextStyle;
  /**
   * label icon
   */
  labelIcon?: ReactNode;
  /**
   * value值
   */
  value?: string | ReactNode;
  /**
   * value style
   */
  valueStyle?: TextStyle;
  /**
   * value的排列位置
   * @default column
   */
  valueLayout?: 'vertical' | 'horizontal';
  /**
   * 点击回调
   */
  onPressItem?: () => void;
  /**
   * 是否展示border
   */
  hideBorder?: boolean;
  /**
   * 是否展示右侧箭头Icon
   */
  hideArrow?: boolean;
}

const ListItem = (props: ListItemProps) => {
  const { size, label, labelStyle, labelIcon, value, valueStyle, valueLayout, hideBorder, onPressItem, hideArrow } =
    props;

  // const { theme } = useTheme();

  const onPress = () => {
    onPressItem?.();
  };

  return (
    <TouchableOpacity onPress={() => onPress()}>
      <View className="pl16">
        <View className={`flexRow flexBetween pr16 ${hideBorder ? '' : 'bb1'} ${size === 'small' ? 'py8' : 'py16'}`}>
          <View className="flex1 flexRow flexCenterV mr16">
            {labelIcon ? <View className="mr8">{labelIcon}</View> : null}
            <Text className="text3 fontGray1" style={[labelStyle || {}]}>
              {label}
            </Text>
          </View>
          <View className={`${valueLayout === 'vertical' ? 'flexCol flexEnd' : 'flexRow flexCenterV'}`}>
            <Text className="text3" style={[valueStyle || {}]}>
              {value}
            </Text>
            {onPressItem && !hideArrow ? (
              <View className="ml8">
                {/* <ChevronRightIcon color={theme.colors.fontGray2} width={20} height={20} /> */}
                <Text>{'＞'}</Text>
              </View>
            ) : null}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export { ListItem };
