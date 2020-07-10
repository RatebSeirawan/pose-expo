import React from 'react';
import {StatusBar} from 'react-native';
import {store, persistor} from 'store/index';
import {Provider} from 'react-redux';
import {enableScreens} from 'react-native-screens';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {PersistGate} from 'redux-persist/integration/react';
import {RootNavigator} from 'navigation/index';
import {ThemeProvider} from 'theme/ThemeContext';

enableScreens();

export const App: React.FC<unknown> = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
          <ThemeProvider isDark={true}>
            <StatusBar
              barStyle={false ? 'light-content' : 'dark-content'}
              backgroundColor={'#fff'}
              animated={true}
            />
            <RootNavigator />
          </ThemeProvider>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
};
