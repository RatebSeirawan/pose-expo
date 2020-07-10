// @ts-nocheck
import * as React from 'react';
import {Text as ReactNativeText, I18nManager, Animated} from 'react-native';
import {createPresets} from './text.presets';
import {TextProps} from './text.props';
import {margin as m, padding as p, enhance, useTheme} from 'theme/index';

export function Text(props: TextProps) {
  const {
    preset = 'default',
    color = 'default',
    txOptions,
    text,
    children,
    margin,
    padding,
    align = 'left',
    animated,
    style: styleOverride,
    ...rest
  } = props;

  const writingDirection = I18nManager.isRTL ? 'rtl' : 'ltr';

  const content = text || children;

  const {theme} = useTheme();

  const {textPresets, colorPresets} = createPresets(theme);

  const style = enhance([
    textPresets[preset] || textPresets.default,
    colorPresets[color],
    margin && m(margin[0], margin[1], margin[2], margin[3]),
    padding && p(padding[0], padding[1], padding[2], padding[3]),
    {writingDirection, textAlign: align},
    styleOverride,
  ]);

  return animated ? (
    <Animated.Text {...rest} style={style}>
      {content}
    </Animated.Text>
  ) : (
    <ReactNativeText {...rest} style={style}>
      {content}
    </ReactNativeText>
  );
}
