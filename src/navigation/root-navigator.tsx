import React from 'react';
import {NavigationContainer, NavigationContainerRef} from '@react-navigation/native';

import Primary from './primary-navigator';

export const RootNavigator = React.forwardRef<
  NavigationContainerRef,
  Partial<React.ComponentProps<typeof NavigationContainer>>
>((props, ref) => {
  return (
    <NavigationContainer {...props} ref={ref}>
      <Primary />
    </NavigationContainer>
  );
});

RootNavigator.displayName = 'RootNavigator';
