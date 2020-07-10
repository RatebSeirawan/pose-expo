import {palette} from './palette';
import color from 'color';

export const colors = {
  palette,
  transparent: 'rgba(0, 0, 0, 0)',
  background: palette.snow,
  primary: palette.carnation,
  primaryDarker: palette.orangeDarker,
  line: palette.offWhite,
  text: palette.grey51,
  dim: palette.lightGrey,
  error: palette.carnation,
  success: palette.polo,
  warning: palette.banana,
};

export const colorsLight = {
  background: '#FFFFFF',
  primary: '#6002ee',
  text: '#121212',
  error: '#ee0290',
  success: '#90ee02',
  warning: palette.banana,
  transparent: 'rgba(0, 0, 0, 0)',
  disabled: palette.lighterGrey,
};

export const colorsDark = {
  background: '#121212',
  primary: color('#6002ee').whiten(0.2).rgb().string(),
  text: '#FFFFFF',
  error: '#ee6002',
  success: '#90ee02',
  warning: palette.banana,
  transparent: 'rgba(0, 0, 0, 0)',
  disabled: palette.lighterGrey,
};
