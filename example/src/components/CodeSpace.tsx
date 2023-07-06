import { View } from '@src/components/Base';
import { PropsWithChildren } from 'react';

export const CodeSpace = (props: PropsWithChildren<any>) => {
  const { children } = props;
  return <View className="mt8">{children}</View>;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const CodeSpaceOnlyDoc = (props?: PropsWithChildren) => {
  return null;
};
