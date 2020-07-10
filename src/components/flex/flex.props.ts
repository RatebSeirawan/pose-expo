import {ViewStyle, ViewProps, FlexAlignType} from 'react-native';
import {Presets} from './flex.presets';
import {Spacing} from 'theme/index';

export interface FlexProps extends ViewProps {
  children?: React.ReactNode;
  preset?: Presets;
  style?: ViewStyle | ViewStyle[];
  wrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
  align?: FlexAlignType;
  justify?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  self?: 'auto' | FlexAlignType;
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  flex?: number;
  backgroundColor?: string;
  margin?: Array<Spacing>;
  padding?: Array<Spacing>;
}
