import * as React from 'react';
import {View} from 'react-native';
import {presets, Presets} from './flex.presets';
import {FlexProps} from './flex.props';
import {margin as m, padding as p, enhance} from 'theme/index';

export function Flex(props: FlexProps) {
  const {
    preset = 'default',
    wrap,
    align,
    justify,
    self,
    children,
    margin,
    padding,
    style: styleOverride,
    ...rest
  } = props;

  const style = enhance([
    presets[preset] || presets.default,
    margin && m(margin[0], margin[1], margin[2], margin[3]),
    padding && p(padding[0], padding[1], padding[2], padding[3]),
    justify && {justifyContent: justify},
    align && {alignItems: align},
    self && {alignSelf: self},
    wrap && {flexWrap: wrap},
    styleOverride,
  ]);

  return (
    <View {...rest} style={style}>
      {children}
    </View>
  );
}
