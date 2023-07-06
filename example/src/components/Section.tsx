import { View } from '@src/components/Base';
import { PropsWithChildren } from 'react';

export const Section = (props: PropsWithChildren<any>) => {
  const { children } = props;
  return <View className="p10">{children}</View>;
};
