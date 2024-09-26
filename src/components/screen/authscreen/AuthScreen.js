import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import Button from '../../button/Button';

const AuthScreen = ({navigation}) => {
  const [isLogin, setIsLogin] = useState(true);

  useEffect(() => {
    navigation.setOptions({
      title: isLogin ? 'Login' : 'Register',
    });
  }, [isLogin, navigation]);

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
  };

  const handleLoginSuccess = () => {
    navigation.navigate('HomeScreen');
  };

  const handleRegisterSuccess = () => {
    setIsLogin(true);
    navigation.reset({
      index: 0,
      routes: [{name: 'AuthScreen'}],
    });
  };

  return (
    <View style={styles.container}>
      {isLogin ? (
        <LoginForm onLoginSuccess={handleLoginSuccess} />
      ) : (
        <RegisterForm onRegisterSuccess={handleRegisterSuccess} />
      )}
      <Button title={isLogin ? 'Register' : 'Login'} onPress={toggleAuthMode} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    margin: 16,
    justifyContent: 'center',
  },
});

export default AuthScreen;
