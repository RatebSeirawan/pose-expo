import React from 'react';
import {StatusBar} from 'react-native';
import {enableScreens} from 'react-native-screens';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {useFonts} from '@use-expo/font';
import {AppLoading} from 'expo';
import * as tf from '@tensorflow/tfjs';
import '@tensorflow/tfjs-react-native';

const BACKEND_TO_USE = 'rn-webgl';

import {RootNavigator} from 'navigation/index';

enableScreens();

const App: React.FC<Record<string, unknown>> = () => {
  const [fontsLoaded] = useFonts({
    'Inter-Black': require('fonts/Inter-Black.ttf'),
    'Inter-Medium': require('fonts/Inter-Medium.ttf'),
    'Inter-Regular': require('fonts/Inter-Regular.ttf'),
    'Inter-Thin': require('fonts/Inter-Thin.ttf'),
    'Inter-Bold': require('fonts/Inter-Bold.ttf'),
  });

  React.useEffect(() => {
    (async () => {
      await tf.setBackend(BACKEND_TO_USE);
      await tf.ready();
      console.warn('ready');
    })();
  });

  return !fontsLoaded ? (
    <AppLoading />
  ) : (
    <SafeAreaProvider>
      <StatusBar
        barStyle={false ? 'light-content' : 'dark-content'}
        backgroundColor={'#fff'}
        animated={true}
      />
      <RootNavigator />
    </SafeAreaProvider>
  );
};

export default App;
