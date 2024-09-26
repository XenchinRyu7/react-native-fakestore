import React, {useState, useEffect} from 'react';
import {View, TextInput, Button, StyleSheet, Alert} from 'react-native';
import ProductService from '../../../services/ProductService';

const ProductForm = ({route, navigation}) => {
  const {product} = route.params || {};
  const [productData, setProductData] = useState({
    title: '',
    price: '',
    description: '',
  });

  useEffect(() => {
    if (product) {
      setProductData(product);
    }
  }, [product]);

  const handleChange = (name, value) => {
    setProductData({...productData, [name]: value});
  };

  const handleSubmit = async () => {
    if (product) {
      const result = await ProductService.createProduct(product);
      if (result) {
        Alert.alert('Success', 'Insert Successful!');
      } else {
        Alert.alert('Error', 'Failed to delete.');
      }
    } else {
      const result = await ProductService.updateProduct(
        product.id,
        productData,
      );
      if (result) {
        Alert.alert('Success', 'Update Successful!');
      } else {
        Alert.alert('Error', 'Failed to update.');
      }
    }
    navigation.goBack();
  };

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={productData.title}
        onChangeText={text => handleChange('title', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Price"
        value={productData.price}
        onChangeText={text => handleChange('price', text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={productData.description}
        onChangeText={text => handleChange('description', text)}
      />
      <Button
        title={product ? 'Update Product' : 'Create Product'}
        onPress={handleSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 4,
  },
});

export default ProductForm;
