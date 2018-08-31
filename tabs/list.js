import React,{Component} from 'react';
import {View,Text,StyleSheet } from 'react-native';
import ProductList from '../ProductList/ProductList';


export default class Screen1  extends Component{
   
    render(){
      return(
        <ProductList />
      );
        
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    welcome: {
      backgroundColor:'white',
      height: 64,
      borderTopColor: 'red',
      borderTopWidth: 2
    }
  });