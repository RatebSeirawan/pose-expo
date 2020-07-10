import {StackNavigationProp} from '@react-navigation/stack';

export type PrimaryParamList = {
  Welcome: undefined;
  Model: undefined;
};

export type PrimaryNavigation<T extends keyof PrimaryParamList> = StackNavigationProp<
  PrimaryParamList,
  T
>;
