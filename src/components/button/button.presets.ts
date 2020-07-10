import {ViewStyle, TextStyle, StyleSheet, View} from 'react-native';
import {spacing, typography, fontSize} from 'theme/index';
import {Theme} from 'theme/ThemeContext';

const {hairlineWidth} = StyleSheet;

const BASE_VIEW: ViewStyle = {
  borderRadius: 4,
  justifyContent: 'center',
  alignItems: 'center',
};

const BASE_TEXT: TextStyle = {
  fontWeight: '900',
  fontFamily: typography.bold,
  fontSize: fontSize.small,
};

export const createPresets = (theme: Theme) => {
  const {colors} = theme;

  const viewPresets = {
    primary: {...BASE_VIEW, backgroundColor: colors.primary} as ViewStyle,
    secondary: {
      ...BASE_VIEW,
      backgroundColor: colors.transparent,
      borderWidth: hairlineWidth * 4,
      borderColor: colors.primary,
    } as ViewStyle,
    text: {
      ...BASE_VIEW,
      backgroundColor: colors.disabled,
    } as ViewStyle,
    disabled: {
      ...BASE_VIEW,
      backgroundColor: colors.disabled,
    } as ViewStyle,
  };

  const textPresets = {
    primary: {...BASE_TEXT, color: colors.background} as TextStyle,
    secondary: {...BASE_TEXT, color: colors.primary} as TextStyle,
    text: {...BASE_TEXT, color: colors.primary} as TextStyle,
    disabled: {...BASE_TEXT, color: colors.disabled} as TextStyle,
  };

  return {viewPresets, textPresets};
};

export const stretchPresets = {
  full: {
    paddingVertical: spacing['16px'],
    alignSelf: 'stretch',
  } as ViewStyle,
  compact: {
    paddingVertical: spacing['16px'],
    paddingHorizontal: spacing['16px'],
  } as ViewStyle,
  normal: {
    paddingVertical: spacing['16px'],
    paddingHorizontal: spacing['64px'],
  } as ViewStyle,
};

/**
 * A list of preset names.
 */
export type ButtonPresetNames = 'primary' | 'secondary' | 'text' | 'disabled';
export type StretchPresets = keyof typeof stretchPresets;
