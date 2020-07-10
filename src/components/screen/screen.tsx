import * as React from 'react';
import {KeyboardAvoidingView, Platform, ScrollView, StatusBar, View} from 'react-native';
import {useSafeArea} from 'react-native-safe-area-context';
import {ScreenProps} from './screen.props';
import {isNonScrolling, offsets, presets} from './screen.presets';
import {margin as m, padding as p, enhance, useTheme} from 'theme/index';

const isIos = Platform.OS === 'ios';

function ScreenWithoutScrolling(props: ScreenProps) {
  const {
    margin,
    padding,
    align,
    justify,
    backgroundColor,
    style,
    children,
    unsafe,
    statusBar,
  } = props;
  const insets = useSafeArea();

  const outerStyles = enhance([
    presets.fixed.outer,
    margin && m(margin[0], margin[1], margin[2], margin[3]),
    padding && p(padding[0], padding[1], padding[2], padding[3]),
    backgroundColor && {backgroundColor},
    style,
  ]);

  const innerStyle = enhance([
    presets.fixed.inner,
    justify && {justifyContent: justify},
    align && {alignItems: align},
    {paddingTop: unsafe ? 0 : insets.top},
    style,
  ]);

  return (
    <KeyboardAvoidingView
      style={outerStyles}
      behavior={isIos ? 'padding' : undefined}
      keyboardVerticalOffset={offsets[props.keyboardOffset || 'none']}>
      <StatusBar barStyle={statusBar || 'dark-content'} />
      <View style={innerStyle}>{children}</View>
    </KeyboardAvoidingView>
  );
}

function ScreenWithScrolling(props: ScreenProps) {
  const insets = useSafeArea();
  const preset = presets.scroll;
  const style = props.style || {};
  const backgroundStyle = props.backgroundColor ? {backgroundColor: props.backgroundColor} : {};
  const insetStyle = {paddingTop: props.unsafe ? 0 : insets.top};

  return (
    <KeyboardAvoidingView
      style={[preset.outer, backgroundStyle]}
      behavior={isIos ? 'padding' : undefined}
      keyboardVerticalOffset={offsets[props.keyboardOffset || 'none']}>
      <StatusBar barStyle={props.statusBar || 'light-content'} />
      <View style={[preset.outer, backgroundStyle, insetStyle]}>
        <ScrollView
          style={[preset.outer, backgroundStyle]}
          contentContainerStyle={[preset.inner, style]}>
          {props.children}
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
}

/**
 * The starting component on every screen in the app.
 *
 * @param props The screen props
 */
export function Screen(props: ScreenProps) {
  const {
    theme: {colors},
  } = useTheme();

  const bg = props.backgroundColor ? props.backgroundColor : colors.background;

  if (isNonScrolling(props.preset)) {
    return <ScreenWithoutScrolling {...props} backgroundColor={bg} />;
  } else {
    return <ScreenWithScrolling {...props} backgroundColor={bg} />;
  }
}
