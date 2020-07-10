import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {WelcomeScreen} from 'screens/welcome-screen';
import {ModelScreen} from 'screens/model/model';

import {PrimaryParamList} from './types';

const {Navigator, Screen} = createStackNavigator<PrimaryParamList>();

export default () => {
  return (
    <Navigator initialRouteName={'Welcome'} headerMode="screen">
      <Screen name={'Welcome'} component={WelcomeScreen} options={{header: () => null}} />
      <Screen name={'Model'} component={ModelScreen} options={{header: () => null}} />
    </Navigator>
  );
};
