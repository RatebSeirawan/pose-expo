import {ViewStyle, TextStyle} from 'react-native';
import {BaseButtonProperties} from 'react-native-gesture-handler';
import {ButtonPresetNames, StretchPresets} from './button.presets';
import {Spacing} from 'theme/spacing';

export interface ButtonProps extends BaseButtonProperties {
  tx?: string;
  text?: string;
  style?: ViewStyle | ViewStyle[];
  stretch?: StretchPresets;
  textStyle?: TextStyle | TextStyle[];
  preset?: ButtonPresetNames;
  margin?: Array<Spacing>;
  padding?: Array<Spacing>;
  children?: React.ReactNode;
  underlayColor?: string;
  activeOpacity?: number;
}
