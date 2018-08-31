import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  View,
  Text,
  Image
  } from "react-native";
import {FontAwesome,Ionicons} from "@expo/vector-icons";



function ProductListItem({product}){
return (<View style={{
  flex:1,
  flexDirection:"row",
  marginRight:50,
  marginLeft:50
}}
  >
<Image 
style={{width:100,height:100}}
source={{uri:`http://192.168.56.1:4000/images/${product.image}`}}
resizeMode="contain"
/>
<View style={{ flex: 1, flexDirection: "row" }}>
<Text
style={{  justifyContent:"space-between", backgroundColor:'#D3D3D3',marginBottom: 25,
overflow:"hidden" }}
key={product.id}
>
{product.title}
</Text>
<Ionicons 
name="md-heart" 
size={32} 
color="#00ff80"
style={{ marginRight: 30 }}
/>
</View>
</View>
);
}

ProductListItem.propTypes = {
  product: PropTypes.object.isRequired
};

export default ProductListItem;