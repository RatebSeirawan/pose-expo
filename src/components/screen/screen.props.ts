import {ViewStyle, FlexAlignType} from 'react-native';
import {KeyboardOffsets, ScreenPresets} from './screen.presets';
import {Spacing} from 'theme/spacing';

export interface ScreenProps {
  children?: React.ReactNode;
  style?: ViewStyle;
  preset?: ScreenPresets;
  backgroundColor?: string;
  statusBar?: 'light-content' | 'dark-content';
  unsafe?: boolean;
  align?: FlexAlignType;
  justify?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  margin?: Array<Spacing>;
  padding?: Array<Spacing>;
  keyboardOffset?: KeyboardOffsets;
}
