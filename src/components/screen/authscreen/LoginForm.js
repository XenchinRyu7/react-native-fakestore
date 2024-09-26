import React, {useState} from 'react';
import {View, TextInput, Alert, StyleSheet, Text} from 'react-native';
import AuthService from '../../../services/AuthService';
import Button from '../../button/Button';

const LoginForm = ({onLoginSuccess}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const result = await AuthService.login(username, password);
    if (result && result.token) {
      Alert.alert('Success', 'Login successful!');
      onLoginSuccess();
    } else {
      Alert.alert('Error', 'Failed to login.');
    }
  };

  return (
    <View style={styles.form}>
      <Text>Login</Text>
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
      <Button title="Login" onPress={handleLogin} />
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

export default LoginForm;
