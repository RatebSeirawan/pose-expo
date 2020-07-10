import * as React from 'react';
import color from 'color';
import {StyleSheet, View, ViewStyle, StyleProp} from 'react-native';
import {Theme, useTheme} from 'theme/ThemeContext';

interface Props {
  /**
   *  Whether divider has a left inset.
   */
  inset?: boolean;
  style?: StyleProp<ViewStyle>;
  /**
   * @optional
   */
  theme: Theme;
}

export const Divider = (props: Props) => {
  const {inset, style, ...rest} = props;
  const theme = useTheme();

  const {isDark} = theme;
  return (
    <View {...rest} style={[isDark ? styles.dark : styles.light, inset && styles.inset, style]} />
  );
};

const styles = StyleSheet.create({
  light: {
    backgroundColor: color('#000000').alpha(0.12).rgb().string(),
    height: StyleSheet.hairlineWidth,
  },
  dark: {
    backgroundColor: color('#FFFFFF').alpha(0.12).rgb().string(),
    height: StyleSheet.hairlineWidth,
  },
  inset: {
    marginLeft: 72,
  },
});
