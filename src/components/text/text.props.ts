import {TextStyle, TextProps as TextProperties} from 'react-native';
import {TextPresets, ColorPresets} from './text.presets';
import {Spacing} from 'theme/spacing';

export interface TextProps extends TextProperties {
  children?: React.ReactNode;
  tx?: string;
  txOptions?: Record<string, unknown>;
  text?: string;
  style?: TextStyle | TextStyle[];
  preset?: TextPresets;
  color?: ColorPresets;
  margin?: Array<Spacing>;
  padding?: Array<Spacing>;
  align?: 'center' | 'left' | 'right';
  animated?: boolean;
}
