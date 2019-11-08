import React from 'react'
import { View } from 'react-native'
import { storiesOf } from '@storybook/react-native';
import MainButton from './MainButton';
import { action } from '@storybook/addon-actions';

storiesOf('components|atoms', module)
  .addDecorator(getStory => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        {getStory()}
      </View>
    );
  })
  .add('MainButton', () => {
    return (
        <MainButton title={'메인버튼'} onPress={action('onPress MainButton')} />
    );
  })