import React, {Component} from 'react';
 
import { View, Text } from 'react-native';
 
export default class Details extends Component {
 
  static navigationOptions =
  {
     title: 'Details Activity',
  };
 
  render() {
 
    return (
 
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
 
        <Text>Details Activity Screen</Text>
 
      </View>
 
    );
  }
}