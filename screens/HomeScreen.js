import React, { Component } from 'react';
import {  View, Text, } from 'react-native';

import { TabNavigator } from "react-navigation";

class HomeScreen extends Component {
   render() {
      return (
         <View>
            <Text> This is a home screen </Text>
         </View>
      );
   }
}

class Notifications extends Component {
   render() {
      return (
         <View>
            <Text>This is a Notifications tab</Text>
         </View>
      );
   }
}

const HomeScreenTabNavigator = TabNavigator({
   HomeScreen: {
      screen: HomeScreen
   },
   Notifications: {
      screen: Notifications
   }
},
{
   animationEnabled: true
});

export default HomeScreenTabNavigator;