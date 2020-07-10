import {Platform} from 'react-native';
import {normalize} from './mixins';

export const typography = {
  regular: Platform.select({ios: 'Roboto', android: 'Inter-Regluar'}),
  medium: Platform.select({ios: 'Roboto', android: 'Inter-Medium'}),
  bold: Platform.select({ios: 'Roboto', android: 'Inter-Bold'}),
  thin: Platform.select({ios: 'Roboto', android: 'Inter-Thin'}),
  light: Platform.select({ios: 'Roboto', android: 'Inter-Thin'}),
};

export const fontSize = {
  xxsmall: normalize(10),
  xsmall: normalize(12),
  small: normalize(14),
  medium: normalize(18),
  large: normalize(22),
  xlarge: normalize(24),
  xxlarge: normalize(32),
  huge: normalize(38),
};

export type Sizes = typeof fontSize;
export type Typography = typeof typography;
