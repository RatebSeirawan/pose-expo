import {Platform, PlatformOSType} from 'react-native';
import {normalize} from '../mixins';
import {Fonts} from '../types';

const fontConfig = {
  web: {
    regular: {
      fontFamily: 'Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif',
      fontWeight: '400',
    },
    medium: {
      fontFamily: 'Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif',
      fontWeight: '500',
    },
    light: {
      fontFamily: 'Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif',
      fontWeight: '300',
    },
    thin: {
      fontFamily: 'Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif',
      fontWeight: '100',
    },
  },
  ios: {
    regular: {
      fontFamily: 'Roboto',
      fontWeight: '400',
    },
    medium: {
      fontFamily: 'Roboto',
      fontWeight: '500',
    },
    light: {
      fontFamily: 'Roboto',
      fontWeight: '300',
    },
    thin: {
      fontFamily: 'Roboto',
      fontWeight: '100',
    },
  },
  default: {
    regular: {
      fontFamily: 'Roboto-Regluar',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'Roboto-Medium',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'Roboto-Light',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'Roboto-Thin',
      fontWeight: 'normal',
    },
    bold: {
      fontFamily: 'Roboto-Bold',
      fontWeight: 'normal',
    },
  },
};

export default function configureFonts(
  config?: {[platform in PlatformOSType | 'default']?: Fonts},
): Fonts {
  const fonts = Platform.select({...fontConfig, ...config}) as Fonts;
  return fonts;
}

export const sizes = {
  xxsmall: normalize(10),
  xsmall: normalize(12),
  small: normalize(14),
  medium: normalize(18),
  large: normalize(22),
  xlarge: normalize(24),
  xxlarge: normalize(32),
  huge: normalize(40),
};

export type Sizes = typeof sizes;
