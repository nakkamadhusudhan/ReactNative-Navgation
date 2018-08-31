import React from 'react';
import { StyleSheet, View } from 'react-native';
import {createMaterialTopTabNavigator} from "react-navigation";


import Screen1 from './tabs/list';
import Screen2 from './tabs/search';

export default createMaterialTopTabNavigator({
  List: {screen:Screen1},
  Search: {screen:Screen2}
 }, {
  tabBarPosition:'bottom',
  animationEnabled:true,
  tabBarOptions:{
    activeTintColor:"yellow",
  }
 })
