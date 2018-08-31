import React, { Component } from "react";
import { View, ActivityIndicator, FlatList } from "react-native";

import ProductListItem from "./ProductListItem";


class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = { products: [], isLoading: true,page:1,limit:20 };
  }

  async componentDidMount() {
      let {page,limit}=this.state;
    let response = await fetch(`http://192.168.56.1:4000/products?_page=${page}&_limit=${limit}`);
    let products = await response.json();
    this.setState({ products, isLoading: false,page:page+1 });
  }

  _renderItem({ item: product }) {
    return <ProductListItem product={product} />;
  }

  _keyExtractor(p, i) {
    return `${p.id}`;
  }

  async _getMore() {
    let { page, limit } = this.state;
    console.log(
        `http://192.168.56.1:4000/products?_page=${page}&_limit=${limit}`
    );
    let response = await fetch(
        `http://192.168.56.1:4000/products?_page=${page}&_limit=${limit}`
    );
    let products = await response.json();
    this.setState({
      products: [...this.state.products, ...products],
      isLoading: false,
      page: page + 1
    });
  }

  render() {
    const { products, isLoading } = this.state;
    return (
      <View>
        {isLoading && <ActivityIndicator size="large" color="green" />}
        <FlatList
          data={products}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
          onEndReachedThreshold={0.5}
          onEndReached={()=>this._getMore()}
        />
      </View>
    );
  }
}

export default ProductList;

/*<ScrollView>
{isLoading&&<ActivityIndicator size="large" color="green" />}
{
    products.map(p=>(
        <Text key={p.id}>{p.title}</Text>
    ))
}
</ScrollView> */

// "http://192.168.56.1:4000/products"
