import React from 'react';
import {View, Image, StyleSheet, Dimensions, Text} from 'react-native';

const ProductCard = ({product}) => {
  return (
    <View
      style={styles.container}>
      <Image source={{uri: product.imgURL}} style={[product.inStock ? styles.imageInStock : styles.imageOutStock]} />

      <View >
        <Text>{product.title}</Text>
        <View style={{flexDirection:'row', justifyContent:"space-between"}}>
          <Text style={{fontWeight: 'bold',}}>{product.price}</Text>
          <Text style={product.inStock ? styles.inStockText : styles.outStockText}>Out Of Stock</Text>
        </View>
      </View>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    padding: 10,
    margin: 5,
    borderRadius: 10,
    borderColor: '#e0e0e0',
  },
  imageInStock: {
    height: Dimensions.get('window').height / 4,
    resizeMode: 'contain',
    flex:1
  },
  imageOutStock: {
    height: Dimensions.get('window').height / 4,
    resizeMode: 'contain',
    flex:1,
    opacity:0.2
  },
  outStockText: {
    color: 'red', 
    fontWeight:'bold',
  },
  inStockText: {
    display:'none'

  }
});
