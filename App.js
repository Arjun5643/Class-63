import React, { Component } from 'react';
import { TextInput } from 'react-native';
import { StyleSheet, View} from 'react-native';
import HomeScreen from './screens/HomeScreen';

export default class App extends Component{
  render(){
    return(
      <View style={{flex:1}}>
        <HomeScreen />
        
      </View>
    )
  }
}
