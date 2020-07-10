import color from 'color';
import {colors} from './colors';
import configureFonts from './fonts';

import {Theme} from '../types';

const DefaultTheme: Theme = {
  dark: false,
  roundness: 4,
  colors: {
    primary: colors.primary,
    accent: colors.primary,
    background: colors.background,
    surface: colors.palette.white,
    error: colors.error,
    text: colors.palette.matterhorn,
    onBackground: '#000000',
    onSurface: '#000000',
    disabled: color(colors.palette.black).alpha(0.26).rgb().string(),
    placeholder: color(colors.palette.black).alpha(0.54).rgb().string(),
    backdrop: color(colors.palette.black).alpha(0.5).rgb().string(),
    notification: colors.primary,
  },
  fonts: configureFonts(),
  animation: {
    scale: 1.0,
  },
};

export default DefaultTheme;
