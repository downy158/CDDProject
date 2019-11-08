import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

const MainButton = props => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={{width: 200, height: 50, backgroundColor: 'skyblue', alignItems:'center', justifyContent: 'center'}}>
        <Text style={{textAlign: 'center'}}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default MainButton;