import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../components/screen/homescreen/HomeScreen';
import AuthScreen from '../components/screen/authscreen/AuthScreen';
import RegisterForm from '../components/screen/authscreen/RegisterForm';
import LoginForm from '../components/screen/authscreen/LoginForm';
import ProductForm from '../components/screen/homescreen/ProductForm';
import ProductList from '../components/screen/homescreen/ProductList';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AuthScreen">
        <Stack.Screen name="Login" component={LoginForm} />
        <Stack.Screen name="Register" component={RegisterForm} />
        <Stack.Screen name="AuthScreen" component={AuthScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ProductForm" component={ProductForm} />
        <Stack.Screen name="ProductList" component={ProductList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
