import color from 'color';
import DefaultTheme from './DefaultTheme';
import {colors} from './colors';
import {Theme} from '../types';

const DarkTheme: Theme = {
  ...DefaultTheme,
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    primary: '#BB86FC',
    accent: '#03dac6',
    background: '#121212',
    surface: '#121212',
    error: '#CF6679',
    onBackground: '#FFFFFF',
    onSurface: '#FFFFFF',
    text: colors.palette.white,
    disabled: color(colors.palette.white).alpha(0.38).rgb().string(),
    placeholder: color(colors.palette.white).alpha(0.54).rgb().string(),
    backdrop: color(colors.palette.white).alpha(0.5).rgb().string(),
    notification: colors.primary,
  },
};

export default DarkTheme;
