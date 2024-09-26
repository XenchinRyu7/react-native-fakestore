import React, {useState} from 'react';
import {View, TextInput, Alert, StyleSheet, Text} from 'react-native';
import AuthService from '../../../services/AuthService';
import Button from '../../button/Button';

const RegisterForm = ({onRegisterSuccess}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    const userData = {
      email: '${username}@gmail.com',
      username: username,
      password: password,
      name: {
        firstname: 'John',
        lastname: 'Doe',
      },
      address: {
        city: 'New York',
        street: 'Main Street',
        number: 1,
        zipcode: '10001',
        geolocation: {
          lat: '40.7128',
          long: '74.0060',
        },
      },
      phone: '123-456-7890',
    };

    const result = await AuthService.register(userData);
    if (result) {
      Alert.alert('Success', 'User registered successfully!');
      onRegisterSuccess();
    } else {
      Alert.alert('Error', 'Failed to register.');
    }
  };

  return (
    <View style={styles.form}>
      <Text>Register</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Register" onPress={handleRegister} />
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

export default RegisterForm;
