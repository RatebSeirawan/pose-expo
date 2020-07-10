import {Dimensions, Platform, PixelRatio} from 'react-native';
const {width, height} = Dimensions.get('window');
import {spacing, Spacing} from 'theme/spacing';

type Padding = {
  paddingTop: number;
  paddingRight: number;
  paddingBottom: number;
  paddingLeft: number;
};

type Margin = {
  marginTop: number;
  marginRight: number;
  marginBottom: number;
  marginLeft: number;
};

export type Directions<T> = (t: Spacing, r?: Spacing, b?: Spacing, l?: Spacing) => T;

export const margin: Directions<Margin> = (t, r = t, b = t, l = r) => ({
  marginTop: spacing[t],
  marginRight: spacing[r],
  marginBottom: spacing[b],
  marginLeft: spacing[l],
});

export const padding: Directions<Padding> = (t, r = t, b = t, l = r) => ({
  paddingTop: spacing[t],
  paddingRight: spacing[r],
  paddingBottom: spacing[b],
  paddingLeft: spacing[l],
});

const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;
const [shortDimension, longDimension] = width < height ? [width, height] : [height, width];

export const scale = (size: number) => (shortDimension / guidelineBaseWidth) * size;
export const verticalScale = (size: number) => (longDimension / guidelineBaseHeight) * size;
export const moderateScale = (size: number, factor = 0.5) => size + (scale(size) - size) * factor;

export const normalize = (size: number) => {
  const newSize = scale(size);
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
};
