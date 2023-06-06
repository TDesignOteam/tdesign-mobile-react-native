import { View } from '@src/components/Base';
import { PropsWithChildren } from 'react';

export const CodeSpace = (props: PropsWithChildren<any>) => {
  const { children } = props;
  return <View className="mt8">{children}</View>;
};
