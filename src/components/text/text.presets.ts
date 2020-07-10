import {TextStyle} from 'react-native';
import {typography, fontSize} from 'theme/index';
import {Theme} from 'theme/ThemeContext';
import color from 'color';

export const createPresets = (theme: Theme) => {
  const {colors} = theme;

  const BASE: TextStyle = {
    fontFamily: typography.medium,
    color: colors.text,
    fontWeight: '500',
    fontSize: fontSize.medium,
    textAlign: 'left',
  };

  const BOLD: TextStyle = {
    fontWeight: '900',
    fontFamily: typography.bold,
    color: color(colors.text).alpha(0.87).rgb().string(),
  };

  const textPresets = {
    default: BASE,

    bold: {...BASE, ...BOLD} as TextStyle,

    title: {
      ...BOLD,
      fontSize: fontSize.large,
    } as TextStyle,

    header: {
      ...BASE,
      ...BOLD,
      fontSize: fontSize.xlarge,
    } as TextStyle,

    display1: {
      ...BOLD,
      fontSize: fontSize.xxlarge,
    } as TextStyle,

    display2: {
      ...BOLD,
      fontSize: fontSize.huge,
    } as TextStyle,

    caption: {
      fontFamily: typography.regular,
      fontSize: fontSize.small,
    } as TextStyle,
  };

  const colorPresets = {
    default: {color: colors.disabled},
    primay: {color: colors.primary},
    secondary: {color: colors.primary},
    lightGrey: {color: colors.disabled},
  };

  return {textPresets, colorPresets};
};

/**
 * A list of preset names.
 */
export type TextPresets =
  | 'default'
  | 'bold'
  | 'title'
  | 'header'
  | 'display1'
  | 'display2'
  | 'caption';

export type ColorPresets = 'default' | 'primay' | 'secondary' | 'light' | 'dark' | 'lightGrey';
