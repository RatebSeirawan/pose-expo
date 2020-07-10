import * as React from 'react';
import {RectButton, BorderlessButton} from 'react-native-gesture-handler';
import {Text} from 'components/text/text';
import {createPresets, stretchPresets} from './button.presets';
import {ButtonProps} from './button.props';
import {margin as m, padding as p, enhance, useTheme} from 'theme/index';

export function Button(props: ButtonProps) {
  const {
    preset = 'primary',
    tx,
    text,
    stretch = 'normal',
    style: styleOverride,
    textStyle: textStyleOverride,
    children,
    margin,
    padding,
    ...rest
  } = props;

  const {theme} = useTheme();

  const {viewPresets, textPresets} = createPresets(theme);

  const viewStyle = enhance([
    viewPresets[preset] || viewPresets.primary,
    stretchPresets[stretch] || stretchPresets.normal,
    margin && m(margin[0], margin[1], margin[2], margin[3]),
    padding && p(padding[0], padding[1], padding[2], padding[3]),
    styleOverride,
  ]);

  const textStyle = enhance([textPresets[preset] || textPresets.primary, textStyleOverride]);

  const content = children || <Text tx={tx} text={text} style={textStyle} />;

  return preset === 'text' ? (
    <BorderlessButton borderless style={viewStyle} {...rest}>
      {content}
    </BorderlessButton>
  ) : (
    <RectButton style={viewStyle} {...rest}>
      {content}
    </RectButton>
  );
}
