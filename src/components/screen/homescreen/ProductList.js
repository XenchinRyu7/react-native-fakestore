import React, {useEffect, useState} from 'react';
import {View, Text, Button, StyleSheet, Alert} from 'react-native';
import ProductService from '../../../services/ProductService';

const ProductList = ({navigation}) => {
  const [products, setProducts] = useState([]);

  const loadProducts = async () => {
    const data = await ProductService.getProducts();
    setProducts(data);
  };

  const handleDelete = async id => {
    const result = await ProductService.deleteProduct(id);
    if (result) {
      Alert.alert('Success', 'Delete Successful!');
    } else {
      Alert.alert('Error', 'Failed to delete.');
    }
    loadProducts();
  };

  const handleEdit = product => {
    navigation.navigate('ProductForm', {product});
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <View>
      {products.map(product => (
        <View key={product.id} style={styles.productItem}>
          <Text style={styles.productTitle}>{product.title}</Text>
          <Text>{product.price}</Text>
          <Text>{product.description}</Text>
          <Button title="Edit" onPress={() => handleEdit(product)} />
          <Button title="Delete" onPress={() => handleDelete(product.id)} />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  productItem: {
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
  },
  productTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ProductList;
