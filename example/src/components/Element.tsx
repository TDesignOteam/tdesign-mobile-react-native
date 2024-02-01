import { Text } from '@src/components/Base';
import { PropsWithChildren } from 'react';

export const H1 = (props: PropsWithChildren<any>) => {
  const { children } = props;
  return <Text className="text1b fontGray1 mt10">{children}</Text>;
};

export const H2 = (props: PropsWithChildren<any>) => {
  const { children } = props;
  return <Text className="text2b fontGray1 mt10">{children}</Text>;
};

export const H3 = (props: PropsWithChildren<any>) => {
  const { children } = props;
  return <Text className="text3b fontGray1 mt8">{children}</Text>;
};

export const H4 = (props: PropsWithChildren<any>) => {
  const { children } = props;
  return <Text className="text4b fontGray1 mt6">{children}</Text>;
};

export const H5 = (props: PropsWithChildren<any>) => {
  const { children } = props;
  return <Text className="text5b fontGray1 mt4">{children}</Text>;
};

export const P = (props: PropsWithChildren<any>) => {
  const { children } = props;
  return <Text className="mt4">{children}</Text>;
};
