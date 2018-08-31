import React,{Component} from 'react';
import {View,Text,StyleSheet } from 'react-native';
import Tabs from 'react-native-tabs';


export default class CodeSharing  extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
          page: '',
         
        };
      }
    render(){

        const { page } = this.state;
        return(
            <View style={styles.container}>
            <Tabs
              selected={page}
              style={styles.tabbar}
              selectedStyle={{color:'red'}} onSelect={el=>this.setState({page:el.props.name})}
            >
                <Text name="dsd">List</Text>
                <Text name="dasda">Search</Text>
                
            </Tabs>
    
            {/* <Text>App</Text> */}
            <Text>{page}</Text>
          </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    tabbar: {
      backgroundColor:'white',
      height: 64,
      borderTopColor: 'red',
      borderTopWidth: 2
    }
  });