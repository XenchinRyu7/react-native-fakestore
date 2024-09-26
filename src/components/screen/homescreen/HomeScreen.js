import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Card, Button} from '@rneui/themed';

const HomeScreen = ({navigation}) => {
  useEffect(() => {
    navigation.setOptions({
      title: 'Dashboard',
    });
  }, [navigation]);

  navigation.reset({
    index: 0,
    routes: [{name: 'HomeScreen'}],
  });

  return (
    <SafeAreaView style={styles.container}>
      <Card>
        <Card.Title>List Product</Card.Title>
        <Button
          size="sm"
          type="clear"
          onPress={() => navigation.navigate('ProductList')}
          title={'>'}
        />
      </Card>
      <Card>
        <Card.Title>Add Product</Card.Title>
        <Button
          size="sm"
          type="clear"
          onPress={() => navigation.navigate('ProductForm')}
          title={'>'}
        />
      </Card>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default HomeScreen;
