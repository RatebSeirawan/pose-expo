import {ViewStyle} from 'react-native';
import {margin, padding} from 'theme/index';

const BASE = {} as ViewStyle;

export const presets = {
  default: BASE,
};

/**
 * A list of preset names.
 */
export type Presets = keyof typeof presets;
