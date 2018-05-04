import React, { Component } from 'react';
import {  View, Text, Button } from 'react-native';

import { StackNavigator } from "react-navigation";
import HomeScreen from './HomeScreen';

class LoginScreen extends Component {
  render() {
    return (
      <View>
         <Text> This is a login screen </Text>
         <Button onPress={() => this.props.navigation.navigate("HomeScreen")} title="Go to home screen" />
      </View>
    );
  }
}

const LoginScreenStackNavigator = StackNavigator({
   LoginScreen: {
      screen: LoginScreen
   },
   HomeScreen: {
      screen: HomeScreen
   }
});

export default LoginScreenStackNavigator;