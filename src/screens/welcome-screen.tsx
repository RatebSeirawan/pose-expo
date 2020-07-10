import React from 'react';
import {Button, Text, Screen, Flex} from 'components/index';
import {PrimaryNavigation} from 'navigation/types';

interface Props {
  navigation: PrimaryNavigation<'Welcome'>;
}

export const WelcomeScreen: React.FC<Props> = ({navigation}) => {
  return (
    <Screen padding={[, '24px']} justify="center" align="center">
      <Flex margin={[, '24px', '32px']}>
        <Text margin={[, , '12px']} preset="display1" color="primay">
          {'PoseNet Demo'}
        </Text>
        <Text tx="welcome.body" align="center" />
      </Flex>
      <Button
        margin={[, , '16px']}
        stretch="full"
        onPress={() => {
          navigation.navigate('Model');
        }}
        text="Load Model"
      />
    </Screen>
  );
};
