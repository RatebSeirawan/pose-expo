import {ViewStyle} from 'react-native';
import {isNil} from 'ramda';
import {colors} from 'theme/index';

export const offsets = {
  none: 0,
};

export type KeyboardOffsets = keyof typeof offsets;

export const presets = {
  fixed: {
    outer: {
      backgroundColor: colors.background,
      flex: 1,
      height: '100%',
    } as ViewStyle,
    inner: {
      justifyContent: 'flex-start',
      alignItems: 'stretch',
      height: '100%',
      width: '100%',
    } as ViewStyle,
  },

  scroll: {
    outer: {
      backgroundColor: colors.background,
      flex: 1,
      height: '100%',
    } as ViewStyle,
    inner: {justifyContent: 'flex-start', alignItems: 'stretch'} as ViewStyle,
  },
};

export type ScreenPresets = keyof typeof presets | undefined;

/**
 * Is this preset a non-scrolling one?
 *
 * @param preset The preset to check
 */
export function isNonScrolling(preset: ScreenPresets) {
  // any of these things will make you scroll
  return isNil(preset) || !preset?.length || isNil(presets[preset]) || preset === 'fixed';
}
