import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import { Bacgroundspecial } from './register';

const LoginScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
    <Bacgroundspecial/>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.welcomeText}>Welcome Back!</Text>
      <Text style={styles.subText}>Search for any missing item with our app</Text>
      
      <TextInput style={styles.input} placeholder="Enter your E-mail" keyboardType="email-address" />
      <TextInput style={styles.input} placeholder="Enter Password" secureTextEntry />
      
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot Password</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.loginButton}  onPress={() => navigation.navigate('Dashboard')} >
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
      
      <Text style={styles.registerText}>
        Don’t have an account?<TouchableOpacity onPress={() => navigation.navigate('Signup')} ><Text style={styles.registerLink}>Register</Text></TouchableOpacity> 
      </Text>
      <Bacgroundspecial/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFBF1',
    padding: 20,
    justifyContent: 'center',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
  },
  input: {
    height: 50,
    borderColor: '#B7E4C7',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
    fontSize: 16,
  },
  forgotPassword: {
    fontSize: 16,
    color: '#B7E4C7',
    textAlign: 'center',
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: '#81C784',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  loginButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  registerText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#A1A1A1',
  },
  registerLink: {
    color: '#B7E4C7',
    fontWeight: 'bold',
  },
});

export default LoginScreen;
